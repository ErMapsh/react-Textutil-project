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

## Props and propTypes :

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
