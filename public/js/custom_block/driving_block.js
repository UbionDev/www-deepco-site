//* gpiozero Motor

Blockly.Blocks['motor_ready'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Motor Ready");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['motor_speed'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set Motor Speed to ")
            .appendField(new Blockly.FieldNumber(0, 0, 100), "motor_speed_field");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['motor_ready_advance'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Motor Ready ( speed= ")
            .appendField(new Blockly.FieldNumber(0, 0, 100), "motor_speed_field")
            .appendField(" ) ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['set_motor_forward'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor Forwrad");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_motor_backward'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor Backwrad");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['set_motor_stop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor Stop");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_motor_forward_advenced'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor Forwrad (speed :")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "motor_speed_field")
          .appendField(" ) ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_motor_backward_advenced'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Motor Backwrad (speed :")
          .appendField(new Blockly.FieldNumber(0, 0, 100), "motor_speed_field")
          .appendField(" ) ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

//gpiozero Motor */

//* gpiozero Servo

Blockly.Blocks['servo_ready'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Servo Ready");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['servo_middle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set Servo Middle ")
            .appendField(new Blockly.FieldNumber(0, -30, 30), "servo_middle_field");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['servo_ready_advance'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Servo Ready ( initial_angle= ")
            .appendField(new Blockly.FieldNumber(0, -10, 10), "servo_middle_field")
            .appendField(" ) ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['set_servo_middle'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Servo Middle");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['set_servo_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Servo Left");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_servo_left_advance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Servo Left (angle= middle -")
          .appendField(new Blockly.FieldNumber(35, 0, 50), "servo_left_angle")
          .appendField(" ) ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_servo_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Servo Right");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_servo_right_advance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Servo Right (angle= middle +")
          .appendField(new Blockly.FieldNumber(35, 0, 50), "servo_right_angle")
          .appendField(" ) ");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

//gpiozero Servo */

Blockly.Blocks['move_forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Forward");
        this.appendValueInput("speed")
            .setCheck("Number")
            .appendField("Speed");
        this.appendValueInput("times")
            .setCheck("Number")
            .appendField("Seconds")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['move_backward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Backward");
        this.appendValueInput("speed")
            .setCheck("Number")
            .appendField("Speed");
        this.appendValueInput("times")
            .setCheck("Number")
            .appendField("Seconds")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['move_left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Left");
        this.appendValueInput("speed")
            .setCheck("Number")
            .appendField("Speed");
        this.appendValueInput("times")
            .setCheck("Number")
            .appendField("Seconds")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['move_right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Right");
        this.appendValueInput("speed")
            .setCheck("Number")
            .appendField("Speed");
        this.appendValueInput("times")
            .setCheck("Number")
            .appendField("Seconds")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['move_stop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Stop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['camera_check'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Camera Check");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['record'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Record");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

  Blockly.Blocks['keyboard_control'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("KeyBoard Control Ready");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(40);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['def_curses_ready_func'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("def Curses Ready Function");
      this.appendStatementInput("curses_ready")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['def_curses_end_func'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("def Curses End Function");
      this.appendStatementInput("curses_end")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_curses_ready'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set Curses Ready");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_curses_end'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set Curses End");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['call_curses_ready_func'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Call Curses Ready");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['call_curses_end_func'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Call Curses End");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_screen_text'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set Text");
      this.appendValueInput("obj_text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("to Screen");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['get_key_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set");
      this.appendValueInput("obj_char")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("to Key Input Value");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['curses_ord_output'] = {
    init: function() {
      this.appendValueInput("obj_text_field")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['curses_key_option_output'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["KEY_UP","curses.KEY_UP"], ["KEY_DOWN","curses.KEY_DOWN"], ["KEY_LEFT","curses.KEY_LEFT"], ["KEY_RIGHT","curses.KEY_RIGHT"]]), "curses_key_option");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['curses_keyup_output'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Curses Key Up");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['curses_keyleft_output'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Curses Key Left");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['curses_keyright_output'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Curses Key Right");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['curses_keydown_output'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Curses Key Down");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['if_quit'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IF");
      this.appendValueInput("obj_char")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("equals");
      this.appendValueInput("obj_char1")
          .setCheck(null);
      this.appendStatementInput("quit_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['if_up'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IF");
      this.appendValueInput("obj_char")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("equals Key UP");
      this.appendStatementInput("forward_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['if_left'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IF");
      this.appendValueInput("obj_char")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("equals Key LEFT");
      this.appendStatementInput("left_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['if_right'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IF");
      this.appendValueInput("obj_char")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("equals Key RIGHT");
      this.appendStatementInput("right_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['if_down'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("IF");
      this.appendValueInput("obj_char")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("equals Key DOWN");
      this.appendStatementInput("down_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_quit_keyboard'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Quit KeyBoard Control");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(150);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['Keyboard_input'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Keboard");
      this.appendStatementInput("quit_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setColour(50);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  

  // End Block Definition */

  /* move forward Code
  Blockly.Python['move_forward'] = function(block) {
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
    var code = '\n';
    code += 'speed = '+value_speed+';\n';
    code += 'times = '+value_times+';\n';
    code += 'robot.move_forward_speed(speed)\n';
    code += 'time.sleep(times)\n';
    return code;
}
//*/

/* move backward Code
Blockly.Python['move_backward'] = function(block) {
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var code = 'speed = '+value_speed+';\n';
    return code;
}
//*/

/* move left Code
Blockly.Python['move_left'] = function(block) {
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
    var code = 'speed = '+value_speed+';\n';
    code += 'times = '+value_times+';\n';
    code += 'robot.move_left_speed(speed)\n';
    code += 'time.sleep(times)\n';
    return code;
}
//*/

/* move right Code
Blockly.Python['move_right'] = function(block) {
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
    var code = 'speed = '+value_speed+';\n';
    code += 'times = '+value_times+';\n';
    code += 'robot.move_right_speed(speed)\n';
    code += 'time.sleep(times)\n';
    return code;
}
//*/

/* move stop Code
Blockly.Python['move_stop'] = function(block) {
    var code = 'robot.stop()\n';
    code += 'cfg.cnt = 0\n';
    //code += 'if cfg.cap != \'\' :\n';
    //code += ' cfg.cap.release()\n';
    code += 'if cfg.f != \'\' :\n';
    code += ' cfg.f.close()\n';
    return code;
}
//*/

/* camera check
Blockly.Python['camera_check'] = function(block) {
    var code = '';
    //code += 'cfg.camera_detected, cfg.camera_handle = cam.init_camera()\n';
    code += 'cfg.cap = cv2.VideoCapture(0)\n';
    return code;
}
//*/

/* recording for training
Blockly.Python['record'] = function(block) {
    var code = '';
    code += 'cfg.f = open(cfg.outputDir+cfg.currentDir+\'/data.csv\',\'a\');\n';
    code += 'cfg.fwriter = csv.writer(cfg.f);\n';
    code += 'ret, cfg.frame = cfg.cap.read();\n';
    code += 'if ret:\n';
    //code += ' cfg.frame = cam.Camera().get_frame()\n';
    code += ' myfile = \'img_\'+time.strftime(\'%Y-%m-%d_%H-%M-%S\')+\'_\'+str(cfg.cnt)+\'.jpg\'\n';
    code += ' cfg.fwriter.writerow((myfile, cfg.wheel))\n';
    code += ' cv2.imwrite(cfg.outputDir+cfg.currentDir+\'/\'+ myfile, cfg.frame)\n';
    code += ' cfg.cnt += 1\n';
    return code;
}
//*/

//* keyboard input statement
Blockly.Python['keyboard_control'] = function(block) {
    //var statements_keyboard_statement = Blockly.Python.statementToCode(block, 'keyboard_statement');
    var code = '\n';
    return code;
};
//*/

//* def curses ready function
Blockly.Python['def_curses_ready_func'] = function(block) {
    var statements_curses_ready = Blockly.Python.statementToCode(block, 'curses_ready');
    var code = 'def curses_ready():\n';
    code += statements_curses_ready;
    return code;
};
//*/

//* set curses ready
Blockly.Python['set_curses_ready'] = function(block) {
    // var code = 'global screen, curses;\n';
    var code = 'screen = curses.initscr();\n';
    code += 'curses.noecho();\n';
    code += 'curses.cbreak();\n';
    code += 'screen.keypad(True);\n';
    return code;
};
//*/

//* set curses end
Blockly.Python['set_curses_end'] = function(block) {
    // var code = 'global screen, curses;\n';
    var code = 'curses.nocbreak();\n';
    code += 'screen.keypad(0);\n';
    code += 'curses.echo();\n';
    code += 'curses.endwin();\n';
    return code;
};
//*/

//* call curses ready function
Blockly.Python['call_curses_ready_func'] = function(block) {
    var code = 'curses_ready();\n';
    return code;
};
//*/

//* def curses end function
Blockly.Python['def_curses_end_func'] = function(block) {
    var statements_curses_end = Blockly.Python.statementToCode(block, 'curses_end');
    var code = 'def curses_end():\n';
    code += statements_curses_end;
    return code;
};
//*/

//* call curses end function
Blockly.Python['call_curses_end_func'] = function(block) {
    var code = 'curses_end();\n';
    return code;
};
//*/

//* set curses screen text
Blockly.Python['set_screen_text'] = function(block) {
    var value_obj_text = Blockly.Python.valueToCode(block, 'obj_text', Blockly.Python.ORDER_ATOMIC);
    //var code = 'screen.addstr('+value_obj_text+');\n';
    var code = 'stdscr.addstr('+value_obj_text+');\n';
    return code;
};
//*/

//* get keyboard input key
Blockly.Python['get_key_input'] = function(block) {
    var value_obj_char = Blockly.Python.valueToCode(block, 'obj_char', Blockly.Python.ORDER_ATOMIC);
    //var code = value_obj_char+' = screen.getch();\n';
    var code = value_obj_char+' = stdscr.getch();\n';
    return code;
};
//*/

//* curses ord function
Blockly.Python['curses_ord_output'] = function(block) {
    var value_obj_text_field = Blockly.Python.valueToCode(block, 'obj_text_field', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'ord('+value_obj_text_field+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
//*/

//* curses key option output
Blockly.Python['curses_key_option_output'] = function(block) {
  var dropdown_curses_key = block.getFieldValue('curses_key_option');
  // TODO: Assemble Python into code variable.
  var code = dropdown_curses_key;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
//*/

//* curses keyup output
Blockly.Python['curses_keyup_output'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'curses.KEY_UP';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
//*/

//* curses key left output
Blockly.Python['curses_keyleft_output'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'curses.KEY_LEFT';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
//*/

//* curses key right output
Blockly.Python['curses_keyright_output'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'curses.KEY_RIGHT';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
//*/

//* curses keydown output
Blockly.Python['curses_keydown_output'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'curses.KEY_DOWN';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
//*/

//* keyboard quit statement
Blockly.Python['if_quit'] = function(block) {
    var statements_quit_statement = Blockly.Python.statementToCode(block, 'quit_statement');
    var value_obj_char = Blockly.Python.valueToCode(block, 'obj_char', Blockly.Python.ORDER_ATOMIC);
    var value_obj_char1 = Blockly.Python.valueToCode(block, 'obj_char1', Blockly.Python.ORDER_ATOMIC);
    var code = 'if '+value_obj_char+' == ord(' +value_obj_char1 + '): \n';
    code = code.replace(/[\\]/g,'');
    code += statements_quit_statement;
    return code;
  };
  //*/

//* keyboard forward statement
Blockly.Python['if_up'] = function(block) {
  var statements_forward_statement = Blockly.Python.statementToCode(block, 'forward_statement');
  var value_obj_char = Blockly.Python.valueToCode(block, 'obj_char', Blockly.Python.ORDER_ATOMIC);
  var code = 'if '+value_obj_char+' == curses.KEY_UP: \n';
  code += statements_forward_statement;
  return code;
};
//*/

//* keyboard forward statement
Blockly.Python['if_left'] = function(block) {
  var statements_left_statement = Blockly.Python.statementToCode(block, 'left_statement');
  var value_obj_char = Blockly.Python.valueToCode(block, 'obj_char', Blockly.Python.ORDER_ATOMIC);
  var code = 'if '+value_obj_char+' == curses.KEY_LEFT: \n';
  code += statements_left_statement;
  return code;
};
//*/

//* keyboard right statement
Blockly.Python['if_right'] = function(block) {
  var statements_right_statement = Blockly.Python.statementToCode(block, 'right_statement');
  var value_obj_char = Blockly.Python.valueToCode(block, 'obj_char', Blockly.Python.ORDER_ATOMIC);
  var code = 'if '+value_obj_char+' == curses.KEY_RIGHT: \n';
  code += statements_right_statement;
  return code;
};
//*/

//* keyboard stop statement
Blockly.Python['if_down'] = function(block) {
  var statements_down_statement = Blockly.Python.statementToCode(block, 'down_statement');
  var value_obj_char = Blockly.Python.valueToCode(block, 'obj_char', Blockly.Python.ORDER_ATOMIC);
  var code = 'if '+value_obj_char+' == curses.KEY_DOWN: \n';
  code += statements_down_statement;
  return code;
};
//*/

//* set quit keyboard  
Blockly.Python['set_quit_keyboard'] = function(block) {
    var code = 'break;\n';
    return code;
};
//*/

//* gpiozero motor ready
Blockly.Python['motor_ready'] = function(block) {
    //var code = 'motor = Motor(forward=19, backward=13); \n';
    var code = '';
    return code;
}
//*/

//* set motor speed ( Limitted from 0 to 100 )
Blockly.Python['motor_speed'] = function(block) {
    //var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var number_motor_speed = block.getFieldValue('motor_speed_field');
    var code = 'speed = '+number_motor_speed+ '; \n';
    return code;
}
//*/

//* gpiozero motor ready
Blockly.Python['motor_ready_advance'] = function(block) {
    var number_motor_speed = block.getFieldValue('motor_speed_field');
    //var code = 'motor = Motor(forward=19, backward=13); \n';
    //code += 'speed = '+number_motor_speed+ '; \n';
    var code = '';
    return code;
}
//*/

//* set motor forward
Blockly.Python['set_motor_forward'] = function(block) {
    var code = 'motor.forward(speed=speed/100);\n';
    return code;
};

Blockly.Python['set_motor_forward_advenced'] = function(block) {
  var number_motor_speed = block.getFieldValue('motor_speed_field');
  var code = 'motor.forward('+number_motor_speed+'/100);\n';
  return code;
};
//*/

//* set motor backward
Blockly.Python['set_motor_backward'] = function(block) {
    var code = 'motor.backward(speed=speed/100);\n';
    return code;
};

Blockly.Python['set_motor_backward_advenced'] = function(block) {
  var number_motor_speed = block.getFieldValue('motor_speed_field');
  var code = 'motor.backward('+number_motor_speed+'/100);\n';
  return code;
};
//*/

//* set motor stop
Blockly.Python['set_motor_stop'] = function(block) {
    var code = 'motor.stop();\n';
    return code;
};

//*/

//* gpiozero servo ready
Blockly.Python['servo_ready'] = function(block) {
    //var code = 'factory = PiGPIOFactory(); \n';
    //code += 'servo = AngularServo(12, pin_factory=factory);\n';
    var code = '';
    return code;
}
//*/

//* servo ready advance
Blockly.Python['servo_ready_advance'] = function(block) {
    var value_servo_middle = block.getFieldValue('servo_middle_field');
    //var code = 'factory = PiGPIOFactory(); \n';
    //code += 'servo = AngularServo(12, initial_angle='+value_servo_middle+', pin_factory=factory);\n';
    //code += 'middle = '+value_servo_middle+';\n';
    var code = '';
    return code;
}
//*/

//* set servo middle
Blockly.Python['servo_middle'] = function(block) {
    //var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    var value_servo_middle = block.getFieldValue('servo_middle_field');
    //var code = 'middle = '+value_servo_middle+ '; \n';
    var code = '';
    return code;
}
//*/

//* set servo left
Blockly.Python['set_servo_left'] = function(block) {
    var code = 'servo.angle = kit_middle - 35;\n';
    return code;
};
//*/

//* servo left advance
Blockly.Python['set_servo_left_advance'] = function(block) {
    var value_left_angle = block.getFieldValue('servo_left_angle');
    var code = 'servo.angle = kit_middle - '+value_left_angle+'; \n';   // From -25 To +25
    return code;
}
//*/

//* set servo right
Blockly.Python['set_servo_right'] = function(block) {
    var code = 'servo.angle = kit_middle + 35;\n';
    return code;
};
//*/

//* servo right advance
Blockly.Python['set_servo_right_advance'] = function(block) {
    var value_right_angle = block.getFieldValue('servo_right_angle');
    var code = 'servo.angle = kit_middle + '+value_right_angle+'; \n';   // From -25 To +25
    return code;
}
//*/

//* set servo middle
Blockly.Python['set_servo_middle'] = function(block) {
    var code = 'servo.angle = kit_middle;\n';
    return code;
};
//*/

Blockly.Python['Keyboard_input'] = function(block) {
  var statements_quit_statement = Blockly.Python.statementToCode(block, 'quit_statement');
  var code = 'def main(stdscr): \n';
      //code += "  screen = curses.initscr()\n";
      //code += "  curses.noecho()\n";
      //code += "  curses.cbreak()\n";
      code += "  stdscr.clear()\n";
      code += "  stdscr.keypad(True)\n";
      code += "  stdscr.nodelay(True) \n";
      //code = code.replace(/[\\]/g,'');
      code += statements_quit_statement;
      code += "\n";
      code += "wrapper(main)";
  return code;
};  