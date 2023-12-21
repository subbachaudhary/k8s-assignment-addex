from django.db import models

# Create your models here.
class Inquiry(models.Model):
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  address = models.CharField(max_length=100)
  branch = models.CharField(max_length=100,default='Unknown')
  message = models.TextField(max_length=1000, blank=True,null=True)
  phonnumber = models.BigIntegerField(null=True)