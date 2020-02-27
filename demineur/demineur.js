var nb_col = 10;
var nb_li = 10;
var difficulte = 10;
var grid = jQuery('#grid');
for(var i=0;i<nb_li;i++){

    var line = jQuery('<tr></tr>');
    for(var j=0;j<nb_col;j++){
        var cell = jQuery('<td></td>');
        cell.text(i+':'+j);
        cell.addClass('i'+i);
        cell.addClass('j'+j);
        var aleatoire = getRandomInt(100);
        line.append(cell);



        if(aleatoire<difficulte){
                cell.addClass('indesirable');
                }
    
    
    
    }


    grid.append(line);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  var count = 0;
  for(var i=0;i<nb_li;i++){
    for(var j=0;j<nb_col;j++){
        var cell = jQuery('.i'+i+'.j'+j);
        if( cell.hasClass('indesirable') ){
            count++;
       }
        console.log(i);


    }
}

alert('on a ' + count + ' indesirables');