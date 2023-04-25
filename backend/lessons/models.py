from django.db import models

# Create your models here.

class Teacher(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f' {self.id} - {self.first_name} {self.last_name}'

class Student(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    age = models.SmallIntegerField()
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f' {self.id} - {self.first_name} {self.last_name}'

class Class(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    # a multi choice according to the field will be added here
    date = models.DateField()
    time = models.TimeField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.title}'

class StudentTeacher(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    def __str__(self):
      return f'Student: {self.student} - Teacher: ${self.teacher}'
    # this table will be probably removed since it seems functionless now and I will add the user table next time 