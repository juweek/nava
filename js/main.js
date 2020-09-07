var fields = document.getElementsByClassName("modalItems--form--field")
var bodyInfo = document.getElementsByClassName('nv-households-list')[0]
var modal = document.getElementById("modalItems")
var closeButton = document.getElementsByClassName("close")[0]
var modalButton = document.getElementById("modal-button")
var addButton = document.getElementsByClassName('nv-households-button')[0]

/*
Set variables for each of the forms in the modal
------------------------------
*/
var members = [
    {
        firstName: 'Emp',
        lastName: 'Loymee',
        description: 'Lorem ipsum dolor sit amet',
        fruit: 'Apple'
    },
    {
        firstName: 'High',
        lastName: 'Urmy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        fruit: 'Orange'
    },
    {
        firstName: 'Bru',
        lastName: 'Hman',
        description: 'Wassup wassup wassup',
        fruit: 'Apple'
    }
]


/*
EVENT LISTENERS: on click of a button, either the 'add new member' button or the 'close' button on the modal, change the visibility of the modal
------------------------------
*/
addButton.addEventListener('click', (o) => {
    modal.style.display = "block"
})
closeButton.addEventListener('click', (o) => {
    modal.style.display = "none"
})


/*
EVENT LISTENER: When adding a new member to the household, iterate over each of the form fields. find the field's value, and check if it's empty. if it is, alert the user.

if not, add the value to an object. once you have iterated over each form field,  push the object to the list of objects and redraw
------------------------------
*/
modalButton.addEventListener('click', (o) => {
    var isFilled
    var object = {}

    for (i = 0; i < fields.length; i++) {
        if(fields[i].value == "") {
            isFilled = false
            break
        }
        else {
            object[fields[i].getAttribute('data-value')] = fields[i].value
        }
    }

    if (isFilled == false) {
        alert('Please make sure all of the fields are filled in')
    } else {
        members.push(object)
        draw()

        for (i = 0; i < fields.length; i++) {
            fields[i].value = ""
        }

        modal.style.display = "none"
    }
})


/*
METHOD: iterate over each of the objects in the members variable. insert each object's info into an html template, then combine the strings and serve as html
------------------------------
*/
let draw = () => {
    var string = ""
    members.forEach((i) => {
        string = string + `<div class="nv-household">
        <div class="db-name">` + i.firstName.toUpperCase() + " " + i.lastName.toUpperCase() + `</div>
        <div>Description: ` + i.description + `</div>
        <div>Favourite fruit: ` + i.fruit + `</div>
        </div>`
    })
    bodyInfo.innerHTML = string
}
draw()
