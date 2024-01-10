import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <UserContextProvider>
      <h1>React ContextAPI</h1>
      <Login />
      <Profile />
      <Footer />
    </UserContextProvider>
  );
}

export default App;
