import './Blogcard.css';



function Blogcard({ blog, index }) {




    return (

        <div className="hover" onClick={() => {
            window.open(blog[index].link)
        }}>
            <img variant="top" className="blimg" src={blog[index].imgpath}></img>
            <div>
                <div className="bltitle">{blog[index].title}</div>
                <p className='blcontent'>{blog[index].content}</p>
            </div>
        </div>

    );
}

export default Blogcard;