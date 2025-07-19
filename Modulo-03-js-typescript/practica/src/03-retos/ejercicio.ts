console.log("************** CHALLENGES *********************");
console.log("Use this folder 02 challenges to practice with challenge exercises");
console.log("You can add new files as long as they are imported from index.ts");

console.log("------------------301 Califications Summary ----------------");
// Defino los tipos
type Student = {
    name: string;
    califications: number[];
};

type StudentSummary = {
    name: string;
    highestCalification: number;
    averageCalifitacion: string;
};

const students:Student[] = [
    { name: "Juan", califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
    { name: "Álvaro", califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
    { name: "María", califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3] },
    { name: "Jorge", califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
    { name: "Mónica", califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];

const highestCalificationFN = (califications: number[]):number =>{
    return Math.max(...califications)
}
const averageCalifications = (califications: number[]): number =>{
    if (califications.length === 0) {
        return 0;
    }
    const suma = califications.reduce((total, calification) => total + calification, 0);
    return suma / califications.length;
}

const summarizeClassRoom = (studentList: Student[]): StudentSummary[]  => {
    
        return studentList.map(student => {
            const maxCalifications = highestCalificationFN(student.califications) 
            const averageCalifitacion = averageCalifications(student.califications)
            return {
                name: student.name,
                highestCalification: Number(maxCalifications),
                averageCalifitacion: Number(averageCalifitacion).toPrecision(3)
            };
        });
    
};

console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]

console.log("------------------302 Curry Setter ----------------");

type Person  = {
    name: string;
    surname: string;
    age: number;
};

const julia: Person = { name: "Julia", surname: "Álvarez", age: 19 };
const set = <T>(obj: T, key: keyof T, value: T[keyof T]): T =>{
    return {
        ...obj,
        [key]: value,
    };
}
const updatedJulia = set(julia, "age", 25);


console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false*/

console.log("------------------303 Morse ----------------");