import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="flex items-center justify-center">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" /> Let's build
        something together!
      </p>
      <Link to="/connect" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
