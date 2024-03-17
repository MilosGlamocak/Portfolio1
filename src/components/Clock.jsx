import React, { useEffect, useState } from "react"

function Clock(props) {

    let [time, setTime] = useState({
        ms: 0,
        s: 0,
        m: 0,
        h: 0
    })

    /*let [stopwatch, setStopwatch] = useState({
        m: 0,
        s: 0,
    })*/
    

    useEffect(() => {
        const changeTimeInterval = setInterval(() => {
            const currentTime = new Date();
            
            setTime({
                ms: currentTime.getMilliseconds(),
                s: currentTime.getSeconds(),
                m: currentTime.getMinutes(),
                h: currentTime.getHours(),
            })
        }, 1);
    
        return () => clearInterval(changeTimeInterval);
    }, []);

    

    /*function handleStartStopwatch() {
        let stopwatchInterval = setInterval(() => {
            setStopwatch({
                m: ++stopwatch.m,
                s: ++stopwatch.s,
            }, 10)
        })
    }*/

    return (
        <div>
            <h1 style={{color: 'black'}}>{time.h}:{time.m}</h1>
            <h2 style={{color: 'black'}}>{time.s}</h2>


            
        <div style={{border: '1px solid black', width: '420px', height: '420px', borderRadius: '50%', display: 'flex',justifyContent: 'center', alignItems: 'center', backgroundColor: 'burlywood', left: '50%', translate: '-50%', position: 'absolute'}}>
                <div style={{border: '3px solid black', width: '400px', height: '400px', borderRadius: '50%', display: 'flex',justifyContent: 'center', backgroundColor: 'white'}}>

                    <div className="numbers" >
                        <h1>12</h1>
                        <h1 style={{position: 'absolute', top: '43%', right: '8%',}}>3</h1>
                        <h1 style={{position: 'absolute', bottom: '5%', right: '48%'}}>6</h1>
                        <h1 style={{position: 'absolute', top: '43%', left: '8%'}}>9</h1>
                    </div>
                    <div style={{width: '1px', height: '150px',
                    position: 'absolute',
                    top: '13%', backgroundColor: 'black', rotate: `${360/60*time.s}deg`, transformOrigin: 'bottom'}}></div>
                    <div style={{width: '5px', height: '140px',
                    position: 'absolute',
                    top: '15.4%', backgroundColor: 'black', rotate: `${360/60*time.m}deg`, transformOrigin: 'bottom'}}></div>
                    <div style={{width: '5px', height: '100px',
                    position: 'absolute',
                    top: '24.8%', backgroundColor: 'black', rotate: `${360/12*time.h}deg`, transformOrigin: 'bottom'}}></div>
            </div>
            </div>
            <button style={{color: 'black'}}>Start stopwatch</button>
            <h2 style={{color: 'black'}}>{props.name}</h2>
        </div>
            
           
            
    )

}

export default Clock