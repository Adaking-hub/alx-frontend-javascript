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
