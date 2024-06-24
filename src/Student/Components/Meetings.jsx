import { useNavigate } from "react-router-dom";
import "../CSS/Meetings.css"; // Importing styles for the Meetings component

import Home from "../Assets/Home Icon.jpg"; // Importing the Home icon image
import Search from "../Assets/Filter-SearchIcon.png"; // Importing the search icon image

function Meetings() {
  const Navigate = useNavigate(); // Initializing the useNavigate hook for programmatic navigation

  // Function to handle navigation to the main page
  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  return (
    <>
      {/* Meetings Container */}
      <div className="meetings-container">
        {/* Top Bar */}
        <div className="topBar">
          {/* Home Button */}
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" /> {/* Home Icon */}
            Home
          </button>
        </div>

        {/* Filters Section */}
        <div className="filters">
          {/* Left Side Filters */}
          <div className="leftSide">
            {/* Search Bar */}
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" /> {/* Search Icon */}
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          {/* Right Side Filters */}
          <div className="rightSide">
            {/* Time Filter */}
            <div className="time filter">
              <input type="text" list="time" placeholder="From When" />
              <datalist id="time">
                <select>
                  <option value="Recent">Recent</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        {/* Meetings Table */}
        <div className="meetings-table">
          <table>
            {/* Table Header */}
            <thead>
              <tr>
                <th>S.No</th>
                <th>Meeting ID</th>
                <th>By</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Response</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <td>1</td>
                <td>12536</td>
                <td>Stars Coordinator</td>
                <td>2.00-3.00 P.M</td>
                <td>Mam's Cabin</td>
                <td>
                  {/* Response Button */}
                  <button className="response-btn">Respond</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Filters Section */}
        <div className="table-filters">
          {/* Left Side Filters */}
          <div className="leftSide">
            <div className="content-filter">
              <p>Showing</p>
              <input type="text" defaultValue={10} list="range-list" />
              <datalist id="range-list">
                <select>
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </datalist>
              <p>
                of <span className="rowCount">100</span> Entries
              </p>
            </div>
          </div>

          {/* Right Side Filters */}
          <div className="rightSide">
            {/* Previous and Next Buttons */}
            <button className="previous-btn">&lt;</button>
            <button className="next-btn">&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Meetings; // Exporting the Meetings component
