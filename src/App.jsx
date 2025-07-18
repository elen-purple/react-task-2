import "./App.css";
import { Greeting } from "./components/Greeting";
import { Message } from "./components/Message";
import { Button } from "./components/Buttton";

function App() {
  return (
    <div className="App">
      <Greeting name="Anna" />
      <Message text="Використайте компонент Message в компоненті App та передайте йому довільне повідомлення через атрибут text." />
      <Button
        onClick={() => {
          console.log("Hello, world");
        }}
      />
    </div>
  );
}

export default App;
