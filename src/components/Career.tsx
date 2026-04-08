import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>NeoSoft</h5>
              </div>
              <h3>Sep 2025 - Dec 2025</h3>
            </div>
            <p>
              • Developed and optimized SPAs using Angular and React.js, integrating backend APIs and building reusable UI components.<br/>
              • Improved UI performance and ensured responsive, maintainable frontend implementation.<br/>
              • Built reusable components using Angular Material, Tailwind CSS, and Bootstrap following clean code practices.<br/>
              • Fixed bugs and implemented features aligned with product coding standards.<br/>
              • Participated in code reviews and Agile sprints.<br/>
              • Collaborated with QA and senior developers to deliver production-ready features.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Script Build Software Pvt. Ltd.</h5>
              </div>
              <h3>Dec 2022 - Sep 2025</h3>
            </div>
            <p>
              • Developed scalable MEAN stack applications using Angular, Node.js, Express.js, and MongoDB.<br/>
              • Built reusable UI components and integrated RESTful APIs with JWT authentication.<br/>
              • Improved performance using lazy loading, OnPush strategy, and code splitting.<br/>
              • Performed unit testing and debugging using Jasmine, Karma, and Chrome DevTools.<br/>
              • Collaborated with cross-functional teams in an Agile environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
