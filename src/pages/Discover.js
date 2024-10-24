// import React, { useEffect, useState } from 'react';
// import './Discover.css';
// import ArticleCard from '../components/ArticleCard'; // Import the ArticleCard component
// import Pagination from '../components/Pagination'; // Import the Pagination component
// import { db } from '../firebase'; // Import Firestore instance
// import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

// function App() {
//   const [programs, setPrograms] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const programsPerPage = 6; // Set how many programs to display per page
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [filterCity, setFilterCity] = useState('any city');

//   // Fixed orientation pattern
//   const orientationPattern = ['vertical', 'horizontal', 'vertical', 'vertical', 'horizontal', 'horizontal'];

//   // Fetch programs from Firestore
//   useEffect(() => {
//     const fetchPrograms = async () => {
//       const programsCollection = collection(db, 'programs');
//       const programsSnapshot = await getDocs(programsCollection);
//       const programsList = programsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPrograms(programsList);
//     };

//     fetchPrograms();
//   }, []);

//   // Apply filters based on selected values
//   const filteredPrograms = programs.filter(program => {
//     const matchesCategory = filterCategory === 'all' || program.industry.includes(filterCategory);
//     const matchesCity = filterCity === 'any city' || program.location === filterCity;
//     return matchesCategory && matchesCity;
//   });

//   const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);
  
//   const handlePageChange = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   const indexOfLastProgram = currentPage * programsPerPage;
//   const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
//   const currentPrograms = filteredPrograms.slice(indexOfFirstProgram, indexOfLastProgram);

//   return (
//     <div className="app-container">
//       <h1 className="heading">Discover Programs</h1>
//       {/* Dropdown Filters Section */}
//       <div className="filters-container">
//         <p>Show me</p>
//         <div className="filter-dropdown">
//           <select className="dropdown" onChange={e => setFilterCategory(e.target.value)}>
//             <option value="all">All</option>
//             <option value="Finance">Finance</option>
//             <option value="Technology">Technology</option>
//             <option value="Education">Education</option>
//             <option value="Healthcare & Lifesciences">Healthcare & Lifesciences</option>
//             <option value="Media & Entertainment">Media & Entertainment</option>
//             <option value="Retail">Retail</option>
//           </select>
//         </div>
//         <p>programs, active in</p>
//         <div className="filter-dropdown">
//           <select className="dropdown" onChange={e => setFilterCity(e.target.value)}>
//             <option value="any city">Any City</option>
//             <option value="remote">Remote</option>
//             <option value="New York">New York</option>
//             <option value="San Francisco">San Francisco</option>
//             {/* Add more cities as needed */}
//           </select>
//         </div>
//       </div>

//       <br /><br />
//       <div className="articles-container">
//         {/* Article Cards */}
//         {currentPrograms.map((program, index) => (
//           <ArticleCard
//             key={program.id}
//             title={program.title}
//             imageUrl={program.image} // Use the image field
//             author={program.contactInfo.contactPerson} // Adjust as necessary
//             content={program.description}
//             orientation={orientationPattern[index]} // Assign orientation based on the pattern
//           />
//         ))}
//       </div>

//       <br /><br />
//       {/* Pagination Component */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />

//       {/* Header Section (Below Cards) */}
//       <div className="header-section">
//         <h1 className="main-heading">
//           We have a lot of exciting startup opportunities and candidates — only a few are perfect for you.
//         </h1>
//         <p className="subheading">We’ll help you find the few.</p>
//         <button className="find-button">Find what's next</button>

//         {/* Dropdown Section */}
//         <div className="dropdowns-container">
//           <select className="dropdown">
//             <option>Featured Lists</option>
//             {/* Add more options as needed */}
//           </select>
//           <select className="dropdown">
//             <option>Remote Jobs</option>
//           </select>
//           <select className="dropdown">
//             <option>Jobs by Location</option>
//           </select>
//           <select className="dropdown">
//             <option>Jobs by Role & Location</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


















import React, { useEffect, useState } from 'react';
import './Discover.css';
import ProgramCard from '../components/ProgramCard'; // Import the ProgramCard component
import Pagination from '../components/Pagination'; // Import the Pagination component
import { db } from '../firebase'; // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

function App() {
  const [programs, setPrograms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 6; // Set how many programs to display per page
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterCity, setFilterCity] = useState('any city');

  // Fixed orientation pattern
  const orientationPattern = ['vertical', 'horizontal', 'vertical', 'vertical', 'horizontal', 'horizontal'];

  // Fetch programs from Firestore
  useEffect(() => {
    const fetchPrograms = async () => {
      const programsCollection = collection(db, 'programs');
      const programsSnapshot = await getDocs(programsCollection);
      const programsList = programsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPrograms(programsList);
    };

    fetchPrograms();
  }, []);

  // Apply filters based on selected values
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = filterCategory === 'all' || program.industry.includes(filterCategory);
    const matchesCity = filterCity === 'any city' || program.location === filterCity;
    return matchesCategory && matchesCity;
  });

  const totalPages = Math.ceil(filteredPrograms.length / programsPerPage);
  
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
  const currentPrograms = filteredPrograms.slice(indexOfFirstProgram, indexOfLastProgram);

  return (
    <div className="app-container">
      <h1 className="heading">Discover Programs</h1>
      {/* Dropdown Filters Section */}
      <div className="filters-container">
        <p>Show me</p>
        <div className="filter-dropdown">
          <select className="dropdown" onChange={e => setFilterCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="Finance">Finance</option>
            <option value="Technology">Technology</option>
            <option value="Education">Education</option>
            <option value="Healthcare & Lifesciences">Healthcare & Lifesciences</option>
            <option value="Media & Entertainment">Media & Entertainment</option>
            <option value="Retail">Retail</option>
          </select>
        </div>
        <p>programs, active in</p>
        <div className="filter-dropdown">
          <select className="dropdown" onChange={e => setFilterCity(e.target.value)}>
            <option value="any city">Any City</option>
            <option value="remote">Remote</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            {/* Add more cities as needed */}
          </select>
        </div>
      </div>

      <br /><br />
      <div className="articles-container">
        {/* Program Cards */}
        {currentPrograms.map((program, index) => (
           <ProgramCard
           
           id={program.id}
           title={program.title}
           image={program.image} // Use the image field
           description={program.description}
           category={program.industry.join(', ')} // Join the array for display
           location={program.location}
           startDate={program.startDate} // Added fields
           endDate={program.endDate}
           resultDate={program.resultDate}
           eligibility={program.eligibility}
           incentives={program.incentives} // Incentives object
           organizerDetails={program.organizerDetails} // Organizer details
           contactInfo={program.contactInfo} // Contact info object
           portfolioCompanies={program.portfolioCompanies} // Portfolio companies array
           logos={program.logos} // Logos array
           faqs={program.faqs} // FAQs array
           orientation={orientationPattern[index]} // Assign orientation based on the pattern
         />
        ))}
      </div>

      <br /><br />
      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Header Section (Below Cards) */}
      <div className="h-section">
        <h1 className="main-heading">
          We have a lot of exciting startup opportunities and candidates — only a few are perfect for you.
        </h1>
        <p className="subheading">We’ll help you find the few.</p>
        <button className="find-button">Find what's next</button>

        {/* Dropdown Section */}
        <div className="dropdowns-container">
          <select className="dropdown">
            <option>Featured Lists</option>
            {/* Add more options as needed */}
          </select>
          <select className="dropdown">
            <option>Remote Jobs</option>
          </select>
          <select className="dropdown">
            <option>Jobs by Location</option>
          </select>
          <select className="dropdown">
            <option>Jobs by Role & Location</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
