// Importing necessary dependencies and styles
import { useNavigate } from "react-router-dom";
import "../CSS/Messages.css";

// Importing images
import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

// Messages component function
function Messages() {
  // Accessing the navigation function from react-router
  const Navigate = useNavigate();

  // Function to handle navigation to the home page
  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  // React component structure
  return (
    <>
      {/* Messages container */}
      <div className="messages-container">
        {/* Top navigation bar */}
        <div className="topBar">
          {/* Home button with icon */}
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
        </div>

        {/* Filters section */}
        <div className="filters">
          {/* Left side of filters */}
          <div className="leftSide">
            {/* Search bar with icon */}
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          {/* Right side of filters */}
          <div className="rightSide">
            {/* Time filter */}
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

        {/* Messages table */}
        <div className="meetings-table">
          <table>
            {/* Table header */}
            <thead>
              <tr>
                <th>S.No</th>
                <th>Meeting ID</th>
                <th>By</th>
                <th>Message</th>
                <th>Response</th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              <tr>
                <td>1</td>
                <td>12538</td>
                <td>Stars Coordinator</td>
                <td>Some Great News</td>
                <td>
                  {/* Response button */}
                  <button className="response-btn">Respond</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table filters section */}
        <div className="table-filters">
          {/* Left side of table filters */}
          <div className="leftSide">
            {/* Content filter with entry count */}
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

          {/* Right side of table filters */}
          <div className="rightSide">
            {/* Previous and Next buttons for pagination */}
            <button className="previous-btn">&lt;</button>
            <button className="next-btn">&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the Messages component
export default Messages;
