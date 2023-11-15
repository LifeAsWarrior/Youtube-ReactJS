import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter,createRoutesFromElements,Route, Outlet, useNavigate} from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import logo from './9153939d7544582c1fd8c692b626958d.png'
import { LoginPage } from './features/LoginPage/LoginPage';
import { RegisterPage } from './features/RegisterPage/RegisterPage';
import { DashboardPage } from './features/DashboardPage/DashboardPage';

const root = ReactDOM.createRoot(document.getElementById('tutorial'));

function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  },[])
  return <></>
}

function AccessNotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/dashboard')
  },[])
  return <></>
}

function Navbar() {
  const navigate = useNavigate()
  const [state,setState] = useState({
    search: ''
  })

  return (
    <>
      <div className='h-20 py-2 shadow flex items-center justify-between px-3'>
      <div className='flex items-center'>
        <img src={logo} alt="" className='w-14 h-10'/>
        <span className="font-semibold text-md text-gray-500 ml-2">Tutorial Kenedy</span>
      </div>
      <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96">
      <input type="text" value={state.search} onChange={(event) => setState({
        search: event.target.value
      })} className='border-none w-full outline-none' placeholder='Search ...'/>
      </div>
      {localStorage.getItem('token') ? (
        <button className="bg-green-500 text-white font-semibold py-2 w-24 rounded-md mx-3" onClick={() => {
          localStorage.removeItem('token')
          window.location.reload()
        }}>
        Log out
      </button>
      ) : (
      <div className="flex items-center">
        <button className="bg-green-500 text-white font-semibold py-2 w-24 rounded-md mx-3" onClick={() => navigate('/')}>
          Log in
        </button>
        <button className="bg-green-500 text-white font-semibold py-2 w-24 rounded-md" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>)}
    </div>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    localStorage.getItem('token') ? (
      <Route path="/" element={<Navbar/>}>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="*" element={<AccessNotFound/>}/>
      </Route>
    ) : (
    <Route path="/" element={<Navbar/>}>
      <Route index element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>) 
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
