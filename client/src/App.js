import React, {useEffect, useState} from 'react';
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import { gapi } from 'gapi-script'
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import DashBoard from './components/DashBoard/DashBoard';
import ImageGallery from './components/ImageGallery/ImageGallery';
import CreateUserForm from './components/CreateUserForm/CreateUserForm';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';


const clientId = "798778873798-seceoqhfukvss64t2o7u5iufrb9ckn0m.apps.googleusercontent.com";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`/users`) // Update with your API endpoint
      // .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data.data)
      })
      .catch((error) => console.error('Error fetching data:', error));

    // const accessToken = gapi.auth.getToken().access_token;

    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
      gapi.load('client:auth2', start);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      {/* <ImageGallery /> */}
    {/* <LandingPage /> */}
      {/* <LoginButton />
      <LogoutButton /> */}
      {/* <CreateUserForm /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/userform" element={<CreateUserForm />} />
      </Routes>
    </div>
  );
}

export default App;
