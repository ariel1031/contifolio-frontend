const Crewmember = () => {
    return (
        <>
            <div className='inputemail'>
                <p>크루원으로 추가할 이메일을 입력해주세요</p>
                <form>
                    <input
                        type='text'
                        name='email'
                        placeholder='example@contifolio.com'
                    ></input>
                    <input type='submit'></input>
                </form>
                <p>이메일로 추가해도 크루원으로 가입 승인됩니다.</p>
            </div>
            <div className='list'>
                <table>
                    <th>이름</th>
                    <th>이메일</th>
                    <tr>
                        <td>초영</td>
                        <td>forever0@naver.com</td>
                    </tr>
                    <tr>
                        <td>박대현</td>
                        <td>parkkk@daum.net</td>
                    </tr>
                    <tr>
                        <td>권태훈</td>
                        <td>hoony0708@gmail.com</td>
                    </tr>
                </table>
            </div>
            <div className='approvalList'>
                <p>승인 대기 목록</p>
                <table>
                    <th>이름</th>
                    <th>이메일</th>
                    <tr>
                        <td>윤민지</td>
                        <td>yoonmj926@nate.com</td>
                    </tr>
                </table>
            </div>
            <form>
                <label>
                    <input type='radio' name='permission' value='yes'></input>
                    yes
                </label>
                <label>
                    <input type='radio' name='permission' value='no'></input>
                    no
                </label>
            </form>
        </>
    )
}

export default Crewmember
