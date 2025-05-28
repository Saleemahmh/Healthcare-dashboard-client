import toothImg from "../assets/humantooth.png";
import physioImg from "../assets/chiropractic.png";
import syringeImg from "../assets/syringe.png";
import eyesImg from "../assets/humaneye.png";
import heartImg from "../assets/heart.png";
import neuroImg from "../assets/neural-circuit.png";

export const Appointments = [
  {
    appointment_name: "Dentist",
    appointment_time: "09.00 - 11.00",
    card_color: "#2e0b63E8",
    card_text: "white",
    icon: toothImg,
    doctor_name: "Dr. Cameron Williamson",
  },
  {
    appointment_name: "Physiotherapy Appointment",
    appointment_time: "11.00 - 12.00",
    card_color: "#E6E6FA",
    card_text: "#2e0b63",
    icon: physioImg,
    doctor_name: "Dr. Kevin Djones",
  },
];
export const UpcomingAppointments = [
  {
    day: "On Thursday",
    appointment_schedule: [
      {
        appointment_name: "Health Checkup complete",
        appointment_time: "11.00 AM",
        card_color: "#E6E6FA",
        icon: syringeImg,
      },
      {
        appointment_name: "Opthamologist",
        appointment_time: "14.00 PM",
        card_color: "#E6E6FA",
        icon: eyesImg,
      },
    ],
  },
  {
    day: "On Saturday",
    appointment_schedule: [
      {
        appointment_name: "Cardiologist",
        appointment_time: "12.00 AM",
        card_color: "#E6E6FA",
        icon: heartImg,
      },
      {
        appointment_name: "Neurologist",
        appointment_time: "16.00 PM",
        card_color: "#E6E6FA",
        icon: neuroImg,
      },
    ],
  },
];
