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

### Installation

The application's back-end consists of a MYSQL data store interfaced by PHP and the Slim Framework.
The back-end of the project consists or various services and conforms to a micro service architecture. These services are consumed by an Angular front-end.

To run the project
- Navigate to each sub folder of the root folder i.e. employees or pmas
- Run `npm install` to install the dependencies for each service.
Environmental variables for each service is stored in a `.env` file in the service's root folder.
An example file is found in the root folder of the project titled `.env.example`.
Once you have replaced the default values, save the `.env.example` to `.env` for each service.
- Navigate to the `client\app` folder. In the `app` folder run `npm install` to install front end libraries.


### Todos

 - Incorporate testing framework for back end testing
 - Utilize `pm2` to run all services instead of running individual services
 - Update `knex` migration files to include database creation code
