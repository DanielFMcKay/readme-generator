// THIS IS VERY MUCH IN PROGRESS!!!
const fs = require('fs');

const inquirer = require('inquirer');

const readMeGenerator = (projectTitle, author, githubName, description, email, liveSite, installation, license, otherLicense, ...restOfAttributes) => {
    console.log(restOfAttributes);
    if (license === 'other') {
        license = otherLicense;
    }
    return `
    # ${projectTitle}
    ## by ${author}
    ## Table of Contents
    * [Description](https://github.com/${github}/readme-generator#description)
    * [Installation](https://github.com/${github}/readme-generator#installation)
    * [Usage](https://github.com/${github}/readme-generator#usage)
    * [Live Site](https://github.com/${github}/readme-generator#live-site)
    * [Contributing](https://github.com/${github}/readme-generator#contributing)
    * [Tests](https://github.com/${github}/readme-generator#tests)
    * [Questions and Contact](https://github.com/${github}/readme-generator#question-and-contact-info)
    * [License](https://github.com/${github}/readme-generator#license)
 
    ## Description
    ${description}

    ## Installation Instructions
    ${installation}

    ## Usage
    ${usage}
    
    ## Live Site
    ### [${title}](${liveSite})

// to be completed
    ## Contributing
    
// to be completed   
    ## Tests

    ## Questions
    If you have any questions, please reach out to me at ${email}.
    You can also see my portfolio at https://github.com/${githubName}.    
    
    ## This project is covered under the ${license} License.

    ## Copyright (c) 2023 ${author}.
    
    `
  };
  


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
]).then(answers => {
  console.log(answers);
  fs.writeFile('README1.md', readMeGenerator(answers), (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('Success!!! MUAHAHAHAHAHAHAHA!!!!');
  });
});