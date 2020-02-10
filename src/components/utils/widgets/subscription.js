import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_EMAIL } from "../paths";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const clearMessages = () => {
    setTimeout(() => {
      setHasError(false);
      setIsSuccess(false);
      setIsDuplicate(false);
    }, 3000);
  };

  useEffect(() => {
    const saveSubscription = () => {
      axios.get(`${URL_EMAIL}?email=${submittedEmail}`).then(response => {
        // if the email doesn't exist, sending a POST request
        if (!response.data.length) {
          axios(URL_EMAIL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            // using stringnify to parse an object to string
            data: JSON.stringify({ email: submittedEmail })
          }).then(response => {
            setEmail("");
            setIsSuccess(true);
            clearMessages();
          });
        } else {
          // if the email already exists.
          setEmail("");
          setIsDuplicate(true);
          clearMessages();
        }
      });
    };
    saveSubscription();
  }, [submittedEmail]);

  const handleSubmit = event => {
    event.preventDefault();

    if (validateEmail(email)) {
      setSubmittedEmail(email);
      //saveSubscription(email);
    } else {
      setHasError(true);
    }
    clearMessages();
  };

  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  }

  const handleInputChange = event => {
    setEmail(event.target.value);
  };

  return (
    <div className="subscribe_panel">
      <h3>Subscribe to use</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            placeholder="Youremail@email.com"
            onChange={handleInputChange}
          />
          <div className={hasError ? "error show" : "error"}>
            Incorrect email format
          </div>
          <div className={isSuccess ? "success show" : "success"}>
            Thank you
          </div>
          <div className={isDuplicate ? "duplicate show" : "duplicate"}>
            You are already on our subscription list
          </div>
        </form>
      </div>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        quisquam natus error magni suscipit iste blanditiis reiciendis.
      </small>
    </div>
  );
};

export default Subscription;
