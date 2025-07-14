/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

// Export constants for each subject
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Export a teacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'Chioma',
  lastName: 'Ikechukwu',
  fullTimeEmployee: true,
  location: 'Lagos',
  experienceTeachingC: 10,
};

// Use the teacher in Cpp, Java, and React subjects

// --- Cpp ---
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// --- Java ---
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// --- React ---
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());