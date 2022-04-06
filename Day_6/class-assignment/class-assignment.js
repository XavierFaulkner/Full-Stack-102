class Job {
    constructor(jobName, industry, requiresDegree, field, yrsExperience, wage) {
        this.jobName = jobName;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.yrsExperience = yrsExperience;
        this.wage = wage;
    }

    getName() {
        return `Job Name: ${this.jobName}`;
    }

    getFieldAndIndustry() {
        return `This job is in the field of ${this.field} in the ${this.industry} industry.`;
    }

    getWage() {
        return `This job pays $ ${this.wage},000 a year`;
    }

}

let job1 = new Job("Software Developer", "IT", true, "Software Development", 2, 70);
let job2 = new Job("Project Manager", "IT", true, "Project managment", 1, 80);
let job3 = new Job("Janitor", "Sanitation", false, "Cleaning", 0, 40);
console.log("\n Job object 1...");
console.log(job1.getName());
console.log(job1.getFieldAndIndustry());
console.log("\n Job object 2...");
console.log(job2.getName());
console.log(job2.getWage());
console.log("\n Job object 3...");
console.log(job3.getName());
console.log(job3.getWage());

class Employee extends Job {
    constructor(jobName, industry, RequiresDegree, field, yrsExperience, wage, employeeName, employeeNum) {
        super(jobName, industry, RequiresDegree, field, yrsExperience, wage);
        this.employeeName = employeeName;
        this.employeeNum = employeeNum;
    }

    getEmployeeName() {
        return `Employee Name: ${this.employeeName}`;
    }

    employeeSummary() {
        return `${this.employeeName} works as a ${this.jobName}. Their employee number is ${this.employeeNum} and they make $${this.wage},000 a year.`;
    }
}

let employee = new Employee("Software Developer", "IT", true, "Software Development", 2, 70, "Xavier", 7262002);

console.log("\nEmployee object that extends Job...");
console.log(employee.getEmployeeName());
console.log(employee.employeeSummary());

let myGlobalVar = "";

function scopeFunction() {
	let myVar = "apple";
	return myVar;
}

myGlobalVar = scopeFunction();
console.log(myGlobalVar);