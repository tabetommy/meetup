Feature: show/hide an event's details

Scenario: User can expand an event to see it's details
Given the event's details is hidden
When the user clicks a button
Then the user should see details of the event.

Scenario: User can collapse an event to hide it's details
Given the event's details is visible
When the user clicks a button
Then the event's details should be hidden.
