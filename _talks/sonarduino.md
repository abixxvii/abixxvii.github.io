---
title: "SonarDuino"
date: 2023 Dec
location: "New York, US"
---
"SonarDuino" is an innovative project that delves into the realm of robotics, specifically focusing
on creating a 360-degree radar system for object detection. The project aims to enhance the
capabilities of locomotion robots by providing them with the ability to detect the boundaries of
their surroundings. This project demonstrates the use of an ultrasonic sensor as a SOund
NAvigation and Ranging equipment with the use of an Arduino Mega for processing and
collecting data. Visualization of objects detected by the system is presented through a GUI
(replicating a SONAR scanning system).

SONAR, which stands for Sound Navigation and Ranging, is a technology that uses sound waves
to navigate, communicate, and detect objects underwater. It plays a crucial role in various
applications, including military, commercial shipping, fisheries, and oceanography. In robotics,
SONAR (Sound Navigation and Ranging) is a valuable technology used for object detection,
mapping, and navigation. Similar to its application in marine environments, SONAR in robotics
employs sound waves to sense the surrounding environment

---
Bill Of Materials:
---

<br/><img src='/images/bom.png'>

---
System design:
---
<br/><img src='/images/systemdesign.png'>

---
Operation:
---
1. Switching On:
The Arduino Mega is connected to a laptop which serves as a power source. The connection is
with a USB cable capable of transmitting power and data (This needs to be performed only
once).
2. Uploading code to Arduino:
Ensure the USB cable is connected and then open the Arduino IDE. Select the correct port and
then connect and upload the code to the Arduino Mega. The Arduino can then be disconnected
and instead be connected to another power supply appropriate for the system to run the 9V servo
motor and the Arduino.
3. Changing Scanning Speed:
The program immediately starts rotating the servo motor to scan its surroundings with the
ultrasonic sensor. To change the speed of the servo motor, one of the two buttons is used to
increase the speed while the other is used to decrease it. The maximum speed it can reach is
within a safe range of operation.
4. Graphical Representation:
Program for visualization has been coded in Java and linked with Arduino IDE using Processing
IDE. Green lines indicate absence of an obstacle while red lines indicate that an obstacle is
detected. An obstacle is detected within 40 cm from the ultrasonic sensor.
5. Emergency Stop:
This functionality is provided by a push button that stops rotation of the servo motor. The need to
use this switch can occur when the ultrasonic sensor is to be tangled, damaged, or if the program
is to be stopped.

<br/><img src='/images/arduino flowchart.png'>

<br/><img src='/images/sonar display.png'>

---
Result:
---

<br/><img src='/images/sonarduinoinaction.png'>

<br/><img src='/images/video_2024-01-16_16-35-23.mp4'>



More information and the source code can be found in this [repo](https://github.com/shantanu-ghodgaonkar/NYU_Sonarduino).
