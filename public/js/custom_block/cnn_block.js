Blockly.Blocks['CNN_import_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import module");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_mnist'] = {
  init: function() {
    this.appendValueInput("x_train")
        .setCheck(null)
        .appendField("mnist      X_value1");
    this.appendValueInput("y_train")
        .setCheck(null)
        .appendField("             Y_value1");
    this.appendValueInput("x_test")
        .setCheck(null)
        .appendField("             X_value2");
    this.appendValueInput("y_test")
        .setCheck(null)
        .appendField("             Y_value2");    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_model_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model set");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_model_Conv2D_add'] = {
  init: function() {
    this.appendValueInput("num_value")
        .setCheck(null)
        .appendField("num values");
    this.appendValueInput("activation_value")
        .setCheck(null)
        .appendField("activation values");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_model_MaxPool2D_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MaxPool2D add");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_model_Dropout_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dropout add");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_model_Flatten_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flatten add");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_model_Dense_add'] = {
  init: function() {
    this.appendValueInput("num_value")
        .setCheck(null)
        .appendField("Dense num values");
    this.appendValueInput("activation_value")
        .setCheck(null)
        .appendField("activation values");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_model_BatchNormalization_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model BatchNormalization add");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_model_summary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model summary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_model_compile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model compile");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_history_set'] = {
  init: function() {
    this.appendValueInput("x_value")
        .setCheck(null)
        .appendField("insert input data");
    this.appendValueInput("y_value")
        .setCheck(null)
        .appendField("insert label data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_model_evaluate'] = {
  init: function() {
    this.appendValueInput("x_data")
        .setCheck(null)
        .appendField("x data value");
    this.appendValueInput("y_data")
        .setCheck(null)
        .appendField("y data value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_show_graph_plot'] = {
  init: function() {
    this.appendValueInput("plot")
        .setCheck(null)
        .appendField("plot data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_show_graph_title'] = {
  init: function() {
    this.appendValueInput("title")
        .setCheck(null)
        .appendField("title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_show_graph_label'] = {
  init: function() {
    this.appendValueInput("x_label")
        .setCheck(null)
        .appendField("x label value");
    this.appendValueInput("y_label")
        .setCheck(null)
        .appendField("y label value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_show_graph_legend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("graph legend");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_img_upload_pc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("img upload my pc");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['CNN_img_upload_drive'] = {
  init: function() {
    this.appendValueInput("img_path")
        .setCheck(null)
        .appendField("my drive img path");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['CNN_result'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CNN result check");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

  // End Block Definition */

  Blockly.Python['CNN_import_module'] = function(block) {
            
    var code = 'import matplotlib.pyplot as plt\n';
    code += 'import numpy as np\n';
    code += 'import cv2\n';
    code += 'import tensorflow as tf\n';
    code += 'from tensorflow.keras.layers import *\n'
    return code;
};

Blockly.Python['CNN_mnist'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'mnist = tf.keras.datasets.mnist\n';
    code += '('+value_x_train+','+value_y_train+'),('+value_x_test+','+value_y_test+') = mnist.load_data()\n';
    code += ''+value_x_train+', '+value_x_test+' = '+value_x_train+'/255.0, '+value_x_test+'/255.0\n';
    code += ''+value_x_train+', '+value_x_test+' = np.expand_dims('+value_x_train+', axis=-1), np.expand_dims('+value_x_test+', axis=-1)\n';
    code += ''+value_y_train+' = tf.keras.utils.to_categorical('+value_y_train+')\n';
    code += ''+value_y_test+' = tf.keras.utils.to_categorical('+value_y_test+')\n';
    
    return code;
};

Blockly.Python['CNN_model_set'] = function(block) {
    
    var code = 'model = tf.keras.models.Sequential()\n';
    code += 'model.add(InputLayer(input_shape=(28,28,1)))\n';
    return code;
};

Blockly.Python['CNN_model_Conv2D_add'] = function(block) {
  var value_num = Blockly.Python.valueToCode(block, 'num_value', Blockly.Python.ORDER_ATOMIC);
  var value_activation= Blockly.Python.valueToCode(block, 'activation_value', Blockly.Python.ORDER_ATOMIC);

  var code = 'model.add(Conv2D('+value_num+', (3, 3), padding="valid", activation='+value_activation+'))\n';
  return code;
};

Blockly.Python['CNN_model_MaxPool2D_add'] = function(block) {
    
    var code = 'model.add(MaxPool2D((2, 2), (2, 2)))\n';
    return code;
};

Blockly.Python['CNN_model_Dropout_add'] = function(block) {
    
    var code = 'model.add(Dropout(0.5))\n';
    return code;
};

Blockly.Python['CNN_model_Flatten_add'] = function(block) {
    
    var code = 'model.add(Flatten())\n';
    return code;
};

Blockly.Python['CNN_model_Dense_add'] = function(block) {
  var value_num = Blockly.Python.valueToCode(block, 'num_value', Blockly.Python.ORDER_ATOMIC);
  var value_activation= Blockly.Python.valueToCode(block, 'activation_value', Blockly.Python.ORDER_ATOMIC);

  var code = 'model.add(Dense('+value_num+', activation='+value_activation+'))\n';
  return code;
};

Blockly.Python['CNN_model_BatchNormalization_add'] = function(block) {
    var code = 'model.add(BatchNormalization())\n';
    return code;
};

Blockly.Python['CNN_model_summary'] = function(block) {
    var code = 'model.summary()\n';
    return code;
};

Blockly.Python['CNN_model_compile'] = function(block) {
    var code = 'model.compile(optimizer="adam",loss="categorical_crossentropy", metrics=["accuracy"])\n';
    return code;
};

Blockly.Python['CNN_history_set'] = function(block) {
  var value_xvalue = Blockly.Python.valueToCode(block, 'x_value', Blockly.Python.ORDER_ATOMIC);
  var value_yvalue = Blockly.Python.valueToCode(block, 'y_value', Blockly.Python.ORDER_ATOMIC);

  var code = 'history=model.fit('+value_xvalue+','+value_yvalue+',epochs=5,batch_size=512,validation_split=0.2)\n';
  return code;
};

Blockly.Python['CNN_model_evaluate'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);

  var code = 'loss, accuracy=model.evaluate('+value_x+','+value_y+',batch_size=100)\n';

  return code;
};

Blockly.Python['CNN_show_graph_plot'] = function(block) {
  var value_plot = Blockly.Python.valueToCode(block, 'plot', Blockly.Python.ORDER_ATOMIC);

  var code = 'plt.plot(history.history['+value_plot+'])\n';
  return code;
};

Blockly.Python['CNN_show_graph_title'] = function(block) {
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);

  var code = 'plt.title('+value_title+')\n';
  return code;
};

Blockly.Python['CNN_show_graph_label'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x_label', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y_label', Blockly.Python.ORDER_ATOMIC);

  var code = 'plt.xlabel('+value_x+')\n';
  code += 'plt.ylabel('+value_y+')\n';

  return code;
};

Blockly.Python['CNN_show_graph_legend'] = function(block) {

  var code = 'plt.legend(["train", "val"], loc="upper left")\n';
  code += 'plt.show()\n';

  return code;
};

Blockly.Python['CNN_img_upload_pc'] = function(block) {
    
    var code = 'from google.colab import files\n';
    code += 'uploaded = files.upload()\n';
    code += 'for fn in uploaded.keys(): file_name = fn\n'
    code += 'img = cv2.imread(file_name)\n'
    code += 'img = np.array(img, dtype=np.uint8)\n'
    code += 'sample = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n'
    code += 'plt.imshow(sample, cmap="gray")\n'
    return code;
};

Blockly.Python['CNN_img_upload_drive'] = function(block) {

  var value_path = Blockly.Python.valueToCode(block, 'img_path', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'from google.colab import drive\n';
    code += 'drive.mount("/content/drive")\n';
    code += 'img = cv2.imread('+value_path+') \n';
    code += 'img = np.array(img, dtype=np.uint8)\n';
    code += 'sample = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n'
    code += 'plt.imshow(sample, cmap="gray")\n'
    return code;
};


Blockly.Python['CNN_result'] = function(block) {

  var code = 'sample = sample/255.0\n';
  code += 'print(sample.shape)\n'
  code += 'sample=np.expand_dims(sample, axis=-1)\n'
  code += 'print(sample.shape)\n'
  code += 'sample=np.expand_dims(sample, axis=0)\n'
  code += 'print(sample.shape)\n'
  code += 'y_ = model.predict(sample)\n'
  code += 'y_\n'
  return code;

};