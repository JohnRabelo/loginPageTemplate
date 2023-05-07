import fdbcl from './GeneralFeedback.module.css'
import { useRef } from 'react';
import {useNavigate} from 'react-router-dom'

function FdbPg() {

    const txtInputRef = useRef();

    

    function submitHandlermsg(event){
        event.preventDefault();
        const enteredTxt = txtInputRef.current.value;

        const enteredInputs = {
            Txt: enteredTxt,
        };


        fetch('https://questionnaire-e2996-default-rtdb.firebaseio.com/answers.json', 
        {
            method: 'POST',
            body: JSON.stringify(enteredInputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history('/thankyou')
          });

        
    }

    const history = useNavigate();


    return (<div className={fdbcl.formOrganiserMsg}>
        <p>Is there anything else you want to tell us?</p>
        <form onSubmit={submitHandlermsg}>
            <textarea className={fdbcl.fdbmsg} ref={txtInputRef}/>
            <button>Send</button>
            
        </form>
    </div>
    );
}

export default FdbPg;