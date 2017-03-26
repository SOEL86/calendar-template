function main()
{
	var date = new Date();
	console.log(date.getDate(),date.getDay(),date.getFullYear());
	drawCells();
	getCells();
}

function createCalendar(date)
{

}

function drawCells(){
	var content = $("#content");
	for(var i=0;i<35;i++)
	{
		content.append("<div class='cell'></div>");
	}
}

function getCells(){
	var cells = [];
	$(".cell").each(function(){
		cells.push($(this));
	});
	console.log(cells);
}