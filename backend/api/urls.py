from django.urls import path
from .views import criar_usuario, listar_usuarios, login_usuario

urlpatterns = [
    path('usuarios/', criar_usuario, name='criar-usuario'),
    path('usuarios/listar/', listar_usuarios, name='listar_usuarios'),
    path('api/login/', login_usuario, name='login_usuario'),
]