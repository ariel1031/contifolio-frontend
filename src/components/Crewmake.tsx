const Crewmake = () => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor='fileUpload'>플러스 모양 svg?</label>
                    {/* 선택한 사진 커버로 보이게 */}
                    <input
                        type='file'
                        id='fileUpload'
                        accept='image/*'
                        name='fileUpload'
                    />
                </div>
                <div className='crewname'>
                    <label htmlFor='crewnameinput'>크루 이름</label>
                    <input
                        type='text'
                        placeholder='크루 이름 입력'
                        name='crewnameinput'
                    ></input>
                </div>
                <div className='img'>커버 이미지 선택</div>
                <div>
                    <svg></svg>
                    <label htmlFor='fileUpload'>사진 추가</label>
                    <input
                        type='file'
                        id='fileUpload'
                        accept='image/*'
                        name='fileUpload'
                    />
                </div>
            </form>
        </>
    )
}
export default Crewmake
