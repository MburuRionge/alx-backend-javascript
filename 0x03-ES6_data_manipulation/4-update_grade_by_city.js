function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);

  const updatedStudents = filteredStudents.map((student) => {
    const newStudent = student;

    for (const i of newGrades) { // check if ID is in newGrades
      if (i.studentId === newStudent.id) {
        newStudent.grade = i.grade;
        return newStudent;
      }
    }
    newStudent.grade = 'N/A';
    return newStudent;
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
