import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="text-center">
      <h1 className="mb-7 text-5xl">What I can offer</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-5">
        <Link to="frontend" className="text-2xl">
          Front end design
        </Link>
        <Link to="backend" className="text-2xl">
          Back end setup
        </Link>
        <Link to="cms" className="text-2xl">
          CMS support
        </Link>
        <Link to="microservices" className="text-2xl">
          Evolving to microservices
        </Link>
      </div>
      {/* <div className="grid-container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div> */}
    </div>
  );
}

export default Services;
