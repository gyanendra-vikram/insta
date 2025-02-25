from rest_framework import generics
from .models import Follower
from .serializers import FollowerSerializer

class FollowerListCreateView(generics.ListCreateAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer
