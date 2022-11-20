import React, { useState } from "react";
import { Layout } from "../../components";
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
    const url = "http://localhost:8000/generate_questions_pdf";
    const formData = new FormData();
    formData.append("file", file);
    const config = {};
    setLoading(true);
    axios
      .post(url, formData, config)
      .then((response) => {
        if (errorMsg) {
          setErrorMsg("");
        }
        setLoading(false);
        navigate("/results", response.data);
        console.log(response.data);
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
          <form onSubmit={handleSubmit}>
            <h1>File Upload</h1>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </form>
        </div>
      ) : (
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
      )}
      {errorMsg && (
        <h3 style={{ color: "red" }}>{errorMsg}. Please try again.</h3>
      )}
    </Layout>
  );
}

export default App;
