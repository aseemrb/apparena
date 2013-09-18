function play()
{
	if(document.getElementById("word").value)
		wordsc = document.getElementById("word").value;
	if(document.getElementById("res").value)
		resolutionx = document.getElementById("res").value;
	if(document.getElementById("red").value)
		redc = parseInt(document.getElementById("red").value);
	else
	{
		var st="";
		st = st+redc;
		document.getElementById("red").value = st;
	}
	if(document.getElementById("green").value)
		greenc = parseInt(document.getElementById("green").value);
	else
	{
		var st="";
		st = st+greenc;
		document.getElementById("green").value = st;
	}
	if(document.getElementById("blue").value)
		bluec = parseInt(document.getElementById("blue").value);
	else
	{
		var st="";
		st = st+bluec;
		document.getElementById("blue").value = st;
	}
	to_run();
}