This project is a web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides functionalities to manage employee information, including adding, updating, deleting, and viewing employees. The system also supports searching and paginating the list of employees.

Features
Add Employee: Add new employees with details like name, email, phone, department, salary, and profile image.
Update Employee: Update existing employee details.
Delete Employee: Remove an employee from the system.
View Employee: View detailed information about an employee.
Search Employees: Search for employees by name.
Pagination: Navigate through pages of employees.
Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Styling: Bootstrap
State Management: React Hooks
Installation and Setup
Prerequisites
Make sure you have the following installed on your machine:

Node.js
MongoDB
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add the following environment variables:

makefile
Copy code
PORT=8080
MONGO_URI=your_mongodb_connection_string
Start the backend server:

bash
Copy code
npm start
The backend server will run on http://localhost:8080.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install the dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
The frontend server will run on http://localhost:3000.

Usage
Adding an Employee: Click on the "Add" button and fill out the form.
Updating an Employee: Click on the edit icon next to an employee's name, modify the details, and save.
Deleting an Employee: Click on the delete icon next to an employee's name.
Searching for Employees: Use the search bar to find employees by name.
Pagination: Use the pagination controls to navigate through the list of employees.
Project Structure
backend/: Contains the backend code, including routes and database models.
frontend/: Contains the React frontend code.
public/: Public assets for the frontend.
src/: Main source code for the frontend.
Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
React documentation
MongoDB documentation
Express documentation
Bootstrap for styling
