"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Brown color palette
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#8B4513" }, // SaddleBrown
  { browser: "safari", visitors: 200, fill: "#A0522D" }, // Sienna
  { browser: "firefox", visitors: 287, fill: "#CD853F" }, // Peru
  { browser: "edge", visitors: 173, fill: "#D2691E" }, // Chocolate
  { browser: "other", visitors: 190, fill: "#DEB887" }, // BurlyWood
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#8B4513", // SaddleBrown
  },
  safari: {
    label: "Safari",
    color: "#A0522D", // Sienna
  },
  firefox: {
    label: "Firefox",
    color: "#CD853F", // Peru
  },
  edge: {
    label: "Edge",
    color: "#D2691E", // Chocolate
  },
  other: {
    label: "Other",
    color: "#DEB887", // BurlyWood
  },
}

export default function Component() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])
  
  return (
    <Card className="flex flex-col w-full" style={{ backgroundColor: "#F5F5DC", borderColor: "#8B4513" }}>
      <CardHeader className="items-center pb-0">
        <CardTitle style={{ color: "#8B4513" }}>Pie Chart - Donut with Text</CardTitle>
        <CardDescription style={{ color: "#A0522D" }}>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          style={{ fill: "#8B4513", fontSize: "1.875rem", fontWeight: "bold" }}
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          style={{ fill: "#A0522D" }}
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none" style={{ color: "#8B4513" }}>
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none" style={{ color: "#A0522D" }}>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}