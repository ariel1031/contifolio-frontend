import { useState } from 'react'
import { ReactComponent as Magnifier } from '../../assets/magnifier.svg'

const Crew_search = (props) => {
    const [crew, setValue] = useState('')

    const crew_search = (e) => {
        e.preventDefault()
    }

    const changeCrew = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <form onSubmit={crew_search}>
            {/* 이 밑의 value는 입력되는 값을 의미함 */}
            <input
                name='crew'
                type='text'
                value={crew}
                onChange={changeCrew}
                placeholder='크루 검색하기'
            ></input>
            <label>
                <button>
                    <svg></svg>
                </button>
            </label>
            <input type='submit' value='' id='submitBtn' />
        </form>
    )
}
export default Crew_search
