import classes from './Modal.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop}> </div>
}
const Modal = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>  </div>
    </div>
}

export default Modal