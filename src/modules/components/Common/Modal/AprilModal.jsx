import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import './AprilModal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const AprilModal = ({
    isOpen,
    cancel,
    children,

}) => {
    const [modal, setModal] = useState(false);

    // useEffect(() => {
        
    //     setModal(isActive)

    // }, [isActive])


    const toggle = () => {
        // setSaleAnswer()
    }




    const close = () => {
        cancel(false)
    }
    
    return (
        <div>
            {/* <Button color="danger" onClick={toggle}>
                Click Me
            </Button> */}
            <Modal isOpen={isOpen} toggle={toggle} size="lg"
                // {...questions}
            >
                <ModalHeader className='p-3 ap_modal__header' toggle={close}>Отчет о звонке и планирование</ModalHeader>
                <ModalBody>
              

                <div>{children}</div>


                </ModalBody>
                <ModalFooter className='p-2 calling-modal-q-footer'>

                    <Button  size='sm' color="primary" onClick={toggle}>
                        Отправить
                    </Button>
                    <Button  size='sm' color="danger"
                        onClick={close}
                    >
                        Отмена
                    </Button>
                </ModalFooter>

            </Modal>
        </div>
    );
}

export default AprilModal;