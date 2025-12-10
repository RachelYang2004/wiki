# Differences Between Brushed Servos and Brushless Servos

## 1. Servo Naming Rules

![model definition](./basic_image/model definition.png)

| Appearance      | R：Dual-shaft      | H：Single-shaft                    |                                  |
| --------------- | ------------------ | ---------------------------------- | -------------------------------- |
| Motor type      | X：Brushless       | P：Coreless                        | A/L：Cored                       |
| Dimension       | 6：31.5×21×27.6mm  | 8：40×40×20mm                      | 18：63×34×47mm                   |
| Protocols       | U：UART/TTL        | R：RS-485<br/>P：PWM               | C：CAN <br/>A：PWM(programmable) |
| Voltage         | [-]：7.4V          | H：12V                             | W：24V                           |
| Position Sensor | [-]：Potentiometer | M:12-bit magnetic absolute encoder |                                  |



## 2. Comparison of Precision and No-Load Service Life Between Brushed and Brushless Servos

| Specification        | Brushed Servo (Iron-Core Motor) | Brushed Servo (Coreless Motor) | Brushless Servo |
| -------------------- | ------------------------------- | ------------------------------ | --------------- |
| Internal Motor       | Iron-Core Motor                 | Coreless Motor                 | Brushless Motor |
| No-Load Precision    | 0.5°-1°                         | 0.5°-1°                        | 0.2°-0.3°       |
| No-Load Service Life | 100h                            | 400h                           | 2000h           |

> [!NOTE]
>
> - Users can select the appropriate servo according to specific requirements.
> - The differences in precision and no-load service life are mainly due to the use of different internal motors and gear materials.



### 3. Differences Between Different Motors

### 3.1 Iron-Core Motor

- Rotor Structure: The rotor is composed of laminated silicon steel sheet cores with copper coils wound around them.
- Commutation Method: Mechanical **carbon brushes** contact the commutator on the rotor shaft to switch the current direction, enabling continuous rotation of the rotor coils.
- Advantages: Simple structure and low manufacturing cost.
- Disadvantages: Low efficiency, limited service life (restricted by carbon brushes), high noise, poor heat dissipation, and low precision.

### 3.2 Coreless Motor

- Rotor Structure: The rotor has no iron core; the rotor windings are wound into a thin-walled cup-shaped structure.
- Commutation Method: Mechanical **carbon brushes** contact the commutator on the rotor shaft to switch the current direction, enabling continuous rotation of the rotor coils.
- Advantages: Simple structure, good heat dissipation, and high energy density.
- Disadvantages: Limited service life (restricted by carbon brushes) and low precision.

### 3.3 Brushless Motor

- Stator/Rotor Structure: The stator is usually equipped with iron cores and windings (typically three-phase windings), and the rotor is a permanent magnet (usually high-performance neodymium-iron-boron magnet steel).
- Commutation Method: Completely abandons mechanical carbon brushes and commutators. The **motor controller algorithm** detects the rotor position (usually using Hall sensors or sensorless algorithms) and precisely controls the timing, current magnitude, and direction of power supply to each phase coil of the stator, generating a rotating magnetic field to "pull" the permanent magnet rotor to rotate.
- Advantages: High efficiency, long service life, no mechanical commutation wear parts, low noise, good heat dissipation (heat is mainly generated in the stator windings), and large starting torque.
- Disadvantages: Complex control and high cost.
