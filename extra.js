
function extrainit(biwasyuni){
    biwasyuni.add_module("js-hello", sayhello);
}

function sayhello(){
    console.log("Hello (from JS).\n");
}

module.exports = {extrainit:extrainit};
