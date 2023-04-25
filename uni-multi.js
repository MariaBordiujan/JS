let grades_ = [
    [
        [9, 10, 9, 8, 10],
        [8, 8,  8, 8,  8]
    ],
    [
        [7, 10, 9, 8, 10],
        [8, 7,  8, 8,  6],
        [8, 8,  5, 8,  8]
    ]
]

let group_index = +prompt('Choose group index(0,1): ')
let student_index = +prompt('Choose student index: ')

for (let i=0; i<5; i++) {
    console.log(grades_[group_index][student_index][i])
}

// HW1: using for() + prompt() enter 5 marks for 1 student from keyboard
for(i=0; i<5; i++) {
    grades_[1][2][i] = prompt('Enter 5 marks')
}
