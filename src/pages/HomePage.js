import { useEffect } from "react";
import HomeForm from "../components/HomeForm";
import UserDetail from "../components/UserDetail";

export function HomePage({ getAllData, setUserData }) {
  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <div>
      <h1>BUSMAN</h1>
      <HomeForm />
      <UserDetail />
    </div>
  );
}

export default HomePage;
