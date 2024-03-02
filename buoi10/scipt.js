setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      disableForReducedMotion: true
    });
  }, 500);
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 3001;
  
  app.use(express.static("public"));
  
  const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  
  server.keepAliveTimeout = 120 * 1000;
  server.headersTimeout = 120 * 1000;
  function kiemtra(){
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    if (name === '') {
        document.getElementById("baoloi").innerHTML="Chua nhap ten";
    return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("baoloi").innerHTML="Email chua dung dinh dang";
    return false;
    }
    alert('Đăng ký thành công!');
}    