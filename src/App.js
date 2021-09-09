import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [userData, setUserData] = useState({
    companyName: "",
    name: "",
    surname: "",
    country: "",
    slogan: "",
  });

  const getAllData = () => {
    const currentData = localStorage.getItem("userData");
    if (currentData) {
      return currentData;
    } else {
      return userData;
    }
  };
  return (
    <div>
      <HomePage
        getAllData={getAllData}
        userData={userData}
        setUserData={setUserData}
      />
    </div>
  );
}

export default App;
