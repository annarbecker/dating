$(document).ready(function() {
  $("form#questions").submit(function(event){
    var food = $("select#favoriteFood").val();
    var age = $("input#age").val();
    var gender = $("select#genderPreference").val();
    var interests = $("select#interests").val();

    var result = (food + age + gender + interests);
      if (food === 'Italian') {
        result = 
      }
  }
});
