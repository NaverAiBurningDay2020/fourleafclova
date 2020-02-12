from django.shortcuts import render
from decouple import config
import json


# Create your views here.
def index(request):
    

    return render(request, 'web/index.html')

def check(request):
    key = config("KAKAOJSKEY")
    ctx = {
        "kakaojskey": key
    }
    data = json.dumps(ctx)
    print(data)
    return render(request,'web/check.html',{"data":data})




