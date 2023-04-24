# README-Generator

This is a README-Generator. Feed it information and it will generate a professional-looking README

<br>

## Table of Contents 
- [Description](#description)
- [Usage](#usage)
- [Links](#links)
- [Features](#features)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

<br>

## Description
- You will be prompted with questions about the content for your README
- Answer each questions with the information you want for your README

<br>

## Usage

![Screenshot](./assets/img/Screenshot%202023-04-24%20163633.png)

<br>

![Screenshot](./assets/img/Screenshot%202023-04-24%20163727.png)

<br>

## Links

- Github page: https://github.com/teddysm/README-Generator
- Deployed page: https://teddysm.github.io/README-Generator/
- Video walkthrough: https://drive.google.com/file/d/1_ugKSB_5pz3OP2Mxz5b9sjg1Gjl078Vq/view

<br>

## Features

- Generates a professional looking README
- Choose from a preset of 5 licenses
- License badges and link will be generated after user choose a license
- Links on the README will navigate to the corresponding section that is clicked

<br>

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```