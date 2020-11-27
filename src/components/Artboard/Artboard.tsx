import { Artboard } from "../../types/response";

function Artboard(props: { artboard: Artboard }) {
    return <h1>Artboard: {props.artboard.name}</h1>;
}

export default Artboard;
