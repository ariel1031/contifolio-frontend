import { useState } from 'react'

const Signup = (props) => {
    const [values, setValues] = useState({
        id: '', //const [id, setValues] = useState() 와 같다. 비어있는 문자열로 초기화
        email: '',
        pw: '',
        pw_re: '',
    })
    //console.log(values) //{id: '1', email: '2', pw: '3', pw_re: '4'} 객체 그 자체가 나옴

    //event handler
    const signup = (e) => {
        e.preventDefault()
    }
    // const changeId = (e) => {
    //     e.preventDefault()
    //     setId(e.target.value)
    // }

    const handleChange = (e) => {
        const { name, value } = e.target //input 입력한 곳의 name과 입력한 값.
        setValues({ ...values, [name]: value })
    }
    return (
        <form onSubmit={signup}>
            {/* onSubmit : 양식 제출 이벤트가 발생할 때의 동작을 지정한다. */}
            <label>
                아이디
                <input
                    name='id'
                    type='text'
                    value={values.id} // 여기서 value는 현재 입력되는 값.
                    onChange={handleChange}
                    placeholder='아이디'
                ></input>
            </label>
            <label>
                이메일
                <input
                    name='email'
                    type='text'
                    value={values.email} // 여기서 value는 현재 입력되는 값.
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
            <label>
                비밀번호 재확인
                <input
                    name='pw_re'
                    type='password'
                    value={values.pw_re} // 여기서 value는 현재 입력되는 값.
                    onChange={handleChange}
                    placeholder='비밀번호 재확인'
                ></input>
            </label>
            <input type='submit' />
        </form>
    )
}
export default Signup
