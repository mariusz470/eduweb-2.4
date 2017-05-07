function createData(obj) {
    var data = obj;

    return {
        get: function (key) {
            return data[key];
        },
        set: function (key, value) {
            if(key != undefined && value != undefined) {
                return data[key] = value;
            }
            else {
                console.log("Nie podano parametrow");
            }
        }
    }
}

var data = createData({});
data.set("name", "Janek");
console.log( data.get("name") );