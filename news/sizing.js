function resize(id)
{
}
function enlarge(id)
{
	var list=document.getElementsByClassName("col-lg-4");
	for(var x=0;x<list.length;x++)
	{
		list[x].className='col-lg-2 col-md-3 col-sm-4';
	}
	document.getElementById(id).className="col-lg-4 col-md-6 col-sm-8" ;
	
}
