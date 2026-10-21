Blockly.Blocks['DNN_import_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import module");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_mnist'] = {
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

Blockly.Blocks['DNN_imshow_arr'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("show arr values");
    this.appendValueInput("num")
        .setCheck(null)
        .appendField("arr num");
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("img color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['DNN_imshow'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("show values");
    this.appendValueInput("color")
        .setCheck(null)
        .appendField("img color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['DNN_value_reshape'] = {
  init: function() {
    this.appendValueInput("reshape_value")
        .setCheck(null)
        .appendField("reshape values");
    this.appendValueInput("num_value")
        .setCheck(null)
        .appendField("reshape count values");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['DNN_to_categorical'] = {
  init: function() {
    this.appendValueInput("categorical_value")
        .setCheck(null)
        .appendField("to_categorical values");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['DNN_model_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model set");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_model_Dense_add'] = {
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

Blockly.Blocks['DNN_model_BatchNormalization_add'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model BatchNormalization add");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_model_summary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model summary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_model_compile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("model compile");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_history_set'] = {
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

Blockly.Blocks['DNN_show_graph_plot'] = {
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

Blockly.Blocks['DNN_show_graph_title'] = {
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

Blockly.Blocks['DNN_show_graph_label'] = {
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

Blockly.Blocks['DNN_show_graph_legend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("graph legend");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_model_evaluate'] = {
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

Blockly.Blocks['DNN_img_upload_pc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("img upload my pc");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['DNN_img_upload_drive'] = {
  init: function() {
    this.appendValueInput("img_path")
        .setCheck(null)
        .appendField("my drive img name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['DNN_result'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DNN result check");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

  // End Block Definition */

  Blockly.Python['DNN_import_module'] = function(block) {
            
    var code = 'import matplotlib.pyplot as plt\n';
    code += 'import matplotlib as mpl\n';
    code += 'import numpy as np\n';
    code += 'import cv2\n';
    code += 'import tensorflow as tf\n';
    code += 'from tensorflow.keras.layers import *\n';
    
    return code;
};

Blockly.Python['DNN_mnist'] = function(block) {
  var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
  var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
  var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
  var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'mnist = tf.keras.datasets.mnist\n';

  code += 'def load_data(path=\'/home/pi/autonomousCar/block/mnist.npz\'):\n'
  code += '    with np.load(path, allow_pickle=True) as f: \n'
  code += '        '+value_x_train+', '+value_y_train+' = f[\''+value_x_train+'\'], f[\''+value_y_train+'\']\n'
  code += '        '+value_x_test+', '+value_y_test+' = f[\''+value_x_test+'\'], f[\''+value_y_test+'\']\n'
  code += '        return ('+value_x_train+', '+value_y_train+'), ('+value_x_test+', '+value_y_test+')\n'

  //code += 'if mpl.get_backend() == "agg" or mpl.get_backend() == "WebAgg":\n'
  code += '('+value_x_train+','+value_y_train+'),('+value_x_test+','+value_y_test+') = load_data()\n';
  //code += 'elif mpl.get_backend() == "TK3Agg":\n'
  //code += ' ('+value_x_train+','+value_y_train+'),('+value_x_test+','+value_y_test+') = mnist.load_data()\n';
  //code += 'else:\n'
  //code += ' ('+value_x_train+','+value_y_train+'),('+value_x_test+','+value_y_test+') = mnist.load_data()\n';
  
  code += 'print(\''+value_x_train+' shape is : \','+value_x_train+'.shape)\n';
  code += 'print(\''+value_y_train+' shape is : \','+value_y_train+'.shape)\n';
  code += 'print(\''+value_x_test+' shape is : \','+value_x_test+'.shape)\n';
  code += 'print(\''+value_y_test+' shape is : \','+value_y_test+'.shape)\n';

  code = code.replace(/[\\]/g,'');
  return code;
};

Blockly.Python['DNN_imshow_arr'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var value_img_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var code = 'plt.imshow('+value_value+'['+value_num+'], cmap='+value_img_color+')\n';
    return code;
};

Blockly.Python['DNN_imshow'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_img_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var code = 'plt.imshow('+value_value+', cmap='+value_img_color+')\n';
    return code;
};

Blockly.Python['DNN_value_reshape'] = function(block) {
  var value_reshape_value = Blockly.Python.valueToCode(block, 'reshape_value', Blockly.Python.ORDER_ATOMIC);
  var value_num_value = Blockly.Python.valueToCode(block, 'num_value', Blockly.Python.ORDER_ATOMIC);

  var code = value_reshape_value +' = '+value_reshape_value+'.reshape(('+value_num_value+',784))\n';
  code += value_reshape_value+' = '+value_reshape_value+' / 255.0\n'
  return code;
};

Blockly.Python['DNN_to_categorical'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'categorical_value', Blockly.Python.ORDER_ATOMIC);

  var code = value_value +' = tf.keras.utils.to_categorical('+value_value+')\n';
  return code;
};

Blockly.Python['DNN_model_set'] = function(block) {
    var code = 'model = tf.keras.models.Sequential()\n';
    code += 'model.add(tf.keras.layers.InputLayer(input_shape=(784,)))\n';
    return code;
};

Blockly.Python['DNN_model_Dense_add'] = function(block) {
  var value_num = Blockly.Python.valueToCode(block, 'num_value', Blockly.Python.ORDER_ATOMIC);
  var value_activation= Blockly.Python.valueToCode(block, 'activation_value', Blockly.Python.ORDER_ATOMIC);

  var code = 'model.add(tf.keras.layers.Dense('+value_num+', activation='+value_activation+'))\n';
  return code;
};

Blockly.Python['DNN_model_BatchNormalization_add'] = function(block) {
    var code = 'model.add(tf.keras.layers.BatchNormalization())\n';
    return code;
};

Blockly.Python['DNN_model_summary'] = function(block) {
    var code = 'model.summary()\n';
    return code;
};

Blockly.Python['DNN_model_compile'] = function(block) {
    var code = 'model.compile(optimizer=tf.optimizers.Adam(learning_rate=0.01),loss=\'mean_squared_error\', metrics=[\'accuracy\'])\n';
    return code;
};

Blockly.Python['DNN_history_set'] = function(block) {
  var value_xvalue = Blockly.Python.valueToCode(block, 'x_value', Blockly.Python.ORDER_ATOMIC);
  var value_yvalue = Blockly.Python.valueToCode(block, 'y_value', Blockly.Python.ORDER_ATOMIC);

  var code = 'history=model.fit('+value_xvalue+','+value_yvalue+',epochs=20,batch_size=512,validation_split=0.2)\n';
  //code += 'model.save("mnist_dnn_model.h5")\n';
  return code;
};

Blockly.Python['DNN_show_graph_plot'] = function(block) {
  var value_plot = Blockly.Python.valueToCode(block, 'plot', Blockly.Python.ORDER_ATOMIC);

  var code = 'plt.plot(history.history['+value_plot+'])\n';
  return code;
};

Blockly.Python['DNN_show_graph_title'] = function(block) {
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);

  var code = 'plt.title('+value_title+')\n';
  return code;
};

Blockly.Python['DNN_show_graph_label'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x_label', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y_label', Blockly.Python.ORDER_ATOMIC);

  var code = 'plt.xlabel('+value_x+')\n';
  code += 'plt.ylabel('+value_y+')\n';

  return code;
};

Blockly.Python['DNN_show_graph_legend'] = function(block) {

  var code = 'plt.legend(["train", "val"], loc="upper left")\n';
  code += 'plt.show()\n';

  return code;
};

Blockly.Python['DNN_model_evaluate'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);

  var code = 'loss, accuracy=model.evaluate('+value_x+','+value_y+',batch_size=100)\n';

  return code;
};


Blockly.Python['DNN_img_upload_pc'] = function(block) {
    
    var code = 'from google.colab import files\n';
    code += 'uploaded = files.upload()\n';
    code += 'for fn in uploaded.keys(): file_name = fn\n'
    code += 'img = cv2.imread(file_name)\n'
    code += 'img = np.array(img, dtype=np.uint8)\n'
    code += 'img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n'
    code += 'plt.imshow(img, cmap="gray")\n'
    return code;
};

Blockly.Python['DNN_img_upload_drive'] = function(block) {

  var value_path = Blockly.Python.valueToCode(block, 'img_path', Blockly.Python.ORDER_ATOMIC);
      value_path = value_path.replace(/[']/g,'');
    //var code = 'from google.colab import drive\n';
    //code += 'drive.mount("/content/drive")\n';
    //code += 'img = cv2.imread('+value_path+') \n';
    //code += 'img = np.array(img, dtype=np.uint8)\n';
    //code += 'img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n'
    //code += 'plt.imshow(img, cmap="gray")\n'
    
    var code = 'img = cv2.imread(\'/home/pi/autonomousCar/block/'+value_path+'\')\n';
    code += 'img = np.array(img, dtype=np.uint8)\n';
    code += 'img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n';
    code += 'plt.imshow(img, cmap=\'gray\')\n';

    //code = code.replace(/[']/g,'');

    return code;
};


Blockly.Python['DNN_result'] = function(block) {

  var code = 'sample = img.reshape((1,784)) \n';
  code += 'sample = sample/255.0\n';
  code += 'y_ = model.predict(sample)\n'
  code += 'print(\'predicted valuue is: \',str(np.argmax(y_)), \'true value is: 0\')\n';
  code += 'print(\'probability distribution is :\', y_)\n';
  return code;

};