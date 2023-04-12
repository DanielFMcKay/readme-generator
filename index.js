// THIS IS VERY MUCH IN PROGRESS!!!
const fs = require('fs');

const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js');

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
    message: 'What is your GitHub username? Please remember that this is case-sensitive.',
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
    name: 'email',
    message: 'What is your email address for professional purposes?',
    type: 'input',
  },
  {
    name: 'installation',
    message: 'Please provide installation instructions for your project, if applicable.',
    type: 'input',
  },
  {
    name: 'testing',
    message: 'What are some ways to test this app or project?',
    type: 'input',
  },
  {
    name: 'liveSite',
    message: "If applicable and deployed, what is the URL for the project's live website?",
    type: 'input',
  },
  {
    name: 'contributing',
    message: "What are the contribution guidelines for this project?",
    type: 'input',
  },
  {
    name: 'contributors',
    message: "Please list any additional contributors to the project here.",
    type: 'input',
  },
  {
    name: 'license',
    message: 'What license are you using for your project?',
    type: 'list',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSD-4-Clause', 'MS-PL', 'CC-BY-NC-1.0', 'CC-BY-NC-4.0', 'CC-BY-SA-1.0', 'other', 'none']
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
  // The folder path below is just so it doesn't overwrite the project's actual ReadMe file. It should still be retrievable from there.
  fs.writeFile('./Sample-Output/README.md', generateMarkdown
  (response), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Success!!! MUAHAHAHAHAHAHAHA!!!!... probably');
  });
});