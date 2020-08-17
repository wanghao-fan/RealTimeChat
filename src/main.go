package main

import (
	"encoding/json"
	"fmt" // fmt包实现了类似C语言printf和scanf的格式化I/O。格式化动作（'verb'）源自C语言但更简单。
	"net/http"

	"github.com/gorilla/websocket"
)

// map 映射，其键对应是一个指向 WebSocket 的指针，其值就是一个布尔值。我们实际上并不需要这个值，但使用的映射数据结构需要有一个映射值，这样做更容易添加和删除单项。
var clients = make(map[*websocket.Conn]bool)

// 由客户端发送消息的队列
var broadcast = make(chan Message)

// Upgrader 用于升级 http 请求，把 http 请求升级为长连接的 WebSocket
var upgrader = websocket.Upgrader{
	// 解决跨域问题
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// 客户端唯一id
type userInfo struct {
	UserId string
	Code   string
}

// 用户信息+消息内容
type Message struct {
	Msg      string `json:"msg"`
	Username string `json:"username"`
}

// Upgrade 函数将 http 升级到 WebSocket 协议
func handler(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	// 获取id
	var info userInfo
	info.UserId = ws.RemoteAddr().String()
	info.Code = "auth"
	data, _ := json.Marshal(info)
	// 分配id
	ws.WriteMessage(websocket.TextMessage, []byte(string(data)))
	fmt.Println("用户:", ws.RemoteAddr().String(), "加入")
	if err != nil {
		fmt.Println(err)
		return
	}
	// 退出时关闭连接
	defer ws.Close()
	// 把新的客户端添加到全局的 "clients" 映射表中进行注册
	clients[ws] = true
	// 处理WebSocket的先消息
	for {
		var msg Message
		// 从连接中读取下一个JSON编码的消息，并将其存储在msg指向的值中。
		err := ws.ReadJSON(&msg)
		if err != nil {
			fmt.Println(err)
			delete(clients, ws)
			break
		}
		// 将新接收到的消息发送到广播频道
		broadcast <- msg
	}
}

// 广播消息
func handleMessages() {
	for {
		// 从“broadcast”中连续读取数据
		msg := <-broadcast
		// 通过各自的 WebSocket 连接将消息传播到所有客户端
		for client := range clients {
			fmt.Println('2')
			// WriteJSON将msg的JSON编码写为消息
			err := client.WriteJSON(&msg)
			if err != nil {
				fmt.Println(err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
func main() {

	// 打印输出信息。
	fmt.Println("ListenAndServe: 8000")

	// http 服务
	http.HandleFunc("/ws", handler)

	go handleMessages()

	err := http.ListenAndServe(":8000", nil)

	if err != nil {
		fmt.Println("ListenAndServe")
		fmt.Println(err)
	}
}
