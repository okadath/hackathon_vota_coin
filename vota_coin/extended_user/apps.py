# from django.apps import AppConfig


# class ExtendedUserConfig(AppConfig):
#     default_auto_field = 'django.db.models.BigAutoField'
#     name = 'extended_user'
# from django.apps import AppConfig


# class ExtendedUserConfig(AppConfig):
#     name = 'extended_user'
from django.apps import AppConfig


class UserAccountConfig(AppConfig):
    name ='extended_user'
    label="extended_user"
    def ready(self):
        import extended_user.signals 