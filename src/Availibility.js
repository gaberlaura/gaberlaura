import React from 'react';

class Availibility extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tr className="row1">
                        <td>Eastern Time</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                    </tr>
                    <tr className="row2">
                        <td>12-1 pm</td>
                    </tr>
                    <tr className="row3">
                        <td>1-2 pm</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Availibility;