from django.db import models
from django.contrib.auth.models import User

# Create your models here.

CLASS_LENGTH = (
    ("30 min", "30 min"),
    ("45 min", "45 min"),
    ("60 min", "60 min"),
)

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
    class_length = models.CharField(
        choices = CLASS_LENGTH,
        max_length=30,
        default = '30 min'
        )
    def __str__(self):
        return f'{self.title}'    
    class Meta:
        verbose_name_plural = "Classes" 



class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    class_reservation = models.ForeignKey(Class, on_delete=models.CASCADE, related_name="reservation")
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="students")
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name="teachers")

    def __str__(self):
      return f'Student: {self.student} - Teacher: ${self.teacher}'
    class Meta:
        verbose_name_plural = "Students & Teachers"     # this table will be probably removed since it seems functionless now and I will add the user table next time 