import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import profileImg from '../Images/profileImg (2).png'
//importing all the logos
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";


import axios from 'axios';
function Profile() {
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
   
  const [name, setName] = useState("");
    const [emaail, setEmail] = useState("");
    const [weight, setWeight] = useState("00");
    const [height, setHeight] = useState("00");
    const [bmi, setBmi] = useState("00");
    const [gender, setGender] = useState("NONE");


  //all info collect from backend soon:
  //when we update user profile
  // const name = "Vishal Verma";
  // const email = "v.verma7271@gmail.com"
  // const weight = "80";
  // const BMI = "25";
  // const height = "174";
   
    
    //this is a get method wich takes email , weight,height , bmi from db
    useEffect(() => {
      console.log(email);
      axios.get(`${process.env.REACT_APP_BASE_URL}/show_profile`,{ params: { email: email }})
          .then(result => {
              // console.log(result.data.message);
              // console.log(result.data.name)
                setName(result.data.name);
                setEmail(result.data.email);
                setWeight(result.data.weight);
                setHeight(result.data.height);
                setBmi(result.data.bmi);
                setGender(result.data.gender);
                console.log(result.data);
              console.log("Data came successfully");
          })
          .catch(err => {
            if (err.response) {
                // The request was made and the server responded with a status code
                console.log("Server responded with status code:", err.response.status);
                console.log("Error message from server:", err.response.data.message);
            } else if (err.request) {
                // The request was made but no response was received
                console.log("No response received from the server:", err.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error("Error occurred while setting up the request:", err.message);
            }
        });
  }, []); // Empty dependency array to ensure it runs only once when the component mounts



   

  function handler(){
      navigate('/profile_update_form')
  } 

  return (
    <div className='flex flex-col justify-center items-center'>

  {/* Header */}
  <div className='text-center'>
    <p className='text-lg font-bold'>Hello, {name} !</p>
    <p className='text-xl font-bold'>Your Profile</p>
  </div>

  {/* Profile Card */}
  <div className='bg-white rounded-lg shadow-2xl p-6 mt-6 max-w-xl w-full'>
    {/* Profile Image */}
      <div className='flex justify-center items-center'>
          <div className='w-full lg:w-1/3 p-4 flex items-center justify-center'>
            <img src={profileImg} alt='Profile Image' className='rounded-full w-full ' />
          </div>
      </div>

    {/* Profile Info */}
    <div className='flex flex-col items-center lg:items-start'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-4'>
          <MdDriveFileRenameOutline size={30} />
          <p className='text-lg font-semibold'> {name} </p>
        </div>
        <div className='flex items-center gap-4'>
          <MdEmail size={30} />
          <p className='text-lg font-semibold'>{emaail} </p>
        </div>
        <div className='flex items-center gap-4'>
          <FaWeight size={27} />
          <p className='text-lg font-semibold'>{weight}  kg's</p>
        </div>
        <div className='flex items-center gap-4'>
          <GiBodyHeight size={30} />
          <p className='text-lg font-semibold'> {height} cm's</p>
        </div>
        <div className='flex items-center gap-4'>
          <IoBody size={30} />
          <p className='text-lg font-semibold'>{bmi} body mass index</p>
        </div>
        <div className='flex items-center gap-4'>
          {
            gender == 'male' ? 
              <>
               <BsGenderMale size={28} /> 
              <p className='text-lg font-semibold'>{gender}</p> 
              </>
            :
            <>
              <BsGenderFemale size={28} /> 
             <p className='text-lg font-semibold'>{gender}</p> 
             </>
          }
        </div>
      </div>
      <div className='mt-4'>
        <button onClick={handler} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'>
          Update Profile
        </button>
      </div>
    </div>
  </div>
</div>

  




    // <div className='  flex flex-col justify-center items-center '>
      
    //   <div>
    //     <p>Hii ! {name}</p>
    //     <p>Your Profile</p>
    //   </div>
      
    //   <div className='flex flex-row items-center justify-center gap-3'>

    //     <div className=' w-1/3 p-7'>
    //        <img src={profileImg} alt='profile ima' className='mix-blend-darken' />
    //     </div>

    //     <div className=' flex flex-col  items-center'>
    //        <div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><MdDriveFileRenameOutline size={30}/></p>
    //               <p className=' text-2xl font-bold'>{name}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><MdEmail size={30}/></p>
    //               <p className=' text-2xl font-bold'>{email}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><FaWeight size={27}/></p>
    //               <p className=' text-2xl font-bold'>{weight}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><GiBodyHeight size={30}/></p>
    //               <p className=' text-2xl font-bold'>{height}</p>
    //             </div>
    //             <div className='flex flex-row gap-5  '>
    //               <p><IoBody size={30}/></p>
    //               <p className=' text-2xl font-bold'>{BMI}</p>
    //             </div>
    //        </div>
    //        <div>
    //         <button>Update</button>
    //        </div>
    //     </div>


    //   </div>
      
        
    // </div>
  )
}

export default Profile