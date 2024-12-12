import ListCard from "./ListCard";
import './ListCard.css';
import './FundingList.css';
import fundingData from "../Data/FundingData";
import { useState } from 'react';



function FundingList() {

    return (
        <div>
            <div className="back">
                <div className="flex">
                    <div className="boxBack boxNav">펀딩으로 디자이너의 걱정을 없앤다고?
                        <div className="white1">패션디자이너는 창의력과 혁신의 최전선에 있습니다.
                            그들의 디자인과 아이디어는 트렌드를 선도하며,
                            <br/>새로운 스타일과 패턴을 만들어냅니다.</div>
                        <div className="white2">패션디자이너와의 협력은 다양한 컬래버레이션 기회를 열어줍니다. 이는 브랜드 인지도를 높이고 새로운 고객층을 유치하는 데 도움을 줍니다.재능 있는 디자이너와의 협력은 브랜드 이미지를 향상시키고, 프리미엄 이미지를 구축하는 데 도움이 됩니다.혁신적인 디자인은 경쟁사와의 차별화 요소가 됩니다. 독특한 디자인과 패턴은 시장에서의 경쟁력을 크게 높여줍니다.</div>
                    </div>
                    <div className="boxBack boxNav" >새로운 시도를 응원할 수 있습니다.
                        <div className="white1">패션은 전 세계적으로 중요한 산업입니다. <br />
                            뛰어난 디자이너와 협력하면 글로벌 시장에서의 입지를 강화할 수 있습니다.</div>
                        <div className="white2">인기 있는 브랜드를 설립하거나 유명 브랜드와 협력하여 높은 수익을 올릴 수 있습니다.패션디자인은 자신을 표현할 수 있는 방법 중 하나입니다. 각 디자이너는 자신의 독특한 스타일과 비전을 통해 자신을 표현할 수 있습니다.패션디자인은 전 세계적으로 인정받는 직업입니다. 재능 있는 디자이너는 다양한 국가와 시장에서 활동할 기회를 가질 수 있으며, 국제적인 커리어를 쌓을 수 있습니다.</div>
                    </div>
                </div>
            </div>
            <div>
                <div><h2 className="center">Funding List</h2>
                    <div className="box"><ListCard /></div>
                    <div className="box"><ListCard /></div>
                    <div className="box"><ListCard /></div>
                </div>
            </div>
        </div>
    )

}
export default FundingList;