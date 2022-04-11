import Todo from "./components/Todo"
import Modal  from "./components/Modal"
import Backdrop from "./components/Backdrop"

function App() {
  return (
    <div>
      <h1>Badass Todos</h1>
      <Todo text="digin it breakin it" />
      <Todo text="piles and piles" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
