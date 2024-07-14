from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario
from .serializers import UsuarioSerializer
from django.http import JsonResponse

@api_view(['POST'])
def criar_usuario(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def listar_usuarios(request):
    usuarios = Usuario.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return JsonResponse({'usuarios': serializer.data})

@api_view(['POST'])
def login_usuario(request):
    nome = request.data.get('nome')
    senha = request.data.get('senha')

    try:
        usuario = Usuario.objects.get(nome=nome, senha=senha)
    except Usuario.DoesNotExist:
        return Response({'error': 'Usuário não encontrado ou senha incorreta.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = UsuarioSerializer(usuario)
    return JsonResponse(serializer.data)

# urls.py
from django.urls import path
from .views import criar_usuario, listar_usuarios, login_usuario

urlpatterns = [
    path('usuarios/', criar_usuario, name='criar-usuario'),
    path('usuarios/listar/', listar_usuarios, name='listar_usuarios'),
    path('api/login/', login_usuario, name='login_usuario'),
]
