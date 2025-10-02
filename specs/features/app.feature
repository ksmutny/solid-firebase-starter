Feature: Solid Firebase Starter App

  Scenario: App opens successfully
    Given I open the app
    Then I should see the heading "Solid Firebase Starter"
    And I should see the increment button
    And I should see the count displaying "0"

  Scenario: Counter button increments count
    Given I open the app
    When I click the increment button
    Then I should see the count displaying "1"
    When I click the increment button
    Then I should see the count displaying "2"
