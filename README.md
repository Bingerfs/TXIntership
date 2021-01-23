# Repositories exercise

This application was built using React. It's a basic frontend SPA with two domains: INDEX and Repositories. Repositories displays a list of retrieved users in cards and Index only contains a link to Repositores.

-------------------------------------------------------------------------------------
## Versions

NodeJS: 12.18.3                                                                             React: 17.0.1

------------------------------------------------------------------------------------
# Basic documentation provided by React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

-------------------------------------------------------------------------------------------

## Architecture

An attempt to implement a layered architecture was done, with more importance on ports and adapters, because of the lack of interfaces in javascript. The layers, outside in, are:

* Infrastructure (UI rendering, network, implementation of ports. ie: UserRestRepository, any component)
* Use Cases (i.e. UserService)
* Entities (i.e. conceptual interface contract for UserRepository and User entity)

Most of these can be seen in services/Users. Two repositories were implemented. One to retrieve users right out the file and the other as a request to an API. Conceptually, these two  implement the same interface contract and any other implementation should implement a *getUser* method too.

-----------------------------------------------------------------------------------------------

## Patterns

The main pattern used in this application is container and presentational components. Clearly seen in RepositoriesContainer and RepositoriosList.

----------------------------------------------------------------------------------------------
