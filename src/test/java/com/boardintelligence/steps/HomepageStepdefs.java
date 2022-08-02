package com.boardintelligence.steps;

import com.boardintelligence.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class HomepageStepdefs {
    @Given("^I launch the home page and I accept the alert$")
    public void iAmOnHomePageAndIAcceptTheAlert() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().acceptingAlert();

    }

    @Then("^I should be able to see the Board Intelligence logo$")
    public void iShouldBeAbleToSeeTheBoardIntelligenceLogo() {
        new HomePage().verifyLogoIsPresent();
    }


    @Then("^I verify the page title displayed$")
    public void iVerifyThePageTitleDisplayed() {
        String actualTitle = new HomePage().getPageTitle();
        String expectedTitle = "Transformative business reporting | Board Intelligence";
        Assert.assertEquals("Page title is not same",expectedTitle,actualTitle);
    }

    @Then("^I verify the homepage message text is correct$")
    public void iVerifyTheHomepageMessageTextIsCorrect() {
        String actualText = new HomePage().verifyHomepageText();
        String expectedText = "Be the board and business you’ve always wanted to be";
        Assert.assertEquals("Homepage message text is not correct",expectedText,actualText);

    }

    @Then("^I should be able to count number of links present$")
    public void iShouldBeAbleToCountNumberOfLinksPresent() {
        new HomePage().verifyNumberOfLinksPresent();
    }

    @And("^I should be able to print out all the links$")
    public void iShouldBeAbleToPrintOutAllTheLinks() {
        new HomePage().printOutAllLinksPresent();
    }
}
