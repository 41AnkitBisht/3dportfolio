import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";

const renderContent = {
  2: {
    text: "Worked with many companies and picked up many skills along the way",
    link: "/3dportfolio/about",
    btntext: "Learn more",
  },
  3: {
    text: "Led multiple project to success over the years. Curious about the impact?",
    link: "/3dportfolio/projects",
    btntext: "Visit my portfolio",
  },
  4: {
    text: "Need a project done or looking for a dev? I'm just a few keystrokes away",
    link: "/3dportfolio/connect",
    btntext: "Let's talk",
  },
};

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Ankit</span> 👋
        <br />A Software Engineer from India
      </h1>
    );
  } else if (currentStage) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          {renderContent[currentStage].text}
        </p>
        <Link
          to={renderContent[currentStage].link}
          className="neo-brutalism-white neo-btn"
        >
          {renderContent[currentStage].btntext}
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
};

export default HomeInfo;
