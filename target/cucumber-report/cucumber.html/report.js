$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Board Intelligence: Home page Test Cases",
  "description": "As user I want to check the Board Intelligence web page",
  "id": "board-intelligence:-home-page-test-cases",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6726977900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user can see the logo present on home page",
  "description": "",
  "id": "board-intelligence:-home-page-test-cases;verify-that-user-can-see-the-logo-present-on-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launch the home page and I accept the alert",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be able to see the Board Intelligence logo",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefs.iAmOnHomePageAndIAcceptTheAlert()"
});
formatter.result({
  "duration": 1189285100,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefs.iShouldBeAbleToSeeTheBoardIntelligenceLogo()"
});
formatter.result({
  "duration": 42608400,
  "status": "passed"
});
formatter.after({
  "duration": 810714000,
  "status": "passed"
});
formatter.before({
  "duration": 4543996600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify that page title is correct",
  "description": "",
  "id": "board-intelligence:-home-page-test-cases;verify-that-page-title-is-correct",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I launch the home page and I accept the alert",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I verify the page title displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefs.iAmOnHomePageAndIAcceptTheAlert()"
});
formatter.result({
  "duration": 1078747800,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefs.iVerifyThePageTitleDisplayed()"
});
formatter.result({
  "duration": 14544000,
  "status": "passed"
});
formatter.after({
  "duration": 886565300,
  "status": "passed"
});
formatter.before({
  "duration": 3448292400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify that homepage message text is correct",
  "description": "",
  "id": "board-intelligence:-home-page-test-cases;verify-that-homepage-message-text-is-correct",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I launch the home page and I accept the alert",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I verify the homepage message text is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageStepdefs.iAmOnHomePageAndIAcceptTheAlert()"
});
formatter.result({
  "duration": 1070788400,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefs.iVerifyTheHomepageMessageTextIsCorrect()"
});
formatter.result({
  "duration": 43188300,
  "status": "passed"
});
formatter.after({
  "duration": 847466500,
  "status": "passed"
});
formatter.before({
  "duration": 3178294400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Count the number of links present on Home page and also print all the links",
  "description": "",
  "id": "board-intelligence:-home-page-test-cases;count-the-number-of-links-present-on-home-page-and-also-print-all-the-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I launch the home page and I accept the alert",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I should be able to count number of links present",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I should be able to print out all the links",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageStepdefs.iAmOnHomePageAndIAcceptTheAlert()"
});
formatter.result({
  "duration": 1078343800,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefs.iShouldBeAbleToCountNumberOfLinksPresent()"
});
formatter.result({
  "duration": 31542000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefs.iShouldBeAbleToPrintOutAllTheLinks()"
});
formatter.result({
  "duration": 2297191600,
  "status": "passed"
});
formatter.after({
  "duration": 810088500,
  "status": "passed"
});
});