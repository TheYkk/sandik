module.exports.rand =  function random () {
    return Math.random().toString(36) + Math.random().toString(36).substring(2);
}