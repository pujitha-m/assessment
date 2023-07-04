## Sainsbury's Digital Technical Assessment 

## Pre-requisites:
* VSCode or WebStorm

## Configuration after unzip:
```bash
npm install
```

## Folder Structure

### cypress/fixtures
* test data files
### cypress/e2e
* spec files which hold individual testcases
### cypress/pages
* contain locators and actions that is unique to the page
### cypress/support
* contains support files
### Spec files
* individual spec files contain the tests for a particular scenario

## Running tests through command line
``` Run from cli and generate mochawesome html report
````
npm run mochawesome-report
