import React, { useState } from "react";
import HeaderComp from "../../components/HeaderComp/HeaderComp";
import { TextField, Button, Grid, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';


const EditPatientPage = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "Male",
    dateOfBirth: "",
    location: "",
    bpLevel: "",
    insulinLevel: "",
    patientType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

alert(patientData)
  };

  return (
    <div>
      <HeaderComp />
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Paper elevation={3} style={{ pEditing: 20, marginTop: 20 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={patientData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Age"
                name="age"
                value={patientData.age}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  value={patientData.gender}
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Date of Birth"
                name="dateOfBirth"
                value={patientData.dateOfBirth}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Location"
                name="location"
                value={patientData.location}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="BP Level"
                name="bpLevel"
                value={patientData.bpLevel}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Insulin Level"
                name="insulinLevel"
                value={patientData.insulinLevel}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Patient Type</InputLabel>
                <Select
                  label="Type of Patient"
                  name="patientType"
                  value={patientData.patientType}
                  onChange={handleChange}
                >
                  <MenuItem value="Admitted">Admitted</MenuItem>
                  <MenuItem value="Consultation">Consultation</MenuItem>
                  <MenuItem value="Surgery">Surgery</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Edit Patient
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditPatientPage;
