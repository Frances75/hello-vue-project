<template>
    <div class="container-fluid">
    <div class="row header-nav header-fix">
      <div class="col header-opearte">
        <button class="btn btn-gray">←Overview Page</button>
      </div>
      <div class="col header-opearte">
        <button class="btn btn-gray btn-icon"><font-awesome-icon icon="fa-laptop-medical" /></button>
        <button class="btn btn-gray btn-icon"><font-awesome-icon icon="fa-tablet-button" /></button>
        <button class="btn btn-gray btn-icon"><font-awesome-icon icon="fa-mobile-screen" /></button>
      </div>
      <div class="col header-opearte">
        <button class="btn btn-gray btn-icon"><img src="@/assets/img/img_004.png" class="header-img"></button>
        <a class="mx-1 header-download" href="#page-top"><font-awesome-icon icon="fa-download" />Free Download</a>
        <button class="btn btn-gray btn-icon" href="#page-top">X</button>
      </div>
    </div>
    <!--navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark nav-top fixed-top ">
      <div class="container">
        <a class="navbar-brand" href="#">Start BootStrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#service">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">PORTFOLIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#team">TEAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="row home-block-img align-items-center">
      <div class="col mx-5">
        <div class="home-block-img-text fs-5 my-2">Welcome to the world of pumpkins</div>
        <div class="home-block-img-text fs-1 my-2">IT'S NICE TO MEET YOU</div>
        <div class="home-block-img-text my-3"><button class="btn btn-warning btn-lg">TELL ME MORE</button></div>
      </div>
    </div>
    <!--service -->
    <div class="row home-block-service" id="service">
      <div class="col-12 align-self-center py-4 my-4" style="border:solid blue">
        <h2>SERVICES</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="col">
      <div class="row home-block-service-row">
        <div class="col" style="border:solid blue">
          <span class="fa-4x home-block-service-icon"><font-awesome-icon icon="fa-shopping-cart" /></span>
          <h4>E-Commerce</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
        </div>
        <div class="col" style="border:solid blue">
          <span class="fa-4x home-block-service-icon"><font-awesome-icon icon="fa-laptop-medical" /></span>
          <h4>Responsive Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
        </div>
        <div class="col" style="border:solid blue">
          <span class="fa-4x home-block-service-icon"><font-awesome-icon icon="fa-lock" /></span>
          <h4>Web Security</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
        </div>
      </div>
    </div>
    </div>
    <!--portfolio -->
    <div class="row home-block-portfolio" id="portfolio">
      <div class="col-12 align-self-center py-4 my-4" style="border:solid blue">
        <h2>PORTFOLIO</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="col" style="border:solid blue">
        <div class="row home-block-portfolio-list m-2">
          <div class="col-4">
            <div class="home-block-portfolio-item">
              <a><img src="@/assets/img/img_007.png"></a>
              <div>
                <h1>Threads</h1>
                <p>Illustration</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="home-block-portfolio-item">
              <a><img src="@/assets/img/img_007.png"></a>
              <div>
                <h1>Threads</h1>
                <p>Illustration</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="home-block-portfolio-item">
              <a><img src="@/assets/img/img_007.png"></a>
              <div>
                <h1>Threads</h1>
                <p>Illustration</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="home-block-portfolio-item">
              <a><img src="@/assets/img/img_007.png"></a>
              <div>
                <h1>Threads</h1>
                <p>Illustration</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="home-block-portfolio-item">
              <a><img src="@/assets/img/img_007.png"></a>
              <div>
                <h1>Threads</h1>
                <p>Illustration</p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="home-block-portfolio-item">
              <a><img src="@/assets/img/img_007.png"></a>
              <div>
                <h1>Threads</h1>
                <p>Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--about-->
    <div class="row home-block-about" id="about">
      <div class="col-12 align-self-center; py-4 my-2" style="border:solid blue">
        <h2>ABOUT</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
        <div class="time-line">

          <div class="time-line-content">
            <div class="time-line-img-block">
              <img class="time-line-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="time-line-text-left" style="border:solid blue">
              <h4 class="fw-bold">2009-2011</h4>
              <h4 class="fw-bold">Our Humble Beginnings</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>

          <div class="time-line-content">
            <div class="time-line-img-block">
              <img class="time-line-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="time-line-text-right" style="border:solid blue">
              <h4 class="fw-bold">2009-2011</h4>
              <h4 class="fw-bold">Our Humble Beginnings</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>

          <div class="time-line-content">
            <div class="time-line-img-block">
              <img class="time-line-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="time-line-text-left" style="border:solid blue">
              <h4 class="fw-bold">2009-2011</h4>
              <h4 class="fw-bold">Our Humble Beginnings</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>

          <div class="time-line-content">
            <div class="time-line-img-block">
              <img class="time-line-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="time-line-text-right" style="border:solid blue">
              <h4 class="fw-bold">2009-2011</h4>
              <h4 class="fw-bold">Our Humble Beginnings</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
            </div>
          </div>

          <div class="time-line-content">
            <div class="time-line-img-block">
              <img class="time-line-img" src="@/assets/img/img_008.jpg">
            </div>
          </div>
        </div>
    </div>
    <!--our amazing team-->
    <div class="row home-block-team" id="team">
      <div class="col-12 align-self-center py-4 my-4" style="border:solid blue">
        <h2>OUR AMAZING TEAM</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="col">
      <div class="row home-block-team-row">
        <div class="col" style="border:solid blue">
          <div class="col-12 home-block-team-frame" style="border:solid red">
              <img class="home-block-team-img" src="@/assets/img/img_002.jpg">
          </div>
          <h4>Parveen Anand</h4>
          <p>Lead Designer</p>
          <p>social media</p>
        </div>
        <div class="col" style="border:solid blue">
          <div class="col-12 home-block-team-frame" style="border:solid red">
              <img class="home-block-team-img" src="@/assets/img/img_002.jpg">
          </div>
          <h4>Parveen Anand</h4>
          <p>Lead Designer</p>
          <p>social media</p>
        </div>
        <div class="col" style="border:solid blue">
          <div class="col-12 home-block-team-frame" style="border:solid red">
              <img class="home-block-team-img" src="@/assets/img/img_002.jpg">
          </div>
          <h4>Parveen Anand</h4>
          <p>Lead Designer</p>
          <p>social media</p>
        </div>
      </div>
    </div>
    <div class="col-12 home-block-team-footer">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
    </div>
    </div>
    <!--cooperate-->
    <div class="row home-block-cooperate py-5">
      <div class="col-3">
        <img class="home-block-cooperate-img" src="@/assets/img/img_003.jpg">
      </div>
      <div class="col-3">
        <img class="home-block-cooperate-img" src="@/assets/img/img_003.jpg">
      </div>
      <div class="col-3">
        <img class="home-block-cooperate-img" src="@/assets/img/img_003.jpg">
      </div>
      <div class="col-3">
        <img class="home-block-cooperate-img" src="@/assets/img/img_003.jpg">
      </div>
    </div>
    <!--contact us-->
    <div class="row home-block-contact" id="contact">
      <div class="col-12 align-self-center py-4 my-2" style="border:solid blue">
        <h2>CONTACT US</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="col-6 " style="border:solid blue">
        <input class="form-control home-block-contact-text" placeholder="Your Name*">
        <input class="form-control home-block-contact-text" placeholder="Your Email*">
        <input class="form-control home-block-contact-text" placeholder="Your Phone*">
      </div>
      <div class="col-6" style="border:solid blue">
        <textarea class="form-control home-block-contact-text-area" placeholder="Your Message*"></textarea>
      </div>
      <div class="col-12 my-3" style="border:solid yellow; height:50px">
        <button class="btn btn-warning btn-lg">SEND MESSAGE</button>
      </div>
    </div>

  <div class="row home-block-footer">
    <div class="col footer-nav">
      Copyright © Your Website 2023
    </div>
    <div class="col footer-nav">
      twitter fb ig
    </div>
    <div class="col footer-nav">
      兩顆按鈕Privacy Policy Terms of Use
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="scss" scoped>
@import './assets/scss/main.scss';
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: black;
// }
</style>
