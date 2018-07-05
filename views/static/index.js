$(function(){
  // $.ajax({
  //   url: '/addUser',
  //   type: 'POST',
  //   data: {
  //     name: 'JJ',
  //     age: 25
  //   },
  //   success: function(res){
  //     console.log(res)
  //   }
  // });

  $.ajax({
    url: '/getUser',
    type: 'get',
    data: {
     
    },
    success: function(res){
      console.log(res)
    }
  });

  // $.ajax({
  //   url: '/delUser/5b384fa7f37fea1000e8056c',
  //   type: 'delete',
  //   data: {
  //   },
  //   success: function(res){
  //     console.log(res)
  //   }
  // });
})