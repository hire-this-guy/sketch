import { DocumentResponse } from "../../types/response";
import { useParams } from "react-router-dom";

interface ArtboardDisplayProps {
    data: DocumentResponse | null;
}

function ArtboardView(props: ArtboardDisplayProps) {
    let { artboardName } = useParams<{ artboardName: string }>();
    return <h1>Artboard: {artboardName}</h1>;
}

export default ArtboardView;
