import "./App.css";
import { Product } from "./features/product/Product";
// import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Product />
      </header>
    </div>
  );
}

export default App;
