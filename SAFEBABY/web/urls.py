from django.urls import path
from web import views
from . import views

app_name='web'

urlpatterns = [
    path('', views.index, name='index'),
    path('check/',views.check, name='check'),
    # api 호출
    path('getValue/', views.getValue, name='getValue')

]
