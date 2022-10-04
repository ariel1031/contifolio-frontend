import { ChangeEvent, useState } from 'react'

const useInput = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    console.log('props같이 받아온 initialValues : ', initialValues)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target //사용자가 입력한 input의 name과 입력한 값.
        setValues({ ...values, [name]: value })
        console.log('name : ', name) //사용자가 입력한 input의 이름 (user_name)
        console.log('value : ', value) //사용자가 입력한 input의 값 (오은영). 현재 입력되는 값
        console.log('setValues : ', setValues) //뭔 함수가 나옴
    }
    return [values, onChange]
}

export default useInput
