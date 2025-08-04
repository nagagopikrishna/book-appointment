# 🏥 Healthcare Appointment Booking Interface

A responsive web application for booking doctor appointments. Built with **React.js**, it allows users to browse doctors, check their availability, and confirm bookings seamlessly.

---

## 📌 Features

- 🧑‍⚕️ View list of available doctors
- 📋 View individual doctor’s details & availability
- 📆 Book an appointment via an intuitive form
- ✅ Confirm bookings with a success message
- ❌ Show “Doctor Unavailable” page if a doctor is inactive
- 🔙 Navigate back to Home from any page

---

## 🚀 Tech Stack

| Layer       | Technology        |
|------------|-------------------|
| Frontend   | React.js (w/ React Router DOM) |
| Styling    | CSS (Modular per component) |
| Icons      | react-icons (Feather / FontAwesome) |
| Data       | Dummy JSON data (doctor list) |

---

## 📁 Folder Structure

src/
│
├── components/
│ ├── DoctorList.jsx # Home screen - lists all doctors
│ ├── DoctorDetails.jsx # Doctor detail page with availability
│ ├── Booking.jsx # Booking form for appointments
│ └── NotFound.jsx # Doctor unavailable screen
│
├── assets/ # Optional: profile images
│
├── App.js # Routing logic
├── index.css # Global styles
└── index.js # Entry point



---

## 📚 How It Works

### 1. 🏠 Home Page

Displays a list of doctors using cards. Each card includes:
- Profile picture
- Name & specialization
- Status: Available / Unavailable
- Link to view full profile

---

### 2. 📄 Doctor Details Page

On clicking a doctor:
- Shows full profile
- Bio and Specialization
- Weekly availability
- “Book Appointment” button

If the doctor is marked as `available: false`, a **Not Found** message is shown instead.

---

### 3. 📝 Booking Page

- Includes form: `Name`, `Email`, `Date`, `Time`
- Validates form fields
- On successful submission:
  - Displays confirmation message with details
  - Button to return to home

---

### 4. 🔄 Routing Structure

| Path               | Component         | Description                      |
|--------------------|------------------|----------------------------------|
| `/`                | DoctorList        | Home - List all doctors          |
| `/doctor/:id`      | DoctorDetails     | View doctor profile & availability |
| `/booking/:id`     | Booking           | Appointment form for selected doctor |
| `*`                | NotFound (fallback) | For unavailable doctor IDs      |

---

## 🧪 Dummy Data Format (doctor)

```js
{
  id: "1",
  name: "Dr. Asha Reddy",
  specialization: "Cardiologist",
  profileImage: "path/to/image.jpg",
  bio: "Experienced cardiologist with 10+ years of practice.",
  availability: {
    Monday: ["9:00 AM", "11:00 AM"],
    Wednesday: ["2:00 PM", "4:00 PM"]
  },
  available: true
}
