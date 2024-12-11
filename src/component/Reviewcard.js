import "./Reviewcard.css";





function Reviewcard({ review, index, modalflag, setModalFlag, clickindex, setClickIndex }) {


    return (
        <div className="hover"> 
            <div  style={{width: '16rem', height: '22rem', margin: '15px', marginBottom:'50px' }} onClick={() => {
                setModalFlag(!modalflag)
                setClickIndex(index)
            }} >
                <img className="rvimg" variant="top" src={review[index].imgpath} ></img>
                <div>
                    <div className="rvtitle">{review[index].title}</div>
                    <div className='rvcontent ellipsis'>{review[index].content}</div>
                </div>
            </div>


        </div>
    );
}

export default Reviewcard;