interface Teacher{
   readonly firstName: string;
   readonly lastName: string;
   fullTimeEmployee: boolean;
   yearsOfExperience?: number;
   location: string;
   [key: string]: any;
  
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher: Teacher = {
  firstName: 'Chioma',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director: Directors = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  numberOfReports: 17
}
console.log(teacher);
console.log(director);


interface printTeacherFunction{
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}.${lastName}`;
};

console.log(printTeacher("John", "Doe"));

interface studentClassInterface{
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string{
    return 'currently working';
  }

  displayName(): string{
    return this.firstName;
  }
}

const student = new StudentClass('Chioma', 'Blessing');
console.log(student.displayName());
console.log(student.workOnHomework());