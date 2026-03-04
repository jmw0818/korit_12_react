import Drink from "./Drink";
import Hello from "./Hello";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";

export default function App() {
  return(
    <>
      <MyComponent3 isLoggedin={false}/>
      <MyComponent2 isLoggedin={true} />
      <MyComponent2 isLoggedin={false} />
      <MyComponent />
      <Drink drink='coffee'/>
      <Hello firstName='Jone' lastName='Doe'/>
      <Hello firstName='길동' lastName='홍'/>
      <Hello firstName='영' lastName='김'/>
    </>
  );
}