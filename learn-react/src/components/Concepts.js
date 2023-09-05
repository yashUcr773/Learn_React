import ConceptItem from "./ConceptItem";

const Concepts = (props) => {
    return (
        <ul id="concepts">
            <ConceptItem concept={props.concepts[0]}></ConceptItem>
            <ConceptItem concept={props.concepts[1]}></ConceptItem>
            <ConceptItem concept={props.concepts[2]}></ConceptItem>
        </ul>
    );
};

export default Concepts;
