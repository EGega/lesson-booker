from django.contrib.auth.models import User
from django.db.models.signals import post_save
#after we have created an user we save it 
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=User)
def create_Token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
# the token will be created by using signal as long as I register an user, so there will be no need for login after registration

