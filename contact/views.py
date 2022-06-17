from django.shortcuts import render

def welcome_view(request):
    return render(request, 'welcome.html')

def contact_view(request):
    return render(request, 'contact/contact.html')