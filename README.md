# meetup App

## Description

A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## About the project meetup(features, user stories and scenarios)

### FEATURE 1: FILTER EVENTS BY CITY

### USER STORY: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
GIVEN user hasn’t searched for any city, WHEN the user opens the app, THEN the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
GIVEN the main page is open, WHEN user starts typing in the city textbox, ThEN the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
GIVEN the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing, WHEN the user selects a city (e.g., “Berlin, Germany”) from the list,THEN their city should be changed to that city (i.e., “Berlin, Germany”).And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

### USER STORY: As a user I should be able to show/hide the details of an event so that I will able the see the details of only the event I am interested in.

SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
GIVEN the user is on another page, WHEN the user opens the events page, THEN the event’s details will all be collapsed.

SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS
GIVEN user hasn’t yet expanded an event’s detail, WHEN user clicks a button, THEN the event’s details will be expanded.

SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS
GIVEN the event’s details has been expanded, WHEN user clicks a button, THEN the details will be collapsed

### FEATURE 3: SPECIFY NUMBER OF EVENTS

### USER STORY: As a user, I should be able to specify the number of events I can view so that I can limit the number of events I view.

SCENARIO 1: WHEN USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER
GIVEN the user hasn’t specified the number of events, WHEN he/she opens the events page, THEN 32 events will be displayed by default.

SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE
GIVEN the number of events displayed is 32, WHEN the user specifies a number, THEN that specified number of events will be displayed.

### FEATURE 4: USE THE APP WHEN OFFLINE

### USER STORY: As a user, I should be able to use the app when I am offline, so that even when I am not connected to the internet and i can still view the events.

SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION
GIVEN that the user is offline, WHEN he/she opens the app, THEN he/she can see the events he last viewed.

SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)
GIVEN the user is offline, WHEN the user changes the settings, THEN the app will display an error.

### FEATURE 5: DATA VISUALIZATION

### USER STORY: As a user, I should be able to visualise a chart of events in each city so that I can see the number and type of events by city.

SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY
GIVEN the user is on the app, WHEN he navigates to the page containing the chart, THEN he should be able to see which events are organised by cities.

### FEATURE 6: ADD AN APP SHORTCUT TO THE HOME SCREEN.

### USER STORY: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
