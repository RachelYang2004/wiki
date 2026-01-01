# UART Bus Servo 25KG Series 

![U25产品图片](img/U25产品图片.png){: width="60%" }
<span class="img-caption">U25 Series High-Performance Bus Servo</span>

## 1. Features
- **Integrated design**: brushed motor, reducer, 12‑bit magnetic absolute encoder, and controller
- **Protocol**: UART/TTL half‑duplex protocol up to **1 Mbps**
- **Precision**: Resolution **4096 counts/360° (0.088°)**; min control step **0.1°**
- **Control range**: **±180°** (single‑turn) or **±368,640° / ±1024 turns** (multi‑turn)
- **Safety**: Five protections: **temperature / voltage / stall / power / current**

---

## 2. Model definition

![产品命名-型号规则](img/产品命名-型号规则.png){: width="85%" }
<span class="img-caption">Figure 1: Model Naming Convention</span>

| Appearance | R：Dual-shaft | H：Single-shaft |
| :--- | :--- | :--- |
| **Motor type** | X：Brushless | P：Coreless |
| **Dimension** | 6：31.5×21×27.6mm | 8：40×40×20mm |

**Models available for order**: `RA8-U25(H)-M` | `HA8-U25(H)-M`

---

## 3. Specifications

### 3.1 Basic Specifications
| Item | Specification |
| :--- | :--- |
| **Input Voltage** | 6.0-8.4V \| 9.0–12.6 V |
| **Position Sensor** | 12‑bit magnetic absolute encoder |
| **Gear Material** | All-metal copper-aluminum composite |

### 3.3 Performance & Overload Analysis

![Performance Graph](img/U25特性曲线.png){: width="75%" }
<span class="img-caption">Performance Graph (RA/HA8-U25H-M)</span>

![Overload Graph](img/U25过载曲线.png){: width="75%" }
<span class="img-caption">Overload Graph (RA/HA8-U25H-M)</span>

---

## 4. Drawings and Installation

### 4.1 CAD Dimensional Drawing
![U25_3D图](img/U25_3D图.png){: width="80%" }
<span class="img-caption">CAD Dimensional Drawing</span>

### 4.2 Interface Definition
![U25接口图](img/U25接口图.png){: width="80%" }
<span class="img-caption">Interface Pinout Definition</span>

### 4.3 Wiring & Installation
![U25串联](img/U25串联.png){: width="70%" }
<span class="img-caption">Series Connection Diagram</span>

![U25并联](img/U25并联.png){: width="70%" }
<span class="img-caption">Parallel Connection Diagram</span>

---

## 5. Protections

!!! warning "Modification Caution"
    Modification towards any protection parameters may cause damage to the production. Please proceed with caution.

![protection](img/protection.png){: width="65%" }
<span class="img-caption">Protection Logic and Bit Definition</span>

---

## 6. Control & Modes

### 6.1 Communication Format 
![transmit_command](img/transmit_command.png){: width="80%" }
<span class="img-caption">Transmit Packet Structure</span>

![respond_command](img/respond_command.png){: width="80%" }
<span class="img-caption">Response Packet Structure</span>

### 6.2 Motion Trajectory
![Velocity Profile](img/Velocity Profile.png){: width="65%" }
<span class="img-caption">Trapezoidal Velocity Profile</span>
