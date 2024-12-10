
// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//     const [time, setTime] = useState(60);

//     useEffect(() => {
//         if (time > 0) {
//             const timer = setTimeout(() => setTime(time - 1), 1000);
//             return () => clearTimeout(timer);
//         }
//     }, [time]);

//     return <div>남은 시간: {time}초</div>;
// };
// export default Timer;
// // export default Timer;

// const Timer = ({ count, setCount }) => {
//     const formatTime = time => {
//         const minutes = Math.floor(time / 60);
//         const seconds = time % 60;
//         return `${minutes.toString().padStart(2, '0')}:${seconds
//             .toString()
//             .padStart(2, '0')}`;
//     };

//     useEffect(() => {
//         const id = setInterval(() => {
//             setCount(count => count - 1);
//         }, 1000);

//         if (count === 0) {
//             clearInterval(id);
//         }
//         return () => clearInterval(id);
//     }, [count]);

//     return (
//         <div className="timerContainer">
//             <span className="timerText">{formatTime(count)}</span>
//         </div>
//     );
// };

// import React, { useEffect } from 'react';
// const Timer = ({ count, setCount }) => {
//     useEffect(() => {
//         if (count > 0) {
//             const timer = setTimeout(() => setCount(count - 1), 1000);
//             return () => clearTimeout(timer);
//         }
//     }, [count, setCount]);

//     return <div>남은 시간: {count}초</div>;
// };

// export default Timer;

import React, { useEffect } from 'react';

const Timer = ({ count, setCount, onTimeOut }) => {
    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            // 타이머가 0이 되었을 때 실행될 콜백 함수
            onTimeOut();
        }
    }, [count, setCount, onTimeOut]);

    // 남은 시간을 분:초 형식으로 변환
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return <div>남은 시간: {formatTime(count)}</div>;
};

export default Timer;
