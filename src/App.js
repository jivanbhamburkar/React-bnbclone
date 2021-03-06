import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Help from "./components/Help";
import Search from "./components/Search";
import Image from "./components/Image";
import Cards from "./components/Cards";

function App() {
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app">
        {show ? (
          <>
            <Header1 />
            <Search />
          </>
        ) : (
          <Header show={show} setShow={setShow} />
        )}
        <Help />
        <Image />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Cards />
      </div>
    </>
  );
}

export default App;