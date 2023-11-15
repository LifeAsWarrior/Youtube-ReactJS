import React, { useState } from 'react'

export function LoginPage() {
    const [error,setError] = useState(false)
    const [state,setState] = useState({
        username: '',
        password: ''
    })

    const onSubmit = () => {
        if(state.username !== 'admin' || state.password !== 'password') {
            setError(true)
        } else {
            localStorage.setItem('token','mytoken')
            window.location.reload()
        }
    }
    return (
        <div className='w-full flex items-center justify-center pt-24'>
            <div>
            <h1 className="text-gray-600 font-semibold text-xl text-center mb-4">Log in your account</h1>
            <div className="flex items-center justify-center mb-6">
            {error ? (<span className="text-red-500 text-center">Invalid username or password</span>) : null}
            </div>
            <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96">
      <input type="text" value={state.username} onChange={(event) => setState((prevState) => ({
        ...prevState,
        username: event.target.value
      }))} className='border-none w-full outline-none' placeholder='Username'/>
      </div>
      <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96 my-6">
      <input type="password" value={state.password} onChange={(event) => setState((prevState) => ({
        ...prevState,
        password: event.target.value
      }))} className='border-none w-full outline-none' placeholder='Password'/>
      </div>
      <div className="flex items-center justify-center">
      <button className="bg-green-500 text-white font-semibold py-2 w-64 rounded-md" onClick={() => onSubmit()}>
          Log in
        </button>
      </div>
            </div>
        </div>
    )
}