# Recommendations for Multiple Servos in Series

## 1. Reason for Group Wiring

When multiple servos are connected in series, the current of a common switching power supply will be insufficient, and insufficient current will affect the normal operation of the servos. At this time, the method of grouped power supply can be adopted.



## 2.Connection Schematic Diagram

<img src="./basic_image/Multiple Servo.png" alt="Multiple Servo" style="zoom:50%;" />



## 3. Video Demonstration of Wiring

<video src="./basic_image/多个舵机串联建议.mp4"></video>



## 4. Main Matters

- Divide the servos into several groups, each group using a separate power supply, with **no more than 6 servos per group**.
- Between groups and between groups and the adapter board, only connect the **signal wire (S)** and **negative pole (-)**. The adapter board is then connected to the main controller for control.

|                            Before                            |                            After                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="./basic_image/修改前.png" alt="修改前" style="zoom: 33%;" /> | <img src="./basic_image/修改后.png" alt="修改后" style="zoom: 33%;" /> |

- The communication distance between servos **shall not exceed 1 meter**. If it exceeds 1 meter, shielded wire shall be used.
