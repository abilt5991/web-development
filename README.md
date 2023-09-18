# **Asynchronous Programming in Javascript**

Asynchronous programming is a crucial aspect of JavaScript, allowing us to perform non-blocking operations such as network requests or file I/O without freezing the main thread of execution.

In this project, "Game of War", I have implemented 2 common ways of handling promises:
1. async/ await - to GET a new deck of cards
2. fetch and .then - to GET 2 new cards

Note: We can use either approach for both the GET calls. Just for practice, I have used both 'fetch & .then' and 'async/await'




1. async/awiat: 
It is a more recent addition to JavaScript (ES8). It provides a more readable way to work with promises. We can mark a function as "async", and within that function, we can use the "await" keyword to pause execution until a **promise is resolved**.
- If any error occurs during these operations, the code inside the try block is skipped, and the code inside the catch block is executed.
- The outer .catch() block can be used to catch errors that occur during the execution of fetch.
```
fetch( <URL> , {
        method : "GET"
    })
    .then(resp => resp.json())
    .then(data => {
      .....
})
```



2. fetch and .then
The fetch API is used to make network requests and returns promises. We can use the .then() method to handle the response.
- We use the fetch function to make an HTTP GET request to a specified URL.
- The first .then() uses **response.json()** to parse the response body as JSON.
- In the second .then() block, we handle the parsed data.
- The .catch() block is used to catch and handle any errors that may occur during the fetch operation.

```
async function getNewDeck() {
    try {
      let resp = await fetch(URL)
    } catch (err) {
      throw new Error("Someting went wrong");
    }
}
```


<img width="743" alt="Screenshot 2023-09-18 at 6 45 52 pm" src="https://github.com/abilt5991/web-development/assets/125937034/540bc245-6914-4a7f-a64d-3c2798ddc49f">

