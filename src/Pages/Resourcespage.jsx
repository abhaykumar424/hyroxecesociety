import React, { useEffect } from "react";
import Resourcepagecards from "../components/Resourcepagecards";
import Footer from "../components/Footer";

function Resourcespage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Resourcepagecards />
      <Footer />
    </>
  );
}

export default Resourcespage;
