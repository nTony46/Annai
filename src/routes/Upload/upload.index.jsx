import React, { useState } from "react";
import { Button, Layout } from "../../components";
import axios from "axios";
import "./upload.styles.css";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url;
    const formData = new FormData();
    formData.append("file", file);
    const config = {};

    setErrorMsg("");
    if (file.type === "application/pdf") {
      url = "http://localhost:8000/generate_questions_pdf";
    } else if (file.type === "audio/mpeg") {
      url = "http://localhost:8000/generate_questions_mp3";
    } else {
      setErrorMsg("You must choose a PDF or MP3");
      throw new Error();
    }

    setLoading(true);
    axios
      .post(url, formData, config)
      .then((response) => {
        if (errorMsg) {
          setErrorMsg("");
        }
        setLoading(false);
        console.log(response.data);
        if (response.data?.questions.length) {
          navigate("/result", { state: response.data });
        } else {
          throw new Error("No results");
        }
      })
      .catch((e) => {
        console.error(e);
        setErrorMsg(e.message);
        setLoading(false);
      });
  }

  return (
    <Layout center>
      {!loading ? (
        <div className="App">
          <img className="hero-img" src="../../No data-pana.png" />
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={handleChange} />
            <Button type="submit" disabled={!file} block text="Upload File" />
          </form>
        </div>
      ) : (
        <div className="loading-container">
          <TailSpin
            height="80"
            width="80"
            color="#94cae8"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {errorMsg && <h3 className="error-msg">{errorMsg}. Please try again.</h3>}
    </Layout>
  );
}

export default App;
