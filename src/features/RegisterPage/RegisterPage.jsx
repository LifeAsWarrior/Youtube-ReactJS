import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export function RegisterPage() {
    const navigate = useNavigate()
    const [error,setError] = useState(false)
    const [state,setState] = useState({
        username: '',
        password: '',
        confirmation: ''
    })

    const onSubmit = () => {
        setError(false)
        if(state.password !== state.confirmation) {
            setError(true)
        } else {
            navigate('/')
        }
    }
    return (
        <div>
                <div className='w-full flex items-center justify-center pt-24'>
            <div>
            <h1 className="text-gray-600 font-semibold text-xl text-center mb-4">Sign up your account</h1>
            <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96">
      <input id='username' type="text" value={state.username} onChange={(event) => setState((prevState) => ({
        ...prevState,
        username: event.target.value
      }))} className='border-none w-full outline-none' placeholder='Username'/>
      </div>
      <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96 my-6">
      <input id='password' type="password" value={state.password} onChange={(event) => setState((prevState) => ({
        ...prevState,
        password: event.target.value
      }))} className='border-none w-full outline-none' placeholder='Password'/>
      </div>
      <div className="border border-gray-500 flex items-center py-2 px-3 rounded-md w-96">
      <input id='confirmation' type="password" value={state.confirmation} onChange={(event) => setState((prevState) => ({
        ...prevState,
        confirmation: event.target.value
      }))} className='border-none w-full outline-none' placeholder='Confirmation'/>
      </div>
      <div className="mb-6">
        {error ? (<span className="text-red-500 text-xs">Password don't match, please check again</span>) : null}
      </div>
      <div className="flex items-center justify-center">
      <button className="bg-green-500 text-white font-semibold py-2 w-64 rounded-md" onClick={() => onSubmit()}>
          Sign up
        </button>
      </div>
            </div>
        </div>
        </div>
    )
}