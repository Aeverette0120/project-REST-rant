const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
            
    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!',
    })
    let comment2 = await db.Comment.create({
        author: 'Hungry Harry',
        rant: true,
        stars: 1.5,
        content: 'WBy God, this food was bland! I do not recommend!',
    })
    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    place.comment2.push(comment2.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()

