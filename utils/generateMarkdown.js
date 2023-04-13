const fs = require('fs')

function generateMarkdown(answersObject) {

    if (answersObject.license === 'other') {
    answersObject.license = answersObject.otherLicense;
  }
  console.log("license is")
  console.log(answersObject.license)
  var licenseLink = "More information can be found at https://spdx.org/licenses/" + answersObject.license + ".html"
  if (answersObject.license==='other') {
    licenseLink==="More information can be found at the directory at https://spdx.org/licenses/"
  } else if (answersObject.license==='none') {
    licenseLink==="";
  }
  console.log("licenseLink is")
  console.log(licenseLink);

  

  return `# ${answersObject.projectTitle}
  ![image](https://img.shields.io/badge/License-${answersObject.license}-slateblue.svg)
## by ${answersObject.author}
<hr>

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
<hr>

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

## Usage
### ${answersObject.usage}

## Notes
### ${answersObject.notes}
  

## Questions
If you have any questions, please reach out to me at ${answersObject.email}.
You can also see my portfolio at https://github.com/${answersObject.githubName}.    
  
## License
### This project is covered under the ${answersObject.license} License.
### ${licenseLink}.

## Copyright (c) 2023 ${answersObject.author}.
  
`
}


module.exports = generateMarkdown;
