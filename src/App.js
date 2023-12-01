import './App.css';
import Header from './components/Header/Header.jsx'
import Hero from './components/Section/Hero'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
// import LoginSignup from './pages/LoginSignup/LoginSignup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className='container'>
          <Header></Header>
          <Hero></Hero>
        </div>
      )
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "signup",
      element: <Register />

    },
    {
      path: "*",
      element: (
        <div className='container'>
          {/* <Header></Header> */}
          {/* <Hero></Hero> */}
          <Register></Register>
          {/* <Login></Login> */}
        </div>
      )
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
