---
title: "Automated Package Seperator"
date: 2024 March
location: New York, US
---

Abstract:

This project presents an innovative Automatic Package Separator system utilizing Arduino technology to enhance the efficiency of package segregation based on addresses. The core components include the Arduino Microcontroller, a Waveshare 1D/2D Barcode Scanner with UART protocol, servo motors, a DC motor, an Ultrasonic Sensor, and an LCD Display Module.

<a href='/images/IMG_8251.mp4'>Watch the video</a>


Operational Overview:

The system begins with the 2D barcode scanner swiftly and accurately reading package addresses. The Arduino, in conjunction with servo motors, controls the conveyor, directing packages toward designated bins upon address detection. Servo motors play a crucial role in diverting packages, ensuring a systematic and error-free segregation process.


<br/><img src='/images/mainflowchart.png'>


Introduction:

This project addresses the need for innovative logistics and supply chain management solutions, specifically targeting package handling optimization. The introduction of an Arduino-driven Automatic Package Separator, utilizing 1D/2D barcode scanning, aims to revolutionize the traditional manual sorting processes.

Problem Statement:

The traditional manual sorting processes suffer from inefficiency, errors, and resource-intensive procedures. This project seeks to automate package segregation based on addresses to reduce errors and enhance overall efficiency.

Technological Foundation:

The Arduino Uno Microcontroller serves as the project's core due to its compact size and capabilities. The 1D/2D Barcode Scanner (Waveshare) efficiently reads barcodes, forming the basis for the automated sorting process.

<br/><img src='/images/circuit.png'>

Operational Mechanism:

Address Detection is accomplished as the barcode scanner reads package addresses at the scanning point. The Arduino Uno processes the information, determining the package's destination. The conveyor mechanism, driven by a DC motor controlled by Arduino, guides the package to the designated bin upon address detection. A dual-axis turntable with servo motors facilitates segregation, directing packages to specific bins.

<br/><img src='/images/supflowchart.png'>

Components:

Key components include servo motors, a turntable platform, turntable mount, base structure, Parallax PING))) Ultrasonic Sensor, relay, and LCD Display Module.

<br/><img src='/images/bom.png'>

Technological Choice:

2D barcode scanning is chosen for its simplicity and efficiency, contributing to enhanced address detection accuracy.

<br/><img src='/images/qrcode.png'>

Project Objectives:

The primary objectives are to minimize manual effort, decrease sorting errors, and significantly improve speed and accuracy in the sorting process.

Future Enhancements:

Future developments may include integrating machine learning to optimize sorting algorithms, exploring robotics for automated package handling, and establishing a cascaded network of modules for multilevel sorting.


