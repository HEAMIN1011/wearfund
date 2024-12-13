
// Data.js
export const data = {
  product: {
    title: "[점빵] 구스보다 따뜻한 버스코바 다운을 북 채운 폭한기 '해비다운'",
    originalPrice: 449000,
    discountedPrice: 444000,
    description: "This is a sample product description.",
    rewardPoints: 500,
    images: [
      {
        id: 1,
        path: require('../detailedpage/images/down-jacket-1.jpg')  // 상대 경로로 수정
      },
      {
        id: 2,
        path: require('../detailedpage/images/down-jacket-2.jpg')  // 상대 경로로 수정
      },
      {
        id: 3,
        path: require('../detailedpage/images/down-jacket-3.jpg')  // 상대 경로로 수정
      }
    ],
      story: "이 제품은 따뜻함과 스타일을 동시에 갖춘 프리미엄 다운입니다. 품질과 디자인 모두에서 최상의 만족도를 제공합니다.",
    storyImage: require('../detailedpage/images/image1.jpg',), // 스토리 이미지 URL 추가
    rewardData: {
      title: "WEARFUND",
      supporters: 50392,
      satisfaction: "5.0 / 5.0",
      totalFunding: "47억 원",
      options: [
        { name: "헤비다운 점퍼", price: "449,000", status: "구매 가능" },
        { name: "헤비다운 팬츠", price: "249,000", status: "구매 가능" },
      ],
    },
    reviews: [
      { user: "이수진", comment: "디자인이 너무 예뻐요!", rating: 5 },
      { user: "박준영", comment: "생각보다 따뜻하고 만족스럽습니다.", rating: 4 },
      { user: "최민수", comment: "가격 대비 품질 최고입니다!", rating: 5 }
    ],
    faq: [
      { question: "반품은 가능한가요?", answer: "제품 수령 후 7일 이내 가능합니다." },
      { question: "배송 기간은 얼마나 걸리나요?", answer: "주문 후 3~5일 내로 배송됩니다." }
    ]
    },
    
  };
  
  export default data;


