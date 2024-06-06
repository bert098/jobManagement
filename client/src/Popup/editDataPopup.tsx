import { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Popup.css';
import ChangeModal from '../CardDisplay/ChangeJobData'

interface ModalProps {
  show: boolean;
  onClose: (showToast: boolean) => void;
  setJobs: any
  children: any;
}

const editModal: FC<ModalProps> = ({ show, onClose, setJobs, children }) => {
  if (!show) {
    return null;
  }



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={() => onClose(false)}>X</button>
        <ChangeModal children={children} setJobs={setJobs} command='put' onClose={() => onClose(true)} />
      </div>
    </div>
  );
};

export default editModal;