from django.shortcuts import render
from .models import ContactModel 

def welcome_view(request):
    return render(request, 'build/index.html')

def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact = ContactModel(name=name, surname=surname, email=email, message=message)
        contact.save()
        return render(request, 'contact/contact.html', {'message': 'Gracias por contactarnos. En breve nos pondremos en contacto con usted.'})
    return render(request, 'contact/contact.html')