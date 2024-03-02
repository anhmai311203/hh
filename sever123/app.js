const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const button = document.querySelector('.btn');

    button.addEventListener('click', function(event) {
        event.preventDefault(); 

       
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        
        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);

        
    });
});

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    
    <link rel="stylesheet" href="style.css">
    
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
    .container {
        display: flex;
        justify-content: center; 
        
        
    }
    
    
    .text-box {
       
        padding: 5px 100px; 
        display: inline-block;
        text-align: center;
        border-radius: 5px;
        background-color:purple;
        width: auto; 
        font-size: 20px;
    }
    .hh{
        font-size: 20px;
    }
    .hihi{
        font-size: 18px;
        color: gray;
    }
    p {
        text-align: center;
        border-radius: 5px;
        font-size: 30px;
        text-align: center;
        
    }
    .mau{
        color: aqua;
    }
    .button-list {
        list-style-type: none;
        text-align: center; 
    }
    
    .button-list li {
        display: inline; 
        margin: 0 5px; 
    }
    
    .button-list li button {
        padding: 10px 30px;
        background-color: #ddd;
        border: none;
        cursor: pointer;
        transition: 0.3s background-color; 
        background-color:black;
        color: white;
    }
    
    .button-list li button:hover {
        background-color:yellow; 
    }
    .bn29 {
        border: none;
        padding: 0.8em 2.5em;
        outline: none;
        color: white;
        font-style: 1.2em;
        position: relative;
        z-index: 1;
        cursor: pointer;
        background: none;
        text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.45);
      }
      
      .bn29:before,
      .bn29:after {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 10em;
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        width: 105%;
        height: 105%;
        content: "";
        z-index: -2;
        background-size: 400% 400%;
        background: linear-gradient(
          60deg,
          #f79533,
          #f37055,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
      }
      
      .bn29:before {
        -webkit-filter: blur(7px);
        filter: blur(7px);
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        -webkit-animation: pulse 10s infinite ease;
        animation: pulse 10s infinite ease;
      }
      
      .bn29:after {
        -webkit-filter: blur(0.3px);
        filter: blur(0.3px);
      }
      
      .bn29:hover:before {
        width: 115%;
        height: 115%;
      }
      .input{
        text-align: center;
        justify-content: center;
        align-items: center;
      }
      .email{
        padding-right: 100px;
        margin-bottom: 20px;
        padding-top: 20px;
      }
      .password{
        margin-bottom: 20px;
        padding-right: 100px;
        padding-top: 20px;
      }
    </style>
  </head>
  <body>
    
  <div class="container">
  <div class="text-box">
      <p class="hh">190x50</p>
  </div>
</div>

<p class=>Best <span class="mau">shared hosting</span> company</p>
<p class="hihi">with this responsive landing page template, you can promote all hosting, domain and email service</p>

<ul class="button-list">
  <li><button>view plans</button></li>
  <li><button>all feature</button></li>
</ul>
<div class="input">
  <input class="email" type="email" placeholder="Nhập email"><br>
  <input class="password" placeholder="Nhập mật khẩu"><br>
  <a href="https://web.facebook.com/quann.minh.904"><button class="bn29">Button</button></a>
</div>

  </body>
</html>
`
