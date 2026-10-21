Blockly.Blocks['block_group'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Copy Blocks Group");
      this.appendStatementInput("block_group_statement")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("8");  // #RRGGBB
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['string_length'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('length of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns number of letters in the provided text.');
        this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    }
};

Blockly.Blocks['draw_circle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Circle");
        this.appendValueInput("radius")
            .setCheck(null)
            .appendField("Radius");
        this.appendValueInput("x")
            .setCheck(null)
            .appendField("X axis");
        this.appendValueInput("y")
            .setCheck(null)
            .appendField("Y axis");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// End Block Definition */



//* Group Blocks Selected
Blockly.Python['block_group'] = function(block) {
    var regex = /^[\s]/gi;  // ^: 문자열 시작 , \s: 공백한칸
    var statements_block_group_statement = Blockly.Python.statementToCode(block, 'block_group_statement');

    var split_statements = statements_block_group_statement.split('\n');
    var rep_block_group_statement = '';
    for(var idx in split_statements) {
        rep_block_group_statement += split_statements[idx].replace(regex, '').replace(regex, '') + '\n';
    }
    
    var code = rep_block_group_statement;
    return code;
  };
//*/

//* draw circle Code
Blockly.Python['draw_circle'] = function(block) {
    var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    
    var code = 'radius = '+value_radius+';\n';
    code += 'circle_x = '+value_x+';\n';
    code += 'circle_y = '+value_y+';\n';
    return code;
};
//*/