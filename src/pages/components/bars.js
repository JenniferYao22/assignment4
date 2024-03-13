import { useState } from 'react';

function Bars(props) {
  const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

  const handleMouseEnter = (station) => {
    console.log('Mouse Enter:', station);
    setSelectedStation(station);
  };

  const handleMouseOut = () => {
    console.log('Mouse Out');
    setSelectedStation(null);
  };

  const getColor = (station) => (station === selectedStation ? 'red' : 'steelblue');

  if (data) {
    return (
      <g>
        {data.map((d, index) => (
          <rect
            key={index}
            x={xScale(d.station)}
            y={yScale(d.start)}
            width={xScale.bandwidth()}
            height={height - yScale(d.start)}
            fill={getColor(d.station)}
            stroke={'black'}
            onMouseEnter={() => handleMouseEnter(d.station)}
            onMouseOut={handleMouseOut}
          />
        ))}
      </g>
    );
  } else {
    return <g></g>;
  }
}

export default Bars;
