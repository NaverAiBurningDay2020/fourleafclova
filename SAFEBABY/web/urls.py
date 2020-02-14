from django.urls import path
from web import views

app_name='web'

urlpatterns = [
    path('', views.index, name='index'),
    path('check/', views.check, name='check'),
    path('save/', views.save, name='save'),
]
