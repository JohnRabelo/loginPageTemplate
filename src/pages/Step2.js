import NewForm from '../components/NewForm'
import {useNavigate} from 'react-router-dom'


const Q1 = 
    {
        Question: 'How was your food? (Select one of the options below to proceed)',
        Option1: 'Very Poor',
        Option2: 'Poor',
        Option3: 'Average',
        Option4: 'Good',
        Option5: 'Very Good',
        Catg: 'Preparation',
        CatgId: '1',
    }

function Step2pg (){

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
            history('/stp3')
          });
    }

    return(
        <div>
            <NewForm onAddFormsData={addEnteredInputsHandler} Question={Q1.Question} Option1={Q1.Option1} Option2={Q1.Option2} Option3={Q1.Option3} Option4={Q1.Option4} Option5={Q1.Option5} Catg={Q1.Catg} CatgId={Q1.CatgId} />
        </div>
    );
}

export default Step2pg;