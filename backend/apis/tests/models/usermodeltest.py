from django.test import TestCase

from backend.apis.tests.factories.userfactory import UserFactory


class UserTestCase(TestCase):
    def test_str(self):
        """Test for string representation."""
        user = UserFactory()
        self.assertEqual(str(user), user.username)
