
var now = moment().format('dddd, MMMM Do');
const CURRENTDAY = $('#currentDay')
CURRENTDAY.text(now);

let workday = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
let todoList = [];
let index = [];


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
       label.text(workday[i]);
       label.attr('id','time');
       row.append(label);
       textarea.attr('id', 'textarea');
       let realNum = parseInt(workday[i]);
       textarea.attr('data-index', realNum);
       row.append(textarea);
       row.append(button);
       $('.container').append(row);

   }
}

render();

let currentHour = moment().get('hour');
let txtHour = $(textarea).attr('data-index');

for (let i = 0; i < txtHour.length; i++){
    if (currentHour === txtHour[i]) {
        alert('dog');
    
    }
    else{
        alert(txtHour[i]);
    }
}


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
    if ($(this).hasClass('saveBtn')){
      let textVal = $(this).parent('.row').find('#textarea');
      let indexVal = textVal.attr('data-index');
        if (textVal.val().trim().length === 0){
            alert('invalid input');
            textVal.val('');
            return;
        }
        else{
            todoList.push(textVal.val());
            index.push(indexVal);
            console.log(todoList);
            console.log(index);
        }
        
    }
    else{
        return;
    }
})