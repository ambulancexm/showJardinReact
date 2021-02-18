import React, { Component } from 'react';
import {Chart} from 'react-charts'
import chartChart from '../init/initchart';
import initialTemp from '../init/initialTemp';

class GraphiqueClass extends Component {

    state = {
        data : [
            {
                // individual series
                label: 'Purchases',
                // datum array
                data: chartChart,
            },
        ],
        axes : [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { type: 'linear', position: 'left' },
          ],

        series : {
            type: 'area'
          },
          
    }

    render() {
        
        return (
            <div style={{
                height: '400px',
                width: '1400px',
                padding: '20px',
            }}>
       

    <Chart data={this.state.data} series={this.state.series}  axes={this.state.axes} />
  </div>
        );
    }
}

export default GraphiqueClass;
