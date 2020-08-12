const fs = require('fs')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./generateMarkdown')

// array of questions for user
const questions = [
    "What is the title of this file?",
    "Please describe your app.",
    "What are the contents of this file?",
    "How to install your app?",
    "How to use your app?",
    "What license did you use?",
    "How do users contribute to your program?",
    "What are some tests to your app that can be displayed?",
    "Please enter your GitHub username.",
    "Please enter your email address."
];




// function to write README file
const writeToFile = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type:"input",
            name: "description",
            message: questions[1]
        },
        {
            type: "input",
            name: "tableOfContents",
            message: questions[2]
        },
        {
            type: "input",
            name: "installation",
            message: questions[3]
        },
        {
            type: "input",
            name: "usageInfo",
            message: questions[4]
        },
        {
            type: "list",
            name: "license",
            message: questions[5],
            Choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "contribution",
            message: questions[6]
        },
        {
            type: "editor",
            name: "tests",
            message: questions[7]
        },
        {
            type: "input",
            name: "username",
            message: questions[8]
        },
        {
            type: "input",
            name: "emailAddr",
            message: questions[9]
        }
    ])
    .then(answers => {
        fs.appendFile("readme.md", generateMarkdown, (err) =>{
            if (err){ console.log(err)}
            console.log('File Updated!')
        })
    })
}

// function to initialize program
const init = () => {
    fs.writeFile('readme.md', "", (err) =>{
        if (err){ console.log(err)}
        console.log('File Created!')
        writeToFile()
    })
}

// function call to initialize program
init();
