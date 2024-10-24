import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Popup.css'; // Ensure you have styles for the popup

// Popup Component
const Popup = ({ isOpen, onClose, programDetails }) => {
  // Initialize navigation hook
  const navigate = useNavigate();

  // Destructure program details for easy access
  const {
    id,
    title,
    image,
    description,
    category,
    location,
    startDate,
    endDate,
    eligibility,
    incentives,
    organizerDetails,
    contactInfo,
  } = programDetails;

  // Format dates
  const formattedStartDate = new Date(startDate);

  // Formatting methods
  const formatMonth = (date) => {
    return date.toLocaleString('default', { month: 'short' }).toUpperCase(); // e.g., "OCT"
  };

  const formatDay = (date) => {
    return date.getDate(); // e.g., 23
  };

  const formatFullDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', // e.g., "Wednesday"
      year: 'numeric', // e.g., "2024"
      month: 'long',   // e.g., "October"
      day: 'numeric'   // e.g., "23"
    });
  };

  const handleEventPageClick = () => {
    // Navigate to the detail page with the specific id
    
      navigate(`/program/${programDetails.id}`, { state: { programDetails } });
  
  };
  

  return (
    <div className={`popup ${isOpen ? 'show' : ''}`}>
      <div className="popup-content">
        <div className="panel-header flex-center gap-25 spread translucent">
          <button aria-label="Close" type="button" onClick={onClose} className="flex-center">
            <img src={require('../assets/doubleright.png')} alt="Close" style={{ width: '20px', height: '20px' }} />
          </button>

          <div className="flex-center">
            <button
              onClick={handleEventPageClick} // Update click handler
              className="event-button"
              style={{ backgroundColor: 'lightgrey' }} // Light grey background for the button
            >
              <span className="label">Event Page</span>
              <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(305deg)', marginLeft: '4px' }} />
            </button>
            <hr className="separator-line" />
          </div>
          
        </div>

        {/* Header Border */}
        <hr className="header-border" />

        {/* Separator Line Below Button */}
        <hr className="separator-line" />

        {/* Popup Content */}
        <h2>{title}</h2>
        {image && <img src={image} alt={title} className="popup-image" />}
        <p><strong>Description:</strong> {description}</p>

        {/* Separator for Description */}
        <hr />

        {/* Combined Location and Dates Section */}
        <div className="location-and-dates">
          {/* Date and Location Display */}
          <div className="date-and-location">
            {/* Date Display */}
            <div className="date-display">
              <div className="date-info">
                <h3 className="deadline-heading">Deadline</h3>
                <div className="date-border">
                  <span className="month">
                    {formattedStartDate.toLocaleString('default', { month: 'short' }).toUpperCase()}
                  </span>
                  <div className="separator"></div> {/* Horizontal separator */}
                  <span className="day">{formattedStartDate.getDate()}</span>
                </div>
              </div>
            </div>

            {/* Location Display */}
            <div className="location">
              <div className="location-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator for Location and Dates */}
        <hr />

        {/* Registration Form */}
        <div className="registration-form">
          <h2>Registration</h2>
          <hr />
          <div className="approval-message">
            <span className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="12" y1="14" x2="15" y2="11"></line>
              </svg>
            </span>
            <span className="message">Approval Required</span>
            <hr />
            <p>Your registration is subject to approval by the host.</p>
            <hr />
          </div>
          <p className="welcome-message">Welcome! To join the event, please register below.</p>
          
          <button className="request-button">Request to Join</button>
        </div>

        {/* Separator for Registration Form */}
        <hr />

        {/* Eligibility */}
        <div className="eligibility">
          <h3 className="section-title">Eligibility</h3>
          <p>{eligibility}</p>
        </div>

        {/* Separator for Eligibility */}
        <hr className="separator" />

        {/* Incentives */}
        {incentives && (
          <div className="incentives">
            <h3 className="section-title">Incentives</h3>
            <p><strong>Fiscal:</strong> {incentives.fiscal}</p>
            <p><strong>Non-Fiscal:</strong> {incentives.nonFiscal}</p>
          </div>
        )}

        {/* Separator for Incentives */}
        <hr className="separator" />

        {/* Organizer Details */}
        <div className="organizer-info">
          <h3 className="section-title">Organizer Details</h3>
          <p>{organizerDetails}</p>
        </div>

        {/* Separator for Organizer Details */}
        <hr className="separator" />

        {/* Contact Info */}
        {contactInfo && (
          <div className="contact-info">
            <h3 className="section-title">Contact Information</h3>
            <p><strong>Contact Person:</strong> {contactInfo.contactPerson}</p>
            <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p><strong>Website:</strong> <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">{contactInfo.website}</a></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
