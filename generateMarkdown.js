// function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # ${answers.title}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${answers.installation}


  ## Usage
  ${answers.usageInfo}


  ## License
  ${answers.license}


  ## Contribution
  ${answers.contribution}


  ## Tests
  ${answers.tests}


  ## Questions
  www.github.com/${answers.username}
  ${answers.emailAddr}
`;
}

module.exports = generateMarkdown;
