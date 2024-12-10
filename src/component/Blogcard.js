import './Blogcard.css';



function Blogcard({ blog, index }) {




    return (

        <div className="hover"style={{ width: '13rem', height: '22rem', margin: '30px' }} onClick={() => {
            window.open(blog[index].link)
        }}>
            <img variant="top" src={blog[index].imgpath} style={{ width: '13rem', height: '11rem', objectFit: 'cover' }}></img>
            <div>

                <div className="bltitle"style={{width: '13rem', marginTop :'15px'}}>
                    {blog[index].title}</div>

                <hr style={{ width: '50%', margin: 'auto', marginTop: '10px', marginBottom: '10px' }}></hr>

                <p className='blcontent'>
                    {blog[index].content}
                </p>
            </div>
        </div>

    );
}

export default Blogcard;