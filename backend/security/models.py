from django.db import models

def uploadImages(instance, filename):
    return f'mediaprueba/{filename}'

def upload_image(instance, filename):
    return f'mediaprueba/{filename}'

# Create your models here.
class Usuarios(models.Model):
    ruta_fotografia = models.ImageField(null=True, blank=False, upload_to=upload_image)
    nombres = models.CharField(max_length=50, null=False, blank=True)
    apellido_paterno = models.CharField(max_length=30, null=False, blank=True)
    apellido_materno = models.CharField(max_length=30, null=False, blank=True)
    dni = models.CharField(max_length=8, null=False, blank=True)
    celular = models.CharField(max_length=9, null=False, blank=True)
    domicilio = models.CharField(max_length=50, null=False, blank=True)
    sexo = models.CharField(max_length=20, null=False, blank=True)
    fecha_nacimiento = models.DateField(null=False, blank=True)
    fecha_creacion = models.DateField(auto_now_add=True, null=False)

    class Meta:
        db_table="usuarios"