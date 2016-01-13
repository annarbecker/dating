$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var age = $("input#age").val();
    var gender = $("select#genderPreference").val();
    //
    // var result = (age && gender);

    if (age <= 39 && gender === 'male') {
      $("#lebron").show();
    }
    else if (age <= 39 && gender === 'female') {
      $("#katy").show();
    }
    else if (age <= 39 && gender === 'either') {
      $("#katy").show();
      $("#lebron").show();
    }
    else if (age >= 40 && gender === 'male') {
      $("#clooney").show();
    }
    else if (age >= 40 && gender === 'female') {
      $("#hilary").show();
    }
    else if (age >= 40 && gender === 'either') {
      $("#clooney").show();
      $("#hilary").show();
    }
    else {
      alert("Please answer all questions!")
    }
    //
    // $("#result").show();
    event.preventDefault();
  });
});
