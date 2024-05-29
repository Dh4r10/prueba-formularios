from django.db import models

def uploadImages(instance, filename):
    return f'mediaprueba/{filename}'

def upload_image(instance, filename):
    return f'mediaprueba/{filename}'

# Create your models here.
class Usuarios(models.Model):
    ruta_fotografia = models.CharField(max_length=255, null=False, default="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280-580x580.jpg")
    nombre = models.CharField(max_length=50, null=False, blank=False)
    apellido_paterno = models.CharField(max_length=30, null=False, blank=False)
    apellido_materno = models.CharField(max_length=30, null=False, blank=False)
    celular = models.CharField(max_length=9, null=False, blank=False)
    sexo = models.CharField(max_length=20, null=False, blank=False)
    correo = models.EmailField(max_length=100, null=False, blank=False)
    fecha_nacimiento = models.DateField(null=False, blank=False)
    fecha_creacion = models.DateField(auto_now_add=True, null=False)
    id_tipo_usuario = models.IntegerField(null=False, blank=False)
    username = models.CharField(max_length=50, null=False, blank=False)
    password = models.CharField(max_length=50, null=False, blank=False)
    departamento = models.CharField(max_length=50, null=False, blank=False)
    provincia = models.CharField(max_length=50, null=True, blank=True, default=None)
    distrito = models.CharField(max_length=50, null=True, blank=True, default=None)
    

    class Meta:
        db_table="usuarios"