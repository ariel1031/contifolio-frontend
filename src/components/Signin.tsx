import { useState } from 'react'
import useLogin from './../hooks/useLogin'

const Signin = (props) => {
    const [values, setValues] = useLogin({
        email: '',
        pw: '',
    })

    const signin = (e) => {
        e.preventDefault()
        alert('로그인 되었습니다')
    }

    return (
        <form onSubmit={signin}>
            <label>
                이메일
                <input
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={setValues}
                    placeholder='이메일'
                ></input>
            </label>
            <label>
                비밀번호
                <input
                    name='pw'
                    type='password'
                    value={values.pw}
                    onChange={setValues}
                    placeholder='비밀번호'
                ></input>
            </label>
            <input type='submit' value='로그인' />
        </form>
    )
}
export default Signin
