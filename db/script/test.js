var places={
  name:"test",
  me:{
    lat:1234,
    lgt:4567
  }
}
var db=connect("localhost:27017/gdl-dev");
var row=db.place.insert(places,{w:1,ordered:true});

print("Inserted : "+row+" documents");
