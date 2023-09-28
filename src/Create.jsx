import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./UserReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
    console.log("sdfcv");
  };

  return (
    <div className="flex w-full content-center h-screen justify-center items-center">
      <div className="w-[50%] border  bg-slate-500 text-white p-6 rounded-lg ">
        <h1 className="text-3xl text-blue-500 font-medium">Add new user</h1>
        <form onSubmit={handleSubmit} className="w-full ">
          <div>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form-control rounded  w-[50%] p-2 outline-none text-slate-700"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded w-[50%] p-2 outline-none text-slate-700"
            />
          </div>
          <br />
          {/* <button className="bg-blue-500 px-6 py-2 rounded">
            Submit
          </button> */}
          <a href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Submit</span>
</a>
        </form>
      </div>
    </div>
  );
};

export default Create;
