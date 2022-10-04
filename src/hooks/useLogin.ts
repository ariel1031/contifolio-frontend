import { useState, ChangeEvent } from 'react'
const useLogin = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return [values, onChange]
}

export default useLogin
