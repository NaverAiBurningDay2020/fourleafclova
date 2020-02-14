import os
import sys
import requests
from decouple import config
import cv2
import numpy as np


client_id = config('CLIENT_ID')
client_secret = config('CLIENT_SECRET')
url = "https://naveropenapi.apigw.ntruss.com/vision-obj/v1/detect" 

filename = 'SAFEBABY/images/tt.PNG'
#read image
img = cv2.imread(filename,0)
img2 = cv2.equalizeHist(img)
dst = np.hstack((img, img2))
# get dimensions of image
dimensions = img.shape
# height, width, number of channels in image
height = img.shape[0]
width = img.shape[1]
#channels = img.shape[2]

files = {'image': open(filename, 'rb')}
headers = {'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret }
response = requests.post(url,  files=files, headers=headers)
rescode = response.status_code



if(rescode==200):
    #print (response.text)
    data = response.json()
    predictions = data['predictions']
    if (len(predictions) > 0):
        values = predictions[0] 
        count = values['num_detections']
        detection_classes = values['detection_classes']
        detection_names = values['detection_names']
        detection_scores = values['detection_scores']
        detection_boxes = values['detection_boxes']
        checked = False
        for i in range(count):
            object_class = detection_classes[i]
            object_name = detection_names[i]
            object_score = detection_scores[i]
            object_box = detection_boxes[i] # x1,y1,x2,y2
            print(object_box)
            topleft = (int(width * object_box[0]), int(height * object_box[1]))
            bottomright = (int(width * object_box[2]), int(height * object_box[3]))
            # topleft - bottom right - color- pixel
            if object_name == "person":
                if not checked:
                    checked = True
                    cv2.rectangle(img2,topleft, bottomright,(0,255,0),3)
                else:
                    cv2.rectangle(img2,topleft, bottomright,(0,0,255),3)
            else:
                cv2.rectangle(img2,topleft, bottomright,(255,0,0),3)
        print(detection_names)
        print(detection_scores)
            
        cv2.imshow('test',img2)
        cv2.waitKey(0) # waits until a key is pressed
        cv2.destroyAllWindows()

    else:
        print('디텍트 된 것이 없다.')
    
else:
    print("Error Code:" + rescode)