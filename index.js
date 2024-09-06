#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap kis se bat karna passand kare ge.....",
            name: "Select",
            choices: ["khud se:Seif", "student"],
        });
        if (ans.Select == "khud se:Seif") {
            console.log("hello me khud se bat kar raha hunc");
            console.log("meri tabiyat achi hay.");
        }
        if (ans.Select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "ap ko kis student se bat karni hay.",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, or me theek ho `);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, or me theek ho ....... `);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
