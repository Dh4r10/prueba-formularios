from .views import UsuariosViewSet
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter()

router.register('api/usuarios', UsuariosViewSet, basename='usuarios')
urlpatterns = [
    path('', include(router.urls)),
]