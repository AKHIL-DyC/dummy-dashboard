"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

// Modified for brown theme
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#8B4513", // SaddleBrown
  },
  mobile: {
    label: "Mobile",
    color: "#D2691E", // Chocolate
  },
  label: {
    color: "#FFFFFF", // White
  },
} 

export default function Component() {
  return (
    <Card className="flex flex-col w-full " style={{ backgroundColor: "#F5F5DC", borderColor: "#8B4513" }}>
      <CardHeader>
        <CardTitle style={{ color: "#8B4513" }}>Bar Chart - Custom Label</CardTitle>
        <CardDescription style={{ color: "#A0522D" }}>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} stroke="#CD853F" />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="#8B4513" // SaddleBrown instead of var(--color-desktop)
              radius={4}
            >
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                fill="#FFFFFF" // White instead of className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                fill="#8B4513" // SaddleBrown instead of className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none" style={{ color: "#8B4513" }}>
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none" style={{ color: "#A0522D" }}>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}