function currentDay() {
    var today = moment().format('MMM DD, YYYY ');
    $('#currentDay').text(today);
  }

currentDay()
