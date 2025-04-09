import "./Resume.css";

const Resume = () => {
  const educationData = [
    {
      year: "Currently",
      program: "Google Ads",
      school: "Google Skillshop",
    },
    {
      year: "2022-2022",
      program: "Software Engineering",
      school: "Ironhack Bootcamp",
    },
    {
      year: "2015-2017",
      program: "Science Bachelor Degree",
      school: "Ies Bruguers",
    },
  ];

  return (
    <main id="resume" className="resume-container">
      <div className="experience-section">
        <h2>Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="year">{item.year}</h3>
                <div>
                  <p className="program">
                    <strong>{item.program}</strong>
                  </p>
                  <p className="school">{item.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-section">
        <h1>RESUME</h1>
        <h1>RESUME</h1>
        <h2>Technical Skills</h2>
      </div>
    </main>
  );
};

export default Resume;
