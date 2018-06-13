package myrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features = "C:\\Users\\sheet\\eclipse-workspace\\mavensetup\\src\\main\\java\\feature\\myFirstFeature.feature", 
glue = {"stepdefination"},

dryRun = false	)

public class testrunner {

}
