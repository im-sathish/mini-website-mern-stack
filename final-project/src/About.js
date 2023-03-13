import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";
class About extends React.Component{
    render(){
        return(
            <>
            <Header2/>
      <div className="bg-image about">
        <div className="container text-center">
            <div className="row">
                  <div className="col">
                <h1 className="abouthead">About</h1>
                <p className="aboutpara">Anime is hand-drawn and computer-generated animation originating from Japan. Outside of Japan and in English, anime refers specifically to animation produced in Japan.<br/><br/> However, in Japan and in Japanese, anime describes all animated works, regardless of style or origin. Animation produced outside of Japan with similar style to Japanese animation is commonly referred to as anime-influenced animation.

                    The earliest commercial Japanese animations date to 1917. A characteristic art style emerged in the 1960s with the works of cartoonist Osamu Tezuka and spread in following decades, developing a large domestic audience. Anime is distributed theatrically, through television broadcasts, directly to home media, and over the Internet. In addition to original works, anime are often adaptations of Japanese comics (manga), light novels, or video games. It is classified into numerous genres targeting various broad and niche audiences.
                    
                    Anime is a diverse medium with distinctive production methods that have adapted in response to emergent technologies. It combines graphic art, characterization, cinematography, and other forms of imaginative and individualistic techniques.<br/><br/> Compared to Western animation, anime production generally focuses less on movement, and more on the detail of settings and use of "camera effects", such as panning, zooming, and angle shots.<br/> <br/>Diverse art styles are used, and character proportions and features can be quite varied, with a common characteristic feature being large and emotive eyes.<br/><br/>
                    
                    The anime industry consists of over 430 production companies, including major studios such as Studio Ghibli, Kyoto Animation, Sunrise, Bones, Ufotable, MAPPA, Wit Studio, CoMix Wave Films, Production I.G and Toei Animation. Since the 1980s, the medium has also seen widespread international success with the rise of foreign dubbed, subtitled programming, and since the 2010s its increasing distribution through streaming services and a widening demographic embrace of anime culture, both within Japan and worldwide.<br/> <br/>As of 2016, Japanese animation accounted for 60% of the world's animated television shows.
                </p>
              </div>
            </div>
          </div>
</div>
 <Footer/>

            </>
        );
    }
}
export default About;