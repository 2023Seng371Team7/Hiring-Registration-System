
from backend.apis.models.usermodel import User
from rest_framework.serializers import ModelSerializer


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id', 'username', 'password'
        )
