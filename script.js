"use strict";
let newFirstNameStudent = document.getElementById("first-name");
let newLastNameStudent = document.getElementById("last-name");
let newAgeStudent = document.getElementById("age-student");
let newMobileStudent = document.getElementById("mobile-number");
let newEnteringYearStudent = document.getElementById("enteringYear");
let newGPAStudent = document.getElementById("gpa-number");
let newIsMarriedStudent = document.getElementById("marrid");
let newGenderStudent = document.getElementById("gender");
let newAddressStudent = document.getElementById("address-student");
let addNewUserInTable = document.getElementById("modal-body-table");
let saveButtonInModal = document.getElementById("save-button");
let createStudentButton = document.getElementById("add-button");
let tableItems = document.getElementById("table-items");
let modalButton = document.getElementById("modal-button");
//#region class
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
    gender[gender["unknown"] = 2] = "unknown";
})(gender || (gender = {}));
class User {
}
class Student extends User {
}
//#endregion
let students = [
    {
        id: 1,
        firstName: "Negar",
        lastName: "Rezaei",
        age: 50,
        mobileNumber: 637916758914,
        address: "1745 T Street Southeast",
        isMarried: true,
        gender: gender[0],
        enteringYear: 1397,
        GPA: 19.5,
        Major: "computer",
    },
    {
        id: 2,
        firstName: "Hamid",
        lastName: "Torbatian",
        age: 25,
        mobileNumber: 637916758914,
        address: "1745 T Street Southeast",
        isMarried: true,
        gender: gender[0],
        enteringYear: 1397,
        GPA: 19.5,
        Major: "computer",
    },
    {
        id: 3,
        firstName: "Terry",
        lastName: "Medhurst",
        age: 50,
        mobileNumber: 637916758914,
        address: "1745 T Street Southeast",
        isMarried: true,
        gender: gender[0],
        enteringYear: 1397,
        GPA: 19.5,
        Major: "computer",
    },
];
createTable();
class StudentService {
    constructor(students) {
        this.students = students;
    }
    getStudents() {
        return students;
    }
    getStudentByID(studentId) {
        const sutdent = students.find((student) => student.id == studentId);
        if (sutdent)
            return sutdent;
        else
            return null;
    }
    deleteStudent(studentId) {
        const index = students.findIndex((student) => student.id == studentId);
        if (index > -1) {
            students.splice(index, 1);
            return true;
        }
        return false;
    }
    updateStudent(studentId, student) {
        let index = students.findIndex((student) => {
            return student.id == studentId;
        });
        if (index > -1) {
            students[index] = student;
            return true;
        }
        else
            return false;
    }
    createStudent(student) {
        if (student) {
            students.push(student);
            return true;
        }
        else
            return false;
    }
}
let studentService = new StudentService(students);
//#region gender
function genderUsers(genderNumber) {
    console.log(gender[genderNumber]);
}
//#endregion
function createTable() {
    let createTableRow = "";
    students.forEach((student) => {
        createTableRow += `
<tr>
<td>${student.firstName}</td>
<td>${student.lastName}</td>
<td>${student.age}</td>
<td>${student.mobileNumber}</td>
<td>${student.address}</td>
<td>${student.isMarried}</td>
<td>${student.gender}</td>
<td>${student.enteringYear}</td>
<td>${student.GPA}</td>
<td>${student.Major}</td>
<td>
   <div class="icone-panel">    
    <i class="mdi tooltip1  pr-2 icone-panel-edite mdi-square-edit-outline"  data-toggle="modal"   data-target="#edite-table-items" onclick="editStudent('${student.id}')"></i>
    <i class="mdi mdi-delete icon-panel-delete" data-toggle="modal" data-target="#myModal" onclick = "deleteStudent('${student.id}')"></i>
   </div>
</td>
</tr>
`;
    });
    tableItems.innerHTML = createTableRow;
}
//#region addNewStudent
function addnewStudent() {
    let Information = {
        firstName: newLastNameStudent.value,
        lastName: newFirstNameStudent.value,
        age: newAgeStudent.value,
        mobileNumber: newMobileStudent.value,
        address: newAddressStudent.value,
        isMarried: newIsMarriedStudent.value,
        gender: newGenderStudent.value,
        enteringYear: newEnteringYearStudent.value,
        GPA: newGPAStudent.value,
    };
    studentService.createStudent(Information);
    createTable();
}
//#endregion
//#region delete
function deleteStudent(studentId) {
    let studentService = new StudentService(students);
    studentService.deleteStudent(studentId);
    createTable();
}
//#endregion
//#region edit
function defaultValueInInput(studentId) {
    let findStudent = students.find((student) => student.id == studentId);
    newLastNameStudent.value = findStudent.lastName;
    newFirstNameStudent.value = findStudent.firstName;
    newAgeStudent.value = findStudent.age;
    newMobileStudent.value = findStudent.mobileNumber;
    newEnteringYearStudent.value = findStudent.enteringYear;
    newGPAStudent.value = findStudent.GPA;
    newIsMarriedStudent.value = findStudent.isMarried;
    newGenderStudent.value = findStudent.gender;
    newAddressStudent.value = findStudent.address;
}
function editStudent(studentId) {
    defaultValueInInput(studentId);
    let editInformationStudents = {
        firstName: newLastNameStudent.value,
        lastName: newFirstNameStudent.value,
        age: newAgeStudent.value,
        mobileNumber: newMobileStudent.value,
        address: newAddressStudent.value,
        isMarried: newIsMarriedStudent.value,
        gender: newGenderStudent.value,
        enteringYear: newEnteringYearStudent.value,
        GPA: newGPAStudent.value,
    };
    studentService.updateStudent(studentId, editInformationStudents);
    createTable();
}
//#endregion
