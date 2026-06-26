import { useState } from "react";
import { Stethoscope } from "lucide-react";
import useInView from "../../hooks/useInView";
export default function DoctorSchedule() {
  const { ref, isInView } = useInView();

  const departments = [
  {
    title: "Physicians",
    description: "General medical consultation and primary healthcare services.",
    doctors: [
      {
        name: "Dr Deepak Kumar",
        timing: "Monday to Sunday, 09:30 AM - 11:00 AM",
      },
      {
        name: "Dr Dhiraj Mehra",
        timing: "Wednesday to Monday, 11:30 AM - 12:30 PM",
      },
      {
        name: "Dr Vikram",
        timing: "Monday to Saturday, 10:30 AM - 12:00 PM",
      },
    ],
  },

  {
    title: "Eye Surgeon & Specialists",
    description: "Eye care, retina treatment and specialist consultations.",
    doctors: [
      {
        name: "Dr Amit Purang",
        timing: "Tuesday, Thursday, Friday, Saturday, 08:30 AM - 09:20 AM",
      },
      {
        name: "Dr Yogesh Gupta",
        timing: "Sunday, Monday, Wednesday, 09:45 AM - 10:45 AM",
      },
      {
        name: "Dr S. S. Gupta",
        timing: "Thursday or Friday, 10:00 AM - 12:00 PM",
      },
      {
        name: "Dr Pankaj Varshney",
        timing: "Saturday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Pragya Ahuja",
        timing: "Wednesday or Thursday, 05:30 PM - 07:30 PM",
      },
      {
        name: "Dr Prateek Sehrawat",
        timing: "Tuesday or Friday, 11:00 AM - 12:00 PM",
      },
      {
        name: "Dr Anurag Shandil (Retina Specialist)",
        timing: "Wednesday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Amit Juneja",
        timing:
          "Tuesday Morning or Monday/Saturday Evening (05:30 PM - 06:30 PM)",
      },
    ],
  },

  {
    title: "Orthopaedic & Therapy",
    description:
      "Orthopaedic consultation, physiotherapy and rehabilitation services.",
    doctors: [
      {
        name: "Dr Parvinder Singh",
        timing: "Tuesday, Thursday, Sunday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Kapil Gupta",
        timing: "Monday or Friday, 09:00 AM - 10:00 AM",
      },
      {
        name: "Dr A. K. Dawar",
        timing: "Monday or Friday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr N. D. Khurana",
        timing: "Tuesday, Wednesday, Saturday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Andleeb Singh",
        timing: "Monday to Saturday, 05:00 PM - 06:00 PM",
      },
      {
        name: "Dr Jasleen Kaur (Physiotherapist)",
        timing: "Monday to Saturday, 09:00 AM - 01:00 PM",
      },
      {
        name: "Dr Rampreet Kaur (Acupressure)",
        timing: "Sunday to Monday, 08:30 AM - 01:00 PM",
      },
      {
        name: "Dr Rakhi Sharma (Acupressure)",
        timing: "Sunday to Monday, 08:30 AM - 01:00 PM",
      },
      {
        name: "Dr Vivek Gupta",
        timing: "Sunday to Monday, 08:30 AM - 01:00 PM",
      },
    ],
  },

  {
    title: "Heart & Mind (Cardio / Neuro / Psych)",
    description:
      "Cardiology, neurology, psychiatry and mental wellness services.",
    doctors: [
      {
        name: "Dr Harnish Bhatia",
        timing: "Wednesday, 09:00 AM - 09:45 AM",
      },
      {
        name: "Dr Saurabh Bagga",
        timing: "Thursday, 08:30 AM - 09:20 AM",
      },
      {
        name: "Dr Vikrant Katiyar",
        timing:
          "Sunday (10:00 AM - 11:00 AM) or Wednesday (08:40 AM - 09:30 AM)",
      },
      {
        name: "Dr Sakshi Sharma (Psychiatrist)",
        timing: "Tuesday or Wednesday, 08:30 AM - 10:30 AM",
      },
      {
        name: "Manmeet Kaur (Psychologist)",
        timing: "Saturday, 09:00 AM - 10:00 AM",
      },
      {
        name: "Sakshi Dhawan (Psychologist)",
        timing:
          "Monday/Wednesday Evening (05:00 PM - 07:00 PM) or Friday Morning (10:00 AM - 11:00 AM)",
      },
    ],
  },

  {
    title: "ENT & Speech",
    description:
      "ENT consultation, hearing assessment and speech therapy services.",
    doctors: [
      {
        name: "Dr K. S. Nagpal",
        timing: "Monday to Friday, 09:00 AM - 09:45 AM",
      },
      {
        name: "Dr Sahiba Bhatia (ENT Physician)",
        timing:
          "Monday to Thursday Evening (06:30 PM - 07:30 PM) or Sunday Morning (11:00 AM - 12:00 PM)",
      },
      {
        name: "Dr Ruchika Mittal (Audiologist)",
        timing: "Wednesday, 09:00 AM - 10:00 AM",
      },
    ],
  },

  {
    title: "Homeopathy, Ayurvedic & Diet",
    description:
      "Homeopathy, Ayurveda and dietary consultation services.",
    doctors: [
      {
        name: "Dr Disha Malhotra (Homeo)",
        timing:
          "Mon/Tue/Fri (09:00 AM - 10:00 AM) or Sat/Sun (10:00 AM - 11:00 AM)",
      },
      {
        name: "Dr Vishakha Bogra (Homeo)",
        timing: "Monday to Friday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Pooja Sachdeva (Homeo)",
        timing:
          "Wednesday, Thursday, Saturday, Sunday, 09:00 AM - 10:00 AM",
      },
      {
        name: "Dr Manpreet Kaur (Homeo)",
        timing: "Monday to Saturday, 11:00 AM - 12:30 PM",
      },
      {
        name: "Dr Jaskirat Kaur (Dietician)",
        timing: "Saturday or Sunday, 10:00 AM - 12:00 PM",
      },
      {
        name: "Dr M. S. Sethi (Ayurvedic)",
        timing: "Monday or Thursday, 11:00 AM - 12:00 PM",
      },
    ],
  },

  {
    title: "Surgeons & Specialists",
    description:
      "Specialist consultations including surgery, gastroenterology and oncology.",
    doctors: [
      {
        name: "Dr Nirupam Adalka (Urologist)",
        timing: "Saturday, 09:00 AM - 09:45 AM",
      },
      {
        name: "Dr S. S. Saggu (Gastroenterologist)",
        timing: "Thursday, 09:30 AM - 10:30 AM",
      },
      {
        name: "Dr Rupinder Singh (General Surgeon)",
        timing: "Tuesday or Friday, 11:00 AM - 12:00 PM",
      },
      {
        name: "Dr Avneet Kaur (Oncologist)",
        timing: "Saturday, 05:00 PM - 06:30 PM",
      },
    ],
  },

  {
    title: "Skin, Gynae, Child & Dental",
    description:
      "Dermatology, gynecology, pediatric and dental care services.",
    doctors: [
      {
        name: "Dr Manas Chopra (Dermatologist)",
        timing: "Sunday/Friday Morning or Wednesday Evening",
      },
      {
        name: "Dr Vandana Nangia (Gynaecologist)",
        timing:
          "Saturday Morning (09:00 AM - 10:30 AM) or Wednesday Evening (05:00 PM - 06:30 PM)",
      },
      {
        name: "Dr Pushpa Vasudeva (Gynaecologist)",
        timing: "Tuesday or Friday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Swati Mehrotra (Gynaecologist)",
        timing: "Sunday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Veena Dawar (Child Specialist)",
        timing: "Saturday, 10:30 AM - 11:30 AM",
      },
      {
        name: "Dr Balraj Bhandari (Child Specialist)",
        timing: "Monday, Wednesday, Friday, 10:00 AM - 11:00 AM",
      },
      {
        name: "Dr Kulwinder Singh & Team (Dentist)",
        timing: "Monday to Sunday, 09:00 AM - 01:00 PM",
      },
    ],
  },
];

  const [selectedDepartment, setSelectedDepartment] =
    useState(departments[0].title);

  const activeDepartment = departments.find(
    (dept) => dept.title === selectedDepartment
  );

  return (
    <section
      id="doctor-schedule"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#FF8000] font-semibold uppercase tracking-widest text-sm">
            Dispensary Services
          </span>

          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-[#272979]">
            Doctor Schedule
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] rounded-full mx-auto mt-4" />

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Browse departments and view consultation timings of doctors
            available at Guru Nanak Charitable Dispensary.
          </p>
        </div>

        {/* Department Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {departments.map((dept) => (
            <button
              key={dept.title}
              onClick={() => setSelectedDepartment(dept.title)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDepartment === dept.title
                  ? "bg-[#FF8000] text-white shadow-lg"
                  : "bg-white border border-gray-200 text-[#272979] hover:border-[#FF8000] hover:text-[#FF8000]"
              }`}
            >
              {dept.title}
            </button>
          ))}
        </div>

       

        {/* Doctors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {activeDepartment.doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-[#FF8000]" />
              </div>

              <h4 className="font-bold text-[#272979] text-lg">
                {doctor.name}
              </h4>

              <p className="text-gray-600 text-sm leading-6 mt-3">
                {doctor.timing}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium">
            Timings may vary on Gurpurabs and special occasions.
          </div>
        </div>
      </div>
    </section>
  );
}