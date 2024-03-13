import Points from './points';
import YAxis from './yAxis';
import XAxis from './xAxis';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, handleMouseEnter, handleMouseOut, setTooltipX, setTooltipY, selectedPoint, setSelectedPoint} = props;

    const transform = `translate(${offsetX}, ${offsetY})`;

    
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return (
        <g transform={transform}>
            <Points data={data} xScale={xScale} yScale={yScale} height={height} width={width} selectedStation={selectedStation} setSelectedStation={setSelectedStation} handleMouseEnter={handleMouseEnter} handleMouseOut={handleMouseOut} setTooltipX={setTooltipX} setTooltipY={setTooltipY} selectedPoint={selectedPoint} setSelectedPoint={setSelectedPoint}/>
            <YAxis yScale={yScale} height={height} width={width} axisLabel={"Trip duration end in"} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
        </g>
    );
}

export default ScatterPlot