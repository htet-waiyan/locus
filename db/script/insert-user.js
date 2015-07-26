var john={username:"johnmajor",credentials:{email:"chanpyaeaung.mr@gmail.com",password:"chan123456",}}
var paing={username:"pmko",credentials:{email:"pai@gmail.com",password:"pai12345"}}

var users=[john,paing];

var db=connect("localhost:27017/gdl-dev");
var row=db.user.insert(users,{w:1,ordered:true});

print("Inserted : "+row+" documents");
