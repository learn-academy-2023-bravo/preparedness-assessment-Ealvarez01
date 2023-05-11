import React, {useState} from "react"
import { Button, Input, Label, FormGroup, Form } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"
import background from './assets/background-image.jpeg'


const App = () => {

  //creates a function to set the user input by passing props in useState 
  const [input, setInput] = useState(" ")

  //creates a function when user clicks on button to handle the changing of the click by listening and targeting the value of whatever the change is.
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  //creates a modal, sets the modal and assigns it to useState to pass props to say if whatever is passed in the modal input if it is false or not.
  const [modal, setModal] = useState(false)

  //creates a function to allow the toggle to connect to the modal if it is not true. 
  const toggle = () => setModal(!modal)

  //creates a function to reset the user name when the reset button is clicked. 
  const handleReset = (e) => {
    setInput(" ")
  }

  const myStyle={
    backgroundImage: `url(${background}`,
    height:'100vh',
    marginTop:'0px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

  return (
    
    <div 
      className="entire-content"
      style={myStyle}>

      <h1 className="header">Preparedness Assessment</h1>

    <br/>
      <Form>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
        <FormGroup>
          <Input 
          className="input-field" 
          value={input} onChange={handleChange}
          />
        </FormGroup>
        </div>
        <br />
        <FormGroup>
        <Button 
          style={{
            color: 'white',
            backgroundColor: '#0dcaf0',
            margin: 'auto',
            position: 'absolute',
            bottom: '60%',
            right: '51%',
            paddingRight: '20px',
            paddingLeft: '20px'
          }}
          onClick={toggle}>Click Me</Button>
        </FormGroup>
        <FormGroup>
        <Button 
          style={{
            color: 'white',
            backgroundColor: '#0dcaf0',
            margin: 'auto',
            position: 'absolute',
            bottom: '60%',
            left: '51%',
            paddingRight: '30px',
            paddingLeft: '30px'
          }}
          className="clickMe" 
          onClick={handleReset}>Reset</Button>
        </FormGroup>
        <ModalComponent toggle={toggle} input={input} modal={modal}/>
      </div>
      </Form>
    </div>
  )
}

export default App
