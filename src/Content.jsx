import React, { useState } from 'react'

export function Content(props) {
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const onSubmit = () => {
        console.log(state)
    }
    return (
        <div className='w-full flex items-center justify-center pt-64'>
            <div>
                <div className="border border-gray-500 rounded-md overflow-hidden p-2 w-96 mb-3">
                    <input id="username" type="text" className="w-full border-none outline-none" placeholder='Username' 
                    value={state.username} 
                    onChange={(event) => setState((prevState) => ({
                        ...prevState,
                        username: event.target.value
                    }))} />
                </div>
                <div className="border border-gray-500 rounded-md overflow-hidden p-2 w-96">
                    <input id='password' type="password" className="w-full border-none outline-none" placeholder='Password'
                        value={state.password} 
                        onChange={(event) => setState((prevState) => ({
                            ...prevState,
                            password: event.target.value
                        }))} />
                </div>
                <div className="flex items-center justify-center">
                    <button className="py-4 w-64 bg-green-600 text-white font-semibold text-md mt-7 rounded-md" onClick={onSubmit}>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
}