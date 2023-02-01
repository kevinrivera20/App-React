import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const obtResult = useRef(null);

  const [result, setResult] = useState('')

  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
  }

  const removeLetterIndex = (text, index) => {
    return text.substring(0, text.length + index);
  }

  const sliceRemove = (text, index) => {
    return text.slice(index)
  }

  const ruleOne = (text) => {
    const lastLetter = sliceRemove(text, -1);
    const removeLetter = removeLetterIndex(text, -1);
    let textResult = '';
    if (lastLetter === 'e') {
      textResult = removeLetter + "ing"
      setResult(textResult)
    } else {
      const resultNormal = text + "ing"
      setResult(resultNormal)
      console.log("false");
    }
  }
  const ruleTwo = (text) => {
    const lastLetters = sliceRemove(text, -2);
    const removeLetters = removeLetterIndex(text, -2);
    let textResultTwo = '';
    if (lastLetters === 'ie') {
      textResultTwo = removeLetters + "ying";
      setResult(textResultTwo)
    }
  }
  const ruleThree = (text) => {
    const lastTwo = text.split('')[text.length - 2];
    const last = sliceRemove(text, -1);
    const isVowelPenultimateLetter = isVowel(lastTwo)
    const isVowelLastLetter = isVowel(last)
    let textResultThree = '';
    console.log(isVowelPenultimateLetter, isVowelLastLetter)
    if (!isVowelLastLetter && isVowelPenultimateLetter) {
      console.log("Se cumple para la condicion");
      textResultThree = text + last + "ing"
      setResult(textResultThree)
      if (last === "y" || last === "w") {
        textResultThree = text + "ing";
        setResult(textResultThree)
      }
    }
  }

  const handleClick = () => {
    setResult(obtResult.current.value)
    //Primera regla
    const text = obtResult.current.value;
    ruleOne(text);
    //Segunda regla
    ruleTwo(text);
    //Tercer regla 
    ruleThree(text);
    //const penultimate = console.log(textThree.substring(0, textThree.length - 1));
  }






  return (
    <div className="App">
      <header className="App-header">
        <label>Ingresa el texto <input type="text" id="result" name="result" ref={obtResult} />
          <br />
          <br />
          <button onClick={handleClick}>Ver resultado</button>
          <h1>Resultado: {result}</h1>
        </label>
      </header>
    </div>
  );
}

export default App;
