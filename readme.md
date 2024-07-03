# Fullstack Blog Project

This project is a comprehensive demonstration of a full-stack blog application using Express.js, MongoDB, and Passport.js for user authentication. It includes custom security configurations, user management, and role-based access control.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Implementation Overview](#implementation-overview)
4. [Project Directory Structure](#project-directory-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Project](#running-the-project)
7. [Usage](#usage)
8. [Dependencies](#dependencies)
9. [Contributing](#contributing)
10. [Author](#author)

## Project Overview

This project showcases a full-stack blog application with features such as user authentication, post creation and management, commenting, and liking posts. It uses Express.js for the server, MongoDB for the database, and Passport.js for authentication. The project demonstrates how to build a robust blog platform with essential functionalities and a user-friendly interface.

### Key Features

- **User Authentication**: Implements user registration, login, and logout functionalities using Passport.js.
- **Post Management**: Allows users to create, edit, and delete blog posts. Each post can include a title, content, and optional images.
- **Commenting System**: Enables users to add, edit, and delete comments on blog posts.
- **Liking Posts**: Provides a feature for users to like and unlike blog posts.
- **Role-Based Access Control**: Demonstrates how to assign roles to users and restrict access to certain actions based on user roles.
- **Custom Error Handling**: Includes middleware for handling errors and displaying user-friendly error messages.
- **File Uploads**: Supports image uploads for blog posts using Cloudinary.

### Implementation Overview

- **Server Configuration**: Configures the Express.js server and connects to MongoDB using Mongoose. Sets up middlewares for session management, authentication, and error handling.
- **Authentication**: Uses Passport.js for local authentication strategies, including user registration and login.
- **Controllers**: Contains controller files for handling authentication, post management, comments, and likes.
- **Models**: Defines Mongoose schemas and models for User, Post, Comment, and Like entities.
- **Routes**: Sets up Express.js routes for authentication, posts, comments, and likes.
- **Views**: Uses EJS for rendering dynamic HTML pages for various parts of the application.

### Project Directory Structure

```plaintext
Fullstack-Blog-Project
├── .env
├── app.js
├── config
│   ├── cloudinary.js
│   ├── multer.js
│   ├── passport.js
├── controllers
│   ├── authController.js
│   ├── commentControllers.js
│   ├── likeController.js
│   ├── postControllers.js
│   ├── userController.js
├── middlewares
│   ├── auth.js
│   ├── errorHandler.js
├── models
│   ├── Comment.js
│   ├── File.js
│   ├── Like.js
│   ├── Post.js
│   ├── User.js
├── package-lock.json
├── package.json
├── routes
│   ├── authRoutes.js
│   ├── commentRoutes.js
│   ├── likeRoutes.js
│   ├── postRoutes.js
│   ├── userRoutes.js
├── views
│   ├── editComment.ejs
│   ├── editPost.ejs
│   ├── error.ejs
│   ├── home.ejs
│   ├── login.ejs
│   ├── newPost.ejs
│   ├── partials
│   │   ├── footer.ejs
│   │   ├── header.ejs
│   ├── postDetails.ejs
│   ├── posts.ejs
│   ├── profile.ejs
│   ├── register.ejs
```

git clone https://github.com/username/fullstack-blog-project.git
cd fullstack-blog-project

MONGODB_URL=your_mongodb_url
CLOUDINARY_URL=your_cloudinary_url
SESSION_SECRET=your_session_secret

# Open your browser and navigate to http://localhost:3000.

## Usage

- \*\*Register a new user or log in with existing credentials.
- \*\*Create, edit, and delete blog posts.
- \*\*Add, edit, and delete comments on posts.
- \*\*Like .

## Dependencies

- \*\*Express.js
- \*\*MongoDB
- \*\*Mongoose
- \*\*Passport.js
- \*\*EJS
- \*\*Cloudinary
- \*\*Method-Override
- \*\*Connect-Mongo
- \*\*Express-Session
- \*\*Contributing

# Feel free to contribute to this project by submitting pull requests or opening issues. For major changes, please open an issue first to discuss # what you would like to change.

## Author

### Karuna Sagar
