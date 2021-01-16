$(function () {
    var setColor = document.querySelector('.color');
    var save = $('.save')
    var clickBtn = document.querySelector('.clickBtn');
    save.click(function () {
        console.log(setColor.value);
        

        switch (setColor.value) {
            case 'Red':
                clickBtn.style.background = shadow +'red';
                break;
            case 'Yellow':
                clickBtn.style.background = 'yellow';
                break;
            case 'Grey':
                clickBtn.style.background = 'rgb(0, 105, 217)';
                break;
            case 'Black':
                clickBtn.style.background = '#ffb600';
                break;
            case 'Choose color':
                clickBtn.style.background = '#000';
                break;
                
            case 'Purple':
                clickBtn.style.background = '#888';
                break;
                break;
            default:
                alert('Сука не выебывайся!');
        }

    });

});