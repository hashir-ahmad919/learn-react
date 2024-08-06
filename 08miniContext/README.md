# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Summary of Context API

### First of all we create a Folder "context" in src folder

- We can create contexts for multiple things like login/regiter/user context.
- So we initially created a file "UserContext.js" inside the folder.
- We import react, and through that we can do is "React.createContext". Context gives you access to the provider(its basically providing you varibale). Every context we create is a provider
- We will thn wrap multiple components inside the context we created. So all the components inside that are warpped get access to the variables(Global).
- We now create a jsx file UserContextProvider. WE do so in order to wrap the components inside it.
- We create an arrow function. It takes a children(means whatever its getting display it as it is)
- We will now use UserContext.Provider . It wont work like this we'll also need to provide data(state/variable/apiCall) by name [user,setUser].
- Now use it inside the provider tag as prop(value{{user,setUser}}).
- Now we are done creating the store.
- We can now call it in App file n import it there and use it.
- Now we'll create some components and then call it inside App file and wrap it around the UserContextProvider.
- ProfileJsx : How data is accessed, LoginJsx: How data is send. We'll understand both.
- Inside each file we'll be using useState, useContext.

#### Login component:

- Starting with Login component, We created two inputs with a submit button. Onchange property of input, it'll get the values from the useStates(i-e: setUser, setPassword).
- We'll be using useContext hook here and pass UserContext(the JS one) we have imported in the file, and the name of the obejct we would use is "setUser".
- setUser: It's basically from UserContextProvider, going back there you'll see we've passed it in the props. If we need any value from the data so i only get it from the user. But if in the state [user, setUser] if we want to add values we can through this setUser.
- So thats why in useContext() hook we need to give context, so we can get setUser.
- Now if you've received setUser, we'll use e.preventDefault() inside handleSubmmit function. We do so incase by default value can go somewhere through the url or post. So to prevent we do so. and we pass the username, password to setUSer.

#### Profile component:

- Starting with Profile component, its quite easier here. Same what you did in Login component for useContext do it here too but for {user} this time.
- Put a condition if user exists thn Welcome the user with their username and vice versa

### Conclusion:

- You create context after that you also need a provider, which will provide the data
- Qs how to use it? simply wrap the components inside the provider
