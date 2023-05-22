import React, { useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "scrollreveal";

function Scroll() {
    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal(".First", {
          origin: "left",
          distance: "20px",
          duration: 1000,
          delay: 200,
          easing: "ease",
        });
    
        sr.reveal(".Second", {
          origin: "right",
          distance: "20px",
          duration: 1000,
          delay: 200,
          easing: "ease",
        });
      }, []);
}
export default Scroll;