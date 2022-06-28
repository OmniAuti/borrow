import "./App.css";
import HeroCOA from "./components/HeroCOA";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import SupplyDump from "./components/SupplyDump";

import {useEffect} from 'react';
import { fetchAllItems } from "./api/api";
import OurGoal from "./components/OurGoal";
import PostItem from "./components/PostItem";

function App() {

// useEffect(() => {
//   fetchAllItems()
// }, [])

  return (
    <>
      <main className="App bg-black h-full w-screen px-5 pb-5 relative">
        <Header />
        <HeroCOA />

        {/* <div className='circle bg-rose-500 absolute rounded-full -bottom-52 -right-96 z-10'></div>
      <div className='square bg-green-500 absolute rounded-md right-40 top-1/3 z-0'></div> */}
        <About />
        <OurGoal/>
        <SupplyDump/>
        <PostItem/>
      </main>
      <Footer />
    </>
  );
}

export default App;
