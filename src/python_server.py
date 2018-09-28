from flask import Flask,render_template,request
import requests
import classify_korean
import python_move
import sys
import time
from PIL import Image
import os

PATH_TO_TEST_IMAGES_DIR='./'

app = Flask(__name__)

@app.route('/image',methods=['GET','POST'])
def classify():
   i=request.form['image']
   python_move.Move()
   im=Image.open(i)
   f=('New.jpeg')
   im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
   name=classify_korean.CLASSIFY()
   return '{}'.format(name)
   

if __name__=='__main__':
    app.run()


