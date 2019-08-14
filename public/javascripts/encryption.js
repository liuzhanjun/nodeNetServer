var CryptoJS = require("crypto-js");

function encryption() {
    const key = "1JS3m2vNZuVlHXcF"
    const iv = "1JS3m2vNZuVlHXcF"
    var key_ = CryptoJS.enc.Utf8.parse(key);
    var iv_ = CryptoJS.enc.Utf8.parse(iv);
    this.encryptinof = function (values) {

        var encrypted = CryptoJS.AES.encrypt(values, key_, {
            iv: iv_,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
        return encrypted.toString();
    }

    this.decryptinof = function (value) {

        // 解密
        var decrypted = CryptoJS.AES.decrypt(value, key_, {
            iv: iv_,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypted);
    }
}

module.exports = encryption;