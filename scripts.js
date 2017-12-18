let dec_round = function(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};
function add_row() {
    let tbody = document.querySelector("#tbody");
    let new_row = document.createElement("tr");

    let price = document.querySelector("#price");
    let weight = document.querySelector("#weight");
    let unit = document.querySelector("#unit");

    let price_td = document.createElement("td");
    let weight_td = document.createElement("td");
    let unit_td = document.createElement("td");
    let button_td = document.createElement("td");

    price_td.appendChild(document.createElement("span").appendChild(document.createTextNode(price.value)));
    weight_td.appendChild(document.createElement("span").appendChild(document.createTextNode(weight.value)));
    unit_td.appendChild(document.createElement("span").appendChild(document.createTextNode(unit.innerHTML)));

    new_row.appendChild(price_td);
    new_row.appendChild(weight_td);
    new_row.appendChild(unit_td);
    new_row.appendChild(button_td);

    tbody.insertBefore(new_row, tbody.firstChild);
    sort_table();
}

function sort_table() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("#tbody");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 0; i < (rows.length - 2); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[2].firstChild;
            y = rows[i + 1].getElementsByTagName("TD")[2].firstChild;
            if (parseFloat(x.nodeValue) > parseFloat(y.nodeValue)) {
                shouldSwitch= true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

let update_price = function() {
    let price = document.querySelector("#price");
    let weight = document.querySelector("#weight");
    let unit = document.querySelector("#unit");
    unit.innerHTML = dec_round((parseFloat(price.value) / parseInt(weight.value, 10)) * 1000, 2);
}
document.querySelector("#price").oninput = update_price;
document.querySelector("#weight").oninput = update_price;
update_price();