from django.contrib import admin
from .models import Product

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug', 'image', 'description', 'price', 'available', 'created', 'updated')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title', 'description')
    list_filter = ('available',)


admin.site.register(Product, ProductAdmin)