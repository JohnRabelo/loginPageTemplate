import NewForm from '../components/NewForm'
import {useNavigate} from 'react-router-dom'


const Q4 = 
    {
        Question: 'How likely are you to recommend our restaurant to a friend? (Select one of the options below to proceed)',
        Option1: 'Very Unlikely',
        Option2: 'Unlikely',
        Option3: 'Neutral',
        Option4: 'Likely',
        Option5: 'Very Likely',
        Catg: 'Satisfaction',
        CatgId: '4',
    }

function Step5pg (){

    const history = useNavigate();

    function addEnteredInputsHandler(enteredInputs){
        fetch('https://questionnaire-e2996-default-rtdb.firebaseio.com/answers.json', 
        {
            method: 'POST',
            body: JSON.stringify(enteredInputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history('/genfeedback')
          });
    }

    return(
        <div>
            <NewForm onAddFormsData={addEnteredInputsHandler} Question={Q4.Question} Option1={Q4.Option1} Option2={Q4.Option2} Option3={Q4.Option3} Option4={Q4.Option4} Option5={Q4.Option5} Catg={Q4.Catg} CatgId={Q4.CatgId} />
        </div>
    );
}

export default Step5pg;