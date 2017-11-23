# Ministry of Economic Growth and Job Creation (MEGJC) Intranet

This repository contains MEGJC's intranet. The main goal of the intranet is to provide staff members a channel/platform
to communicate their ideas, keep up to date with internal news and show staff achievements.

### Version
0.6.0

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

### Todos

 - Incorporate testing framework for back end testing
 - Update `knex` migration files to include database creation code
 - Add ability to run migrations from `pm2` script
