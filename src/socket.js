import io from "socket.io-client"
//const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
// const sockets = io("https://video-chat-hoster1.herokuapp.com")  // hamara server
//const sockets = io("https://myworld-signalling-server.herokuapp.com")  // myworld server
const sockets = io("https://web-rtc-test-cessini.herokuapp.com/")
export default sockets
