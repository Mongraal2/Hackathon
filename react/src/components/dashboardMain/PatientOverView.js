import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const PatientOverView = () => {
    const data = [
        {
          name: 'Jan',
          Booking: 4000,
         AppInstall: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2210,
        },
        {
          name: 'March',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2290,
        },
        {
          name: 'April',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2000,
        },
        {
          name: 'May',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2181,
        },
        {
          name: 'June',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2500,
        },
        {
          name: 'July',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2100,
        },
        {
          name: 'Aug',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2100,
        },
        {
          name: 'Sep',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2100,
        },
        {
          name: 'Oct',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2100,
        },
        {
          name: 'Nov',
           Booking: 4000,
         AppInstall: 2400,
          amt: 2100,
        },
        {
          name: 'Dec',
           Booking: 4000,
         AppInstall: 2400,
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
        <h6>Patient overview</h6>
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
  <Bar dataKey="AppInstall" fill="#FFC248" />
</BarChart>
</div>
  )
}

export default PatientOverView