
# CAD-IT IoT Assessment Application (Node Js)
by Aldi Surya Briantama (Final Year Eng Stud  UGM)


## App Config and Installation
I am using node js to build this application and docker to containerize it. Docker is a software platform that allows you to build, test, and deploy applications quickly.

### Docker Installation
First of all, you have to install docker in your computer/server. You can download docker application and install on [Docker Install and Documentation](https://docs.docker.com/get-docker).
Make sure you have read the documentation procedure to install and running docker in your computer based on what Operations System (OS) do you have. 

Check if Docker is installed or not with command prompt/terminal/powershell below.

```bash
$ sudo docker --version
```
Note : You can remove sudo command if you are using other OS (Win or MacOs).

If docker have installed, it will send the response.
```bash
$ Docker version 20.10.21, build baeda1f
```

### Start Docker
After installing, the second part procedure is start docker locally on your computer. If you are using MacOs or Windows, you can simply open 'Docker Dekstop' and it will give you notice that [Docker is starting]. If your computer have Linux based, you dont have to start manually because the docker will start automatically if you build the images next.

### Cloning the project repository.
Go to your whatever directory and clone the project.
```bash
aldisurya@aldisurya:~/ngoding/$ git clone https://github.com/briantama87/iot-solution-aldisurya.git
```
And then you just need to go inside the repo cloning directory.
```bash
aldisurya@aldisurya:~/ngoding/$ cd iot-solution-aldisurya
```
### Build Docker images and Docker Container
After the cloning succed, and your lastest position was inside the folder repo. You need to build a docker images.
```bash
aldisurya@aldisurya:~/ngoding/iot-solution-aldisurya/$ sudo docker build -t myiotapp .
```
Note : You can remove sudo command if you are using other OS (Win or MacOs).

"myiotapp" : is name images that will be build, you can name it whatever do you want.

The successfull respond will be given below.
```bash
...
Successfully built c78edb9ef7b1
Successfully tagged myiotapp:latest
```

### Starting Container (Application)
Ensure that built image was succeed, and you need to start the container. Just typing command below.
```bash
aldisurya@aldisurya:~/ngoding/iot-solution-aldisurya/$  sudo docker run --publish 3000:3000 myiotapp
```

"3000" <1> : port inside container to differentiate contents (App) (You can change them if the port was used)

"3000" <2> : port container (You can change them if the port was used)

"myiotapp" : image name that build before

Boom! the app have successfully running on your local computer. To ensure that you just need to click :
(http://localhost:3000/salarytable)

Note : Ensure that port is same with prevoius (port inside container) build (im using 3000)

I have tried in 3 Different Os (Linux, Windows, and Macos) and all worked successfully. Please read this documentation properly.


## App Skeleton and Configuration
I'm developed this application with MVC (Model-view-controllers) pattern, but in this simple app doesn't need model. So the existing folder are :
1. Controllers {to make algorithm and logic in the app)
2. View (to render frontend, in this app i'm using ejs template engine and boostrap niceadmin template)
3. Public (to store static file like json file and boostrap file)
4. Route (to register any endpoint used)
5. Dockerfile (to manage docker configuration)
6. App.js (basic file in node js to start and config server)

![image](https://user-images.githubusercontent.com/70438773/206243783-497e1886-8a8c-40dc-b1f1-abbac984ca36.png)

### Case #1 Salary Conversion
You can check my answer soluton in link localhost (http://localhost:3000/salarytable)

The output will be like this.
![image](https://user-images.githubusercontent.com/70438773/206244772-0b57f9c3-5d40-4cf8-a003-87051cd06a85.png)

All of the code explanation is in the comment section code in folder controllers (file main.js). This solution is in the getSalary function.

### Case #2 Sensor Aggreation
You can check my answer solution in Link (http://localhost:3000/sensor)
or you just need clik "Sensor Chart" in the side bar of Solution #1.
The output will be like this
![image](https://user-images.githubusercontent.com/70438773/206245410-6551542a-e1db-41ce-a533-af2495d2f894.png)

All of the code explanation is in the comment section code below in folder controllers (file main.js). This solution is in the getSensor function.

To provide that data have grouped correctly, i've made REST API that will send the sensor data grouped by day and room.

You can check in link (http://localhost:3000/sensordata).

### Case #3 Simulation
Sorry i dont answering the case 3# because in that period i've doing my last campus exam in campus so i'm not having more time and just answered 2 Case.

But, i think i've found the initial solution to answer the case 3#:
1. The live chart is made by websocket (i think i will be using socket.io module in node js)
2. The start and stop button is based on timestamp data on the json file.

I have made the similar project with case 3# in my last company experience. In that project, they have same principle using socket io instead of HTTP to get live data shown in front end side.

Beside of that, i dont made a unit testing because i'm not having enough time more. But in my daily project, i always build a unit testing file (I usually use mocha js framework). If you are interseted, i have packed list of my project in my personal website portfolio (http://briantama87.github.io/)




