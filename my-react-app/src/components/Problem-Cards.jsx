import React from 'react'

const ProblemCard = ({ icon, title, description }) => {
  return (
    <div className="card bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200">
      <div className="card-body p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="text-4xl mr-3">{icon}</div>}
          <h2 className="card-title text-xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

const ProblemCards = () => {
  const problems = [
    {
      id: 1,
      icon: "🤝",
      title: "Lack of Connection",
      description: "Students struggle to find like-minded peers for collaboration and networking opportunities."
    },
    {
      id: 2,
      icon: "🎯",
      title: "Limited Showcase Platform",
      description: "Talented students have no proper platform to showcase their projects and achievements."
    },
    {
      id: 3,
      icon: "💡",
      title: "Missed Opportunities",
      description: "Students miss out on competitions, hackathons, and collaborative projects due to lack of awareness."
    },
    {
      id: 4,
      icon: "🔍",
      title: "Skill Discovery",
      description: "Hard to discover students with specific skills for project collaborations and team formations."
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {problems.map((problem) => (
        <ProblemCard 
          key={problem.id}
          icon={problem.icon}
          title={problem.title}
          description={problem.description}
        />
      ))}
    </div>
  )
}

export default ProblemCards