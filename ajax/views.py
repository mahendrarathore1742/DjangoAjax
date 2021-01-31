from django.shortcuts import render
from .models import book,BookSerializer
from django.http import HttpResponse

import json;

def index(request):
	return render(request,'index.html')



def save_book(request):

	name=request.GET['name']
	Price=request.GET['Price']
	pages=request.GET['pages']
	print(name,Price,pages)
	books=book(name=name,Price=Price,pages=pages)

	try:
		books.save()
		return HttpResponse("True")
	except Exception as e:
		return HttpResponse("false")

def getAllbook(request):
	queryset=book.objects.all();
	datas=list();

	for i in queryset:
		ser=BookSerializer(i)
		datas.append(ser.data)
	return HttpResponse(json.dumps(datas))


def Deletebook(request):
	try:
		bookfordelete=book.objects.get(id=request.GET['id'])
		bookfordelete.delete();
		return HttpResponse("True")
	except Exception as e:
		raise e
	
	