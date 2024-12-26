/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useThemeContext } from "../contexts/ThemeContext";

// const COLORS = ["#65a30d", "#e11d48"]; // Green for correct, Red for incorrect
const COLORS_MAP = {
  correct: "#35BD3A",
  incorrect: "#e11d48",
};
// Green for correct, Red for incorrect

/* export default function ResultChart({ correctAnsCount, incorrectAnsCount }) {
  const data = [
    {
      name: "Correct Answers",
      value: correctAnsCount,
    },
    {
      name: "Incorrect Answers",
      value: incorrectAnsCount,
    },
  ];

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
            innerRadius="50%" // Makes the chart hollow
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
} */

const ResultChart = ({ correctAnsCount, incorrectAnsCount }) => {
  const totalAnswers = correctAnsCount + incorrectAnsCount;
  const { isDark } = useThemeContext();

  // Handle edge case where no questions are answered
  if (totalAnswers === 0) {
    return (
      <div className="mx-auto mt-3 flex min-h-[200px] w-[80%] items-center justify-center sm:w-1/2">
        <p className="text-lg font-medium text-gray-600">
          No answers submitted
        </p>
      </div>
    );
  }

  const data = [
    {
      name: "Correct",
      value: correctAnsCount,
      color: COLORS_MAP.correct,
    },
    {
      name: "Incorrect",
      value: incorrectAnsCount,
      color: COLORS_MAP.incorrect,
    },
  ].filter((item) => item.value > 0); // Only include non-zero values

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
    const radius = innerRadius + (outerRadius - innerRadius) * 1.8; // Increased radius multiplier

    // Calculate base position
    let x = cx + radius * Math.cos(-midAngle * RADIAN);
    let y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Adjust position based on angle to prevent overlap
    const isRight = x > cx;

    // Additional spacing for label positioning
    const labelOffset = 10;
    x = isRight ? x + labelOffset : x - labelOffset;

    // Handle edge cases for single value (100% correct or incorrect)

    if (data.length === 1) {
      x = cx;
      y = cy - radius; // Position label above the chart
    }

    const displayName = data[index].name;
    const displayPercent = `${(percent * 100).toFixed(0)}%`;

    return (
      <>
        <text
          x={x}
          y={y - 8}
          fill={isDark ? "white" : "black"}
          textAnchor={data.length === 1 ? "middle" : isRight ? "start" : "end"}
          fontSize="14px"
          fontWeight="medium"
        >
          {displayName}
        </text>
        <text
          x={x}
          y={y + 8}
          fill={isDark ? "white" : "black"}
          textAnchor={data.length === 1 ? "middle" : isRight ? "start" : "end"}
          fontSize="14px"
          fontWeight="bold"
        >
          {displayPercent}
        </text>
      </>
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
            innerRadius="50%"
            outerRadius="65%"
            fill="#8884d8"
            paddingAngle={data.length > 1 ? 2 : 0}
            label={renderLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
