import React, { useState, useEffect } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

export default function Hooks(props) {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);
	let [skelHeight] = useState(40);
	
	//added
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
	}, []);
	//
	
    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
	
	if(seconds < 2){
	
	//default return
    return (
        <React.Fragment>
            <p>click count: {clicks} , {seconds}</p>
            <button onClick={doSomething} data-something="Default">
                Default</button>
				<p></p>
			<Skeleton variant="rect" width={2000} height={skelHeight} align="justify" />
        </React.Fragment>

    );
	
	}
	else
	{
		return (
        <React.Fragment>
            <p>click count: {clicks} , {seconds}</p>
            <button onClick={doSomething} data-something="Default">
                Default</button>
				<p>LOADED CONTENT</p>
        </React.Fragment>

    );
	}
}
