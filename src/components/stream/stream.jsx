import { useParams } from "react-router-dom";

const Stream = () => {
  const { id, ep } = useParams();

  return (
    <div style={{ color: "white", background: "#222", minHeight: "100vh" }}>
      <h1>Stream Page Working!</h1>
      <h2>ID: {id}</h2>
      <h2>Episode: {ep}</h2>
    </div>
  );
};

export default Stream;
