Feature: Solid Firebase Starter Counter

  Scenario: App opens successfully
    Given I open the app
    Then I see the heading "Hello world!!!!"
    And I see the increment button
    And I see the count displaying "0"

  Scenario: Counter button increments count
    Given I open the app
    When I increment the counter
    Then I see the count displaying "1"
    When I increment the counter
    Then I see the count displaying "2"
