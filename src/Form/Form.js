import React, { useState } from "react";

function Form() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [gender, setgender] = useState("male");
  const[resume,setresume]=useState("")

  const submit = (e) => {
    e.preventDefault();
    console.log(fname, lname, email, contact, gender,resume);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md transition-transform transform hover:scale-105 duration-300">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 animate-pulse">
         Application form
        </h1>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name*
            </label>
            <input
              className="w-full border border-gray-300 text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="John"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name*
            </label>
            <input
              className="w-full border border-gray-300 text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="Doe"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              className="w-full border border-gray-300 text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact*
            </label>
            <input
              className="w-full border border-gray-300 text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="text"
              placeholder="1234567890"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender*
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setgender(e.target.value)}
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setgender(e.target.value)}
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  className="mr-2"
                  type="radio"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setgender(e.target.value)}
                />
                Other
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Resume*
            </label>
            <input
              className="w-full border border-gray-300 text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="file"
              placeholder="Upload resume"
              onChange={(e) => setresume(e.target.files[0])}
              required
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-l transition-transform transform hover:-translate-y-1"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
