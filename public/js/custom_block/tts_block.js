Blockly.Blocks['tts_ready'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Text To Speech Ready");
      // this.appendStatementInput("tts_statement")
      //     .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(28);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_tts_text_speed'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Speak Text");
      this.appendValueInput("tts_text")
          .setCheck("String");
      this.appendDummyInput()
          .appendField("Speed")
          .appendField(new Blockly.FieldNumber(1.1, 1.1, 1.6), "tts_speed");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(28);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  // End Block Definition */

  //* tts ready
  Blockly.Python['tts_ready'] = function(block) {
    var statements_tts_statement = Blockly.Python.statementToCode(block, 'tts_statement');
    // var code = 'if __name__ == "__main__":\n';
    //var code = 'soundCtrl = tts.SoundController();\n';
    code = '';
    code += statements_tts_statement;
    return code;
  };
  //*/

  //* set tts text and speed
  Blockly.Python['set_tts_text_speed'] = function(block) {
    var value_tts_text = Blockly.Python.valueToCode(block, 'tts_text', Blockly.Python.ORDER_ATOMIC);
    var number_tts_speed = block.getFieldValue('tts_speed');
    var code = 'soundCtrl.ttsKR_speed('+value_tts_text+', '+number_tts_speed+');\n';
    return code;
  };
  //*/