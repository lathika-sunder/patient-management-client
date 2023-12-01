import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import HeaderComp from "../../components/HeaderComp/HeaderComp";
import axios from "axios";

const HomePage = () => {
  const [patients, setPatients] = useState([]);
  let customId = 1; // Use let instead of const for incrementing

  useEffect(() => {
    axios.get(`http://localhost:3500/api/v1/patients`)
      .then(response => setPatients(response.data))
      .catch(error => console.log(error));
  }, []);

  const columns = [
    { field: "customId", headerName: "Custom ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "age", headerName: "Age", width: 90 },
    { field: "gender", headerName: "Gender", width: 120 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "bpLevel", headerName: "BP Level", width: 120 },
    { field: "insulinLevel", headerName: "Insulin Level", width: 150 },
    { field: "patientType", headerName: "Patient Type", width: 150 },
    
  ];

  const rowsWithCustomId = patients.map(patient => ({
    ...patient,
    customId: customId++, // Increment the custom ID
  }));

  return (
    <div>
      <HeaderComp />
      <div style={{ width: "100%" }}>
        <div style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rowsWithCustomId}
            columns={columns}
            pageSize={10}
            getRowId={(row) => row.customId}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
