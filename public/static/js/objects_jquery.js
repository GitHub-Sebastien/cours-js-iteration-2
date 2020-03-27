$(document).ready(function() {
    $('#refresh').on('click', function() {
        load_components();
        $('#table_body').empty();
    });
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

function add_line_to_table(data) {

    let line = '<tr> \
    <th style = "width: 100px" >' + data.serial + ' </th> \
    <th style="width:500px;"><img style="width:500px; heigth:10%; text-align:center;" src=" static/images/' + data.image + '"></th> \
    <th > Description ' + data.description + ' </th> \
    <th style = "width: 100px"><input type="checkbox" ' + check(data) + '></th> \
    <th style = "width: 100px"><button class="btn-primary">Submit !</button></th> \
    </tr> ';
    $('#table_body').append(line);
}

function check(data) {
    let check = "";
    return data.status ? check = "checked" : "";



}