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
* [Description](#description)
* [Installation](#installation)
* [Live Site](#live-site)
* [Contributors & Collaborators](#contributors-&-collaborators)
* [Contributing Guidelines](#contributing-Guidelines)
* [Usage](#usage)
* [Tests](#tests)
* [Notes](#notes)
* [Questions and Contact Info](#question-and-contact-info)
* [License](#license)
<hr>

## Description
${answersObject.description}

## Installation Instructions
${answersObject.installation}

## Live Site
### [${answersObject.projectTitle}](${answersObject.liveSite})

## Contributors & Collaborators
* ${answersObject.contributors}

## Contributing Guidlines
${answersObject.contributing}

## Usage
${answersObject.usage}

## Tests
${answersObject.testing}

## Notes
${answersObject.notes}
  

## Questions and Contact Info
If you have any questions, please reach out to me at ${answersObject.email}.
You can also see my portfolio at https://github.com/${answersObject.githubName}.    
  
## License
This project is covered under the ${answersObject.license} License.
${licenseLink}.

## Copyright (c) 2023 ${answersObject.author}.
  
`
}


module.exports = generateMarkdown;
