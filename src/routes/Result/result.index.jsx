import { useLocation } from "react-router-dom";
import { Layout } from "../../components";
import "./result.styles.css";

const Results = () => {
  const { questions } = useLocation().state;
  console.log(questions);
  if (!questions.length) {
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <div className="result-container">
        {questions.map((question, i) => (
          <div className="result" key={i}>
            <span className="result-question">
              {i + 1}. {question}
            </span>
            <textarea placeholder="My notes" />
            <div className="button-container">
              <button>Save</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Results;
