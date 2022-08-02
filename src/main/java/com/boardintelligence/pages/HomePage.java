package com.boardintelligence.pages;

import com.boardintelligence.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "(//*[name()='svg'])[2]")
    WebElement logo;

    @CacheLookup
    @FindBy(id = "ccc-notify-accept")
    WebElement acceptAlert;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Be the board and business you’ve always wanted to ')]")
    WebElement homepageText;

    @CacheLookup
    @FindBy(tagName = "a")
    List<WebElement> links;


    public void acceptingAlert(){
        clickOnElement(acceptAlert);
     }

    public void verifyLogoIsPresent(){
    boolean logoPresent = logo.isDisplayed();
    log.info("verifying the logo is present or not " + logo.toString());
    Assert.assertTrue(logoPresent);
    if(logoPresent){
        System.out.println("Logo is visible");
    }else
    {
        System.out.println("Logo is not visible");
    }
    }
   public String getPageTitle() {
      String text = driver.getTitle();
       log.info("verifying the homepage title");
      return text;
   }

    public String verifyHomepageText(){
        String text = homepageText.getText();
        log.info("verifying the homepage text " + homepageText.toString());
        return text;
     }

    public void verifyNumberOfLinksPresent() {
        int numberOfLinks = links.size();
        System.out.println("Number Of Links Present On HomePage = " + numberOfLinks);
        log.info("verifying number of links present " + links.toString());
    }
    public void printOutAllLinksPresent(){
        System.out.println("All the links details are below:");
        log.info("verifying the number of links " + links.toString());
        for (WebElement allLinks : links) {
            System.out.println(allLinks.getText() + " - " + allLinks.getAttribute("href"));
        }
    }
}

