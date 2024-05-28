from .models import Usuarios
from .serializers import UsuariosSerializer
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset=Usuarios.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=UsuariosSerializer