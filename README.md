# cs465-fullstack
## Architecture

The development of this application involved the use of the MVC (Model View Control) design pattern and the MEAN (MongoDB, Express, Angular, Node) development stack to create a flexible, scalable, extensible (IBM, n. d.), and modularized application which meets the provided requirements.  Modularizing the full-stack architecture of the application into controller, model, and view components will make our code more reusable within the application (GeeksForGeeks, 2024).  The use of MongoDB as our back-end database ensures flexibility and scalability and enables the web application to effectively handle varying degrees of company growth (MongoDB, 2025).  The integration of the Express framework into our application architecture will facilitate request handling while effectively connecting our database to our front-end (GeeksForGeeks, 2023).  Our use of the Angular framework for the front-end of our application will assure that our user interface is dynamic and interactive through seamless communication with our back-end (MongoDB, 2025).  Our use of NodeJS to run Javascript code will enhance the speed and scalability of our application while assuring a simple and expedient development process (GeeksForGeeks, 2024). 

This project uses Angular as a front-end framework for the administrative interface while leveraging the power of express as our back-end framework for the entire application.  The Angular framework’s component-based architecture, two-way data binding, and comprehensive routing (Jain, 2024) make it an excellent choice for the administrative user interface.  The Express aspect of our project architecture uses server-side functionality and APIs to facilitate what takes place beneath the interface from the perspective of end users.  The strategic use of Angular as a front-end framework and of Express as a backend framework enables us to leverage the capabilities of both of these powerful frameworks in the ways for which they were intended.  The end-result is an effective, intuitive, and scalable application ideal for the tourism package sales activities of Travlr Getaways.


## Functionality

JSON effectively ties together the frontend and backend development by holding library items similarly to how the non relational MongoDB database does - by storing key-value pairs of important data accompanied by labeling data used to reference it.  For example, the key “Name” might be associated with the string value “Emilio”.  This is essentially the same way that data is stored in MongoDB, though the structure of a MongoDB data store allows for many more data processing possibilities than a simple JSON file.  Javascript can be used to interact with data stored in a JSON file, or with data stored in a non relational database, or to facilitate the updating of data within a MongoDB database to be updated based on changes made to the JSON file.  The code in this project effectively allows for the dual use of either JSON or MongoDB for data storage.  Keeping everything modular and reusable assures efficient scaling if new sections are added to the application in the future.  Copying and pasting previously used components for new functionalities certainly takes less time and resources than starting again from scratch!


## Testing

During the development of an application with so many moving parts, it is important to engage in constant testing during development.  The testing process should also involve the use of tools like Postman and MongoDB Compass to assure effective communication between data stores and app components throughout the application.  Error messages generated through Angular, Express and NodeJS are descriptive and give a reasonable amount of relevant information which can be very helpful for debugging and removing errors and warnings.  During the development of this application, I made sure to constantly test my server-side functionality to make sure that each change could be made without breaking other functionalities of the application.  The modularity resulting from the use of single-purpose methods allows us to use the same functions throughout the application.  Communication between endpoints is secured through the obfuscation of sensitive information (such as user and admin user login credentials) in hidden files such as our DOTENV file added in Module 7.  Communication between application endpoints must be secured so that it can not be taken advantage of by malicious actors.  


## Reflection

Though the material in this course differs somewhat from what I plan to be doing as a roboticist in the professional world, several important software engineering skills have been gained through the completion of this course.  This course gave me the chance to practice using Git and GitHub from the terminal, which is a daily part of the life of many software engineers in the professional world.  The course also gave me the chance to refine my research and documentation interpretation skills, as some of the assignments were certainly a challenge in terms of achieving the desired functionality without any errors or warnings.

### Sources:

Erickson, J. (2024, January 30). What Is the MERN Stack? Guide & Examples. 
Oracle. 
https://www.oracle.com/database/mern-stack/  


GeeksForGeeks. (2023, March 21). Working with Express.js Middleware 
and Its Benefits. 
https://www.geeksforgeeks.org/working-of-express-js-middleware-
and-its-benefits/ 

GeeksForGeeks. (2024, July 8). MVC Framework Introduction. 
https://www.geeksforgeeks.org/mvc-framework-introduction

GeeksForGeeks. (2024, October 14). The Pros and Cons of Node.JS in Web 
Development. 
https://www.geeksforgeeks.org/the-pros-and-cons-of-node-js-in-web-
development/ 

GeeksForGeeks. (2024, December 14). Mongoose Tutorial. 
https://www.geeksforgeeks.org/mongoose-tutorial/ 

IBM. (n. d.). What is MEAN Stack? 
https://www.ibm.com/think/topics/mean-stack 

Jain, S. (2024, June 11). The Rise of Single-Page Applications (SPAs) and 
How Angular is Leading the Way. TechVraksh. 
https://medium.com/techvraksh/the-rise-of-single-page-applications-
spas-and-how-angular-is-leading-the-way-064a7fc1f4b9 

MongoDB. (2025). Advantages of MongoDB. 
https://www.mongodb.com/resources/compare/advantages-of-
mongodb 

MongoDB. (2025). What is the MEAN Stack? 
https://www.mongodb.com/resources/languages/mean-stack 








