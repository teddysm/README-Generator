// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
let badge = "";
let badgeDesc = "";

// TODO: Create an array of questions for user input
const questions = ['projectTitle','description', 'installationInstructions', 
                  'usageInformation', 'contributionGuidelines', 'testInstructions'];
const license = '';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
  const response = inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Please give a short description for this project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are some installation instructions?',
      name: 'installationInstructions',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usageInformation',
    },
    {
      type: 'input',
      message: 'What are some contribution guidelines?',
      name: 'contributionGuidelines',
    },
    {
      type: 'input',
      message: 'What are some test instructions?',
      name: 'testInstructions',
    },
    {
      type: 'checkbox',
      message: 'Which license do you want for your application?',
      choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'BSD 3-clause'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   choices: ['Text', 'Call', 'F2F'],
    //   name: 'comms',
    // },
  ])

  console.log(response);
  
  switch(response.license){
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      badgeDesc = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case 'GPLv2':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      badgeDesc = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
      break;
    case 'GPLv3':
      badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      badgeDesc = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
      break;
    case 'Apache':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      badgeDesc = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case 'BSD 3-clause':
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      badgeDesc = 'The BSD 3-Clause License The following is a BSD 3-Clause ("BSD New" or "BSD Simplified") license template. To generate your own license, change the values of OWNER, ORGANIZATION and YEAR from their original values as given here, and substitute your own.';
      break;
    default:
      console.log('Wrong option');
      break;
  }

  // Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

  const README = `
    # ${response.projectTitle}

    <br>
    
    ${badge}

    <br>

    ## Table of Contents 
    - [Table of Contents](#table-of-contents)
    - [Description](#description)
    - [Installation Instructions](#installation-instructions)
    - [Usage Information](#usage-information)
    - [Contribution Guidelines](#contribution-guidelines)
    - [Test Instructions](#test-instructions)
    - [Questions](#questions)
    - [License](#license)

    <br>

    ## Description
    - ${response.description}
    
    <br>

    ## Installation Instructions
    - ${response.installationInstructions}

    <br>

    ## Usage Information
    - ${response.usageInformation}

    <br>

    ## Contribution Guidelines
    - ${response.contributionGuidelines}

    <br>

    ## Test Instructions 
    - ${response.testInstructions}

    ## Questions
    - Github: www.github.com/${response.github}
    - Email: ${response.email}

    ## License: 
    - ${badgeDesc}

  `

  writeToFile('README-Generator.md', README);
}
init();
