import React, { useState, useEffect } from "react";
import axios from "axios";
import { MY_JSON_API } from "../utils/paths";
import SliderWidget from "../utils/widgets/slider";
import Subscription from "../utils/widgets/subscription";
import Collage from "./collage";
import Poll from "./poll";

const Home = () => {
  const [sliderData, setSliderData] = useState([]);
  const [collageData, setCollageData] = useState([]);

  useEffect(() => {
    axios.get(MY_JSON_API).then(response => {
      const data = response.data.home;
      setSliderData(data.slider);
      setCollageData(data.collage);

      //console.log(data.collage);
    });
  }, []);

  return (
    <>
      <SliderWidget slides={sliderData} />
      <Subscription />
      <Collage collageData={collageData} />
      <Poll />
    </>
  );
};
export default Home;
