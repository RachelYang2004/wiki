# Static Torque vs Dynamic Torque: Analysis of Key Differences

In mechanical design and control system development, static torque and dynamic torque are two important concepts. Understanding their differences is crucial for selecting and using servos. This article will elaborate on the definitions, functions, and key differences of static torque and dynamic torque, so as to better apply these concepts in practical projects.

## Static Torque

**Static Torque** (also known as Holding Torque) refers to the torque required by a servo to maintain a specific position when the mechanical system is at rest. This torque is mainly used to resist external loads and prevent the robotic arm or other components from moving.

- **Application Scenarios**: Static torque is typically applied in situations where a fixed position needs to be maintained for a long time. For example, a joint of a robotic arm needs to remain stationary for a long time during operation.

- **Calculation Method:** Under ideal conditions, ignoring the weight of the connecting rod, the calculation of static torque when the rocker arm is horizontal is relatively simple. For example, when the servo is placed horizontally and the load weight is m, the static torque is the maximum. It can be described by the formula: 

  ![Static Torque](./basic_image/Static Torque.png)

## Dynamic Torque

**Dynamic Torque** (also known as Stall Torque) refers to the maximum torque that can be applied when a servo is rotating or operating. It is used to overcome the inertia and friction of the load, enabling the mechanical system to move.

- **Application Scenarios**: Dynamic torque is suitable for situations that require frequent starting, stopping, or direction changing. For example, a robot joint needs to overcome initial static friction to start or overcome load inertia during operation.
- **Calculation Method**: Dynamic torque is closely related to voltage. A higher voltage can increase the output power of a DC motor, thereby increasing the dynamic torque. For example, when the voltage is 7.4V, the stall torque calculation for a 1cm-long rocker arm is as follows:

<img src="./basic_image/dynamic torque.png" alt="dynamic torque" style="zoom: 50%;" />

## Key Differences

**1.State:**

- Static Torque: The holding torque when the system is stationary.
- Dynamic Torque: The maximum torque when the system is in motion.

**2.Function:**

- Static Torque: Resists external loads and maintains position stability.
- Dynamic Torque: Overcomes inertia and friction to enable starting and motion.

**3.Calculation Complexity:**

- Static Torque: Relatively simple, mainly considering load and force arm length.
- Dynamic Torque: More complex, requiring consideration of factors such as voltage, load, friction, and inertia.

**4.Application Scenarios:**

- Static Torque: Applications that require maintaining a fixed position for a long time.
- Dynamic Torque: Applications that require frequent starting, stopping, or motion.

## Conclusion

Static torque and dynamic torque play different but equally important roles in mechanical design and control systems. Understanding their differences and calculation methods can help in selecting suitable servos and control strategies in projects, ensuring that system performance and reliability meet expected levels.
