# remote-components Example

Before Module Federation existed, I experimented with many ways of stitching micro apps into a micro frontend architecture. This was the most successful one and in some ways works very similarly to Module Federation, loading JS and CSS files at runtime and then mounting the React Component. (Note: this solution could easily be adabpted to use the router like the above solution.)

## Install

- Run the following 
  ```
  yarn install
  ```

## Run

- Run the following  
  ```
  yarn start
  ```
- Open the following in your browser
  - **app1:** [localhost:3001](http://localhost:3001/)

## Details

When I created this micro frontend architecture solution, Module Federation didn't yet exist. This is the solution I created. See hybrid-remote-components for an even better solution.
