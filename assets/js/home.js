var items = document.getElementsByClassName('list-items');
var id;
for(var i= 0; i<items.length;i++){

    if(items[i].checked == true){
        id = items.getAttribute('data-id');

    }

}

console.log(id);
