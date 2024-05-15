/* *body{
 background-color: azure;   
} */

.profile-card{
    border:none;

    position:relative;
    overflow:hidden;
    border-radius:8px;
    cursor:pointer;
}

.profile-card:before{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#E1BEE7;
    transform:scaleY(1);
    transition:all 0.5s;
    transform-origin: bottom
}

.profile-card:after{
    
    content:"";
    position:absolute;
    left:0;
    top:0;
    width:4px;
    height:100%;
    background-color:#8E24AA;
    transform:scaleY(0);
    transition:all 0.5s;
    transform-origin: bottom
}

.profile-card:hover::after{
    transform:scaleY(1);
}


.fonts{
    font-size:16px;
    background: rgb(255,255,255);
    background: linear-gradient(156deg, rgba(255,255,255,1) 6%, rgba(234,233,116,1) 100%);
    font-weight: bold;
}

.social-list{
    display:flex;
    list-style:none;
    justify-content:center;
    padding:0;
}

.social-list li{
    padding:10px;
    color:#8E24AA;
    font-size:19px;
}


.buttons button:nth-child(1){
       border:1px solid #8E24AA !important;
       color:#8E24AA;
       height:40px;
}

.buttons button:nth-child(1):hover{
       border:1px solid #8E24AA !important;
       color:#fff;
       height:40px;
       background-color:#8E24AA;
}

.buttons button:nth-child(2){
       border:1px solid #8E24AA !important;
       background-color:#8E24AA;
       color:#fff;
        height:40px;
}
.Admin_Name{
    font-size: 30px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}* {
    font-family: Nunito, sans-serif;
  }
  
  .text-blk {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    line-height: 20px;
    color: white;
    font-size: 14px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
  
  .responsive-container-block {
    min-height: 75px;
    height: fit-content;
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    justify-content: flex-start;
  }
  
  .responsive-container-block.bigContainer {
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(51, 51, 51);
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    margin: 0 0 0 0;
  }
  
  .responsive-container-block.Container {
    max-width: 1320px;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-right: auto;
    margin-bottom: 80px;
    margin-left: auto;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
  }
  
  .responsive-container-block.leftSide {
    width: auto;
    align-items: flex-start;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    flex-direction: column;
    position: static;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    max-width: 300px;
  }
  
  .text-blk.heading {
    font-size: 40px;
    line-height: 64px;
    font-weight: 900;
    color: #00B2EB;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 40px;
    margin-left: 0px;
  }
  
  .text-blk.btn {
    color: rgb(0, 178, 235);
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(160, 121, 0, 0.2) 0px 12px 35px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border-bottom-left-radius: 100px;
    padding-top: 20px;
    padding-right: 50px;
    padding-bottom: 20px;
    padding-left: 50px;
    cursor: pointer;
  }
  
  .responsive-container-block.rightSide {
    width: 675px;
    position: relative;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    display: flex;
    height: 700px;
    min-height: auto;
  }
  
  .number1img {
    margin-top: 39%;
    margin-right: 80%;
    margin-bottom: 29%;
    margin-left: 0px;
    height: 32%;
    width: 20%;
    position: absolute;
  }
  
  .number2img {
    margin-top: 19%;
    margin-right: 42%;
    margin-bottom: 42%;
    margin-left: 23%;
    width: 35%;
    height: 39%;
    position: absolute;
  }
  
  .number3img {
    width: 13%;
    height: 21%;
    position: absolute;
    margin-top: 62%;
    margin-right: 64%;
    margin-bottom: 30%;
    margin-left: 23%;
  }
  
  .number4vid {
    width: 34%;
    height: 33%;
    position: absolute;
    margin-top: 62%;
    margin-right: 27%;
    margin-bottom: 0px;
    margin-left: 39%;
  }
  
  .number5img {
    position: absolute;
    width: 13%;
    height: 21%;
    margin-top: 38%;
    margin-right: 27%;
    margin-bottom: 41%;
    margin-left: 60%;
  }
  
  .number6img {
    position: absolute;
    margin-top: 0px;
    margin-right: 3%;
    margin-bottom: 67%;
    margin-left: 62%;
    width: 35%;
    height: 33%;
  }
  
  .number7img {
    position: absolute;
    width: 25%;
    margin-top: 40%;
    margin-right: 0px;
    margin-bottom: 18%;
    margin-left: 75%;
    height: 42%;
  }
  
  .text-blk.subHeading {
    font-size: 14px;
    line-height: 25px;
  }
  
  @media (max-width: 1024px) {
    .responsive-container-block.Container {
      flex-direction: column-reverse;
    }
  
    .text-blk.heading {
      text-align: center;
      max-width: 370px;
    }
  
    .text-blk.subHeading {
      text-align: center;
    }
  
    .responsive-container-block.leftSide {
      align-items: center;
      max-width: 480px;
    }
  
    .responsive-container-block.rightSide {
      margin-top: 0px;
      margin-right: auto;
      margin-bottom: 100px;
      margin-left: auto;
    }
  
    .responsive-container-block.rightSide {
      margin: 0 auto 70px auto;
    }
  }
  
  @media (max-width: 768px) {
    .responsive-container-block.rightSide {
      width: 450px;
      height: 450px;
    }
  
    .responsive-container-block.leftSide {
      max-width: 450px;
    }
  }
  
  @media (max-width: 500px) {
    .number1img {
      display: none;
    }
  
    .number2img {
      display: none;
    }
  
    .number3img {
      display: none;
    }
  
    .number5img {
      display: none;
    }
  
    .number6img {
      display: none;
    }
  
    .number7img {
      display: none;
    }
  
    .responsive-container-block.rightSide {
      width: 100%;
      height: 250px;
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 100px;
      margin-left: 0px;
    }
  
    .number4vid {
      position: static;
      margin-top: 0px;
      margin-right: auto;
      margin-bottom: 0px;
      margin-left: auto;
      width: 100%;
      height: 100%;
    }
  
    .text-blk.heading {
      font-size: 25px;
      line-height: 40px;
      max-width: 370px;
      width: auto;
    }
  
    .text-blk.subHeading {
      font-size: 14px;
      line-height: 25px;
    }
  
    .responsive-container-block.leftSide {
      width: 100%;
    }
  }