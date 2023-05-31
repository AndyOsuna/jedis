import "./App.css";
import CharacterList from "./components/CharacterList";
import Timer from "./components/Timer";
import { format } from "date-fns";

function App() {
  const date = format(new Date(), "'Today is a' eeee");
  return (
    <main className="flex flex-col w-screen justify-center items-center">
      <h1 className="text-red-600 text-2xl font-bold">
        This should be red. {date}
      </h1>
      <Timer />
      <CharacterList />
    </main>
  );
}

export default App;
