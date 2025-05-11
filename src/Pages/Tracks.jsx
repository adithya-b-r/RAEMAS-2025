import { useState } from "react";
import { RiComputerLine, RiMicLine, RiPlaneLine, RiSettingsLine, RiBuildingLine, RiGroupLine, RiFlaskLine } from "react-icons/ri";

export const Tracks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const departments = [
    {
      name: "CSE / ISE / AIML / AIDS",
      icon: <RiComputerLine size={24} className="text-indigo-700" />,
      topics: [
        "AI: State of the art, open issues & research challenges and applications",
        "ML - State of the art, open issues & research challenges & applications",
        "Blockchain Technology",
        "Security",
        "Software Defined Networks",
        "Networks: Wired, Wireless, Sensor, 5G/6G",
        "Software Engineering",
        "Natural Language Processing",
        "Full stack development",
        "Data science",
        "Data analytics",
        "Image Processing"
      ]
    },
    {
      name: "Electronics & Communication",
      icon: <RiMicLine size={24} className="text-indigo-700" />,
      topics: [
        "AI Powered - Signal Processing: Enhancing Network Efficiency",
        "NLP: Better HCI",
        "Sustainable 6G: Using Eco-Friendly Technologies in Next-Gen Networks",
        "Quantum Communication in Space: Secure Data Transmission Using Quantum Cryptography"
      ]
    },
    {
      name: "Aeronautical Engineering",
      icon: <RiPlaneLine size={24} className="text-indigo-700" />,
      topics: [
        "Aero Dynamics",
        "Aircraft Materials",
        "Flight Vehicle Design"
      ]
    },
    {
      name: "Mechanical Engineering",
      icon: <RiSettingsLine size={24} className="text-indigo-700" />,
      topics: [
        "3D Printing",
        "Industry 4.0",
        "Electric Vehicles",
        "Advanced Materials & Nanotechnology",
        "Robotics in Manufacturing"
      ]
    },
    {
      name: "Civil Engineering",
      icon: <RiBuildingLine size={24} className="text-indigo-700" />,
      topics: [
        "Smart technologies for sustainable future",
        "Smart solutions for engineering challenges",
        "Applications of AI in Civil Engineering"
      ]
    },
    {
      name: "Management",
      icon: <RiGroupLine size={24} className="text-indigo-700" />,
      topics: [
        "Next-Big-Shift: Integrating People, Profit & Presence",
        "Exploring Future of HR Practices",
        "Exploring Recent Trends in Finance",
        "New Generation Marketing Strategies"
      ]
    },
    {
      name: "Basic & Applied Sciences",
      icon: <RiFlaskLine size={24} className="text-indigo-700" />,
      topics: [
        "Supercapacitors/Surfactant",
        "Corrosion",
        "Electrochemistry",
        "Polymer Chemistry",
        "Biochemistry"
      ]
    }
  ];

  const openModal = (dept) => {
    setModalContent(dept);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <section id="tracks" className="w-full px-6 md:px-12 py-14 bg-gradient-to-bl from-white via-purple-100 to-purple-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-12 text-center">Tracks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {departments.map((dept, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-md border border-purple-500 rounded-2xl shadow-lg p-6 h-48 flex items-center justify-center text-center hover:scale-105 hover:bg-gray-100/90 transition-all duration-300"
          >
            <div>
              <div className="flex justify-center items-center mb-4">
                {dept.icon}
                <span className="ml-2 text-lg font-semibold text-gray-800">{dept.name}</span>
              </div>
              <button
                onClick={() => openModal(dept)}
                className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 cursor-pointer"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 opacity-100 transition-all ease-out duration-300">
          <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 p-8 rounded-xl shadow-2xl max-w-lg w-[95%] h-fit overflow-y-auto transition-all duration-500 ease-out border-2 border-purple-500">

            <div className="flex items-center space-x-6 mb-6">
              {modalContent.icon && <span className="text-4xl text-indigo-600">{modalContent.icon}</span>}
              <h3 className="text-2xl tracking-wide font-bold text-gray-900">{modalContent.name}</h3>
            </div>

            <div className="flex flex-col space-y-4 mb-6 overflow-y-auto flex-1">
              <ul className="list-disc list-inside text-gray-800 text-lg">
                {modalContent.topics.map((topic, index) => (
                  <li key={index} className="text-base text-gray-800">{topic}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={closeModal}
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
