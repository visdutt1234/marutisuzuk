import "./App.scss";
import { Fragment, useState } from "react";
import logo from "./assets/maruti-logo.png";
import searchIcon from "./assets/search-icon.svg";
import notiIcon from "./assets/notifications.svg";
import call from "./assets/call.svg";
import dashboard from "./assets/dashboard.svg";
import report from "./assets/report.svg";
import settings from "./assets/settings.svg";
import tools from "./assets/tools.svg";
import rightIcon from "./assets/right-icon.svg";
import calendarIcon from "./assets/calendar.svg";
import closeIcon from "./assets/close.svg";

function App() {
  const [openSideM, setOpenSideM] = useState(false);
  const [open, setOpen] = useState(false);

  const sideMenuHandler = () => {
    if(openSideM) {
      setOpenSideM(false)
    } else {
      setOpenSideM(true);
    }
  }

  return (
    <Fragment>
      <header>
        <div className="leftSide">
          <a className="logo" href="/" title="">
            <img src={logo} alt="logo" />
          </a>
          <div className="searchField">
            <i className="icon">
              <img src={searchIcon} alt="search" />
            </i>
            <input type="text" name="search" placeholder="Search..." />
          </div>
        </div>
        <div className="headerText">Pickup & Drop Appointment</div>
        <div className="rightSide">
          <div className="noti">
            <span className="counter">6</span>
            <img src={notiIcon} alt="icon" />
          </div>
          <div className="account">
            <span className="userIcon"></span>
            <span className="userName">Bradley Robin</span>
          </div>
        </div>
      </header>
      <aside className={`sideMenu ${openSideM ? 'openSideMenu' : ''}`}>
        <span className="extendButton" onClick={() => sideMenuHandler()}>
          <img src={rightIcon} alt="icon" />
        </span>
        <ul>
          <li>
            <a href="#" title="">
              <i className="icon">
                <img src={dashboard} alt="icon" />
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i className="icon">
                <img src={call} alt="icon" />
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i className="icon">
                <img src={report} alt="icon" />
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i className="icon">
                <img src={tools} alt="icon" />
              </i>
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i className="icon">
                <img src={settings} alt="icon" />
              </i>
            </a>
          </li>
        </ul>
      </aside>
      <main className="container">
        <div className="filters">
          <div className="inputFields error">
            <label>Appointment Date</label>
            <div className="dateField">
              <i className="icon">
                <img src={calendarIcon} alt="icon" />
              </i>
              <input type="date" name="date" />
            </div>
          </div>
          <div className="inputFields selectField">
            <select>
              <option>Pickup Type</option>
              <option>Pickup Type</option>
              <option>Pickup Type</option>
              <option>Pickup Type</option>
              <option>Pickup Type</option>
            </select>
          </div>
          <div className="inputFields selectField">
            <select>
              <option>Workshop</option>
              <option>Workshop</option>
              <option>Workshop</option>
              <option>Workshop</option>
              <option>Workshop</option>
            </select>
          </div>
          <div className="inputFields selectField">
            <select>
              <option>Service Confirmation</option>
              <option>Service Confirmation</option>
              <option>Service Confirmation</option>
              <option>Service Confirmation</option>
              <option>Service Confirmation</option>
            </select>
          </div>
          <div className="inputFields selectField">
            <select>
              <option>Due Service Type</option>
              <option>Due Service Type</option>
              <option>Due Service Type</option>
              <option>Due Service Type</option>
              <option>Due Service Type</option>
            </select>
          </div>
        </div>
        <div className="board">
          <h1>Pickup and Drop Board</h1>
          <div className="table">
            <div className="indicater">
              <span>
                <i className="pickUpBg"></i>Pick Up
              </span>
              <span className="drop">
                <i></i>Drop
              </span>
            </div>
            <table>
              <tr>
                <th>Driver Name</th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
                <th>
                  06:00 AM
                  <br />
                  07:00 AM
                </th>
              </tr>
              <tr>
                <td>
                  <span className="text">Ramesh</span>
                  <span className="tag">Last Attended</span>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox pickUpCheck">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  Ramesh <span className></span>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                    <div className="toolTip">
                      <div className="toolTipRow">
                        <span>Customer Name :</span>
                        <span>Amit Patel</span>
                      </div>
                      <div className="toolTipRow">
                        <span>Mobile No. :</span>
                        <span>+91 XXXXX XXXXX</span>
                      </div>
                      <div className="toolTipRow">
                        <span>Pickup Location :</span>
                        <span>New Delhi, India</span>
                      </div>
                      <div class="tooltipArrow"></div>
                    </div>
                  </label>
                </td>
                <td>
                  <label className="checkbox pickUpCheck">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  Ramesh <span className></span>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox pickUpCheck">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  Ramesh <span className></span>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox pickUpCheck">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  Ramesh <span className></span>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox pickUpCheck">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  Ramesh <span className></span>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox pickUpCheck">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
                <td>
                  <label className="checkbox">
                    <input type="checkbox" />
                    <span className="checkbox__indicator"></span>
                  </label>
                </td>
              </tr>
            </table>
          </div>
          <div className="buttonBottom">
            <button className="primary" onClick={() => setOpen(true)}>Daily Report</button>
          </div>
          <div className="tableShorting">
            <table>
              <thead>
                <tr>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <label className="checkbox">
                          <input type="checkbox" />
                          <span className="checkbox__indicator"></span>
                        </label>
                        <span className="text">Customer Name</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <label className="checkbox" />
                        <span className="text">Customer ID</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Customer Priority</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Campaign Type</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">Vehicle Type</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Model Name</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">Reg. No</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Pick up Date & Time</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">Drop Date & Time</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Appointment Status</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">Appointment ID</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Due Service Date</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">SA Name</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">PND Driver Name</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">PND Driver Ph. No.</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="boxCell">
                      <div className="boxCellTop">
                        <span className="text">Pickup Address</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                      <div className="boxCellTop">
                        <span className="text">Drop Address</span>
                        <div className="buttonWrp">
                          <span className="arrowButton"></span>
                          <span className="arrowDown"></span>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="tableScrolll">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkbox__indicator"></span>
                          </label>
                          <span className="text">Nitin kumar</span>
                        </div>
                        <div className="tdCardTop">
                          <label className="checkbox" />
                          <span className="text">I104523689</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">High</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag">EW-P</span>
                          <span className="tag yellow">MCP</span>
                          <span className="tag blue">CCP-H</span>
                          <span className="tag sky">L-752</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">FR1</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag filledTag yellowBG">COM</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="tag filledTag redBG">Cancelled</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">AP51582</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Feb 05, 2022</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">Vikas Yadav</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Raju Kamar</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">+91 XXXXX XXXXX</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkbox__indicator"></span>
                          </label>
                          <span className="text">Nitin kumar</span>
                        </div>
                        <div className="tdCardTop">
                          <label className="checkbox" />
                          <span className="text">I104523689</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">High</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag">EW-P</span>
                          <span className="tag yellow">MCP</span>
                          <span className="tag blue tagDisble">CCP-H</span>
                          <span className="tag sky">L-752</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">FR1</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag filledTag darkgryBG">COM</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="tag filledTag greenBG">
                            Completed
                          </span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">AP51582</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Feb 05, 2022</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">Vikas Yadav</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Raju Kamar</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">+91 XXXXX XXXXX</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkbox__indicator"></span>
                          </label>
                          <span className="text">Nitin kumar</span>
                        </div>
                        <div className="tdCardTop">
                          <label className="checkbox" />
                          <span className="text">I104523689</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">High</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag tagDisble">EW-P</span>
                          <span className="tag yellow">MCP</span>
                          <span className="tag blue">CCP-H</span>
                          <span className="tag sky">L-752</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">FR1</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag filledTag yellowBG">COM</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="tag filledTag">driver rejected</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">AP51582</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Feb 05, 2022</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">Vikas Yadav</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Raju Kamar</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">+91 XXXXX XXXXX</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkbox__indicator"></span>
                          </label>
                          <span className="text">Nitin kumar</span>
                        </div>
                        <div className="tdCardTop">
                          <label className="checkbox" />
                          <span className="text">I104523689</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">High</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag tagDisble">EW-P</span>
                          <span className="tag yellow tagDisble">MCP</span>
                          <span className="tag blue">CCP-H</span>
                          <span className="tag sky">L-752</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">FR1</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag filledTag darkgryBG">PRV</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="tag filledTag redBG">Cancelled</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">AP51582</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Feb 05, 2022</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">Vikas Yadav</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Raju Kamar</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">+91 XXXXX XXXXX</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkbox__indicator"></span>
                          </label>
                          <span className="text">Nitin kumar</span>
                        </div>
                        <div className="tdCardTop">
                          <label className="checkbox" />
                          <span className="text">I104523689</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">High</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag">EW-P</span>
                          <span className="tag yellow">MCP</span>
                          <span className="tag blue">CCP-H</span>
                          <span className="tag sky">L-752</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">FR1</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="tag filledTag yellowBG">COM</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Swift Vdi</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">RJ14CE7867</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="tag filledTag greenBG">
                            Completed
                          </span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">AP51582</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Feb 05, 2022</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">Vikas Yadav</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">Raju Kamar</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">+91 XXXXX XXXXX</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="tdCard">
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                        <div className="tdCardTop">
                          <span className="text">NH-16, Bhanpur, Opp..</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {open && <Fragment>
        <div className="dailyRePopUp">
          <span className="close" onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="icon"/>
          </span>
          <h2>Daily Report</h2>
          <div className="dailyReWrpr">
            <div className="col-50">
              <div className="inputFields">
                <label>From Date</label>
                <div className="dateField">
                  <i className="icon">
                    <img src={calendarIcon} alt="icon" />
                  </i>
                  <input type="date" name="date" />
                </div>
              </div>
            </div>
            <div className="col-50">
              <div className="inputFields">
                <label>To Date</label>
                <div className="dateField">
                  <i className="icon">
                    <img src={calendarIcon} alt="icon" />
                  </i>
                  <input type="date" name="date" />
                </div>
              </div>
            </div>
            <div className="col-50">
              <div className="inputFields selectField">
                <label>Workshop Name</label>
                <select>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="col-50">
              <div className="inputFields selectField">
                <label>P&D Associate Name</label>
                <select>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="textRight">
              <button className="primary">Download</button>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </Fragment>}
    </Fragment>
  );
}

export default App;
