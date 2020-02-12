#def downloadyoutube():
#https://niceman.tistory.com/92
#print('download')
import os
import subprocess
import pytube

yt = pytube.YouTube("https://youtu.be/BqNgtsbz0iE")
vids = yt.streams.all()

for i in range(len(vids)):
    print(i,'. ', vids[i])

vnum = int(input("다운받을 화질은?"))

parent_dir = "D:\clova\test"
vids[vnum].download(parent_dir)

new_filename = input("변환할 mp3파일명은?")

default_filename = vids[vnum].default_filename
subprocess.call(['ffmpeg','-i',
os.path.join(parent_dir, default_filename),
os.path.join(parent_dir, new_filename)
])

print('동영상 다운로드 변환 완료!')
