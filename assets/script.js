
var now = moment().format('dddd, MMMM Do');
const CURRENTDAY = $('#currentDay')
CURRENTDAY.text(now);

let workday = [
    {
        time: '9AM',
        todo: ''

}, 
    {
        time: '10AM',
        todo: ''
},
{
    time: '11AM',
    todo: ''

}, 
{
    time: '12AM',
    todo: ''
}
,
{
    time: '1AM',
    todo: ''

}, 
{
    time: '2AM',
    todo: ''
},
{
    time: '3AM',
    todo: ''

}, 
{
    time: '4AM',
    todo: ''
}
,
{
    time: '5AM',
    todo: ''

}
]



function render() {
   for (let i = 0; i < workday.length; i++) {
       let row = $('<div>');
       let textarea = $('<textarea>');
       let label = $('<label>');
       let button = $('<button>');
       let icon = $('<i>');
       icon.attr('class', 'fas fa-save');
       button.attr('class', 'saveBtn');
       button.attr('id', 'save');
       button.append(icon);
       row.attr('class', 'row');
       label.text(workday[i].time);
       let realNum = parseInt(workday[i].time);
       label.attr('id','time');
       row.append(label);
       textarea.attr('id', 'textarea');
       textarea.attr('value', realNum);
       row.append(textarea);
       row.append(button);
       $('.container').append(row);
       

   }
}

render();

let currentHour = moment().get('hour');


$('button').on('click', function(){
    if ($(this).hasClass('saveBtn')){
      let textVal = $(this).parent('.row').find('#textarea');
      let indexVal = textVal.attr('value');
        if (textVal.val().trim().length === 0){
            alert('invalid input');
            textVal.val('');
            return;
        }
        else{
            workday.todo = textVal.val();
            console.log(workday)
        }
        
    }
    
})



switch (currentHour) {
    case 13:
        currentHour = 1;
        break;
    case 14:
        currentHour = 2;
        break;
    case 15:
        currentHour = 3;
        break;
    case 16:
        currentHour = 4;
        break;
    case 17:
        currentHour = 5;
    default:
        break;
}

console.log(currentHour);




$('button').on('click', function(){
    
})