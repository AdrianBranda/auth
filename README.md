# Universal Data Management and Control Platform

This web platform provides a solid foundation for data management, device control, and information visualization. With its modular architecture and robust backend, it can be easily adapted to a wide variety of use cases, from environmental monitoring to home automation or inventory management.

## Key Features

* **User Authentication:** Complete registration and login system with enhanced security through password encryption. This ensures that only authorized users can access the platform.
* **Versatile Dashboard Interface:**
    * Real-time data visualization: Presents dynamic data, such as sensor readings or device statuses, in a clear and concise manner.
    * Interactive control: Allows users to interact with connected devices or systems, sending commands or adjusting settings.
    * Adaptable slider: A flexible slider component that can be used to navigate through datasets, items, or configurations.
* **Scalable Backend with Node.js and Express:** The server is built with modern web technologies, making it easy to extend and customize to meet specific needs.
* **Flexible Data Storage:** The SQLite database provides a lightweight and easy-to-configure storage solution, ideal for prototypes and small-scale applications. It can be easily replaced with other database systems (such as PostgreSQL or MySQL) for larger applications.
* **Integrated Security:** Security measures (such as `helmet` and `cors`) have been implemented to protect the application from common vulnerabilities and ensure secure communication.

## Potential Use Cases

The flexibility of this platform makes it suitable for a wide range of applications, including:

* **Environmental Monitoring:** Collection and visualization of data from temperature, humidity, air quality, etc., sensors.
* **Home Automation:** Control of lights, thermostats, appliances, and other home devices.
* **Inventory Management:** Tracking stock levels, product locations, and other inventory-related information.
* **Alarm Systems:** Monitoring security sensors and triggering alerts.
* **Industrial Process Control:** Supervision and control of machinery and production processes.
* **Educational Systems:** Interactive presentation of information and control of simulations.

## Technologies Used

* **Backend:**
    * Node.js
    * Express
    * SQLite
    * bcryptjs
    * jsonwebtoken
    * helmet
    * cors
* **Frontend:**
    * HTML
    * CSS
    * JavaScript

## Project Structure


backend/
│   ├── controllers/
│   │   └── authController.js  # Manejo de la autenticación de usuarios
│   ├── middlewares/
│   │   └── authMiddleware.js # Protección de rutas con JWT
│   ├── models/
│   │   └── User.js           # Modelo de datos para los usuarios
│   ├── routes/
│   │   └── authRoutes.js     # Definición de las rutas de autenticación
│   ├── database.js           # Configuración de la base de datos
│   └── server.js             # Punto de entrada de la aplicación
├── frontend/
│   └── public/
│       ├── css/
│       │   ├── dashboard.css # Estilos del dashboard
│       │   ├── index.css     # Estilos de la página de inicio
│       │   ├── slider.css    # Estilos del slider
│       │   └── styles.css    # Estilos generales
│       ├── js/
│       │   ├── dashboard.js  # Lógica del dashboard
│       │   ├── index.js      # Lógica de la página de inicio
│       │   ├── slider-data.js # Datos para el slider
│       │   └── slider.js     # Funcionalidad del slider
│       ├── dashboard.html    # HTML del dashboard
│       └── index.html        # HTML de la página de inicio


## Installation Requirements

* Node.js installed
* npm (or yarn) installed

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone <REPOSITORY_URL>
    ```

2.  **Navigate to the backend directory:**

    ```bash
    cd auth/backend
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage Instructions

1.  **Start the server:**

    ```bash
    npm start # or node server.js
    ```

2.  **Access the application:**

    * Home page: `http://localhost:3000/index.html`
    * Dashboard: `http://localhost:3000/dashboard.html`

## API Routes

* `POST /auth/register`: Registers a new user.
* `POST /auth/login`: Authenticates a user and returns a JWT token.

## Next Steps

* Integration with more types of sensors or devices.
* Implementation of advanced charts for data visualization.
* Support for multiple users and permissions.
* Development of a more comprehensive API for platform interaction.
* Addition of unit and integration tests to ensure code quality.

## Author

Your Name

## Contact

adrianbranda31@gmail.com