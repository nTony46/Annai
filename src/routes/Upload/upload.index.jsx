import React from "react";
import { Layout } from "../../components";
import { useState } from "react";
import axios from 'axios'
import "./upload.styles.css";

function App() {
  const [file, setFile] = useState('')

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8000/generate_questions_pdf';
    const formData = new FormData();
    formData.append('file', file);
    const config = {};
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <Layout center>
    <div className="App">
      <img className="hero-img" src="../../No data-pana.png" />
        <form onSubmit={handleSubmit}>
          <h1>File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
    </Layout>
  );
}

export default App;




