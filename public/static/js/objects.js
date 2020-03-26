/**
 * Fonction à appeler au chargement de la page
 * Cette fonction devra exécuter les actions suivantes :
 *    - charger la liste des objets depuis l'API
 *    - charger les données des objets dans la table
 */
function load_components() {
    console.log("Chargement des données de la page");
    $.get("/objects", function(data, status) {
        console.log(data);
    });
    // Ajouter ici le code permettant de charger dynamiquement les éléments de la page
}

function add_line_to_table(data) {
    let line = '<tr> \
    <th style = "width: 100px" > N° Série:' + data.serial + '  </th> \
    <th > Image </th>  \
    <th > Description </th> \
    <th style = "width: 100px"><input type="checkbox"></th> \
    <th style = "width: 100px"><button class="btn-primary">Submit !</button></th> \
    </tr> ';
    //$('#table_body').append(line);

    // var node = document.createElement("tr");
    // var textnode = document.create(line);
    // node.appendChild(textnode);
    document.getElementById('table_body').innerHTML += line;
}