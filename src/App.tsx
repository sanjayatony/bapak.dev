import "./App.css";

function App() {
	// create a loop to repeat a text 10 times and display it on the screen using React and TypeScript
	const upperText = [];
	const lowerText = [];
	for (let i = 0; i < 200; i++) {
		upperText.push(<span key={i}>-bapak/dev-</span>);
	}
	for (let i = 0; i < 500; i++) {
		lowerText.push(<span key={i}>-bapak/dev-</span>);
	}
	return (
		<>
			<div>
				<img
					src="/relax.png"
					width="150"
					height="150"
				/>
			</div>
			<h1>bapak/dev</h1>
			<div className="logo-box">{lowerText}</div>
		</>
	);
}

export default App;
