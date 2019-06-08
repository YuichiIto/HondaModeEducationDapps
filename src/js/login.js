//import {Datastore} from 'nedb';
//var db = new DataStore();
//db.insert([{username:"teacher1",mailAddress:"teacher1@test.com",password:"teacher1"},
//           {username:"student1",mailAddress:"student1@test.com",password:"student1"}]);

$(document).ready(function()
{
    $('#submit').on('click',function()
    {
            alert($('#mailAddress').val());
            alert($('#password').val());
        if (($('#mailAddress').val() == 'teacher1@test.com'&&$('#password').val() == 'teacher1')
            ||($('#mailAddress').val() == 'student1@test.com'&&$('#password').val() == 'student1')){
                                alert("ユーザが見つかったよ");
               } else {
                                alert("ユーザが見つからなかったよ");
                            }
        
    })
})
