import React from 'react';
import './App.css';
import NumberButtons from './components/ButtonComponents/NumberButton.js';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay.js';


const oneBut = {
  symbol: "1"
};
const twoBut = {
  symbol: "2"
};
const threeBut = {
  symbol: "3"
};
const fourBut = {
  symbol: "4"
};
const fiveBut = {
  symbol: "5"
};
const sixBut = {
  symbol: "6"
};
const sevenBut = {
  symbol: "7"
};
const eightBut = {
  symbol: "8"
};
const nineBut = {
  symbol: "9"
};
const zeroBut = {
  symbol: "0"
};
const clearBut = {
  symbol: "clear"
};
const addBut = {
  symbol: "+" 
};
const subtractBut = {
  symbol: "-"
};
const multiplyBut = {
  symbol: "X"
};
const divideBut = {
  symbol: "/"
};
const equalBut = {
  symbol: "="
};

function App() {
  return (
    <div className="Buttons">
      <div className="firstRow">
        <div className="zero">
          <NumberButtons calculatorButton={zeroBut} />
        </div>
        <div className="equal">
          <NumberButtons calculatorButton={equalBut} />
        </div>
      </div>
      <div className="secondRow">
        <div className="one">
          <NumberButtons calculatorButton={oneBut}  />
        </div>
        <div className="two">
          <NumberButtons calculatorButton={twoBut} />
        </div>
        <div className="three">
          <NumberButtons calculatorButton={threeBut} />
        </div>
        <div className="add">
          <NumberButtons calculatorButton={addBut} />
        </div>
      </div>
      <div className="thirdRow">
        <div className="four">
          <NumberButtons calculatorButton={fourBut} />
        </div>
        <div className="five">
          <NumberButtons calculatorButton={fiveBut} />
        </div>
        <div className="six">
          <NumberButtons calculatorButton={sixBut} />
        </div>
        <div className="subtract">
          <NumberButtons calculatorButton={subtractBut} />
        </div>
      </div>
      <div className="fourthRow">
        <div className="seven">
          <NumberButtons calculatorButton={sevenBut} />
        </div>
        <div className="eight">
          <NumberButtons calculatorButton={eightBut} />
        </div>
        <div className="nine">
          <NumberButtons calculatorButton={nineBut} />
        </div>
        <div className="multiply">
          <NumberButtons calculatorButton={multiplyBut} />
        </div>
      </div>
      <div className="fifthRow">
        <div className="clear">
          <NumberButtons calculatorButton={clearBut} />
        </div>
        <div className="divide">
          <NumberButtons calculatorButton={divideBut} />
        </div>
      </div>
      <div className="display">
        <CalcDisplay />
      </div>
    </div>
  );
};

export default App;
