this web app will show after deployment: [https://ermapsh.github.io/react-Textutil-project/](https://ermapsh.github.io/react-Textutil-project/)

# React js Things

in this how i learn react js, thats all things are in this md file

## Acknowledgements

- [good teacher for react js](https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt)
- [create readme file using simple website](https://www.youtube.com/watch?v=Rtpu2cWz7W8)
- [Website for readme](https://readme.so/)

## Software are use for react js

Software are use for react js is node js.
after installing we directly create sample react js application in js
using [npx create-react-app [folder name]], after that we want to run this
application using [npm start], and application run on localhost
everytime we use [npm run build] cmd for using nodejs

## Property and property Types :

Prop are send form app.js to components files
using shortcut from react extension is easy to implement a code.
we can set prop types as like that:

we can set prop-types using Proptyeps module
if specific propType is required then we can use isRequired

Navbar.propTypes = {
about.propTypes: string.isRequired,
title.propTypes: string
}

if we want default prop value
Navbar.defaultProps = {
about.propTypes: string,
title.propTypes: string
}


## How to set State and change state, Handle Event
- we use state hookd from react 
- we cant change state or constant variable like normal varibal, if we wan't to change then use change state updation.
- like see < const [initialstate, initialstatechanged] = useState("Here this string is default value of initialstate, its may be string, int, float, boolean, object etc.") >
- we can change initialstatechanged manually like < initialstatechanged("here the something that u
want to change") >

## Adding Logic in UtilsText
- we add one more button for lowercase text.
- adding preview for text that we paste/enter.
- count word in string, count character in string and return how many time(minutes) for no of words to read in minutes

## In Excercise1
- i add copy to clipboard system in our web application
- using state varible (type of hook) we can develop a web app

## in Excercise 2
- Dark mode enable disable fuction using hooks
- add some fuction in textfrom
- modified dark theme
- Adding + Auto Dismissing Alert Messages
- adding different themse and do small change in realeted to No of words in text
- Changing title dynamically & adding favicons to TextUtils
- React Router Setup (exact path is good way in ur app for ur endpoint)


## NPM Deployment in github or free hosting
- [yt video](https://www.youtube.com/watch?v=Fi75tq9JikI&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=17&t=4s)
- [deployment site](https://cra.link/deployment)

## hosting using digital ocen
- [yt video of hosting](https://www.youtube.com/watch?v=YYVY1bPHaWE&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=18) 
