// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
const api= require('./utils/api.js');
// TODO: Create an array of questions for user input

const questions = [
    {
    type: 'input',
    name: 'username',
    message: 'insert your GitHub username.',
    // Making sure they entered something as a username
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("GitHub username required.");
        }
        return true;
    }
},
// GitHub Repo Section
{
    type: 'input',
    name: 'repository',
    message: 'Insert the name of your GitHub repository.',
    // Making sure they entered something for a GitHub repository
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("GitHub repository name required.");
        }
        return true;
    } 
},
// Project Title Section
{
    type: 'input',
    name: 'title',
    message: 'Insert the title of your project.',
    // Making sure they entered something for a project title
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("project title required.");
        }
        return true;
    }
},
// Project Description Section
{
    type: 'input',
    name: 'description',
    message: 'Insert a project description.',
    // Making sure they entered something for a project description
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("project description required.");
        }
        return true;
    }
},
// Project Installation Section
{
    type: 'input',
    name: 'installation',
    message: 'Please explain user installation instructions (if any).',
},
// Project in Use Section
{
    type: 'input',
    name: 'usage',
    message: 'Please enter project info and examples for usage section.',
},
// License Select Section
{
    type: 'list',
    name: 'license',
    message: 'Please choose your needed license.',
    choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    
},
// Project Contribution Section
{
    type: 'input',
    name: 'contributing',
    message: 'Please explain how users can contribute to what you are doing (if applicable).',
    
},
// Test for project
{
    type: 'input',
    name: 'tests',
    message: 'Please provide tests for project, and explain how to test (if any).',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
