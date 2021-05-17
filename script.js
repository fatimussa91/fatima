     
		

		var add = document.getElementById('add').onclick = function(){

		       var wert1 = document.getElementById('wert1').value;
			   var wert2 = document.getElementById('wert2').value;  

		    	var result = parseFloat(wert1) + parseFloat(wert2);

		    	document.getElementById('result1').value = result;     
		}

	var sub =  document.getElementById('sub').onclick = function(){

		       var wert1 = document.getElementById('wert3').value;
			   var wert2 = document.getElementById('wert4').value;  

		    	var result = parseFloat(wert1) - parseFloat(wert2);

		    	document.getElementById('result2').value = result;    
		}

	var mult =  document.getElementById('mult').onclick = function(){

		       var wert1 = document.getElementById('wert5').value;
			   var wert2 = document.getElementById('wert6').value;  

		    	var result = parseFloat(wert1) * parseFloat(wert2);

		    	document.getElementById('result3').value = result;    
		}

	var div =   document.getElementById('div').onclick = function(){

		       var wert1 = document.getElementById('wert7').value;
			   var wert2 = document.getElementById('wert8').value;  

		    	var result = parseFloat(wert1) / parseFloat(wert2);

		    	document.getElementById('result4').value = result;    
		}

		
    