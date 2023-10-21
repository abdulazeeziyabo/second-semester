## Question
Implement an API fetch of your GitHub portfolio, show a page with a list of all your repositories on GitHub, and create another page showing data for a single repo clicked from the page showing all repos using nested routes while using all the necessary tools in react. Implement an Error Boundary (show a page to test the error boundary) and 404 pages. Good UI and Designs are important.</p> 


# Technologies/Packages used
- # React + Vite
- # React router
-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# GitHub  API  Repository Portfolio
<p>A simple GitHub API fetch app built with React. This app shows all my GitHub repositories in a page and upon a click on 'show more' show individual details on each repository. The app also has an error boundary page when something goes wrong and a 404 page when a wrong page path is entered. 

# Setup
I setup my app using Vite and deleted files and folders not wanted. I created  views, components and layouts folders. The views folder contains the  userElements and repositoryDetails components of the site while the components folder contains the Navbar.jsx, Notfound.jsx, ErrorBoundary.jsx, ErrorTesting.jsx, FallBack.jsx and Loader.jsx componenets. The layout folder contains the dashbord component. All these components were rendered in the main.jsx component.

# The API fetch
 To make the API call I used the useEffet hook which takes two parametres ( a function and a dependency all) and this was used with the useState hook. I wrote a function called userElements to get data from my GitHub repos API and then saved it in a state called userElement which I initialized as an empty array. To find your own GitHub repo data, you can use this URL and replace "yourusername" with your GitHub username: https://api.github.com/users/yourusername/repos

 A dependency array is always needed when useEffect has to be used in React to control when the effect (in this case an API call) should run and also prevent an infinite loop of component renders.

I then mapped over the data that has been fetched and saved in userElement to be able to render individual repositories.

# Routing and Error Pages
To be able to create another page that shows single a repo with more details, the react-router-dom needs to be used. I used the createBrowserRouter, in the main.jsx file which contains the code that renders the app, I created the router variable which will contain the route and paths to the various pages including an error page and the 404 page.

I implemented the error page using errorBoundary component. In order to implement nested routes, I rendered the Outlet component from the reac-router-dom. To link to other pages from one component to the other, I used the <Link to=""/> element, from the react-router-dom which acts just like an anchor tag <a href=""> in regular HTML.

# Viewing a single repo
I made API calls for single repositories by destructuring id from useParams from the react-router-dom and then using it in the API call URL. The useParams hook returns an object that contains the id of each child from the parent URL.

Remember from the main.jsx file, :id was passed as a path for the repositoryDetails component. Meaning each id holds a unique value (in this case the repo name) which will be added to the URL that calls a single repository's API. I saved the data from single repositories in state and named it details.

In my design, I wanted to display the live site of each repo if it was available and also the number of branches the repo had so I made other API calls that returned deployment and branch information which I saved in state as objects and named deploy and branch respectively. I made all of these API calls in individual useEffect hooks.
I also did minimal styling ensuring great constrast.






