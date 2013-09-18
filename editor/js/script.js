
			function dobCol() 
			{
				var bCol = prompt('Enter highlight color', 'Color code or name here');
				if(bCol != null)
					document.execCommand('backcolor', false, bCol); 
			}
			
			function dofCol() 
			{
				var fCol = prompt('Enter font color', 'Color code or name here');
				if(fCol != null)
					document.execCommand('forecolor', false, fCol); 
			}
