function Ajax(url, data){
    this.url = url
    this.data = data
}

Ajax.prototype.get = function (callback){
    this.send("GET", callback)
}

Ajax.prototype.post = function (callback){
    this.send("POST", callback)
}

Ajax.prototype.sethttpserver = function (){
    return new XMLHttpRequest
}

Ajax.prototype.send = function (method, callback){
    var xml = this.sethttpserver()
    xml.open(method, this.url)
    xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xml.onreadystatechange = function (){
        if( xml.readyState == 4 && xml.status == 200 ){
            callback(xml.responseText)
        }
    }
    xml.send(this.data)
}

module.exports = {
    Ajax: Ajax
}
