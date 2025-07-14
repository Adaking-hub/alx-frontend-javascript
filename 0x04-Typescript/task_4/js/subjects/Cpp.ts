/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // 👇 Declaration merging: Add a new optional property to Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // 👇 Cpp class extends Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (
        this['getTeacher'] &&
        this['getTeacher'].experienceTeachingC !== undefined &&
        this['getTeacher'].experienceTeachingC > 0
      ) {
        return `Available Teacher: ${this['getTeacher'].firstName}`;
      }
      return 'No available teacher';
    }
  }
}