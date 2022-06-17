from django.shortcuts import render
from .models import ContactModel 

def welcome_view(request):
    return render(request, 'welcome.html')

def contact_view(request):
    if request.method == 'POST':
        print(request.POST)
        print(request.POST['name'])
        print(request.POST['surname'])
        print(request.POST['email'])
        print(request.POST['message'])
        

    return render(request, 'contact/contact.html', {})