/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // 🧩 Declaration Merging: Add optional experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // 📘 Java class extends Subject
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const teacher = this.getTeacher;

      if (teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${teacher.firstName}`;
      }

      return 'No available teacher';
    }
  }
}