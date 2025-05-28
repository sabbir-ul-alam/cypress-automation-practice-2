import { LoginPage } from "../../support/pages/loginPage"


describe("TEST LOGIN",()=>{
    it("test login",()=>{
        const loginPage = new LoginPage();
        loginPage.goTo("http://localhost:3000/signin");
        loginPage.shouldCheckRememberme(true);
        loginPage.signIn("Heath93","s3cret");
        

    })
})