function genReadme(response) {
    return `# ${response.title}
https://github.com/${response.username}/${response.title}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installation}
## Usage
${response.usage}
## Credits
${response.credits}
## License
This project is protected by the ${response.license} license.
## Contributing
${response.contributing}
## Tests
${response.tests}

## Questions?
https://github.com/${response.username}/

If you have any questions, contact me on GitHub or at ${response.email}
`
}

module.exports = genReadme;