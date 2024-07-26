// function processData(input: string | number, config: { reverse: boolean } = { reverse: false }): string | number {
//     if (typeof input === "number") {
//         return input * input
//     } else {
//         return config.reverse ? input.split('').reverse().join("").toUpperCase() : input.toUpperCase()
//     }
// }

// console.log(processData('hello', {reverse: true}))

//type alias

// type Employee = {
//     id: number,
//     name: string, 
//     department: string
// }

// type Manager = {
//     id: number,
//     name: string, 
//     employees: Employee[]
// }

// type Staff = Employee | Manager

// function printStaffDetails(staff: Staff):void {
//     if(staff.employees){
//         console.log(`${staff.name} is a Manager, managing ${staff.employees.length} employees.`)
//     }else{
//         console.log(`${staff.name} is an employee, in ${staff.department} department.`)
//     }
// }

// printStaffDetails({ id: 1234,
//     name: 'Adam', 
//     employees: [{ id: 12444,
//         name: 'Mathew', 
//         department: 'CSE'},
//         { id: 4321,
//             name: 'Maria', 
//             department: 'ECE'}]})

// type guards

// function printLength(str: string|null|undefined):void{
//     if(str){
//         console.log(str.length)
//     }else{
//         console.log('No String provided')
//     }
// }

// printLength('n')

// function createArray<T>(num:number, val:T):Array<T>{
//     let res:T[] = []
//     // for(let i=0; i<num; i++){
//     //     res.push(val)
//     // }
//     res = Array(num).fill(val)
//     return res
// }

// console.log(createArray<string>(3, 'hello'));
// console.log(createArray<number>(5, 12345));