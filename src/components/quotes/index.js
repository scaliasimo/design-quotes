import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./styles.css";
import IconSVG from "./media/random.svg";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await Axios.get(
        "https://api.superhi.com/api/test/quotes/"
      );
      setQuotes(result.data);
      getRandomQuote(result.data);
    }
    fetchData();
  }, []);

  const getRandomQuote = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex]);
  };

  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 90%)`;
  };

  return (
    <div>
      <>
        <div className="LoadingText">
          <h1>{randomQuote.quote}</h1>
          <h2>- {randomQuote.author}</h2>
        </div>
        <div className="RandomImg">
          <img
            src={IconSVG}
            alt="icon to get a random quote"
            onClick={() => {
              getRandomQuote(quotes);
              changeBackgroundColor();
            }}
          />
        </div>
      </>
    </div>
  );
};

export default Quote;
