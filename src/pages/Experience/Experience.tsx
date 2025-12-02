import "./Experience.css";
import Box from "../../components/Box";
import { education, experience } from "../../constants/constants";
import { EducationIcon, ExpandIcon, WorkIcon } from "../../components/Icons";

const Experience = () => {

    return (
        <div className="experience">
            <Box title="Education and Experience" className="experience-content">
                <aside className="experience-sidebar" aria-label="Navegación">
                    <div className="nav-item active">
                        <WorkIcon />
                        <h4>Work Experience</h4>
                    </div>
                    <div className="nav-item">
                        <EducationIcon />
                        <h4>Education</h4>
                    </div>
                </aside>
                <main className="experience-info" role="main">
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
                </main>
            </Box>
        </div >

    );
}

export default Experience;
