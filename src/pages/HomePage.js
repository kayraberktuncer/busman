import { useEffect } from "react";
import HomeForm from "../components/HomeForm";
import UserDetail from "../components/UserDetail";

export function HomePage({ getAllData, userData, setUserData }) {
  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <div>
      <h1>BUSMAN</h1>
      <HomeForm userData={userData} setUserData={setUserData} />
      <UserDetail getAllData={getAllData} />
    </div>
  );
}

export default HomePage;
