from django.db import models

class Place(models.Model):
    name = models.CharField(max_length=255)
    latitude = models.TextField(null = True, blank = True)
    longitude = models.TextField(null = True, blank = True)
    address = models.TextField(null = True, blank = True)
    
    def __str__(self):
	    return self.name

class Review(models.Model):
    title = models.CharField(max_length=255)
    post = models.TextField(null = True, blank = True)
    date = models.DateField()

    def __str__(self):
	    return self.title
    
class Blog(models.Model):
    title = models.CharField(max_length=255)
    post = models.TextField(null = True, blank = True)
    date = models.DateField()

    def __str__(self):
	    return self.title

class RecList(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(null = True, blank = True)
    video = models.FileField(null = True, blank = True)
    url = models.TextField(null = True, blank = True)
    
    def __str__(self):
	    return self.name
    
class MyList(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(null = True, blank = True)
    video = models.FileField(null = True, blank = True)
    url = models.TextField(null = True, blank = True)
    
    def __str__(self):
	    return self.name



