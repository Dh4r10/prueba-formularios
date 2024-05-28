# Generated by Django 4.2.4 on 2024-05-28 18:49

from django.db import migrations, models
import security.models


class Migration(migrations.Migration):

    dependencies = [
        ('security', '0005_alter_usuarios_ruta_fotografia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='ruta_fotografia',
            field=models.ImageField(null=True, upload_to=security.models.uploadImages),
        ),
    ]
