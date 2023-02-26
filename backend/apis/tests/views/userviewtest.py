from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from backend.apis.tests.factories.userfactory import UserFactory


class userViewSetTestCase(TestCase):
    def setUp(self):
        self.user = UserFactory(username='testuser@example.com')
        self.user.set_password('testpassword')
        self.user.save()
        self.client.login(email=self.user.email, password='testpassword')
        self.list_url = reverse('user-list')

    def get_detail_url(self, user_id):
        return reverse(self.user-detail, kwargs={'id': user_id})

    def test_get_list(self):
        """GET the list page of Users."""
        users = [UserFactory() for i in range(0, 3)]

        response = self.client.get(self.list_url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(
            set(user['id'] for user in response.data['results']),
            set(user.id for user in users)
        )

    def test_get_detail(self):
        """GET a detail page for a user."""
        user = UserFactory()
        response = self.client.get(self.get_detail_url(user.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], user.name)

    def test_post(self):
        """POST to create a user."""
        data = {
            'username': 'John Doe',
            'password': 'John Not Doe'
        }
        self.assertEqual(user.objects.count(), 0)
        response = self.client.post(self.list_url, data=data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(user.objects.count(), 1)
        user = user.objects.all().first()
        for field_name in data.keys():
            self.assertEqual(getattr(user, field_name), data[field_name])

    def test_put(self):
        """PUT to update a user."""
        user = UserFactory()
        data = {
            'username': 'John Maybe Doe',
            'password': 'John Not Doe'
        }
        response = self.client.put(
            self.get_detail_url(user.id),
            data=data
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # The object has really been updated
        user.refresh_from_db()
        for field_name in data.keys():
            self.assertEqual(getattr(user, field_name), data[field_name])

    def test_patch(self):
        """PATCH to update a user."""
        user = UserFactory()
        data = {'username': 'John Doe'}
        response = self.client.patch(
            self.get_detail_url(user.id),
            data=data
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # The object has really been updated
        user.refresh_from_db()
        self.assertEqual(user.name, data['username'])

    def test_delete(self):
        """DELETEing is not implemented."""
        user = UserFactory()
        response = self.client.delete(self.get_detail_url(user.id))
        self.assertEqual(response.status_code,
                         status.HTTP_405_METHOD_NOT_ALLOWED)
