export default function MyComponent() {
  const handClick = () => {
    alert('Button Pressed !');
  }

  return(
    <>
      <button onClick={handClick}>Press Me</button>
    </>
  );
}