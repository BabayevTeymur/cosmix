
const pageLoader=document.querySelector('.page_loader')
const headerContainer=document.querySelector('.header_container')
const thirdButton=document.querySelectorAll('.third_button')
const thirdButtonSection=document.querySelectorAll('.third_button_section')
const timerCounter1=document.querySelector('#timer_counter1')
const timerCounter2=document.querySelector('#timer_counter2')
const timerCounter3=document.querySelector('#timer_counter3')
const timerCounter4=document.querySelector('#timer_counter4')
const progressBar=document.querySelector('.progress_bar')
let totalHeight=document.body.scrollHeight-window.innerHeight

window.addEventListener('load',()=>{
    setTimeout(() => {
        pageLoader.style.display='none'
    }, 14800);
    AOS.init()
})

//////////////////////
const scrollUp=document.querySelector('.scroll_up')

window.addEventListener('scroll',()=>{
    if(window.scrollY>500){
        scrollUp.style.display='flex'
        headerContainer.style.background='rgba(0,0,0,0.8)'
        progressBar.style.top='10vh'
    }else{
        scrollUp.style.display='none'
        headerContainer.style.background='none'
        progressBar.style.top='0'
    }
    let progressHeight=(window.pageYOffset/totalHeight)*100
    progressBar.style.width=progressHeight + '%'
})

scrollUp.addEventListener('click',()=>{
    window.scroll({
        top:0,
        behavior: "smooth"
    })
})

for(let i=0;i<thirdButton.length;i++){
    thirdButton[i].addEventListener('click',()=>{
        let checker=thirdButton[i].getAttribute('data-name')
        for(let i=0;i<thirdButtonSection.length;i++){
            let checkerName=thirdButtonSection[i].getAttribute('data-name')
            thirdButtonSection[0].classList.remove('active')
            if(checker===checkerName){
                thirdButtonSection[i].classList.add('show')
                thirdButtonSection[i].classList.remove('hide')
            }else{
                thirdButtonSection[i].classList.add('hide')
                thirdButtonSection[i].classList.remove('show')
            }
        }
    })
}

let count1=0
let count2=0
let count3=0
let count4=0

let happyClients=setInterval(()=>{
    count1+=1;
    timerCounter1.innerHTML=count1
    if(count1===365){
        clearInterval(happyClients)
    }
},10)

let complateProjects=setInterval(()=>{
    count2+=1;
    timerCounter2.innerHTML=count2
    if(count2===73987){
        clearInterval(complateProjects)
    }
},1)

let cupsOfCoffe=setInterval(()=>{
    count3+=1;
    timerCounter3.innerHTML=count3
    if(count3===297343){
        clearInterval(cupsOfCoffe)
    }
},1)

let linesOfCode=setInterval(()=>{
    count4+=1;
    timerCounter4.innerHTML=count4
    if(count4===9823196){
        clearInterval(linesOfCode)
    }
},1)


const swiper = new Swiper (".mySwiper",{
    autoplay : {
        delay:4000,
        disableOnInteraction: false,
    },
    loop: true,
    // grabCursor:true,
    navigation:{
        nextEl: ".ehmed",
        prevEl: ".memmed",
    },
    spaceBetween: 30,
    breakpoints:{
        576: {
            slidesPerView:1
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
})

const swiper2 = new Swiper (".mySwiper-1",{
    autoplay : {
        delay:2000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor:true,
    navigation:{
        nextEl: ".ehmed",
        prevEl: ".memmed",
    },
    spaceBetween: 60,
    breakpoints:{
        576: {
            slidesPerView:5,
        },
        992:{
            slidesPerView:5,
        },
        1200:{
            slidesPerView:5,
        }
    }
})

const fourSectionContainer=document.querySelector('.four_section_container')

// fetch('./index.json')
//     .then(pros4=>pros4.json())
//     .then(data=>{
//         data.forEach(like => {
//            fourSectionContainer.innerHTML+=`<div class="four_section_cards">
//            <img src="${like.img}" alt="">
//            <div class="four_section_card">
            
//             <p class="project_title">${like.title}</p>
//             </div>
//        </div>` 
//         });
//     })

    const projectTitle=document.querySelectorAll('.project_title')
    const fourSectionCards=document.querySelectorAll('.four_section_cards')

    function inpTest(e){
        for (let i = 0; i < projectTitle.length; i++) {
            if(projectTitle[i].innerHTML.includes(e.target.value)){
                fourSectionCards[i].style.display='block'
            }else{
                fourSectionCards[i].style.display='none'
            }
        }
    }
////////////////////////////////////////////
var sketchProc = function(processingInstance) {
    with (processingInstance) {
      size(600, 600); 
      frameRate(60);    
      smooth();
      
  var Logo = (function() {
      Logo = function(args) {
          this.scale = args.scale || 1.0;
          this.x = args.x || 600 * 0.5 * this.scale;
          this.y = args.y || 600 * 0.4 * this.scale;
          this.colors = {
              back: color(220, 40, 75),
              outline: color(5, 5, 5),
              from: color(102, 99, 98),
              to: color(13, 13, 13),
              text: color(35, 40, 60)
          };
          this.font = args.font || createFont("Trebuchet MS");
          this.gray = {
              words: "C E L T  S T U D E N T",
              index: 0,
              timer: 0,
              delay: 2
          };
          this.prod = {
              opacity: 0,
              y: height * 1.2,
          };
          this.img = undefined;
          this.imgs = [];
          this.splits = {
              left: undefined,
              right: undefined
          };
          this.timer = 0;
          this.states = {
              a: {
                  delay: 30,
                  duration: 120,
              },
              b: {
                  delay: 30
              },
              c: {
                  delay: 55
              },
              d: {
                  delay: 45,
                  x: 0
              }
          };
          this.state = "a";
          this.done = false;
          this.complete = false;
          this.hover = false;
          this.init();
      };
      Logo.prototype = {
          init: function() {
              var gx = createGraphics(600, 600, P2D);
              
              gx.background(0, 0);
              gx.fill(255);
              //inner
              gx.beginShape();
                  gx.vertex(300, 137);
                  gx.vertex(377, 150);
                  gx.vertex(454, 118);
                  gx.vertex(410, 213);
                  gx.vertex(429, 202);
                  gx.vertex(464, 279);
                  gx.vertex(396, 361);
                  gx.vertex(381, 316);
                  gx.vertex(341, 399);
                  gx.vertex(300, 443);
                  gx.vertex(259, 399);
                  gx.vertex(219, 316);
                  gx.vertex(204, 361);
                  gx.vertex(136, 279);
                  gx.vertex(171, 202);
                  gx.vertex(190, 213);
                  gx.vertex(146, 118);
                  gx.vertex(223, 150);
              gx.endShape(CLOSE);
              
              var shape = gx.get(115, 90, 370, 355);
              
              gx.noStroke();
              for(var i = 90; i <= 445; i++) { 
                  gx.fill(gx.lerpColor(this.colors.to, this.colors.from, i/445));
                  gx.rect(115, i, 370, 1);
              }
              
              gx.stroke(150, 20);
              gx.strokeWeight(1);
              for(var i = 0; i < 200; i++) {
                  gx.line(random(115, 485), random(90, 445), random(115, 485), random(90, 445));
              }
              
              gx.filter(BLUR, 2.5);
              
              var grad = gx.get(115, 90, 370, 355);
              
              grad.mask(shape);
              
              gx.background(this.colors.back);
              
              gx.background(0, 0);
  
              gx.noStroke();
              gx.fill(this.colors.outline);
              
              //outer
              gx.beginShape();
                  gx.vertex(300, 126);
                  gx.vertex(376, 138);
                  gx.vertex(480, 92);
                  gx.vertex(437, 187);
                  gx.vertex(482, 283);
                  gx.vertex(396, 364);
                  gx.vertex(383, 344);
                  gx.vertex(354, 404);
                  gx.vertex(300, 444);
                  gx.vertex(246, 404);
                  gx.vertex(217, 344);
                  gx.vertex(204, 364);
                  gx.vertex(118, 283);
                  gx.vertex(163, 187);
                  gx.vertex(120, 92);
                  gx.vertex(224, 138);
              gx.endShape(CLOSE);
  
              gx.image(grad, 115, 90);
  
              fill(this.colors.outline);
              //nose
              gx.beginShape();
                  gx.vertex(300, 372);
                  gx.vertex(323, 367);
                  gx.vertex(320, 382);
                  gx.vertex(300, 400);
                  gx.vertex(280, 382);
                  gx.vertex(277, 367);
              gx.endShape(CLOSE);
              
              //left eye
              gx.beginShape();
                  gx.vertex(324, 341);
                  gx.vertex(320, 268);
                  gx.vertex(428, 231);
                  gx.vertex(378, 290);
                  gx.vertex(358, 278);
                  gx.vertex(372, 280);
                  gx.vertex(390, 257);
                  gx.vertex(334, 277);
              gx.endShape(CLOSE);
              
              //right eye
              gx.beginShape();
                  gx.vertex(276, 341);
                  gx.vertex(280, 268);
                  gx.vertex(172, 231);
                  gx.vertex(222, 290);
                  gx.vertex(244, 278);
                  gx.vertex(228, 280);
                  gx.vertex(210, 257);
                  gx.vertex(266, 277);
              gx.endShape(CLOSE);
  
              this.img = gx.get(115, 90, 370, 355);
  
              //generate pieces of image
              for(var i = 0; i < 10; i++) {
                  for(var j = 0; j < 10; j++) {
                      this.imgs.push({
                          img: gx.get(115 + 37 * i, 90 + 35.5 * j, 37, 35.5),
                          w: 37,
                          h: 35.5,
                          dx: 115 + 37 * i + 18.5,
                          dy: 90 + 35.5 * j + 17.75,
                          x: random(-width, width * 2),
                          y: random(-height, height * 2),
                          angle: ~~random(3600)
                      });
                  }
              }
          },
          draw: function() {
              if(!this.complete) {
                  pushMatrix();
                      scale(this.scale);
                      pushStyle();
                          switch(this.state) {
                              case "a":
                                  background(this.colors.back);
                                  
                                  if(this.timer++ >= this.states.a.delay) {
                                      for(var i = 0; i < this.imgs.length; i++) {
                                          var item = this.imgs[i];
                                          
                                          item.x = lerp(item.x, item.dx, 0.1);
                                          item.y = lerp(item.y, item.dy, 0.1);
                                          item.angle = lerp(item.angle, 0, 0.1);
                                          
                                          imageMode(CENTER);
                                          
                                          pushMatrix();
                                              translate(item.x, item.y - 28);
                                              rotate(radians(item.angle));
                                              image(item.img, 0, 0, item.w, item.h);
                                          popMatrix();
                                      }
  
                                      if(this.timer >= this.states.a.duration) {
                                          this.state = "b";
                                          this.timer = 0;
                                      }
                                  }
                                  break;
                              case "b":
                                  background(this.colors.back);
                                  
                                  imageMode(CENTER);
                                  image(this.img, this.x / this.scale, this.y / this.scale);
                                  
                                  if(this.timer++ >= this.states.b.delay) {
                                      textFont(this.font);
                                      textAlign(CENTER, CENTER);
                                      textSize(40);
                                      fill(this.colors.text);
                                      
                                      if(this.gray.index < this.gray.words.length && this.gray.timer++ >= this.gray.delay) {
                                          this.gray.index++;
                                          this.gray.timer = 0;
                                      }
                                      
                                      text(this.gray.words.substring(0, this.gray.index), this.x / this.scale, this.y * 2 / this.scale);
  
                                      this.prod.opacity = constrain(this.prod.opacity + 7, 0, 255);
                                      this.prod.y = ~~lerp(this.prod.y, this.y * 2.1, 0.030);
                                      textSize(30);
                                      fill(this.colors.text, this.prod.opacity);
                                      text("P R E S E N T S", this.x / this.scale, this.prod.y / this.scale);
                                  }
                                  
                                  if(this.gray.index === this.gray.words.length) {
                                      this.state = "c";
                                      this.timer = 0;
                                  }
                                      
                                  break;
                              case "c":
                                  background(this.colors.back);
                                  
                                  imageMode(CENTER);
                                  image(this.img, this.x / this.scale, this.y / this.scale);
                                  
                                  textFont(this.font);
                                  textAlign(CENTER, CENTER);
                                  textSize(40);
                                  fill(this.colors.text);
                                  text(this.gray.words.substring(0, this.gray.index), this.x / this.scale, this.y * 2 / this.scale);
                                  
                                  if(this.timer++ >= this.states.c.delay) {
                                      this.prod.opacity = constrain(this.prod.opacity - 5, 0, 255);
                                  }
                                  
                                  textSize(30);
                                  fill(this.colors.text, this.prod.opacity);
                                  this.prod.y = constrain(~~lerp(this.prod.y, this.y * 2.1, 0.035), 530 * this.scale);
                                  text("P R E S E N T S", this.x / this.scale, this.prod.y / this.scale);
                                  
                                  if(this.prod.opacity === 0) {
                                      //get split image for next state
                                      this.splits.left = get(0, 0, width / 2, height);
                                      this.splits.right = get(width / 2, 0, width / 2, height);
                                      
                                      this.state = "d";
                                      this.timer = 0;
                                  }
                                  
                                  break;
                              case "d":
                                  scale(1 / this.scale);
                                  
                                  imageMode(CORNER);
                                  
                                  if(this.timer++ >= this.states.d.delay) {
                                      this.states.d.x = constrain(this.states.d.x + 7, 0, width / 2);
                                  }
                                  
                                  image(this.splits.left, -this.states.d.x, 0);
                                  image(this.splits.right, width / 2 + this.states.d.x, 0);
                                  
                                  if(this.states.d.x >= width / 2) {
                                      this.completed = true;
                                  }
                                  
                                  if(this.timer === this.states.d.delay) {
                                      this.done = true;
                                  }
      
                                  break;
                          }
                      popStyle();
                  popMatrix();
              }
          }
      };
      return Logo;
  })();
  
  var Sushi = (function() {
      Sushi = function() {
          this.timer = 0;
          this.speed = 10;
          this.arms = {
              right: {
                  x: 210,
                  y: 290,
                  offset: 60,
                  upper: {
                      angle: 90,
                      dist: 30,
                      length: 70
                  },
                  lower: {
                      angle: 90,
                      dist: 20,
                      length: 70
                  }
              },
              left: {
                  x: 390,
                  y: 290,
                  offset: 60,
                  upper: {
                      angle: 80,
                      dist: 30,
                      length: 70
                  },
                  lower: {
                      angle: 100,
                      dist: 20,
                      length: 70
                  }
              }
          };
          this.legs = {
              right: {
                  x: 240,
                  y: 515,
                  offset: 55,
                  upper: {
                      angle: 20,
                      dist: -20,
                      length: 80
                  },
                  lower: {
                      angle: -10,
                      dist: 10,
                      length: 70
                  }
              },
              left: {
                  x: 360,
                  y: 515,
                  offset: 60,
                  upper: {
                      angle: -20,
                      dist: 20,
                      length: 80
                  },
                  lower: {
                      angle: 10,
                      dist: -10,
                      length: 70
                  }
              }
          };
          this.chopsticks = {
              dir: 1,
              y: -250,
              left: {
                  angle: -20
              },
              right: {
                  angle: 20
              }
          };
          this.state = 0; //0: slide in, 1: chopsticks, 2: sushi up, 3: slide out
          this.xoff = -800;
          this.yoff = 0;
          this.eyeyoff = 0;
          this.liftoff = false;
          this.shock = false;
          this.symbols = [];
          this.logo = new Logo({});
      };
      Sushi.prototype = {
          drawSymbols: function() {
              for(var i = this.symbols.length - 1; i >= 0; i--) {
                  var symbol = this.symbols[i];
                  
                  pushMatrix();
                      translate(symbol.x, symbol.y);
                      rotate(radians(symbol.angle));
                      
                      if(symbol.type === 0) {
                          noStroke();
                          fill(20, symbol.opacity);
                          ellipse(0, 0, 14, 15);
                          stroke(20, symbol.opacity);
                          strokeWeight(2);
                          line(6, -2, 6, -18);
                          line(6, -18, 10, -17);
                      }
                      else {
                          noStroke();
                          fill(20, symbol.opacity);
                          ellipse(0, 0, 12, 13);
                          ellipse(20, 0, 12, 13);
                          stroke(20, symbol.opacity);
                          strokeWeight(2);
                          line(5, -2, 5, -18);
                          line(25, -2, 25, -18);
                          line(5, -18, 25, -18);
                      }
                  popMatrix();
                  
                  symbol.opacity += 4 * symbol.dir;
                  symbol.x+= symbol.vx;
                  symbol.y-= symbol.vy;
                  symbol.angle+= symbol.rot;
                  
                  if(symbol.opacity >= 240) {
                      symbol.dir = -1;
                  }
                  else if(symbol.opacity <= 0) {
                      this.symbols.splice(i, 1);
                  }
              }
          },
          update: function() {
              //add symbols
              if(this.timer % 30 === 0) {
                  this.symbols.push({
                      x: random() < 0.5 ? random(70, 150) : random(450, 530),
                      y: 355,
                      vx: random(-0.5, 0.5),
                      vy: random(1.0, 2.0),
                      opacity: 10,
                      dir: 1,
                      type: random(2) | 0,
                      angle: 0,
                      rot: random(-0.8, 0.8)
                  });
              }
              
              switch(this.state) {
                  case 0: //slide in
                      this.xoff = lerp(this.xoff, 0, 0.07);
                      
                      if(this.timer > 300) {
                          this.state = 1;
                      }
                      
                      break;
                  case 1: //chopsticks come down
                      
                      if(this.chopsticks.dir === 1) {
                          if(this.chopsticks.y > 159) {
                              this.chopsticks.dir = 0;
                          }
                      }
                      else if(this.chopsticks.dir === 0) {
                          this.chopsticks.left.angle = lerp(this.chopsticks.left.angle, 10, 0.1);
                          this.chopsticks.right.angle = lerp(this.chopsticks.right.angle, -10, 0.1);
                          
                          if(this.timer > 370) {
                              this.chopsticks.dir = -1;
                              this.liftoff = true;
                          }
                          
                          if(this.timer > 360) {
                              this.shock = true;
                          }
                      }
                      
                      this.chopsticks.y = constrain(this.chopsticks.y + 10 * this.chopsticks.dir, -250, 160);
                      
                      if(this.liftoff) {
                          this.yoff-= 10;
                          
                          this.arms.right.upper.angle = lerp(this.arms.right.upper.angle, 10, 0.1);
                          this.arms.right.lower.angle = lerp(this.arms.right.lower.angle, 10, 0.1);
                          
                          this.arms.left.upper.angle = lerp(this.arms.left.upper.angle, 160, 0.1);
                          this.arms.left.lower.angle = lerp(this.arms.left.lower.angle, 170, 0.1);
                      }
                      
                      if(this.timer > 450) {
                          this.state = 2;
                      }
                      
                      break;
                  case 2: //sushi is lifted up
                  
                      if(this.timer > 500) {
                          this.state = 3;
                          
                          this.chopsticks.left.angle = -20;
                          this.chopsticks.right.angle = 20;
                          this.chopsticks.y = -250;
                          this.chopsticks.dir = 1;
                          this.liftoff = false;
                      }
                      
                      break;
                  case 3: //slide out
                      this.xoff = lerp(this.xoff, 650, 0.07);
                      
                      if(this.xoff > 640) {
                          this.timer = 0;
                          this.state = 0;
                          this.xoff = -800;
                          this.yoff = 0;
                          this.eyeyoff = 0;
                          this.shock = false;
                          
                          this.arms.right.upper.angle = 90;
                          this.arms.right.lower.angle = 90;
                          
                          this.arms.left.upper.angle = 80;
                          this.arms.left.lower.angle = 100;
                      }
                      
                      break;
              }
          },
          draw: function() {
              background(220, 40, 75);
      
              this.timer++;
              
              var sine = sin(radians(this.timer * this.speed));
              var cosine_half = cos(radians(this.timer * this.speed * 0.5));
  
              pushMatrix();
                  translate(this.xoff, 40);
                  
                  this.drawSymbols();
                  
                  //ground
                  noStroke();
                  fill(40, 40, 40, 100);
                  rect(20, 515, 560, 10, 20);
              
                  //sushi
                  pushMatrix();
                      translate(0, this.yoff);
                  
                      //legs
                      stroke(35, 40, 60);
                      strokeWeight(15);
                      strokeCap(ROUND);
                      //right leg
                      var rightLeg = this.legs.right;
                      pushMatrix();
                          translate(rightLeg.x, rightLeg.y);
                          line(-15, 0, 0, 0); //foot
                          rotate(radians(rightLeg.lower.angle + (this.liftoff ? 0 : sin(radians((this.timer + rightLeg.offset) * this.speed)) * rightLeg.lower.dist)));
                          line(0, 0, 0, -rightLeg.lower.length);
                          translate(0, -rightLeg.lower.length);
                          rotate(radians(rightLeg.upper.angle + (this.liftoff ? 0 : sin(radians((this.timer + rightLeg.offset) * this.speed)) * rightLeg.upper.dist)));
                          line(0, 0, 0, -rightLeg.upper.length);
                      popMatrix();
                      //left leg
                      var leftLeg = this.legs.left;
                      pushMatrix();
                          translate(leftLeg.x, leftLeg.y);
                          line(0, 0, 15, 0); //foot
                          rotate(radians(leftLeg.lower.angle + (this.liftoff ? 0 : sin(radians((this.timer + leftLeg.offset) * this.speed)) * leftLeg.lower.dist)));
                          line(0, 0, 0, -leftLeg.lower.length);
                          translate(0, -leftLeg.lower.length);
                          rotate(radians(leftLeg.upper.angle + (this.liftoff ? 0 : sin(radians((this.timer + leftLeg.offset) * this.speed)) * leftLeg.upper.dist)));
                          line(0, 0, 0, -leftLeg.upper.length);
                      popMatrix();
                      
                      //body/arms/etc.
                      pushMatrix();
                          translate(300, 300 + sine * 10);
                          if(!this.liftoff) {
                              rotate(radians(cosine_half * 10));
                          }
                          translate(-300, -300);
                      
                          //arms
                          stroke(103, 135, 135);
                          stroke(35, 40, 60);
                          strokeWeight(15);
                          strokeCap(ROUND);
                          //right arm
                          var rightArm = this.arms.right;
                          pushMatrix();
                              translate(rightArm.x, rightArm.y);
                              rotate(radians(rightArm.upper.angle + (this.liftoff ? 0 : sin(radians((this.timer + rightArm.offset) * this.speed * 0.5)) * rightArm.upper.dist)));
                              line(0, 0, 0, rightArm.upper.length);
                              translate(0, rightArm.upper.length);
                              rotate(radians(rightArm.lower.angle + (this.liftoff ? 0 : cos(radians((this.timer + rightArm.offset) * this.speed)) * rightArm.lower.dist)));
                              line(0, 0, 0, rightArm.lower.length);
                          popMatrix();
                          //left arm
                          var leftArm = this.arms.left;
                          pushMatrix();
                              translate(leftArm.x, leftArm.y);
                              rotate(radians(leftArm.upper.angle + (this.liftoff ? 0 : sin(radians((this.timer + leftArm.offset) * this.speed * 0.5)) * leftArm.upper.dist)));
                              line(0, 0, 0, -leftArm.upper.length);
                              translate(0, -leftArm.upper.length);
                              rotate(radians(leftArm.lower.angle - (this.liftoff ? 0 : cos(radians((this.timer + leftArm.offset) * this.speed)) * leftArm.lower.dist)));
                              line(0, 0, 0, leftArm.lower.length);
                          popMatrix();
                          
                          //bits of rice below
                          fill(255);
                          noStroke();
                          ellipse(225, 391, 14, 12);
                          ellipse(243, 393, 13, 17);
                          ellipse(261, 396, 14, 14);
                          ellipse(278, 400, 14, 14);
                          ellipse(296, 398, 14, 14);
                          ellipse(326, 397, 16, 14);
                          ellipse(346, 397, 16, 14);
                          ellipse(370, 392, 14, 14);
                          ellipse(387, 387, 12, 12);
                          
                          //body
                          noStroke();
                          fill(35, 40, 60);
                          rect(200, 200, 200, 180);
                          ellipse(300, 380, 200, 40);
                          fill(220, 220, 230);
                          ellipse(300, 200, 200, 20 + sine * 5);
                          fill(230, 90, 100);
                          ellipse(300, 200, 130, 8 + sine * 5);
                          
                          //bits of rice on head
                          fill(255);
                          ellipse(360 - cosine_half * 5, 192 - sine * 2.5, 15, 12);
                          ellipse(339 - cosine_half * 5, 190 - sine * 2.5, 15, 12);
                          ellipse(319 - cosine_half * 5, 189 - sine * 2.5, 15, 12);
                          ellipse(386 - cosine_half * 0, 197 - sine * 0.5, 14, 12);
                          ellipse(377 - cosine_half * 5, 192 - sine * 2.5, 15, 10);
                          ellipse(300 - cosine_half * 5, 188 - sine * 2.5, 15, 10);
                          ellipse(282 - cosine_half * 5, 188 - sine * 2.5, 14, 11);
                          ellipse(265 - cosine_half * 5, 189 - sine * 2.5, 14, 11);
                          ellipse(248 - cosine_half * 5, 191 - sine * 2.5, 12, 13);
                          ellipse(230 - cosine_half * 2, 192 - sine * 1.10, 13, 12);
                          ellipse(213 - cosine_half * 0, 197 - sine * 0.5, 14, 12);
                          ellipse(225 - cosine_half * -5, 200 - sine * -1.0, 14, 12);
                          ellipse(244 - cosine_half * -5, 201 - sine * -1.0, 14, 11);
                          ellipse(263 - cosine_half * -8, 202 - sine * -1.0, 14, 11);
                          ellipse(282 - cosine_half * -8, 202 - sine * -2.0, 15, 11);
                          ellipse(300 + cosine_half * 10, 203 + sine * 2.5, 15, 10);
                          ellipse(320 + cosine_half * 10.0, 203 + sine * 2.5, 15, 10);
                          ellipse(342 + cosine_half * 10, 202 + sine * 2.5, 14, 12);
                          ellipse(359 + cosine_half * 10.0, 201 + sine * 2.45, 14, 10);
                          ellipse(374 + cosine_half * 10.0, 200 + sine * 2.40, 14, 10);
                  
                          pushMatrix();
                              translate(cosine_half * 15, sine * 2);
                              
                              //eyes
                              fill(255, 255, 255);
                              ellipse(275, 250, 40, 40);
                              ellipse(325, 250, 40, 40);
                              fill(20);
                              ellipse(275, 250, 18, 18);
                              ellipse(325, 250, 18, 18);
                              //shutters
                              if(this.shock) {
                                  this.eyeyoff = constrain(this.eyeyoff + 2, this.eyeyoff, 30);
                              }
                              fill(35, 40, 60);
                              rect(250, 255 + this.eyeyoff, 50, 30);
                              rect(300, 255 + this.eyeyoff, 50, 30);
      
                              //mouth
                              if(this.liftoff) {
                                  //mouth shocked
                                  fill(20);
                                  rect(280, 285, 40, 30);
                                  fill(255, 255, 255);
                                  arc(300, 285, 40, 30, radians(180), radians(360));
                                  fill(247, 79, 99);
                                  arc(300, 320, 40, 30, radians(180), radians(360));
                                  arc(300, 320, 40, 20, 0, radians(180));
                              }
                              else {
                                  //mouth normal
                                  fill(20);
                                  rect(270, 280, 60, 30);
                                  fill(255, 255, 255);
                                  rect(270, 280, 60, 10);
                                  fill(247, 79, 99);
                                  ellipse(300, 303, 22, 10);
                                  noFill();
                                  stroke(35, 40, 60);
                                  strokeCap(SQUARE);
                                  strokeWeight(20);
                                  arc(300, 280, 70, 70, 0, radians(180));
                              }
  
                          popMatrix();
                          
                      popMatrix();
                      
                  popMatrix();
  
                  //left speaker
                  noStroke();
                  fill(65, 50, 65);
                  rect(70, 380, 90, 140, 5, 0, 0, 5);
                  fill(60, 40, 50);
                  rect(159, 380, 25, 140, 0, 5, 5, 0);
                  ellipse(115, 425, 60 + sine * 2, 60 + sine * 2);
                  ellipse(115, 480, 35 - sine * 2, 35 - sine * 2);
                  rect(85, 508, 60, 5, 10);
                  
                  //right speaker
                  fill(65, 50, 65);
                  rect(440, 380, 90, 140, 0, 5, 5, 0);
                  fill(60, 40, 50);
                  rect(415, 380, 26, 140, 5, 0, 0, 5);
                  ellipse(485, 425, 60 + sine * 2, 60 + sine * 2);
                  ellipse(485, 480, 35 - sine * 2, 35 - sine * 2);
                  rect(455, 508, 60, 5, 10);
                  
                  //chopsticks
                  if(this.state === 1) {
                      fill(35, 30, 30);
                      pushMatrix();
                          translate(185, this.chopsticks.y);
                          rotate(radians(this.chopsticks.right.angle));
                          quad(-9, -200, 9, -200, 4, 200, -4, 200);
                      popMatrix();
                      pushMatrix();
                          translate(415, this.chopsticks.y);
                          rotate(radians(this.chopsticks.left.angle));
                          quad(-9, -200, 9, -200, 4, 200, -4, 200);
                      popMatrix();
                  }
              
              popMatrix();
          },
          dance: function() {
              if(this.logo.done) {
                  this.update();
                  this.draw();
              }
              
              this.logo.draw();
          }
      };
      return Sushi;
  })();
  
  var sushi = new Sushi();
  
  draw = function() {
      sushi.dance();
  };
      
    }
  }
  
  var canvas = document.getElementById("canvas"); 
  var processingInstance = new Processing(canvas, sketchProc);