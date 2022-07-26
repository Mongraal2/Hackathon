import React from 'react'
import { PieChart, Pie, Cell, } from 'recharts';

const PieData = () => {
    const data = [
        { name: 'Doctors Added', value: 500 },
        { name: 'Clinics Added', value: 300 },
        { name: 'Confirm Booking', value: 300 },
        { name: 'Total Booking', value: 200 },
        // { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#6966E8', '#FEDEBC', '#F53542', '#FF8042'];
    return (
        <div>
            <PieChart width={800} height={400} >
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default PieData