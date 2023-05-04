from rest_framework import serializers
from .models import Class

class ClassSerializers(serializers.ModelSerializer):
    model = Class
    fields = (
        "id",
        "title",
        "description",
        "date",
        "time"
    )