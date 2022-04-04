import React, { useState } from "react"
import './index.css'


function App() {

  //state
  const[weight, setWeight] = useState(0)
  const[height, setHeight] = useState(0)
  const[bmi, setBmi] = useState('')
  const[message, setMessage] = useState('')

  let imgSrc = ''

  //do calculation:
  let calcBmi = (event) => {

    //prevent submit:
    event.preventDefault()

    if(weight === 0 || height === 0) {
      alert('Please enter your weight and height')
    }else {
      //formula: weight * height^2
      let bmi = ((weight) / (height*height))
      setBmi(bmi.toFixed(2))

      //Logic for message:
      if(bmi < 18.5) {
        setMessage("Underweight")
      }else if(bmi >=18.5 && bmi < 25) {
        setMessage('You are normal')
      }else if(bmi>=25 && bmi <= 30){
        setMessage('Overweight')
      }else {
        setMessage('Gemok sangat obes woi!')
      }

    }
  }


  //reset
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>

        <div>
          <label>Weight (kg)</label>
          <input value={weight} onChange={(event) => setWeight(event.target.value)} />
        </div>

        <div>
          <label>Height (m)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)}  />
        </div>

        <button className="btn" type="submit">Submit</button>
        <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>

      </div>
    </div>
  );
}

export default App;
