function FileCheck(input) {
    var type   = 'text/plain';
    var size   = 1024; // bytes
    var file   = input.files[0];
    function errMsg(error) {
        alert('Error ' + error);
        document.getElementById('fileInput').value = ""
    }
    if (type.indexOf(file.type) == -1) {
        errMsg('Type: ' + file.type + ' recuired: text/plain (.txt)');
        return false;
    } else {
        if (file.size > size) {
            errMsg('Size: ' + file.size + ' recuired: 1024 or less');
            return false;
        }
    } 
}   