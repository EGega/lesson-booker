from rest_framework import serializers
from django.contrib.auth.models import User # we will use it for registration purposes
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
class RegisterSerializer(serializers.ModelSerializer):
    
    email = serializers.EmailField(
    required=True,
    validators = [UniqueValidator(queryset=User.objects.all())] 
     )
    
    #passwordtwo is not part of the User model , we need it just for the purpose of confirmation, I won't save it on the server though
    password = serializers.CharField(
        write_only = True,
        required = True,
        validators = [validate_password], #Django's default password validator (can be found on main settings)
        style = {"input_type" : "password"}
    )
    password = serializers.CharField(
        write_only = True,
        required = True,
        style = {"input_type" : "password"}
    )
    
    class Meta:
        model = User
        fields = [
            "username",
            "first_name",
            "last_name",
            "email",
            "password",
            "password2",
              ]