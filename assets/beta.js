let workday = [
    {
        time: '9AM',
        todo: '',
    },
    {      time: '10AM',
        todo: '',
    },
    {      time: '11AM',
        todo: '',
    },
    {      time: '12PM',
        todo: '',
    },
    {      time: '1PM',
        todo: '',
    },
    {      time: '2PM',
        todo: '',
    },
    {      time: '3PM',
        todo: '',
    },
    {      time: '4PM',
        todo: '',
    },
    {      time: '5PM',
        todo: '',
    },
]

function render(){
    $('.container').html('');
    workday.forEach(function(t, x){
        let row = $('<div>');
        $(row).attr('class', 'row align-items-start');
        let col = $('<div>');
        $(col).attr('class', 'col');
        let card = $('<div>');
        $(card).attr('class', 'card m-3 text-white bg-dark');
        let cardHeader = $('<div>');
        $(cardHeader).text(t.time);
        $(cardHeader).attr('class', 'card-header ');
        let cardBody = $('<div>');
        $(cardBody).attr('class', 'card-body p-3');
        $(cardBody).html('<div class="form-floating"><textarea class="form-control bg-dark border-dark text-white" placeholder="I need to..." id="floatingTextarea2" style="height: 100px"></textarea><label class="text-secondary" for="floatingTextarea2">I need to...</label></div>');
        $('#floatingTextarea2').text(t.todo);

        
        $(card).append(cardHeader);
        $(card).append(cardBody);
        $(col).append(card);
        $(row).append(col);
        $('.container').append(row);
        
        
        
    })
}

render();