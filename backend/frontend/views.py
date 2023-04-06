from django.shortcuts import render

# Create your views here.

def index(request, id=None):
  return render(request, "frontend/index.html")
