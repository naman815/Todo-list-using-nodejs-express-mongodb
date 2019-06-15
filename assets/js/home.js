
// Setting background color of category container

var category = document.getElementsByClassName('task-category'); //all elements using class name

for(let i=0;i<category.length;i++){

    //if category is 'work'
    if(category[i].innerText == 'WORK'){
        category[i].parentNode.style.backgroundColor = "purple";
    }

    //if category is 'school'
    else if(category[i].innerText == 'SCHOOL'){
        category[i].parentNode.style.backgroundColor = "blue";
    }

    //if category is 'others'
    else if(category[i].innerText == 'OTHERS'){
        category[i].parentNode.style.backgroundColor = "green";
    }
}
