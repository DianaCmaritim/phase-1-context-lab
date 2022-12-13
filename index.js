/* Your Code Here */

function createEmployeeRecord(array){
    const employeeRecord = {
        firstName:`${array[0]}`,
        familyName:`${array[1]}`,
        title:`${array[2]}`,
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]

    }
    return employeeRecord
}

function createEmployeeRecords(employeeData){
    return employeeData.map(record =>createEmployeeRecord(record))
}

let createTimeInEvent=function(dateStp){

    let [date, hour] = dateStp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,

    })
    return this
}

let createTimeOutEvent=function(dateStp){

    let [date, hour] = dateStp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,

    })
    return this
}


function hoursWorkedOnDate(date){

    const hoursWorked = Number(createTimeOutEvent(date)) - Number(createTimeInEvent(date).hour)
    return hoursWorked

}


function hoursWorkedOnDate(date){


    // const hoursWorked = Number(createTimeOutEvent(date)) - Number(createTimeInEvent(date).hour)
    // return hoursWorked

    const timeIn = this.timeInEvents.find(obj => obj.date===date)
    const timeOut = this.timeOutEvents.find(obj=> obj.date===date)

    return (timeOut.hour-timeIn.hour)/100
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this,date)*(this.payPerHour)
}

function calculatePayroll(employees){
    return employees.reduce((totalPay,item)=>totalPay + allWagesFor.call(item),0);
}


function findEmployeeByFirstName(employeeRecord,firstNameStr){
    return employeeRecord.find(item =>item.firstName ===firstNameStr)
}

