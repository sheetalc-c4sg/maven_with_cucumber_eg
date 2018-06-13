package stepdefination;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class myFirstStepDefinition {

	 


	@Given("^I navigate to the page$")
	public void i_navigate_to_the_page()  {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("first11"); 
		
	    
	}

	@When("^I navigate to Cucumber Tutorial page$")
	public void i_navigate_to_Cucumber_Tutorial_page() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("second"); 
	}

	@Then("^the page title should be visible$")
	public void the_page_title_should_be_visible()  {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("third"); 
	   
	}


	    
}
