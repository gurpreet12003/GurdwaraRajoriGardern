import { Clock, Sun, Sunset, Moon } from 'lucide-react';
import useInView from '../hooks/useInView';

const scheduleItems = [
  {
    period: 'Early Morning',
    icon: <Sun className="w-6 h-6" />,
    color: '[#FF8000]',
    events: [
      { time: '3:00 AM', name: 'Amrit Vela — Early Morning Meditation' },
      { time: '4:00 AM', name: 'Asa Di Var — Morning Kirtan' },
      { time: '5:30 AM', name: 'Hukamnama — Divine Command Reading' },
    ],
  },
  {
    period: 'Morning',
    icon: <Clock className="w-6 h-6" />,
    color: '[#FF8000]',
    events: [
      { time: '6:00 AM', name: 'Sukhmani Sahib Path' },
      { time: '8:00 AM', name: 'Langar Seva — Morning' },
      { time: '9:00 AM', name: 'Kirtan Darbar — Morning Session' },
    ],
  },
  {
    period: 'Afternoon',
    icon: <Sunset className="w-6 h-6" />,
    color: '[#272979]',
    events: [
      { time: '12:00 PM', name: 'Langar Seva — Afternoon' },
      { time: '1:00 PM', name: 'Kirtan — Afternoon Session' },
      { time: '3:00 PM', name: 'Rehras Sahib — Evening Prayer Path' },
    ],
  },
  {
    period: 'Evening',
    icon: <Moon className="w-6 h-6" />,
    color: '[#272979]',
    events: [
      { time: '6:00 PM', name: 'Rehras Sahib — Evening Prayers' },
      { time: '7:00 PM', name: 'Evening Kirtan Darbar' },
      { time: '9:00 PM', name: 'Kirtan Sohila — Night Prayer' },
    ],
  },
];

export default function Schedule() {
  const { ref, isInView } = useInView();

  return (
    <section id="schedule" className="py-15 md:py-10 bg-gradient-to-b from-saffron-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-saffron-500 font-semibold text-sm uppercase tracking-widest">Daily Program</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#00003c]">
            Daily <span className="text-saffron-600">Schedule</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-saffron-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 text-lg">
            Join us for daily prayers, kirtan, and langar. The Gurudwara is open for darshan throughout the day.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {scheduleItems.map((item, index) => (
            <div
              key={item.period}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Period Header */}
              <div className={`bg-${item.color} p-5 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.period}</h3>
              </div>

              {/* Events */}
              <div className="p-6 space-y-4">
                {item.events.map((event, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-sm font-bold text-saffron-600 bg-saffron-50 px-2 py-1 rounded">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex-shrink-0 mt-2 w-2 h-2 rounded-full bg-saffron-400 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-700 font-medium group-hover:text-saffron-700 transition-colors">
                      {event.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-800 px-6 py-3 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            Timings may vary on Gurpurabs and special occasions. Contact us for details.
          </div>
        </div>
      </div>
    </section>
  );
}
