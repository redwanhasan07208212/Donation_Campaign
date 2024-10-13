import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { getStoredDonation } from "../utils/saveDonation";

export default function Stat() {
  const stats = useLoaderData();
  const [displayStat, setDisplayStat] = useState([]);

  useEffect(() => {
    const statData = getStoredDonation();
    if (stats.length > 0) {
      const showStatData = stats.filter((stat) => statData.includes(stat.id));
      setDisplayStat(showStatData);
    }
  }, [stats]);

  const data = [
    { name: "Group A", value: 12 },
    { name: "Group B", value: displayStat.length },
  ];

  const COLORS = ["#FFBB28", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex justify-center items-center container mx-auto mb-20">
        <div className="flex items-center justify-center mr-14">
          <p>Your Donation</p>
          <div className="w-24 h-3 bg-[#00C49F]"></div>
        </div>
        <div className="flex items-center justify-center">
          <p>Total Donation</p>
          <div className="w-24 h-3 bg-[#FFBB28]"></div>
        </div>
      </div>
    </>
  );
}
