const Crew = () => {
    return (
        <>
            <header>
                <div>
                    <img alt='크루 대표 이미지'></img>
                </div>
                <form>
                    <div>
                        <input
                            type='text'
                            name='title'
                            placeholder='제목을 입력해주세요'
                        />
                    </div>
                    <div>
                        <input
                            type='text'
                            name='session'
                            placeholder='세션을 추가해주세요'
                        />
                        <button>버튼</button>
                        <div className='세션 선택 js'></div>
                    </div>
                    <hr></hr>
                    <div>
                        <textarea></textarea>
                    </div>
                    <hr></hr>
                    <div>
                        <input type='submit' value='게시' />
                    </div>
                </form>
            </header>
        </>
    )
}

export default Crew
