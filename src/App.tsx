import { Header } from "components/Header/Header";
import "./App.css";
import Coins from "assets/svgs/coins.svg";
import { MintCard } from "components/Card/MintCard/MintCard";
import SampleImg from "assets/images/sample1.png";
import MemberImg1 from "assets/images/member1.png";
import MemberImg2 from "assets/images/member2.png";
import MemberImg3 from "assets/images/member3.png";
import LoadmapSm from "assets/svgs/loadmap-sm.svg";
import LoadmapLg from "assets/svgs/loadmap-lg.svg";
import { MemberCard } from "components/Card/MemberCard/MemberCard";
import { Questions } from "components/Card/QuestionsCard/QuestionsCard";
import { Footer } from "components/Footer/Footer";
import { useBunzz } from "hooks/useBunzz";
import useMedia from "use-media";

function App() {
  const bunzz = useBunzz();

  const isMedium = useMedia({ minWidth: "768px" });

  return (
    <div className="App">
      <Header />

      <main className="main">
        <section className="first-section about-section p-app" id="home">
          <div>
            <h1 className="h1-hero">BINA NFT</h1>
            <p className="description">
              BINA is an African Historic NFT Collection. <br/>
              This is the first phase to revitalize the stories and
              cultural Heritage lost in African History over time.
            </p>
          </div>
          <img src={Coins} className="coins" />
        </section>

        <section className="section bina-hero mint-section" id="mint">
          <h1 className="h1 align-center">Mint Now</h1>
          <MintCard imageSrc={SampleImg} {...bunzz} />
        </section>

        <section
          className={`section roadmap-section ${isMedium ? "" : "p-app"}`}
          id="roadmap"
        >
          <h1 className="h1 align-center">Roadmap</h1>

          <div className="roadmap">
            <img src={isMedium ? LoadmapLg : LoadmapSm} alt="loadmap" />
          </div>
        </section>

        <section className="section p-app" id="team">
          <h1 className="h1 align-center">Meet Our Team</h1>

          <div className="members">
            <MemberCard
              imageSrc={MemberImg1}
              name="Olanike Ogundiran"
              role="Team Member"
              twitterLink="https://twitter.com/Missnikkybaby"
            />
            <MemberCard
              imageSrc={MemberImg2}
              name="Elizabeth Olusipe"
              role="Team Member"
              twitterLink="https://twitter.com/bethanhelen8"
            />
            <MemberCard
              imageSrc={MemberImg3}
              name="Ihuoma Anosike"
              role="Team Member"
              twitterLink="https://twitter.com/IhuomaAnosike"
            />
          </div>
        </section>

        <section className="section p-app" id="faq">
          <h1 className="h1 align-center">Frequently Asked Questions</h1>

          <Questions />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
