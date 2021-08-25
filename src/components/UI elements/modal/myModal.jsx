import { Button, Modal } from 'react-bootstrap';

function MyModal({ result, modalShow, handleModalClose, iaCompletion, playerCompletion, playerBug }) {
   return (
      <>
         <Modal
            show={modalShow}
            onHide={handleModalClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title>{result}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <h5>Scores :</h5>
               <p className='mb-0' ><b>IA</b> : {iaCompletion}% de code</p>
               <p><b>Joueur</b> : {playerCompletion}% de code, {playerBug}% de bug</p>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleModalClose}>
                  Fermer
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default MyModal;