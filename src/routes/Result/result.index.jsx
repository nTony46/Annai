import { useLocation } from "react-router-dom";
import { Button, Layout } from "../../components";
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
            <p className="result-question">
              <strong>{i + 1}.</strong> {question}
            </p>
            <textarea id="answerbox" placeholder="My notes" />
            <div className="button-container">
              <Button text="Save" />
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Results;
