function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (addMark) {
  if(this.marks === undefined){ 
    this.marks = [addMark];
  } else {
    this.marks.push(addMark);
  }
}

Student.prototype.addMarks = function (...addMarks) {
  if(this.marks === undefined){ 
    this.marks = [...addMarks];
  } else {
    this.marks.push(...addMarks);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let value of this.marks) {
    sum += value;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}