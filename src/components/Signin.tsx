import { useState } from 'react'
const Signin = (props) => {
    const [values, setValues] = useState({
        email: '',
        pw: '',
    })

    const signin = (e) => {
        e.preventDefault()
        alert('로그인 되었습니다')
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <form onSubmit={signin}>
            <label>
                이메일
                <input
                    name='email'
                    type='text'
                    value={values.email}
                    onChange={handleChange}
                    placeholder='이메일'
                ></input>
            </label>
            <label>
                비밀번호
                <input
                    name='pw'
                    type='password'
                    value={values.pw}
                    onChange={handleChange}
                    placeholder='비밀번호'
                ></input>
            </label>
            <input type='submit' />
        </form>
    )
}
export default Signin
