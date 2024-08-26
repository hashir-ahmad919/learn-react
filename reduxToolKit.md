# todo redux Toolkit notes

## Background Knowledge:

In past we used to have redux and later on it got changed to redux tollkit(RTK) which we use now adays. Even before redux we used to have a FLUX

Flux architecture was designed by Facebook. Because they also used to have state management issues.

Dataflow is important how we get values from the store and how we set/update the values. like in context API we used to have spread operator if we wouldn't be using that means we would over write the values un intentionally. i-e why in FLUX they were much focued on data flow. And also they were not able to be so good at it.

Later on 2015 onwards i guess there was a react conference, where they introduced Redux a better version of FLUX.

Main points were:

- One store only there should exist.
- State should be read only.
- Never mutate or modify your state.
- Changes in store should be done through functions only. Functionilty should be pass on only through reducers.
- It works on any JS apps not only react.

With the passage of time it was hard setting up the redux even more time consuming thn contact API. So Redux Toolkit came into being to make the process much easier. It included batteries means it was giving a nice and easy flow and most of the work used to be managed by itself.

Main points:

- Easy way to setup a store.
- Built-in middlewares.
- Has a STORE, global variable in simple wording.
- Reducer: Anything you want to change, control/update in auth store, or any store. Basically the functionality part is handled here.
- It has two methods: useSelector(): When you want to select a value from the store , useDispatcher() when you want to send values.

# Lets get started with redux toolkit:

Some people will suggest to create store inside app or create folder and all. We will create an "app" folder inside that we create "store.js" file.

- In storeJs we import "configureStore" from reduxjs/toolkit. and export a variable "store".
- Create a folder features n inside create another "todoSlice.js". we import
  createSlice, nanoid(for generating unique ids).
- Create an initial state we created an object.
- create a slice now. Slice is a bigger version of reducer. And reducer is nothing but a fucntionality.
- Inside each slice we have a name string, initial state and reducers. For instance we have addTodo, removeTodo. Inside each we have a "state","action".
- state: it gives you access to all the values of initial state, like it gives you info related to current situation.
- action: like fro remove todo we will need something a value its given through action.
- So we add an object inside "todo" it has an id which is generated through "nanoid" and text is generated through "action.payload".
- No we simply do state.todos.push(todo) it will update the current state.
- Same practice is done inside removeTodo. we override the value of state.todos by filtering the value that doesnt match.
  - Now we need to export and it doesnt export like the normal way. We have to export each method like addTodo, removeTodo from todoSlice.actions. It would be handy in the components
  - Also for store we need to export todoSlice.reducer means the store wont update values from anywhere. Only register reducers would have the ability through which i would update the values.

# We create a component folder

- Inside a component folder we create two files "AddTodo" and "Todos"
- In AddTodo we are basically adding data into the store means we'll be using useDispatcher to send data
- useDispatcher and useSelector are react base, they're wireups how redux will be used in react.
- Working of Dispatch: Dispatch does changes in the store with the help of a reducer
- Now as we have previously created todoSlice inside feature folder so we can use it inside dipstach i-e why we have individually exported each function so we can take out individual reducer.
- Inside dispatch we use addTodo() and if you see inside addTodo we have "action.payload", in past we used to manually add it. Now we can simply call the reducer pass on any value inside and action payload works itself we donot need to worry about that.
- Now inside Todos file we will be basically lisiting our todos and also option for deleting todos. So we import use Selector for extracting data from the store and dispatch for manupluation and removeTodo reducer
- we declare a variable of useSelector and also used dispatch.
- onClick we can only give reference not call the function so we use callback.

# Conclusion:

- Redux and react-redux are two diff things. Redux is core library and react-redux is implemenation of it wiring it up so react can interact with redux.
- We always start with a store, normallly we have single store but in more complex projects we might have multiple(2) stores exeption case. So we have single source of truth means single store.
- All we need is configure store which has an object, here we have single property it could have multiple too. We cannot update value out of no where, as its not the right data flow. For data flow it wants awareness that where we have the reducers.
- For thath we have feature folder and todo inside we have todoSlice. We use the method createSlice, we need: name, initialState,list of reducers. For that we decalred initial state and its an arrary.
- Now we can decalre our reducers but for complex projects we'll simply import from another file the functions and not write the entire function here.
- In each function we have a state and action. in state we get the updated state value of the store and action we get action payload. nanoid is passed to the id and to texxt we have action payload. We have state access so just push it simply. In past it was not that simple we had to take each value from the array spread it and then push it.
- Hoemwork do the update part yourself.
- Now we export each reducer we have created, and also the main source
- Now we have components folder and we have todos and addTodo files in which we either send or receive value, WE use dispatch and the imported reducer like addTodo we pass it inside the dispatch and we use selector for shwoing all the values
