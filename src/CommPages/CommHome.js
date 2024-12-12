import './CommHome.css';
import blogdata from '../CommData/blogdata';
import infodata from '../CommData/infodata';
import reviewdata from '../CommData/reviewdata';
import CommInfo from './CommInfo.js';
import Blogcard from '../component/Blogcard';
import Reviewcard from '../component/Reviewcard';
import Modal from '../component/Modal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';



function CommHome() {
    let [modalflag, setModalFlag] = useState(false);
    let [info, setInfo] = useState(infodata);
    let [blog, setBlog] = useState(blogdata);
    let [review, setReview] = useState(reviewdata);
    let [clickindex, setClickIndex] = useState(0);
    let navigate = useNavigate();




    return (

        <div className='body'>

            <h3 className='info-header'><span>공지사항</span></h3>
            <p className='subheader'>Wearfund의 소식을 확인하세요 !</p>
            <div className='information'>

                {info.map((item, index) => {

                    return (
                        <div>
                            <div className="infomap" onClick={() => {
                                navigate('/info/' + item.id);
                            }} >
                                <div className='title'> {info[index].title}</div>
                                <div className='date' ><span>{info[index].date}</span></div>
                                <div className='writer'><span>퍼플펀딩</span></div>
                            </div>
                            
                        </div>

                    )
                })
                /* 클릭 시 공지 사항 이동 → 공지사항 사이트 라우터 연결*/}

            </div>


            <h3>패션 블로그</h3>
            <p className='subheader'>클릭 시 해당 사이트로 이동할 수 있어요 !</p>
            <div>
                <div className='Row-mar'>
                    {blog.map((item, index) => {
                        return (
                            <div className='carddeck'><Blogcard blog={blog} index={index} /></div>
                            /* 패션 블로그 카드 정렬*/
                        )
                    })}
                </div>
            </div>
            <div className='btnwrap'><button className='btncss'><FontAwesomeIcon icon={faPlus} /></button></div>
            <div className='searchwrap'>
                <select className='searchsel'>
                    <option>제목+내용</option>
                    <option>제목</option>
                    <option>내용</option>
                </select>
                <input type="text" placeholder=' ' className='searchtext'></input>
                <button className='btncss'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>



            <h3><span>구매 후기</span></h3>
            <p className='subheader'>클릭 시 자세한 리뷰를 볼 수 있어요 !</p>
            <div>
                <div className='Row-mar'>
                    {review.map((item, index) => {
                        return (
                            <>
                                <div> <Reviewcard review={review} index={index} modalflag={modalflag} setModalFlag={setModalFlag} clickindex={clickindex} setClickIndex={setClickIndex} /></div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='btnwrap'><button className='btncss'><FontAwesomeIcon icon={faPlus} /></button></div>
            <div className='searchwrap'>
                <select className='searchsel'>
                    <option>제목+내용</option>
                    <option>제목</option>
                    <option>내용</option>
                </select>
                <input type="text" placeholder=' ' className='searchtext'></input>
                <div className='btnwrap'><button className='btncss'><FontAwesomeIcon icon={faMagnifyingGlass} /></button></div>
            </div>

            <br /><br /><br /><br />

            {
                modalflag == true ? <Modal review={review} modalflag={modalflag} setModalFlag={setModalFlag} clickindex={clickindex} setClickIndex={setClickIndex} /> : null
            }
        </div>
    )
}

export default CommHome;