import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
	// state management
	const [selectedTopic, setSelectedTopic] = useState<"components" | "jsx" | "props" | "state">("components");

	function handleSelect(selectedButton: "components" | "jsx" | "props" | "state") {
		setSelectedTopic(selectedButton);
	}

	// conditional rendering
	let tabContent = <p>Please select a topic.</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((concept) => (
							<CoreConcept
								key={concept.title}
								title={concept.title}
								description={concept.description}
								image={concept.image}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							onSelect={() => handleSelect("components")}
							isSelected={selectedTopic == "components"}>
							Components
						</TabButton>
						<TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedTopic == "jsx"}>
							JSX
						</TabButton>
						<TabButton onSelect={() => handleSelect("props")} isSelected={selectedTopic == "props"}>
							Props
						</TabButton>
						<TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic == "state"}>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
