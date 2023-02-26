# tests/test_serializers.py
from django.test import TestCase
from backend.apis.serializers.userserializer import UserSerializer

from backend.apis.tests.factories.userfactory import UserFactory


class UserSerializerTest(TestCase):
    def test_model_fields(self):
        """Serializer data matches the User object for each field."""
        User = UserFactory()
        for field_name in [
            'id', 'username', 'password'
        ]:
            self.assertEqual(
                UserSerializer.data[field_name],
                getattr(User, field_name)
            )
