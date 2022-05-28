window.onload = function() {
    document.getElementById('gra-1254').getElementsByTagName('a')[0].onclick = function() {
     var b,i;
     var images = '';
     var karty = [];
   
     var talia = [
       '9ka','9ki','9pi','9tr',
       '10ka','10ki','10pi','10tr',
       '11ka','11ki','11pi','11tr',
       '12ka','12ki','12pi','12tr',
       '13ka','13ki','13pi','13tr',
       '14ka','14ki','14pi','14tr'
     ];
   
     b = talia.length;
   
     for(i=0; i<b; i++) {
       karty[i]=talia.splice(Math.floor(Math.random() * talia.length),1)[0];	
       images += '<img src="karty/' + karty[i] + '.png">';
     }
     document.getElementById('cards').innerHTML = images;
     return false;
    }
   }