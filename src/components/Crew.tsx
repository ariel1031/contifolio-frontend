import UserInfo from './UserInfo'

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
                        <button>세션 추가 버튼</button>
                        <div className='세션 선택 js'></div>
                        {/* 여러명 동시에 선택해서 한방에 넣게 하는 편이 낫지 않을까 */}
                    </div>
                    <hr></hr>
                    <div>
                        <textarea placeholder='내용을 입력해주세요'></textarea>
                    </div>
                    <hr></hr>
                    <div>
                        <input type='file' id='fileUpload' multiple></input>
                        <input type='submit' value='게시' />
                    </div>
                    <hr></hr>
                </form>
            </header>

            <section>
                <div className='category'>
                    <form>
                        <select>
                            <option>자바스크립트로 구현?</option>
                            <option>이렇게 html로 구현?</option>
                        </select>
                    </form>
                    <hr></hr>
                </div>
                <article>
                    <UserInfo />
                    <form>
                        <div className='posting update'>
                            <select>
                                <option>수정</option>
                                <option>삭제</option>
                            </select>
                        </div>
                    </form>

                    <div className='contents'>
                        <div className='title'>7/30 나혜석거리 버스킹 콘티</div>
                        <div className='session'></div>
                        <div className='posting'>
                            {/* 이거 화면에 보여줄 때 줄바꿈 어케하지??? */}
                            콘티 FREE(FEAT.넉살) HERE(슬플 때 사랑한다 OST) THAT
                            BOI (feat. 저스디스)
                        </div>
                        <hr></hr>
                    </div>
                    <div className='coments'>
                        <div className='coments_header'>
                            <svg>말풍선</svg> <label>댓글 달기</label>
                            <hr></hr>
                        </div>
                        <div className='coments_post'>
                            <form>
                                <label>
                                    <input
                                        type='text'
                                        placeholder='댓글을 작성해주세요'
                                    ></input>
                                    <button>댓글 작성</button>
                                </label>
                            </form>
                        </div>

                        <UserInfo />
                        <form>
                            <div className='posting update'>
                                <select>
                                    <option>수정</option>
                                    <option>삭제</option>
                                </select>
                            </div>
                        </form>
                        <div className='coments_contents'>
                            버스킹 장소에서 30분 일찍 만나 세팅합니다
                        </div>
                    </div>
                    {/* article은 재사용할 수 있는 구획 https://developer.mozilla.org/ko/docs/Web/HTML/Element/article*/}
                </article>
            </section>
        </>
    )
}

export default Crew
