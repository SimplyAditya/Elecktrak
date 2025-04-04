
import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";

export default function Chart() {
  const chartDomRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!chartDomRef.current || rootRef.current) return;

    const root = am5.Root.new(chartDomRef.current);
    rootRef.current = root;

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        layout: root.verticalLayout
      })
    );

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 200,
      minorGridEnabled: true
    });
    xRenderer.grid.template.setAll({
      strokeOpacity: 0.1
    });
    // if (xRenderer.minorGrid) {
    //   xRenderer.minorGrid.template.setAll({
    //     visible: true,
    //     strokeOpacity: 0.2
    //   });
    // }

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        // gridIntervals: [
        //   { timeUnit: "minute", count: 1 },
        //   { timeUnit: "hour", count: 1 }
        // ],
        renderer: xRenderer
      })
    );
    xAxis.get("dateFormats")["day"] = "MM/dd";
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomX"
    }));
    cursor.lineY.set("visible", false);
    const yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 200,
      minorGridEnabled: true
    });
    yRenderer.grid.template.setAll({
      strokeOpacity: 0.1
    });
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer
      })
    );

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Random Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date"
      })
    );

    const data = [];
    const startDate = new Date(2025, 0, 1);
    for (let i = 0; i < 1000; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(currentDate.getDate() + i);
      data.push({
        date: currentDate.getTime(),
        value: Math.round(Math.random() * 100)
      });
    }
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    // return () => {
    //   root.dispose();
    //   rootRef.current = null;
    // };
  }, []);

  return (
    <div
      ref={chartDomRef}
      style={{ width: "100%", height: "400px" }}
    />
  );
}
