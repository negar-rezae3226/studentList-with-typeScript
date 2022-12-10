let newFirstNameStudent: HTMLElement | null = document.getElementById("first-name");
let newLastNameStudent: HTMLElement | null = document.getElementById("last-name");
let newAgeStudent: HTMLElement | null = document.getElementById("age-student");
let newMobileStudent: HTMLElement | null = document.getElementById("mobile-number");
let newEnteringYearStudent: HTMLElement | null = document.getElementById("enteringYear");
let newGPAStudent: HTMLElement | null = document.getElementById("gpa-number");
let newIsMarriedStudent: HTMLElement | null = document.getElementById("married");
let newGenderStudent: HTMLElement | null = document.getElementById("gender");
let newMajorStudent: HTMLElement | null = document.getElementById("major");
let newAddressStudent: HTMLElement | null = document.getElementById("address-student");
let newIdStudent: HTMLElement | null = document.getElementById("id-student");
let addNewUserInTable: HTMLElement | null = document.getElementById("modal-body-table");
let saveButtonInModal: HTMLElement | null = document.getElementById("save-button");
let createStudentButton: HTMLElement | null = document.getElementById("add-button");
let tableItems: HTMLElement | null = document.getElementById("table-items");
let modalButton: HTMLElement | null = document.getElementById("modal-button");
let modalTitle: HTMLElement | null = document.getElementById("exampleModalToggleLabel");
let buttonInModal: HTMLElement | null = document.getElementById('button-edite');




//#region class

enum gender {
  male,
  female,
  unknown,
}

class User {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  mobileNumber?: number;
  address?: string;
  isMarried?: string;
  gender?: string;
}

class Student extends User {
  enteringYear?: number;
  GPA?: number;
  Major?: string;
}


//#endregion


let students: Student[] = [
  {
    id: 1,
    firstName: "Negar",
    lastName: "Rezaei",
    age: 22,
    mobileNumber: 637916758914,
    address: "1745 T Street Southeast",
    isMarried: 'No',
    gender: gender[1],
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
    isMarried: "No",
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
    isMarried: "Yes",
    gender: gender[2],
    enteringYear: 1397,
    GPA: 19.5,
    Major: "computer",
  },
];

createTable();
interface IStudentService {
  getStudents(): Student[];
  getStudentByID(studentId: number): Student | null;
  deleteStudent(studentId: number): boolean;
  updateStudent(studentId: number, student: Student): boolean;
  createStudent(student: Student): boolean;
}

class StudentService implements IStudentService {
  protected students: Student[];

  constructor(students: Student[]) {
    this.students = students;
  }

  getStudents(): Student[] {
    return students;
  }

  getStudentByID(studentId: number): Student | null {
    const student = students.find((student) => student.id == studentId);
    if (student) return student;
    else return null;
  }

  deleteStudent(studentId: number): boolean {
    const index = students.findIndex((student) => student.id == studentId);
    if (index > -1) {
      students.splice(index, 1);
      return true;
    }
    return false;
  }

  updateStudent(studentId: number, student: Student): boolean {
    let index = students.findIndex((student) => {
      return student.id == studentId;
    });

    if (index > -1) {
      students[index] = student;
      return true;
    } else return false;
  }

  createStudent(student: Student): boolean {
    if (student) {
      students.push(student);
      return true;
    } else return false;
  }
}
let studentService = new StudentService(students);


//#region gender

function genderUsers(genderNumber: any): any {
  console.log(gender[genderNumber]);
}

//#endregion

function createTable(): void {

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
  (tableItems as HTMLElement).innerHTML = createTableRow;
}

//#region addNewStudent


function addnewStudent(): void {

  let idNumber = (newIdStudent as HTMLInputElement).value;
  let lastNameStudent = (newLastNameStudent as HTMLInputElement).value;
  let firstNameStudent = (newFirstNameStudent as HTMLInputElement).value;
  let ageStudent = (newAgeStudent as HTMLInputElement).value;
  let mobileNumberStudent = (newMobileStudent as HTMLInputElement).value;
  let addressStudent = (newAddressStudent as HTMLInputElement).value;
  let isMarriedStudent = (newIsMarriedStudent as HTMLInputElement).value;
  let genderStudent = (newGenderStudent as HTMLInputElement).value;
  let enteringYearStudent = (newEnteringYearStudent as HTMLInputElement).value;
  let GPAStudent = (newGPAStudent as HTMLInputElement).value;
  let majorStudent = (newMajorStudent as HTMLInputElement).value;

  if (!idNumber || !lastNameStudent || !firstNameStudent || !ageStudent || !mobileNumberStudent || !addressStudent || !isMarriedStudent || !genderStudent || !enteringYearStudent || !majorStudent || !GPAStudent) {

    let buttonsClick1 = '';
    buttonsClick1 = `
       <button type="button" class="btn btn-success" aria-label="Close">save</button>
       <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">cancel</button>
  `;
    (buttonInModal as HTMLInputElement).innerHTML = buttonsClick1;

    if (!firstNameStudent) {
      (newFirstNameStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!idNumber) {
      (newIdStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!lastNameStudent) {
      (newLastNameStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!ageStudent) {
      (newAgeStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!mobileNumberStudent) {
      (newMobileStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!addressStudent) {
      (newAddressStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!GPAStudent) {
      (newGPAStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!enteringYearStudent) {
      (newEnteringYearStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!isMarriedStudent) {
      (newIsMarriedStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!genderStudent) {
      (newGenderStudent as HTMLInputElement).style.borderColor = "red";
    }
    if (!majorStudent) {
      (newMajorStudent as HTMLInputElement).style.borderColor = "red";
    }
    return;

  }

  let idChangeToNumber = +idNumber;


  let Information: any = {
    id: idChangeToNumber,
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

function deleteStudent(studentId: number): void {
  let studentService = new StudentService(students);
  studentService.deleteStudent(studentId);
  createTable();
}

//#endregion

//#region edit

function defaultValueInInput(studentId: number): void {
  let majorSelect = document.getElementById('major-select');
  let genderSelect = document.getElementById('gender-select');
  let marriedSelect = document.getElementById('married-select');

  let buttonsClick = '';
  buttonsClick = `
     <button type="button" class="btn btn-success" data-dismiss="modal" aria-label="Close" onclick="editStudent(${studentId})">save</button>
     <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close">cancel</button>
`;
  (buttonInModal as HTMLInputElement).innerHTML = buttonsClick;

  let findStudent: any = students.find((student) => student.id == studentId);
  // (majorSelect as HTMLInputElement).innerHTML = findStudent.Major;
  // (genderSelect as HTMLInputElement).innerHTML = findStudent.gender;
  // (marriedSelect as HTMLInputElement).innerHTML = findStudent.isMarried;
  let optionSelectMarried = findStudent.isMarried;
  document.getElementById(optionSelectMarried).setAttribute('selected','selected');
  let optionSelectGender = findStudent.gender;
  document.getElementById(optionSelectGender).setAttribute('selected','selected');
  let optionSelectMajor = findStudent.Major;
  document.getElementById(optionSelectMajor).setAttribute('selected','selected');

  (newLastNameStudent as HTMLInputElement).value = findStudent.lastName;
  (newFirstNameStudent as HTMLInputElement).value = findStudent.firstName;
  (newAgeStudent as HTMLInputElement).value = findStudent.age;
  (newMobileStudent as HTMLInputElement).value = findStudent.mobileNumber;
  (newEnteringYearStudent as HTMLInputElement).value = findStudent.enteringYear;
  (newGPAStudent as HTMLInputElement).value = findStudent.GPA;
  (newAddressStudent as HTMLInputElement).value = findStudent.address;
  (newIdStudent as HTMLInputElement).value = findStudent.id;
}


function editStudent(studentId: number): void {


  let editInformationStudents: any = {
    id: (newIdStudent as HTMLInputElement).value,
    firstName: (newFirstNameStudent as HTMLInputElement).value,
    lastName: (newLastNameStudent as HTMLInputElement).value,
    age: (newAgeStudent as HTMLInputElement).value,
    mobileNumber: (newMobileStudent as HTMLInputElement).value,
    address: (newAddressStudent as HTMLInputElement).value,
    isMarried: (newIsMarriedStudent as HTMLInputElement).value,
    gender: (newGenderStudent as HTMLInputElement).value,
    enteringYear: (newEnteringYearStudent as HTMLInputElement).value,
    GPA: (newGPAStudent as HTMLInputElement).value,
    Major: (newMajorStudent as HTMLInputElement).value,
  };
  let studentService = new StudentService(students);
  studentService.updateStudent(studentId, editInformationStudents);
  createTable();

}

//#endregion


