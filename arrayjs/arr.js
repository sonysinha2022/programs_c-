const readline = require('readline');

// Function to accept and store employee information
function storeEmployeeInfo() {
  // Create an array to store employee information
  var employees = [];
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Function to prompt user for employee information
  function promptForEmployeeInfo(i) {
    if (i > 6) {
      rl.close();
      // Display the list of all employees
      console.log("List of All Employees:");
      for (var j = 0; j < employees.length; j++) {
        console.log("Employee ID: " + employees[j].empId + ", Employee Name: " + employees[j].empName);
      }

      // Sort the array of employees based on empName
      employees.sort(function(a, b) {
        // Convert names to lowercase for case-insensitive sorting
        var nameA = a.empName.toLowerCase();
        var nameB = b.empName.toLowerCase();
    
        // Compare names
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    
      // Display the sorted employee names
      console.log("\nSorted Employee Names:");
      for (var j = 0; j < employees.length; j++) {
        console.log("Employee ID: " + employees[j].empId + ", Employee Name: " + employees[j].empName);
      }
    } else {
      rl.question("Enter Employee ID for Employee " + i + ":", function(empId) {
        rl.question("Enter Employee Name for Employee " + i + ":", function(empName) {
          // Create an object to represent an employee
          var employee = {
            empId: empId,
            empName: empName
          };
      
          // Add the employee object to the array
          employees.push(employee);

          // Display the entered employee information
          console.log("Employee ID: " + empId + ", Employee Name: " + empName);
      
          // Prompt for the next employee information
          promptForEmployeeInfo(i + 1);
        });
      });
    }
  }

  // Start prompting for the first employee information
  promptForEmployeeInfo(1);
}

// Call the function to store and display employee information
storeEmployeeInfo();

