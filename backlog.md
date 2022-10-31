# backlog

as a car park operator
I want to navigate to the exit in a single floor building
so that I can escape the park

given a single floor building with 10 spaces, an exit on the far right and a random starting position
when we navigate to the exit
then the number of steps should be calculated

Given we are in a car park
and it has only one parking space, and the exit is to the right from the parking space
what steps do I have to take to exit the car park?

Given a initial floor as X
I want to use the initial floor for start my road on the parking
Then i need to trow an error

Given a initial position as Y
I want to use the initial position for start my road on the parking floor
Then i need to trow an error

Given a initial floor as -1
I want to use the initial floor for start my road on the parking
Then i need to trow an error

Given a initial position as -5
I want to use the initial position for start my road on the parking floor
Then i need to trow an error

Given a initial floor as 10 on a parking lot with 3 floors
I want to use the initial floor for start my road on the parking
Then i need to trow an error

Given a initial position as 6 on a parking lot with 4 slots and one exit on ground floor
I want to use the initial position for start my road on the parking floor
Then i need to trow an error

Given a [['', '', '']. ['', '', '']] on parking lot
I want to navigate to the exit
Then i need to trow an error

Given a parking lot with [['slot', 'slot', 'exit'], ['slot', 'slot', 'slot', 'stairs']] on ground floor
I want to navigate to the exit
Then i need to trow an error

Given a parking lot with ['slot', 'exit', 'slot] on ground floor
I want to navigate to the exit
Then i need to trow an error

Given a parking lot with ['slot', 'stair', 'exit'] on ground floor
I want to navigate to the exit
Then i need to trow an error

Given a parking lot with ['space', 'slot', 'exit'] on ground floor
I want to navigate to the exit
Then i need to trow an error

Given a parking lot with ['exit', 'slot', 'exit'] on ground floor
I want to navigate to the exit
Then i need to trow an error

Given a parking lot with [['slot', 'slot', 'exit'], ['slot', 'slot', 'slot']]
I want to navigate to the exit
Then i need to trow an error
##

position 1,4<-
exit 1,0
[[false,false, false,, false false, true],[true, false, false, false, false, false]]

function exit seeker
function position updater & record moves
refactor the describes

## Questions
Could we have more than one stairs? no