scrollAnimation();
window.addEventListener("resize", scrollAnimation);
function scrollAnimation(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if(vw>1126){
        var doc = document.documentElement;
        var w = window;

        var prevScroll = w.scrollY || doc.scrollTop;
        var curScroll;
        var direction = 0;
        var prevDirection = 0;

        var header = document.getElementById('jshead');

        var checkScroll = function(vw) {
        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */

        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll==0){
            header.style.backgroundColor= "#323643";
        }else if(curScroll>=112){
            document.getElementById("jshead").style.backgroundColor= "rgba(50,54,67, 0.9)";
        }
        
        //console.log(curScroll);
        if (curScroll > prevScroll) { 
            //scrolled up
            direction = 2;
            //console.log(2);
        }
        else if (curScroll < prevScroll) { 
            //scrolled down
            direction = 1;
            //console.log(1)
        }


        if (direction !== prevDirection) {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            if(vw>1126){
                toggleHeader(direction, curScroll);
            }
        }
        
        prevScroll = curScroll;
        };
        

        var toggleHeader = function(direction, curScroll) {
            //console.log(direction);
            //console.log(curScroll);
            
        if (direction === 2 && curScroll > 112) { 
            if(document.getElementById("jshead").style.position=="fixed"){
                header.classList.add('hide');
                document.getElementById("jshead").style.position = "fixed";
                //document.getElementById("wrapper").style.paddingTop= "112px";
            }else{
                header.classList.add('hide');
            } 
            prevDirection = direction;
        }
        else if (direction === 1) {
            document.getElementById("jshead").style.transition= "0.6s";
            header.classList.remove('hide');
            prevDirection = direction;
        }else if(direction === 1 && curScroll < 112){
            
            document.getElementById("jshead").style.transition= "0.6s";
            header.classList.remove('hide');
            prevDirection = direction;
            console.log(curScroll);
        }else if(direction === 2 && curScroll < 112){
            //document.getElementById("jshead").style.transition= "";
            document.getElementById("jshead").style.position = "fixed";
            //document.getElementById("wrapper").style.paddingTop= "0px";
        }
        };

        window.addEventListener('scroll', checkScroll);
    }else{
        console.log("was here")
        document.getElementById("jshead").style.position = "relative";
        //document.getElementById("wrapper").style.paddingTop= "0px";
    }
}