import modal from "./Modal.css";
import reviewrimg from "./modalImage/reviewer.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPen } from "@fortawesome/free-solid-svg-icons";

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
                            <div style={{ display: "flex", justifyContent: "center" }}>

                                <div className="modalheader">
                                    <div className="reviewinfo">
                                        <img src={reviewrimg} style={{ width: "48px", height: "48px" }} />
                                        <div style={{ margin: "10px", display: "flex", alignItems: "center" }}><span>{review[clickindex].reviewer}</span></div>
                                        <div style={{ display: "flex", alignItems: "center" }}><span>{review[clickindex].reviewdate}</span></div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}><FontAwesomeIcon icon={faX} size="xl" onClick={() => {
                                        setModalFlag(!modalflag)
                                    }} /></div>

                                </div>

                            </div>

                            <hr style={{ width: '80%', margin: 'auto', marginBottom: "10px" }}></hr>
                            <div className="itemoption">{review[clickindex].title}</div>
                            <hr style={{ width: '80%', margin: 'auto', marginBottom: "10px", marginTop: "10px" }}></hr>
                        </div>

                        <div className="modalbody">
                            <span className="modalbodytext">{review[clickindex].content}</span>
                            <hr style={{ width: '80%', margin: 'auto', marginTop: '10px', marginBottom: '10px' }}></hr>
                            <div className="modalbodytitle"><img src={review[clickindex].imgpath} style={{ width: "48px", height: "48px" }} /><span style={{marginLeft:"10px"}}>{review[clickindex].title}</span></div>
                        </div>
                        <hr style={{ width: '80%', margin: 'auto', marginTop: '10px', marginBottom: '5px' }}></hr>
                        <div className="modalfooter">
                            <div className="commentcount"><span>댓글 0</span></div>
                            <div className="commentwrap">
                                <textarea readOnly placeholder="로그인이 필요합니다" className="commentbox"></textarea>
                            </div>
                            <div className="commentwritewrap"><button className="commentwrite"
                            ><FontAwesomeIcon icon={faPen} /> 댓글 달기</button></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}


export default Modal;