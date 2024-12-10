// const data = {
//   product: {
//     title: "[정품] 구스보다 따뜻한 머스크랩 다운",
//     originalPrice: "449,000원",
//     discountedPrice: "444,000원",
//     images: ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"],
//     description: "따뜻함과 스타일을 모두 잡은 다운 재킷",
//     rewardPoints: "14,500원",
//     story: "이 제품은 환경을 고려하여 제작되었습니다.",
//     reviews: [
//       { user: "홍길동", comment: "정말 따뜻하고 좋아요!", rating: 5 },
//       { user: "김철수", comment: "가성비 갑!", rating: 4 }
//     ],
//     faq: [
//       { question: "세탁은 어떻게 하나요?", answer: "드라이클리닝을 권장합니다." },
//       { question: "사이즈는 어떻게 선택하나요?", answer: "정사이즈를 추천드립니다." }
//     ]
//   }
// };

// export default data;




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
    storyImage: "/images/story-image.jpg", // 스토리 이미지 URL 추가
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
    
    },
    
  };
  
  export default data;
  


 /* 
const data = {
  product: {
    title: "Example Product",
    originalPrice: 500000,
    discountedPrice: 450000,
    description: "This is a sample product description.",
    rewardPoints: 500,
    images: ["image1.jpg", "image2.jpg"],
    story: "This is the product story.",
    rewardData: {
      title: "하이퍼리트",
      supporters: 50392,
      satisfaction: "4.5 / 5.0",
      totalFunding: "47억 원",
      options: [
        { name: "헤비다운 점퍼", price: "449,000원", status: "품절" },
        { name: "헤비다운 팬츠", price: "249,000원", status: "구매 가능" },
      ],
    },
  },
};

export default data;
*/