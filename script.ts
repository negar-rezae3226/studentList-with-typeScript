let newFirstNameStudent: HTMLElement | null = document.getElementById("first-name");
let newLastNameStudent: HTMLElement | null = document.getElementById("last-name");
let newAgeStudent: HTMLElement | null = document.getElementById("age-student");
let newMobileStudent: HTMLElement | null = document.getElementById("mobile-number");
let newEnteringYearStudent: HTMLElement | null = document.getElementById("enteringYear");
let newGPAStudent: HTMLElement | null = document.getElementById("gpa-number");
let newIsMarriedStudent: HTMLElement | null = document.getElementById("marrid");
let newGenderStudent: HTMLElement | null = document.getElementById("gender");
let newAddressStudent: HTMLElement | null = document.getElementById("address-student");
let addNewUserInTable: HTMLElement | null = document.getElementById("modal-body-table");
let saveButtonInModal: HTMLElement | null = document.getElementById("save-button");
let createStudentButton: HTMLElement | null = document.getElementById("add-button");
let tableItems: HTMLElement | null = document.getElementById("table-items");
let modalButton: HTMLElement | null = document.getElementById("modal-button");




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
  isMarried?: boolean;
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
    const sutdent = students.find((student) => student.id == studentId);
    if (sutdent) return sutdent;
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
  (tableItems as HTMLElement).innerHTML = createTableRow;
}

//#region addNewStudent

function addnewStudent() : void {


  let Information = {
    firstName: (newLastNameStudent as HTMLElement).value,
    lastName: (newFirstNameStudent as HTMLElement).value,
    age: (newAgeStudent as HTMLElement).value,
    mobileNumber: (newMobileStudent as HTMLElement).value,
    address: (newAddressStudent as HTMLElement).value,
    isMarried: (newIsMarriedStudent as HTMLElement).value,
    gender: (newGenderStudent as HTMLElement).value,
    enteringYear: (newEnteringYearStudent as HTMLElement).value,
    GPA: (newGPAStudent as HTMLElement).value,
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

    let findStudent: any = students.find((student) => student.id == studentId);

    (newLastNameStudent as HTMLElement).value = findStudent.lastName;
    (newFirstNameStudent as HTMLElement).value = findStudent.firstName;
    (newAgeStudent as HTMLElement).value = findStudent.age;
    (newMobileStudent as HTMLElement).value = findStudent.mobileNumber;
    (newEnteringYearStudent as HTMLElement).value = findStudent.enteringYear;
    (newGPAStudent as HTMLElement).value = findStudent.GPA;
    (newIsMarriedStudent as HTMLElement).value = findStudent.isMarried;
    (newGenderStudent as HTMLElement).value = findStudent.gender;
    (newAddressStudent as HTMLElement).value = findStudent.address;
}

function editStudent(studentId: number): void {

  defaultValueInInput(studentId);
  
    let editInformationStudents = {
      firstName: (newLastNameStudent as HTMLElement).value,
      lastName: (newFirstNameStudent as HTMLElement).value,
      age: (newAgeStudent as HTMLElement).value,
      mobileNumber: (newMobileStudent as HTMLElement).value,
      address: (newAddressStudent as HTMLElement).value,
      isMarried: (newIsMarriedStudent as HTMLElement).value,
      gender: (newGenderStudent as HTMLElement).value,
      enteringYear: (newEnteringYearStudent as HTMLElement).value,
      GPA: (newGPAStudent as HTMLElement).value,
    };

  studentService.updateStudent(studentId, editInformationStudents);
  createTable();

}

//#endregion
