function checkboxs(){
    var items = document.querySelectorAll('.list-items:checked');

    var id=[];
    for(var i= 0; i<items.length;i++){
        id.push(items[i].getAttribute('data-id'));
    }

    return id;

}

function deleteCalled(){
    var delId = checkboxs();

    $.ajax({
        type: "POST",
        data: delId,
        url: "index.php",
        success: function(msg){
          $('.answer').html(msg);
        }
     });
 /*   list ki values ko leke 
    semd a post request to 
/delete-route jo bnaega with the ids as parameters*/}
