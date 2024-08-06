# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Summary

- First of all we did is in Layout component we used an "Outlet"
- - Means the components im using in here are fixed and those not mentioned/ used here can be changed
- - By using Outlet, through react router we can do nesting (like we did in main.jsx file)
- - Check mainJsx now we have wrapped the other components inside Layout component.
- - If there's no layout it wont render and vice versa.

- Next You've to do is create a router using "RouterProvider"
- - Its like a wrapper and it requires a router.
- - There are two ways to create a router
- - If you like to pass it in array you can use the first one.
- - If you find it confusing, use the second method "createRoutesFromElement".
- - The good thing in second method is you can nest any component Just be adding a closing route tag and do nessting.

- We also saw how we can take dynamic values
- - In main (path="user/:userid") userid or id thn you need to use the same name in the component you're using(i-e : Github).
- - Wherever the element is loading you need to extract it with the same name (i-e: userid)
- - We'll be using useParams() hook "Funciton se he functionality ati hy".

- For optimization we used Loader concept where we're having Api calls
- - In the main file we took loader, made a method "githubInfoLoader", and laoded the element(i-e: Github.jsx).
- - We saw here in Github component how used basic useEffect(), and also through Router also "githubInfoLoader".
