$(document).ready(function() {
    load_components();
});

function load_components() {
    console.log("Chargement des données de la page");

    $.get("/objects", (data) => {
        data.objects.forEach(o => {
            add_line_to_table(o);

            console.log(o);
        });
    });
};


// Ajouter ici le code permettant de charger dynamiquement les éléments de la page


function add_line_to_table(data) {
    let checked = "";

    if (data.status) {
        checked = "checked";
    } else {
        checked = "";
    }

    // data.status ? checked = "checked" : "";

    let line = '<tr> \
    <th style = "width: 100px" >' + data.serial + '  </th> \
    <th ><img style="max-width:50%; heigth:10%;" src=" static/images/' + data.image + '"></th> \
    <th > Description ' + data.description + ' </th> \
    <th style = "width: 100px"><input type="checkbox" ' + checked + '></th> \
    <th style = "width: 100px"><button class="btn-primary">Submit !</button></th> \
    </tr> ';
    $('#table_body').append(line);
    // if (data.status) {
    //     $('input[name=check]').prop('checked', true);
    // }
}