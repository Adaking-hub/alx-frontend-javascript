/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    private teacher!: Teacher;  // ✅ Tell TypeScript you'll assign it later

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    get getTeacher(): Teacher {
      return this.teacher;
    }
  }
}