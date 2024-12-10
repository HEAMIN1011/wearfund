import "./Reviewcard.css";





function Reviewcard({ review, index, modalflag, setModalFlag, clickindex, setClickIndex }) {


    return (
        <div className="hover"> 
            <div style={{ width: '13rem', height: '22rem', margin: '30px' }} onClick={() => {
                setModalFlag(!modalflag)
                setClickIndex(index)
            }} >
                <img variant="top" src={review[index].imgpath} style={{ width: '13rem', height: '11rem', objectFit: 'cover' }}></img>
                <div style={{ width: '13rem', padding: '15px' }}>
                    <div className="rvtitle">{review[index].title}</div>

                    <hr style={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px' }}></hr>

                    <div className='rvcontent ellipsis'>
                        {review[index].content}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Reviewcard;