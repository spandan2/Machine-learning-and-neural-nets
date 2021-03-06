var data = [];
var m = 1;
var b = 0;
var c = false;
function setup() {
	createCanvas(600,600);
	
}

function draw() {
    background(51);
 
    for(var i=0; i<data.length; i++){
        
        var x = map(data[i].x,0,1,0,width);
        var y = map(data[i].y,1,0,0,height);
        fill(255);
        stroke(255);
        ellipse(x,y,4,4);
    }
    if(c){
    linearRegression();
    drawLine();
    }
}

function mousePressed() {
    c = true;
    var x = map(mouseX, 0, width, 0, 1);
    var y = map(mouseY, 0, height, 1, 0);
    var point = createVector(x,y);
    data.push(point);
}

function drawLine(){
    var x1=0;
    var y1 = m*x1 +b;
    var x2=1;
    var y2 = m*x2 +b;
    
    var x1 = map(x1,0,1,0,width);
    var y1 = map(y1,1,0,0,height);
    var x2 = map(x2,0,1,0,width);
    var y2 = map(y2,1,0,0,height);
    stroke(255,255,0);
    line(x1,y1,x2,y2);
}


function linearRegression() {
    var xsum =0;
    var ysum =0;
    var n = 0;
    var d = 0;
    
    for(var i=0;i<data.length; i++){
        xsum = xsum +data[i].x;
        ysum = ysum +data[i].y;
    }
    var xmean = xsum / data.length;
    var ymean = ysum / data.length;
    
    for(var i=0;i<data.length; i++){
        var x = data[i].x;
        var y = data[i].y;
        
        n = n + ((x-xmean)*(y-ymean));
        d = d + ((x-xmean)*(x-xmean));
    }
    
    m = n/d;
    b = ymean - (m*xmean);
    
}
