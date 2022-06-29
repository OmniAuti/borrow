import "./App.css";
import HeroCOA from "./components/HeroCOA";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import SupplyDump from "./components/SupplyDump";
import OurGoal from "./components/OurGoal";

function App() {


  return (
    <>
      <main className="App bg-black h-full w-screen px-5 pb-5 relative">
        <Header />
        <HeroCOA />
        <About />
        <OurGoal/>
        <SupplyDump/>
      </main>
      <Footer />
    </>
  );
}

export default App;
