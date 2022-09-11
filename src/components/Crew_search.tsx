import { useState } from 'react'
//import Magnifier from '../../assets/magnifier.svg'

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
        <div>
            <form onSubmit={crew_search}>
                {/* 이 밑의 value는 입력되는 값을 의미함 */}
                <input
                    name='crew'
                    type='text'
                    value={crew}
                    onChange={changeCrew}
                    placeholder='크루 검색하기'
                ></input>
                <input type='submit' value='돋보기 svg' id='submitBtn' />
            </form>
            {/* <Magnifier /> */}
        </div>
    )
}
export default Crew_search
