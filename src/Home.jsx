import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./UserReducer";
import { AiFillEdit } from 'react-icons/ai'
import {AiFillDelete} from 'react-icons/ai'
const Home = () => {
    const users = useSelector((state) => state.users) 
    
    const dispatch=useDispatch()
    const handleDelete = (id) => {
      dispatch(deleteUser({id:id}))
    }
  return (
      <div className='mt-6'>
          <h1 className='text-center text-4xl text-blue-600 font-bold'>Crud App</h1>
          {/* <Link to='/create' className='bg-green-500 p-2 rounded text-white mb-4'>Create +</Link> */}
          <Link to='/' class="inline-flex hover:shadow-md  items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
<span className="hover:">Create user</span>
<svg class="w-4 h-4 ml-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</Link>
          <table className='table mt-4 mx-auto border'>
              <thead className="">
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {users && users.map((user, index) => (
                      
                      <tr key={index}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                              <div className="flex ">
                                  
                                  <Link to={`/edit/${user.id}`} className={`bg-slate-500 px-6 py-2 rounded  text-white block `}>  { <AiFillEdit/>}</Link>
                                  <button onClick={() => handleDelete(user.id)} className="bg-red-500 px-6 py-2 rounded text-white ml-2">{ <AiFillDelete/>}</button>
                              </div>
                              
                                  
                              
                                  
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
          
    </div>
  )
}

export default Home