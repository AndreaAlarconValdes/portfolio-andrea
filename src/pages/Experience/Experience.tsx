import "./Experience.css";
import Box from "../../components/Box";
import { education, experience } from "../../constants/constants";
import { EducationIcon, ExpandIcon, WorkIcon } from "../../components/Icons";
import { useState } from "react";

const Experience = () => {
    const [activeExperienceSection, setActiveExperienceSection] = useState("work");

    return (
        <div className="experience">
            <Box title="Education and Experience" className="experience-content">
                <aside className="experience-sidebar" aria-label="Navegación">
                    <button
                        className={`nav-item ${activeExperienceSection === "work" ? "active" : ""}`}
                        onClick={() => setActiveExperienceSection("work")}
                    >
                        <WorkIcon />
                        <h4>Work Experience</h4>
                    </button>
                    <button
                        className={`nav-item ${activeExperienceSection === "education" ? "active" : ""}`}
                        onClick={() => setActiveExperienceSection("education")}>
                        <EducationIcon />
                        <h4>Education</h4>
                    </button>
                </aside>
                <main className="experience-info" role="main">

                    {activeExperienceSection === "work" && (
                        <section>
                            <h2>Work Experience</h2>
                            <div className="list">
                                {experience.map((item) => (
                                    <details key={item.title}>
                                        <summary>
                                            <div>
                                                <p>{item.title}</p>
                                                <small>{item.date}</small>
                                            </div>
                                            <ExpandIcon />
                                        </summary>
                                        <p className="detail-text">
                                            {item.description}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}
                    {activeExperienceSection === "education" && (
                        <section>
                            <h2>Education</h2>
                            <div className="list">
                                {education.map((item) => (
                                    <details key={item.title}>
                                        <summary>
                                            <div>
                                                <p>{item.title}</p>
                                                <small>{item.date}</small>
                                            </div>
                                            <ExpandIcon />
                                        </summary>
                                        <p className="detail-text">
                                            {item.description}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </Box>
        </div >

    );
}

export default Experience;
