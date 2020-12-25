
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
       textarea.attr('data-index', i);
       textarea.attr('class', 'past');
       row.append(textarea);
       row.append(button);
       $('.container').append(row);

   }
}

render();

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