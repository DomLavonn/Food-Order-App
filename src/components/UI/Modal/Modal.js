import classes from './Modal.module.css'
import {Fragment} from "react";
import ReactDom from "react-dom";
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}> </div>
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}> {props.children} </div>
    </div>
}
// Getting document where to launch portal
const portalElement = document.getElementById('modal-root')
const Modal = props => {
    return  <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement )}
        {ReactDom.createPortal(<ModalOverlay> {props.children} </ModalOverlay>, portalElement)}

        {/*<Backdrop />*/}
        {/*<ModalOverlay></ModalOverlay>*/}
    </Fragment>
}

export default Modal