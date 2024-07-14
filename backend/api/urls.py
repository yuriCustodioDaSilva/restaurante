from django.urls import path
from .views import criar_usuario

urlpatterns = [
    path('usuarios/', criar_usuario, name='criar-usuario'),
]
