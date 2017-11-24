# Ministry of Economic Growth and Job Creation (MEGJC) Intranet

This repository contains MEGJC's intranet. The main goal of the intranet is to provide staff members a channel/platform
to communicate their ideas, keep up to date with internal news and show staff achievements.

### Version
0.1.0

### Technology Stack

MEGJC's intranet uses a number of open source technologies and projects:
 - AngularJs
 - NodeJs
 - ExpressJs
 - MYSQL

### Project Folder Structure

The project contains two folders namely `client` and `server`. The `client` folder manages the user interface of the application
while the `server` folder contains RESTful services consumed by the front end.

### Installation

The application's back-end consists of a MYSQL data store interfaced by PHP and the Slim Framework.
The back-end of the project consists or various services and conforms to a micro service architecture. These services are consumed by an Angular front-end.

To run the project
- Ensure `nodejs` is installed globally on your laptop
- Run `npm install -g pm2` to install `pm2` globally
- Navigate to the folder titled `server`. In that folder, run `npm install` to install dependencies
- Navigate to each folder contained in the `server` directory. For each folder, run `npm install` to install the dependencies for each service.
- Navigate to the `client\app` folder. In the `app` folder run `npm install` to install front end libraries.
- Once all dependencies have been successfully installed, navigate to the `server` directory and run `pm2 start ecosystem.config.js` to start all services
- To make sure all services listed in the `ecosystem.config.js` file were started, run `pm2 list`

### Creating a new service
To create a new service
- Ensure that the `yo` npm package is installed globally
- Navigate to the `server` directory
- Run `yo express` to create a `express` project within the `server` folder
- The first prompt requests the name of the directory. In this case, it would be the name of our service. Enter `y`
- Once prompted, enter the name of the directory or service
- Select `Basic` as the version to install
- Select `EJS` as the view engine to use
- Select `None` as the css preprocessor. We are creating a back end service, therefore no front end is required
- Select `Gulp` or `Grunt`. Again, these are front end tools. The choice here doesn't matter for the project
- Once complete a new folder will be created and all dependencies downloaded.
- To ensure the service starts along with other services, add an entry to the `apps` array of the `ecosystem.config.js` file found in the `server` directory.
The format used for existing applications will provide a guide in adding a new service.
- Run `pm2 restart ecosystem.config.js` to start all apps/services within the file, including the new one.
- Run `pm2 list` to verify the addition of the new service

### Todos

 - Incorporate testing framework for back end testing - done
 - Update `knex` migration files to include database creation code
 - Add ability to run migrations from `pm2` script
