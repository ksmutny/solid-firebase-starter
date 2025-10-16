Feature: Message Board

  Scenario: User can submit a message
    Given I open the app
    When I submit message "Hello World"
    Then I should see "Hello World" in the message list

  Scenario: User can submit multiple messages
    Given I open the app
    When I submit message "First message"
    And I submit message "Second message"
    Then I should see "First message" in the message list
    And I should see "Second message" in the message list

  Scenario: Messages persist across page refresh
    Given I open the app
    When I submit message "Persistent message"
    Then I should see "Persistent message" in the message list
    When I reload the page
    Then I should see "Persistent message" in the message list
