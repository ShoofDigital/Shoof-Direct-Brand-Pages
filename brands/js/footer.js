$(document).ready(function(){
    console.log( "ready!" );
  });

function equalHeights(val) {

    // Equal heights
    var panels = $(val);
    var tmpHeight = 0;
    var maxHeight = 0;

    // Loop through and define the tallest div
    for (var i = 0; i < panels.length; i++) {

        tmpHeight = maxHeight;
        maxHeight = panels[i].offsetHeight;
        maxHeight = (maxHeight > tmpHeight) ? maxHeight : tmpHeight;

    }

    // Assign new min height to all affected div's
    $(val).css({
        'height': maxHeight + 'px'
    });

    console.log( "ready! readdy" );

}



// Perform function of the following elements
equalHeights('.overlay-text.one');
equalHeights('.overlay-text.two');