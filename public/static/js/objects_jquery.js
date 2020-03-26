$(document).ready(function() {
    load_components();
});



//load_components();

function load_components() {
    console.log("Chargement des données de la page");

    $.get("/objects", function(values, keys) {
        $.each(keys, values, function() {
            $('#table_body').append(add_line_to_table(keys));
            console.log(keys);
        });


    });
}

// Ajouter ici le code permettant de charger dynamiquement les éléments de la page


function add_line_to_table(data) {

    let data = '<tr> \
    <th style = "width: 100px" >' + data.serial + '  </th> \
    <th ><img src="./static/images/raspberry-pi-4.jpg" width="300" heigth="300"></th>  \
    <th > Description ' + data.description + ' </th> \
    <th style = "width: 100px"><input type="checkbox"></th> \
    <th style = "width: 100px"><button class="btn-primary">Submit !</button></th> \
    </tr> ';




    //Jquery
    //$('#table_body').append(line);


}