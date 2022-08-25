import React,{useState,useEffect} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff1f1f'];


const EventGenre=({events})=>{
  const [data, setData] = useState([]);

  const getData=()=>{
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre)=>{
      const value = events.filter(event=> event.summary.split(' ').includes(genre)).length;
      return { name: genre, value };
  });
    return data
  }

  useEffect(() => { setData(() => getData()); }, [events]);
    return (
      <ResponsiveContainer height={400} width={'100%'}>
        <PieChart width={400} height={400}>
          <Pie
            data={getData()}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>percent>0?`${name} ${(percent * 100).toFixed(0)}%`:''}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
}



export default EventGenre