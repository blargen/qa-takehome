#README

###Prerequisites
- Confirm you are on a system with Nodejs and `npm` installed. Instructions on how to download and install Nodejs can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Steps to run the test
1.Clone the repository
2. In a terminal navigate to the directory of the extracted project
3. From the root of the directory `npm install`
4. Once packages installation is finished you can run the test via command `npx cypress run --headless` 

### After running
- Note on the screenshot the area that I have marked important: We are receiving the error that our actual text and expected text do not match.
- We can also see where Cypress has stored our Screenshots and a video of the run at the bottom.
