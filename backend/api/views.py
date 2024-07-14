from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Usuario  # Certifique-se de importar o modelo Usuario
from .serializers import UsuarioSerializer  # Certifique-se de importar o serializer

@api_view(['POST'])
def criar_usuario(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)