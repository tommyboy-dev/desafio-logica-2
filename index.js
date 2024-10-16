function calculateXP(wins){
    return wins * 100 // Consider each victory gives 100 XP
}

function calculateRank(xpAmount){
    let rank = ""

    switch (true){
        case (xpAmount < 1000):
            rank = "Iron"
            break
        
        case (xpAmount >= 1001 && xpAmount <= 2000):
            rank = "Bronze"
            break

        case (xpAmount >= 2001 && xpAmount <= 3000):
            rank = "Silver"
            break

        case (xpAmount >= 3001 && xpAmount <= 4000):
            rank = "Gold"
            break

        case (xpAmount >= 4001 && xpAmount <= 6000):
            rank = "Platinum"
            break

        case (xpAmount >= 1001 && xpAmount <= 2000):
            rank = "Bronze"
            break

        case (xpAmount >= 6001 && xpAmount <= 8000):
            rank = "Diamond"
            break

        case (xpAmount >= 8001 && xpAmount <= 9000):
            rank = "Ascendant"
            break

        case (xpAmount >= 9001 && xpAmount <= 10000):
            rank = "Immortal"
            break

        case (xpAmount >= 10001):
            rank = "Radiant"
            break

        default:
            rank = "nonexistent"
    }

    return rank
}

// Example
let nickname = "Tommyboy" // *Insert nickname
let victories = 150 // *Insert number of wins
let xpAmount = calculateXP(victories) // Calculate XP based on wins
let rank = calculateRank(xpAmount) // Get the rank based on XP

// Display the final message
console.log("The hero " + nickname + " has rank " + rank + " with " + xpAmount + " XP.")