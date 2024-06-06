import { FC } from 'react';
import formatDate from '../utils/convertDate'
import './Popup.css'; // Create a CSS file for styling

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: any;
}

const viewModal: FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }
  const formattedDate = formatDate(children.appointmentDate);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h1>
          {children.jobType}
        </h1>
        <div>
          <div className='infoSpacing'>
            Customer Name: {children.customerName}
          </div>
          <div className='infoSpacing'>
            Status: {children.status}
          </div>
          <div className='infoSpacing'>
            Date: {formattedDate}
          </div>
          <div className='infoSpacing'>
            Technician: {children.technician}
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewModal;