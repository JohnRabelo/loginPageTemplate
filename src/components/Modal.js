import modalcl from './Modal.module.css'



function Modal(props){


    return <div className={modalcl.modal}>
        <div className={modalcl.modalBox}>
            <p>By proceeding, you agree with our <a href='http://dossombreros.co.uk/privacy-policy/' target='_blank' rel="noreferrer">privacy policy</a>.</p>
            <button onClick={props.onCancel}>Proceed</button>
            <button onClick={props.onCancel}>Reject All</button>
        </div>
        </div>
}


export default Modal;