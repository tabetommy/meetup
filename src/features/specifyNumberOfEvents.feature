Feature: specify number of events

Scenario: When user opens the app 25 events should be specified by default
Given user opens the app
When the user has not specified a number of events yet
Then the number of events should be Twentyfive.
And Twentyfive events should be displayed by default.

Scenario: User can change the number of events to be displayed to a desired number
Given the number of events displayed by default is Twentyfive
When the user changes the number of events 
Then the new number of events will be displayed