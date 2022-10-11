import { useState } from 'react'
import useInput from './../hooks/useInput'
import { FormContainer } from './Signup.style'

const Signup = (props) => {
    const [values, setValues] = useInput({
        //직접 작성한 커스텀 훅
        user_name: '', //const [user_name, setValues] = useState('') 와 같다. 비어있는 문자열로 초기화
        email: '',
        pw: '',
        pw_re: '',
    })
    console.log(values) //

    //event handler
    const signup = (e) => {
        e.preventDefault()
        alert('sign up')
    }
    //handleChange를 지우고 이제 useInput 훅에서 관리함 onChange={handleChange} //Signup.tsx있던 handleChange를 useInput의 onChange={setValues}로 바꿈
    return (
        <FormContainer onSubmit={signup}>
            {/* onSubmit : 양식 제출 이벤트가 발생할 때의 동작을 지정한다. */}
            <label>
                이름
                <input
                    name='user_name'
                    type='text'
                    value={values.user_name} // 여기서 value는 현재 입력되는 값.
                    onChange={setValues}
                    placeholder='이름을 입력해주세요'
                ></input>
            </label>
            <label>
                이메일
                <input
                    name='email'
                    type='text'
                    value={values.email} // 여기서 value는 현재 입력되는 값.
                    onChange={setValues}
                    placeholder='이메일을 입력해주세요'
                ></input>
            </label>
            <label>
                비밀번호
                <input
                    name='pw'
                    type='password'
                    value={values.pw}
                    onChange={setValues}
                    placeholder='비밀번호를 설정해주세요'
                ></input>
            </label>
            <label>
                비밀번호 재확인
                <input
                    name='pw_re'
                    type='password'
                    value={values.pw_re} // 여기서 value는 현재 입력되는 값.
                    onChange={setValues}
                    placeholder='비밀번호를 입력해주세요'
                ></input>
            </label>
            <input type='submit' value='회원 가입' />
        </FormContainer>
    )
}
export default Signup
