const fs = require('fs');
const inquirer = require('inquirer');
const genReadme = require('./genReadme');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter project title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter usage information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter credits',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'Select license',
      choices: ["MIT","APACHE 2.0", "GPL 3.0", "BSD 3"],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Enter contributing guidelines',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Enter test instructions',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Enter GitHub username',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Enter email address',
      name: 'email',
    },
  ])
  .then((response) => {
    fs.writeFile(`README.md`,genReadme(response) , (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
  }
  );