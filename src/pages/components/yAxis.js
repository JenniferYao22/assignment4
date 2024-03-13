function YAxis(props) {
    const { yScale, height, axisLabel } = props;

    if (yScale) {
        const ticks = yScale.ticks();
        return (
            <g>
                <line y2={height} stroke={'black'} />

                {ticks.map(tickValue => (
                    <g key={tickValue} transform={`translate(-10, ${yScale(tickValue)})`}>
                        <line x2={10} stroke={'black'} />
                        <text style={{ textAnchor: 'end', fontSize: '10px' }}>
                            {tickValue}
                        </text>
                    </g>
                ))}

                <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0)rotate(-90)`}>
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default YAxis;
