from rest_framework import serializers
from .models import Inquiry
class InquirySerializer(serializers.ModelSerializer):
  class Meta:
    model = Inquiry
    fields = ['id', 'name', 'email','address','phonnumber','branch','message']