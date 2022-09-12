const Profile = () => {
    return (
        <>
            <p>이 크루 프로필 설정</p>
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
                <div className='nickname'>
                    <label>
                        별명
                        <input type='text' name='nicknameinput'></input>
                    </label>
                </div>
                <div className='position'>
                    <label>
                        메인 포지션
                        <select>
                            <option>싱어</option>
                            <option>드럼</option>
                            <option>어쿠스틱 기타</option>
                            <option>일렉 기타</option>
                            <option>베이스</option>
                            <option>피아노</option>
                            <option>직접 입력</option>
                        </select>
                    </label>
                </div>
                <div className='img'>프로필 이미지 선택</div>
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
export default Profile
