import React from "react";
import CarouselMulti from "./components/Carousel/CarouselMulti";
import CarouselMulti1 from "./components/Carousel/CarouselMulti1";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return <>
    <Navbar />
    <div className="header1">
      <h1>Welcome to a Virtual Library</h1>
      <h2>Welcome to a Virtual Library</h2>
    </div>
    <Searchbar placeholder="Search"/>
    <div className="header2">
      <h2>Popular Books</h2>
    </div>
    <CarouselMulti />
    <div className="header2">
      <h2>Programs</h2>
    </div>
    <CarouselMulti1 />
    <div className="header3">
      <h1>Welcome to a Virtual Library</h1>
      <h2>Welcome to a Virtual Library</h2>
    </div>
  </>
}
 
export default App