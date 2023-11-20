from rest_framework import routers
from .api import ProductViewSet

from django.urls import path


from . import views
from .views import CartAPI


router = routers.DefaultRouter()
router.register('api/catalog', ProductViewSet, 'product')


urlpatterns = [
    path('api/home/', views.HomeView.as_view(), name ='home'),
    path('api/logout/', views.LogoutView.as_view(), name ='logout'),
    path('api/cart', CartAPI.as_view(), name='cart'),

]

# Распаковываем URL-пути из router.urls и добавляем их к urlpatterns
urlpatterns += router.urls