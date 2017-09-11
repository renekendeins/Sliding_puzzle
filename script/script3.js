$(document).ready(function(){
	loadGame();
});
function loadGame(){
	selecLista();
}

function reload(){
	location.reload();
}

function loadBackgrounds(){
	var i = 0;
	for(i=0;i<66;i++){
		if($("#"+i).val() == ''){
			$("#"+i).css('background-color', 'white');
		}else{
			$("#"+i).css('background-color', '#c5c5c5');
		}
	}
}

function selecLista() {
    var zoo=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];
    var lote=new Array; 
    var x;
	for(var k=1;k<81;k++){   
        x=parseInt(Math.random()*zoo.length);
		if(k>9 && k<20){
			while(lote.indexOf(zoo[x])!=-1){
            	x=parseInt(Math.random()*zoo.length);
        	}
        	lote[k]=zoo[x];
			$("#"+k).val(lote[k]);
		}else if(k>29 && k<40){
			while(lote.indexOf(zoo[x])!=-1){
            	x=parseInt(Math.random()*zoo.length);
        	}
        	lote[k]=zoo[x];
			$("#"+k).val(lote[k]);
		}if(k>49 && k<60){
			while(lote.indexOf(zoo[x])!=-1){
            	x=parseInt(Math.random()*zoo.length);
        	}
        	lote[k]=zoo[x];
			$("#"+k).val(lote[k]);
		}
		if(k>69 && k<80){
			while(lote.indexOf(zoo[x])!=-1){
            	x=parseInt(Math.random()*zoo.length);
        	}
        	lote[k]=zoo[x];
			$("#"+k).val(lote[k]);
		}else{}
       
	}
    removeZero();
    loadBackgrounds();
};

function removeZero(){
	for(var k=1;k<81;k++){   
        if(k>10 && k<21){
			if($("#"+k).val() == 0){
				$("#"+k).val('');
			}
		}else if(k>30 && k<41){
			if($("#"+k).val() == 0){
				$("#"+k).val('');
			}
		}else if(k>50 && k<61){
			if($("#"+k).val() == 0){
				$("#"+k).val('');
			}
		}
		else if(k>70 && k<81){
			if($("#"+k).val() == 0){
				$("#"+k).val('');
			}
		}else{}
	}
}

var counter = 0;

function cell(cellThatIsEmpty, valueToInputIntoNewCell, removeValueFromTheCell){
	$("#"+cellThatIsEmpty).val(valueToInputIntoNewCell);
	$("#"+removeValueFromTheCell).val('');
	counter++;
	$("#movements").text('');
	$("#movements").text(counter);
	loadBackgrounds();
}



function checkSiblings(currentPosition){
	var split = currentPosition.split('');
	var value = $("#"+currentPosition).val();
	var num1 = parseInt(split[0]);
	var num2 = parseInt(split[1]);
	var aux1 = num1;
	var aux2 = num2;
	var ides = [((aux1-2) + '' + (aux2)),((aux1) + '' + (aux2-1)),((aux1) + '' + (aux2+1)),((aux1+2) + '' + (aux2)) ];
	var x = 0;
	for(x+0;x<9;x++){
		var newIde = ides[x];
		if($("#"+newIde).val() == ''){
			cell(ides[x],value,currentPosition);
		}
	}
}

var click = 0;
function startClock(){
	if(click == 0){
		click++;
		var start = new Date;
		setInterval(function() {
		    $('#clock').text(parseInt((new Date - start) / 1000 ));
		}, 1000);	
	}

}






