import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_TEAMS } from "../utils/paths";

const Poll = () => {
  const [pollData, setPollData] = useState([]);

  useEffect(() => {
    const getPoll = () => {
      axios
        .get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
        .then(response => {
          setPollData(response.data);
        });
    };

    getPoll();
  }, []);

  const renderPoll = () => {
    const rank = ["1ST", "2ND", "3RD"];
    return pollData.map((item, index) => (
      <div key={item.id} className="poll_item">
        <img alt={item.name} src={`/images/teams/${item.logo}`} />
        <h4>{rank[index]}</h4>
        <div>{item.count} Votes</div>
      </div>
    ));
  };

  return (
    <>
      {console.log(pollData)}
      <div className="home_poll">
        <h3>Who will be the next champion?</h3>
        <div className="poll_container">{renderPoll()}</div>
      </div>
    </>
  );
};

export default Poll;
