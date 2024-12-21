import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Correct Answers",
    value: 80,
  },
  {
    name: "Incorrect Answers",
    value: 50,
  },
];

// const COLORS = ["#65a30d", "#e11d48"]; // Green for correct, Red for incorrect
const COLORS = ["#35BD3A", "#e11d48"]; // Green for correct, Red for incorrect

export default function ResultChart() {
  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = 25 + innerRadius + (outerRadius - innerRadius) * 1.25;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const isLeft = x < cx; // Check if label is on the left side

    return (
      <text
        x={isLeft ? x + 14 : x - 24}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize="14px"
        fontWeight="bold"
      >
        {`${data[index].name.split(" ").at(0)} (${(percent * 100).toFixed(0)}%)`}
      </text>
    );
  };

  return (
    <div className="mx-auto mt-3 w-[80%] sm:w-1/2">
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%" // Makes the chart holloe
            outerRadius="65%" // Adjust thickness
            fill="#fea805"
            paddingAngle={2} // Add space between the sections
            label={renderLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`Cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
