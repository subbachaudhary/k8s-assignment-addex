from django.contrib import admin
from .models import Inquiry
# Register your models here.

@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
  list_display = ['id', 'name', 'email','address','phonnumber','branch','message']