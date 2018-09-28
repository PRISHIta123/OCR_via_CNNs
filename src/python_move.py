def Move():
	import shutil
	import os

	source = 'C://Users/PrishitaRay/Downloads/'
	dest1 = 'C://Users/PrishitaRay/Desktop/Language_Character-_assifier/src/'


	file = 'MyImage.jpeg'
	print(source+file)

	shutil.move(source+file, dest1)
