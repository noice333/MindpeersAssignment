import React, { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./themeContext";

const CustomDoughnut = ({ data }) => {
  const theme = useContext(ThemeContext);

  const convertToHours = data.map((x) =>
    x.end.getHours() !== 0
      ? {
          diff:
            x.end.getHours() +
            x.end.getMinutes() / 60 -
            (x.start.getHours() + x.start.getMinutes() / 60),
          start: x.start.getHours(),
          end: x.end.getHours(),
        }
      : {
          diff:
            24 +
            x.end.getMinutes() / 60 -
            (x.start.getHours() + x.start.getMinutes() / 60),
          start: x.start.getHours(),
          end: 0,
        },
  );
  console.log("Data: ", convertToHours);
  const segmentsDataArray = convertToHours.map((x) => ({
    strokeDasharray: `${4.17 * x.diff} ${100 - 4.17 * x.diff}`,
    strokeDashoffset: `${-(4.17 * x.start) - 75}`,
  }));

  const center = 150; // Center of the circle
  const outerRadius = 100; // Outer radius of the doughnut chart
  const innerRadius = 80; // Inner radius of the doughnut chart
  const numLines = 12; // Number of long lines

  const longLines = [];
  const shortLines = [];
  const labels = [];

  const outerLabelPositions = [
    { x: center + outerRadius + 60, y: center, text: "Morning" },
    { x: center, y: center + outerRadius + 40, text: "Afternoon" },
    { x: center - outerRadius - 60, y: center, text: "Evening" },
    { x: center, y: center - outerRadius - 40, text: "Night" },
  ];
  const outerLabels = outerLabelPositions.map((pos, i) => (
    <text
      key={`label-${i}`}
      x={pos.x}
      y={pos.y}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="12"
      fill={theme.text}
    >
      {pos.text}
    </text>
  ));
  for (let i = 0; i < numLines; i++) {
    const hour = i * 2;
    const angle = i * (360 / numLines) * (Math.PI / 180);
    const x1 = center + innerRadius * Math.sin(angle);
    const y1 = center - innerRadius * Math.cos(angle);
    const x2 = center + (innerRadius + 12) * Math.sin(angle); // Adjusted length for long line
    const y2 = center - (innerRadius + 12) * Math.cos(angle);

    longLines.push(
      <line
        key={`long-line-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={theme.text}
        strokeWidth="2"
      />,
    );

    for (let j = 1; j <= 3; j++) {
      const lineAngle = angle + j * (360 / (numLines * 4)) * (Math.PI / 180);
      const x3 = center + innerRadius * Math.sin(lineAngle);
      const y3 = center - innerRadius * Math.cos(lineAngle);
      const x4 = center + (innerRadius + 6) * Math.sin(lineAngle); // Adjusted length for short line
      const y4 = center - (innerRadius + 6) * Math.cos(lineAngle);

      shortLines.push(
        <line
          key={`short-line-${i}-${j}`}
          x1={x3}
          y1={y3}
          x2={x4}
          y2={y4}
          stroke="#ADADAD"
          strokeWidth="2"
        />,
      );
    }
    const gap = 12; // Adjusted gap between lines and labels
    const labelX = center + (innerRadius - gap) * Math.sin(angle);
    const labelY = center - (innerRadius - gap) * Math.cos(angle);
    labels.push(
      <text
        key={`label-${i}`}
        x={labelX}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="12"
        fill={theme.text}
      >
        {hour}
      </text>,
    );
  }

  return (
    <div>
      <div className="App">
        <svg width={center * 2} height={center * 2} className="addOverflow">
          <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
            <circle
              className="donut-hole"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
            ></circle>
            <circle
              className="donut-ring"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke={theme.palette.primary}
              strokeWidth="3"
            ></circle>
            {segmentsDataArray.map((x, index) => (
              <circle
                className="donut-segment"
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="#737DFE"
                strokeWidth="3"
                strokeDasharray={x.strokeDasharray}
                strokeDashoffset={x.strokeDashoffset}
                key={`segment-${index}`}
              ></circle>
            ))}
          </svg>
          <svg x="0" y="0" width="100%" height="100%" className="chart-text">
            {longLines}
            {shortLines}
            {labels}
          </svg>
          {outerLabels}
          <rect
            x="50"
            y="50"
            width="200"
            height="200"
            style={{ fill: "transparent", stroke: "black", strokeWidth: 0 }}
          />
          <line
            x1="50"
            y1="50"
            x2="250"
            y2="250"
            style={{ stroke: "darkgrey", strokeDasharray: "4 4" }}
          />
          <line
            x1="250"
            y1="50"
            x2="50"
            y2="250"
            style={{ stroke: "darkgrey", strokeDasharray: "4 4" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomDoughnut;
