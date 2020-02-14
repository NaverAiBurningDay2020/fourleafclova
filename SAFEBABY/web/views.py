from django.shortcuts import render
from decouple import config
import json
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

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

def test(request):
    return render(request, 'web/test.html')

@api_view(['POST'])
def getValue(request):
    print("aa")
    print(json.loads(request.body))
    # 포인트 4개가 전달되었을 때 처리하는 로직
    if True:
        return  Response(status=200) 
    else:
        return Response(status=500)
    
@api_view(['GET'])
def getFirstImage(request):
    # 우리가 가지고 있는 image 중에서 첫 이미지만 전달하면 됨
    # 주소만 전달.
    return Response(status=200) 



