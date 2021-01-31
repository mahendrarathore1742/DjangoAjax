from django.db import models
from rest_framework import serializers

class book(models.Model):
	name=models.CharField(max_length=100);
	Price=models.IntegerField()
	pages=models.IntegerField()

	def __str__(self):
		return self.name

class BookSerializer(serializers.Serializer):
	name =serializers.CharField(max_length=100);
	Price=serializers.IntegerField()
	pages=serializers.IntegerField()
	id=serializers.IntegerField()

