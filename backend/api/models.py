from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    senha = models.CharField(max_length=100)
    ativo = models.BooleanField(default=True)

    def __str__(self):
        return self.nome