function test_no_proto() {
    this.name = 'testtesttesttesttesttesttest'
    this.num  = 123456
    this.get_name = function() {
        return this.name
    }
    this.set_name = function(name) {
        this.name = name
    }
    this.get_num = function() {
        return this.num
    }
    this.set_num = function(num) {
        this.num = num
    }
}

 tables = {}
// 391056KB
for (i=0; i<1000000; i++) {
    tables[i] = new test_no_proto()
}


/*
function test_proto() {
    this.name = 'testtesttesttesttesttesttest'
    this.num  = 123456
}
test_proto.prototype.get_name = function() {
    return this.name
}
test_proto.prototype.set_name = function(name) {
    this.name = name
}
test_proto.prototype.get_num = function() {
    return this.num
}
test_proto.prototype.set_num = function(num) {
    this.num = num
}

tables = {}
// 80544KB
for (i=0; i<1000000; i++) {
    tables[i] = new test_proto()
}
*/

setTimeout( function(){
    console.log("over")
}, 10000)
