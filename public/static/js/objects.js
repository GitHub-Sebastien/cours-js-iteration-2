var object_data = {
    "serial": "OBJ_001",
    "type": "raspberry_TH",
    "image": "raspberry-pi-4.jpg",
    "description": "Capteur de température et d'humidité de la salle de cours du Campus de Chambéry",
    "location": "45.644065, 5.867810",
    "refresh": 5,
    "status": true,
    "provisionning": {
        "date": "2020-03-20",
        "operator": "JPA"
    }
};


function load_components() {
    console.log("Chargement des données de la page");

    $.get("/objects", function(data) {

        for (let o of data.objects) { // La variable o stock la valeur des index de data.object
            console.log(o);
            add_line_to_table(o);
        }

        // for (let d in data.objects) {
        //     add_line_to_table(data.objects[d]);
        // }
    });
    //Ajouter ici le code permettant de charger dynamiquement les éléments de la page
}

function add_line_to_table(data) {

    let line = '<tr> \
    <th style = "width: 100px" >' + data.serial + ' </th> \
    <th ><img style="max-width:50%; heigth:10%;" src=" static/images/' + data.image + '"></th> \
    <th > Description ' + data.description + ' </th> \
    <th style = "width: 100px">' + data.status + '<input type="checkbox"></th> \
    <th style = "width: 100px"><button class="btn-primary">Submit !</button></th> \
    </tr> ';
    $('#table_body').append(line);
    //document.getElementById('table_body').innerHTML += line;
}