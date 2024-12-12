import modal from "./Modal.css";
import reviewrimg from "./modalImage/reviewer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPen, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Modal({ modalflag, setModalFlag, review, clickindex, setClickIndex }) {


    return (
        <div className="modalpage" >
            <div className="modalbox">
                <div className="inner">
                    <div className="singleitem">
                        <img src={review[clickindex].imgpath} className="modalimg1"></img>
                    </div>
                    <div className="modaltext">
                        <div >
                            <div className="Xbtn"><FontAwesomeIcon icon={faX} size="xl" onClick={() => {
                                setModalFlag(!modalflag)
                            }} /></div>
                            <div className="modalwrap">
                                <div className="modalheader">
                                    <div className="reviewinfo">
                                        <img src={reviewrimg} style={{ width: "48px", height: "48px" }} />
                                        <div className="reviewer"><span>{review[clickindex].reviewer}</span></div>
                                        <div className="reviewdate"><span>{review[clickindex].reviewdate}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="itemoption"> [옵션]선택 : {review[clickindex].title}</div><br />
                        </div>
                        <div className="modalbody">
                            <span className="modalbodytext">{review[clickindex].content}</span><br />
                            <div className="modalbodytitle">
                                <img src={review[clickindex].imgpath} style={{ width: "48px", height: "48px" }} />
                                <span className="secondtitle">{review[clickindex].title}</span></div>
                        </div><br />
                        <div className="modalfooter">
                            <div className="commentcount"><span>댓글 0</span></div>
                            <div className="commentwrap">
                                <textarea readOnly placeholder="로그인이 필요합니다" className="commentbox" ></textarea>
                            </div>
                            <div className="commentwritewrap">
                                <button className="commentwrite"><FontAwesomeIcon icon={faPen} /> 댓글쓰기</button>
                            </div>
                            <Link to="/log"><button className="login"><FontAwesomeIcon icon={faRightToBracket} /> 로그인</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Modal;