import { useState } from 'react';

function Points(props) {
    const { data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY, selectedPoint, setSelectedPoint} = props;

    const handleMouseEnter = (station) => {
        console.log('Mouse Enter:', station);
        setSelectedStation(station);
        setTooltipX(event.pageX);
        setTooltipY(event.pageY);
        setSelectedPoint(data.find((d) => d.station === station));
        
    };
    
    const handleMouseOut = () => {
        console.log('Mouse Out');
        setSelectedStation(null);
        setTooltipX(null);
        setTooltipY(null);
        setSelectedPoint(null);
    };

    const getColor = (station) => (station === selectedStation ? 'red' : 'steelblue');

    const getRadius = (station) => (station === selectedStation ? 10 : 5);

    

    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;

    if (data) {
        
        return <g>
            
            {data.map(d => {
                return <circle
                    key={d.index}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(d.station)}
                    fill={getColor(d.station)}
                    stroke={'black'}
                    onMouseEnter={(event) => handleMouseEnter(d.station, event)}
                    onMouseOut={handleMouseOut}
                    
                />
            })}
            {selectedStation && selectedPoint && (
                <g>
                <rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    fill="yellow"
                    opacity="0.5"
                    
                />
                <circle
                    cx={xScale(selectedPoint.tripdurationS)}
                    cy={yScale(selectedPoint.tripdurationE)}
                    r={getRadius(selectedPoint.station)} 
                    fill="red"
                    stroke="black"
                    onMouseEnter={(event) => handleMouseEnter(selectedPoint.station, event)}
                    onMouseOut={handleMouseOut}
                />
                </g>
            )}
           
        </g>
    } else {
        return <g></g>
    }
}

export default Points