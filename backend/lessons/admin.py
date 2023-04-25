from django.contrib import admin
from .models import Teacher, Student, StudentTeacher, Class
# Register your models here.
admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(StudentTeacher)
admin.site.register(Class)