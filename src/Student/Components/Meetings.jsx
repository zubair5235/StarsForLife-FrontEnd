import { useNavigate } from "react-router-dom";
import "../CSS/Meetings.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function Meetings() {
  const Navigate = useNavigate();

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  return (
    <>
      <div className="meetings-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
        </div>

        <div className="filters">
          <div className="leftSide">
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          <div className="rightSide">
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

        <div className="meetings-table">
          <table>
            <thead>
              <tr id="top">
                <th>S.No</th>
                <th>Meeting Title</th>
                <th>By</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Response</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>About stars day</td>
                <td>Stars Coordinator</td>
                <td>2.00-3.00 P.M</td>
                <td>Mam's Cabin</td>
                <td>
                  <button className="response-btn">Respond</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-filters">
          <button className="top-btn">
            <a href="#top">Go to Top</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Meetings;
