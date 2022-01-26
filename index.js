const fs = require('fs')
//
// fs.readFile('weekends.json', (err, data) => {
//
//     let workers = JSON.parse(data);
//
//     Object.defineProperty(
//         workers,
//         'status',
//         {
//             configurable: true, // Defaults to `false`
//         }
//     );

const json = fs.readFileSync('weekends.json', 'utf-8')

const object = JSON.parse(json)



object.forEach(item => {
    delete item.status;
    delete item.usedDays;
    let name = item.user.name
    let user = item.user._id
    delete item.user
    item.userId = user
    item.name = name

    let week = {}
    week.startDate = item.startDate
    week.endDate = item.endDate
    item.weekends = [week]

    delete item.startDate
    delete item.endDate
    delete item._id

});

// console.log(object)

// let newObj = []
let arr = []
let setNames = new Set()
let setObjects = new Set(object)
let firstSize = setNames.size


object.forEach(value => {
    setNames.add(value.name)
    if (firstSize === setNames.size) arr.push(value)

    firstSize = setNames.size
})

setObjects.forEach(val => {
    arr.forEach(value => {
        if (value.name === val.name){
            let newDate = value.weekends
            console.log(newDate)
            val.weekends.push()
        }
    })
})


console.log(setObjects)

// object.forEach( => {
//
//     newObj.push(item)
//
//
// })


// });
//
// let workers = {
//     firstN: 'kek',
//     lastN: 'cheburek'
// }
//
// console.log(workers)
//
// delete workers.firstN
// // delete workers.usedDays
//
// console.log(workers)