import NewForm from '../components/NewForm'
import {useNavigate} from 'react-router-dom'


const Q2 = 
    {
        Question: 'How was your service? (Select one of the options below to proceed)',
        Option1: 'Very Unsatisfied',
        Option2: 'Unsatisfied',
        Option3: 'Neutral',
        Option4: 'Satisfied',
        Option5: 'Very Satisfied',
        Catg: 'Attentiveness',
        CatgId: '2',
    }

function Step3pg (){

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
            history('/stp4')
          });
    }

    return(
        <div>
            <NewForm onAddFormsData={addEnteredInputsHandler} Question={Q2.Question} Option1={Q2.Option1} Option2={Q2.Option2} Option3={Q2.Option3} Option4={Q2.Option4} Option5={Q2.Option5} Catg={Q2.Catg} CatgId={Q2.CatgId} />
        </div>
    );
}

export default Step3pg;