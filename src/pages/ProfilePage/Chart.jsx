import * as echarts from "echarts";

import { useEffect, useRef } from "react";

const EChartsComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: "axis",
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Rainfall",
          type: "bar",
          data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        },
        {
          name: "Evaporation",
          type: "bar",
          data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        },
      ],
    };

    chart.setOption(option);

    return () => {
      // Hủy và giải phóng bộ nhớ khi component bị unmount
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "955px", height: "400px" }} />;
};
export default EChartsComponent;
