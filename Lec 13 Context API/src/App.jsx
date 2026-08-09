import './App.css'
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <h2 className='justify-center font-bold text-2xl'>Context API</h2>
      <br></br>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
