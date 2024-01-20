import React, { useState } from "react";
import "./UpdateJob.css";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateJob = () => {
  const navigate = useNavigate();

  const { id, title, companyName, description, location, logo, position } =
    useLoaderData();
  const [formData, setFormData] = useState({
    title,
    logo,
    companyName,
    location,
    position,
    description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9000/jobs/${id}`, formData);
    navigate("/jobs");
    setFormData({
      title: "",
      logo: "",
      companyName: "",
      location: "",
      position: "",
      description: "",
    });
  };

  return (
    <div className="update-post-container">
      <h1>Update Job</h1>
      <div className="updateFormContainer">
        <form onSubmit={handleSubmit} className="updateForm">
          <div className="updateLavelContainer">
            <label className="updateLavel">
              Title:
              <input
                className="updateInput"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="updateLavelContainer">
            <label className="updateLavel">
              Logo URL:
              <input
                className="updateInput"
                type="text"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="updateLavelContainer">
            <label>
              Company Name:
              <input
                className="updateInput"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="updateLavelContainer">
            <label>
              Location:
              <input
                className="updateInput"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="updateLavelContainer">
            <label>
              Position:
              <input
                className="updateInput"
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="updateLavelContainer">
            <label>
              Description:
              <textarea
                className="updateTextarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
          </div>

          <button className="updateButton" type="submit">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
