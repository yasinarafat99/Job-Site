import React, { useState } from "react";
import "./CreateJob.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    logo: "",
    companyName: "",
    location: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/jobs", formData);
    navigate('/jobs')
    setFormData({
      id: "",
      title: "",
      logo: "",
      companyName: "",
      location: "",
      position: "",
      description: "",
    });
  };

  return (
    <div className="create-post-container">
      <h1>Create Post</h1>
      <div className="creatFormContainer">
        <form onSubmit={handleSubmit} className="createForm">
          <div className="creatLavelContainer">
            <label className="createLavel">
              Title:
              <input
                className="createInput"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="creatLavelContainer">
            <label className="createLavel">
              Logo URL:
              <input
                className="createInput"
                type="text"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="creatLavelContainer">
            <label className="createLavel">
              Company Name:
              <input
                className="createInput"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="creatLavelContainer">
            <label className="createLavel">
              Location:
              <input
                className="createInput"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="creatLavelContainer">
            <label className="createLavel">
              Position:
              <input
                className="createInput"
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="creatLavelContainer">
            <label className="createLavel">
              Description:
              <textarea
                className="creatTextArea"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
          </div>

          <button className="createButton" type="submit">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
