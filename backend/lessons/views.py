from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ClassSerializer
from .models import Class 
# from rest_framework.permissions import IsAdminUser
from .permissions import IsTeacherorReadOnly

# Create your views here.

class ClassView(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
    permission_classes = (IsTeacherorReadOnly, )