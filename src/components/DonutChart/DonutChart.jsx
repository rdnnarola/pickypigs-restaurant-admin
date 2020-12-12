import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import "./DonutChart.scss";


 class CustomTooltip extends React.Component{
 
    render() {
      const { active } = this.props;
  
      if (active) {
        const { payload, label } = this.props;
        return (
          <div className="bg-white p-2 rounded my_shadow">
            <p className="mb-0 brandon-Medium">{`${payload[0].name} ${payload[0].value}%`}</p>
          </div>
        );
      }
  
      return null;
    }
  };

const DonutChart = (props) => {
    // const data = [{name: 'Group A', value: 10}, {name: 'Group B', value: 15},
    //               {name: 'Group C', value: 25}, {name: 'Group D', value: 50}];
    // const COLORS = ['#d1b2f5', '#91eddb', '#e376b8', '#f8e3e9'];
    const RADIAN = Math.PI / 180;

    return (
        <>
            <div className="chart-main">
                <div className="position-relative">
                    <h5 className="chart-datalabel">
                        <span className="brandon-Bold">120</span>
                        <br />
                        <small>allergies</small>
                    </h5>
                    <PieChart width={240} height={240}>
                        <Pie
                            dataKey="value"
                            data={props.data}
                            innerRadius={60}
                            outerRadius={120}
                            fill="#8884d8"
                            paddingAngle={0}
                        >
                            {
                                props.data && props.data.map((entry, index) => <Cell key={index} fill={props.COLORS && props.COLORS[index % props.COLORS.length]} />)
                            }

                        </Pie>
                        <Tooltip content={<CustomTooltip/>}/>
                    </PieChart>
                </div>
                <div className="chartdata-txt">
                    <div className="d-flex justify-content-between ">
                        <p className="chartdata-count">Nuts</p>  <p className="chartdata-count">87 %</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <p className="chartdata-count">Milk</p> <p className="chartdata-count">47 %</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <p className="chartdata-count">Celery</p> <p className="chartdata-count">10 %</p>
                    </div>
                    <button className="chartview-btn">View All</button>
                </div>
            </div>
        </>
    )
}

export default DonutChart;