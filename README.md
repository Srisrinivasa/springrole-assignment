# React Assignment

## Description

An application to get user data.

## Getting Started

### Dependencies

- React
- Redux
- Bootstrap
- Webpack, Webpack-dev-server

### Installation

- Run `git clone https://github.com/Srisrinivasa/springrole-assignment.git`
- Run `cd springrole-assignment/`
- Run `npm install`
- Run `npm start` and open `localhost:8080` in browser

## Authors

Sri Sathwik

## Top level directory layout

    .
    ├── config                                  # Configuration files (eg. webpack)
    ├── src                                     # Source files
    │   ├──── app
    │   │     ├──── features
    │   │     │      ├──── core
    │   │     │      │      ├──── actions       # Contains root action creator
    │   │     │      │      └──── reducers      # Contains root reducer
    │   │     │      │ 
    │   │     │      ├──── [feature name]
    │   │     │      │     ├──── actions        # Contains Action creators
    │   │     │      │     ├──── components     # Contains View part
    │   │     │      │     ├──── assets         # Contains static data (eg. Constants.js)
    │   │     │      │     ├──── reducers       # Contains reducers
    │   │     │      │     └──── index.js       # Feature main file
    │   │     │      │     
    │   │     │      └──── [feature name]
    │   │     │            .
    │   │     │            .
    │   │     │            .
    │   │     │
    │   │     ├──── routes                      # Contains routes
    │   │     └──── store                       # Contains redux store(application state)
    │   │
    │   │     
    │   ├──── index.html                        # HTML file
    │   └──── index.js                          # Entry file
    │
    ├── .babelrc
    ├── package.json
    ├── README.md
    └── yarn.lock