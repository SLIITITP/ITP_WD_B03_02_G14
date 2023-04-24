import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PMdashbrd from "./components/PMdashbrd";
import AddPckg from "./components/AddPckg";
import Packages from "./components/Package/Packages";
import PckgDetails from "./components/Package/PckgDetails";
import BookingTable from "./components/Booking/BookingTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <header>
        <Header />
      </header>
      <main >
        <PMdashbrd />
       
          <Routes>
            <Route path="/add" element={<AddPckg />} exact />
            <Route path="/packages" element={<Packages />} exact />
            <Route path="/packages/:id" element={<PckgDetails />} exact />
            <Route path="/booking" element={<BookingTable />} exact />
          </Routes>
        
      </main>
    </React.Fragment>
  );
}

export default App;
