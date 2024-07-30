import React, {useState} from 'react'

export default function TextFrom(props) {

    const handleUCOnClick = () => {
        // console.log('click');
        let newText = text.toUpperCase();
        setText(newText);
        if(!newText) {
            props.showAlert('please write something in below text box', 'warning')
        }
    }

    const handleLCOnClick = () => {
        // console.log('click');
        let newText = text.toLowerCase();
        setText(newText);
        if(!newText) {
            props.showAlert('please write something in below text box', 'warning')
        }
    }

    const handleClOnClick = () => {
        // console.log('click');
        setText('');
    }

    const handleSpOnClick = () => {
        if(text) {
            let msg = new SpeechSynthesisUtterance();
            msg.lang = 'hi-IN';
            msg.text = text;
            window.speechSynthesis.speak(msg);
            props.showAlert('wait it will speak', 'info')
        } else {
            props.showAlert('please write something in below text box', 'warning')
        }
        
    }


    const handleOnChange = (event) => {
        // console.log('onChange');
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = 'new text'; // wrong way to change the state
    // setText = 'new text'; // correct way to change the state
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUCOnClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLCOnClick}>Convert to LowerCase</button>
        <button className="btn btn-outline-danger mx-2" onClick={handleClOnClick}>Clear</button>
        <button className="btn btn-outline-info mx-2" onClick={handleSpOnClick}>Speak</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} character</p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
