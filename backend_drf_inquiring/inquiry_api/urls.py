from django.urls import path
from inquiry_api import views

urlpatterns = [
    path('inquiry/', views.InquirySubmit.as_view()),
    path('inquiry-list/', views.inquiry_list,name="inquiry-list"),
    path('inquiry-detail/<str:pk>/', views.inquiry_detail,name="inquiry-detail"),
    path('inquiry-create/', views.inquiry_create,name="inquiry-create"),
    path('inquiry-update/<str:pk>/', views.inquiry_update,name="inquiry-update"),
    path('inquiry-delete/<str:pk>/', views.inquiry_delete,name="inquiry-delete"),
]