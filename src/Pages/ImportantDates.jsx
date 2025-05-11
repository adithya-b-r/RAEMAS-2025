export const ImportantDates = () => {
  const day1 = [
    "Registration: 9:00 - 10:00 AM",
    "Inaugural Function: 10:00 - 11:00 AM",
    "Keynote Address (Topic: Title): 11:30 AM - 12:30 PM",
    "Lunch: 12:30 - 2:00 PM",
    "Technical Sessions (Parallel Tracks): 2:00 - 4:45 PM",
  ];

  const day2 = [
    "Technical Sessions (Parallel Tracks): 9:00 - 11:00 AM",
    "Short Break",
    "Technical Sessions: 11:15 AM - 12:30 PM",
    "Lunch: 12:30 - 2:00 PM",
    "Technical Session: 2:00 - 3:30 PM",
    "High Tea",
    "Ending Keynote Address (Topic: Title): 3:30 - 4:30 PM",
    "Valedictory Function: 4:30 - 5:00 PM",
  ];

  return (
    <section
      id="important-dates"
      className="min-h-[90vh] w-full bg-gradient-to-br from-white via-purple-100 to-purple-50 py-16 px-6 md:px-12"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-12 text-center">
        Important Dates
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Day 1</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {day1.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Day 2</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            {day2.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
