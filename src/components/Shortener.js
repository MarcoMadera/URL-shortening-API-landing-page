import React, { useState, useEffect } from "react";
import "./css/Shortener.css";

const Shortener = () => {
  const [url, setUrl] = useState({
    value: "",
    error: false,
    submitted: false,
  });
  const [response, setResponse] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    if (url.submitted) {
      fetch("https://rel.ink/api/links/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url.value,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          setResponse(res);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [url.submitted, url.value]);
  const handleChange = (event) => {
    const res = event.target.value;
    setUrl({ value: res, error: false, submitted: false });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl({
      ...url,
      error: !urlValidation.test(url.value),
      submitted: true,
    });
  };

  const urlValidation = RegExp(
    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
  );
  return (
    <div className="Shortener">
      <form
        noValidate
        id="form"
        action="#"
        onSubmit={handleSubmit}
        className="Shortener__form"
      >
        <input
          noValidate
          className="footer__container__search__input"
          type="text"
          name="shorter"
          id="shorter"
          placeholder="Shorten a link here..."
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Shorten It!</button>
      </form>
      {response.hashid ? (
        <>
          <h4>Shorten Url</h4>
          <a
            href={`https://rel.ink/${response.hashid}`}
          >{`https://rel.ink/${response.hashid}`}</a>
        </>
      ) : response.url ? (
        <p>{response.url[0]}</p>
      ) : (
        error && <p>error</p>
      )}
    </div>
  );
};

export default Shortener;
