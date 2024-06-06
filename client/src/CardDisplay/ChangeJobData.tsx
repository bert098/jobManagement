import { FC } from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import fetchJobs from '../utils/fetchJobs'
import '../Popup/Popup.css';
import '../index.css';
import axios from 'axios';

interface ModalProps {

  children: any;
  setJobs: any;
  command: string;
  onClose: any;
}

const ChangeModal: FC<ModalProps> = ({ children, setJobs, command, onClose }) => {

  console.log(children.appointmentDate)

  const initialDate = new Date(children.appointmentDate);
  const initialDay = initialDate.getUTCDate().toString().padStart(2, '0');
  const initialMonth = (initialDate.getUTCMonth() + 1).toString().padStart(2, '0');
  const initialYear = initialDate.getUTCFullYear();
  const initialTime = initialDate.toISOString().substring(11, 16);
  const [day, setDay] = useState(initialDay);
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);
  const [time, setTime] = useState(initialTime);
  const [customerName, setcustomerName] = useState(children.customerName);
  const [type, setType] = useState(children.jobType);
  const [status, setStatus] = useState(children.status);
  const [tech, setTech] = useState(children.technician);
  const handlenameChange = (e: any) => setcustomerName(e.target.value);
  const handleStatusChange = (e: any) => setStatus(e.target.value);
  const handletypeChange = (e: any) => setType(e.target.value);
  const handletechChange = (e: any) => setTech(e.target.value);
  // Handle changes for the date components
  const handleDayChange = (e: any) => setDay(e.target.value);
  const handleMonthChange = (e: any) => setMonth(e.target.value);
  const handleYearChange = (e: any) => setYear(e.target.value);
  const handleTimeChange = (e: any) => setTime(e.target.value);
  const isButtonDisabled =
    !day ||
    !month ||
    !year ||
    !time ||
    !customerName ||
    !type ||
    !status ||
    !tech;

  // Extract initial date components from jobData
  const updateAddIndex = async () => {
    try {
      if (command === 'put') {
        const combinedDate = `${year}-${month}-${day}T${time}:00Z`;
        await axios.put(`http://localhost:3001/jobs/${children.id}`, {
          id: children.id,
          customerName: customerName,
          jobType: type,
          status: status,
          appointmentDate: combinedDate,
          technician: tech,
        })
        let res = await fetchJobs()
        setJobs(res);
        onClose(true)
      } else if (command === 'post') {
        const combinedDate = `${year}-${month}-${day}T${time}:00Z`;
        await axios.post(`http://localhost:3001/jobs`, {
          customerName: customerName,
          jobType: type,
          status: status,
          appointmentDate: combinedDate,
          technician: tech,
        })
        let res = await fetchJobs()
        setJobs(res);
      }
    } catch (err: any) {
    }
  };

  return (
    <div>
      <div>
        <label className='updateLabel'>
          Customer Name
        </label>
        <input
          type="text"
          name="name"
          value={customerName}
          onChange={handlenameChange}
          className='updateInput'
        />
        <label className='updateLabel'>
          Job Type
        </label>
        <input
          type="text"
          name="type"
          value={type}
          onChange={handletypeChange}
          className='updateInput'
        />
        <label className='updateLabel'>
          Status
        </label>
        <input
          type="text"
          name="status"
          value={status}
          onChange={handleStatusChange}
          className='updateInput'
        />

        <label className='updateLabel'>
          Technician
        </label>
        <input
          type="text"
          name="tech"
          value={tech}
          onChange={handletechChange}
          className='updateInput'
        />
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Appointment Date
          </label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              name="day"
              value={day || initialDay}
              onChange={handleDayChange}
              placeholder="DD"
              style={{ width: '40px', padding: '8px', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="month"
              value={month || initialMonth}
              onChange={handleMonthChange}
              placeholder="MM"
              style={{ width: '40px', padding: '8px', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="year"
              value={year || initialYear}
              onChange={handleYearChange}
              placeholder="YYYY"
              style={{ width: '60px', padding: '8px', boxSizing: 'border-box' }}
            />
            <input
              type="text"
              name="time"
              value={time || initialTime}
              onChange={handleTimeChange}
              placeholder="HH:MM"
              style={{ width: '60px', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
        </div>
        <button disabled={isButtonDisabled} className='updateButton' onClick={() => updateAddIndex()}>
          {command === 'put' ? (
            <span>Update</span>
          ) : (
            <span>Add</span>
          )}

        </button>
      </div>
    </div>
  );
};

export default ChangeModal;