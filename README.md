# Job Search Portal

## Deployed Link:- https://jobapply.vercel.app/

## Github API's base url:- https://api.adzuna.com

## Table of Contents
- [Introduction](#introduction)
- [Assignment Overview](#assignment-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributors](#contributors)
- [License](#license)

## Introduction

Welcome to the Job Search Portal, a web application that helps users find job listings based on their preferred programming language. This project is designed as part of an assignment and showcases various features like user authentication, job search, application submission, and more.

## Assignment Overview

This project was completed as part of a 1-day assignment. The main goals were:

- Implement login/signup functionality.
- Use local storage to maintain user sessions.
- Create a landing page for selecting a programming language.
- Fetch job listings from the GitHub Jobs API.
- Display job listings and allow users to view details.
- Enable users to apply for a job with their details and resume.

## Features

- User authentication and session management.
- Landing page to select a programming language.
- Job search using the GitHub Jobs API.
- Detailed job listings with categories, company details, and descriptions.
- Application form for users to apply for a job.
- Success page to confirm the application submission.

## Tech Stack

This project is built with the following technologies:

- React
- Redux (for state management)
- React Router (for routing)
- Styled-components (for styling)
- Local Storage (for session management)
- Chakra-Ui (for ui liabrary)
- axios (for the api request)

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run start` to start the development server.

## Usage

1. Visit the landing page and select your preferred programming language.
2. Explore job listings and click on a job to view details.
3. Apply for a job by filling out the application form.
4. Review the application details on the success page.

 ## Routes

- Landing Page: `/`
- Login Page: `/login`
- Signup Page: `/lsignup`
- Job Listings: `/jobs`
- Job Details: `/jobs/:jobId`
- Application Form: `/apply/:jobId` (Private Route)
- Success Page: `/success` (Private Route)

## Screenshots

![Landing Page](https://github.com/Shoaib20-1998/Quabd-Group-Assignment/assets/112754545/c0bf0e64-4c61-4d62-82b0-49c35a73da16)

![Job Listings](https://github.com/Shoaib20-1998/Quabd-Group-Assignment/assets/112754545/7e0a3faa-304d-4676-9139-b9d950864905)

![Job Details](https://github.com/Shoaib20-1998/Quabd-Group-Assignment/assets/112754545/25d62cb5-db9d-4000-8095-f18b3fc7ac2c)

![Application Form](https://github.com/Shoaib20-1998/Quabd-Group-Assignment/assets/112754545/ae14181d-c685-481c-a6d5-10d41eddb2cd)

![Success Page](https://github.com/Shoaib20-1998/Quabd-Group-Assignment/assets/112754545/f0d9e77c-84bc-47ab-b1a1-65d96528fe3e)


## Contributors

- Shoaib Mansuri (me)


## License

This project is licensed under the [Your License Name] License - see the [LICENSE.md](LICENSE.md) file for details.
