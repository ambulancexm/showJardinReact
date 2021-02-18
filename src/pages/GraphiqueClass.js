import React, { Component } from 'react';
import {Chart} from 'react-charts'
import chartChart from '../init/initchart';

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
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
          ],
          
    }

    render() {
        
        return (
            <div style={{
                height: '400px',
                width: '400px',
                padding: '20px',
            }}>
       

    <Chart data={this.state.data} axes={this.state.axes} />
  </div>
        );
    }
}

export default GraphiqueClass;
