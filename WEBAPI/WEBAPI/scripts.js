//// Update the base URL with your Web API endpoint
//const baseUrl = 'https://localhost:44341/api/employees';

//// Function to fetch and display all employees
//async function displayEmployees() {
//    const response = await fetch(`${baseUrl}`);
//    const employees = await response.json();

//    const employeeList = document.getElementById('employeeList');
//    employeeList.innerHTML = '';

//    employees.forEach(employee => {
//        const listItem = document.createElement('li');
//        listItem.textContent = `${employee.FirstName} ${employee.LastName} (ID: ${employee.ID})`;
//        employeeList.appendChild(listItem);
//    });
//}

//// Function to add a new employee
//async function addEmployee() {
//    const firstName = document.getElementById('firstName').value;
//    const lastName = document.getElementById('lastName').value;
//    const gender = document.getElementById('gender').value;
//    const salary = document.getElementById('salary').value;

//    const response = await fetch(`${baseUrl}`, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//            FirstName: firstName,
//            LastName: lastName,
//            Gender: gender,
//            Salary: salary,
//        }),
//    });

//    await displayEmployees();
//}

//// Function to update an existing employee
//async function updateEmployee() {
//    const id = document.getElementById('updateId').value;
//    const firstName = document.getElementById('updateFirstName').value;
//    const lastName = document.getElementById('updateLastName').value;
//    const gender = document.getElementById('updateGender').value;
//    const salary = document.getElementById('updateSalary').value;

//    const response = await fetch(`${baseUrl}/${id}`, {
//        method: 'PUT',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//            FirstName: firstName,
//            LastName: lastName,
//            Gender: gender,
//            Salary: salary,
//        }),
//    });

//    await displayEmployees();
//}

//// Function to delete an employee
//async function deleteEmployee() {
//    const id = document.getElementById('deleteId').value;

//    const response = await fetch(`${baseUrl}/${id}`, {
//        method: 'DELETE',
//    });

//    await displayEmployees();
//}

//// Initial display of employees when the page loads
//displayEmployees();
