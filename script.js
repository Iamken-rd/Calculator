
var c = document.getElementById("c");
var a = document.getElementById("a");
var l= document.getElementById("l");
var C = document.getElementById("C");
var u = document.getElementById("u");
var L = document.getElementById("L");
var A = document.getElementById("A");
var t = document.getElementById("t");
var o = document.getElementById("o");
var r = document.getElementById("r");

function changeFont(){

    
    c.className = "c1";
    a.className = "a1";
    l.className = "l1";
    C.className = "C1";
    u.className = "u1";
    L.className = "L1";
    A.className = "A1";
    t.className = "t1";
    o.className = "o1";
    r.className = "r1";
    
};
function Font(){

    c.className = "c";
    a.className = "a";
    l.className = "l";
    C.className = "C";
    u.className = "u";
    L.className = "L";
    A.className = "A";
    t.className = "t";
    o.className = "o";
    r.className = "r";
    
    
};

function myFunction() {
       
    var container = document.getElementById("container");
    var Calc = document.getElementById("Calc");
    var title = document.getElementById("title");
    var butt1 = document.getElementById("butt1");
    var display = document.getElementById("inputnum");
    var img = document.getElementById("Sunny");
 


    if(container.className === "container"){
        img.src ="moon.png"
        container.className = "Lightcontainer";
        Calc.className = "LightCalculator";
        title.className = "Lighthey";
        butt1.className = "Lightbutt";
        display.className = "Lightdisplay";
        changeFont();
        
    }else{
        Font();
        img.src ="Sun.png"
        container.className = "container";
        Calc.className = "Calculator";
        title.className = "hey";
        butt1.className = "butt";
        display.className = "display";
        
    }

}