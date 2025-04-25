const getDays=(days)=>{
    days.forEach((day)=>{
        switch(day){
            case 'monday':
                console.log("Deliver working schedule on monday");
                break;
                case 'tuesday':
                    console.log("Deliver praying schedule");
                    break;
                    case 'friday':
                    console.log("Deliver the cleaning schedule for friday");
                    break;
                    default:
                        console.log("Deliver other schedules");
                        break;
        }
    })
}
const day = ['monady','tuesday','friday'];
getDays(day)


// Create a program that loops through an array of book statuses and prints 
// "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

const getResponse=(responses)=>{
    responses.forEach((response)=>{
        switch(response){
            case 'available':
                console.log("Ready to lend");
                break;
                case 'checked out':
                    console.log("borrowed");
                    break;
                    default:
                        console.log("The book is not available");
                        break;
        }
    })
}
const response=['available','checked out'];
getResponse(response);
    



// Given an array of customer ages, write a program that checks each age and 
// prints "Adult" if the age is 18 or above, and "Minor" otherwise.

const customerAges=(ages)=>{
    for(let i=0;i< ages.length;i++){
         if(ages[i]>=18){
            console.log("This is customer is adult");
        }
        else {
            console.log("Your are too young to be our customer");
        }

    }
    
}
customerAges([8,6,12,15,18,20]);



// Write a program using a while loop that simulates a countdown of lives in a game
//  starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
const countdownLives=()=>{
let i=4;
while(i>=4){
    i--;
    console.log("You have x lives left");
}
}
countdownLives();



// Using a do...while loop, write a program that loops through 
// an array of user feedback and prints each comment until the array is empty.

const userFeedback=(comments)=>{
    let comment=5;
    do{
        console.log(`your are ${comment}`);
        comment--;
    }while(comment<=comments)
}
    userFeedback(['Good job','keep on trying','nice one','your lacky']);


    // Write a program that loops through an array of user login 
    // statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

    const userLogginStatuses=(arr)=>{
        arr.forEach((statuses)=>{
            switch(statuses){
                case 'loggged in':
                    console.log("Welcome back");
                    break;
                    case 'invalid password':
                        console.log("Please log in");
                        break;
                        default:
                            console.log("Create your account");
                            break;
            }
        })
    }
    userLogginStatuses(['logged in','invalid password']);


// Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be 
// addressed based on whether the priority is "low", "medium", or "high".

const findPriorityTicket=(tickets)=>{
    tickets.forEach((ticket)=>{

        switch(ticket){
            case 'low':
                console.log("your priority is low");
                break;
                case 'medium':
                    console.log("your priority is medium");
                    break;
                    case 'high':
                        console.log("your priority is high");
                        break;
                        default:
                            console.log("You have no priority");
        }
    })
}
findPriorityTicket(['low','high','medium']);


// Create a while loop that simulates a quiz 
// countdown from 10 seconds, printing each number until it reaches 0.

const quizcountdown=(mincount)=>{
    let count=10;
    while(count>=mincount){
        console.log(`Display the ${count}`);
        count--;
    }
}
quizcountdown(0);
