# Rancid Tomatillos

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Continuous Improvement](#continuous-improvement)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Authors](#authors)

## Introduction
The primary goal of Rancid Tomatillos was to display movie data from multiple APIs in a user friendly way and to gain experience building an application from scratch using the React framework. As a user, you have the ability to view all movies from the API, as well as search for a specific title, and view additional information about the movie by clicking on a movie card.

### Motivation
The main motivation of this project was to gain experience building a React application, Cypress End-to-End testing, and React Router.

## Features
* [Movies Page](#movies-page)
* [Details Page](#details-page)
* [Search Functionality](#search-functionality)
* [Error Page](#error-page)
* [Loading Screen](#loading-screen)
* [Responsive Design](#responsive-design)

### Movies Page
When a user visits the website, they will see a display of all the movies from [this API](https://rancid-tomatillos.herokuapp.com/api/v2/movies). All the movie cards display the movie cover as well as a ranking out of ten for that movie.

<img width="1440" alt="Rancid Tomatillos movie display" src="https://user-images.githubusercontent.com/70297733/108141982-1973a200-7082-11eb-8f26-92d8571b7edd.png">

### Details Page
When a user clicks on any of the movie cards, they will see a new page which displays additional information about that movie. From this page, the user can click on the Home link in the header or they can click the back button in their browser to get back to the previous page. When the back button is selected, the movies page should display where the user scrolled to before selecting the movie.

<img width="1440" alt="Details page" src="https://user-images.githubusercontent.com/70297733/108142079-488a1380-7082-11eb-8441-1e359d960389.png">

<details>
  <Summary>Under the Hood</summary>
  <a href='https://www.npmjs.com/package/react-router-scroll-memory'>This</a> npm package was used to maintain the scroll history of the movies page.
</details>

### Search Functionality
From the movies view, the user can type into the search bar at the top of the page to search for a movie title. The page will automatically update to display only the titles that match what is in the search bar.

### Error Page
To maintain a direct and great user experience, we added an error page. The error page is designed to be dynamic to the type of error a user may encounter. Styling this page, we wanted to make it fun and direct.

### Loading Screen
In order to keep our user experience positive, we implemented a loading screen that will display while information is being retrieved from the API.

### Responsive Design
Responsiveness was a consideration while working on this project. See below for screenshots of the mobile friendly version of the website:

<p align="center">
  <img width="250" alt="Rancid Tomatillos movie display mobile view" src="https://user-images.githubusercontent.com/70297733/108142304-c1896b00-7082-11eb-9ce9-d41da5739893.png">
  <img width="250" alt="Details page mobile view" src="https://user-images.githubusercontent.com/70297733/108142346-d36b0e00-7082-11eb-8a10-4f71489f7288.png">
</p>

## Continuous Improvement
Throughout our project workflow, we found that our improvement was team-driven with solution-based problem solving and individual learning/teaching opportunities. Whenever there were areas for improvement, one team member had a solution and the desire to teach the other. This kept us moving at a great pace and developed our understanding of new technologies daily.

### Wins & Reflections
- **Teamwork & Communication**: Together we achieved our set sprint goals in an organized fashion with respect to our project board. Communication was transparent and respectful. Having the ability to relay information, thoughts, and ideas to one another during paired programming allowed a smooth process in development and productivity.
- **Workflow**: We found a great balance of paired-programming and individual work time. This allowed us to be extremely efficient and remain on task with what we planned to accomplish each day.
- **Exploring & Researching**: Any time we hit a struggle, we took the time to research and apply. Finding certain answers may not have been the exact ones, but we stepped out of our comfort zone exploring other `npm libraries` that catered to our specific needs and end goal.
- **Overall**: During this project, we learned a lot individually and as a team. We both feel that after completion of this project, we have a clear understanding of each learning goal and we had fun doing it!

## Technologies
React.js, React-Router, Cypress.io, Fetch, JSON  
Npm libraries: [scroll history](https://www.npmjs.com/package/react-router-scroll-memory), [html parser](https://www.npmjs.com/package/html-react-parser)

## Deployment
This website was deployed to Heroku through Heroku’s automated deploy pipeline. The API was previously deployed through Heroku by Turing staff.

[Rancid Tomatillos Deployment Link](https://rancid-tomatillos-nine.vercel.app/)

## Authors
[Alia Peterson](https://github.com/alia-peterson)  
<img src="https://avatars3.githubusercontent.com/u/70297733?s=400&u=f7e7c3682b498a90f005565b56b38a8ac985b053&v=4" alt="Ms. Peterson"
width="150" height="auto"/>

[Kevin Hartmann](https://github.com/kevinhartmann23)  
<img src="https://avatars.githubusercontent.com/u/68248071?s=400&u=1a8024a192ba58708505c2c7f4056679b4af65e0&v=4" alt="Kevin Hartmann Profile"
width="150" height="auto"/>
