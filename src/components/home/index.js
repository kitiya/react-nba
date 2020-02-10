import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_HOME } from "../utils/paths";
import SliderWidget from "../utils/widgets/slider";
import Subscription from "../utils/widgets/subscription";

const Home = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios.get(URL_HOME).then(response => {
      const data = response.data;
      setSliderData(data.slider);

      // console.log(data);
    });
  }, []);

  return (
    <>
      <SliderWidget slides={sliderData} />
      <Subscription />
    </>
  );
};
export default Home;
