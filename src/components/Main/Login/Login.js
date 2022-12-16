import React, { useState } from 'react'
import './Login.scss'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div className='container'>
            <div className="login">
                <div className="loginLeft">
                    <h2>Get started today!</h2>
                    <p>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet.</p>
                </div>

                <form action="#" method="post" encType="multipart/form-data">
                    <h3>Log in</h3>
                    <input type="text" placeholder='Name' value={name} onChange={handleName} />
                    <input type="text" placeholder='Email' value={email} onChange={handleEmail} />
                    <button className="btn" type='submit'>Book a demo</button>
                </form>

            </div>
        </div>
    )
}

export default Login