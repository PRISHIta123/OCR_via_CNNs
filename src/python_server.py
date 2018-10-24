from flask import Flask,render_template,request
import requests
import classify_korean
import classify_hindi
import classify_arabic
import classify_bengali
import classify_greek
import python_move
import sys
import time
import json
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
   global v
   python_move.Move()
   im=Image.open(i)
   if v=='1':
      f=('New1.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=[]
      name=classify_arabic.CLASSIFY()
      n=' '.join(name)
      return '{}'.format(n)
   elif v=='2':
      f=('New2.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=[]
      name=classify_bengali.CLASSIFY()
      n=' '.join(name)
      return '{}'.format(n)
   elif v=='3':
      f=('New3.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=[]
      name=classify_hindi.CLASSIFY()
      n=' '.join(name)
      return '{}'.format(n)
   elif v=='4':
      f=('New4.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=[]
      name=classify_korean.CLASSIFY()
      n=' '.join(name)
      return '{}'.format(n)
   elif v=='5':
      f=('New5.jpeg')
      im.save('%s/%s' % (PATH_TO_TEST_IMAGES_DIR,f))
      name=[]
      name=classify_greek.CLASSIFY()
      n=' '.join(name)
      return '{}'.format(n)
   else:
      return 0

if __name__=='__main__':
    app.run()


