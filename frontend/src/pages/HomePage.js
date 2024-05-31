import React from 'react';


function HomePage() {
  return (
    <>
      <h2>Welcome to My Portfolio</h2>
      <article>
        <p>
          Hello and welcome to my Portfolio website for the final project of CS290. This project has me modifying a static website to have 
          it runs in the React framework. It also incorporates MongoDB in the backend to perform CRUD operations. 
          My career goals are to get a degree from Oregon State in computer science and then either enter the tech world or 
          continuing on to a Master's degree. 
        </p>
        <p>
          Technologies used in this website include:
        </p>
        <ul>
          <li>HTML</li>
          <p>
            HTML or HyperText Markup Language, is used for structuring content on the web. It is used to describe the structure and meaning
            of webpages.
          </p>
          <li>CSS</li>
          <p>
            CSS, or Cascading Style Sheets, is used for styling the presentation of a document written in HTML or XML. It enables 
            web developers to control the layout, appearance, and formatting of web pages. 
          </p>
          <li>JavaScript</li>
          <p>
          JavaScript is the language used for client-side code for web applications. However, can also be used for server-side programming.
          </p>
          <li>React.js</li>
          <p>
          React is a framework for writing frontend applications.  React applications are written in JavaScript with additional syntax 
          added by React. Applications in React are based around the concept of components, which are reusable units of UI. React creates 
          a component tree from the components in our app, and maps it to the real DOM tree that a browser renders.
          </p>
          <li>Node.js</li>
          <p>
            Node is a program that runs JavaScript programs, similar to how browsers run JavaScript program. 
          </p>
          <li>Express.js</li>
          <p>
          Express provides APIs for various common tasks that web applications need to do. Express allows the ability 
          to get, post, and delete data, and define the ports and routes that data will take. 
          In addition, can also serve static files, such as from a public folder, and create templates that dynamically build responses 
          that incorporate that data. And lastly, allows middleware to be used to handle requests made within the route the data takes.
          </p>
          <li>MongoDB</li>
          <p>
          MongoDB  is a document DBMS that does not use SQL. The format of 
          documents in MongoDB is BSON, which is a binary form of JSON. But the MongoDB API exposes the documents as JSON, and the JSON format 
          makes it very easy to use MongoDB in Node programs.
          </p>
        </ul>
      </article>
    </>
  );
}

export default HomePage;