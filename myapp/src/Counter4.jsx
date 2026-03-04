import { useEffect, useState} from 'react';

export default function Counter4() {
  const [count1 , setCount1] = useState(0);
  const [count2 , setCount2] = useState(0);

  useEffect(() => console.log('첫번째 렌더링시에만 콜백함수가 호출된다.'), []);

  return (
    <div>
      <p>Count : {count1} | {count2}</p>
      <button onClick={() => setCount1(preValue => preValue + 1)}>
        count1 증가
      </button>
      <br />
      <br />
      <button onClick={() => setCount2(preValue => preValue + 1)}>
        count2 증가
      </button>
    </div>
  );
}