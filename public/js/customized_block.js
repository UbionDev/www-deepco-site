Blockly.Blocks['ubi_times'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("4");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

  Blockly.Blocks['loop_for1'] = {
  init: function() {
    this.appendValueInput("TIMES")
	    .setCheck("Number");
    this.appendDummyInput()
        .appendField("회 반복하기");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['loop_for1'] = function(block) {
  
  
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
  } else {
    // External number.
    var repeats = Blockly.Python.valueToCode(block, 'TIMES',
        Blockly.Python.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(repeats)) {
    repeats = parseInt(repeats, 10);
  } else {
    repeats = 'int(' + repeats + ')';
  }
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  var loopVar = Blockly.Python.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
  return code;
};

Blockly.Blocks['loop_while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("계속 반복하기");
    this.appendStatementInput("DO")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['loop_while'] = function(block) {
  // Do while/until loop.
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) ||
      Blockly.Python.PASS;
  return 'while True :\n' + branch;
};

Blockly.Blocks['stop_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("반복 중단하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['stop_loop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'break\n';
  return code;
};

// 논리문
Blockly.Blocks['logic_if'] = {
  init: function() {
    this.appendValueInput("IF0")
        .setCheck(null)
        .appendField("만약");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("DO0")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['logic_if'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '', branchCode, conditionCode;
  do {
    conditionCode = Blockly.Python.valueToCode(block, 'IF' + n,
        Blockly.Python.ORDER_NONE) || 'False';
    branchCode = Blockly.Python.statementToCode(block, 'DO' + n) ||
        Blockly.Python.PASS;
    code += (n == 0 ? 'if ' : 'elif ' ) + conditionCode + ':\n' + branchCode;

    ++n;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    branchCode = Blockly.Python.statementToCode(block, 'ELSE') ||
        Blockly.Python.PASS;
    code += 'else:\n' + branchCode;
  }
  return code;
};

Blockly.Blocks['logic_if_else'] = {
  init: function() {
    this.appendValueInput("IF0")
        .setCheck(null)
        .appendField("만약");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("DO0")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니면");
    this.appendStatementInput("ELSE")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['logic_if_else'] = Blockly.Python['logic_if'];

Blockly.Blocks['ubi_logic_compare'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["같다","EQ"], ["같지않다","NEQ"], ["작다","LT"], ["작거나같다","LTE"], ["크다","GT"], ["크거나같다","GTE"]]), "OP");
    this.appendValueInput("B")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ubi_logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = Blockly.Python.ORDER_RELATIONAL;
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Blocks['ubi_logic_operation'] = {
  init: function() {
    this.appendValueInput("A")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["그리고","AND"], ["또는","OR"]]), "OP");
    this.appendValueInput("B")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['ubi_logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  var operator = (block.getFieldValue('OP') == 'AND') ? 'and' : 'or';
  var order = (operator == 'and') ? Blockly.Python.ORDER_LOGICAL_AND :
      Blockly.Python.ORDER_LOGICAL_OR;
  var argument0 = Blockly.Python.valueToCode(block, 'A', order);
  var argument1 = Blockly.Python.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'False';
    argument1 = 'False';
  } else {
    // Single missing arguments have no effect on the return value.
    var defaultArgument = (operator == 'and') ? 'True' : 'False';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

Blockly.Blocks['ubi_logic_negate'] = {
  init: function() {
    this.appendValueInput("BOOL")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("(이)가 아니다");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['ubi_logic_negate'] = function(block) {
  // Negation.
  var argument0 = Blockly.Python.valueToCode(block, 'BOOL',
      Blockly.Python.ORDER_LOGICAL_NOT) || 'True';
  var code = 'not ' + argument0;
  return [code, Blockly.Python.ORDER_LOGICAL_NOT];
};

Blockly.Blocks['ubi_logic_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["참","TRUE"], ["거짓","FALSE"]]), "BOOL");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ubi_logic_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'True' : 'False';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//자료함

Blockly.Python['text'] = function(block) {
  // Text value.
  var code = Blockly.Python.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['ubi_text_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("화면에 출력하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ubi_text_print'] = function(block) {
  // Print statement.
  var msg = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_NONE) || '\'\'';
  return 'print(' + msg + ')\n';
};

Blockly.Blocks['ubi_variables_set'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("변수")
        .appendField(new Blockly.FieldVariable("a"), "VAR")
        .appendField("(을)를");
    this.appendDummyInput()
        .appendField("설정하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ubi_variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + '\n';
};
Blockly.Blocks['ubi_variables_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("변수")
        .appendField(new Blockly.FieldVariable("a"), "VAR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Python['ubi_variables_get'] = Blockly.Python['variables_get']


//로봇 움직임
Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("앞으로 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_forward'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'robot.move_forward()\n';
  return code;
};

Blockly.Blocks['move_backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("뒤로 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_backward'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'robot.move_backward()\n';
  return code;
};



Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("오른쪽으로 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['turn_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'robot.turn_right()\n';
  return code;
};

Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("왼쪽으로 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['turn_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'robot.turn_left()\n';
  return code;
};

Blockly.Blocks['move_forward_distance'] = {
  init: function() {
    this.appendValueInput("ubi_distance")
        .setCheck("Number")
        .appendField("앞으로");
    this.appendDummyInput()
        .appendField("cm 만큼 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_forward_distance'] = function(block) {
  if (block.getField('ubi_distance')) {
    // Internal number.
    var distance = String(parseInt(block.getFieldValue('ubi_distance'), 10));
  } else {
    // External number.
    var distance = Blockly.Python.valueToCode(block, 'ubi_distance',
        Blockly.Python.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(distance)) {
    distance = parseInt(distance, 10);
  } else {
    distance = 'int(' + distance + ')';
  }
  
  var code = 'robot.move_forward_distance(' + distance + ')\n';
  return code;
};

Blockly.Blocks['move_backward_distance'] = {
  init: function() {
    this.appendValueInput("ubi_distance")
        .setCheck("Number")
        .appendField("뒤로");
    this.appendDummyInput()
        .appendField("cm 만큼 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_backward_distance'] = function(block) {
  if (block.getField('ubi_distance')) {
    // Internal number.
    var distance = String(parseInt(block.getFieldValue('ubi_distance'), 10));
  } else {
    // External number.
    var distance = Blockly.Python.valueToCode(block, 'ubi_distance',
        Blockly.Python.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(distance)) {
    distance = parseInt(distance, 10);
  } else {
    distance = 'int(' + distance + ')';
  }
  
  var code = 'robot.move_backward_distance(' + distance + ')\n';
  return code;
};

Blockly.Blocks['move_forward_angle'] = {
  init: function() {
    this.appendValueInput("ubi_angle")
        .setCheck("Number")
        .appendField("회전각");
    this.appendDummyInput()
        .appendField("도 만큼 움직이기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_forward_angle'] = function(block) {
  if (block.getField('ubi_angle')) {
    // Internal number.
    var angle = String(parseInt(block.getFieldValue('ubi_angle'), 90));
  } else {
    // External number.
    var angle = Blockly.Python.valueToCode(block, 'ubi_angle',
        Blockly.Python.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(angle)) {
    angle = parseInt(angle, 10);
  } else {
    angle = 'int(' + angle + ')';
  }
  
  var code = 'robot.move_forward_angle(' + angle + ')\n';
  return code;
};


Blockly.Blocks['move_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["앞으로","forward"], ["뒤로","backward"]]), "direction");
    this.appendValueInput("ubi_speed")
        .setCheck("Number")
        .appendField("속도");
    this.appendDummyInput()
        .appendField("으로 가기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_speed'] = function(block) {
  if (block.getField('ubi_speed')) {
    // Internal number.
    var speed = String(parseInt(block.getFieldValue('ubi_speed'), 30));
  } else {
    // External number.
    var speed = Blockly.Python.valueToCode(block, 'ubi_speed',
        Blockly.Python.ORDER_NONE) || '0';
  }		
  // Flow statements: continue, break.
  switch (block.getFieldValue('direction')) {
    case 'forward':
      return 'robot.move_forward_speed(' + speed + ')\n';
    case 'backward':
      return 'robot.move_backward_speed(' + speed + ')\n';
  }
  throw Error('Unknown flow statement.');
};

Blockly.Blocks['move_speed_second'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["앞으로","forward"], ["뒤로","backward"]]), "direction");
    this.appendValueInput("ubi_speed")
        .setCheck("Number")
        .appendField("속도");
    this.appendValueInput("ubi_second")
        .setCheck("Number")
        .appendField("으로");
    this.appendDummyInput()
        .appendField("초 동안 가기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['move_speed_second'] = function(block) {
  if (block.getField('ubi_speed')) {
    // Internal number.
    var speed = String(parseInt(block.getFieldValue('ubi_speed'), 1));
  } else {
    // External number.
    var speed = Blockly.Python.valueToCode(block, 'ubi_speed',
        Blockly.Python.ORDER_NONE) || '0';
  }	
  if (block.getField('ubi_second')) {
    // Internal number.
    var second = String(parseInt(block.getFieldValue('ubi_second'), 1));
  } else {
    // External number.
    var second = Blockly.Python.valueToCode(block, 'ubi_second',
        Blockly.Python.ORDER_NONE) || '0';
  }		  
  // Flow statements: continue, break.
  switch (block.getFieldValue('direction')) {
    case 'forward':
      return 'robot.move_forward_speed_second(' + speed + ',' + second + ')\n';
    case 'backward':
      return 'robot.move_backward_speed_second(' + speed + ',' + second + ')\n';
  }
  throw Error('Unknown flow statement.');
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("멈추기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['stop'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'robot.stop()\n';
  return code;
};
