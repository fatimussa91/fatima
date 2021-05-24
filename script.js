     
		

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

		
	   
	/*    var pr_n = document.getElementById('btn').onclick = function(){

	    	
	    	document.getElementById('result5').innerHTML= isPrim();
				    	

	    }

	    

	    function isPrim(){
	    	var nr_prn = document.getElementById('nr').value;
	    	var a = [2,3,5,7];
	    	var output = [];

	    	 for(var i in a){
		            console.log(a[i]);
		        }
		        

	    		for (var i = 2; i <= nr_prn; i++) {
	    			
	    			 if (i%2==0 ||i%3==0 ||i%5==0||i%7==0){
				        continue;
				    }


	    		 console.log(a[i]);
	    		
	    		}

	    		output = a[i];

	    		return output;
	    }
	    
	 */

	/*  function isPrim(){
	    	var nr_prn = document.getElementById('nr').value;
	    	
	    	var output = [];

	    	 
		        

	    		for (var i = 1; i <= nr_prn; i++) {

	    			switch(i){

	    				case 2:
	    				case 3:
	    				case 5:
	    				case 7:
	    					return true;
	    				break;
	    				case 1 :
	    				case (i%2==0):
	    				case (i%3==0):
	    				case (i%5==0):
	    				case (i%7==0):
	    					return false;
	    				break;
	    				console.log(i);
	    			}
	    			

	    		 
	    		
	    		}

	    		return output;
	    }*/


	    function isprime(){
	    	var	num = document.getElementById("nr").value;

	   		if(num == '' || num < 1) {
				document.getElementById("result").innerHTML = "Bitte geben Sie eine gültige Zahl an!";
				return;
				
			}
			else
			{

				var primArray = [];

	    	for(var n = 1; n <= num; n++){

			var isPrimNum =checkIfPrime(n);

	    		if(isPrimNum){
	    			primArray.push(isPrimNum);
	    		}

	    		
	    		
	    			document.getElementById("result").innerHTML ="Die Primzahlen zwichen 1 und " + num + " sind : &#40; " + primArray + " &#41;";
	    			
	    
	    	
	    	}
	    		}	
	    }

	   function checkIfPrime(n) {
			var num = n;
			var i;
			var flag = true;

				if (num == 1) {

					flag = false;

				} else{
						for(i = 2; i < num-1; i++) {
							if (num % i == 0) {
							flag = false;
							break;
							}
						 }
					}

				if(flag == true) {
					document.getElementById("result").innerHTML = "Die Zahl: " + num + " ist eine Primzahl!";
					return num;
				} else {
					flag = false;
				}
			
		}
