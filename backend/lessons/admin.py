from django.contrib import admin
from .models import Teacher, Student, Reservation, Class
# Register your models here.
admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Reservation)
admin.site.register(Class)