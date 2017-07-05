	var userRuns;
	var computerRuns;
	var yourScore=0;
	var computerScore=0;
	var x=true;
	var y=0;

function setUserRuns(runs)
{
	userRuns=runs;
	

	
	if(y!=1){
	calculateScore();
	document.getElementById("userTotalScore").innerHTML=yourScore;}
	
	else{
		if(computerScore<yourScore){

			calculateCPUScore();}
		else{
			alert("Comp are win")
		}
	}
}


function calculateScore()
{
	var computerchoice=Math.random()
	if((computerchoice>=0)&&(computerchoice<0.15))
	{
		computerRuns=0;
	}
	else if((computerchoice>=0.15)&&(computerchoice<0.30))
	{
		computerRuns=1;
	}
	else if((computerchoice>=0.30)&&(computerchoice<0.45))
	{
		computerRuns=2;
	}
	else if((computerchoice>=0.45)&&(computerchoice<0.55))
	{
		computerRuns=3;
	}
	else if((computerchoice>=0.55)&&(computerchoice<0.70))
	{
		computerRuns=4;
	}
	else if((computerchoice>=0.70)&&(computerchoice<0.85))
	{
		computerRuns=5;
	}
	else
	{
		computerRuns=6;
	}

	/*if(userRuns==computerRuns)
	{
		console.log("Run out "+ userRuns+computerRuns);
	}
	else
	{
		console.log("Keep playing "+ userRuns+computerRuns);
	}*/
	document.getElementById("compScore").innerHTML=computerRuns;
	document.getElementById("userScore").innerHTML=userRuns;
	
	
	

	 var x=true;

	/*if(x==true)

	{*/

			if(userRuns!=computerRuns)
			{
				/*if(userRuns==0)
				{
					yourScore=yourScore+computerRuns;
				}*/
				/*else
				{*/
					yourScore=yourScore+userRuns;
				/*}*/
			/*document.getElementById("userTotalScore").innerHTML=yourScore;*/
			}
			
			else
			{
				y=1;
				alert("You are out");
				
				
			}
	/*}
	else if(x==false)
	{
			if(computerRuns!=userRuns)
			{
				if(computerRuns==0)
				{
					computerScore=computerScore+userRuns;
				}
	 			else
				{
					computerScore=computerScore+computerRuns;
				}
				document.getElementById("compTotalScore").innerHTML=computerScore;
			}
			else
			{

				alert("Computer is out")
			}
	
	
}*/
}
		
function calculateCPUScore()
{
	var computerchoice=Math.random()
	if((computerchoice>=0)&&(computerchoice<0.15))
	{
		computerRuns=0;
	}
	else if((computerchoice>=0.15)&&(computerchoice<0.30))
	{
		computerRuns=1;
	}
	else if((computerchoice>=0.30)&&(computerchoice<0.45))
	{
		computerRuns=2;
	}
	else if((computerchoice>=0.45)&&(computerchoice<0.55))
	{
		computerRuns=3;
	}
	else if((computerchoice>=0.55)&&(computerchoice<0.70))
	{
		computerRuns=4;
	}
	else if((computerchoice>=0.70)&&(computerchoice<0.85))
	{
		computerRuns=5;
	}
	else
	{
		computerRuns=6;
	}

	/*if(userRuns==computerRuns)
	{
		console.log("Run out "+ userRuns+computerRuns);
	}
	else
	{
		console.log("Keep playing "+ userRuns+computerRuns);
	}*/
	document.getElementById("compScore").innerHTML=computerRuns;
	document.getElementById("userScore").innerHTML=userRuns;
	
	
	

	 var x=true;

	/*if(x==true)

	{*/

			/*if(userRuns!=computerRuns)
			{*/
				/*if(userRuns==0)
				{
					yourScore=yourScore+computerRuns;
				}*/
				/*else
				{*/
					/*yourScore=yourScore+userRuns;
				}*/
			/*document.getElementById("userTotalScore").innerHTML=yourScore;*/
			/*}
			
			else
			{
				yourScore=300;
				alert("You are out");
				
				x=false;
			}
	}*/
		
			if(computerRuns!=userRuns)
			{
				if(computerRuns==0)
				{
					computerScore=computerScore+userRuns;
				}
	 			else
				{
					computerScore=computerScore+computerRuns;
				}
				document.getElementById("compTotalScore").innerHTML=computerScore;
			}
			else
			{

				alert("Computer is out");
				alert("You are win");
			}
	
	

}
		