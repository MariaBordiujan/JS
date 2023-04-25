let grades = [ 0, 0, 0 ]

// HW1 ввести оценки через prompt()
// HW2* проверить, если оценка в диапазоне от 1 до 10
for (i=0; i<grades.length; i++) {
    let grade = parseInt( prompt ("Введите оценку") )
    if ( grade > 0 && grade <= 10 ) {
        grades[i] = grade
    } else {
        alert('Error')
    }
}

let avg_grade = (grades[0] + grades[1] + grades[2]) / 3
alert(`Средняя оценка = ${avg_grade.toFixed(2)}`)
