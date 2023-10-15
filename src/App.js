import "./App.css";
import Tag from "./components/Tag";
import Random from "./components/Random";
function App() {
  return (
    <div className="flex flex-col  bg-teal-500 ">
      <h1 className="bg-white rounded-sm text-center w-11/12 mt-10 mr-10 text-2xl font-bold ml-10 ">
        Random Gifs
      </h1>
      <div>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
