import step1cl from './Step1.module.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'

function Step1pg (){

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    

    function submitHandlermsg(event){
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;

        const enteredInputs = {
            Name: enteredName,
            Email:enteredEmail,
        };


        fetch('https://questionnaire-e2996-default-rtdb.firebaseio.com/answers.json', 
        {
            method: 'POST',
            body: JSON.stringify(enteredInputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history('/stp2')
          });

        
    }

    const history = useNavigate();


    return (<div className={step1cl.formOrganiserMsg}>
        <p>Lets start!</p>
        <form onSubmit={submitHandlermsg}>
            <div>
                <label htmlFor='name' >Your Name (required)</label>
                <input type="text" required id="name" ref={nameInputRef}  />  
            </div> 
            <div>
                <label htmlFor='email' >Your Email (required)</label>
                <input type="email" required id="email" ref={emailInputRef} /> 
            </div> 
            <button>Next</button>   
        </form>
    </div>
    );
}

export default Step1pg;