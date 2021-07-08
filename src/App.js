import './App.css';
import Board from "./Board";
import cat1 from "./images/cat_1.png";
import cat2 from "./images/cat_2.jpeg";
import cat3 from "./images/cat_3.jpg";
import dog1 from "./images/dog_1.jpg";
import dog2 from "./images/dog_2.jpg";
import dog3 from "./images/dog_3.jpg";
import raccoon from "./images/raccoon.png";
import duck from "./images/duck.jpg";
import squirrel from "./images/squirrel.png";
import {useState} from "react";
import Header from "./Header";

function App() {
  const captchaImages = [
    {
      id: 1,
      src: cat1,
      flag: true
    },
    {
      id: 2,
      src: squirrel,
      flag: false
    },
    {
      id: 3,
      src: dog1,
      flag: false
    },
    {
      id: 4,
      src: raccoon,
      flag: false
    },
    {
      id: 5,
      src: cat2,
      flag: true
    },
    {
      id: 6,
      src: duck,
      flag: false
    },
    {
      id: 7,
      src: cat3,
      flag: true
    },
    {
      id: 8,
      src: dog2,
      flag: false
    },
    {
      id: 9,
      src: dog3,
      flag: false
    }
  ];

  const [flag, setFlag] = useState(true);
  const [result, setResult] = useState('');

  const clickImage = (imageId) => {
    let tempFlag = captchaImages.find(el => el.id === imageId).flag;
    if(flag) {
      setFlag(tempFlag ? flag : tempFlag);
    }
  }

  const checkResult = () => {
    setResult(flag ? "Congrats! You passed the captcha!" : "You didn't passed. Try again.")
  }

  const restart = () => {
    setResult('');
    setFlag(true);
  }


  return (
    <div className="App">
      <Header />
      <Board captchaImages={captchaImages} clickImage={clickImage}/>
      <button className={'btn btn-success'} onClick={() => checkResult()}>Submit</button>
      {result && <button className={'btn btn-secondary'} onClick={() => restart()}>Restart</button>}
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
