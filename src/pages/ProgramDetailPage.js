import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProgramDetailPage.css';

const ProgramDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Get the passed state from navigation
  const { programDetails } = state || {}; // Destructure programDetails from the state

  // Check if programDetails is available
  if (!programDetails) {
    return <p>No program details available.</p>;
  }

  // Destructure the program details
  const {
    title,
    image,
    description,
    location,
    startDate,
    eligibility,
    incentives,
    organizerDetails,
    contactInfo,
  } = programDetails;

  const formattedStartDate = new Date(startDate);
  
  const formatFullDate = (date) => date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="program-detail-page">
      <div className="header">
        <h1>{title}</h1>
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
      </div>

      <div className="content">
        {image && <img src={image} alt={title} className="program-image" />}
        
        <div className="details">
          <h2>Description</h2>
          <p>{description}</p>

          <div className="info-section">
            <h3>Location and Dates</h3>
            <div className="date-location">
              <div className="date-display">
                <h4>Start Date:</h4>
                <p>{formatFullDate(formattedStartDate)}</p>
              </div>
              <div className="location">
                <h4>Location:</h4>
                <p>{location}</p>
              </div>
            </div>
          </div>
          <div className="registration">
            <h3>Registration</h3>
            <p>Approval Required: Your registration is subject to approval by the host.</p>
            <button className="register-button">Request to Join</button>
          </div>

          <div className="eligibility-section">
            <h3>Eligibility</h3>
            <p>{eligibility}</p>
          </div>

          {incentives && (
            <div className="incentives-section">
              <h3>Incentives</h3>
              <p><strong>Fiscal:</strong> {incentives.fiscal}</p>
              <p><strong>Non-Fiscal:</strong> {incentives.nonFiscal}</p>
            </div>
          )}

          <div className="organizer-section">
            <h3>Organizer Details</h3>
            <p>{organizerDetails}</p>
          </div>

          {contactInfo && (
            <div className="contact-info-section">
              <h3>Contact Information</h3>
              <p><strong>Contact Person:</strong> {contactInfo.contactPerson}</p>
              <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
              {contactInfo.website && (
                <p><strong>Website:</strong> <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">{contactInfo.website}</a></p>
              )}
            </div>
          )}
          {/* Other sections like registration, eligibility, etc. */}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
