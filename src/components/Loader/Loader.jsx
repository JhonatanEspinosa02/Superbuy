import { PropagateLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PropagateLoader color="#f59e0b" />
    </div>
  );
}
