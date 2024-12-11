import './CommInfo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPen } from "@fortawesome/free-solid-svg-icons";
import infodata from '../CommData/infodata';
import { useParams } from "react-router-dom";
import { useState } from 'react';
function CommInfo() {

    let [info, setInfo] = useState(infodata);

    let { id } = useParams();

    let infopara = info.find((item) => {
        return item.id == id;
    });


    return (
        <div>


            <br /><br />

            <div className='bodywrap'>
                <div className='infobody'>
                    <h4>공지사항</h4><br />
                    <h5 className='title'>{infopara.title}</h5><br />

                    <p className="date">{infopara.date}</p>
                    <h6>공지사항</h6><br />

                    <img src={infopara.imgPath}></img><p></p>


                    <p>{infopara.content}</p>

                    <div>
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

    )
}

export default CommInfo;