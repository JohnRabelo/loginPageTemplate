import formcl from './NewForm.module.css'
import { useRef } from 'react';



function NewForm(props) {

    const titleInputRef1 = useRef();
    const titleInputRef2 = useRef();
    const titleInputRef3 = useRef();
    const titleInputRef4 = useRef();
    const titleInputRef5 = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredInput1 = titleInputRef1.current.checked;
        const enteredInput2 = titleInputRef2.current.checked;
        const enteredInput3 = titleInputRef3.current.checked;
        const enteredInput4 = titleInputRef4.current.checked;
        const enteredInput5 = titleInputRef5.current.checked;

        const enteredInputs = {
            I1: enteredInput1,
            I2: enteredInput2,
            I3: enteredInput3,
            I4: enteredInput4,
            I5: enteredInput5,
        };

        props.onAddFormsData(enteredInputs);
    }


    return (
        <div className={formcl.formOrganiser}>
            <div className={formcl.questionOrganiser}>
                {props.Question}
            </div>
            <form onSubmit={submitHandler}>
                <div className={formcl.evalCategory}>
                    <div className={formcl.catgLayout}>{props.Catg}</div>
                    <div className={formcl.optionsOrganiser}>
                        <div className={formcl.optOrg}>
                            <p>{props.Option1}</p>
                            <label className={formcl.customRadioBtn}>
                            <input required type='radio' name={props.CatgId} ref={titleInputRef1} />
                            <span className={formcl.checkmark}></span>
                            </label>
                        </div>
                        <div className={formcl.optOrg}>
                            <p>{props.Option2}</p>
                            <label className={formcl.customRadioBtn}>
                            <input required type='radio' name={props.CatgId} ref={titleInputRef2} />
                            <span className={formcl.checkmark}></span>
                            </label>
                        </div>
                        <div className={formcl.optOrg}>
                            <p>{props.Option3}</p>
                            <label className={formcl.customRadioBtn}>
                            <input required type='radio' name={props.CatgId} ref={titleInputRef3} />
                            <span className={formcl.checkmark}></span>
                            </label>
                        </div>
                        <div className={formcl.optOrg}>
                            <p>{props.Option4}</p>
                            <label className={formcl.customRadioBtn}>
                            <input required type='radio' name={props.CatgId} ref={titleInputRef4} />
                            <span className={formcl.checkmark}></span>
                            </label>
                        </div>
                        <div className={formcl.optOrg}>
                            <p>{props.Option5}</p>
                            <label className={formcl.customRadioBtn}>
                            <input required type='radio' name={props.CatgId} ref={titleInputRef5} />
                            <span className={formcl.checkmark}></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className={formcl.sbmt}>Next</button>
            </form>
        </div>
    );
}

export default NewForm