// import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import App from "./routes/App"

const container = document.getElementById('app');

//  Create a root.
const root = ReactDOMClient.createRoot(container);

//  Initial render: Render an element to the root.
root.render(<App tab="home"></App>);

//  During an update, there's no need to pass the container again.
root.render(<App tab="profile"></App>)

// ReactDOM.render(<App></App>, document.getElementById('app'))