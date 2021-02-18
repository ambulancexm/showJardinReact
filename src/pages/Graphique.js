import React from 'react';
import {Chart} from 'react-charts'



function Graphique() {

    const data = [
        {
            // individual series
            label: 'Purchases',
            // datum array
            data: [
                
              // individual datum
              { primary: 1, secondary: 14 },
              { primary: 2, secondary: 19 },
              { primary: 3, secondary: 10 },
              { primary: 4, secondary: 14 },
              { primary: 5, secondary: -10 },
              { primary: 6, secondary: 10 },
              { primary: 7, secondary: 14 },
              { primary: 8, secondary: 19 },
              { primary: 9, secondary: 10 },
          ],
        },
    ]
              

            

  const axes = React.useMemo(

    () =>[
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [])
            return (
                
                
                <div style={{
                    height: '400px',
                    width: '400px',
                    padding: '20px',
                }}>
           

        <Chart data={data} axes={axes} />
      </div>
 
 )
 
}
export default Graphique;