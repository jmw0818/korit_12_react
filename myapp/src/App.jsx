import Drink from "./Drink";
import Hello from "./Hello";
import MyComponent from "./MyComponent";

export default function App() {
  return(
    <>
      <MyComponent />
      <Drink drink='coffee'/>
      <Hello firstName='Jone' lastName='Doe'/>
      <Hello firstName='길동' lastName='홍'/>
      <Hello firstName='영' lastName='김'/>
    </>
  );
}