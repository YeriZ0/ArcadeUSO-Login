import "../styles/modal.css";

const Modal = ({title, children, onClose}) => {
    return (
        <div className="overlay">
            <div className="modal-container">
                <button className="close-button" onClick={onClose}>X</button>
                {title && <h1>{title}</h1>}
                {children}
            </div>
        </div>
    )
}

export default Modal; 