$(function  () {
    var Name = document.querySelector('.name');
    var Time = document.querySelector('.time');
    var tname = document.querySelector('.timename');
    var color = document.querySelector('.color');
    var circle = document.querySelector('.circle');
    var name = document.querySelector('.namearea');
    var time = document.querySelector('.timearea');
    var hits = document.querySelector('.hits');
    var hit = Number(hits.innerHTML);
    var start = $('.start');
    var Setbtn = $('.set');
    var shadow = "";

   
    Setbtn.click(function () {
        if($(start.html('Start'))) {
            if (Time.value > 0) {
                Animate($('.start'), 'animate__animated');
                $(Time).removeClass('time-error');

            switch (color.value) {
                case 'Default':
                    circle.style.background = shadow + "url('./img/bgroundSmall.jpg') no-repeat center / cover";
                    break;
                case 'Red':
                    circle.style.background = shadow + "red";
                    break;
                    case 'Yellow':
                    circle.style.background = shadow + "#ffc300"; 
                        break;
                        case 'Grey':
                    circle.style.background = shadow + "#83837e"; 
                            break;
                            case 'Black':
                    circle.style.background = shadow + "#000";
                                break;
                                
                                case 'Purple':
                    circle.style.background = shadow + "#bc13fe";
                                    break;
                                    default:
                                        alert('Unknown Value');
                                    }
                                    time.innerHTML = Number(Time.value);
                                    
                                    if(Name.value === '') {
                                        $(name).html('User');
                                    }
                                    else {
                                        $(name).html(Name.value);
                                    }
                                }
                                else{
                                    $(Time).addClass('time-error');
                                    $('.timetitle').removeClass('d-none');
                                    tname.style.color = 'red';
                                }                
                            }
                else if ($(start).html('Restart')) {
            if (Time.value > 0) {
                $(Time).removeClass('time-error');

                switch (color.value) {
                    case 'Default':
                        circle.style.background = shadow + "url('./img/bgroundSmall.jpg') no-repeat center / cover";
                        break;
                    case 'Red':
                        circle.style.background = shadow + "red";
                        break;
                    case 'Yellow':
                        circle.style.background = shadow + "#ffc300";
                        break;
                    case 'Grey':
                        circle.style.background = shadow + "#83837e";
                        break;
                    case 'Black':
                        circle.style.background = shadow + "#000";
                        break;

                    case 'Purple':
                        circle.style.background = shadow + "#bc13fe";
                        break;
                    default:
                        alert('Unknown Value');
                }
                time.innerHTML = Number(Time.value);

                if (Name.value === '') {
                    $(name).html('User');
                }
                else {
                    $(name).html(Name.value);
                }
            }
                }
                
                
                
            })

$(start).click(function() {
                if(time.innerHTML > 0 && $(start).html('Start')) {
                    $('.circle').removeClass('offClick');
                    $('.settings').addClass('offClick');
                    $(start).html('Restart');
                    var timetowait = 1000;

                  
                    
                        setInterval(function () {
                                
                                var timer = time.innerHTML;
                                var num = timer;
                                
                                for(num; num != 0  ; num--) {
                                    time.innerHTML = Number(timer) - 1;
                            }
                                
                            }, 1000);
                        
                        $(start).click(function() {
                            $(time).html('0');
                            $(start).html('Start');
                            console.log('Restart');
                            $(start).addClass('offClick')
                            $(hits).html('0');
                            $('.settings').removeClass('offClick');
                            location.reload();
                        })

                       

                }

              
                

    else if (start.innerHTML = 'Restart' && name.value != 'Your Name') {
                    location.reload();

        console.log('Start');
        $(time).html('0');
        $(start).addClass('offClick')
        $(hits).html('0');
        $('.settings').removeClass('offClick');
    }
            })
                   

            $(circle).click(function() {
                if(Number(time.innerHTML) > 0 && $(start).html('Restart')) {
                    hit++;
                        hits.innerHTML = hit;
                }
            })
   
 
  
  
        })
            

    
            
        
function Animate(element, anim) {
    var anim = anim
    var elem = element;
    var hide = 'd-none';
    elem.addClass(anim);
    elem.removeClass(hide);
}