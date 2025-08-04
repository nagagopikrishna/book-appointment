// import { useParams, useNavigate, Link } from "react-router-dom"
// import { FaArrowLeftLong } from "react-icons/fa6";

// import './index.css'

// const DoctorDetails = ({doctors}) =>{

//     const {id} = useParams();

//     const details = doctors.find((each) => each.id == id);
//     const {name, bio, profileImage, availability, specialization, available} = details;
//     const navigate = useNavigate();
//     const entries = Object.entries(availability); 

//     return (
//         <div className="doctor-details-container">
//             <button className = "back-button" type="button" onClick={() => navigate("/")}> <FaArrowLeftLong/> back </button>
//             <div className="sub-container-details">
//                 <div className="details-container">
//                     <img src={profileImage} alt={name} className="doctor-details-profile"/>
//                     <div>
//                         <h1 className="doctor-details-name"> {name}</h1>
//                         <p className="doctor-details-specialization">{specialization}</p>
//                         <p className="doctor-details-bio"> {bio}</p>
//                     </div>
//                 </div>
//                 <h1 className="doctor-details-availability"> Availability </h1>
//                 <ul className="availability-list">
//                 {entries.map(([day, times]) => (
//                 <li key={day}>{day}: {times.join(', ')}</li>
//                 ))}
//                 </ul>
//                 <Link to = {`/booking/${id}`}>
//                 <button type="button" className="book-appointment"> Book Appointment</button>    
//                 </Link>         
//             </div>
//         </div>
//     )
// }
    


// export default DoctorDetails



import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdBlockFlipped } from "react-icons/md";
import './index.css';

const DoctorDetails = ({ doctors }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const details = doctors.find((each) => each.id === id);

  if (!details || !details.available) {
    return (
      <div className="doctor-unavailable-container">
        {/* <button className="back-button" onClick={() => navigate("/")}>
          <FaArrowLeftLong /> Back
        </button> */}
        <MdBlockFlipped className="unavailable-icon"/>
        {/* <div className="unavailable-content"> */}
          <h1 className="unavailable-heading">Doctor Unavailable</h1>
          <p className="unavailable-message">
            The doctor you're trying to view is currently not accepting appointments.
          </p>
          <Link to="/" className="return-home-link">
            <button className="return-home-button">Return to Home</button>
          </Link>
        </div>
    //   </div>
    );
  }

  const { name, bio, profileImage, availability, specialization } = details;
  const entries = Object.entries(availability);

  return (
    <div className="doctor-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <FaArrowLeftLong /> Back
      </button>
      <div className="sub-container-details">
        <div className="details-container">
          <img src={profileImage} alt={name} className="doctor-details-profile" />
          <div>
            <h1 className="doctor-details-name">{name}</h1>
            <p className="doctor-details-specialization">{specialization}</p>
            <p className="doctor-details-bio">{bio}</p>
          </div>
        </div>

        <h1 className="doctor-details-availability">Availability</h1>
        <ul className="availability-list">
          {entries.map(([day, times]) => (
            <li key={day}>
              {day}: {times.join(", ")}
            </li>
          ))}
        </ul>

        <Link to={`/booking/${id}`} className="book-appointment-link">
          <button className="book-appointment">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorDetails;
