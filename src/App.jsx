import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import DoctorDetails from './components/DoctorDetails'
import Booking from './components/Booking'

const DOCTOR_LIST = [
  {
    "id": "doc1",
    "name": "Dr. John Smith",
    "specialization": "Cardiologist",
    "profileImage": "https://randomuser.me/api/portraits/men/10.jpg",
    "available": true,
    "availability": {
      "Mon": ["09:00", "10:00"],
      "Tue": ["10:00", "11:00"],
      "Wed": ["11:00"],
      "Thu": ["11:00"],
      "Fri": ["11:00"],
      "Sat": ["11:00"],
      "Sun": ["09:00"]
    },
    "bio": "Board-certified cardiologist with 15+ years of experience in treating heart conditions."
  },
  {
    "id": "doc2",
    "name": "Dr. Emily Johnson",
    "specialization": "Dermatologist",
    "profileImage": "https://randomuser.me/api/portraits/women/11.jpg",
    "available": true,
    "availability": {
      "Mon": ["09:30", "10:30"],
      "Tue": ["10:00", "11:00"],
      "Thu": ["11:00"]
    },
    "bio": "Specialist in treating chronic skin conditions with a holistic approach."
  },
  {
    "id": "doc3",
    "name": "Dr. Sarah Brown",
    "specialization": "Neurologist",
    "profileImage": "https://randomuser.me/api/portraits/women/12.jpg",
    "available": false,
    "availability": {},
    "bio": "Experienced in treating migraines, seizures, and nervous system disorders."
  },
  {
    "id": "doc4",
    "name": "Dr. James Wilson",
    "specialization": "Orthopedic",
    "profileImage": "https://randomuser.me/api/portraits/men/12.jpg",
    "available": true,
    "availability": {
      "Mon": ["10:00", "11:00"],
      "Wed": ["10:30", "11:30"],
      "Fri": ["09:00"]
    },
    "bio": "Orthopedic surgeon focused on sports injuries and joint replacements."
  },
  {
    "id": "doc5",
    "name": "Dr. Kavita Sharma",
    "specialization": "Pediatrician",
    "profileImage": "https://randomuser.me/api/portraits/women/45.jpg",
    "available": true,
    "availability": {
      "Mon": ["09:00", "10:00", "11:00"],
      "Wed": ["10:30", "11:30"],
      "Fri": ["09:00"]
    },
    "bio": "Specialist in child healthcare and immunization with 10+ years of experience."
  },
  {
    "id": "doc6",
    "name": "Dr. Arjun Mehta",
    "specialization": "ENT Specialist",
    "profileImage": "https://randomuser.me/api/portraits/men/34.jpg",
    "available": false,
    "availability": {},
    "bio": "Expert in ear, nose, and throat disorders with experience in endoscopic surgeries."
  },
  {
    "id": "doc7",
    "name": "Dr. Aisha Khan",
    "specialization": "Gynecologist",
    "profileImage": "https://randomuser.me/api/portraits/women/51.jpg",
    "available": true,
    "availability": {
      "Tue": ["09:30", "10:30"],
      "Thu": ["11:00", "12:00"],
      "Sat": ["10:00"]
    },
    "bio": "Trusted OB/GYN focused on women’s reproductive health and pregnancy care."
  },
  {
    "id": "doc8",
    "name": "Dr. Ramesh Patel",
    "specialization": "General Physician",
    "profileImage": "https://randomuser.me/api/portraits/men/39.jpg",
    "available": true,
    "availability": {
      "Mon": ["09:00", "09:30", "10:00"],
      "Tue": ["09:00", "09:30"],
      "Wed": ["10:00"]
    },
    "bio": "Primary care provider with expertise in chronic disease management."
  },
  {
    "id": "doc9",
    "name": "Dr. Lily Fernandes",
    "specialization": "Psychiatrist",
    "profileImage": "https://randomuser.me/api/portraits/women/60.jpg",
    "available": true,
    "availability": {
      "Mon": ["10:30"],
      "Thu": ["11:00", "11:30"],
      "Sat": ["10:00"]
    },
    "bio": "Mental health specialist helping patients with anxiety, depression, and trauma."
  },
  {
    "id": "doc10",
    "name": "Dr. Nikhil Rao",
    "specialization": "Dentist",
    "profileImage": "https://randomuser.me/api/portraits/men/55.jpg",
    "available": false,
    "availability": {},
    "bio": "Cosmetic and general dentist with a passion for painless dental procedures."
  }
]


const App = () =>
{

    const [data, setDate] = useState(DOCTOR_LIST)

    return (

    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home doctors = {data}/>} />
            <Route exact path = "/doctor/:id" element = {<DoctorDetails doctors = {data}/>}/>
            <Route exact path = "/booking/:id" element= {<Booking doctors = {data}/>}/>
        </Routes>
    </BrowserRouter>
)
}
    


export default App