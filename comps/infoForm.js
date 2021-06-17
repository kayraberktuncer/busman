export default function InfoForm({ setName, setTitle, setCompany, setInfo }) {
  function handleInformation(event) {
    setName(event.target.username.value)
    setTitle(event.target.usertitle.value)
    setCompany(event.target.companyname.value)
    setInfo(event.target.userinfo.value)
    event.preventDefault()
  }

  return (
    <form
      onSubmit={handleInformation}
      className="form bg-white p-6 my-10 relative"
    >
      <h3 className="text-2xl text-gray-900 font-semibold">
        Let's fill your information!
      </h3>
      <p className="text-gray-600"> To help you choose your property</p>
      <div className="flex space-x-5 mt-3">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Your Name"
          className="border p-2  w-1/2"
        />
        <input
          type="text"
          name="usertitle"
          id="usertitle"
          placeholder="Your Title"
          className="border p-2 w-1/2"
        />
      </div>
      <input
        type="text"
        name="companyname"
        id="companyname"
        placeholder="Company Name"
        className="border p-2 w-full mt-3"
      />
      <textarea
        name="userinfo"
        id="userinfo"
        cols="10"
        rows="3"
        placeholder="Information about your company"
        className="border p-2 mt-3 w-full"
      ></textarea>
      <p className="font-bold text-sm mt-3">GDPR Agreement *</p>
      <div className="flex items-baseline space-x-2 mt-2">
        <input type="checkbox" name="" id="" className="inline-block" />
        <p className="text-gray-600 text-sm">
          I consent to having this website store my submitted information so
          they can respond to my inquiry.
        </p>
      </div>
      <input
        type="submit"
        value="Submit"
        className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
      />
    </form>
  )
}
