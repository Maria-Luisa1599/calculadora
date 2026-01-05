import Input from "./components/Input";
import Buttons from "./components/Buttons";

import { Container, Content, Row } from "./styles";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
      } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handlePercNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
      } else {
      const sum = Number(firstNumber) * Number(currentNumber) / 100;
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }
  
const handleDelNumber = () => {
  setCurrentNumber(prev => {
    if (prev.length <= 1) {
      return '0';
    }
    return prev.slice(0, -1);
  });
};

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch (operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
          case '%':
            handlePercNumbers();
            break;
          default:
            break;
      } 
  }
}
  //const handleAddNumber = function(num) {
  //  setCurrentNumber(function(prev) {
  //    return `${number}${prev}`;
  //  });
  //};

  return (
    <Container>
      <Content>
        <Input valor={currentNumber} />

        <Row>
          <Buttons label="AC" variant="clear"onClick={handleOnClear}></Buttons>
          <Buttons label="( )" variant="operations"></Buttons>
          <Buttons label="%" variant="operations" onClick={handlePercNumbers}></Buttons>
          <Buttons label="÷" variant="operations" size="bigger" onClick={handleDivNumbers}></Buttons>
        </Row>

        <Row>
          <Buttons label="7" onClick={() => handleAddNumber('7')}></Buttons>
          <Buttons label="8" onClick={() => handleAddNumber('8')}></Buttons>
          <Buttons label="9" onClick={() => handleAddNumber('9')}></Buttons>
          <Buttons label="x" variant="operations" size="bigger" onClick={handleMultNumbers}></Buttons>
        </Row>

        <Row>
          <Buttons label="4" onClick={() => handleAddNumber('4')}></Buttons>
          <Buttons label="5" onClick={() => handleAddNumber('5')}></Buttons>
          <Buttons label="6" onClick={() => handleAddNumber('6')}></Buttons>
          <Buttons label="-" variant="operations" size="bigger" onClick={handleMinusNumbers}></Buttons>
        </Row>

        <Row>
          <Buttons label="1" onClick={() => handleAddNumber('1')}></Buttons>
          <Buttons label="2" onClick={() => handleAddNumber('2')}></Buttons>
          <Buttons label="3" onClick={() => handleAddNumber('3')}></Buttons>
          <Buttons label="+" variant="operations" size="bigger" onClick={handleSumNumbers}></Buttons>
        </Row>

        <Row>
          <Buttons label="0" onClick={() => handleAddNumber('0')}></Buttons>
          <Buttons label=","></Buttons>
          <Buttons label="Del" onClick={handleDelNumber}></Buttons>
          <Buttons label="=" variant="equals" size="bigger" onClick={handleEquals}></Buttons>
        </Row>
      </Content>
    </Container>
  );
}



export default App;
