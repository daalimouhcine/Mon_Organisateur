# Gestion des réservations des salles des fêtes

This project is a web application for managing reservations for party rooms in Morocco. It allows organizers to create their presence on the web to improve their business, and allows clients to browse and book party rooms based on location or city. Each organizer can post photos and a detailed description of their work, giving clients a wide range of options to choose from.

## Technologies

- HTML
- CSS
- Yarn
- TypeScript
- ReactJS
- Tailwind
- PHP (OOP/MVC)
- API
- MySQL
- Cloudinary
- Axios
- Date-fns

## Installation instructions

To install and run this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `yarn install`.
3. Set up the database by running the SQL script in the `database` folder.
4. Set up the API by configuring the `api/config.php` file with your database credentials.
5. Set up the front-end by configuring the `src/config.ts` file with your API URL.
6. Start the API by running `php -S localhost:8000 -t api`.
7. In a separate terminal window, navigate to the project directory and start the front-end by running `yarn start`.
8. The project will be available at `http://localhost:3000`.

## Troubleshooting

If you encounter any issues while installing or running the project, try the following steps:

- Make sure you have all of the required software installed on your machine.
- Check the dependencies listed in the `package.json` file and make sure you have them installed.
- Check the `config.php` and `config.ts` files to ensure that they are correctly configured with your database and API settings.
- Make sure that the MySQL server is running and that you can connect to it using the specified credentials.
- If you are still having issues, try searching online or reach out to the project maintainer for assistance.
