import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useParams } from "react-router-dom";

function ReportEmployee() {
  const { id } = useParams();
  const [employeeRepo, setEmployRepo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Employee/get/${id}`)
      .then((res) => setEmployRepo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Student ID Card", 50, 20);
    doc.setFontSize(12);
    doc.addImage(employeeRepo.image, "JPEG", 20, 40, 50, 50); // add the image
    doc.text(`Employee ID: ${employeeRepo.username}`, 20, 100);
    doc.text(`Name: ${employeeRepo.name}`, 20, 120);
    doc.text(`profession: ${employeeRepo.etype}`, 20, 140);
    doc.text(`Gender: ${employeeRepo.gender}`, 20, 160); // update y position to avoid overlapping text
    doc.save("id-card.pdf");
  };
  

  return (
     
    <div  className="container" style={{textAlign:'center'}}>
      <div className="card-body">
        <h3 className="card-title">Employee Report</h3>
        <div className="card-text">
        <img src={employeeRepo.image || ""}/>
          <p><strong>Employee ID:</strong> {employeeRepo.username|| ""}</p>
          <p><strong>Name:</strong> {employeeRepo.name || ""}</p>
          <p><strong>profession:</strong> {employeeRepo.etype || ""}</p>
          <p><strong>Gender:</strong> {employeeRepo.gender || ""}</p>
        </div>
        <button className="btn btn-primary" onClick={generatePdf}>Generate PDF</button>
      </div>
    </div>
  );
}

export default ReportEmployee;