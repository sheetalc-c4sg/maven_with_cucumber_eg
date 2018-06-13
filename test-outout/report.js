$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sheet/eclipse-workspace/mavensetup/src/main/java/feature/myFirstFeature.feature");
formatter.feature({
  "line": 1,
  "name": "To check that main tutorial course pages have loaded in TheTestRoom.com",
  "description": "",
  "id": "to-check-that-main-tutorial-course-pages-have-loaded-in-thetestroom.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To check that the WebDriver Cucumber tutorial main page has loaded",
  "description": "",
  "id": "to-check-that-main-tutorial-course-pages-have-loaded-in-thetestroom.com;to-check-that-the-webdriver-cucumber-tutorial-main-page-has-loaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Cucumber Tutorial page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the page title should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "myFirstStepDefinition.i_navigate_to_the_page()"
});
formatter.result({
  "duration": 181277440,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDefinition.i_navigate_to_Cucumber_Tutorial_page()"
});
formatter.result({
  "duration": 59306,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDefinition.the_page_title_should_be_visible()"
});
formatter.result({
  "duration": 72960,
  "status": "passed"
});
});