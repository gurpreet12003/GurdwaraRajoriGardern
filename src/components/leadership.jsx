import React from "react";

const committeeMembers = [
  {
    name: "Harmanjit Singh",
    designation: "President",
    image: "https://gniat.com/wp-content/uploads/2025/11/Harmanjeet-Singh-President.png",
  },
  {
    name: "Harbans Singh Bhatia",
    designation: "Sr. Vice President",
    image: "https://gniat.com/wp-content/uploads/2025/11/Harbans-Singh-Bhatia-Sr-Vice-President.png",
  },
  {
    name: "Sukhdev Singh Rayat",
    designation: "Vice President",
    image: "https://gniat.com/wp-content/uploads/2025/11/Sukhdev-Singh-Rayat-Vice-President.png",
  },
  {
    name: "Manjit Singh Khanna",
    designation: "Secretary",
    image: "https://gniat.com/wp-content/uploads/2025/11/Manjeet-Singh-Khanna-Secretary.png",
  },
  {
    name: "Parminder Singh",
    designation: "Joint Secretary",
    image: "https://gniat.com/wp-content/uploads/2025/11/Parminder-Singh-Chotmaradi-Joint-Secretary.png",
  },
  {
    name: "Perminder Kaur",
    designation: "Executive Member",
    image: "https://gniat.com/wp-content/uploads/2025/11/Perminder-Kaur-Chondok-Asst.-Joint-Secretary.png",
  },
  {
    name: "Preet Partap Singh",
    designation: "Executive Member",
    image: "https://gniat.com/wp-content/uploads/2025/11/Preet-Partap-Singh-Vicky-Cashier.png",
  },
  {
    name: "Jasmeet Singh",
    designation: "Executive Member",
    image: "https://gniat.com/wp-content/uploads/2025/11/Jasmeet-Singh-Store-Incharge.png",
  },
];

function CommitteeCard({ member }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[320px] object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-[20px] font-bold text-[#00003c] leading-tight">
          {member.name}
        </h3>

        <p className="mt-2 text-[#FF8000] text-xl font-medium">
          {member.designation}
        </p>
      </div>
    </div>
  );
}

export default function ManagementCommittee() {
  return (
    <section className="py-20 md:py-15 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00003c]">
            Management <span className="text-[#FF8000]"> Committee</span>
          </h2>

          <div className="w-24 h-1 bg-[#FF8000] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <CommitteeCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}