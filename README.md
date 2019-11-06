# Language_Character_Classifier
A React web Application that allows a user to select a language, and draw a character belonging to that language on the React Canvas. The drawing is saved as a file blob on the React client and downloaded locally, that passes it to a flask server running a Python Classifier Script using TensorFlow. The final result includes the top 5 predicted characters of the selected language being displayed to the user.

![alt text](https://github.com/PRISHIta123/Language_Character_Classifier/blob/master/Project1.jpeg.jpg)

Prerequisites:
Make sure you add the CORS plugin in your web browser(Chrome,Firefox) to allow Access Control Cross Origin file transfer. You must also have node js installed on your system.

To run the client app follow these steps:\
1.Clone the repo\
2.Open a command prompt window or terminal\
3.Change to the directory containing the repo\
  for example, C:/Users/Your_username/path to repo\
4.Type npm start\
5.You should see a React client app starting on localhost:3000 in your default browser automatically after the scripts run.\

To start the flask server:
1.In a new cmd prompt windows or terminal, change to the directory containing the repo and enter the src folder
  for example, C:/Users/Your_username/path to repo/src\
2.Then type python python_server.py\

A server will start on http://127.0.0.1/5000/ (will not open in browser and do not open manually)\
Don't open the server at this point\

To test the app:

1.Choose a language from the dropdown menu
2.Draw your character on the React App client and click Classify .
3.Repeat the above step one more time.
4.You can see the classifier code executing in the cmd prompt/terminal used to open the server.
5.Wait for a few minutes and then right click on the app and click on inspect->network->black image label under Name->Response
6.The top predicted character will be displayed.








