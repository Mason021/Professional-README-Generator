// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(userInput,) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

// function to generate markdown for README
function generateMarkdown(userInput, userData) {

  // Plug userReponses into table of contents
  let draftTable = `## Table of Contents`;

  if (userInput.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userInput.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userInput.contributing !== '') { draftTable += `
  * [Contributing](#contributing)` };

  if (userInput.tests !== '') { draftTable += `
  * [Tests](#tests)` };
  
  // Create Project title and description
  // Generate badges
  let draftMarkdown = 
  `# ${userInput.title}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userInput.username}/${userInput.repository}?style=flat&logo=appveyor) 
  
  
  ## Description 
  
  
  ${userInput.description}
  `
  // Add table of contents data to the markdown
  draftMarkdown += draftTable;
  
  // Add license section to the markdown
  draftMarkdown += `
  * [License](#license)`;

  // Create installation section
  if (userInput.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  
  ${userInput.installation}`
  };

  // Create usage section
  if (userInput.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
   
  ${userInput.usage}`
  };
  
  // Create contribution section
  if (userInput.contributing !== '') {
  `
  
  ## Contributing
  
  
  ${userInput.contributing}`
  };

  // Make tests section
  if (userInput.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  
  ${userInput.tests}`
  };

  // Connect userInput to license section
  draftMarkdown +=
  `
  
  ## License
  
  ${userInput.license}
  `;

  // Questions section
  let draftDeveloper = 
  `
  ---
  
  ## Questions?
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userData.login}](${userData.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userData.email !== null) {
  
  draftDeveloper +=
  `
  Email: ${userData.email}
  `};

 // Add developer section to markdown
  draftMarkdown += draftDeveloper;

  // Return markdown
  return draftMarkdown;
};

// Export markdown module
module.exports = generateMarkdown;
