const Results = (props) => {
	const questionsElement = [];
	for (let i = 0; i < props.questions.length; i++){
		const element = 
		<div key={i}>
			{props.questions[i]}
			<input type="text">

			</input>
			<button>
				Submit
			</button>
		</div>
		questionsElement.push(element)
	}

	const questionsBody = (label, body) => {
		<div>
			<div>{label}</div>
			<div>{body}</div>
		</div>
	}

	const questionsContainer = 
		<div>
			{questionsElement}
		</div>
	

	return (
		<div>
			{questionsBody("Questions", questionsContainer)}
		</div>
	);
}
export default Results;
