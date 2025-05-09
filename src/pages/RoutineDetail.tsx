import { useParams } from "react-router-dom";

export default function RoutineDetail() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Routine Details: {id}</h1>
      {/* Inhalte und Videoverlinkung etc. */}
    </div>
  );
}