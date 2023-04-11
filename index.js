// THIS IS VERY MUCH IN PROGRESS!!!
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

  // projectTitle, author, githubName, description, email, liveSite, installation, license, otherLicense, usage, notes, contributing

const readMeGenerator = (answersObject) => {
    if (answersObject.license === 'other') {
      answersObject.license = answersObject.otherLicense;
    }
    return `# ${answersObject.projectTitle}
## by ${answersObject.author}
## Table of Contents
* [Description](https://github.com/${answersObject.githubName}/readme-generator#description)
* [Installation](https://github.com/${answersObject.githubName}/readme-generator#installation)
* [Usage](https://github.com/${answersObject.githubName}/readme-generator#usage)
* [Live Site](https://github.com/${answersObject.githubName}/readme-generator#live-site)
* [Contributing](https://github.com/${answersObject.githubName}/readme-generator#contributing)
* [Tests](https://github.com/${answersObject.githubName}/readme-generator#tests)
* [Notes](https://github.com/${answersObject.githubName}/readme-generator#notes)
* [Questions and Contact](https://github.com/${answersObject.githubName}/readme-generator#question-and-contact-info)
* [License](https://github.com/${answersObject.githubName}/readme-generator#license)
 
## Description
${answersObject.description}

## Installation Instructions
${answersObject.installation}

## Usage
${answersObject.usage}
    
## Live Site
### [${answersObject.projectTitle}](${answersObject.liveSite})

## Contributing
### ${answersObject.contributing}
    
## Tests

## Notes
${answersObject.notes}

## Usage
${answersObject.usage}
    

## Questions
If you have any questions, please reach out to me at ${answersObject.email}.
You can also see my portfolio at https://github.com/${answersObject.githubName}.    
    
## This project is covered under the ${answersObject.license} License.

## Copyright (c) 2023 ${answersObject.author}.
    
`
}
  


inquirer.prompt([
  {
    // name = what key will the answer to this question be saved in
    name: 'projectTitle',
  //  message = what message will be displayed to the user when this question is being asked
    message: 'What is the title of your project?',
    type: 'input',
  },
  {
    name: 'author',
    message: 'What is your name?',
    type: 'input',
  },
  {
    name: 'githubName',
    message: 'What is your GitHub username?',
    type: 'input',
  },
  {
    name: 'description',
    message: 'Please give an overview description of your project',
    type: 'input',
  },
  {
    name: 'usage',
    message: "Please explain the project's usage or provide a link to demonstrate it.",
    type: 'input',
  },
  {
    name: 'installation',
    message: 'Please provide instructions for your project, if applicable.',
    type: 'input',
  },
  {
    name: 'email',
    message: 'What is your email address for professional purposes?',
    type: 'input',
  },
  {
    name: 'liveSite',
    message: "If applicable and deployed, what is the URL for the project's live website?",
    type: 'input',
  },
  {
    name: 'contributing',
    message: "Please list any additional contributors for this project, if applicable.",
    type: 'input',
  },
  {
    name: 'license',
    message: 'What license are you using for your project?',
    type: 'list',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause', 'Microsoft Public', 'CC-BY-NC-1.0', 'CC-BY-NC-4.0', 'CC-BY-SA-1.0', 'other']
    ,
  },
  {
    name: 'otherLicense',
    message: "If you chose 'other' for your license, please enter it below from the list found at https://spdx.org/licenses/",
    type: 'input',
  },
  {
    name: 'notes',
    message: "Are there any other notes you'd like to add?",
    type: 'input',
  },
]).then(response => {
  fs.writeFile('./Sample-Output/README.md', readMeGenerator(response), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Success!!! MUAHAHAHAHAHAHAHA!!!!... probably');
  });
});