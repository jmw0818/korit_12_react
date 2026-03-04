import './App.css'
import AuthContext from './createContext';
import MyComponent from './MyComponent';

export default function App() {
  const username = 'Kim0';

  return (
    <>
      <AuthContext.Provider value={username}>
        <MyComponent />
      </AuthContext.Provider>
    </>
  );
}
