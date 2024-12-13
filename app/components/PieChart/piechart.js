import React, { PureComponent } from 'react';
import { ResponsivePie } from '@nivo/pie'

export default function CustomPieChart ({correct}) {

    let data = [
        {
          "id": "Correct ",
          "label": "Correct Answers",
          "value": correct,
          "color": "#4173EF"
        },
        {
            "id": "Wrong",
            "value": 15-correct,
            "color": "#EAF1FD"
          },
      ] 

    // Custom layer component to render text in the center
    const CenterText = ({ centerX, centerY }) => {
        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    fill: '#13136E'
                }}
            >
                🎯
            </text>
        )
    }

    return(
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={0}
        innerRadius={0.5}
        padAngle={0.7}
        colors={{datum:'data.color'}}
        activeOuterRadiusOffset={8}
        layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenterText]}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}

        />
    )
}
