/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // 🔁 Declaration Merging: Add optional experienceTeachingReact
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // 📘 React class extending Subject
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher;

      if (teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }
      return 'No available teacher';
    }
  }
}