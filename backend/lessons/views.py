from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ClassSerializer
from .models import Class
# Create your views here.

class ClassView(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer