import './ListCard.css';
import { useState } from 'react';
import fundingData from '../Data/FundingData';
import { TbShoppingBagPlus } from "react-icons/tb";

function ListCard() {

    let [fashion, setFashion] = useState(fundingData);

    return (

        fashion.map((item, index) => {

            return (
                <div className='cardbox'>
                    <img className='imageSize' src={fashion[index].imgPath}></img>
                    <div className='titleFont'>{fashion[index].title}<TbShoppingBagPlus size={30} color='gray' 
                    cursor='pointer'/></div>
                    <div className='contentSize'>{fashion[index].content}</div>
                    <span className='priceFont'>{fashion[index].price} </span>
                    <span className='titleFont'>{fashion[index].percent}</span>
                </div>
            )
            
        })
    );
}

export default ListCard;