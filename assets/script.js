function currentDay() {
    var today = moment().format('MMM DD, YYYY ');
    $('#currentDay').text(today);
  }

currentDay();

var currentHour = moment().hour();
var times = $('.description')
times.each(function(){
    var input = $(this).prop('id')
    var res = input.replace(/\D/g, ""); 

    var plannerTime = parseInt(res);
    console.log(plannerTime)
    if(plannerTime > currentHour){
        $(this).addClass("future");
    }else if(plannerTime < currentHour){
        $(this).addClass("past");
    }else if(plannerTime === currentHour){
        $(this).addClass("present");
    }else{
        console.log('Error has occured');
    }
});


// data storage
var workHour1 = document.querySelector("#hour9");
var workHour2 = document.querySelector("#hour10");
var workHour3 = document.querySelector("#hour11");
var workHour4 = document.querySelector("#hour12");
var workHour5 = document.querySelector("#hour13");
var workHour6 = document.querySelector("#hour14");
var workHour7 = document.querySelector("#hour15");
var workHour8 = document.querySelector("#hour16");
var workHour9 = document.querySelector("#hour17");


renderStoredData();

function renderStoredData() {
    var hour1 = localStorage.getItem("hour1");
    var hour2 = localStorage.getItem("hour2");
    var hour3 = localStorage.getItem("hour3");
    var hour4 = localStorage.getItem("hour4");
    var hour5 = localStorage.getItem("hour5");
    var hour6 = localStorage.getItem("hour6");
    var hour7 = localStorage.getItem("hour7");
    var hour8 = localStorage.getItem("hour8");
    var hour9 = localStorage.getItem("hour9");

    workHour1.placeholder = hour1;
    workHour2.placeholder = hour2;
    workHour3.placeholder = hour3;
    workHour4.placeholder = hour4;
    workHour5.placeholder = hour5;
    workHour6.placeholder = hour6;
    workHour7.placeholder = hour7;
    workHour8.placeholder = hour8;
    workHour9.placeholder = hour9;
  }

  // all buttons
  saveBtn1.addEventListener("click", function(event) {
    event.preventDefault();

    var hour1 = workHour1.value;

      localStorage.setItem("hour1", hour1);
      renderStoredData();
    }
  );
  saveBtn2.addEventListener("click", function(event) {
    event.preventDefault();

    var hour2 = workHour2.value;

      localStorage.setItem("hour2", hour2);
      renderStoredData();
    }
  );
  saveBtn3.addEventListener("click", function(event) {
    event.preventDefault();

    var hour3 = workHour3.value;

      localStorage.setItem("hour3", hour3);
      renderStoredData();
    }
  );
  saveBtn4.addEventListener("click", function(event) {
    event.preventDefault();

    var hour4 = workHour4.value;

      localStorage.setItem("hour4", hour4);
      renderStoredData();
    }
  );
  saveBtn5.addEventListener("click", function(event) {
    event.preventDefault();

    var hour5 = workHour5.value;

      localStorage.setItem("hour5", hour5);
      renderStoredData();
    }
  );
  saveBtn6.addEventListener("click", function(event) {
    event.preventDefault();

    var hour6 = workHour6.value;

      localStorage.setItem("hour6", hour6);
      renderStoredData();
    }
  );
  saveBtn7.addEventListener("click", function(event) {
    event.preventDefault();

    var hour7 = workHour7.value;

      localStorage.setItem("hour7", hour7);
      renderStoredData();
    }
  );
  saveBtn8.addEventListener("click", function(event) {
    event.preventDefault();

    var hour8 = workHour8.value;

      localStorage.setItem("hour8", hour8);
      renderStoredData();
    }
  );
  saveBtn9.addEventListener("click", function(event) {
    event.preventDefault();

    var hour9 = workHour9.value;

      localStorage.setItem("hour9", hour9);
      renderStoredData();
    }
  );
