# Residential community app

This is a simple application made for a residential community. It's purpose is to make the important information flow between residents easier.

## Features

***Before listing the features, it is important to say that this version of the app is solely focused on the frontend part and serves as a prototype and an example of functionality. Therefore, it includes hardcoded dummy data and lorem text on certain pages. This is because the backend part is still in development, and when I finish and publish the app, dummy data will be replaced with real one. The app itself is in serbian language (cyrillic) because it will eventually be deployed to serbian speaking users, but I will list the pages here in correct order so you can compare them and click accordingly if you do not speak serbian. Features which do not exist right now but are planned to be added later are crossed out and marked with "(future)" after them.***

Now that being said, here is the list of features:

- Pages
  - Home
  - About us (Basic community info)
  - Announcements (Reports on gathering money for roof/elevator repairs, etc...)
    - Contains a list of short individual announcements which expand upon a click
    - Every announcement has it's own unique URL which allows users to share them with others easily
  - Useful information (Emergency telephone numbers and useful links to external websites)
    - Emergency numbers part includes police, ambulance and firefighters as well as various useful phone numbers (members which are logged in can also see the phone number and email of the president of the community)
    - Useful links part shows the list of various links to external websites regarding repairs, heating, electricity etc...
  - Gallery (Image gallery of the interior and exterior of the building and it's surroundings)
    - Contains a grid of images which open a modal when clicked, zooming the image and allowing you to cycle trough the whole gallery

- Sign in button
  - When clicked, it opens a modal with a sign in form
  - The sign in form has some basic validation, but it will be improved in the future when the backend authentication is implemented

- Accounts
  - Every appartment in the community has it's own account with username and password
  - They can sign in by using the "Sign in" button and entering the credentials
  - When they successfully sign in, they get access to:
    - Two more pages which let them track down their financial debt towards the community and download documentation
    - ~~Personal inbox which let's them communicate privately with the president of the community~~ (future)
    - ~~Commenting on public announcements made by the president of the community~~ (future)

- Mobile version
  - App interface is optimized for mobile phones and tablets using CSS media queries

## Dependencies

- React router v5
- Fontawesome SVGs

## Starting the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run this app, you need to have [Node.js](https://nodejs.org/) installed on your machine.

After installing Node.js, you need to execute two steps:

1. In the project directory you need to run:

    ### `npm install`

This will install all the dependencies that are needed for the app to work properly.

2. Then, you need to run:

    ### `npm start`

This will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

## What the app looks like
### Home
![Home](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/Home.png)
### Announcements
![Announcements](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/Announcements.png)
### Useful information
![Useful information](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/UsefulInfo.png)
### Gallery
![Gallery(1)](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/Gallery(1).png)
![Gallery(2)](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/Gallery(2).png)
### Sign In
![SignIn](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/SignIn.png)
### Mobile version
![Mobile(1)](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/Mobile(1).png)
![Mobile(2)](https://github.com/PavlePetrovic62/residential-community-app/blob/master/public/screenshots/Mobile(2).png)
