// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades/";
    //When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function(){
        let results;
        //check if we're done
        if(xhr.readyState === xhr.DONE){
            // check if we'we successful
            if(xhr.status !== 200){
                console.error('Could not get grades. Status: ${xhr.status}');
            }
            // and then we call the function to update the html with our data
            populateGradebook(JSON.parse(xhr.responseText));
            }
    }.bind(this);
    xhr.open("get",apiRoute, true);
    xhr.send();
}

// TODO: Populate the table with grade data
function populateGradebook(data) {
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data:", data);
    let tableElm = document.getElementById("gradebook");
        data.forEach(function(assignment){
            let row = document.createElement("tr");
            let colums = [];
            columns.name = document.createElement('td');
            columns.name.appendChild(
                document.createTextNode(assignment.last_name + ", " + assignment.first_name)
            );
            columns.grade.appendChild(
                document.createTextNode(assignment.total_grade)
            );
            row.appendChild(columns.name);
            row.appendChild(columns.grade);
            tableElm.appendChild(row);
        });
}

// TODO: REMOVE THIS
// Call the stubs to demonstrate the workflow
const gradeData = fetchGradeData();
populateGradebook(gradeData);
// END REMOVE
