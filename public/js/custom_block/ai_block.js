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


Blockly.Blocks['image_resize2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Resize Train Image to (");
    this.appendValueInput("img_size1")
        .setCheck("Number");
    this.appendValueInput("img_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(") and save fileName (");
    this.appendValueInput("npzname")
        .setCheck("String");
        this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['image_resize4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Resize Train & Tset Image to (");
    this.appendValueInput("img_size1")
        .setCheck("Number");
    this.appendValueInput("img_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(") and save fileName (");
    this.appendValueInput("npzname")
        .setCheck("String");
        this.appendDummyInput()
        .appendField(")");
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

Blockly.Blocks['load_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load NPZ Data (");
    this.appendValueInput("x_data");
    this.appendValueInput("y_data");
    this.appendDummyInput()
        .appendField(") from fileName (");
    this.appendValueInput("npzname");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['load_data2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load NPZ Data (");
    this.appendValueInput("x_train");
    this.appendValueInput("y_train");
    this.appendValueInput("x_test");
    this.appendValueInput("y_test");
    this.appendDummyInput()
        .appendField(") from fileName (");
    this.appendValueInput("npzname");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['load_csv_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load CSV Data (");
    this.appendValueInput("x_data");
    this.appendValueInput("y_data");
    this.appendDummyInput()
        .appendField(") from fileName (");
    this.appendValueInput("csv_name");
    this.appendDummyInput()
        .appendField(")");
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


Blockly.Blocks['shuffle_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("shuffle (");
    this.appendValueInput("x_train");
    this.appendValueInput("y_train");
    this.appendValueInput("x_test");
    this.appendValueInput("y_test");
    this.appendDummyInput()
        .appendField(") from (");
    this.appendValueInput("x_data");
    this.appendValueInput("y_data");
    this.appendDummyInput()
        .appendField(") validation_ratio = ");
    this.appendValueInput("val_ratio");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['shuffle_data2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("shuffle (");
    this.appendValueInput("x_train1");
    this.appendValueInput("y_train1");
    this.appendValueInput("x_test1");
    this.appendValueInput("y_test1");
    this.appendDummyInput()
        .appendField(") from (");
    this.appendValueInput("x_train2");
    this.appendValueInput("y_train2");
    this.appendValueInput("x_test2");
    this.appendValueInput("y_test2");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['image_resize3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set ");
    this.appendValueInput("var1");
    this.appendDummyInput()
        .appendField(" to resize ");
    this.appendValueInput("var2");
    this.appendDummyInput()
    this.appendValueInput("w_size")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("h_size")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['image_reshape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set ");
    this.appendValueInput("var1");
    this.appendDummyInput()
        .appendField(" to reshape ");
    this.appendValueInput("var2");
    this.appendDummyInput()
    .appendField(" (-1, ");
    this.appendValueInput("shape_size1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("shape_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("shape_size3")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
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
        .appendField("InputLayer neurons:(");
    this.appendValueInput("shape_size1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("shape_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("shape_size3")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
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
        .appendField("Conv2D (Filters=");
    this.appendValueInput("channel_num")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(", Filter size (");
    this.appendValueInput("filter_size1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("filter_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.appendDummyInput()
        .appendField(", stride(");
    this.appendValueInput("stride1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("stride2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.appendDummyInput()
        .appendField("activation=")
        .appendField(new Blockly.FieldDropdown([ ["relu", "relu"], ["elu", "elu"], ["sigmoid", "sigmoid"], ["softmax", "softmax"], ["exponential", "exponential"], ["linear", "linear"] ]), "opt_activation")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_MaxPool'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MaxPool2D (pool_size=(");
    this.appendValueInput("pool_size1")
        .setCheck("Number");
    this.appendValueInput("pool_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("), strides=(");
    this.appendValueInput("stride_size1")
        .setCheck("Number");
    this.appendValueInput("stride_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

Blockly.Blocks['model_Dropout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dropout (");
    this.appendValueInput("dropout_size")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};


Blockly.Blocks['model_add_dense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dense(");
    this.appendValueInput("dense_num")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("), activation:")
        .appendField(new Blockly.FieldDropdown([ ["relu", "relu"], ["elu", "elu"], ["sigmoid", "sigmoid"], ["softmax", "softmax"], ["exponential", "exponential"], ["linear", "linear"] ]), "opt_activation")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

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

Blockly.Blocks['model_add_flatten'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flatten()");
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
        .appendField("Compile (optimizer=")
        .appendField(new Blockly.FieldDropdown([["adam","adam"], ["SGD","SGD"], ["RMSprop","RMSprop"]]), "opt_optimizer_fn")
        .appendField(" , loss=")
        .appendField(new Blockly.FieldDropdown([["binary_crossentropy","binary_crossentropy"], ["categorical_crossentropy","categorical_crossentropy"], ["sparse_categorical_crossentropy","sparse_categorical_crossentropy"]]), "opt_loss_fn")
        .appendField(")");
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
        .appendField("Model Fit epochs =");
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
        .appendField("Evaluation (");
    this.appendValueInput("x_test")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("y_test")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
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

Blockly.Blocks['model_save'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("save model");
    this.appendValueInput("modelname")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['model_load'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("load model");
    this.appendValueInput("modelname")
        .setCheck(null);
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

Blockly.Blocks['testmodel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Classes");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['load_model_predict'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("predict img name= ");
    this.appendValueInput("path")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(", img size (");
    this.appendValueInput("img_size1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("img_size2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['set_predict_result'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set");
    this.appendValueInput("var_predict_val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to argmax value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['GetProject'] = {

  init: function() {

    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value,project[i].value]);
    }
    
    this.appendDummyInput()
        .appendField("get project")
        .appendField(new Blockly.FieldDropdown(this.generateOptions), "projectName")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function() {
    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value,project[i].value]);
    }

    return arrProject;
  }
}

Blockly.Blocks['take_pridict_picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("teke a picture");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['image_upload'] = {
  init: function() {
      this.appendDummyInput()
        .appendField("Click to Create Data");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("230");  // #RRGGBB
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['create_project'] = {
  init: function() {
      this.appendDummyInput()
        .appendField("Click To Create Project");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("230");  // #RRGGBB
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks['direct_predict'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set ");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to Predict");
    this.appendValueInput("image")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}


Blockly.Blocks['frame_image_resize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set ");
    this.appendValueInput("var1");
    this.appendDummyInput()
        .appendField(" to resize ");
    this.appendValueInput("var2");
    this.appendDummyInput()
    .appendField("(");
    this.appendValueInput("img_size1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("img_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['hand_detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set ");
    this.appendValueInput("var1");
    this.appendDummyInput()
    .appendField(" to hand detect (");
    this.appendValueInput("var2");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("img_size1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(",");
    this.appendValueInput("img_size2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("))");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}


Blockly.Blocks['confidence'] = {
  init: function() {
      this.appendDummyInput()
        .appendField("View confidence");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("330");  // #RRGGBB
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['save_data_img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("save image from npz file");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

//* Basic AI Block

Blockly.Blocks['basic_data_processing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Data Processing ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['basic_classification_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Classification Model ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['basic_train_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Train Model ");
    this.appendDummyInput()
        .appendField(" ( epochs = ")
    this.appendValueInput("var_epochs");
    this.appendDummyInput()
        .appendField(" , batch_size = ")
    this.appendValueInput("var_batch_size");
    this.appendDummyInput()
          .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['basic_load_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Load Model ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['basic_load_model_project'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Load Model ");
    this.appendValueInput("modelname")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(" from Project (")
        .appendField(new Blockly.FieldDropdown(this.generateOptions), "projectName")
        .appendField(")")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function() {
    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value, project[i].dataset.project_id]);
    }

    return arrProject;
  }
}

Blockly.Blocks['basic_load_checkpoint_model_project'] = {

  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Load Checkpoint Model from Project (")
        .appendField(new Blockly.FieldDropdown(this.generateOptions), "projectName")
        .appendField(")")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function() {
    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value, project[i].dataset.project_id]);
    }

    return arrProject;
  }

}

Blockly.Blocks['basic_set_result_to_predict'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Set ");
    this.appendValueInput("var_result");
    this.appendDummyInput()
        .appendField(" to Predict ");
    this.appendValueInput("image")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['basic_predict_checkpoint_model_project'] = {

  init: function() {
    this.appendDummyInput()
        .appendField("Basic: Set ");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to Predict");
    this.appendValueInput("image")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(" of Model from Project (")
        .appendField(new Blockly.FieldDropdown(this.generateOptions), "projectName")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function() {
    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value, project[i].dataset.project_id]);
    }

    return arrProject;
  }

}

Blockly.Blocks['basic_set_predict_result_project'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set");
    this.appendValueInput("var_predict_val")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("to ")
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("argmax value from Project (")
        .appendField(new Blockly.FieldDropdown(this.generateOptions), "projectName")
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },

  generateOptions: function() {
    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value, project[i].dataset.project_id]);
    }

    return arrProject;
  }
}

Blockly.Python['basic_data_processing'] = function(block) {
  var code = 'targetSize = (100, 100) \n';
  code += 'dataLib2.resizeImageToTargetSize2(projectName, targetSize, projectName) \n';
  code += '(x_train, y_train, x_test, y_test) = dataLib2.loadData2(projectName, projectName) \n';
  code += '(x_train,y_train,x_test,y_test) = dataLib2.shuffleData2(x_train, y_train, x_test, y_test) \n';
  code += 'x_train = np.reshape(x_train, (-1, 100,100,3)) \n';
  code += 'x_test = np.reshape(x_test, (-1, 100,100,3)) \n';
  return code;
};

Blockly.Python['basic_classification_model'] = function(block) {
  var code = '';
  code += 'import json \n';
  code += 'file = open(\'/home/pi/autonomousCar/block/project/\' + projectName + \'/names.json\') \n';
  code += 'jsonString = json.load(file) \n';
  code += 'Classes = jsonString.get(\'names\') \n';
  code += 'model = Sequential() \n';
  code += 'model.add(InputLayer(input_shape=(100,100,3))) \n';
  code += 'model.add(Conv2D(32, (5,5), (2,2), activation=\'relu\')) \n';
  code += 'model.add(MaxPool2D((2,2), (2,2))) \n';
  code += 'model.add(Flatten()) \n';
  code += 'model.add(Dense(128, activation=\'relu\')) \n';
  code += 'model.add(Dense(64, activation=\'relu\')) \n';
  code += 'model.add(Dense(32, activation=\'relu\')) \n';
  code += 'model.add(Dense(16, activation=\'relu\')) \n';
  code += 'model.add(Dropout(0.5)) \n';
  code += 'model.add(Dense(len(Classes), activation=\'softmax\')) \n';
  code += 'model.summary() \n';
  return code;
};

Blockly.Python['basic_train_model'] = function(block) {
  var code = 'model.compile(optimizer=\'adam\',loss=\'sparse_categorical_crossentropy\', metrics=[\'accuracy\']) \n';
  code += 'history = model.fit(x_train,y_train, epochs=epochs, batch_size=batch_size, validation_data=(x_test, y_test)) \n';
  code += 'plt.plot(history.history[\'accuracy\']) \n';
  code += 'plt.plot(history.history[\'val_accuracy\']) \n';
  code += 'plt.title(\'model accuracy\') \n';
  code += 'plt.ylabel(\'accuracy\') \n';
  code += 'plt.xlabel(\'epoch\') \n';
  code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
  code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', dpi=300) \n';
  code += 'plt.close() \n';
  code += 'os.makedirs(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb\', exist_ok=True) \n';
  code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', cv2.IMREAD_UNCHANGED) \n';
  code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_accuracy.jpg\', resizeImg) \n';
  code += 'plt.plot(history.history[\'loss\']) \n';
  code += 'plt.plot(history.history[\'val_loss\']) \n';
  code += 'plt.title(\'model loss\') \n';
  code += 'plt.ylabel(\'loss\') \n';
  code += 'plt.xlabel(\'epoch\') \n';
  code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
  code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', dpi=300) \n';
  code += 'plt.close() \n';
  code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', cv2.IMREAD_UNCHANGED) \n';
  code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_loss.jpg\', resizeImg) \n';
  code += 'model.save(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/model/\'+ projectName +\'.h5\') \n';
  return code;
};

Blockly.Python['basic_load_model'] = function(block) {
  var code = 'import json \n';
  code += 'file = open(\'/home/pi/autonomousCar/block/project/\' + projectName + \'/names.json\') \n';
  code += 'jsonString = json.load(file) \n';
  code += 'Classes = jsonString.get(\'names\') \n';
  code += 'model = tf.keras.models.load_model(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/model/\'+ projectName +\'.h5\') \n';
  return code;
}

Blockly.Python['basic_load_model_project'] = function(block) {
  var value_modelname = Blockly.Python.valueToCode(block, 'modelname', Blockly.Python.ORDER_ATOMIC);
  value_modelname = value_modelname.replace(/'/gi,"");
  var value_project = block.getFieldValue('projectName');
  var name_project = block.getField('projectName').getText();
  var code = 'import json \n';
  code += 'file = open(\'/home/pi/autonomousCar/block/project/'+name_project+'/names.json\') \n';
  code += 'jsonString = json.load(file) \n';
  code += 'Classes'+value_project+' = jsonString.get(\'names\') \n';
  code += 'model'+value_project+' = tf.keras.models.load_model(\'/home/pi/autonomousCar/block/project/'+name_project+'/model/' + value_modelname +'.h5\') \n';
  return code;
}

Blockly.Python['basic_load_checkpoint_model_project'] = function(block) {
  var value_project = block.getFieldValue('projectName');
  var name_project = block.getField('projectName').getText();
  var code = 'import model_keras as km \n';
  code += 'model'+value_project+' = km.model \n';
  code += 'MODELDIR = \'/home/pi/autonomousCar/block/project/'+name_project+'/model\' \n';
  code += 'import os \n';
  code += 'if not os.path.exists(MODELDIR): \n';
  code += '  os.makedirs(MODELDIR) \n';
  code += 'checkpoint_path = os.path.join(MODELDIR, \'model.ckpt\') \n';
  code += 'cp_callback = tf.keras.callbacks.ModelCheckpoint(filepath=checkpoint_path, save_weights_only=True, verbose=0) \n';
  code += 'first_training = False \n';
  code += 'if not first_training: \n';
  code += '  model'+value_project+'.load_weights(checkpoint_path) \n';
  code += 'import json \n';
  code += 'file = open(\'/home/pi/autonomousCar/block/project/'+name_project+'/names.json\') \n';
  code += 'jsonString = json.load(file) \n';
  code += 'Classes'+value_project+' = jsonString.get(\'names\') \n';
  return code;
}

Blockly.Python['basic_set_result_to_predict'] = function(block) {
  var code = 'image = cv2.resize(image, (100,100), interpolation=cv2.INTER_AREA) \n';
  code += 'image = np.reshape(image, (-1, 100,100,3)) \n';
  code += 'image = image / 255 \n';
  code += 'y_ = model.predict(image) \n';
  code += 'pred0 = y_[0].tolist()\n';
  code += 'print(\'Prediction|0|\', pred0)\n'
  code += 'result = Classes[np.argmax(y_)] \n';
  return code;
}

Blockly.Python['basic_predict_checkpoint_model_project'] = function(block) {
  var value_predict = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);
  var value_project = block.getFieldValue('projectName');
  var name_project = block.getField('projectName').getText();

  var code = value_predict + ' = model'+value_project+'.predict('+image+')\n';
  code += 'pred'+value_project+' = '+value_predict+'[0].tolist()\n';
  code += 'logger.info(\'Prediction|'+value_project+'|\'+str(pred'+value_project+'))\n';
  return code;
}

Blockly.Python['basic_set_predict_result_project'] = function(block) {
  var value_predict = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_project = block.getFieldValue('projectName');
  var name_project = block.getField('projectName').getText();
  var value_predict_result = Blockly.Python.valueToCode(block, 'var_predict_val', Blockly.Python.ORDER_ATOMIC);

  var code = value_predict_result + ' = Classes'+value_project+'[np.argmax('+value_predict+')]; \n';
  return code;
}

//  End of Basic */

/*tensorflow block 추가 생성 시작*/

Blockly.Blocks['import_librarys'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import tf_librarys");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}


Blockly.Python['import_librarys'] = function(block) {
  //var code = 'import tensorflow as tf \n';
  //code += 'from tensorflow.keras.models import * \n';
  //code += 'from tensorflow.keras.layers import * \n';
  var code = '';
  return code;
};

Blockly.Blocks['BatchNormalization'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BatchNormalization");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Python['BatchNormalization'] = function(block) {
  var code = 'model.add(BatchNormalization()) \n';
  return code;
};

Blockly.Blocks['model_compile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compile (optimizer=")
        .appendField(new Blockly.FieldDropdown([["Adam","Adam"], ["SGD","SGD"], ["RMSprop","RMSprop"]]), "opt_optimizer_fn")
        .appendField(" , loss='mean_squared_error'")
        .appendField(" , learning_rate=")
    this.appendValueInput("var1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(") ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Python['model_compile'] = function(block) {
  var dropdown_opt_optimizer_fn = block.getFieldValue('opt_optimizer_fn');
  var var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var code = 'model.compile(optimizer=tf.optimizers.'+dropdown_opt_optimizer_fn+'(learning_rate='+var1+'),loss=\'mean_squared_error\', metrics=[\'accuracy\']) \n';
  return code;
}

Blockly.Blocks['model_fit_fn2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("train (train data(");
    this.appendValueInput("var1");
    this.appendValueInput("var2");
    this.appendDummyInput()
        .appendField("), epochs(");
    this.appendValueInput("var3");
    this.appendDummyInput()
        .appendField("), batch_size(");
    this.appendValueInput("var4")
    this.appendDummyInput()    
        .appendField("), validation split(");
    this.appendValueInput("var5");
    this.appendDummyInput()
        .appendField(")%)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Python['model_fit_fn2'] = function(block) {
  var var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var var2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  var var3 = Blockly.Python.valueToCode(block, 'var3', Blockly.Python.ORDER_ATOMIC);
  var var4 = Blockly.Python.valueToCode(block, 'var4', Blockly.Python.ORDER_ATOMIC);
  var var5 = Blockly.Python.valueToCode(block, 'var5', Blockly.Python.ORDER_ATOMIC);
  var code = 'history = model.fit('+var1+','+var2+', epochs='+var3+', batch_size='+var4+', validation_split='+(var5/100)+')\n';
  code += 'plt.plot(history.history[\'accuracy\']) \n';
  code += 'plt.plot(history.history[\'val_accuracy\']) \n';
  code += 'plt.title(\'model accuracy\') \n';
  code += 'plt.ylabel(\'accuracy\') \n';
  code += 'plt.xlabel(\'epoch\') \n';
  code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
  code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', dpi=300) \n';
  code += 'plt.close() \n';
  code += 'os.makedirs(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb\', exist_ok=True) \n';
  code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', cv2.IMREAD_UNCHANGED) \n';
  code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_accuracy.jpg\', resizeImg) \n';
  code += 'plt.plot(history.history[\'loss\']) \n';
  code += 'plt.plot(history.history[\'val_loss\']) \n';
  code += 'plt.title(\'model loss\') \n';
  code += 'plt.ylabel(\'loss\') \n';
  code += 'plt.xlabel(\'epoch\') \n';
  code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
  code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', dpi=300) \n';
  code += 'plt.close() \n';
  code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', cv2.IMREAD_UNCHANGED) \n';
  code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_loss.jpg\', resizeImg) \n';
  return code;
}

Blockly.Blocks['model_fit_fn3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("train (train data(");
    this.appendValueInput("var1");
    this.appendValueInput("var2");
    this.appendDummyInput()
        .appendField("), epochs(");
    this.appendValueInput("var3");
    this.appendDummyInput()
        .appendField("), batch_size(");
    this.appendValueInput("var4")
    this.appendDummyInput()
        .appendField("), validation data(");
    this.appendValueInput("var5");
    this.appendValueInput("var6");
    this.appendDummyInput()    
        .appendField("))");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Python['model_fit_fn3'] = function(block) {
  var var1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var var2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  var var3 = Blockly.Python.valueToCode(block, 'var3', Blockly.Python.ORDER_ATOMIC);
  var var4 = Blockly.Python.valueToCode(block, 'var4', Blockly.Python.ORDER_ATOMIC);
  var var5 = Blockly.Python.valueToCode(block, 'var5', Blockly.Python.ORDER_ATOMIC);
  var var6 = Blockly.Python.valueToCode(block, 'var6', Blockly.Python.ORDER_ATOMIC);
  var code = 'history = model.fit('+var1+','+var2+', epochs='+var3+', batch_size='+var4+', validation_data=('+var5+', '+var6+'))\n';
  code += 'plt.plot(history.history[\'accuracy\']) \n';
  code += 'plt.plot(history.history[\'val_accuracy\']) \n';
  code += 'plt.title(\'model accuracy\') \n';
  code += 'plt.ylabel(\'accuracy\') \n';
  code += 'plt.xlabel(\'epoch\') \n';
  code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
  code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', dpi=300) \n';
  code += 'plt.close() \n';
  code += 'os.makedirs(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb\', exist_ok=True) \n';
  code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', cv2.IMREAD_UNCHANGED) \n';
  code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_accuracy.jpg\', resizeImg) \n';
  code += 'plt.plot(history.history[\'loss\']) \n';
  code += 'plt.plot(history.history[\'val_loss\']) \n';
  code += 'plt.title(\'model loss\') \n';
  code += 'plt.ylabel(\'loss\') \n';
  code += 'plt.xlabel(\'epoch\') \n';
  code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
  code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', dpi=300) \n';
  code += 'plt.close() \n';
  code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', cv2.IMREAD_UNCHANGED) \n';
  code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
  code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_loss.jpg\', resizeImg) \n';
  return code;
}

Blockly.Blocks['sequential'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sequential()");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Python['sequential'] = function(block) {
  var code = 'model = Sequential() \n';
  return code;
}


Blockly.Blocks['InputLayer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("InputLayer neurons:");
    this.appendValueInput("var1")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Python['InputLayer'] = function(block) {
  var value_shape_size1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var code = 'model.add(InputLayer(input_shape=('+value_shape_size1+',)))\n';
  return code;
}

/*tensorflow block 추가 생성 종료*/



  // End Block Definition */

  Blockly.Python['testmodel'] = function(block) {
    var code = 'import json \n';
    code += 'file = open(\'/home/pi/autonomousCar/block/project/\' + projectName + \'/names.json\') \n';
    code += 'jsonString = json.load(file) \n';
    code += 'Classes = jsonString.get(\'names\') \n';
    return code;
  };
  
  Blockly.Python['set_predict_result'] = function(block) {
    var value_predict_result = Blockly.Python.valueToCode(block, 'var_predict_val', Blockly.Python.ORDER_ATOMIC);
    var code = value_predict_result + ' = Classes[np.argmax(y_)]; \n';
    return code;
  };
  

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

  Blockly.Python['image_resize2'] = function(block) {
    var value_img_size1 = Blockly.Python.valueToCode(block, 'img_size1', Blockly.Python.ORDER_ATOMIC);
    var value_img_size2 = Blockly.Python.valueToCode(block, 'img_size2', Blockly.Python.ORDER_ATOMIC);
    var value_npzname = Blockly.Python.valueToCode(block, 'npzname', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'targetSize = ('+value_img_size1+', '+value_img_size2+')\n';
    code += 'dataLib2.resizeImageToTargetSize(projectName,targetSize,'+value_npzname+')\n';
    return code;
  };


  Blockly.Python['image_resize4'] = function(block) {
    var value_img_size1 = Blockly.Python.valueToCode(block, 'img_size1', Blockly.Python.ORDER_ATOMIC);
    var value_img_size2 = Blockly.Python.valueToCode(block, 'img_size2', Blockly.Python.ORDER_ATOMIC);
    var value_npzname = Blockly.Python.valueToCode(block, 'npzname', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'targetSize = ('+value_img_size1+', '+value_img_size2+')\n';
    code += 'dataLib2.resizeImageToTargetSize2(projectName,targetSize,'+value_npzname+')\n';
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

  Blockly.Python['load_data'] = function(block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var value_npzname = Blockly.Python.valueToCode(block, 'npzname', Blockly.Python.ORDER_ATOMIC);
    var code = '('+value_x_data+', '+value_y_data+') = dataLib2.loadData(projectName, '+value_npzname+') \n';
    return code;
  };

  Blockly.Python['load_data2'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    var value_npzname = Blockly.Python.valueToCode(block, 'npzname', Blockly.Python.ORDER_ATOMIC);
    var code = '('+value_x_train+', '+value_y_train+', '+value_x_test+', '+value_y_test+') = dataLib2.loadData2(projectName, '+value_npzname+') \n';
    return code;
  };
  //*/

  Blockly.Python['load_csv_data'] = function(block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var value_csv_name = Blockly.Python.valueToCode(block, 'csv_name', Blockly.Python.ORDER_ATOMIC);
    //value_csv_name = value_csv_name.replace(/[']/g,'');
    var code = '('+value_x_data+', '+value_y_data+') = dataLib2.loadCsvData(projectName, '+value_csv_name+') \n';
    return code;
  };

  Blockly.Python['shuffle'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var code = 'randomize = np.arange(len('+value_x_train+')) \n';
    code += 'np.random.shuffle(randomize)\n';
    code += value_x_train + ' = '+value_x_train+'[randomize]\n';
    code += value_y_train + ' = '+value_y_train+'[randomize]\n';

    return code;

  };

  Blockly.Python['shuffle_data'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);

    var value_val_ratio = Blockly.Python.valueToCode(block, 'val_ratio', Blockly.Python.ORDER_ATOMIC);
    var code = '('+value_x_train+','+value_y_train+','+value_x_test+','+value_y_test+') = dataLib2.shuffleData('+value_x_data+', '+value_y_data+', train_test_ratio='+value_val_ratio+')  \n';
    return code;

  };

  Blockly.Python['shuffle_data2'] = function(block) {
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train1', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train1', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test1', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test1', Blockly.Python.ORDER_ATOMIC);
    var value_x_train2 = Blockly.Python.valueToCode(block, 'x_train2', Blockly.Python.ORDER_ATOMIC);
    var value_y_train2 = Blockly.Python.valueToCode(block, 'y_train2', Blockly.Python.ORDER_ATOMIC);
    var value_x_test2 = Blockly.Python.valueToCode(block, 'x_test2', Blockly.Python.ORDER_ATOMIC);
    var value_y_test2 = Blockly.Python.valueToCode(block, 'y_test2', Blockly.Python.ORDER_ATOMIC);
    var code = '('+value_x_train+','+value_y_train+','+value_x_test+','+value_y_test+') = dataLib2.shuffleData2('+value_x_train2+', '+value_y_train2+', '+value_x_test2+', '+value_y_test2+')  \n';
    return code;

  };

  Blockly.Python['image_resize3'] = function(block) {
    var value1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
    var value2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
    var value_size1 = Blockly.Python.valueToCode(block, 'w_size', Blockly.Python.ORDER_ATOMIC);
    var value_size2 = Blockly.Python.valueToCode(block, 'h_size', Blockly.Python.ORDER_ATOMIC);
    var code = value1 + ' = cv2.resize('+value2+', ('+value_size1+','+value_size2+'), interpolation=cv2.INTER_AREA) \n';
    return code;
  };

  Blockly.Python['image_reshape'] = function(block) {
    var value1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
    var value2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
    var value_shape_size1 = Blockly.Python.valueToCode(block, 'shape_size1', Blockly.Python.ORDER_ATOMIC);
    var value_shape_size2 = Blockly.Python.valueToCode(block, 'shape_size2', Blockly.Python.ORDER_ATOMIC);
    var value_shape_size3 = Blockly.Python.valueToCode(block, 'shape_size3', Blockly.Python.ORDER_ATOMIC);
    var code = value1 + ' = np.reshape('+value2+', (-1, '+value_shape_size1+','+value_shape_size2+','+value_shape_size3+')) \n';
    return code;
  }


  //* model set with input shape
  Blockly.Python['model_set_with_input'] = function(block) {
    var value_shape_size1 = Blockly.Python.valueToCode(block, 'shape_size1', Blockly.Python.ORDER_ATOMIC);
    var value_shape_size2 = Blockly.Python.valueToCode(block, 'shape_size2', Blockly.Python.ORDER_ATOMIC);
    var value_shape_size3 = Blockly.Python.valueToCode(block, 'shape_size3', Blockly.Python.ORDER_ATOMIC);
    var code = 'model.add(InputLayer(input_shape=('+value_shape_size1+','+value_shape_size2+','+value_shape_size3+')))\n';
    return code;
  }
  //*/

  //* model add conv2d layer
  Blockly.Python['model_add_conv2d'] = function(block) {
    var value_channel_num = Blockly.Python.valueToCode(block, 'channel_num', Blockly.Python.ORDER_ATOMIC);
    var value_filter_size1 = Blockly.Python.valueToCode(block, 'filter_size1', Blockly.Python.ORDER_ATOMIC);
    var value_stride1 = Blockly.Python.valueToCode(block, 'stride1', Blockly.Python.ORDER_ATOMIC);
    var value_filter_size2 = Blockly.Python.valueToCode(block, 'filter_size2', Blockly.Python.ORDER_ATOMIC);
    var value_stride2 = Blockly.Python.valueToCode(block, 'stride2', Blockly.Python.ORDER_ATOMIC);
    
    
    var dropdown_opt_activation = block.getFieldValue("opt_activation");
    var code = 'model.add(Conv2D('+value_channel_num+', ('+value_filter_size1+','+value_filter_size2+'), ('+value_stride1+','+value_stride2+'), activation=\''+dropdown_opt_activation+'\'))\n';
    return code;
  };
  //*/

   //* model add Maxpool
   Blockly.Python['model_MaxPool'] = function(block) {
    var value_pool_size1 = Blockly.Python.valueToCode(block, 'pool_size1', Blockly.Python.ORDER_ATOMIC);
    var value_pool_size2 = Blockly.Python.valueToCode(block, 'pool_size2', Blockly.Python.ORDER_ATOMIC);
    var value_stride_size1 = Blockly.Python.valueToCode(block, 'stride_size1', Blockly.Python.ORDER_ATOMIC);
    var value_stride_size2 = Blockly.Python.valueToCode(block, 'stride_size2', Blockly.Python.ORDER_ATOMIC);
    
    var code = 'model.add(MaxPool2D(('+value_pool_size1+','+value_pool_size2+'), ('+value_stride_size1+','+value_stride_size2+')))\n';
    return code;
  };
  //*/

   //* model add Dropout
   Blockly.Python['model_Dropout'] = function(block) {
    var value_dropout_size = Blockly.Python.valueToCode(block, 'dropout_size', Blockly.Python.ORDER_ATOMIC);
    var code = 'model.add(Dropout('+value_dropout_size+'))\n';
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

  Blockly.Python.model_summary = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'model.summary()\n';
    return code;
  };


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
    var value_epoch_num = Blockly.Python.valueToCode(block, 'epoch_num', Blockly.Python.ORDER_ATOMIC);
    var code = 'history = model.fit(x_train,y_train, epochs='+value_epoch_num+', validation_split=0.2)\n';
    code += 'plt.plot(history.history[\'accuracy\']) \n';
    code += 'plt.plot(history.history[\'val_accuracy\']) \n';
    code += 'plt.title(\'model accuracy\') \n';
    code += 'plt.ylabel(\'accuracy\') \n';
    code += 'plt.xlabel(\'epoch\') \n';
    code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
    code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', dpi=300) \n';
    code += 'plt.close() \n';
    code += 'os.makedirs(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb\', exist_ok=True) \n';
    code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/accuracy.jpg\', cv2.IMREAD_UNCHANGED) \n';
    code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
    code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_accuracy.jpg\', resizeImg) \n';
    code += 'plt.plot(history.history[\'loss\']) \n';
    code += 'plt.plot(history.history[\'val_loss\']) \n';
    code += 'plt.title(\'model loss\') \n';
    code += 'plt.ylabel(\'loss\') \n';
    code += 'plt.xlabel(\'epoch\') \n';
    code += 'plt.legend([\'train\', \'val\'], loc=\'upper left\') \n';
    code += 'plt.savefig(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', dpi=300) \n';
    code += 'plt.close() \n';
    code += 'img = cv2.imread(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/loss.jpg\', cv2.IMREAD_UNCHANGED) \n';
    code += 'resizeImg = cv2.resize(img, (90, 70), interpolation=cv2.INTER_AREA) \n';
    code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/train_history/thumb/thumb_loss.jpg\', resizeImg) \n';
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

  Blockly.Python['model_save'] = function(block) {
    var value_index = Blockly.Python.valueToCode(block, 'modelname', Blockly.Python.ORDER_ATOMIC);
    value_index = value_index.replace(/'/gi,"");
    var code = 'model.save(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/model/' + value_index + '.h5\') \n';
    //var code = 'dataLib2.modelSave('+value_index+', model) \n'
    return code;
  }
  
  Blockly.Python['model_load'] = function(block) {
    var value_index = Blockly.Python.valueToCode(block, 'modelname', Blockly.Python.ORDER_ATOMIC);
    value_index = value_index.replace(/'/gi,"");
    var code = 'model = tf.keras.models.load_model(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/model/' + value_index +'.h5\') \n';
    //var code = 'dataLib2.modelLoad('+value_index+') \n'
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
    code += 'Classes = model.predict(images, batch_size=10)\n' 
    code += 'print(Classes)\n' 
    code += 'print(Classes[0])\n' 
    code += 'print(str(np.argmax(Classes[0])))\n' 
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

  Blockly.Python['load_model_predict'] = function(block) {
    var value_path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);
    var value_img_size1 = Blockly.Python.valueToCode(block, 'img_size1', Blockly.Python.ORDER_ATOMIC);
    var value_img_size2 = Blockly.Python.valueToCode(block, 'img_size2', Blockly.Python.ORDER_ATOMIC);

    var code = 'img=dataLib2.uploadPredictImage('+value_path+', '+value_img_size1+', '+value_img_size2+', projectName)\n';
    code += "y_ = model.predict(img)\n"
    code += "print('probability distribution is :', y_)\n"
    code += "print(Classes) \n"
    code += "print(np.argmax(y_)) \n"
    code += "print(Classes[np.argmax(y_)]) \n"
    return code;
  }

  Blockly.Python['direct_predict'] = function(block) {
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);

    var code = value + ' = model.predict('+image+')\n';
    code += 'pred0 = '+value+'[0].tolist()\n';
    code += 'print(\'Prediction|0|\', pred0)\n';
    return code;
  }


  Blockly.Python['frame_image_resize'] = function(block) {
    var value1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
    var value2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
    var image_size1 = Blockly.Python.valueToCode(block, 'img_size1', Blockly.Python.ORDER_ATOMIC);
    var image_size2 = Blockly.Python.valueToCode(block, 'img_size2', Blockly.Python.ORDER_ATOMIC);

    var code = value1+ ' = cv2.resize('+value2+', ('+image_size1+','+image_size2+'), interpolation = cv2.INTER_LANCZOS4) \n';
    return code;
  }


  Blockly.Python['GetProject'] = function(block) {

    var projectName = block.getFieldValue('projectName');
    var code = 'projectName =  \''+projectName+'\' \n';
    
    return code;
  }

  Blockly.Python['take_pridict_picture'] = function(block) {
    var code = 'image = cam.get_frame() \n';
    code += 'cv2.imwrite(\'/home/pi/autonomousCar/block/project/\' + projectName + \'/result/resultpicture.jpg\', image) \n';
    return code;
  };

  Blockly.Python['hand_detect'] = function(block) {
    var value1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
    var value2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
    var image_size1 = Blockly.Python.valueToCode(block, 'img_size1', Blockly.Python.ORDER_ATOMIC);
    var image_size2 = Blockly.Python.valueToCode(block, 'img_size2', Blockly.Python.ORDER_ATOMIC);

    var code = 'val, '+value1+' =  dataLib2.get_hand('+value2+',('+image_size1+', '+image_size2+'), True) \n';
    return code;
  };

  
  //*/

  //* Image Upload Clicked Block
Blockly.Python['image_upload'] = function(block) {
  return '';
};
//*/

Blockly.Python['create_project'] = function(block) {
  return '';
};

Blockly.Python['confidence'] = function(block) {
  var code = `result = ['%0.2f%%' % (y_[0][i] * 100) for i in range(len(y_[0]))]
confidence = list(zip(names,result))
print(confidence)
`
  return code;
};

Blockly.Python['save_data_img'] = function (block) {
  var code =`for i in range(1,11):
 cv2.imwrite('/home/pi/autonomousCar/block/project/\'+ projectName +\'/result/npzPicture\'+str(i)+\'.jpg', x_data[random.randrange(0,x_data.shape[0] -1)])
`
  return code;
};


  
// level_A block start //

Blockly.Blocks['Data_Processing'] = {

  init: function() {

    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value,project[i].value]);
    }
    
    this.appendDummyInput()
        .appendField("Data Processing, get project")
        .appendField(new Blockly.FieldDropdown(arrProject), "projectName")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}



Blockly.Python['Data_Processing'] = function(block) {

  var projectName = block.getFieldValue('projectName');

  var code = `
import ai_data_lib2 as dataLib2 
projectName =  '${projectName}'
targetSize = (100, 100)
dataLib2.resizeImageToTargetSize(projectName,targetSize,projectName)
  `
  
  return code;
}

Blockly.Blocks['Model_Processing'] = {

  init: function() {

    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value,project[i].value]);
    }
    
    this.appendDummyInput()
        .appendField("Model Processing, get project")
        .appendField(new Blockly.FieldDropdown(arrProject), "projectName")
    this.appendDummyInput()
        .appendField("result size : ");
    this.appendValueInput("result_size")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("epoch size : ");
    this.appendValueInput("epoch_size")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}



Blockly.Python['Model_Processing'] = function(block) {

  var projectName = block.getFieldValue('projectName');
  var value_result_size = Blockly.Python.valueToCode(block, 'result_size', Blockly.Python.ORDER_ATOMIC);
  var value_epoch_size = Blockly.Python.valueToCode(block, 'epoch_size', Blockly.Python.ORDER_ATOMIC);
    
  var code = 
  `
import tensorflow as tf 
from tensorflow.keras.layers import * 
import ai_data_lib2 as dataLib2 
x_data = None
y_data = None
x_train = None
y_train = None
x_test = None
y_test = None

projectName = '${projectName}' 
(x_data, y_data) = dataLib2.loadData(projectName, projectName)
(x_train,y_train,x_test,y_test) = dataLib2.shuffleData(x_data, y_data, train_test_ratio=0.8)
model = tf.keras.models.Sequential()
model.add(InputLayer(input_shape=(100,100,3)))
model.add(Conv2D(32, (5,5), (2,2), activation='relu'))
model.add(MaxPool2D((2,2)))
model.add(Flatten())
model.add(Dense(500, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(${value_result_size}, activation='softmax'))

model.compile(optimizer='adam',loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(x_train,y_train, epochs=${value_epoch_size})
loss, accuracy = model.evaluate(x_test, y_test, verbose=2)
model.save('/home/pi/autonomousCar/block/project/'+ projectName +'/model/'+ projectName +'.h5')

  `;
  
  return code;
}


Blockly.Blocks['Predict_Processing'] = {

  init: function() {

    var project = parent.document.getElementById("folderList");

    var arrProject = []

    for(var i =0; i < project.length ; i++){
      arrProject.push([project[i].value,project[i].value]);
    }
    
    this.appendDummyInput()
        .appendField("Predict Processing, get project")
        .appendField(new Blockly.FieldDropdown(arrProject), "projectName")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}



Blockly.Python['Predict_Processing'] = function(block) {

  var projectName = block.getFieldValue('projectName');
  var code = `
import cameralib as camera 
import cv2 
import ai_data_lib2 as dataLib2 
import tensorflow as tf 
from tensorflow.keras.layers import * 
import numpy as np 


projectName = '${projectName}' 
cam = camera.Camera()
import json
file = open('/home/pi/autonomousCar/block/project/' + projectName + '/names.json')
jsonString = json.load(file)
Classes = jsonString.get('names')
model = tf.keras.models.load_model('/home/pi/autonomousCar/block/project/'+ projectName +'/model/'+ projectName +'.h5')

while True:
  if button.is_pressed:
    image = cam.get_frame()
    cv2.imwrite('/home/pi/autonomousCar/block/project/' + projectName + '/result/resultpicture.jpg', image)
    img=dataLib2.uploadPredictImage('resultpicture.jpg', 100, 100, projectName)
    y_ = model.predict(img)
    print('probability distribution is :', y_)
    print(Classes)
    print(np.argmax(y_))
    print(Classes[np.argmax(y_)])



  `
  
  return code;
}
  // level_A block end //