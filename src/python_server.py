from flask import Flask,render_template,request
import requests
import classify_korean
import classify_hindi
import classify_arabic
import classify_bengali
import classify_spanish
import python_move
import sys
import time
from PIL import Image
import os

PATH_TO_TEST_IMAGES_DIR='./'

app = Flask(__name__)

v=0

@app.route('/val',methods=['GET','POST'])
def value():
   var=request.form['val']
   global v
   v='{}'.format(var)
   return v

@app.route('/image',methods=['GET','POST'])
def classify():
   i=request.form['image']
   python_move.Move()
   im=Image.open(i)
   global v
   if v=='1':
      f=('New.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=classify_arabic.CLASSIFY()
      return '{}'.format(name)
   elif v=='2':
      f=('New.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=classify_bengali.CLASSIFY()
      return '{}'.format(name)
   elif v=='3':
      f=('New.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=classify_hindi.CLASSIFY()
      return '{}'.format(name)
   elif v=='4':
      f=('New.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=classify_korean.CLASSIFY()
      return '{}'.format(name)
   elif v=='5':
      f=('New.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=classify_spanish.CLASSIFY()
      return '{}'.format(name)
   else:
      return 0

if __name__=='__main__':
    app.run()


