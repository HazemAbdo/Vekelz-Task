import { FunctionComponent } from "react";

interface CirclePercentageProps {
  percentage: number;
  color: string;
  kilometers?: number;
}

const CirclePercentage: FunctionComponent<CirclePercentageProps> = ({
  percentage,
  color,
  kilometers,
}) => {
  return (
    <svg
      viewBox="0 0 36 36"
      style={{
        height: "112px",
        width: "112px",
      }}
    >
      <path
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={`${percentage} ,100`}
      />
      <path
        transform={`rotate(${percentage * 3.6} 18 18)`}
        d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#E5E5E5"
        strokeWidth="3"
        strokeDasharray={`${100 - percentage} ,100`}
      />
      <text x="18" y="20.35" textAnchor="middle" fill={color} fontSize="8">
        {kilometers ? `${kilometers}K` : `${percentage}%`}
      </text>
    </svg>
  );
};

export default CirclePercentage;
