
window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 700, 700);



    var podium = paper.rect(100, 10, 50, 50).paper.image('images/galogo.png', 100, 10, 50, 50);
        podium.node.onclick = function() {  
        var backgroundImage = paper.image('images/seanwb.jpg', 100, 10, 50, 50);
    }

    var table1a = paper.rect(100, 100, 50, 50).attr({fill: 'green'});
        table1a.node.onclick = function() {
        var img1a = paper.image('images/steve.png', 100, 100, 50, 50);
    }
   
    var table1b = paper.rect(150, 100, 50, 50).attr({fill: 'blue'});
        table1b.node.onclick = function() {
        var img1b = paper.image('images/akash.jpg', 150, 100, 50, 50);
    }
    
    var table1c = paper.rect(200, 100, 50, 50).attr({fill: 'red'});
        table1c.node.onclick = function() {
        var img1c = paper.image('images/bob.jpg', 200, 100, 50, 50);
    }
    
    var table1d = paper.rect(250, 100, 50, 50).attr({fill: 'black'});
        table1d.node.onclick = function() {
        var img1d = paper.image('images/erich.jpg', 250, 100, 50, 50);
    }
    

    

    var table2a = paper.rect(350, 100, 50, 50).attr({fill: 'pink'});
        table2a.node.onclick = function() {
        var img2a = paper.image('images/natalie.jpg', 350, 100, 50, 50);
    }

    var table2b = paper.rect(400, 100, 50, 50).attr({fill: 'red'});
        table2b.node.onclick = function() {
        var img2b = paper.image('images/lauren.jpg', 400, 100, 50, 50);
    }

    var table2c = paper.rect(450, 100, 50, 50).attr({fill: 'orange'});
        table2c.node.onclick = function() {
        var img2c = paper.image('images/kyle.jpg', 450, 100, 50, 50);
    }


    var table2d = paper.rect(500, 100, 50, 50).attr({fill: 'yellow'});
        table2d.node.onclick = function() {
        var img2d = paper.image('images/justin.jpg', 500, 100, 50, 50);
    }




    var table3a = paper.rect(100, 200, 50, 50).attr({fill: 'red'});
        table3a.node.onclick = function() {
        var img3a = paper.image('images/charlie.jpg', 100, 200, 50, 50);
    }

    var table3b = paper.rect(150, 200, 50, 50).attr({fill: 'green'});
        table3b.node.onclick = function() {
        var img3b = paper.image('images/marco.jpg', 150, 200, 50, 50);
    }

    var table3c = paper.rect(200, 200, 50, 50).attr({fill: 'blue'});
        table3c.node.onclick = function() {
        var img3c = paper.image('images/adam.jpg', 200, 200, 50, 50);
    }

    var table3d = paper.rect(250, 200, 50, 50).attr({fill: 'red'});
        table3d.node.onclick = function() {
        var img3d = paper.image('images/seanh.jpg', 250, 200, 50, 50);
    }




    var table4a = paper.rect(350, 200, 50, 50).attr({fill: 'black'});
        table4a.node.onclick = function() {
        var img4a = paper.image('images/connor.jpg', 350, 200, 50, 50);
    }

    var table4b = paper.rect(400, 200, 50, 50).attr({fill: 'green'});
        table4b.node.onclick = function() {
        var img4b = paper.image('images/luke.jpg', 400, 200, 50, 50);
    }

    var table4c = paper.rect(450, 200, 50, 50).attr({fill: 'blue'});
        table4c.node.onclick = function() {
        var img4c = paper.image('images/comic.jpg', 450, 200, 50, 50);
    }

    var table4d = paper.rect(500, 200, 50, 50).attr({fill: 'red'});
        table4d.node.onclick = function() {
        var img4d = paper.image('images/jordan.jpg', 500, 200, 50, 50);
    }





	var table5a = paper.rect(100, 300, 50, 50).attr({fill: 'yellow'});
        table5a.node.onclick = function() {
        var img5a = paper.image('images/nicholas.jpg', 100, 300, 50, 50);
    }

	var table5b = paper.rect(150, 300, 50, 50).attr({fill: 'red'});
        table5b.node.onclick = function() {
        var img5b = paper.image('images/alejandro.jpg', 150, 300, 50, 50);
    }

	var table5c = paper.rect(200, 300, 50, 50).attr({fill: 'violet'});
        table5c.node.onclick = function() {
        var img5c = paper.image('images/cody.jpg', 200, 300, 50, 50);
    }

	var table5d = paper.rect(250, 300, 50, 50).attr({fill: 'orange'});
        table5d.node.onclick = function() {
        var img5d = paper.image('images/rohit.jpg', 250, 300, 50, 50);
    }



	var table6a = paper.rect(350, 300, 50, 50).attr({fill: 'pink'});
        table6a.node.onclick = function() {
        var img6a = paper.image('images/larissa.jpg', 350, 300, 50, 50);
    }

	var table6b = paper.rect(400, 300, 50, 50).attr({fill: 'green'});
        table6b.node.onclick = function() {
        var img6b = paper.image('images/kim.jpg', 400, 300, 50, 50);
    }

	var table6c = paper.rect(450, 300, 50, 50).attr({fill: 'blue'});
        table6c.node.onclick = function() {
        var img6c = paper.image('images/bugsbunny.png', 450, 300, 50, 50);
    }

	var table6d = paper.rect(500, 300, 50, 50).attr({fill: 'yellow'});
        table6d.node.onclick = function() {
        var img6d = paper.image('images/blair.jpg', 500, 300, 50, 50);
    }




	var teachtable1 = paper.rect(150, 450, 50, 50).paper.image('images/galogo.png', 150, 450, 50, 50);
        teachtable1.node.onclick = function() {
        var imgtt1 = paper.image('images/matt.jpg', 150, 450, 50, 50);
    }

    var teachtable2 = paper.rect(450, 450, 50, 50).paper.image('images/galogo.png', 450, 450, 50, 50);
        teachtable2.node.onclick = function() {
        var imgtt2 = paper.image('images/mike.jpg', 450, 450, 50, 50);
    }
 }

