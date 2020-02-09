import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_HOME } from "../utils/paths";
import SliderWidget from "../utils/widgets/slider";

const Home = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios.get(URL_HOME).then(response => {
      const data = response.data;
      setSliderData(data.slider);

      console.log(data);
    });
  }, []);

  return (
    <>
      {/* {sliderData.map(slider => (
        <div key={slider.id}>
          <p>Title: {slider.title}</p>
          <img alt="cover" src={`/images/covers/${slider.cover}`} />
        </div>
      ))} */}

      <SliderWidget slides={sliderData} />
    </>
  );
};
export default Home;
