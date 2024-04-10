import "./App.css";
import { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

function App(props) {
  const uuid = uuidv4();

  const socket = useMemo(() => io.connect("http://localhost:8080"), []);
  socket.on("connect", () => {
    socket.emit("initialconnection", {
      username: props.username,
      password: props.password,
      uuid: uuid,
      socketid: socket.id,
    });
  });

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = () => {
    if (newMessage.trim() !== "") {
      socket.emit("chat", { message: newMessage, uuid: uuid });
      setNewMessage("");
    }
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setMessages([...messages, payload.message]);
    });
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleMessageSubmit();
    }
  };

  return (
    <div className="App">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      <div className="container">
        <div className="textarea-parent">
          <form>
            <textarea
              placeholder="write your message"
              className="textarea"
              value={newMessage}
              onChange={(event) => {
                setNewMessage(event.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" onClick={handleMessageSubmit}>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
