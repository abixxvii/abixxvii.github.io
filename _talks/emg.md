---
title: "EMG Controlled Prosthetic Arm"
date: 2024 Dec
location: New York, US
---

### Overview
This project demonstrates an innovative way to control a robotic hand using an EMG (Electromyography) sensor. By detecting muscle activity, the system interprets the intensity of muscle flexing and translates it into real-time movements of a robotic hand. The system is designed to be adaptive, responsive, and smooth, making it an excellent demonstration of how biomedical signals can interact with robotics.

### Key Features
**Muscle-Controlled Movements:**
The robotic hand responds to muscle activity levels detected by the EMG sensor.
Users can control the hand's fingers by flexing their muscles.

**Dynamic Thresholding:**
The system adapts to different users by calibrating baseline muscle activity during a relaxation phase.
Thresholds are dynamically adjusted based on the user's unique muscle signals.

**Three States of Control:**
Relaxation: All fingers return to their neutral position.
Mild Flex: Some fingers partially close.
Full Flex: All fingers fully close.

**Signal Smoothing:**
A low-pass filter is implemented to reduce noise in the EMG signal, ensuring accurate and stable servo movements.

**Real-Time Responsiveness:**
The system processes EMG signals continuously, enabling smooth and responsive finger movements.

## How It Works

**Calibration Phase:**
At startup, the system enters a 5-second calibration phase where the user is instructed to relax their muscles.
During this phase, the baseline EMG value (representing relaxed muscle activity) is calculated.

**Signal Processing:**
The EMG sensor reads electrical signals from the user's muscles.
A low-pass filter smooths the signal to remove noise and fluctuations.

**Threshold-Based Decision Making:**
The smoothed EMG signal is compared against two dynamic thresholds:
Low Threshold: Detects mild flexing.
High Threshold: Detects strong flexing.
Based on these comparisons, the system determines whether to relax, partially flex, or fully flex the fingers.

**Servo Control:**
Servo motors control each finger's movement based on the detected state:
Relaxation → Fingers return to neutral positions.
Mild Flex → Some fingers partially close.
Full Flex → All fingers fully close.

## Technical Details

**Hardware Components**
MyoWare EMG Sensor: Measures electrical activity from muscles and outputs an analog signal proportional to muscle contractions.
Servo Motors: Control the movement of each robotic finger (pinky, ring, middle, index, thumb) by responding to processed EMG signals.
Arduino Microcontroller: Processes the EMG signals, applies filtering and thresholding, and sends commands to the servo motors for precise control.

**Software Features**
Low-Pass Filter: Smooths noisy EMG signals for better accuracy and stability during servo control.
Dynamic Thresholding: Adapts thresholds based on user-specific baseline muscle activity, enabling personalized control of the robotic hand.
Servo Library: Provides functions for controlling servo motors with precision and ease using Arduino.
Programming Language: The system is programmed in C++ using the Arduino IDE for real-time signal processing and motor control.
