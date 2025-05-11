import {
  RiGlobalLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "react-icons/ri";

export const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray-900 text-white px-6 py-10 md:py-10 flex flex-col md:flex-row flex-wrap gap-10 justify-around items-start">
      <div className="w-full md:w-[28%] font-semibold">
        <h3 className="text-indigo-500 font-bold text-2xl mb-4 drop-shadow-md text-shadow-purple-300 text-shadow-xs">
          Contact
        </h3>
        <img
          src="../imgs/sdit-logo.png"
          alt="Shree Devi Institute of Technology"
          className="w-[80%] mb-4"
        />
        <p className="text-sm leading-relaxed mb-2">
          Airport Road, Kenjar, Mangalore - 574142, Karnataka, India.
        </p>
        <p className="text-sm mb-1">
          📧 <a href="mailto:sditprincipal@gmail.com" className="hover:underline">sditprincipal@gmail.com</a>
        </p>
        <p className="text-sm">
          📞 <a href="tel:+918242254104" className="hover:underline">+91 (824) 2254104</a>
        </p>
      </div>

      <div className="w-full md:w-[28%]">
        <h3 className="text-indigo-500 font-bold text-2xl mb-4 text-shadow-purple-300 text-shadow-xs">
          Connect With Us
        </h3>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <a
            href="https://sdit.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <RiGlobalLine size={22} /> Official Website
          </a>
          <a
            href="https://www.facebook.com/shreedeviinstituteoftechnologymangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <RiFacebookCircleFill size={22} /> Facebook
          </a>
          <a
            href="https://www.instagram.com/sdit.official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <RiInstagramLine size={22} /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/shree-devi-institute-of-technology-sdit-kenjar-mangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <RiLinkedinBoxFill size={22} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="w-full md:w-[28%] flex flex-col rounded-md overflow-hidden">
        <h3 className="text-indigo-500 font-bold text-2xl mb-4 text-shadow-purple-300 text-shadow-2xs">
          Venue
        </h3>
        <div className="w-full h-72 md:h-48 px-2 pb-2">
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3083689141595!2d74.86735360978787!3d12.952109015254322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350d45819abf1%3A0xec9cf13e2e0ad60c!2sShree%20Devi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1746949639547!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>

    </div>
  );
};
