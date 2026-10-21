Blockly.Blocks['keras'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import keras");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['tensorflow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import tensorflow");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};


Blockly.Blocks['mnist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import mnist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['dense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import Dense");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['sequential'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import Sequential");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['sgd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import SGD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['pyplot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import pyplot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['numpy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import numpy");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['dropout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import Dropout");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['rmsprop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import Rmsprop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['load_data'] = {
  init: function() {
    this.appendValueInput("LENGTH")
        .setCheck("Number")
        .appendField("load mnist");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['categorical'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("categorical    num_classes");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['model_sequential'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sequential");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['model_dense'] = {
  init: function() {
    this.appendValueInput("units")
        .setCheck("Number")
        .appendField("Dense units");
    this.appendValueInput("activation")
        .setCheck("String")
        .appendField("activation");
    this.appendValueInput("dim_x")
        .setCheck("Number")
        .appendField("input_dim");
    this.appendValueInput("dim_y")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['model_add'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("add");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['model_summary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("summary");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['model_compile'] = {
  init: function() {
    this.appendValueInput("loss")
        .setCheck("String")
        .appendField("compile loss");
    this.appendValueInput("optimizer")
        .setCheck("String")
        .appendField("             optimizer");
    this.appendValueInput("metrics")
        .appendField("             metrics");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['model_fit'] = {
  init: function() {
    this.appendValueInput("batch_size")
        .setCheck("Number")
        .appendField("fit          batch_size");
    this.appendValueInput("optimizer")
        .setCheck("Number")
        .appendField("             epochs");
    this.appendValueInput("metrics")
        .setCheck("Number")
        .appendField("             verbose");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['model_save'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("save model");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['model_predict'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("predict");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
}
};

Blockly.Blocks['model_dropout'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Dropout");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
this.setTooltip("");
this.setHelpUrl("");
  }
};

Blockly.Blocks['import_module'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import module");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  }
};

Blockly.Blocks['image_resize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data Image Resize to");
    this.appendValueInput("img_size")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(Width x Height)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['load_data_labeling'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load");
    this.appendValueInput("x_train");
    this.appendValueInput("y_train");
    this.appendValueInput("x_test");
    this.appendValueInput("y_test");
    this.appendDummyInput()
        .appendField("Labeling Data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['shuffle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("shuffle");
    this.appendValueInput("x_train");
    this.appendValueInput("y_train");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_set_with_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Model input shape=");
    this.appendValueInput("shape_size")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("Ready");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_add_conv2d'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Model Conv2D");
    this.appendValueInput("channel_num")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("activation=")
        .appendField(new Blockly.FieldDropdown([ ["relu", "relu"], ["elu", "elu"], ["sigmoid", "sigmoid"], ["softmax", "softmax"], ["exponential", "exponential"], ["linear", "linear"] ]), "opt_activation")
        .appendField("Layer Add");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_add_dense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dense");
    this.appendValueInput("dense_num")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("activation=")
        .appendField(new Blockly.FieldDropdown([ ["relu", "relu"], ["elu", "elu"], ["sigmoid", "sigmoid"], ["softmax", "softmax"], ["exponential", "exponential"], ["linear", "linear"] ]), "opt_activation")
        .appendField("Layer Add");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_add_flatten'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Model Flatten");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_compile_fn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compile optimizer=")
        .appendField(new Blockly.FieldDropdown([["adam","adam"], ["SGD","SGD"], ["RMSprop","RMSprop"]]), "opt_optimizer_fn")
        .appendField(" , loss=")
        .appendField(new Blockly.FieldDropdown([["binary_crossentropy","binary_crossentropy"], ["categorical_crossentropy","categorical_crossentropy"], ["sparse_categorical_crossentropy","sparse_categorical_crossentropy"]]), "opt_loss_fn")
        .appendField(", metrics=[accuracy]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_fit_fn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fit");
    this.appendValueInput("x_train")
        .setCheck(null);
    this.appendValueInput("y_train")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("epochs=");
    this.appendValueInput("epoch_num")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_Evaluation_fn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Evaluation");
    this.appendValueInput("x_test")
        .setCheck(null);
    this.appendValueInput("y_test")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['x_train_img_fn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("show x_train [");
    this.appendValueInput("index")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_predict_fn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("predict img name= ");
    this.appendValueInput("path")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_predict_fn2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("predict img name= ");
    this.appendValueInput("path")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_predict_fn3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("predict img name= ");
    this.appendValueInput("path")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

  // End Block Definition */

  //* data image resize
  Blockly.Python['image_resize'] = function(block) {
    var value_img_size = Blockly.Python.valueToCode(block, 'img_size', Blockly.Python.ORDER_ATOMIC);
    //var imgRootDir = document.getElementById("folderList").value;
    var imgFolderSelect = parent.document.getElementById("folderList");
    var imgRootDir = imgFolderSelect.options[imgFolderSelect.selectedIndex].value;
    var code = 'targetSize = ('+value_img_size+', '+value_img_size+')\n';
    code += '(dataCnt, classList) = dataLib.resizeImageToTargetSize(targetSize,\''+imgRootDir+'\')\n';
    code += 'classCnt = len(classList)\n';
    return code;
  };
  //*/

  //* load labeling data
  Blockly.Python['load_data_labeling'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    var code = '(x_train, y_train) = dataLib.loadLabelingData(imgSize, classList, dataCnt)\n';
    code += 'x_train = x_train / 255.0\n';
    code += 'testCnt = int( dataCnt / 10.0 )\n';
    code += '(x_test, y_test) = dataLib.loadTestData(imgSize, classCnt, testCnt)\n';
    code += 'x_test = x_test / 255.0\n';
    return code;
  };
  //*/

  Blockly.Python['shuffle'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var code = 'randomize = np.arange(len('+value_x_train+')) \n';
    code += 'np.random.shuffle(randomize)\n';
    code += value_x_train + ' = '+value_x_train+'[randomize]\n';
    code += value_y_train + ' = '+value_y_train+'[randomize]\n';

    return code;

  };

  //* model set with input shape
  Blockly.Python['model_set_with_input'] = function(block) {
    var value_shape_size = Blockly.Python.valueToCode(block, 'shape_size', Blockly.Python.ORDER_ATOMIC);
    var code = 'model = tf.keras.models.Sequential()\n';
    code += 'model.add(InputLayer(input_shape=('+value_shape_size+','+value_shape_size+',3)))\n';
    return code;
  }
  //*/

  //* model add conv2d layer
  Blockly.Python['model_add_conv2d'] = function(block) {
    var value_channel_num = Blockly.Python.valueToCode(block, 'channel_num', Blockly.Python.ORDER_ATOMIC);
    var dropdown_opt_activation = block.getFieldValue("opt_activation");
    var code = 'model.add(Conv2D('+value_channel_num+', (3,3), activation=\''+dropdown_opt_activation+'\'))\n';
    code += 'model.add(MaxPool2D((2,2)))\n';
    return code;
  };
  //*/

  //* model add dense layer
  Blockly.Python['model_add_dense'] = function(block) {
    var value_dense_num = Blockly.Python.valueToCode(block, 'dense_num', Blockly.Python.ORDER_ATOMIC);
    var dropdown_opt_activation = block.getFieldValue("opt_activation");
    var code = 'model.add(Dense('+value_dense_num+', activation=\''+dropdown_opt_activation+'\'))\n';
    return code;
  };
  //*/

  //* model add flatten
  Blockly.Python['model_add_flatten'] = function(block) {
    var code = 'model.add(Flatten())\n';
    return code;
  }
  //*/

  //* model compile
  Blockly.Python['model_compile_fn'] = function(block) {
    var dropdown_opt_optimizer_fn = block.getFieldValue('opt_optimizer_fn');
    var dropdown_opt_loss_fn = block.getFieldValue('opt_loss_fn');
    var code = 'model.compile(optimizer=\''+dropdown_opt_optimizer_fn+'\',loss=\''+dropdown_opt_loss_fn+'\', metrics=[\'accuracy\'])\n';
    return code;
  }
  //*/

  //* model fit
  Blockly.Python['model_fit_fn'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_epoch_num = Blockly.Python.valueToCode(block, 'epoch_num', Blockly.Python.ORDER_ATOMIC);
    var code = 'model.fit('+value_x_train+', '+value_y_train+', epochs='+value_epoch_num+')\n';
    return code;
  }
  //*/

 //* model Evaluation
  Blockly.Python['model_Evaluation_fn'] = function(block) {
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    var code = 'loss, accuracy = model.evaluate('+value_x_test+', '+value_y_test+', verbose=2)\n';
    return code;
  }
  
  Blockly.Python['x_train_img_fn'] = function(block) {
    var value_index = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
    var code = 'plt.imshow(x_train['+value_index+'])\n';
    return code;
  }
  
  
  //*/

  //* model predict
  Blockly.Python['model_predict_fn'] = function(block) {
    var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
    var code = 'img=dataLib.uploadPredictImage('+value_path+', imgSize)\n';
    code += 'x=image.img_to_array(img)\n' 
    code += 'x=np.expand_dims(x, axis=0)\n' 
    code += 'images = np.vstack([x])\n' 
    code += 'classes = model.predict(images, batch_size=10)\n' 
    code += 'print(classes)\n' 
    code += 'print(classes[0])\n' 
    code += 'print(str(np.argmax(classes[0])))\n' 
    return code;
  }

  Blockly.Python['model_predict_fn2'] = function(block) {
    var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
    var path = value_path.replace(/'/g, "");
    var code = 'img=dataLib.uploadPredictImage2('+value_path+', imgSize)\n';
    code += "y_ = model.predict(img)\n"
    code += "print('probability distribution is :', y_)\n"
    code += "print('result|',dataLib.resultFile[np.argmax(y_)],'|"+path+"' )\n"
    return code;
  }

  Blockly.Python['model_predict_fn3'] = function(block) {
    var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
    var code = "imgRootDir = '/home/pi/autonomousCar/block/result/' \n"
    code += 'im = plt.imread(imgRootDir + '+value_path+') \n';
    code += 'sample = im.reshape((1,100,100,3)) \n'
    code += 'sample = sample/255.0 \n'
    code += "y_ = model.predict(sample)\n"
    code += "print('predicted valuue is: ',str(np.argmax(y_)), 'true value is: 0')\n"
    code += "print('probability distribution is :', y_)"
    return code;
  }
  //*/

  

  //* blockly for tensorflow 
  Blockly.Python.keras = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'import keras\n';
    return code;
  };

  Blockly.Python.tensorflow = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'import tensorflow as tf\n';
    return code;
  };

  Blockly.Python.mnist = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from keras.datasets import mnist\n';
    return code;
  };

  Blockly.Python.dense = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from keras.layers import Dense\n';
    return code;
  };

  Blockly.Python.sequential = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from keras.models import Sequential\n';
    return code;
  };

  Blockly.Python.sgd = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from keras.optimizers import SGD\n';
    return code;
  };

  Blockly.Python.pyplot = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from matplotlib import pyplot as plt\n';
    return code;
  };

  Blockly.Python.numpy = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'import numpy as np\n';
    return code;
  };

  Blockly.Python.dropout = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from keras.layers import Dropout\n';
    return code;
  };

  Blockly.Python.rmsprop = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from keras.optimizers import RMSprop\n';
    return code;
  };

  Blockly.Python.load_data = function(block) {
    // TODO: Assemble Python into code variable.
    var value_length = Blockly.Python.valueToCode(block, 'LENGTH', Blockly.Python.ORDER_ATOMIC);

    var code = 'def show_samples(samples, labels):\n';
    code += 	 '    plt.figure(figsize=(12, 12))\n';
    code +=	 '    for i in range(len(samples)):\n';
    code +=	 '        plt.subplot(4, 4, i+1)\n';
    code +=	 "        plt.imshow(samples[i])\n";
    code +=	 '        plt.title(labels[i])\n';
    code +=	 '    plt.show()\n';
    code +=	 '(x_train, y_train), (x_test, y_test) = mnist.load_data()\n'
    code +=	 'print(x_train.shape, x_test.shape)\n';
    code +=	 'print(y_train.shape, y_test.shape)\n';
    code +=	 'show_samples(x_train[:'+value_length+'], y_train[:'+value_length+'])\n';

    code +=	 'x_train = x_train.reshape(60000, 784)\n'
    code +=	 'x_test = x_test.reshape(10000, 784)\n';
    code +=	 "x_train = x_train.astype('float32')\n";
    code +=	 "x_test = x_test.astype('float32')\n";

    code +=	 "x_train /= 255\n";
    code +=	 "x_test /= 255\n";
    return code;
  };

  Blockly.Python.categorical = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = 'y_train = keras.utils.to_categorical(y_train, ';
    code += value_name;
    code += ')\n';
    code += 	 'y_test = keras.utils.to_categorical(y_test, '
    code += value_name;
    code += ')\n';
    code +=	 'print(x_train.shape, x_test.shape)\n';
    code +=	 'print(y_train.shape, y_test.shape)\n';
    return code;
  };

  Blockly.Python.model_sequential = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'model = Sequential()\n';
    
    return code;
  };

  Blockly.Python['model_dense'] = function(block) {
    var value_units = Blockly.Python.valueToCode(block, 'units', Blockly.Python.ORDER_ATOMIC);
    var value_activation = Blockly.Python.valueToCode(block, 'activation', Blockly.Python.ORDER_ATOMIC);
    var value_dim_x = Blockly.Python.valueToCode(block, 'dim_x', Blockly.Python.ORDER_ATOMIC);
    var value_dim_y = Blockly.Python.valueToCode(block, 'dim_y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '';
    if(value_dim_x!=0||value_dim_y!=0) {
        code = 'Dense(';
        code += value_units;
        code += ', activation=';
        code += value_activation;
        code += ', input_shape=';

        var bracket = '(';
        if(value_dim_x == 0) {
          bracket += ',';
          bracket += value_dim_y;
          bracket += ')';
        } else if(value_dim_y == 0) {
          bracket += value_dim_x;
          bracket += ",)"
        } else {
          bracket += value_dim_x;
          bracket += ',';
          bracket += value_dim_y;
          bracket += ')'
        }
        code += bracket;
        code += ')';
    } else {
      code = 'Dense(';
        code += value_units;
        code += ', activation=';
        code += value_activation;
        code += ')';
    }
    code += '\n'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python['model_add'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'model.add(';
    code += value_name;
    code += ')\n';

    return code;
  };

  Blockly.Python.model_summary = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'model.summary()\n';
    return code;
  };

  Blockly.Python['model_compile'] = function(block) {
    var value_loss = Blockly.Python.valueToCode(block, 'loss', Blockly.Python.ORDER_ATOMIC);
    var value_optimizer = Blockly.Python.valueToCode(block, 'optimizer', Blockly.Python.ORDER_ATOMIC);
    var value_metrics = Blockly.Python.valueToCode(block, 'metrics', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'model.compile(loss=';
    code += value_loss;
    code += ',optimizer=';
    value_optimizer = value_optimizer.substring(1,value_optimizer.length-1);
    code += value_optimizer;
    code += '(),metrics=[';
    code += value_metrics;
    code += '])\n';
    return code;
  };

  Blockly.Python['model_fit'] = function(block) {
    var value_batch_size = Blockly.Python.valueToCode(block, 'batch_size', Blockly.Python.ORDER_ATOMIC);
    var value_optimizer = Blockly.Python.valueToCode(block, 'optimizer', Blockly.Python.ORDER_ATOMIC);
    var value_metrics = Blockly.Python.valueToCode(block, 'metrics', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'history = model.fit(x_train, y_train,batch_size=';
    code += value_batch_size;
    code += ',epochs=';
    code += value_optimizer;
    code += ',verbose=';
    code += value_metrics;
    code += ',validation_data=(x_test,y_test))\n'
    return code;
  };

  Blockly.Python.model_save = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'model.save(\'model.json\')\n';
    return code;
  };

  Blockly.Python.model_predict = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'def plot_training(history):\n';
    code += "    plt.plot(history.history['loss'])\n";
    code += "    plt.plot(history.history['val_loss'])\n";
    code += "    plt.title('model mean squared error loss')\n";
    code += "    plt.ylabel('mean squared error loss')\n";
    code += "    plt.xlabel('epoch')\n";
    code += "    plt.legend(['training set', 'validation set'], loc='upper right')\n";
    code += "    plt.show()\n";
    code += "print(history.history.keys())\n";
    code += "plot_training(history=history)\n";
    code += "score = model.evaluate(x_test, y_test, verbose=0)\n";
    code += "print('Test loss:', score[0])\n";
    code += "print('Test accuracy:', score[1])\n";
    code += "result = model.predict(x_test[:16])\n";
    code += "result = np.argmax(result, 1)\n";
    code += "print('predict: ', result)\n";
    code += "true = np.argmax(y_test[:16], 1)\n";
    code += "print('true: ', true)\n";
    code += "fig2 = plt.figure(figsize=(12, 12))\n";
    code += "for i in range(16):\n";
    code += "    plt.subplot(4, 4, i+1)\n";
    code += "    plt.imshow(x_test[i].reshape((28, 28)), cmap='gray')\n";
    code += "    plt.title('predict:'+str(result[i])+' true:'+str(true[i]))\n";
    code += "plt.show()\n";

    return code;
  };

  Blockly.Python['model_dropout'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'Dropout(';
    code += value_name;
    code += ")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  Blockly.Python.import_module = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from __future__ import print_function\n';
    code += 'import keras\n';
    code += 'from keras.datasets import mnist\n';
    code += 'from keras.layers import Dense\n';
    code += 'from keras.models import Sequential\n';
    code += 'from keras.optimizers import SGD\n';
    code += 'from matplotlib import pyplot as plt\n';
    code += 'import numpy as np\n';
    code += 'from keras.layers import Dropout\n';
    code += 'from keras.optimizers import RMSprop\n';

    return code;
  }; 