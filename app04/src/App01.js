//import style from './App.module.css';
import MyCom from './components/MyCom';


function App() {
  let mv1 = [
    {
      "rnum": "1",
      "rank": "1",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20215601",
      "movieNm": "공조2: 인터내셔날",
      "openDt": "2022-09-07",
      "salesAmt": "186527512",
      "salesShare": "23.2",
      "salesInten": "-645733705",
      "salesChange": "-77.6",
      "salesAcc": "68000199650",
      "audiCnt": "18989",
      "audiInten": "-61139",
      "audiChange": "-76.3",
      "audiAcc": "6624892",
      "scrnCnt": "979",
      "showCnt": "3048"
    }, {
      "rnum": "2",
      "rank": "2",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20198317",
      "movieNm": "인생은 아름다워",
      "openDt": "2022-09-28",
      "salesAmt": "762341301",
      "salesShare": "19.1",
      "salesInten": "246345946",
      "salesChange": "47.7",
      "salesAcc": "5578306979",
      "audiCnt": "81115",
      "audiInten": "26481",
      "audiChange": "48.5",
      "audiAcc": "580732",
      "scrnCnt": "1123",
      "showCnt": "3791"
    }, {
      "rnum": "3",
      "rank": "3",
      "rankInten": "1",
      "rankOldAndNew": "OLD",
      "movieCd": "20219628",
      "movieNm": "정직한 후보2",
      "openDt": "2022-09-28",
      "salesAmt": "534867782",
      "salesShare": "13.4",
      "salesInten": "148849184",
      "salesChange": "38.6",
      "salesAcc": "6684919504",
      "audiCnt": "61917",
      "audiInten": "17241",
      "audiChange": "38.6",
      "audiAcc": "695477",
      "scrnCnt": "930",
      "showCnt": "3143"
    },
    {
      "rnum": "4",
      "rank": "4",
      "rankInten": "-1",
      "rankOldAndNew": "OLD",
      "movieCd": "20226777",
      "movieNm": "극장판 짱구는 못말려: 수수께끼! 꽃피는 천하떡잎학교",
      "openDt": "2022-09-28",
      "salesAmt": "626039988",
      "salesShare": "15.7",
      "salesInten": "122686696",
      "salesChange": "24.4",
      "salesAcc": "3892974107",
      "audiCnt": "61786",
      "audiInten": "12137",
      "audiChange": "24.4",
      "audiAcc": "389215",
      "scrnCnt": "869",
      "showCnt": "1763"
    },
    {
      "rnum": "5",
      "rank": "5",
      "rankInten": "1",
      "rankOldAndNew": "OLD",
      "movieCd": "20226670",
      "movieNm": "극장판 헬로카봇: 수상한 마술단의 비밀",
      "openDt": "2022-09-28",
      "salesAmt": "156968329",
      "salesShare": "3.9",
      "salesInten": "44710136",
      "salesChange": "39.8",
      "salesAcc": "1686672816",
      "audiCnt": "16574",
      "audiInten": "4661",
      "audiChange": "39.1",
      "audiAcc": "179046",
      "scrnCnt": "528",
      "showCnt": "788"
    },
    {
      "rnum": "6",
      "rank": "6",
      "rankInten": "-1",
      "rankOldAndNew": "OLD",
      "movieCd": "20225729",
      "movieNm": "스마일",
      "openDt": "2022-10-06",
      "salesAmt": "182957543",
      "salesShare": "4.6",
      "salesInten": "40765480",
      "salesChange": "28.7",
      "salesAcc": "528985088",
      "audiCnt": "16422",
      "audiInten": "3588",
      "audiChange": "28",
      "audiAcc": "48921",
      "scrnCnt": "455",
      "showCnt": "828"
    },
    {
      "rnum": "7",
      "rank": "7",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20226739",
      "movieNm": "고고다이노 극장판: 얼음공룡의 비밀",
      "openDt": "2022-10-05",
      "salesAmt": "104902896",
      "salesShare": "2.6",
      "salesInten": "16388877",
      "salesChange": "18.5",
      "salesAcc": "253017713",
      "audiCnt": "10954",
      "audiInten": "885",
      "audiChange": "8.8",
      "audiAcc": "28056",
      "scrnCnt": "531",
      "showCnt": "723"
    },
    {
      "rnum": "8",
      "rank": "8",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20217624",
      "movieNm": "컴백홈",
      "openDt": "2022-10-05",
      "salesAmt": "65957025",
      "salesShare": "1.7",
      "salesInten": "12811039",
      "salesChange": "24.1",
      "salesAcc": "349953832",
      "audiCnt": "6727",
      "audiInten": "1254",
      "audiChange": "22.9",
      "audiAcc": "37576",
      "scrnCnt": "581",
      "showCnt": "1092"
    },
    {
      "rnum": "9",
      "rank": "9",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20227308",
      "movieNm": "스파이더맨: 노 웨이 홈 '펀버전'",
      "openDt": "2022-10-05",
      "salesAmt": "59212604",
      "salesShare": "1.5",
      "salesInten": "5244606",
      "salesChange": "9.7",
      "salesAcc": "220707206",
      "audiCnt": "5261",
      "audiInten": "479",
      "audiChange": "10",
      "audiAcc": "20218",
      "scrnCnt": "330",
      "showCnt": "610"
    },
    {
      "rnum": "10",
      "rank": "10",
      "rankInten": "0",
      "rankOldAndNew": "OLD",
      "movieCd": "20226726",
      "movieNm": "극장판 검정고무신 : 즐거운 나의 집",
      "openDt": "2022-10-06",
      "salesAmt": "47445800",
      "salesShare": "1.2",
      "salesInten": "10587200",
      "salesChange": "28.7",
      "salesAcc": "105013800",
      "audiCnt": "4708",
      "audiInten": "828",
      "audiChange": "21.3",
      "audiAcc": "11304",
      "scrnCnt": "232",
      "showCnt": "313"
    }
  ]
  const mvs = mv1.map((m) => <MyCom key={m.movieCd} item={m} />)
  //(m) : 임의의 객체를 선언한 인자, 
  return (
    <>
      <h1>박스오피스</h1>
      {mvs}
    </>
  );
}

export default App;
