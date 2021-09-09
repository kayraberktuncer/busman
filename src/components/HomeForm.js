export function HomeForm({ userData, setUserData }) {
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className="home-form">
      <form onSubmit={handleSubmit}>
        <div className="home-form-title">
          <h1>Home Form</h1>
        </div>
        <div className="home-form-item">
          <input
            type="text"
            value={userData.companyName}
            onChange={e =>
              setUserData({ ...userData, companyName: e.target.value })
            }
            name="companyName"
            id="companyName"
            placeholder="Company Name"
          />
        </div>
        <div className="home-form-item">
          <input
            type="text"
            value={userData.name}
            onChange={e => setUserData({ ...userData, name: e.target.value })}
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="home-form-item"></div>
        <div className="home-form-item">
          <input
            type="text"
            value={userData.surname}
            onChange={e =>
              setUserData({ ...userData, surname: e.target.value })
            }
            name="surname"
            id="surname"
            placeholder="Surname"
          />
        </div>
        <div className="home-form-item">
          <input
            type="text"
            value={userData.country}
            onChange={e =>
              setUserData({ ...userData, country: e.target.value })
            }
            name="country"
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="home-form-item">
          <input
            type="text"
            value={userData.slogan}
            onChange={e => setUserData({ ...userData, slogan: e.target.value })}
            name="slogan"
            id="slogan"
            placeholder="Slogan"
          />
        </div>
        <div className="home-form-item home-form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default HomeForm;
