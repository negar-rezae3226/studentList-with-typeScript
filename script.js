"use strict";
let newFirstNameStudent = document.getElementById("first-name");
let newLastNameStudent = document.getElementById("last-name");
let newAgeStudent = document.getElementById("age-student");
let newMobileStudent = document.getElementById("mobile-number");
let newEnteringYearStudent = document.getElementById("enteringYear");
let newGPAStudent = document.getElementById("gpa-number");
let newIsMarriedStudent = document.getElementById("married");
let newGenderStudent = document.getElementById("gender");
let newMajorStudent = document.getElementById("major");
let newAddressStudent = document.getElementById("address-student");
let newIdStudent = document.getElementById("id-student");
let addNewUserInTable = document.getElementById("modal-body-table");
let saveButtonInModal = document.getElementById("save-button");
let createStudentButton = document.getElementById("add-button");
let tableItems = document.getElementById("table-items");
let modalButton = document.getElementById("modal-button");
let modalTitle = document.getElementById("exampleModalToggleLabel");
let buttonInModal = document.getElementById('button-edite');
//#region class
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
    gender[gender["Unknown"] = 2] = "Unknown";
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
        age: 22,
        mobileNumber: 637916758914,
        address: "1745 T Street Southeast",
        isMarried: "No",
        gender: gender[1],
        enteringYear: 1397,
        GPA: 19.5,
        Major: "computer engineering",
    },
    {
        id: 2,
        firstName: "Hamid",
        lastName: "Torbatian",
        age: 25,
        mobileNumber: 637916758914,
        address: "1745 T Street Southeast",
        isMarried: "No",
        gender: gender[0],
        enteringYear: 1397,
        GPA: 19.5,
        Major: "computer engineering",
    },
    {
        id: 3,
        firstName: "Terry",
        lastName: "Medhurst",
        age: 50,
        mobileNumber: 637916758914,
        address: "1745 T Street Southeast",
        isMarried: "Yes",
        gender: gender[2],
        enteringYear: 1397,
        GPA: 19.5,
        Major: "Accounting",
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
        const student = students.find((student) => student.id == studentId);
        if (student)
            return student;
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
<td>${student.Major}</td>
<td>${student.address}</td>
<td>${student.isMarried}</td>
<td>${student.gender}</td>
<td>${student.enteringYear}</td>
<td>${student.GPA}</td>
<td>
   <div class="icone-panel">    
    <i class="mdi tooltip1  pr-2 icone-panel-edite mdi-square-edit-outline"  data-toggle="modal"   data-target="#edite-table-items" onclick="defaultValueInInput('${student.id}')"></i>
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
    // let idNumber = (newIdStudent as HTMLInputElement).value;
    let lastNameStudent = newLastNameStudent.value;
    let firstNameStudent = newFirstNameStudent.value;
    let ageStudent = newAgeStudent.value;
    let mobileNumberStudent = newMobileStudent.value;
    let addressStudent = newAddressStudent.value;
    let isMarriedStudent = newIsMarriedStudent.value;
    let genderStudent = newGenderStudent.value;
    let enteringYearStudent = newEnteringYearStudent.value;
    let GPAStudent = newGPAStudent.value;
    let majorStudent = newMajorStudent.value;
    if (!lastNameStudent || !firstNameStudent || !ageStudent || !mobileNumberStudent || !addressStudent || !isMarriedStudent || !genderStudent || !enteringYearStudent || !majorStudent || !GPAStudent) {
        let buttonsClick1 = '';
        buttonsClick1 = `
       <button type="button" class="btn btn-success" aria-label="Close">save</button>
       <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">cancel</button>
  `;
        buttonInModal.innerHTML = buttonsClick1;
        if (!firstNameStudent) {
            newFirstNameStudent.style.borderColor = "red";
        }
        // if (!idNumber) {
        //   (newIdStudent as HTMLInputElement).style.borderColor = "red";
        // }
        if (!lastNameStudent) {
            newLastNameStudent.style.borderColor = "red";
        }
        if (!ageStudent) {
            newAgeStudent.style.borderColor = "red";
        }
        if (!mobileNumberStudent) {
            newMobileStudent.style.borderColor = "red";
        }
        if (!addressStudent) {
            newAddressStudent.style.borderColor = "red";
        }
        if (!GPAStudent) {
            newGPAStudent.style.borderColor = "red";
        }
        if (!enteringYearStudent) {
            newEnteringYearStudent.style.borderColor = "red";
        }
        if (!isMarriedStudent) {
            newIsMarriedStudent.style.borderColor = "red";
        }
        if (!genderStudent) {
            newGenderStudent.style.borderColor = "red";
        }
        if (!majorStudent) {
            newMajorStudent.style.borderColor = "red";
        }
        return;
    }
    // let idChangeToNumber = +idNumber;
    let Information = {
        id: ageStudent,
        firstName: lastNameStudent,
        lastName: firstNameStudent,
        age: ageStudent,
        mobileNumber: mobileNumberStudent,
        address: addressStudent,
        isMarried: isMarriedStudent,
        gender: genderStudent,
        enteringYear: enteringYearStudent,
        GPA: GPAStudent,
        Major: majorStudent,
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
    let buttonsClick = "";
    buttonsClick = `
     <button type="button" class="btn btn-success" data-dismiss="modal" aria-label="Close" onclick="editStudent(${studentId})">save</button>
     <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">cancel</button>
`;
    buttonInModal.innerHTML = buttonsClick;
    let findStudent = students.find((student) => student.id == studentId);
    let optionSelectMarried = findStudent.isMarried;
    let optionSelectGender = findStudent.gender;
    let optionSelectMajor = findStudent.Major;
    document.getElementById(optionSelectMarried).setAttribute("selected", "selected");
    document.getElementById(optionSelectGender).setAttribute('selected', 'selected');
    document.getElementById(optionSelectMajor).setAttribute('selected', 'selected');
    newLastNameStudent.value = findStudent.lastName;
    newFirstNameStudent.value = findStudent.firstName;
    newAgeStudent.value = findStudent.age;
    newMobileStudent.value = findStudent.mobileNumber;
    newEnteringYearStudent.value = findStudent.enteringYear;
    newGPAStudent.value = findStudent.GPA;
    newAddressStudent.value = findStudent.address;
    // (newIdStudent as HTMLInputElement).value = findStudent.id;
}
function editStudent(studentId) {
    let editInformationStudents = {
        id: newAgeStudent.value,
        firstName: newFirstNameStudent.value,
        lastName: newLastNameStudent.value,
        age: newAgeStudent.value,
        mobileNumber: newMobileStudent.value,
        address: newAddressStudent.value,
        isMarried: newIsMarriedStudent.value,
        gender: newGenderStudent.value,
        enteringYear: newEnteringYearStudent.value,
        GPA: newGPAStudent.value,
        Major: newMajorStudent.value,
    };
    let studentService = new StudentService(students);
    studentService.updateStudent(studentId, editInformationStudents);
    createTable();
}
//#endregion
