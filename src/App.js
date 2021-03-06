import React from 'react';
import CounterButtonContainer from "./containers/CounterButtonContainer";
import SpecialTextBox from "./containers/SpecialTextBoxContainer";
import CounterContainer from "./containers/CounterContainer";
import SpecialText from "./containers/SpecialTextContainer";
import UserButtons from "./containers/UserButtonsContainer";
import Thermostat from "./containers/ThermostatContainer";
import Users from "./containers/UsersContainer";
import ChangeTemperature from "./containers/ChangeTemperatureContainer";
import VideoPlayer from "./containers/VideoPlayerContainer";
import VideoTextBox from "./containers/VideoTextBoxContainer";
import CurrentCity from "./containers/CurrentCityContainer";
import CityDropDown from "./containers/CityDropdownContainer";
import SearchTextBox from "./containers/SearchTextBoxContainer";
import SortUsers from "./containers/SortUsersContainer";
import ScaleVideo from "./containers/ScaleVideoContainer";
import Modal from "./containers/ModalContainer";
import ShowModal from "./containers/ShowModalContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CounterButtonContainer />
        <br />
        <SpecialTextBox />
        <br />
        <UserButtons />
        <br />
        <CityDropDown />
        <br />
        <ChangeTemperature />
        <br />
        <SearchTextBox />
        <br />
        <VideoTextBox />
        <br />
        <SortUsers />
        <br />
        <ScaleVideo />
        <br />
        <ShowModal />
      </div>
      <div className="container">
        <CounterContainer />
        <br />
        <SpecialText />
        <br />
        <CurrentCity />
        <br />
        <Thermostat />
        <br />
        <VideoPlayer />
        <br />


      </div>
      <div className="container">
        <Users />
      </div>
      <Modal />
    </div>
  );
}
export default App;