import './CartPage.css';
import ListCard from "./ListCard";
import { TbShoppingBagHeart } from "react-icons/tb";
import { IoTrendingUp } from "react-icons/io5";
import { Link } from "react-router-dom";



function CartPage() {

    return (
        <div>
            <div className='title'>장바구니</div>
            <div className='nav'>
                <span className='navbar'>일반구매</span>
                <span className='navbar'>정기구독</span>
            </div>
            <div className='nav'>
                <span className='navbar2'>상품 정보</span>
                <span className='navbar2_1'>수량</span>
                <span className='navbar2_1'>주문금액</span>
                <span className='navbar2_1'>배송 정보</span>
            </div>
            <div className='center'>
                <TbShoppingBagHeart size={75} color='slateblue' />
            </div>
            <span className='fontgray'>장바구니가 비어있습니다.</span>
            <Link to='/best-funding' className='shoppack'>계속 쇼핑하기</Link>
            <span className='title'>순위 급상승<IoTrendingUp size={30} color='slateblue' /></span>
            <span className='center'>웨어펀딩의 인기상품</span>
            <div className="box"><ListCard /></div>
        </div>
    );
}

export default CartPage;