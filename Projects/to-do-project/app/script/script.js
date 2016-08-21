$('document').ready(function() {

  var $newList = $('#newList');
  var $newTaskForm = $('#newTaskForm');
  var $newItemInput = $('#newItemInput');
  var $saveNewItem = $('#saveNewItem');
  var $cancelTodo = $('#cancel');
  var $addTodo = $('#add-todo');

  $newTaskForm.hide();

  var taskList = [];

  var Task = function(task) {
    this.task = task;
    this.id = 'new';
  };

  var addTask = function(task) {
    if(task) {
      task = new Task(task);
      taskList.push(task);
      $newItemInput.val('');

      $newList.append(
        '<a href="#finish" class="" id="item">' +
        '<li class="list-group-item">' +
        '<h3>' + task.task + '</h3>'+
        '<span class="arrow pull-right">' +
        '<i class="glyphicon glyphicon-arrow-right">' +
        '</span>' +
        '</li>' +
        '</a>'
      );

      $newTaskForm.slideToggle('fast', 'linear');
    }
  };

  var advanceTask = function(task) {
    var modified = task.innerText.trim();
    for (var i = 0; i < taskList.length; i++) {
      if (taskList[i].task === modified) {
        if (taskList[i].id === 'new') {
          taskList[i].id = 'inProgress';
        } else if (taskList[i].id === 'inProgress') {
          taskList[i].id = 'archived';
        } else {
          taskList.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
    this.id = 'inProgress';
    $('#currentList').append(this.outerHTML);
  });

  $(document).on('click', '#inProgress', function (e) {
    e.preventDefault();
    var task = this;
    task.id = "archived";
    var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    advanceTask(task);
    $('#archivedList').append(changeIcon);
  });

  $saveNewItem.on('click', function() {
    var task = $newItemInput.val().trim();
    addTask(task);
  });

  $(document).on('click', '#archived', function (e) {
    e.preventDefault();
    var task = this;
    advanceTask(task);
  });

  $addTodo.on('click', function() {
    $newTaskForm.fadeToggle('fast', 'linear');
  });

  $cancelTodo.on('click', function() {
    $newTaskForm.fadeToggle('fast', 'linear');
  });


});
