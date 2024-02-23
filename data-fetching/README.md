# Data Fetching in React - A complete  Guide

## Introduction

When Fetching data in React, consider the following: 

- wrap the function to of fetching data in a `useEffect` hook.
- use the `useState` hook to store the data fetched, the `loading` and the `error` states.
- `async/await` approach is the cleanest approach to use
- wrapp the fetching functionality into a `try/catch and finally` block: 
  ```js
  setIsLoading(true)
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false)
  }
  ```
- when using the finally block, it means that the `isLoading` state will be set to `false` regardless of the outcome of the fetch request.