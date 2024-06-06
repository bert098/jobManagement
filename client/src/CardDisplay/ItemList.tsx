import React, { useState } from 'react';
import './CardDisplay.css'
import fetchJobs from '../utils/fetchJobs'
import ViewModal from '../Popup/viewDataPopup';
import EditModel from '../Popup/editDataPopup'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
interface ItemListProps {
  items: any[];
  setJobs: any
}

const ItemList: React.FC<ItemListProps> = ({ items, setJobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [jobData, setjobData] = useState(false);

  const openInfoModal = async (id: any) => {

    let res = await axios.get("http://localhost:3001/jobs", {
      params: {
        id: id,
      }
    })
    setjobData(res.data)
    setShowModal(true);
  };

  const closeInfoModal = () => {
    setShowModal(false);
  };
  const openUpdateModal = async (id: any) => {

    let res = await axios.get("http://localhost:3001/jobs", {
      params: {
        id: id,
      }
    })
    setjobData(res.data)
    setShowUpdateModal(true);
  };

  const closeUpdateModal = (showToast: boolean) => {
    console.log(showToast)
    if(showToast){
      toast.success("Job Update Successful!");
    }
    setShowUpdateModal(false);
  };
  const deleteIndex = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3001/jobs/${id}`)
      let res = await fetchJobs()
      setJobs(res);
    } catch (err: any) {
    }
  };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className='cardTitle'>
              <div className='jobName'>
                {item.jobType}
              </div>
              <div className='actionButtons'>
                <button className='updateButton' onClick={() => openUpdateModal(item.id)}>Edit Job</button>
                <EditModel show={showUpdateModal} onClose={closeUpdateModal} setJobs={setJobs}>
                  {jobData}
                </EditModel>
                <button className='viewButton' onClick={() => openInfoModal(item.id)}>View Job</button>
                
                <ViewModal show={showModal} onClose={closeInfoModal}>
                  {jobData}
                </ViewModal>
                <button className='deleteButton' onClick={() => deleteIndex(item.id)}>
                  Delete
                </button>
              </div>
            
            </span>

          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default ItemList;