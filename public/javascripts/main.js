$(document).ready(function(){
  $('#loader').hide();
  $('#search').on('keyup', function(e){
    e.preventDefault();
    var search = $(this).val();
    var trim = search.trim();
    var split = trim.split(' ');

    if(e.keyCode === 13 && search.length > 0){
      if(split.length !== 2){
        alert('First and Last Names Only');
      }else{
        e.currentTarget.value = '';
        var firstName = split[0].toUpperCase();
        var lastName = split[1].toUpperCase();

        var params = {
          firstName:firstName,
          lastName:lastName
        };
        $.get('/search', params, function(data){

        });
      }
    }
  })
});
