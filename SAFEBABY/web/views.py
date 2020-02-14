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
    # 모델 라이브러리 호출
    if True:
        return  Response(status=200) 
    else:
        return Response(status=500)
    
@api_view(['GET'])
def getFirstImage(request):
    # 우리가 가지고 있는 image 중에서 첫 이미지만 전달하면 됨
    # 주소만 전달.
    import base64
    import os

    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    path = os.path.join(BASE_DIR, "images", "test2.jpg")
    
    print(path)
    print("TTTTTT")
    with open(path, "rb") as image_file:
        ss = base64.b64encode(image_file.read())
        return HttpResponse(ss, content_type="image/jpg")
        #encoded_string = base64.b64encode(image_file.read())
    
    return Response(data=encoded_string, status=200 ) 



