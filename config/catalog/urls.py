from rest_framework import routers
from .api import ProductViewSet

from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views


router = routers.DefaultRouter()
router.register('api/catalog', ProductViewSet, 'product')


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('home/', views.HomeView.as_view(), name ='home'),
    path('logout/', views.LogoutView.as_view(), name ='logout')
]

# Распаковываем URL-пути из router.urls и добавляем их к urlpatterns
urlpatterns += router.urls