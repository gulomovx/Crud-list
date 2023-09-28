import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from './UserReducer';
const Update = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id)
  const { name, email } = existingUser[0]
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser({
      id,
      name: uname,
      email:uemail
    }))
    navigate('/ ')
 }

  return (
    <div className="flex w-full content-center  h-screen justify-center items-center">
      <div className="w-[50%] border  bg-slate-500 text-white p-6 rounded-lg ">
        <h1 className="text-4xl text-center text-blue-500 font-medium mb-4">Update  user</h1>
        <form onSubmit={handleUpdate} className="w-full text-center">
          <div>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={uname}
              onChange={e=>setName(e.target.value)}
              className="form-control rounded  w-[50%] p-2 outline-none text-slate-700 mx-auto mb-4"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={e=>setEmail(e.target.value)}

              value={uemail}
              className="form-control rounded mx-auto w-[50%] p-2 outline-none text-slate-700"
            />
          </div>
          <br />
          {/* <button className="bg-blue-500 px-6 py-2 rounded">
            Submit
          </button> */}
          <button href="#_" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Submit</span>
</button>
        </form>
      </div>
    </div>
  )
}

export default Update