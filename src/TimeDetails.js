import React from "react";

export default class TimmerDetails extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const{timeLogs}=this.props
        return(
            <>
               <table>
                <thead>
                    <tr>
                        <th>Time Title</th>
                        <th>Time Elapse</th>
                        <th>Entry Logged Date</th>
                        <th>Time Diffrence For Timer</th>
                    </tr>
                </thead>
                <tbody>
                    {timeLogs.map((log,index)=>
                    (
                        <tr>
                            <td>{log.title}</td>
                            <td>{log.time}</td>
                             <td>{log.dateVal}</td> 
                             <td>{log.timeDiff}</td>
                        </tr>
                    )
                    )}
                </tbody>
               </table>
            
            </>
        )
    }
}