# GraphiQL App
![](https://img.shields.io/badge/react-087a9f) ![](https://img.shields.io/badge/redux-764abc) ![](https://img.shields.io/badge/MUI-409fff )  ![](https://img.shields.io/badge/typescript-3178c6) ![](https://img.shields.io/badge/css-modules-ffffff) ![](https://img.shields.io/badge/axios-7a39e3) 
![](https://img.shields.io/badge/jest-ac3e5a) ![](https://img.shields.io/badge/yup-f75748 ) 


GraphiQL is a playground/IDE for graphQL requests, working with a user-specified open GraphQL endpoints. This app also includes authorization and authentication capabilities, ensuring access to the tool is restricted to authorized users.

Implementation of [RS School](https://rs.school/) React 2023 Q4 final task by command of [Katsiaryna Talkachova](https://github.com/kotsiaryna) (team lead), [Fedko Zhenya](https://github.com/fedko-zhenja) and [Ivan Timoshkin]( https://github.com/amberlynn364).

[Short video review](https://www.youtube.com/watch?v=6lRm-cs9J3Y) in russian.

### Features

*  Support any open, user-specified GraphQL API that supports CORS
*  User authorization and authentication (using Firebase). Access to the playground only for authorized users
*  Client-side validation (Jup)
*  Request editor, supports prettifying
*  JSON viewer for response, read-only
*  Headers and variables editors, to send user headers and variables
*  Documentation for selected API
*  Errors from API side are displayed in the user friendly format
*  Localization (EN / RUS)
*  Test coverage 82% (stmts)

### Deploy

[TRY IT](https://react-rangers.netlify.app/main)

### Local install and run

* Clone this repo: ` $ git clone https://github.com/kotsiaryna/graphiql-app.git`
* Install dependencies: `$ npm install`
* Start server:` $ npm run dev`

  The app wil rum [on local server](http://localhost:5173/)



