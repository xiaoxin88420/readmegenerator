// function to generate markdown for README
const generateMarkdown = (answers) => {
  return `
  # ${answers.title}
  

  ${answers.description}


  ## Table of Contents
  ${answers.tableOfContents}


  ## How to install the app
  ${answers.installation}


  ## How to use the app
  ${answers.usageInfo}


  ## license
  ${answers.license}


  ## The way to make a contribution
  ${answers.contribution}


  ## Here are some tests to the app
  ${answers.tests}


  ## Contact us
  www.github.com/${answers.username}
  ${answers.emailAddr}
`;
}

module.exports = generateMarkdown;
