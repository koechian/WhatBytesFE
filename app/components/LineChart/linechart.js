import { ResponsiveLine } from '@nivo/line'

export default function CustomLineChart({ percentileValue = 90 }) {
    const data = [
        {
            "id": "percentile distribution",
            "color": "#8884d8",
            "data": [
                { "x": 0, "y": 5 },
                { "x": 10, "y": 8 },
                { "x": 20, "y": 15 },
                { "x": 25, "y": 25 },
                { "x": 30, "y": 35 },
                { "x": 35, "y": 45 },
                { "x": 40, "y": 55 },
                { "x": 45, "y": 65 },
                { "x": 50, "y": 100 },
                { "x": 60, "y": 80 },
                { "x": 70, "y": 40 },
                { "x": 80, "y": 20 },
                { "x": 90, "y": 15 },
                { "x": 95, "y": 25 },
                { "x": 100, "y": 10 }
            ]
        }
    ]

    const getYValueForPercentile = (x) => {
        const point = data[0].data.find(point => point.x === x);
        return point ? point.y : null;
    }

    const markers = [
        {
            axis: 'x',
            value: percentileValue,
            lineStyle: {  strokeWidth: 1, strokeDasharray: '3 6' },
            legend: "Your Percentile",
            legendOrientation: 'Horizontal',
            legendPosition: 'top',
        }
    ]

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ 
                type: 'linear',
                min: 0,
                max: 100
            }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 'auto',
                stacked: false,
                reverse: false
            }}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Percentile',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            enablePoints={true}
            pointSize={8}
            pointColor="#8884d8"
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            enableGridX={false}
            enableGridY={false}
            colors={["#8884d8"]}
            lineWidth={3}
            enableArea={false}
            areaOpacity={0.15}
            useMesh={true}
            legends={[]}
            markers={markers}
        />
    )
}