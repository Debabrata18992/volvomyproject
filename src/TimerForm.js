import React from "react";
import TimmerDetails from "./TimeDetails";

export default class TimmerForm extends React.Component
{
   interval;
    constructor(props)
    {
        super(props)
        this.state=
        {
            timerTitle:"",
            timerstart:null,
            timeDiff:null,
            timerValue:0,
            timerRunning:false,
            timerDetails:[]
        }
        this.interval=null;
    }
  
    handleChangeTitle=(e)=>
    {
        this.setState({timerTitle:e.target.value})
    }
    holdtime=(e)=>
    {
        this.setState({timerValue:parseInt(e.target.value)})
    }
    starttime=()=>
    {
       if(!this.state.timerRunning)
       {
         //const starttime=new Date().toLocaleDateString();
         this.setState({timerRunning:true,timerstart:new Date()});
         this.interval=setInterval(() => {
            this.setState((prevstate)=>(
            {
                timerValue:prevstate.timerValue+1
            }));
            
         }, 1000);
       }
    }
    stop=()=>
    {
      if(this.state.timerRunning)
        {
             clearInterval(this.interval);
             const stoptimer=new Date();
            
            const timeDiffsec=Math.round((stoptimer-this.state.timerstart)/1000)
             const timerLog={
                title:this.state.timerTitle,
                time:this.state.timerValue,
                dateVal:new Date().toLocaleString('en-US',{
                    year:'numeric',
                    month:'2-digit',
                    day:'2-digit',
                    hour:'2-digit',
                    minute:'2-digit',
                    second:'2-digit',
                    hour12:false
                }),
                timeDiff:`${timeDiffsec}S`
                
             }

             this.setState((prevstate)=>
            ({
                timerRunning:false,
                timerValue:0,
                timerTitle:'',
                timerstart:'',
                timerDetails:[...prevstate.timerDetails,timerLog]
            }))

            

            
        }
    }
    componentWillUnmount()
    {
        clearInterval(this.interval)
    }
     render()
    {
        const {timerTitle,timerstart,timerValue,timerDetails} =this.state
       return(<>
            
            <div className='cls_timerform'>
            <div className="cls_header">Timer App</div>
                <table>
                    <tr>
                        <td>Timer Title</td>
                        <td>
                            <input type='text' value={timerTitle} onChange={this.handleChangeTitle}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Time Elapse</td>
                        <td>
                          <input type='number' value={timerValue} onChange={this.holdtime} />
                    </td>
                    </tr>
                   
                    <tr>
                        <td></td>
                        <td><tr><td>
                        <button className="btn_details" onClick={this.starttime}>Start</button>
                            
                            </td>
                            <td>
                            <button className="btn_details" onClick={this.stop}>Stop</button></td></tr></td>
                    </tr>

                </table>
                
            </div>
            {timerDetails.length>0 && 
                <div className="cls_showdata">
                    <span className="cls_tlttime">Total Time :{timerDetails.reduce((total,log)=>total+log.time,0)}</span>
                     <TimmerDetails timeLogs={timerDetails}/>
                </div>}
       </>)
    }

}