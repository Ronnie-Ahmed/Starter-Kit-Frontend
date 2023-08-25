import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Allroutes } from "./Components/Allroutes";

function App() {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="min-h-screen">
        <Allroutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
