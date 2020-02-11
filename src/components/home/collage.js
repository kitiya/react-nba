import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const generateCollage = collageData =>
  collageData
    ? collageData.map(item => (
        <Fade key={item.id} duration={500}>
          <div className={`item ${item.type}`}>
            <div className="veil"></div>
            <div
              className="image"
              style={{
                background: `url(/images/collage/${item.image}) no-repeat`
              }}
            ></div>
            <div className="title">
              <Link to={item.link}>{item.title}</Link>
            </div>
          </div>
        </Fade>
      ))
    : null;

const Collage = ({ collageData }) => {
  return <div className="home_collage">{generateCollage(collageData)}</div>;
};

export default Collage;
