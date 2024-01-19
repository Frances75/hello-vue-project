<template>
  <div class="container-fluid" style="border:solid #4F4F4F">
    <div class="row">
      <div class="col-5 header-nav d-flex justify-content-start">
        <a class="ms-2">←Overview Page</a>
      </div>
      <div class="col-2 header-nav d-flex justify-content-center">
        <a class="mx-2 icon"><font-awesome-icon icon="fa-laptop-medical" /></a>
        <a class="mx-2 icon"><font-awesome-icon icon="fa-tablet-button" /></a>
        <a class="mx-2 icon"><font-awesome-icon icon="fa-mobile-screen" /></a>
      </div>
      <div class="col-5 header-nav d-flex justify-content-end">
        <a class="mx-1"><img src="@/assets/img/img_004.png" style="width:20px"></a>
        <a class="mx-1 header-download" href="#page-top"><font-awesome-icon icon="fa-download" />Free Download</a>
        <a class="mx-1" href="#page-top">X</a>
      </div>
    </div>
    <!--navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Start BootStrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">PORTFOLIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">TEAM</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CONTACT</a>
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
    <div class="row home-block-service">
      <div class="col-12 align-self-center py-4 my-4" style="border:solid blue">
        <h2>SERVICES</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
        <div class="col home-block-service-item" style="border:solid blue">
          <span class="fa-4x home-block-service-icon"><font-awesome-icon icon="fa-shopping-cart" /></span>
          <h4>E-Commerce</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
        </div>
        <div class="col home-block-service-item" style="border:solid blue">
          <span class="fa-4x home-block-service-icon"><font-awesome-icon icon="fa-laptop-medical" /></span>
          <h4>Responsive Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
        </div>
        <div class="col home-block-service-item" style="border:solid blue">
          <span class="fa-4x home-block-service-icon"><font-awesome-icon icon="fa-lock" /></span>
          <h4>Web Security</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
        </div>
    </div>
    <!--portfolio -->
    <div class="row home-block-portfolio">
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
    <!--about 缺了時間軸那條線-->
    <div class="row home-block-about">
      <div class="col-12 align-self-center; py-4 my-2" style="border:solid blue">
        <h2>ABOUT</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="col-12 home-block-about-content" style="border:solid green">
        <ul class="px-0">

          <li class="home-block-about-list" style="border:solid green">
            <div class="home-block-about-timeline" style="border:solid blue">
              <img class="home-block-about-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="home-block-about-time-panel my-4" style="border:solid blue">
              <div>
                <h4 class="fw-bold">2009-2011</h4>
                <h4 class="fw-bold">Our Humble Beginnings</h4>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>

          <li class="home-block-about-list" style="border:solid green">
            <div class="home-block-about-timeline" style="border:solid blue">
              <img class="home-block-about-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="home-block-about-time-panel-right my-4" style="border:solid blue">
              <div>
                <h4 class="fw-bold">2009-2011</h4>
                <h4 class="fw-bold">Our Humble Beginnings</h4>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>

          <li class="home-block-about-list" style="border:solid green">
            <div class="home-block-about-timeline" style="border:solid blue">
              <img class="home-block-about-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="home-block-about-time-panel my-4" style="border:solid blue">
              <div>
                <h4 class="fw-bold">2009-2011</h4>
                <h4 class="fw-bold">Our Humble Beginnings</h4>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>

          <li class="home-block-about-list" style="border:solid green">
            <div class="home-block-about-timeline" style="border:solid blue">
              <img class="home-block-about-img" src="@/assets/img/img_008.jpg">
            </div>
            <div class="home-block-about-time-panel-right my-4" style="border:solid blue">
              <div>
                <h4 class="fw-bold">2009-2011</h4>
                <h4 class="fw-bold">Our Humble Beginnings</h4>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
              </div>
            </div>
          </li>

          <li class="home-block-about-list" style="border:solid green">
            <div class="home-block-about-timeline" style="border:solid blue">
              <img class="home-block-about-img" src="@/assets/img/img_008.jpg">
            </div>
          </li>

        </ul>
      </div>
    </div>
    <!--our amazing team-->
    <div>
      <div class="row home-block-team">
        <div class="col-12 align-self-center py-4 my-2" style="border:solid blue">
          <h2>OUR AMAZING TEAM</h2>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="col-4 my-4" style="border:solid blue">
          <div class="row">
            <div class="col-12 home-block-team-frame" style="border:solid red">
              <img class="home-block-team-img" src="@/assets/img/img_002.jpg">
            </div>
            <div class="col-12" style="border:solid red"><h4>Parveen Anand</h4></div>
            <div class="col-12" style="border:solid red">Lead Designer</div>
            <div class="col-12" style="border:solid red">social media</div>
          </div>
        </div>
        <div class="col-4 my-4" style="border:solid blue">
          <div class="row">
            <div class="col-12 home-block-team-frame" style="border:solid red">
              <img class="home-block-team-img" src="@/assets/img/img_002.jpg">
            </div>
            <div class="col-12" style="border:solid red"><h4>Diana Petersen</h4></div>
            <div class="col-12" style="border:solid red">Lead Designer</div>
            <div class="col-12" style="border:solid red">social media</div>
          </div>
        </div>
        <div class="col-4 my-4" style="border:solid blue">
          <div class="row">
            <div class="col-12 home-block-team-frame" style="border:solid red">
              <img class="home-block-team-img" src="@/assets/img/img_002.jpg">
            </div>
            <div class="col-12" style="border:solid red"><h4>Larry Parker</h4></div>
            <div class="col-12" style="border:solid red">Lead Designer</div>
            <div class="col-12" style="border:solid red">social media</div>
          </div>
        </div>
        <div class="col mb-2" style="border:solid blue">
          <p class="home-block-team-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </div>
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
    <div class="row home-block-contact">
      <div class="col-12 align-self-center py-4 my-2" style="border:solid blue">
        <h2>CONTACT US</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="col-6" style="border:solid blue">
        <div class="home-block-contact-text" style="border:solid red"><input class="form-control"></div>
        <div class="home-block-contact-text" style="border:solid red"><input class="form-control"></div>
        <div class="home-block-contact-text" style="border:solid red"><input class="form-control"></div>
      </div>
      <div class="col-6" style="border:solid blue">
        <div class="home-block-contact-text-area" style="border:solid red"><input class="form-control"  style="height:225px"></div>
      </div>
      <div class="col-12 my-3" style="border:solid yellow; height:50px">
        <button class="btn btn-warning btn-lg">SEND MESSAGE</button>
      </div>
    </div>

  <div class="row home-block-footer">
    <div class="col header-nav">
      Copyright © Your Website 2023
    </div>
    <div class="col header-nav">
      twitter fb ig
    </div>
    <div class="col header-nav">
      兩顆按鈕Privacy Policy Terms of Use
    </div>
  </div>
</div></template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
