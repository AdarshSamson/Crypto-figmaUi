import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

function Chart({ sparklineData, iconColor }) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={60}>
        <LineChart data={sparklineData}>
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="3"
                floodColor={iconColor}
                floodOpacity="0.6"
              />
            </filter>
          </defs>

          <Line
            type="monotone"
            dataKey="pv"
            stroke={iconColor}
            strokeWidth={2}
            dot={false}
            filter="url(#shadow)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
