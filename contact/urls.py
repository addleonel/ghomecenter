from django.urls import path
from . import views

app_name='contact'

urlpatterns = [
    path('', views.welcome_view, name='welcome'),
    path('contact/', views.contact_view, name='contact_view'),
]