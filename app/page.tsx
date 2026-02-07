import Image from "next/image";
import Page1 from "./components/Page1";
import Page3 from "./components/Page3";
import Page2 from "./components/Page2";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf7f2] text-[#2f3b1f]">
      

      

      
<Header/>
{/* --------------------------------------------------------------------------------------- */}
<Page1 />
<Page2 />
<Page3 />
<Page4 />
<Page5 />
<Page6 />
<Page7 />
{/* --------------------------------------------------------------------------------------- */}
<Footer />




      
{/* --------------------------------------------------------------------------------------- */}
{/* --------------------------------------------------------------------------------------- */}


{/* --------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------- */}



    </main>
  );
}
