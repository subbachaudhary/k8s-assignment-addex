from django.shortcuts import render

# Create your views here.
from .models import Inquiry
from .serializers import InquirySerializer
from rest_framework.generics import ListAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class InquirySubmit(ListAPIView):
  queryset = Inquiry.objects.all()
  serializer_class = InquirySerializer
  
@api_view(['GET'])
def inquiry_list(request):
  inquiry = Inquiry.objects.all()
  serializer = InquirySerializer(inquiry,many=True)
  return Response(serializer.data)

@api_view(['GET'])
def inquiry_detail(request,pk):
  inquiry = Inquiry.objects.get(id=pk)
  serializer = InquirySerializer(inquiry,many=False)
  return Response(serializer.data)


@api_view(['POST'])
def inquiry_create(request):
  serializer = InquirySerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response({'msg':"Successfully registered user !!!",'status_code':status.HTTP_201_CREATED},status=status.HTTP_201_CREATED)
  return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def inquiry_update(request,pk):
  inquiry = Inquiry.objects.get(id=pk)
  serializer = InquirySerializer(instance=inquiry,data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['DELETE'])
def inquiry_delete(request,pk):
  inquiry = Inquiry.objects.get(id=pk)
  inquiry.delete()
  return Response("Deleted Successfully ...")