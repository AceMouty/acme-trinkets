# Acme Trinkets

After completing this project you will understand how to

- use EJS with a Node application
- create and load EJS templates
- provide server data to EJS templates
- dynamically build out UI elements using dynamic data

### Prerequisites

- Section 33: Creating Servers with Express
- Section 34: Creating Dynamic HTML with Templating

## Introduction

We learned that we can create JavaScript servers using Express and
that we can also create dynamic web pages using EJS. In this
exercise we will test our knowledge and understand of the material
by creating a basic website using Express and EJS

## Instruction

- [ ] Please fork and clone this repository. Regularly commit and push your code as appropriate.
- [ ] Before you begin work, open up the project and get familiar
      with the pre-existing code. Be sure to read carefully

### Project Layout

- index.js: Server file where we register EJS and also create routes
  for our application
- data.js: File that contains our data to be used with the project
  that we will create elements with
- views/
  - home.ejs: The home page of the website
  - trinket.ejs: The details page for a specific trinket

## Install and run the project

After opening the proect in VS Code (or any editor)
open up a terminal and, navigate to the project folder
and install the project by running

`npm i`

From there you can then run the project by running the command

`npm run start:dev`

## Home.ejs

We want to be able to dynamically build out
cards for EVERY trinket we have in our `viewData`
array.

To do this replace the single
card with a for loop that loops over the `viewData`
array and replace the hard coded data with dynamic data

- set the image src to the trinket `imageUrl`
- replace the hard coded `Trinket Name` with the
  dynamic trinket `name`
- replace the hard coded price with the dynamic
  trinket `price`
- set the href of the shop button to `/product/id` where
  id is the dynamic trinket `id`

## Trinket.ejs

We want a way to show the details of a selected trinket

- provide the image src the trinket `imageUrl`
- fill in the trinket `name`
- fill in the trinket `price`
- add in the trinket `description`

## Results

Home page
![Home page](/artifacts//home.png)

Details
![Details page](/artifacts/details.png)
