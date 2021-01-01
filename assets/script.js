//display date
var now = moment().format("dddd, MMMM Do");
const CURRENTDAY = $("#currentDay");
CURRENTDAY.text(now);

let workday = JSON.parse(localStorage.getItem("todos"));
if (workday === null) {
    workday = [
        {
          time: "9AM",
          todo: "",
        },
        {
          time: "10AM",
          todo: "",
        },
        {
          time: "11AM",
          todo: "",
        },
        {
          time: "12PM",
          todo: "",
        },
        {
          time: "1PM",
          todo: "",
        },
        {
          time: "2PM",
          todo: "",
        },
        {
          time: "3PM",
          todo: "",
        },
        {
          time: "4PM",
          todo: "",
        },
        {
          time: "5PM",
          todo: "",
        },
      ];
}

  //render array into elements
  function render() {
    $(".container").html("");
    for (let i = 0; i < workday.length; i++) {
        let row = $("<div>");
        let textarea = $("<textarea>");
        let label = $("<label>");
        let button = $("<button>");
        let icon = $("<i>");
        icon.attr("class", "fas fa-save");
        button.attr("class", "saveBtn");
        button.attr("id", "save");
        button.append(icon);
        row.attr("class", "row");
        label.text(workday[i].time);
        let realNum = parseInt(workday[i].time);
        let todos = workday[i].todo;
        label.attr("id", "time");
        row.append(label);
        textarea.attr("id", realNum);
        textarea.attr("value", realNum);
        textarea.text(todos);
        row.append(textarea);
        row.append(button);
        $(".container").append(row);
      }
      let currentHour = moment().get("hour");
      switch (currentHour) {
        case 9:
          $("#9").addClass("present");
          $("textarea").addClass("future");
          if ($("#9").hasClass("future")) {
            $("#9").removeClass("future");
          }
          break;
        case 10:
          $("#9").addClass("past");
          $("#10").addClass("present");
          $("textarea").addClass("future");
          if ($("#10").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
          }
          break;
        case 11:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("present");
          $("textarea").addClass("future");
          if ($("#11").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
          }
          break;
        case 12:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("past");
          $("#12").addClass("present");
          $("textarea").addClass("future");
          if ($("#12").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
            $("#12").removeClass("future");
          }
          break;
        case 13:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("past");
          $("#12").addClass("past");
          $("#1").addClass("present");
          $("textarea").addClass("future");
          if ($("#1").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
            $("#12").removeClass("future");
            $("#1").removeClass("future");
          }
          break;
        case 14:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("past");
          $("#12").addClass("past");
          $("#1").addClass("past");
          $("#2").addClass("present");
          $("textarea").addClass("future");
          if ($("#2").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
            $("#12").removeClass("future");
            $("#1").removeClass("future");
            $("#2").removeClass("future");
          }
          break;
        case 15:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("past");
          $("#12").addClass("past");
          $("#1").addClass("past");
          $("#2").addClass("past");
          $("#3").addClass("present");
          $("textarea").addClass("future");
          if ($("#3").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
            $("#12").removeClass("future");
            $("#1").removeClass("future");
            $("#2").removeClass("future");
            $("#3").removeClass("future");
          }
          break;
        case 16:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("past");
          $("#12").addClass("past");
          $("#1").addClass("past");
          $("#2").addClass("past");
          $("#3").addClass("past");
          $("#4").addClass("present");
          $("textarea").addClass("future");
          if ($("#4").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
            $("#12").removeClass("future");
            $("#1").removeClass("future");
            $("#2").removeClass("future");
            $("#3").removeClass("future");
            $("#4").removeClass("future");
          }
          break;
      
        case 17:
          $("#9").addClass("past");
          $("#10").addClass("past");
          $("#11").addClass("past");
          $("#12").addClass("past");
          $("#1").addClass("past");
          $("#2").addClass("past");
          $("#3").addClass("past");
          $("#4").addClass("present");
          $("#5").addClass("present");
          $("textarea").addClass("future");
          if ($("#5").hasClass("future")) {
            $("#9").removeClass("future");
            $("#10").removeClass("future");
            $("#11").removeClass("future");
            $("#12").removeClass("future");
            $("#1").removeClass("future");
            $("#2").removeClass("future");
            $("#3").removeClass("future");
            $("#4").removeClass("future");
            $("#5").removeClass("future");
          }
          break;
        default:
          $("textarea").addClass("past");
      }

    }

//save button
let x = "";
$(document).on('click', '.saveBtn', function(){
    if ($(this).hasClass("saveBtn")) {
        let textVal = $(this).parent(".row").find("textarea");
        let indexVal = textVal.attr("value");
        let indexId = textVal.attr("id");
        let obj = workday.find(
          (o) => o.time === indexId + "AM" || o.time === indexId + "PM"
        );
        obj.todo = textVal.val();
        
    
        $("textarea").each(function () {
          x += this.value.length;
        });
    
        if (x === 0) {
          alert("error");
          location.reload();
        } else {
          localStorage.setItem("todos", JSON.stringify(workday));
        
        }
      }
  });

render();