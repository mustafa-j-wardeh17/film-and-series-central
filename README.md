# Film & Series Central

Welcome to Film & Series Central – your ultimate destination for discovering, watching, and reviewing movies and series from around the world. This web application leverages modern technologies to provide a seamless user experience while exploring the vast landscape of cinematic content.


## Features

- **Browse Movies and Series**: Explore a diverse catalog of films and series across various genres, languages, and categories.
- **Search Functionality**: Easily find your favorite titles using a powerful search feature that filters results by genre, language, and more.
- **Detailed Information**: Get in-depth details about each title, including descriptions, ratings, trailers, and more.
- **Responsive Design**: Enjoy a mobile-friendly interface that looks great on any device.



## Technologies Used

- **Frontend**: Built with **Next.js 14**, offering server-side rendering and a fast user experience.
- **Backend**: Utilizes **Prisma** as an ORM to interact with the database, making data management intuitive and efficient.
- **Database**: Hosted on **Supabase**, leveraging PostgreSQL for robust and scalable data storage.
- **Deployment**: Easily deployable on platforms like Vercel, ensuring quick and reliable access for users.


## Database Schema

The backend uses **Prisma ORM** to manage the database schema. This includes models for **movies**, **series**, and other key entities in the site.

<p>Below is a visual representation of the database schema:</p>

<img src="./public/schema.png" alt="Database Schema" style="width:100vw; height:125vh;">

<p>This image gives an overview of the relationships between different models in the system.</p>



## Installation

To get started with Film & Series Central locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mustafa-j-wardeh17/film-and-series-central.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd film-and-series-central
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**: Create a .env file in the root directory and configure your database connection string and other necessary variables.

5. **Run the development server**:
    ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! If you’d like to contribute, please fork the repository and create a pull request. Ensure that your code adheres to the project's coding standards and passes all tests.

## Acknowledgments

- **Prisma** for making database interactions easy and efficient.
- **Supabase** for providing a powerful backend solution.
- **Next.js** for enabling a smooth and performant frontend experience.
