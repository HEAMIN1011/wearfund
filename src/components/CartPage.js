import './CartPage.css';
import ListCard from "./ListCard";
import { TbShoppingBagHeart } from "react-icons/tb";
import { IoTrendingUp } from "react-icons/io5";



function CartPage() {

    return (
        <div>
            <div><h3>장바구니</h3></div>
            <div className='nav'>
                <span className='navbar'>일반구매</span>
                <span className='navbar'>정기구독</span>
            </div><hr />
            <div className='nav'>
                <span className='navbar2'>상품 정보</span>
                <span className='navbar2_1'>수량</span>
                <span className='navbar2_1'>주문금액</span>
                <span className='navbar2_1'>배송 정보</span>
            </div><hr/>
            <div className='fontgray'>
                <TbShoppingBagHeart size={75} color='slateblue'/>
            </div>
            <span className='fontgray'>장바구니가 비어있습니다.</span><hr/>
            <span className='shoppack'>계속 쇼핑하기</span>

            <div className='navbar3'>
                <h4>순위 급상승<IoTrendingUp size={40} color='slateblue'/></h4>
                <span>퍼플펀딩의 인기상품</span>
            </div>
            <div className="box"><ListCard /></div>
        </div>
    );
}

export default CartPage;