# User Registration and Login System with MongoDB, Express.js, and Node.js

This project implements a user registration and login system using MongoDB, Express.js, and Node.js (MEAN stack). It allows users to register by providing their username, email, and password, and then login with their credentials.



## Features

- **User Registration:** Users can register by providing their username, email, and password. Passwords are securely hashed using bcrypt before storing in the database.
- **Input Validation:** Client-side and server-side validation ensure that user input is properly formatted and meets certain criteria (e.g., valid email format, strong password).
- **MongoDB Database:** User data is stored in a MongoDB database, providing easy retrieval and manipulation of user information.
- **Login Authentication:** Users can securely login using their email and password. Passwords are hashed and compared with the stored hashed passwords for authentication.
- **Express.js Framework:** The backend server is built using Express.js, which provides a robust framework for building web applications and APIs.
- **Client-Side Interaction:** The user interface is built using HTML, CSS, and JavaScript, providing a responsive and interactive experience for users.
- **Error Handling:** The system includes error handling mechanisms to gracefully handle unexpected errors and provide informative error messages to users.
- **Scalability and Maintainability:** The project architecture is designed to be scalable and maintainable, allowing for future enhancements and updates as needed.



## output

in login page you need to login with your credentials if you already having an account, if not means click on create new one and register by filllinng your details in the form 
![image](https://github.com/BRUNDAVANAMSUREKHA/Registration-form/assets/122956099/5f0686fa-4f9d-4c1d-9d4f-1fdcab07705a)

![Screenshot 2024-02-15 223648](https://github.com/BRUNDAVANAMSUREKHA/Registration-form/assets/122956099/9b790b8f-3660-49f1-bc17-7235626cfec4)

![image](https://github.com/BRUNDAVANAMSUREKHA/Registration-form/assets/122956099/0676aeed-384b-49c7-a36e-45208833cb15)

![Screenshot 2024-02-15 223624](https://github.com/BRUNDAVANAMSUREKHA/Registration-form/assets/122956099/5f016914-3146-462b-aca6-361f38b139c6)



## Installation

1. Clone the repository:
   
https://github.com/BRUNDAVANAMSUREKHA/Registration-form

2. Install dependencies:


cd user-registration-login
npm install

3. Set up MongoDB:


- Install MongoDB on your system if you haven't already.
- Start MongoDB service.

4. Configure environment variables:


- Create a `.env` file in the project root.
- Add the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/registration
  ```

5. Start the server:

npm start



6. Access the application:


Open your web browser and navigate to `http://localhost:3000`.




## Usage

- Register: Navigate to the registration page and fill in the required details (username, email, password).
- Login: After registration, navigate to the login page and enter your email and password to login.
- Error Handling: The system provides informative error messages for invalid inputs or login credentials.




## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add my new feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Create a new Pull Request.



## License

This project is licensed under the [MIT License](LICENSE).



## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [express-validator](https://express-validator.github.io/docs/)
