//* AI Car Block Definition

Blockly.Blocks['set_save_img_cnt'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var1");
      this.appendDummyInput()
            .appendField(" to ");
      this.appendDummyInput()
      this.appendValueInput("val_img_cnt")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['make_classes_for_driving'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Create Classes ");
        this.appendValueInput("obj_list")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
  }

  Blockly.Blocks['set_save_to_class'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set Folder path to ");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(this.generateOptions), "classification");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    },

    generateOptions: function() {
      var classFolderList = parent.document.getElementById("classFolderList");
  
      var arrFolder = []
  
      for(var i =0; i < classFolderList.length ; i++){
        arrFolder.push([classFolderList[i].value, classFolderList[i].value]);
      }
  
      return arrFolder;
    }
  }

  Blockly.Blocks['save_image_to_class'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Save ");
      this.appendValueInput("obj_image")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("to ");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown(this.generateOptions), "classification");
      this.appendDummyInput()
          .appendField("Class Folder");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    },

    generateOptions: function() {
      var classFolderList = parent.document.getElementById("classFolderList");
  
      var arrFolder = []
  
      for(var i =0; i < classFolderList.length ; i++){
        arrFolder.push([classFolderList[i].value, classFolderList[i].value]);
      }
  
      return arrFolder;
    }
  }

  Blockly.Blocks['decalcom_of_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Decalcom of Train Data");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    },

    generateOptions: function() {
      var classFolderList = parent.document.getElementById("classFolderList");
  
      var arrFolder = []
  
      for(var i =0; i < classFolderList.length ; i++){
        arrFolder.push([classFolderList[i].value, classFolderList[i].value]);
      }
  
      return arrFolder;
    }
  }

  Blockly.Blocks['create_data_csv'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create CSV File (");
      this.appendValueInput("csv_name")
          .setCheck("String");
      this.appendDummyInput()
          .appendField(") from Train Data");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['data_analysis_csv'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Data Analysis of CSV Data (");
      this.appendValueInput("csv_name")
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

  Blockly.Blocks['data_upsampling_csv'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Data Upsampling of CSV Data (");
      this.appendValueInput("csv_name")
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

  Blockly.Blocks['image_slicing'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var1");
      this.appendDummyInput()
          .appendField(" to Slicing ");
      this.appendValueInput("var2");
      this.appendDummyInput()
          .appendField(" Up ")
      this.appendValueInput("up_pos")
          .setCheck("Number");
      this.appendDummyInput()
          .appendField(" Down ");
      this.appendValueInput("dw_pos")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['train_batch_csv_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Batch train of CSV ( ");
      this.appendValueInput("csv_name")
          .setCheck("String");
      this.appendDummyInput()
          .appendField(" epochs(");
      this.appendValueInput("var_epochs");
      this.appendDummyInput()
          .appendField("), batch_size(");
      this.appendValueInput("var_batch_size")
      this.appendDummyInput()
          .appendField("), first_training(")
          .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "first_training");
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

  Blockly.Blocks['save_model_design_python'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Save Model Design");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['import_checkpoint_model'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Import Checkpoint");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['load_checkpoint_model'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Load Checkpoint");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['predict_checkpoint_model'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("value")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("to Predict");
      this.appendValueInput("image")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" of Checkpoint");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['load_model_design'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var_model")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("to load model design");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['set_model_checkpoint'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var_model")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("to load Checkpoint, First Training = ");
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "first_training");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['model_checkpoint_compile'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Compile (optimizer=")
          .appendField(new Blockly.FieldDropdown([["Adam","Adam"], ["SGD","SGD"], ["RMSprop","RMSprop"]]), "opt_optimizer_fn")
          .appendField(" , loss=")
          .appendField(new Blockly.FieldDropdown([["binary_crossentropy","binary_crossentropy"], ["categorical_crossentropy","categorical_crossentropy"], ["sparse_categorical_crossentropy","sparse_categorical_crossentropy"]]), "opt_loss_fn")
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

  Blockly.Blocks['load_train_batch_fn'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Load batch training data ( ");
      this.appendValueInput("var_x_train")
          .setCheck(null);
      this.appendValueInput("var_y_train")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" , batch_size = ")
      this.appendValueInput("var_batch_size");
      this.appendDummyInput()
          .appendField(")");
      this.appendStatementInput("func_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['set_sequence_get_train_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var_sequence")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" to get train batch data ( ")
      this.appendValueInput("var_x_train")
          .setCheck(null);
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

  Blockly.Blocks['load_test_batch_fn'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Load batch validation data ( ");
      this.appendValueInput("var_x_test")
          .setCheck(null);
      this.appendValueInput("var_y_test")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" , batch_size = ")
      this.appendValueInput("var_batch_size");
      this.appendDummyInput()
          .appendField(")");
      this.appendStatementInput("func_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['set_sequence_get_test_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var_sequence")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" to get val batch data ( ")
      this.appendValueInput("var_x_test")
          .setCheck(null);
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

  Blockly.Blocks['set_image_to_imread_batchpointer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set ");
      this.appendValueInput("var1");
      this.appendDummyInput()
          .appendField(" to imread");
      this.appendValueInput("var2");
      this.appendDummyInput()
          .appendField(" with batch_pointer");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  //train_batch_with_sequence
  Blockly.Blocks['train_batch_with_sequence'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Batch train ( ");
      this.appendValueInput("var_sequence")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" , ")
      this.appendValueInput("var_sequence_val")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" , epochs = ")
      this.appendValueInput("var_epochs");
      this.appendDummyInput()
          .appendField(" , Save Checkpoint)");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

  Blockly.Blocks['train_batch_with_sequence2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Batch train ( ");
      this.appendValueInput("var_sequence")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" , ")
      this.appendValueInput("var_sequence_val")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(" , epochs = ")
      this.appendValueInput("var_epochs");
      this.appendDummyInput()
          .appendField(" , Save Checkpoint)");
      this.appendStatementInput("func_statement")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  }

//*/// End Block Definition

//* set saved img cnt
Blockly.Python['set_save_img_cnt'] = function(block) {
    var obj_1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
    var val_img_cnt = Blockly.Python.valueToCode(block, 'val_img_cnt', Blockly.Python.ORDER_ATOMIC);
    var code = obj_1 + ' = '+val_img_cnt+' \n';
    return code;
}
//*/

//* make classes to save driving data
Blockly.Python['make_classes_for_driving'] = function(block) {
    var value_obj_list = Blockly.Python.valueToCode(block, 'obj_list', Blockly.Python.ORDER_ATOMIC);
    var rep_obj_list = value_obj_list.replace(/\[/g, '').replace(/\]/g, '').replace(/\'/g, '').replace(/ /g, '');
    rep_obj_list = rep_obj_list.split(',');
    // hidden class folder options
    if( rep_obj_list.length > 0) {
        parent.$('#classFolderList').empty();
        for(var i = 0; i < rep_obj_list.length; i++) {
            var addOpText = `<option value="${rep_obj_list[i]}">${rep_obj_list[i]}</option>`
            parent.$("#classFolderList").append(addOpText);
        }
    }
    var project_root_path = '/home/pi/autonomousCar/block/project/';
    var code = 'lists = '+value_obj_list + '\n'; 
    code += 'dataBatchLib.createClasses(projectName, lists) \n';
    /*
    code += 'for classFolder in lists: \n';
    code += '  os.makedirs(\''+project_root_path+'\'+ projectName +\'/data/training/\'+classFolder, exist_ok=True) \n';
    //code += 'os.makedirs(\''+project_root_path+'\'+ projectName +\'/data/training/Left\', exist_ok=True) \n';
    //code += 'os.makedirs(\''+project_root_path+'\'+ projectName +\'/data/training/Right\', exist_ok=True) \n';
    code += '\n';
    // names json
    //code += 'classes = json.loads(\'{ \"names\":[\"Forward\", \"Left\", \"Right\"] }\') \n';
    code += 'classes = { \"names\": lists } \n';
    code += 'f = open(\''+project_root_path+'\'+ projectName +\'/names.json\', \'w\') \n';
    code += 'json.dump(classes, f) \n';
    code += 'f.close() \n';
    //*/
    return code;
}
//*/

//*
Blockly.Python['set_save_to_class'] = function(block) {
    var value_save_class = block.getFieldValue('classification');
    //var project_root_path = '/home/pi/autonomousCar/block/project/';
    var code = 'camera.classDir = projectName +\'/data/training/'+value_save_class+'\' \n';
    return code;
}
//*/

//*
Blockly.Python['save_image_to_class'] = function(block) {
    var value_obj_image = Blockly.Python.valueToCode(block, 'obj_image', Blockly.Python.ORDER_ATOMIC);
    var value_save_class = block.getFieldValue('classification');
    var project_root_path = '/home/pi/autonomousCar/block/project/';
    //var code = 'cam.save_frame() \n';
    var code = 'dataBatchLib.saveImageToClassFolder(projectName, \''+value_save_class+'\', '+value_obj_image+') \n';
    /*
    code += '  cv2.imwrite(\''+project_root_path+'\'+ projectName +\'/data/training/'+ value_save_class +'/picture\'+time.strftime(\'%Y-%m-%d_%H:%M:%S_\') +str(img_cnt) +\'.jpg\', '+value_obj_image+')\n';
    code += '  os.makedirs(\''+project_root_path+'\'+ projectName +\'/data/training/'+ value_save_class +'/thumb\', exist_ok=True) \n';
    code += '  resizeImg = cv2.resize('+value_obj_image+', (90, 70), interpolation=cv2.INTER_AREA) \n';
    code += '  cv2.imwrite(\''+project_root_path+'\'+ projectName +\'/data/training/'+ value_save_class +'/thumb/thumb_picture\'+time.strftime(\'%Y-%m-%d_%H:%M:%S_\') +str(img_cnt) +\'.jpg\', resizeImg) \n';
    //*/
    return code;
}
//*/

//*
Blockly.Python['decalcom_of_data'] = function(block) {
    var value_from_class = block.getFieldValue('from_classification');
    var value_to_class = block.getFieldValue('to_classification');
    var project_root_path = '/home/pi/autonomousCar/block/project/';
    var code = 'dataBatchLib.decalcomOfData(projectName) \n';
    /*
    var code = 'classDir = \''+project_root_path+'\'+ projectName +\'/data/training/'+ value_from_class +' \n';
    code += 'os.chdir(classDir) \n';
    code += 'imgDataList = os.listdir() \n';
    code += 'for imgFile in imgDataList: \n';
    code += '  from_image = cv2.imread(\''+project_root_path+'\'+ projectName +\'/data/training/'+ value_from_class +'/\'+imgFile, cv2.IMREAD_COLOR) \n';
    code += '  from_image = cv2.flip(from_image, 1) \n';
    code += '  to_image = '+project_root_path+'\'+ projectName +\'/data/training/'+ value_to_class +'/dc_\'+imgFile \n';
    code += '  cv2.imwrite(to_image, from_image) \n';
    //code += ' \n';
    //*/
    return code;
}
//*/

//*
Blockly.Python['create_data_csv'] = function(block) {
  var value_csv_name = Blockly.Python.valueToCode(block, 'csv_name', Blockly.Python.ORDER_ATOMIC);
  value_csv_name = value_csv_name.replace(/[']/g,'');
  var project_root_path = '/home/pi/autonomousCar/block/project/';
  var code = 'dataBatchLib.createCsvOfData(projectName, \''+ value_csv_name +'\') \n';
  /*
  var code = 'csvfile = open(\''+project_root_path+'\'+ projectName + \'/'+ value_csv_name +'\', \'w\') \n';
  code += 'fwriter = csv.writer(csvfile) \n';
  code += 'jsonfile = open(\''+project_root_path+'\'+ projectName +\'/names.json) \n';
  code += 'jsonstr = json.load(jsonfile) \n';
  code += 'classes = jsonstr.get(\'names\') \n';
  code += 'for idx, classification in enumerate(classes): \n';
  code += '  classDir = \''+project_root_path+'\'+ projectName +\'/data/training/\'+ classification \n';
  code += '  os.chdir(classDir) \n';
  code += '  imgDataList = os.listdir() \n';
  code += '  for imgFile in imgDataList: \n';
  code += '     imgPath = classDir + \'/\' + imgFile \n';
  code += '     fwriter.writerow((imgPath, idx))\n';
  //code += '     \n';
  code += 'jsonfile.close() \n';
  code += 'csvfile.close() \n';
  //*/
  return code;
}
//*/

//*
Blockly.Python['data_analysis_csv'] = function(block) {
  var value_csv_name = Blockly.Python.valueToCode(block, 'csv_name', Blockly.Python.ORDER_ATOMIC);
  value_csv_name = value_csv_name.replace(/[']/g,'');
  var code = 'dataBatchLib.analysisOfCsvData(projectName, \''+value_csv_name+'\') \n';
  return code;
}
//*/

//*
Blockly.Python['data_upsampling_csv'] = function(block) {
  var value_csv_name = Blockly.Python.valueToCode(block, 'csv_name', Blockly.Python.ORDER_ATOMIC);
  value_csv_name = value_csv_name.replace(/[']/g,'');
  var code = 'dataBatchLib.upsamplingOfCsvData(projectName, \''+value_csv_name+'\') \n';
  return code;
}
//*/

//*
Blockly.Python['image_slicing'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var value2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  var value_pos1 = Blockly.Python.valueToCode(block, 'up_pos', Blockly.Python.ORDER_ATOMIC);
  var value_pos2 = Blockly.Python.valueToCode(block, 'dw_pos', Blockly.Python.ORDER_ATOMIC);
  value_pos2 = value_pos2.replace(/[(]/g,'').replace(/[)]/g,'');
  var code = '';
  if( Math.sign(value_pos2) < 0 ) {
    value_pos2 = Math.abs(value_pos2) + 1;
    code += value1 + ' = '+value2+'['+value_pos1+':-'+value_pos2+'] \n';
    
  } else {
    value_pos2 = Math.abs(value_pos2) - 1;
    code += value1 + ' = '+value2+'['+value_pos1+':'+value_pos2+'] \n';
  }
  return code;
};
//*/

//*
Blockly.Python['train_batch_csv_data'] = function(block) {
  //var var_x_train = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  //var var_y_train = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  var value_csv_name = Blockly.Python.valueToCode(block, 'csv_name', Blockly.Python.ORDER_ATOMIC);
  value_csv_name = value_csv_name.replace(/[']/g,'');
  var var_epochs = Blockly.Python.valueToCode(block, 'var_epochs', Blockly.Python.ORDER_ATOMIC);
  var var_batch_size = Blockly.Python.valueToCode(block, 'var_batch_size', Blockly.Python.ORDER_ATOMIC);
  var value_first_training = block.getFieldValue('first_training');
  value_first_training = value_first_training.replace(/[']/g,'');
  //var var_x_test = Blockly.Python.valueToCode(block, 'var5', Blockly.Python.ORDER_ATOMIC);
  //var var_y_test = Blockly.Python.valueToCode(block, 'var6', Blockly.Python.ORDER_ATOMIC);
  var code = 'dataBatchLib.trainBatchOfCsv(projectName, \''+value_csv_name+'\', '+var_epochs+', '+var_batch_size+', '+value_first_training+') \n';
  return code;
}
//*/

//*
Blockly.Python['save_model_design_python'] = function(block) {
  var code = '';
  return code;
}
//*/

//*
Blockly.Python['import_checkpoint_model'] = function(block) {
  var code = 'import model_keras as km \n';
  return code;
}
//*/

//*
Blockly.Python['load_checkpoint_model'] = function(block) {
  var code = 'model = km.model.load_weights(\'/home/pi/autonomousCar/block/project/\'+ projectName +\'/model/model.ckpt\') \n';
  return code;
}
//*/

//*
Blockly.Python['predict_checkpoint_model'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var image = Blockly.Python.valueToCode(block, 'image', Blockly.Python.ORDER_ATOMIC);

  var code = value + ' = km.model.predict('+image+')\n';
  code += 'pred0 = '+value+'[0].tolist()\n';
  code += 'print(\'Prediction|0|\', pred0)\n';
  return code;
}
//*/

//*
Blockly.Python['load_model_design'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'var_model', Blockly.Python.ORDER_ATOMIC);

  var code = 'import model_keras as km \n';
  code += value_model + ' = km.model \n';
  return code;
}
//*/

//*
Blockly.Python['set_model_checkpoint'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'var_model', Blockly.Python.ORDER_ATOMIC);
  var value_first_training = block.getFieldValue('first_training');
  value_first_training = value_first_training.replace(/[']/g,'');

  var code = 'MODELDIR = \'/home/pi/autonomousCar/block/project/\' + projectName + \'/model\' \n';
  code += 'if not os.path.exists(MODELDIR): \n';
  code += '  os.makedirs(MODELDIR) \n';
  code += 'checkpoint_path = os.path.join(MODELDIR, \'model.ckpt\') \n';
  code += 'cp_callback = tf.keras.callbacks.ModelCheckpoint(filepath=checkpoint_path, save_weights_only=True, verbose=0) \n';
  code += 'first_training = '+value_first_training+' \n';
  code += 'if not first_training: \n';
  code += '  '+value_model + '.load_weights(checkpoint_path) \n';
  return code;
}
//*/

//* model compile
Blockly.Python['model_checkpoint_compile'] = function(block) {
  var dropdown_opt_optimizer_fn = block.getFieldValue('opt_optimizer_fn');
  var dropdown_opt_loss_fn = block.getFieldValue('opt_loss_fn');
  var value_learning_rate = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var code = '';
  code += 'start_learning_rate = '+value_learning_rate+'e-3 \n';
  code += 'model.compile(loss=\''+dropdown_opt_loss_fn+'\', optimizer='+dropdown_opt_optimizer_fn+'(lr=start_learning_rate), metrics=[\'accuracy\']) \n';
  return code;
}
//*/

//*
Blockly.Python['load_train_batch_fn'] = function(block) {
  var value_x_train = Blockly.Python.valueToCode(block, 'var_x_train', Blockly.Python.ORDER_ATOMIC);
  var value_y_train = Blockly.Python.valueToCode(block, 'var_y_train', Blockly.Python.ORDER_ATOMIC);
  var value_batch_size = Blockly.Python.valueToCode(block, 'var_batch_size', Blockly.Python.ORDER_ATOMIC);
  var func_statement = Blockly.Python.statementToCode(block, 'func_statement');
  var split_func_statement = func_statement.split('\n');
  var code = 'train_batch_pointer = 0 \n';
  code += 'def LoadTrainBatch(batch_size, idx): \n';
  //code += '  batch_size = '+value_batch_size+' \n';
  code += '  train_batch_pointer = idx * batch_size \n';
  code += '  x_out = [] \n';
  code += '  y_out = [] \n';
  code += '  for i in range(0, batch_size):\n';
  for(var i=0; i<split_func_statement.length; i++) {
    if(split_func_statement[i] && split_func_statement[i] != '') {
    code += '  ' + split_func_statement[i] + '\n';
    }
  }
  //code += '    image = cv2.imread(x_train[(train_batch_pointer + count)]) \n';
  code += '    x_out.append(image) \n';
  code += '    y_out.append(['+value_y_train+'[(train_batch_pointer + i)%len(x_train)]]) \n';
  code += '  return np.array(x_out), np.array(y_out) \n';
  return code;
}
//*/

//*
Blockly.Python['load_test_batch_fn'] = function(block) {
  var value_x_test = Blockly.Python.valueToCode(block, 'var_x_test', Blockly.Python.ORDER_ATOMIC);
  var value_y_test = Blockly.Python.valueToCode(block, 'var_y_test', Blockly.Python.ORDER_ATOMIC);
  var value_batch_size = Blockly.Python.valueToCode(block, 'var_batch_size', Blockly.Python.ORDER_ATOMIC);
  var func_statement = Blockly.Python.statementToCode(block, 'func_statement');
  var split_func_statement = func_statement.split('\n');
  var code = 'val_batch_pointer = 0 \n';
  code += 'def LoadValBatch(batch_size, idx): \n';
  //code += '  batch_size = '+value_batch_size+' \n';
  code += '  val_batch_pointer = idx * batch_size \n';
  code += '  x_out = [] \n';
  code += '  y_out = [] \n';
  code += '  for i in range(0, batch_size):\n';
  for(var i=0; i<split_func_statement.length; i++) {
    if(split_func_statement[i] && split_func_statement[i] != '') {
    code += '  ' + split_func_statement[i] + '\n';
    }
  }
  code += '    x_out.append(image) \n';
  code += '    y_out.append(['+value_y_test+'[(val_batch_pointer + i)%len(x_test)]]) \n';
  code += '  return np.array(x_out), np.array(y_out) \n';
  return code;
}
//*/

//*
Blockly.Python['set_image_to_imread_batchpointer'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'var1', Blockly.Python.ORDER_ATOMIC);
  var value2 = Blockly.Python.valueToCode(block, 'var2', Blockly.Python.ORDER_ATOMIC);
  var code = value1 + ' = cv2.imread('+value2+'[(train_batch_pointer + i)%len(x_train)]) \n';
  if(value2 == 'x_train') {
    code = value1 + ' = cv2.imread('+value2+'[(train_batch_pointer + i)%len(x_train)]) \n';
  } else {
    code = value1 + ' = cv2.imread('+value2+'[(val_batch_pointer + i)%len(x_test)]) \n';
  }
  if( parseInt($('#for_repeat_cnt').val()) > 1 ) {
    $('input[name=hidden_for_repeat]').first().remove();
  }
  return code;
}
//*/

//*
Blockly.Python['set_sequence_get_train_data'] = function(block) {
  var value_sequence = Blockly.Python.valueToCode(block, 'var_sequence', Blockly.Python.ORDER_ATOMIC);
  var value_x_train = Blockly.Python.valueToCode(block, 'var_x_train', Blockly.Python.ORDER_ATOMIC);
  var value_batch_size = Blockly.Python.valueToCode(block, 'var_batch_size', Blockly.Python.ORDER_ATOMIC);
  var code = 'batch_size = '+value_batch_size + '\n';
  code += 'class train_sequence(Sequence): \n';
  code += '  def __init__(self, total_num, batch_size): \n';
  code += '    self.total_num = total_num \n';
  code += '    self.batch_size = batch_size \n';
  code += ' \n';
  code += '  def __len__(self): \n';
  code += '    return int(np.ceil(float(self.total_num)/float(self.batch_size))) \n';
  code += ' \n';
  code += '  def __getitem__(self, idx): \n';
  code += '    xs, ys = LoadTrainBatch(self.batch_size, idx) \n';
  code += '    train_labels_1h = to_categorical(ys) \n';
  code += '    return xs, train_labels_1h \n';
  code += '\n';
  code += value_sequence + ' = train_sequence(len('+value_x_train+'), batch_size) \n';
  return code;
}
//*/

//*
Blockly.Python['set_sequence_get_test_data'] = function(block) {
  var value_sequence = Blockly.Python.valueToCode(block, 'var_sequence', Blockly.Python.ORDER_ATOMIC);
  var value_x_test = Blockly.Python.valueToCode(block, 'var_x_test', Blockly.Python.ORDER_ATOMIC);
  var value_batch_size = Blockly.Python.valueToCode(block, 'var_batch_size', Blockly.Python.ORDER_ATOMIC);
  var code = 'batch_size = '+value_batch_size + '\n';
  code += 'class val_sequence(Sequence): \n';
  code += '  def __init__(self, total_num, batch_size): \n';
  code += '    self.total_num = total_num \n';
  code += '    self.batch_size = batch_size \n';
  code += ' \n';
  code += '  def __len__(self): \n';
  code += '    return int(np.ceil(float(self.total_num)/float(self.batch_size))) \n';
  code += ' \n';
  code += '  def __getitem__(self, idx): \n';
  code += '    xs_val, ys_val = LoadValBatch(self.batch_size, idx) \n';
  code += '    train_labels_1h = to_categorical(ys_val) \n';
  code += '    return xs_val, train_labels_1h \n';
  code += '\n';
  code += value_sequence + ' = val_sequence(len('+value_x_test+'), batch_size) \n';
  return code;
}
//*/

//*
Blockly.Python['train_batch_with_sequence'] = function(block) {
  var value_sequence = Blockly.Python.valueToCode(block, 'var_sequence', Blockly.Python.ORDER_ATOMIC);
  var value_sequence_val = Blockly.Python.valueToCode(block, 'var_sequence_val', Blockly.Python.ORDER_ATOMIC);
  var var_epochs = Blockly.Python.valueToCode(block, 'var_epochs', Blockly.Python.ORDER_ATOMIC);
  var code = 'model.fit('+value_sequence+', validation_data='+value_sequence_val+', epochs='+var_epochs+', callbacks=[cp_callback], verbose=1) \n';
  return code;
}
//*/

//*
Blockly.Python['train_batch_with_sequence2'] = function(block) {
  var regex = /^[\s]/gi;  // ^: 문자열 시작 , \s: 공백한칸
  var func_statement = Blockly.Python.statementToCode(block, 'func_statement');
  var split_statements = func_statement.split('\n');
  var rep_group_statement = '';
    for(var idx in split_statements) {
        rep_group_statement += split_statements[idx].replace(regex, '').replace(regex, '') + '\n';
    }

  var value_sequence = Blockly.Python.valueToCode(block, 'var_sequence', Blockly.Python.ORDER_ATOMIC);
  var value_sequence_val = Blockly.Python.valueToCode(block, 'var_sequence_val', Blockly.Python.ORDER_ATOMIC);
  var var_epochs = Blockly.Python.valueToCode(block, 'var_epochs', Blockly.Python.ORDER_ATOMIC);
  
  var code = '';
  code += rep_group_statement;
  code += 'model.fit('+value_sequence+', validation_data='+value_sequence_val+', epochs='+var_epochs+', callbacks=[cp_callback], verbose=1) \n';
  return code;
}
//*/