import { useState } from "react";

export default function MyComponent() {
  const [ name, setName ] = useState({
    firstName: '영',
    lastName: '김'
  });
  
  return(
    <>
      <div>Hello {name.firstName} {name.lastName}</div>
      <button onClick={() => 
        setName({...name, firstName: '일'})
      }>이름변경</button>
    </>
  );
}