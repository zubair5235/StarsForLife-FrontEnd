// Importing necessary dependencies and styles
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../CSS/Archives.css";

// Importing images
import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function Archives() {
  // Accessing the navigation functionality from React Router
  const Navigate = useNavigate();

  // Creating a ref for the upload form
  const uploadForm = useRef(null);

  // Function to navigate to the home page
  function handleHomeNavigation() {
    Navigate("/mainpage");
  }

  // Function to open the upload form
  function handleOpenUploadForm() {
    uploadForm.current.classList.add("show");
  }

  // Function to close the upload form
  function handleCloseUploadForm() {
    uploadForm.current.classList.remove("show");
  }

  // Rendering the Archives component
  return (
    <>
      {/* Main container for the Archives component */}
      <div className="archives-container">
        {/* Top bar with a home button */}
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
        </div>

        {/* Filters section for searching and filtering */}
        <div className="filters">
          {/* Left side of filters with a search bar */}
          <div className="leftSide">
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          {/* Right side of filters with a year filter */}
          <div className="rightSide">
            <div className="year filter">
              <input type="text" list="year" placeholder="Year" />
              <datalist id="year">
                <select>
                  <option value="2019">2019</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        {/* Container for displaying images */}
        <div className="images-container"></div>

        {/* Container for filters and buttons */}
        <div className="filtersandbuttons">
          {/* Left side with an upload button */}
          <div className="leftside">
            <button className="upload-btn" onClick={handleOpenUploadForm}>
              Upload
            </button>
          </div>

          {/* Right side with navigation buttons */}
          <div className="rightSide">
            <button className="previous-btn">&lt;</button>
            <button className="next-btn">&gt;</button>
          </div>
        </div>
      </div>

      {/* Upload form container */}
      <div className="upload-form" ref={uploadForm}>
        {/* Form for uploading files */}
        <form action="">
          {/* Input container for file selection */}
          <div className="input-container">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, video/mp4"
            />
          </div>

          {/* Bottom buttons for cancel and upload actions */}
          <div className="bottom-buttons">
            <button className="cancel-btn" onClick={handleCloseUploadForm}>
              Cancel
            </button>
            <button className="upload-btn" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

// Exporting the Archives component
export default Archives;
