Feature: Validate the calculator functionality.
  @calculatortesting
  Scenario Outline: Calculator add functionality.
    Given Navigate to "calculator" site.
    When I add two number "<temp>" and "<temp1>".
    Then output display should be "<temp2>".
    Examples:
      |  temp| temp1 | temp2 |
      |    4   |   5 |  10  |
      |    5   |   7 |  12 |

    @Angulartesting
    Scenario: Angular site login functionality.
      Given Navigate to "Angularjs" site.



