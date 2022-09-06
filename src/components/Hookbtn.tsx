import { useState } from 'react'
const Hookbtn = (props) => {
    const [num, setNum] = useState(0)
    const onClick = () => {
        setNum(num + 1)
    }
    return (
        <div>
            <div>값:{num}</div>
            <button onClick={onClick}>+1</button>
        </div>
    )
}

export default Hookbtn
