# Domain

- Parking lot with multiple floors
- Each floor has cars parked in 1 line
- Each movement is 1 step - eg down one floor, or to the next parking space
- once you land on the exit you achieved the goal
- Has at least one parkingspace per floor
- Every floor has a staircase except the ground floor
- The ground floor has the exit
- Exit is always at bottom right

## Entities

Car Park

Level - multiple - has a fixed number of parking spots - has multiple parking spaces - has one Stairwell, unless ground floor - ground floor has one exit

Moves

- takes 1 step
- can be 'right', 'left', or 'down'

  Exit

- bottom right

## Scenarios

- a car park that has only one space per floor, and more than one floor is invalid, because the starting position cannot be on a stairwell
