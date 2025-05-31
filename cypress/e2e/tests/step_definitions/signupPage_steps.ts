import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { SignUpPage } from "../../../support/pages/signUpPage";

const signupPage = new SignUpPage;
Given(/^I open the sign-up page$/, function() {
    signupPage.goTo("http://localhost:3000/signup");
})

When(/^I enter all the valid data for all fields$/, function (table: DataTable) {
    const {
        firstName,
        lastName,
        userName,
        password,
        confirmPassword
    } = table.rowsHash();
    signupPage.fillFirstNameField(firstName);
    signupPage.fillLastName(lastName);
    signupPage.fillUserName(userName);
    signupPage.fillPassword(password);
    signupPage.fillConfirmPassword(confirmPassword);

})

Then(/^the Password field should be of type "password"$/, function () {
    cy.get("[data-test=signup-password] input").should("have.attr", "type", "password");
})


When(/^I click on the sign up button$/, function () {
    this.loginPage = signupPage.clickSignUpButton();
})

Then(/^I should be redirected to the login page$/, function () {
    this.loginPage.getUrl().should("include", this.loginPage.path);
})

When(/^I click on the sign up button to mock api response$/, function() {

    cy.intercept("POST", 'http://localhost:3001/users', {
        statusCode: 201,
        body: {
            "user": {
                "id": "I5r9q0A3O",
                "uuid": "11b5b090-0fd7-4f88-8abc-a82ac558ece0",
                "firstName": "a",
                "lastName": "b",
                "username": "c",
                "password": "$2a$10$gNylPX.8WLo9n444TgR.Yup9xlfisePg4rHzcqXj5aTD253yYzOZy",
                "balance": 0,
            }
        }

    }).as('newUserSignUp');
    this.loginPage = signupPage.clickSignUpButton();
    const val = cy.wait('@newUserSignUp');
    console.log(val.its('response'))

})


When(/^I click on the signup button to mock api request$/,function(){
cy.intercept("POST", 'http://localhost:3001/users',function(req){
    if (req.body.firstName==="John1"){
        req.body.firstName = 'a';
        req.body.lastName = 'b';
        req.body.userName = 'c';
        req.body.password = 's3cret';
        req.body.confirmPassword = 's3cret';
    }
    req.continue();
}).as('newUserSignUp');

this.loginPage = signupPage.clickSignUpButton();
cy.wait("@newUserSignUp");

})
