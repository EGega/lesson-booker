from django.urls import path, include
from .views import ClassView
from rest_framework import routers

router = routers.DefaultRouter()
router.register("classes", ClassView )
urlpatterns = [

]
urlpatterns += router.urls