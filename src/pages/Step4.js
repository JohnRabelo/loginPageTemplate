import NewForm from '../components/NewForm'
import {useNavigate} from 'react-router-dom'


const Q3 = 
    {
        Question: 'How did you enjoy the environment? (Select one of the options below to proceed)',
        Option1: 'Very Unsatisfied',
        Option2: 'Unsatisfied',
        Option3: 'Neutral',
        Option4: 'Satisfied',
        Option5: 'Very Satisfied',
        Catg: 'Dining room volume',
        CatgId: '3',
    }

function Step4pg (){

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
            history('/stp5')
          });
    }

    return(
        <div>
            <NewForm onAddFormsData={addEnteredInputsHandler} Question={Q3.Question} Option1={Q3.Option1} Option2={Q3.Option2} Option3={Q3.Option3} Option4={Q3.Option4} Option5={Q3.Option5} Catg={Q3.Catg} CatgId={Q3.CatgId} />
        </div>
    );
}

export default Step4pg;