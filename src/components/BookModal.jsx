import { Button, Modal } from "react-bootstrap";

const BookModal = (props) => {

// eslint-disable-next-line react/prop-types
const {onHide,showName, showId, existingTickets} = props

    const handleBookTicket = (e) => {
        e.preventDefault()
        const showName = e.target.showName.value
        const audienceName = e.target.audienceName.value
        const phoneNumber = e.target.phoneNumber.value
        const ticket = {showId,showName,audienceName,phoneNumber}
        console.log(ticket)
           // Save the new ticket
      const updatedData = [...existingTickets, ticket];
      
      localStorage.setItem('bookedTickets', JSON.stringify(updatedData));
      alert('Ticket booked successfully!');
        onHide()

    }

  return (
    <div>
      <Modal
        {...props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
           <form className='position-relative' onSubmit={handleBookTicket}>
                    
                    <input className='w-100 p-2  mb-1 rounded border-0 bg-black bg-opacity-10' type="text" name="showName" id="" defaultValue={showName} readOnly required />
                    <input className='w-100 p-2  mb-1 rounded border-0 bg-black bg-opacity-10' type="text" name="audienceName" id="" placeholder="Enter Your Name" required />
                    <input className='w-100 p-2  mb-5 rounded border-0 bg-black bg-opacity-10' type="number" name="phoneNumber" id="" placeholder="Enter Your Phone Number" required />

                    <Button className='position-absolute bottom-0 end-0 ' variant="success" type='submit'>Buy</Button>
                </form>
        </Modal.Body>
        
      </Modal>
    </div>
  );
};

export default BookModal;
