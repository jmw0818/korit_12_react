import Login from "./Login";
import Logout from "./Logout";

export default function MyComponent2({isLoggedin}) {
  return (
    <>
      {isLoggedin ? <Logout /> : <Login />}
    </>
  );
}