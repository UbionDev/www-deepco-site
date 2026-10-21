Blockly.Blocks['led_check'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" LED Check");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" LED Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" LED Blink");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_blink_advance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" LED Blink ( ");
    this.appendValueInput("on_time")
        .setCheck(null)
        .appendField(" on_time= ");
    this.appendValueInput("off_time")
        .setCheck(null)
        .appendField(" , off_time= ");
    this.appendValueInput("n_cnt")
        .setCheck(null)
        .appendField(" , n= ")
    this.appendDummyInput()
        .appendField(" ) ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_select_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" Turn LED ON");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_select_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" Turn LED OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_by_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPIO Number");
    this.appendValueInput("led_number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("LED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn LED ON");
    this.appendValueInput("times")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn LED OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PWMled_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" PWM LED Ready ")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['PWMled_blink_advance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left front","17"], ["right front","10"], ["left rear","9"], ["right rear","11"]]), "led_select")
        .appendField(" PWM LED Blink ( ");
    this.appendValueInput("on_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" on_time= ");
    this.appendValueInput("off_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , off_time= ");
    this.appendValueInput("fade_in_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , fade_in_time= ");
    this.appendValueInput("fade_out_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , fade_out_time= ");
    this.appendValueInput("n_cnt")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , n= ")
    this.appendDummyInput()
        .appendField(" ) ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['RGBled_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color LED Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['RGBled_on'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Turn Color LED (R:")
          .appendField(new Blockly.FieldNumber(0, 0, 255), "red")
          .appendField(") (G:")
          .appendField(new Blockly.FieldNumber(0, 0, 255), "green")
          .appendField(") (B:")
          .appendField(new Blockly.FieldNumber(0, 0, 255), "blue")
          .appendField(") ON ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
  }
}


Blockly.Blocks['RGBled_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Color LED OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['RGBled_blink_advance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color LED Blink ( ");
    this.appendValueInput("on_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" on_time= ");
    this.appendValueInput("off_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , off_time= ");
    this.appendValueInput("fade_in_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , fade_in_time= ");
    this.appendValueInput("fade_out_time")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , fade_out_time= ");
    this.appendValueInput("n_cnt")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField(" , n= ")
    this.appendDummyInput()
        .appendField(" , on_color= (R:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "on_red")
        .appendField(") (G:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "on_green")
        .appendField(") (B:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "on_blue")
        .appendField(")")
    this.appendDummyInput()
        .appendField(" , off_color= (R:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "off_red")
        .appendField(") (G:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "off_green")
        .appendField(") (B:")
        .appendField(new Blockly.FieldNumber(0, 0, 255), "off_blue")
        .appendField(")")
    this.appendDummyInput()
        .appendField(" ) ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['blank_code'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Write ");
        this.appendValueInput("code")
            .setCheck(null)
            .appendField("Code");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(8);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['button_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['button_ispressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button is pressed");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['switch_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPIO Number");
    this.appendValueInput("button_number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Switch Button");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['buzzer_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Buzzer ON");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Buzzer OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer_beep_advance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer Beep ( ")
    this.appendValueInput("on_time")
        .setCheck(null)
        .appendField(" on_time= ");
    this.appendValueInput("off_time")
        .setCheck(null)
        .appendField(" , off_time= ");
    this.appendValueInput("n_cnt")
        .setCheck(null)
        .appendField(" , n= ")
    this.appendDummyInput()
        .appendField(" ) ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['dcsensor_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DistanceSensor Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance(cm)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['gpio_by_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPIO Number");
    this.appendValueInput("gpio_number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" Setup ")
        .appendField(new Blockly.FieldDropdown([["GPIO.IN","IN"], ["GPIO.OUT","OUT"]]), "gpio_setup");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(382);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['gpio_in_signal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set");
    this.appendValueInput("obj_gpio")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("GPIO Number");
    this.appendValueInput("pin_number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Input");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(382);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['gpio_out_signal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set GPIO Number");
    this.appendValueInput("pin_number")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" To Output ")
        .appendField(new Blockly.FieldDropdown([["HIGH","True"], ["LOW","False"]]), "signal_setup");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(382);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['gpio_cleanup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GPIO CleanUp");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(382);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['buzzer_by_pin'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("GPIO Number ");
      this.appendValueInput("pin_number")
          .setCheck("Number");
      this.appendDummyInput()
      .appendField("Buzzer ")
      .appendField(new Blockly.FieldDropdown([["base do","32"], ["re","36"], ["mi","41"], ["pa","43"], ["sol","48"], ["la","55"], ["si","60"], ["do","65"]]), "scale");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['buzzer_beep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Buzzer Beep for Times");
      this.appendValueInput("times")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['current_time'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Current Time");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['diff_time'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Time Difference");
        this.setOutput(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['wait'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Wait");
        this.appendValueInput("after_seconds")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("Seconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(8);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['controls_try'] = {
  // Try
  init: function() {
    this.appendDummyInput()
          .appendField("TRY");
    this.appendStatementInput('try')
        .setCheck(null);
    this.appendDummyInput()
        .appendField("FINALLY");
    this.appendStatementInput('finally')
        .setCheck(null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(8);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_try_except'] = {
  // Try
  init: function() {
    this.appendDummyInput()
          .appendField("TRY");
    this.appendStatementInput('try_statement')
        .setCheck(null);
    this.appendDummyInput()
        .appendField("EXCEPT");
    this.appendStatementInput('except_statement')
        .setCheck(null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(8);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_try_default_except'] = {
  // Try
  init: function() {
    this.appendDummyInput()
          .appendField("TRY");
    this.appendStatementInput('try_statement')
        .setCheck(null);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(8);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['camera_ready'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Camera Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['camera_picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("take a picture");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_image_take_picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set");
    this.appendValueInput("obj_image")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("take a picture");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_image_to_global_frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set");
    this.appendValueInput("obj_image")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to global frame");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_image_to_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Save");
    this.appendValueInput("obj_image")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to file");
    this.appendValueInput("obj_text")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_image_to_project_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Save");
    this.appendValueInput("obj_image")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to project ");
    this.appendValueInput("obj_text")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['save_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Save Camera and Key Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['stop_saving_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Saving Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_forward_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Forward Moving Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_left_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Left Moving Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_right_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Right Moving Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['get_stop_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Stoped Moving Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['camera_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Camera CleanUp");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['delete_all_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delete All Training Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


  // End Block Definition */

  //* led check for front and rear
  Blockly.Python['led_check'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var code = 'led = LED('+dropdown_led_select+');\n';
    code += 'led.on();\n';
    code += 'led.off();\n';
    code += 'time.sleep(1);\n';
    return code;
  };
  //*/

  //* led ready to definition
  Blockly.Python['led_ready'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    //var code = 'led'+dropdown_led_select+' = LED('+dropdown_led_select+');\n';
    var code  = '';
    return code;
  };
  //*/

  //* led blink
  Blockly.Python['led_blink'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var code = 'led'+dropdown_led_select+'.blink();\n';
    //code += 'led.off();\n';
    return code;
  };
  //*/

  //* led blink advance
  Blockly.Python['led_blink_advance'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var value_on_time = Blockly.Python.valueToCode(block, 'on_time', Blockly.Python.ORDER_ATOMIC);
    var value_off_time = Blockly.Python.valueToCode(block, 'off_time', Blockly.Python.ORDER_ATOMIC);
    var value_n_cnt = Blockly.Python.valueToCode(block, 'n_cnt', Blockly.Python.ORDER_ATOMIC);
    var code = 'led'+dropdown_led_select+'.blink(on_time='+value_on_time+', off_time='+value_off_time+', n='+value_n_cnt+');\n';
    //code += 'sleepTime = ('+value_on_time+' + '+value_off_time+') * '+value_n_cnt+';\n';
    return code;
  };
  //*/

  //* led select on
  Blockly.Python['led_select_on'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var code = 'led'+dropdown_led_select+'.on();\n';
    //code += 'led.off();\n';
    return code;
  };
  //*/

  //* led select off
  Blockly.Python['led_select_off'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var code = 'led'+dropdown_led_select+'.off();\n';
    //code += 'led.off();\n';
    return code;
  };
  //*/

  //* led by pin
  Blockly.Python['led_by_pin'] = function(block) {
      var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
      //var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
      //var code = 'led = LED('+value_led_number+');\n';
      var code = '';
      return code;
  };
  //*/

  //* led on for times
  Blockly.Python['led_on'] = function(block) {
      //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
      var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
      var code = 'led.on();\n';
      //code += 'led.off();\n';
      code += 'time.sleep('+value_times+');\n';
      return code;
  };
  //*/

  //* led off for times
  Blockly.Python['led_off'] = function(block) {
      //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
      var code = 'led.off();\n';
      return code;
  };
  //*/


  Blockly.Python['blank_code'] = function(block) {
      var value_ = Blockly.Python.valueToCode(block, 'code', Blockly.Python.ORDER_ATOMIC);
      var code = value_+'\n';
      code = code.replace(/[']/g,'');
      return code;
  }

  Blockly.Python['PWMled_ready'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var value_freq_num = block.getFieldValue('freq_num');
    //var code = 'led = PWMLED('+dropdown_led_select+', frequency=100);\n';
    var code = '';
    return code;
  };

  //* PWMled blink advance
  Blockly.Python['PWMled_blink_advance'] = function(block) {
    var dropdown_led_select = block.getFieldValue('led_select');
    var value_on_time = Blockly.Python.valueToCode(block, 'on_time', Blockly.Python.ORDER_ATOMIC);
    var value_off_time = Blockly.Python.valueToCode(block, 'off_time', Blockly.Python.ORDER_ATOMIC);
    var value_fade_in_time = Blockly.Python.valueToCode(block, 'fade_in_time', Blockly.Python.ORDER_ATOMIC);
    var value_fade_out_time = Blockly.Python.valueToCode(block, 'fade_out_time', Blockly.Python.ORDER_ATOMIC);
    var value_n_cnt = Blockly.Python.valueToCode(block, 'n_cnt', Blockly.Python.ORDER_ATOMIC);
    var code = 'led'+dropdown_led_select+'.blink(on_time='+value_on_time+', off_time='+value_off_time+', fade_in_time= '+value_fade_in_time+', fade_out_time= '+value_fade_out_time+', n='+value_n_cnt+');\n';
    //code += 'sleepTime = ('+value_on_time+' + '+value_off_time+' + '+value_fade_in_time+' + '+value_fade_out_time+') * '+value_n_cnt+';\n';
    return code;
  };
  //*/

  Blockly.Python['RGBled_ready'] = function(block) {
    //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
    //var code = 'from gpiozero import RGBLED \n';
    //code += 'led = RGBLED(2, 3, 4) \n';
    var code = '';
    return code;
  };

  Blockly.Python['RGBled_on'] = function(block) {
    
    var value_red = block.getFieldValue('red');
    var value_green = block.getFieldValue('green');
    var value_blue = block.getFieldValue('blue');

    var code = 'led.color = ('+value_red+'/255, '+value_green+'/255, '+value_blue+'/255) \n';
    return code;
  }

  Blockly.Python['RGBled_off'] = function(block) {
    //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
    var code = 'led.off();\n';
    return code;
  };

  //* PWMled blink advance
  Blockly.Python['RGBled_blink_advance'] = function(block) {
    
    var value_on_time = Blockly.Python.valueToCode(block, 'on_time', Blockly.Python.ORDER_ATOMIC);
    var value_off_time = Blockly.Python.valueToCode(block, 'off_time', Blockly.Python.ORDER_ATOMIC);
    var value_fade_in_time = Blockly.Python.valueToCode(block, 'fade_in_time', Blockly.Python.ORDER_ATOMIC);
    var value_fade_out_time = Blockly.Python.valueToCode(block, 'fade_out_time', Blockly.Python.ORDER_ATOMIC);
    var value_n_cnt = Blockly.Python.valueToCode(block, 'n_cnt', Blockly.Python.ORDER_ATOMIC);
    var value_on_red = block.getFieldValue('on_red');
    var value_on_green = block.getFieldValue('on_green');
    var value_on_blue = block.getFieldValue('on_blue');
    var value_off_red = block.getFieldValue('off_red');
    var value_off_green = block.getFieldValue('off_green');
    var value_off_blue = block.getFieldValue('off_blue');
    var code = 'led.blink(on_time='+value_on_time+', off_time='+value_off_time+', fade_in_time= '+value_fade_in_time+', fade_out_time= '+value_fade_out_time;
    code += ', on_color=('+value_on_red+'/255, '+value_on_green+'/255, '+value_on_blue+'/255)';
    code += ', off_color=('+value_off_red+'/255, '+value_off_green+'/255, '+value_off_blue+'/255)';
    code += ', n='+value_n_cnt+');\n';
    //code += 'sleepTime = ('+value_on_time+' + '+value_off_time+' + '+value_fade_in_time+' + '+value_fade_out_time+') * '+value_n_cnt+';\n';
    return code;
  };
  //*/

  ///button definition

  Blockly.Python['button_ready'] = function(block) {
      //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
      //var code = 'button = Button(15)\n';
      var code = '';
      return code;
  };

  Blockly.Python['button_ispressed'] = function(block) {
      //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
      var code = 'button.is_pressed';
      return [code, Blockly.Python.ORDER_NONE];
  };

  //* switch button by pin
  Blockly.Python['switch_button'] = function(block) {
    var value_button_number = Blockly.Python.valueToCode(block, 'button_number', Blockly.Python.ORDER_ATOMIC);
    var code = 'GPIO.setmode(GPIO.BCM);\n';
    code += 'buttonPin = '+value_button_number+'\n';
    code += 'GPIO.setup(buttonPin, GPIO.IN);\n';
    return code;
};
//*/

Blockly.Python['buzzer_ready'] = function(block) {
  //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
  //var code = 'buzzer = Buzzer(18)\n';
  var code = '';
  return code;
};
Blockly.Python['buzzer_on'] = function(block) {
  //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.on();\n';
  return code;
};
Blockly.Python['buzzer_off'] = function(block) {
  //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.off();\n';
  return code;
};

//* buzzer beep advance
Blockly.Python['buzzer_beep_advance'] = function(block) {
  var value_on_time = Blockly.Python.valueToCode(block, 'on_time', Blockly.Python.ORDER_ATOMIC);
  var value_off_time = Blockly.Python.valueToCode(block, 'off_time', Blockly.Python.ORDER_ATOMIC);
  var value_n_cnt = Blockly.Python.valueToCode(block, 'n_cnt', Blockly.Python.ORDER_ATOMIC);
  var code = 'buzzer.beep(on_time='+value_on_time+', off_time='+value_off_time+', n='+value_n_cnt+');\n';
  //code += 'sleepTime = ('+value_on_time+' + '+value_off_time+') * '+value_n_cnt+';\n';
  return code;
};
//*/

Blockly.Python['dcsensor_ready'] = function(block) {
  //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
  //var code = 'factory = PiGPIOFactory()\n';
  //code += 'ds = DistanceSensor(27,22, pin_factory=factory)\n';
  var code = '';
  return code;
};

Blockly.Python['distance'] = function(block) {
  //var value_led_number = Blockly.Python.valueToCode(block, 'led_number', Blockly.Python.ORDER_ATOMIC);
  var code = 'float(ds.distance* 100)\n';
  return [code, Blockly.Python.ORDER_NONE];
};

//* gpio by num
Blockly.Python['gpio_by_num'] = function(block) {
    var value_gpio_number = Blockly.Python.valueToCode(block, 'gpio_number', Blockly.Python.ORDER_ATOMIC);
    var dropdown_gpio_setup = block.getFieldValue('gpio_setup');
    var code = 'GPIO.setup('+value_gpio_number+', GPIO.'+dropdown_gpio_setup+');\n';
    return code;
};
//*/

//* gpio signal in by pin
Blockly.Python['gpio_in_signal'] = function(block) {
    var value_obj_gpio = Blockly.Python.valueToCode(block, 'obj_gpio', Blockly.Python.ORDER_ATOMIC);
    var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    var code = value_obj_gpio + ' = GPIO.input('+value_pin_number+');\n';
    return code;
};
//*/

//* gpio signal out by pin
Blockly.Python['gpio_out_signal'] = function(block) {
    //var value_output_signal = Blockly.Python.valueToCode(block, 'output_signal', Blockly.Python.ORDER_ATOMIC);
    var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    var dropdown_signal_setup = block.getFieldValue('signal_setup');
    var code = '';
    if(dropdown_signal_setup == 'True') { code += 'GPIO.output('+value_pin_number+', True)\n'; }
    else { code += 'GPIO.output('+value_pin_number+', False)\n'; }
    //code += 'time.sleep(0.2)\n';
    return code;
};
//*/

//* buzzer by pin
Blockly.Python['buzzer_by_pin'] = function(block) {
    var dropdown_scale = block.getFieldValue('scale');
    var value_pin_number = Blockly.Python.valueToCode(block, 'pin_number', Blockly.Python.ORDER_ATOMIC);
    //var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
    var code = 'GPIO.setmode(GPIO.BCM);\n';
    code += 'buzzerPin = '+value_pin_number+'\n';
    code += 'GPIO.setup(buzzerPin, GPIO.OUT);\n';
    code += 'GPIO.setwarnings(False);\n';
    code += 'pwm = GPIO.PWM(buzzerPin, 1);\n';
    code += 'freqScale = '+dropdown_scale+';\n';
    //code += 'pwm.start(50);\n';
    //code += 'pwm.ChangeFrequency(freqScale);\n';
    //code += 'time.sleep('+value_times+');\n';
    //code += 'pwm.stop();\n';
    //code += 'GPIO.cleanup();\n';
    return code;
};
//*/

//* buzzer beep for times
Blockly.Python['buzzer_beep'] = function(block) {
    var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
    var code = 'pwm.start(50);\n';
    code += 'pwm.ChangeFrequency(freqScale);\n';
    code += 'time.sleep('+value_times+');\n';
    code += 'pwm.stop();\n';
    return code;
};
//*/

//* GPIO clean up
Blockly.Python['gpio_cleanup'] = function(block) {
    var code = 'GPIO.cleanup();\n';
    return code;
};
//*/

//* set current time
Blockly.Python['current_time'] = function(block) {
    var code = 'time.time();\n';
    return code;
};
//*/

//* set time difference
Blockly.Python['diff_time'] = function(block) {
    var code = '(time.time() - current_time) % 60.0;\n';
    return code;
};
//*/

//* wait
Blockly.Python['wait'] = function(block) {
    var value_after_seconds = Blockly.Python.valueToCode(block, 'after_seconds', Blockly.Python.ORDER_ATOMIC);
    var code = 'time.sleep('+value_after_seconds+');\n';
    return code;
};
//*/

Blockly.Python['controls_try'] = function(block) {
    var statements_try_statement = Blockly.Python.statementToCode(block, 'try');
    var statements_finally_statement = Blockly.Python.statementToCode(block, 'finally');
    var code = 'try: \n';
    code += statements_try_statement;
    code += 'finally: \n';
    code += statements_finally_statement;
    return code;
};

Blockly.Python['controls_try_except'] = function(block) {
  var statements_try_statement = Blockly.Python.statementToCode(block, 'try_statement');
  var statements_except_statement = Blockly.Python.statementToCode(block, 'except_statement');
  var code = 'try: \n';
  code += statements_try_statement;
  code += 'except Exception as msg: \n';
  code += '  errmsg = msg \n';
  code += statements_except_statement;
  code += '\n';
  return code;
};

Blockly.Python['controls_try_default_except'] = function(block) {
  var statements_try_statement = Blockly.Python.statementToCode(block, 'try_statement');
  var code = 'try: \n';
  code += statements_try_statement;
  code += 'except Exception as msg: \n';
  code += '  errmsg = msg \n';
  code += '\n';
  return code;
};

Blockly.Python['camera_ready'] = function(block) {
  //var code = 'cam = camera.Camera()\n';
  var code = '';
  return code;
};

Blockly.Python['camera_picture'] = function(block) {
  var code = 'image = cam.get_frame()\n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/cam/picture1.jpg\', image)\n';
  return code;
};

Blockly.Python['set_image_take_picture'] = function(block) {
  var value_obj_image = Blockly.Python.valueToCode(block, 'obj_image', Blockly.Python.ORDER_ATOMIC);
  var code = value_obj_image+' = cam.get_frame()\n';
  return code;
};

Blockly.Python['set_image_to_global_frame'] = function(block) {
  var value_obj_image = Blockly.Python.valueToCode(block, 'obj_image', Blockly.Python.ORDER_ATOMIC);
  var code = value_obj_image+' = gFrame \n';
  return code;
};

Blockly.Python['save_image_to_file'] = function(block) {
  var value_obj_image = Blockly.Python.valueToCode(block, 'obj_image', Blockly.Python.ORDER_ATOMIC);
  var value_obj_text = Blockly.Python.valueToCode(block, 'obj_text', Blockly.Python.ORDER_ATOMIC);
  value_obj_text = value_obj_text.replace(/[']/g,'');
  var code = 'cv2.imwrite(\'/home/pi/autonomousCar/block/cam/'+value_obj_text+'\', '+value_obj_image+')\n';
  code += 'os.makedirs(\'/home/pi/autonomousCar/block/cam/thumb\', exist_ok=True) \n';
  code += 'resizeImg = cv2.resize('+value_obj_image+', (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/cam/thumb/thumb_'+value_obj_text+'\', resizeImg) \n';
  return code;
};

Blockly.Python['save_image_to_project_file'] = function(block) {
  var value_obj_image = Blockly.Python.valueToCode(block, 'obj_image', Blockly.Python.ORDER_ATOMIC);
  var value_obj_text = Blockly.Python.valueToCode(block, 'obj_text', Blockly.Python.ORDER_ATOMIC);
  value_obj_text = value_obj_text.replace(/[']/g,'');
  var code = 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/cam/'+value_obj_text+'\', '+value_obj_image+')\n';
  code += 'os.makedirs(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/cam/thumb\', exist_ok=True) \n';
  code += 'resizeImg = cv2.resize('+value_obj_image+', (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/cam/thumb/thumb_'+value_obj_text+'\', resizeImg) \n';
  return code;
};

Blockly.Python['save_data'] = function(block) {
  var code = 'cam.save_frame()\n';
  return code;
};

Blockly.Python['stop_saving_data'] = function(block) {
  var code = 'cam.stop_save()\n';
  return code;
};

Blockly.Python['get_forward_data'] = function(block) {
  var code = 'camera.wheel = 2\n';
  return code;
};

Blockly.Python['get_left_data'] = function(block) {
  var code = 'camera.wheel = 1\n';
  return code;
};

Blockly.Python['get_right_data'] = function(block) {
  var code = 'camera.wheel = 3\n';
  return code;
};

Blockly.Python['get_stop_data'] = function(block) {
  var code = 'camera.wheel = 0\n';
  return code;
};

Blockly.Python['camera_end'] = function(block) {
  var code = 'camera.camera_handle.release()\n';
  return code;
};

Blockly.Python['delete_all_data'] = function(block) {
  var code = 'import os,shutil\n';
  code += 'if os.path.isdir(\'./data/training\'):   \n';
  code += '    shutil.rmtree(\'./data/training\') \n';
  code += 'if os.path.isdir(\'./logs\'):   \n';
  code += '    shutil.rmtree(\'./logs\')  \n';
  code += 'os.mkdir(\'./data/training\') \n';
  code += 'os.mkdir(\'./logs\') \n';
  code += 'f = open(\'./data/training/data.csv\', \'w\') \n';
  code += 'f.close() \n';
  return code;
};

