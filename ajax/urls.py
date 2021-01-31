from django.urls import path

from .  import views

urlpatterns = [

	path("" ,views.index,name="home"),
	path("save_book/" ,views.save_book,name="save_book"),
	path('getAllbook/',views.getAllbook,name='getAllbook'),
	path('Deletebook/' ,views.Deletebook,name='Deletebook')
    
]
