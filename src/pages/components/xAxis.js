function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;
    console.log(width);
    if (xScale) {

        const isLinearScale = typeof xScale.domain()[0] === 'number';

        if (isLinearScale && typeof xScale.ticks === 'function') {
            const ticks = xScale.ticks();

            return (
                <g>
                    <line x1={0} y1={height} x2={width} y2={height} stroke={'black'} strokeWidth={1} />

                    {ticks.map(tickValue => (
                        <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height})`}>
                            <line y2={10} stroke={'black'} />
                            <text y={18} style={{ textAnchor: 'middle', fontSize: '10px' }}>
                                {tickValue}
                            </text>
                        </g>
                    ))}

                    <text style={{ textAnchor: 'middle', fontSize: '15px' }} transform={`translate(460, 350)`}>
                        {axisLabel}
                    </text>
                </g>
            );
        } else {
            const tickValues = xScale.domain();

            return (
                <g>
                    <line x1={0} y1={height} x2={width} y2={height} stroke={'black'} strokeWidth={1} />
                    {tickValues.map((tickValue, index) => (
                        <g key={index} transform={`translate(${xScale(tickValue) + xScale.bandwidth()}, ${height})`}>
                            <line y2={5} stroke={'black'} />
                            <text transform={`rotate(60)`} y={18} style={{ textAnchor: 'left', fontSize: '10px' }}>
                                {tickValue}
                            </text>
                        </g>
                    ))}
                </g>
            );

        }
    } else {
        return <g></g>;
    }
}

export default XAxis;
