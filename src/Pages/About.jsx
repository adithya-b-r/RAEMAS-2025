export const About = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-br from-purple-50 via-purple-100 to-white flex flex-col items-center justify-center px-6 md:px-12 py-14 gap-20">

      {/* About the College */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl">
        {/* Image(s) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
          <img
            className="rounded-xl shadow-xl shadow-purple-200 max-w-full h-auto transition-transform transform hover:scale-105"
            src="../imgs/sdit.jpg"
            alt="Shree Devi Institute of Technology"
          />
          <img
            className="md:block hidden rounded-xl shadow-xl shadow-purple-200 max-w-full h-auto transition-transform transform hover:scale-105"
            src="../imgs/sdit2.jpg"
            alt="Shree Devi Institute of Technology"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-lg border border-purple-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6">
            About the College
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Shree Devi Institute of Technology (SDIT), Kenjar Mangalore – a premier institution dedicated to excellence
            in engineering education and holistic development.
            <br /><br />
            Established in 2006, Shree Devi Institute of Technology has emerged as a beacon of quality education, offering a
            conducive learning environment that fosters innovation, creativity, and leadership. Our institution is affiliated
            to Visvesvaraya Technological University & recognized by AICTE, ensuring that our programs adhere to the highest
            academic standards and industry relevance.
          </p>
        </div>
      </div>

      {/* About RAEMAS */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-7xl">
        {/* Text */}
        <div className="w-full md:w-1/2 bg-white/60 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-lg border border-purple-200">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6">
            About RAEMAS
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            The 2025 national-level conference is designed to bring together experts, scholars, and practitioners from across the
            country to share insights and innovations in their fields. It fosters interdisciplinary collaboration, knowledge exchange,
            and the development of practical solutions to national challenges. The event also offers a platform for emerging
            researchers to showcase their work and build valuable professional networks.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            className="rounded-xl shadow-xl shadow-purple-200 max-w-full h-auto transition-transform transform hover:scale-105"
            src="../imgs/conference.png"
            alt="RAEMAS Conference"
          />
        </div>
      </div>
      
    </section>
  );
};
