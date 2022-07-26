// import React from 'react'
// import { Tooltip, XAxis, YAxis, Legend, CartesianGrid, Bar, BarChart } from "recharts"
// const ChartBar = () => {
//     const data = [
//         { name: "Jan", value: "20" },
//         { name: "Feb", value: "30" },
//         { name: "March", value: "40" },
//         { name: "April", value: "50" },
//         { name: "May", value: "60" },
//         { name: "June", value: "70" },
//         { name: "July", value: "80" },
//         { name: "Aug", value: "90" },
//         { name: "Sep", value: "100" },
//         { name: "Oct", value: "110" },
//         { name: "Nov", value: "120" },
//         { name: "Dec", value: "130" },
//     ]
//     return (
//         <div style={{
//             maxWidth: "100%",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center"
//         }}>
//             <div className='d-flex justify-content-between' style={{ width: "74%" }}>
//                 <h6>Appointment overview</h6>
//                 <p>24.5 M</p>
//             </div>
//             <BarChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     bottom: 5,
//                 }}
//                 barSize={20}
//             >
//                 <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
//             </BarChart>
//         </div>
//     )
// }

// export default ChartBar


import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const AppointmentOverview = () => {
    const data = [
        {
          name: 'Jan',
          Booking: 4000,
          Completed: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
           Booking: 4000,
          Completed: 2400,
          amt: 2210,
        },
        {
          name: 'March',
           Booking: 4000,
          Completed: 2400,
          amt: 2290,
        },
        {
          name: 'April',
           Booking: 4000,
          Completed: 2400,
          amt: 2000,
        },
        {
          name: 'May',
           Booking: 4000,
          Completed: 2400,
          amt: 2181,
        },
        {
          name: 'June',
           Booking: 4000,
          Completed: 2400,
          amt: 2500,
        },
        {
          name: 'July',
           Booking: 4000,
          Completed: 2400,
          amt: 2100,
        },
        {
          name: 'Aug',
           Booking: 4000,
          Completed: 2400,
          amt: 2100,
        },
        {
          name: 'Sep',
           Booking: 4000,
          Completed: 2400,
          amt: 2100,
        },
        {
          name: 'Oct',
           Booking: 4000,
          Completed: 2400,
          amt: 2100,
        },
        {
          name: 'Nov',
           Booking: 4000,
          Completed: 2400,
          amt: 2100,
        },
        {
          name: 'Dec',
           Booking: 4000,
          Completed: 2400,
          amt: 2100,
        },
      ];
  return (
    <div style={{
                  maxWidth: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
              }}>
            <div className='d-flex justify-content-between' style={{ width: "74%" }}>
                <h6>Appointment overview</h6>
                <p>24.5 M</p>
           </div>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Booking" fill="#3E9CEA" />
          <Bar dataKey="Completed" fill="#FFC248" />
        </BarChart>
    </div>
  )
}

export default AppointmentOverview