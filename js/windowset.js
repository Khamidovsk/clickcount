addEventListener('load', function() {
    console.log('Welcome to Click Count');
    
    Animate($('.title'), 'animate__animated');
    setInterval(() => {
        Animate($('.info'), 'animate__animated');}, 500);
    setInterval(() => {
        Animate($('.settings'), 'animate__animated');
    }, 1200);
    setInterval(() => {
        Animate($('.chart'), 'animate__animated');
    }, 1800);

    setInterval(() => {
        Animate($('.score'), 'animate__animated');
    }, 2300);

    setInterval(() => {
        Animate($('.circle'), 'animate__animated');
    }, 2700);

    setInterval(() => {
        Animate($('.scoreappear'), 'animate__animated');
    }, 3000);
    setInterval(() => {
        Animate($('.circle'), 'scale');
    }, 4200);
  /*   setInterval(() => {
        Animate($('.circle'), 'scale');
    }, 4200); */

    var neon = $('.NeonLight');
    var green = "box-shadow: inset 0px 0px 5px 3px rgba(55, 255, 20, 1)";
    var blue = "box-shadow: inset 0px 0px 5px 3px rgba(4, 217, 255, 1)";
    var purple = "box-shadow: inset 0px 0px 5px 3px rgba(254, 1, 154, 1)";
    var neonsec = 1000;
    setInterval(() => {
       Light(); 
    }, neonsec);
            function Light () {
                    setInterval(() => {
                        $(neon).attr('style', purple);
                    }, 4000);
                    setInterval(() => {
                        $(neon).attr('style', blue);
                    }, 8000);
                    setInterval(() => {
                        $(neon).attr('style', green);
                    }, 12000);
    
                }


 /*    for(var i =0; i < 2; i++) {
            setInterval(() => {
                NeonLight($('header'), 'headergreen');
            }, 3000);
        setInterval(() => {
            NeonLight($('header'), 'headerblue');
        }, 6000);
        setInterval(() => {
            NeonLight($('header'), 'headerpurple');
        }, 9000);
        function NeonLight(element, anim) {
            var elem = element;
            var hide = 'headerpurple headerblue headergreen';
            elem.removeClass(hide);
            elem.addClass(anim);
            var anim = anim
            i = 0;
        }
    
    } */
    
   

    
    function Animate(element, anim) {
        var anim = anim
        var elem = element;
        var hide = 'd-none';
        elem.addClass(anim);
        elem.removeClass(hide);
    }
})
setInterval(() => {
}, 1000);
          