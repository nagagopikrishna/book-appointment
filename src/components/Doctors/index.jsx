import {Link} from 'react-router-dom'

import './index.css'

const Doctors = (props) =>{
    const {doctorsList} = props
    const {id, name, specialization, profileImage, available} = doctorsList
    const doctorAvailability = available ? "doctor-availability" : "doctor-unavailability"
    return(
        <Link to={`/doctor/${id}`} className='link'>
        <li className="doctors-list">
            <img src={profileImage} alt={name} className='profile-image'/>
            <div className='doctor-detail-container'>
                <h1 className='doctor-name'> {name}</h1>
                <p className='doctor-specialization'> {specialization}</p>
                <p className={doctorAvailability}> {available ? "available" : "unavailable"}</p>
            </div>
        </li>
        </Link>
    )
}

export default Doctors