from django.shortcuts import render
from decouple import config
from rest_framework.response import Response
from rest_framework.decorators import api_view
import framecut
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

@api_view(['POST'])
def save(request):
    # 1. 요청 왔을 때 침대 가드 가장자리 좌표 받기
    print(request)

    # 2. '프레임 짜르기' 실행하기
    framecut.framecut()

    # 3. 각 프레임(사진, 이미지)을 처리하는 반복문
    # 3-1. 아이의 스켈레톤과 함께 처리되어 나온 결과(좌표, 사진) 받기
    # 3-2. 해당 좌표들과 처음에 받은 침대 가드 좌표를 비교해서 상황 판단하기
    
    # 4-1. 안전 상황이면 반복문 끝날 때까지 돌리고
    # 4-2. 위험 상황이면 알람 때리고, 반복문 다시 돌거나, 프론트에 응답 주기

    pass
    # return 
