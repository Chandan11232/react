import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Tailwind succesful
      </h1>
      <Card username="hitesh" role="Staff Engineer" />
      <Card username="Jason" role="Staff Engg." />
      <Card />
    </>
  );
}

export default App;
