import React from 'react';

const sampleAchievements = [
  {
    title: 'State Level Science Fair Winner',
    description:
      'Our senior team secured first place for their innovative sustainable energy project.',
  },
  {
    title: 'Inter-school Debate Champions',
    description:
      'Debate club clinched the regional title with sharp arguments and teamwork.',
  },
  {
    title: 'National Math Olympiad Finalists',
    description:
      'Three students qualified for the national finals showcasing exceptional problem-solving.',
  },
  {
    title: 'Best School Choir – District',
    description:
      'The choir delivered a mesmerizing performance and won top honors.',
  },
  {
    title: 'Robotics Club Innovation Award',
    description:
      'Awarded for building an assistive robot prototype for differently-abled students.',
  },
  {
    title: 'Sports Meet Overall Champions',
    description:
      'A stellar performance across track and field brought home the overall championship.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="mt-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Achievements</h2>
        <span className="text-sm text-slate-500">Proud moments and milestones</span>
      </div>

      <div className="relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm">
        <div className="h-[420px] overflow-y-auto pr-2">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {sampleAchievements.map((a, idx) => (
              <div
                key={idx}
                className="break-inside-avoid mb-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
