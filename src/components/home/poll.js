import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_TEAMS } from "../utils/paths";

const Poll = () => {
  const [pollData, setPollData] = useState([]);

  const fetchPoll = () => {
    axios
      .get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
      .then(response => {
        setPollData(response.data);
      });
  };

  useEffect(() => {
    fetchPoll();
  }, []);

  const addCount = (id, count) => {
    axios(`${URL_TEAMS}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({ count: count + 1 })
    }).then(() => {
      fetchPoll();
    });
  };

  const renderPoll = () => {
    const rank = ["1ST", "2ND", "3RD"];
    return pollData.map((item, index) => (
      <div
        key={item.id}
        className="poll_item"
        onClick={() => addCount(item.id, item.count)}
      >
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
        <h4>Click one of the logo below to vote!</h4>
        <div className="poll_container">{renderPoll()}</div>
      </div>
    </>
  );
};

export default Poll;
