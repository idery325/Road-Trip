from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Place
from .serializers import MySerializer

class MyAPIView(APIView):
    def get(self, request):
        data = Place.objects.all()
        serializer = MySerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)