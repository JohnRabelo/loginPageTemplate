import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";
import homecl from './Home.module.css'
import { useState } from "react";
import { CSSTransition} from 'react-transition-group'
import { NavLink } from "react-router-dom";

function HomePg(){

    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [isEnter, setIsEnter] = useState(false)

    function closeModalHandler(){
        setModalIsOpen(false);
        setIsEnter(true)
    }


    

    return (
        <div className={homecl.homeContainer}>
            {modalIsOpen  && <Modal onCancel={closeModalHandler} />}
            {modalIsOpen && <Backdrop />}
            <CSSTransition in={isEnter} timeout={6000} classNames="myclass" >
            <p>At Dos Sombreros, we're always working to make your experience the best it can possibly be.<br/><br/> Please let us know how we did, and how we can make it even better. </p>
            </CSSTransition>
            <NavLink to='/stp1' className="nvglink">Start</NavLink>
        </div>
    );
}

export default HomePg;

