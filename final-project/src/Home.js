import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";
function Home (){
   
        return(
            <>
            <Header2/>

  
      <div className="colorhome">
        <div id="carouselExampleIndicators" className="carousel slide home">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./css/scroll1.png" className="d-block w-100 height" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./css/scroll2.png" className="d-block w-100 height" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./css/scroll3.jpg" className="d-block w-100 height" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <div className="bg-image home">
          <div className="container ">
            <div className="row">
              <div className="col-4 home">
                   <div className="card one" >
            <img src="./css/card1.png" className="card-img-top card1" alt="..."/>
            <div className="card-body home">
              <h4 className="card-title">Naruto</h4>
              <p className="card-text">Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
              <a href="https://zoro.to/watch/naruto-677?ep=12352" target="_blank" className="btn btn-primary">Watch online</a>
            </div>
          </div>
              </div>
              <div className="col-4">
                <div className="card one" >
                  <img src="./css/card2.png" className="card-img-top card2" alt="..."/>
                  <div className="card-body home">
                    <h4 className="card-title">Dragon Ball Z super</h4>
                    <p className="card-text">Dragon Ball Z super is a Japanese anime television series produced by Toei Animation . it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters of the original Dragon Ball manga series created by Akira Toriyama.</p>
                    <a href="https://zoro.to/watch/dragon-ball-super-1692?ep=22219" target="_blank" className="btn btn-primary">Watch online</a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card one" >
                  <img src="./css/card3.png" className="card-img-top card3" alt="..."/>
                  <div className="card-body home">
                    <h4 className="card-title">One Piece</h4>
                    <p class="card-text">One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 105 tankōbon volumes .</p>
                    <a href="https://zoro.to/watch/one-piece-100?ep=2142" target="_blank" className="btn btn-primary">Watch online</a>
                  </div>
                </div>
              </div>
              <div className="container ">
                <div className="row">
                  <div className="col-4 home">
                       <div className="card one" >
                <img src="./css/card4.png" className="card-img-top card4" alt="..."/>
                <div className="card-body home">
                  <h4 className="card-title">Attack on Titan</h4>
                  <p className="card-text">Attack on Titan is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; </p>
                  <a href="https://zoro.to/watch/attack-on-titan-112?ep=3303" target="_blank" className="btn btn-primary">Watch online</a>
                </div>
              </div>
                  </div>
                  <div className="col-4">
                    <div className="card one" >
                      <img src="./css/card5.jpeg" className="card-img-top card5" alt="..."/>
                      <div className="card-body home">
                        <h4 className="card-title">Death Note</h4>
                        <p className="card-text">Death Note is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen a genius who discovers a mysterious notebook: the "Death Note",</p>
                        <a href="https://zoro.to/watch/death-note-60?ep=1464" target="_blank" className="btn btn-primary">Watch online</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card one" >
                      <img src="./css/card6.jpg" className="card-img-top card6" alt="..."/>
                      <div className="card-body home">
                        <h4 className="card-title">One Punch man</h4>
                        <p className="card-text">One-Punch Man Japanese superhero manga series created by One. It tells the story of Saitama,a superhero who,because he can defeat any opponent with a single punch. One wrote the original webcomic manga version in early 2009.</p>
                        <a href="https://zoro.to/watch/one-punch-man-63?ep=1501" target="_blank" className="btn btn-primary">Watch online</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container ">
                <div className="row">
                  <div className="col-4 home">
                       <div className="card one" >
                <img src="./css/card7.png" className="card-img-top card7" alt="..."/>
                <div className="card-body home">
                  <h4 className="card-title">Haikyu!!</h4>
                  <p className="card-text">Haikyu!! is a Japanese series written and illustrated by Haruichi Furudate.It was serialized in manga magazine Weekly Shōnen from 2012 to 2020,The story follows Shoyo Hinata, a boy determined to become a great volleyball player</p>
                  <a href="https://zoro.to/watch/haikyu-76?ep=1626" target="_blank" className="btn btn-primary">Watch online</a>
                </div>
              </div>
                  </div>
                  <div className="col-4">
                    <div className="card one" >
                      <img src="./css/card8.png" className="card-img-top card8" alt="..."/>
                      <div className="card-body home">
                        <h4 className="card-title">Doraemon</h4>
                        <p className="card-text">Doraemon is a Japanese manga series written and illustrated by Fujiko F. Fujio. The manga was published by Shogakukan from 1970 to 1996.The story revolves around an earless robotic cat named Doraemon,The 22nd century to aid a boy named Nobita Nobi.</p>
                        <a href="https://zoro.to/watch/doraemon-us-17863?ep=69740" target="_blank" className="btn btn-primary">Watch online</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="card one" >
                      <img src="./css/card9.png" className="card-img-top card9" alt="..."/>
                      <div className="card-body home">
                        <h4 className="card-title">Shin-chan</h4>
                        <p className="card-text">Shin-chan is a Japanese manga series written and illustrated by Yoshito Usui. Shin-chan in a Japanese weekly magazine called Weekly Manga Action, which was published by Futabasha. The manga in its original form ended on September 11, 2009.</p>
                        <a href="https://zoro.to/watch/shin-chan-1058?ep=54456" target="_blank" className="btn btn-primary">Watch online</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
          </div>
            </div>
      
            </div>

     
      </div>
      <Footer/>
      
      
            </>
        );
    }

export default Home;