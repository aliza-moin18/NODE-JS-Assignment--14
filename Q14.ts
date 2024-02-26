// 14. Guest list: If you could invite anyone , living or decreased , to dinner , who whould you invite? Make a list that includes at least three people you like to invite to dinner. Then use your list to print a message to each person,  inviting them to dinner.

let guestArr: string[] = ["SCHOOL FRIENDS", "COLLEGE FRIENDS", "UNIVERSITY FRIENDS"]

guestArr.map((item) => (
    console.log(`"Dear ${item}, I would like to invite you to dinner. It would be an honor to have you join us."`)
))