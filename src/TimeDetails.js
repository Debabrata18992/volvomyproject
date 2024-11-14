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
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {timeLogs.map((log,index)=>
                    (
                        <tr>
                            <td>{log.title}</td>
                            <td>{log.time}</td>
                             <td>{log.dateVal}</td> 
                        </tr>
                    )
                    )}
                </tbody>
               </table>
            
            </>
        )
    }
}