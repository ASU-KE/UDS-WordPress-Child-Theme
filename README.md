<p align="center">
  <img src="https://cdn.infonet.research.asu.edu/assets/asu_asu_knowledge_enterprise_horiz_150ppi.png" alt="ASU Knowledge Enterprise" width="400" />
</p>

<h1 align="center">Unity Design System - WordPress Child Theme Template</h1>

<p align="center">A child theme for <a href="https://github.com/ASU-KE/UDS-WordPress-Theme">UDS-WordPress</a></p>

![divider](https://cdn.infonet.research.asu.edu/assets/divider.png)

## Version History

- 2.0.0 
  - Update gulp to latest build process.
  - Update resources to latest
  - src and dist folders. update enqueue 
  - remove features that belong in custom plugins
- 1.1.0 - Resolved error with euqueue process of included (blank) JS file. 
- 1.0.0 - Initial commit.

<hr style="margin:50px 0;"> 

## Developing With NPM, Gulp, SASS and Browser Sync

### Installing Dependencies
- Make sure you have installed Node.js, Gulp, and Browser-Sync [1] on your computer globally
- Open your terminal and browse to the location of your UnderStrap copy
- Run: `$ npm install` then: `$ gulp copy-assets`

### Running
To work and compile your Sass files on the fly start:

- `$ gulp watch`

- This theme's compiled CSS runs as a dependancy to the parent theme's compiled CSS. 
- The SASS source files for this child theme come configured to consume the UDS Bootstrap 4 variables from the parent.
