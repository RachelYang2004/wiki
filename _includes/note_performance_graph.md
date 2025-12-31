<style>
  /* 定义类似 ROBOTIS 的方框样式 */
  .custom-notice {
    padding: 15px;
    margin-bottom: 20px;
    background-color: #f3f3f3; /* 浅灰色底色 */
    border-left: 5px solid #3498db; /* 左侧蓝色条 */
    border-radius: 4px;
    color: #333;
    font-size: 0.95em;
  }
  .custom-warning {
    padding: 15px;
    margin-bottom: 20px;
    background-color: #fff3cd; /* 浅黄色底色 */
    border-left: 5px solid #ffc107; /* 左侧黄色条 */
    border-radius: 4px;
    color: #856404;
    font-size: 0.95em;
  }
</style>

<div class="custom-notice">
  <strong>NOTE</strong> : The given Stall torque rating for a servo is different from it's continuous output rating, and may also differ from it's expected real world performance.<br><br>
  Stall torque is the maximum momentary torque output the servo is capable of, an is generally how RC servos are measured. The Performance graph, or N-T curve, from the above graph is measured under conditions simulating a gradually increasing load.<br><br>
  Generally, the Maximum Torque shown through Performance Graph testing is less than the maximum Stall Torque.<br><br>
  The actual real world performance of the servo will generally be closer to the performance graph measurements, not the rated stall torque.
</div>

<div class="custom-warning">
  <strong>CAUTION - When supplying power:</strong>
  <ul>
    {% unless page.product_group == 'dxl_p' or page.product_group == 'dxl_pro' %}
    <li>It is recommended to use a ROBOTIS controller or SMPS2DYNAMIXEL power adapter.</li>
    {% endunless %}
    <li>Do not connect or disconnect DYNAMIXEL actuator cables while power is being supplied.</li>
    {% if page.product_group == 'dxl_p' %}
    <li>For DYNAMIXEL-P series servos, supply additional power through the 24V accessory power port.</li>
    {% endif %}
  </ul>
</div>
