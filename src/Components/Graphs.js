import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

function Graphs() {


  const [data, setData] = useState([]);
  const [intake, setIntake] = useState(0);
  const [burn, setBurn] = useState(0);


  //for taking the id and gmail from the backend
  

  const handleAddData = () => {
    const today = new Date().toLocaleDateString();
    const existingDayIndex = data.findIndex(entry => entry.date === today);

    if (existingDayIndex !== -1) {
      // Update existing day's data
      const updatedData = [...data];
      updatedData[existingDayIndex] = {
        date: today,
        // intake: updatedData[existingDayIndex].intake + parseInt(intake),
        intake:  parseInt(intake),
        burn:   parseInt(burn)
        // burn: updatedData[existingDayIndex].burn + parseInt(burn)
      };
      setData(updatedData);
    } else {
      // Add new day's data
      setData(prevData => [...prevData, { date: today, intake: parseInt(intake), burn: parseInt(burn) }]);
    }

    setIntake(0);
    setBurn(0);
  };

  // Generate labels for each day
  const labels = data.map(entry => entry.date);

  // Generate datasets for intake and burn data
  const intakeData = data.map(entry => entry.intake);
  const burnData = data.map(entry => entry.burn);

  // Clear data after 7 days
  if (data.length === 7) {
    setTimeout(() => {
      setData([]);
    }, 604800000); // 7 days in milliseconds
  }

  


  return (
    <div className='mt-16 flex flex-col gap-12 min-h-screen bg-slate-200 justify-center'>
      <div className='flex flex-row pt-6 gap-20 w-2/3 items-center'>
        <div className='w-3/4 h-auto border-3 shadow-2xl border-slate-100'>
          <Bar
            data={{
              labels,
              datasets: [
                {
                  label: 'Intake',
                  data: intakeData,
                  backgroundColor: 'green',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                  borderRadius:8
                },
                {
                  label: 'Burn',
                  data: burnData,
                  backgroundColor: 'red',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                  borderRadius:8
                }
              ]
            }}
          />
        </div>

        <div className='flex flex-col justify-start gap-6'>
          <input
            type="number"
            value={intake}
            onChange={(e) => setIntake(e.target.value)}
            placeholder="How many calories you consumed today?"
          />
          <input
            type="number"
            value={burn}
            onChange={(e) => setBurn(e.target.value)}
            placeholder="How many calories you burned today?"
          />
          <div>
            <button onClick={handleAddData}>Add Data</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;













// import React, { useState } from 'react';
// import { Bar } from 'react-chartjs-2';

// function Graphs() {
//   const [data, setData] = useState([]);
//   const [intake, setIntake] = useState(0);
//   const [burn, setBurn] = useState(0);

//   const handleAddData = () => {
//     const newData = {
//       intake,
//       burn
//     };
//     setData(prevData => [...prevData, newData]);
//     setIntake(0);
//     setBurn(0);
//   };

//   // Generate labels for each day
//   const labels = data.map((_, index) => `Day ${index + 1}`);

//   // Generate datasets for intake and burn data
//   const intakeData = data.map(entry => entry.intake);
//   const burnData = data.map(entry => entry.burn);

//   return (
//     <div className='mt-16 flex flex-col gap-12 min-h-screen bg-slate-200'>
//       <div className='flex flex-row pt-6 gap-20'>
//         <div className='w-96 h-80 border-3 shadow-2xl border-slate-100'>
//           <Bar
//             data={{
//               labels,
//               datasets: [
//                 {
//                   label: 'Intake',
//                   data: intakeData,
//                   backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                   borderColor: 'rgba(75, 192, 192, 1)',
//                   borderWidth: 1
//                 },
//                 {
//                   label: 'Burn',
//                   data: burnData,
//                   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                   borderColor: 'rgba(255, 99, 132, 1)',
//                   borderWidth: 1
//                 }
//               ]
//             }}
//           />
//         </div>

//         <div className='flex flex-col justify-start gap-6'>
//           <input
//             type="number"
//             value={intake}
//             onChange={(e) => setIntake(e.target.value)}
//             placeholder="How many calories you consumed today?"
//           />
//           <input
//             type="number"
//             value={burn}
//             onChange={(e) => setBurn(e.target.value)}
//             placeholder="How many calories you burned today?"
//           />
//           <div>
//             <button onClick={handleAddData}>Add Data</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Graphs;










//  import React from 'react'
//  import { Chart as ChartJS } from 'chart.js/auto';
//  import {Bar , Doughnut , Line} from 'react-chartjs-2';
//  import { useState } from 'react';

//  import ChartData from "../data/ChartData.json"

//  function Graphs() {

//   const [intake, setIntak] = useState(0);
//   const [burn, setBurn] = useState(0);

//   function handler(){
//     console.log()
//   }


  //  return (
  //    <div className=' mt-16 flex flex-col gap-12 min-h-screen bg-slate-200 '>
  //     <div className='flex flex-row pt-6 gap-20'>  
      
           {/* <div className='w-96 h-80 border-3 shadow-2xl border-slate-100'> 
                <Bar 
                  data={{
                    labels:["A","B","C"],  //the x axis values
                    datasets:[
                      {
                        label : "intake",
                        data : [`${intake}`],
                        backgroundColor:[
                          "green",
                        ],
                        borderRadius:8,
                      },
                      {
                        label : "burn",
                        data : [`${burn}`],
                        backgroundColor:[
                          "red",
                        ],
                        borderRadius:8, 
                      },
                    ]
                  }}
                /> 
             </div>   */}

            {/* <div className='flex flex-col justify-start gap-6'>
                 <input
                 type="number"
                 value={intake}
                 onChange={(e) => setIntak(e.target.value)}
                 placeholder="How many calories you consume today ? "
                 />
                 <input
                 type="number"
                 value={burn}
                 onChange={(e) => setBurn(e.target.value)}
                 placeholder="How many calories you had burned today ? "
                 />
                 <div>
                  <button onClick={handler}>Add Data</button>
                 </div>
            </div> */}



      {/* </div> */}

        {/* <div className= "w-96 h-80 broder-3  shadow-2xl  border-slate-100">
           <Bar
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        borderRadius:5,
                        backgroundColor:"gray",
                    },
                    {
                        label : "burn",
                        data :  ChartData.map((data) => data.valueOut),
                        backgroundColor:"green",
                    },
                ]
              }}
           />
        </div>
      </div> */}
     {/* <div className='flex flex-row gap-20'>
        <div>
           <Doughnut
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        backgroundColor:[
                            "green","blue","yellow"
                        ]
                    },
                ]
              }}
           />
        </div> */}

        {/* <div className=' w-1/3'>
           <Line
              data={{
                labels: ChartData.map((data) => data.label) ,  //the x axis values
                datasets:[
                    {
                        label : "intake",
                        data :  ChartData.map((data) => data.valueIn),
                        backgroundColor:[
                            "green","blue","yellow"
                        ]
                    },
                ]
              }}
           />
        </div> */}
    
     {/* --------------------------- */}
     
  {/* </div>
   )
 }
 
 export default Graphs */}