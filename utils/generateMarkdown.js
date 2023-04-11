// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



const fs = require('fs')

function generateMarkdown(answersObject) {
  if (answersObject.license === 'other') {
    answersObject.license = answersObject.otherLicense;
  }
  if (answersObject.outputFolder !== "") {
    answersObject.outputFolder = answersObject.outputFolder + "/";
    console.log(answersObject.outputFolder);
    console.log("is outputFolder");
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
### ${answersObject.installation}

## Usage
### ${answersObject.usage}

## Tests
### ${answersObject.testing}

## Live Site: [${answersObject.projectTitle}](${answersObject.liveSite})

## Contributing
### ${answersObject.contributing}

## Contributors & Collaborators
* ${answersObject.contributors}

## Notes
### ${answersObject.notes}

## Usage
### ${answersObject.usage}
  

## Questions
If you have any questions, please reach out to me at ${answersObject.email}.
You can also see my portfolio at https://github.com/${answersObject.githubName}.    
  
## This project is covered under the ${answersObject.license} License.

## Copyright (c) 2023 ${answersObject.author}.
  
`
}


module.exports = generateMarkdown;
