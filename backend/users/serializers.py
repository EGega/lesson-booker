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
    
    def validate(self, data):
        if data["password"] != data["password2"]: # we are validating if the passwords are the same 
            raise serializers.ValidationError(
                {"message": "Password fields didn't match!"}
            )
            
        return data
    
    # we need to get the password 2 out of the list since it will not be registered in the database and also save the password in a hashed way
    def create(self, validated_data):
        password = validated_data.get("password")
        validated_data.pop("password2")
        user = User.objects.create(**validated_data) # we are mapping the data here
        user.set_password(password)
        user.save()
        return user