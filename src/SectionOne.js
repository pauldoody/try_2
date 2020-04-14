import React, { useState, useEffect } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

export default function SectionOne(props) {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);
	
	const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
	
	//color changing stuff
	let [selectionColor , changeSelectionColor] = useState("FFFFFF");
	const changeSelection = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeSelectionColor("D2FCDC");
    }
	
	let [comfortColor , changeComfortColor] = useState("FFFFFF");
	const changeComfort = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeComfortColor("D2FCDC");
    }
	let [crowdedColor , changeCrowdedColor] = useState("FFFFFF");
	const changeCrowded = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeCrowdedColor("D2FCDC");
    }
	let [volumeColor , changeVolumeColor] = useState("FFFFFF");
	const changeVolume = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeVolumeColor("D2FCDC");
    }
	let [foodColor , changeFoodColor] = useState("FFFFFF");
	const changeFood = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeFoodColor("D2FCDC");
    }
	let [overallColor , changeOverallColor] = useState("FFFFFF");
	const changeOverall = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeOverallColor("D2FCDC");
    }
	
	let [otherColor , changeOtherColor] = useState("FFFFFF");
	const changeOther = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeOtherColor("D2FCDC");
    }
	let [nameColor , changeNameColor] = useState("FFFFFF");
	const changeName = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeNameColor("D2FCDC");
    }
	let [emailColor , changeEmailColor] = useState("FFFFFF");
	const changeEmail = function (changeEvent) {
		console.log(changeEvent.currentTarget.getAttribute('data-something'));
        changeEmailColor("D2FCDC");
    }
	
	//script
	const checker = function()  {
		return false;
	}
	
	/*https://pauldoodyparticipation.herokuapp.com/assignment_6*/
	/*https://cs.gmu.edu:8443/offutt/servlet/formHandler*/
return (
        <React.Fragment>
		
<table border = "10" align = "center">
<tr><td>
<p >
GMU Campus Seating Reviews
</p>
</td></tr>
</table>
		
<table border = "1" align = "center">
<tr><td>
<p class="general">
   There's lots of seating on campus, but where's the best spot? What makes it so great?
Answer the questions below to rate your favorite (and least favorite) locations. With your
feedback, we'll be able to improve all of our seating spaces to help everyone study, eat, and
simply relax between classes.
</p>
</td></tr>
</table>
<b></b>
	
<form method="post" action="https://pauldoodyparticipation.herokuapp.com/assignment_6" name="my_form" >
	
<table border = "1" align = "center" id = "radio_table">

<tr><td> Location to Rate: </td>
<td bgcolor={selectionColor} align="left">
<input type = "radio" name = "seating-location" id="exploratory"  value="exploratory" required onChange={changeSelection}></input>
<label for="exploratory">Exploratory Hall</label>
<br></br>
<input type = "radio" name = "seating-location" id="fountains" value="fountains" onChange={changeSelection}></input>
<label for="fountains">Fountains by the Mason Statue</label>
<br></br>
<input type = "radio" name = "seating-location" id="fenwick" value="fenwick" onChange={changeSelection}></input>
<label for="fenwick">Fenwick Library</label>
<br></br>
<input type = "radio" name = "seating-location" id="hub" value="hub" onChange={changeSelection}></input>
<label for="hub">The Hub</label>
<br></br>
<input type = "radio" name = "seating-location" id="jc1" value="jc1" onChange={changeSelection}></input>
<label for="jc1">Johnson Center Dining Area</label>
<br></br>
<input type = "radio" name = "seating-location" id="jc_upper" value="jc_upper" onChange={changeSelection}></input>
<label for="jc_upper">Johnson Center Upper Levels</label>
<br></br>
<input type = "radio" name = "seating-location" id="sub" value="sub" onChange={changeSelection}></input>
<label for="sub">Student Union Building</label>
<br></br>
<input type = "radio" name = "seating-location" id="other" value="other" onChange={changeSelection}></input>
<label for="other">Another Location</label>
<br></br>
</td>
</tr>



</table>
	
	
	
<table border = "1"align="center">
<tr><td>Rate the Comfort of Seating: </td>
<td bgcolor={comfortColor}> 
Very Uncomfortable
<input type = "radio" name = "comfort_rating" id="1" value="1" required onChange={changeComfort}></input>
<input type = "radio" name = "comfort_rating" id="2" value="2" onChange={changeComfort}></input>
<input type = "radio" name = "comfort_rating" id="3" value="3" onChange={changeComfort}></input>
<input type = "radio" name = "comfort_rating" id="4" value="4" onChange={changeComfort}></input>
<input type = "radio" name = "comfort_rating" id="5" value="5" onChange={changeComfort}></input>
Very Comfortable
</td></tr>

<tr><td>Rate how Crowded: </td>
<td bgcolor={crowdedColor}> 
Empty
<input type = "radio" name = "crowded_rating" id="1" value="1" required onChange={changeCrowded}></input>
<input type = "radio" name = "crowded_rating" id="2" value="2" onChange={changeCrowded}></input>
<input type = "radio" name = "crowded_rating" id="3" value="3" onChange={changeCrowded}></input>
<input type = "radio" name = "crowded_rating" id="4" value="4" onChange={changeCrowded}></input>
<input type = "radio" name = "crowded_rating" id="5" value="5" onChange={changeCrowded}></input>
Very Crowded
</td></tr>

<tr><td>Rate the Volume: </td>
<td bgcolor={volumeColor}> 
Silent
<input type = "radio" name = "volume_rating" id="1" value="1" required onChange={changeVolume}></input>
<input type = "radio" name = "volume_rating" id="2" value="2" onChange={changeVolume}></input>
<input type = "radio" name = "volume_rating" id="3" value="3" onChange={changeVolume}></input>
<input type = "radio" name = "volume_rating" id="4" value="4" onChange={changeVolume}></input>
<input type = "radio" name = "volume_rating" id="5" value="5" onChange={changeVolume}></input>
Ear Shattering
</td></tr>

<tr><td>How many food options are nearby?: </td>
<td bgcolor={foodColor}> 
No Food
<input type = "radio" name = "food_rating" id="1" value="1" required onChange={changeFood}></input>
<input type = "radio" name = "food_rating" id="2" value="2" onChange={changeFood}></input>
<input type = "radio" name = "food_rating" id="3" value="3" onChange={changeFood}></input>
<input type = "radio" name = "food_rating" id="4" value="4" onChange={changeFood}></input>
<input type = "radio" name = "food_rating" id="5" value="5" onChange={changeFood}></input>
Food Everywhere
</td></tr>

<tr><td>Your Overall Rating of the Location: </td>
<td bgcolor={overallColor}> 
Poor
<input type = "radio" name = "overall_rating" id="1" value="1" required onChange={changeOverall}></input>
<input type = "radio" name = "overall_rating" id="2" value="2" onChange={changeOverall}></input>
<input type = "radio" name = "overall_rating" id="3" value="3" onChange={changeOverall}></input>
<input type = "radio" name = "overall_rating" id="4" value="4" onChange={changeOverall}></input>
<input type = "radio" name = "overall_rating" id="5" value="5" onChange={changeOverall}></input>
Excellent
</td></tr>


<tr><td>Enter any other thoughts on the location:</td><td bgcolor={otherColor}>
<textarea rows = "5" cols = "44" onChange={changeOther}></textarea></td>
</tr>

<tr><td> Name: </td><td bgcolor={nameColor}> 
<input type = "text" name = "name_field" onChange={changeName}></input> </td> </tr>
<tr><td> GMU Email: </td><td bgcolor={emailColor}> 
<input type = "text" name = "email_field" onChange={changeEmail} ></input> </td> </tr>


</table>
<input type="submit" align="center" name="submission" value="Submit"  ></input>
</form>
		
        </React.Fragment>
    );
	
}
