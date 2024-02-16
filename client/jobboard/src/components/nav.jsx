import React from 'react';
import Logo from "../assets/logo.png";
import UserInfo from './userdata'

const Nav = () => {
	const user=UserInfo();

	return(
	<>
  
          {/* {user ? ( */}
          	<nav className="bg-white border-gray-200 dark:bg-gray-900">
		    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
		        <img src={Logo} className="h-8" alt="Logo" />
		      </a>
		      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
		        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
		          <li>
		            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
		          </li>
		          <li>
		            <a href="/create" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create</a>
		          </li>
		            <li>
		              <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Welcome, {user.username}!</p>
		            </li>
		            </ul>
			      </div>
			    </div>
			  </nav>
{/* //           ) : ( */}
{/* //           <nav className="bg-white border-gray-200 dark:bg-gray-900"> */}
{/* // 	    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> */}
{/* // 	      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
{/* // 	        <img src={Logo} className="h-8" alt="Logo" /> */}
{/* // 	      </a> */}
{/* // 	      <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
{/* // 	        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
{/* // 	          <li> */}
{/* // 	            <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a> */}
{/* // 	          </li> */}
{/* //               <li> */}
{/* //                 <a href="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a> */}
{/* //               </li> */}
{/* //               <li> */}
{/* //                 <a href="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a> */}
{/* //               </li> */}
{/* //               </ul> */}
{/* // 		      </div> */}
{/* // 		    </div> */}
{/* // 		  </nav> */}
{/* //  */}
{/* //           )} */}
	</>
	);
}

export default Nav;
