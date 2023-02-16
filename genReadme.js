function genReadme(response) {
    return `# ${response.title}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Test Instructions](#tests)
- [Questions](#questions)

## Installation
${response.installation}
## Usage
${response.usage}
## Credits
${response.credits}
## License
${response.license}
## Contributing
${response.contributing}
## Tests
${response.tests}

## Questions?
${response.username}

${response.email}
`
}

module.exports = genReadme;