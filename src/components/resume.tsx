import styles from "./resume.module.css";

export default function Resume() {
  return (
    <>
      <header>
        <h1>Emmy Lim</h1>
        <h2>
          Full-stack Engineer with a focus on UI development and UX design
          across Mobile and Web
        </h2>
        <p>
          I'm adventurous enough to get down and dirty and learn something new,
          adaptable enough to fit in with paradigms or frameworks, and
          opinionated enough to prescribe my own.
        </p>
        <p>
          I love knowledge sharing with other developers and getting them up to
          speed.
        </p>
        <p>
          Let's exchange ideas and build something that feels special and
          delightful.
        </p>
        <h3>Contact me:</h3>
        <div className="contactInfo">
          <a href="tel:1-651-280-7848">
            <h2>
              <i className="fa fa-phone"></i>+1-651-280-7848
            </h2>
          </a>
          <a href="mailto:emmyrlim@gmail.com">
            <h2>
              <i className="fa fa-envelope"></i>emmyrlim@gmail.com
            </h2>
          </a>
          <a href="http://linkedin.com/in/emmyrlim">
            <h2>
              <i className="fa fa-linkedin-square"></i>linkedin.com/in/emmyrlim
            </h2>
          </a>
          <a href="http://github.com/emmyrlim">
            <h2>
              <i className="fa fa-github"></i>github.com/emmyrlim
            </h2>
          </a>
          <a href="http://codepen.io/emmyrlim">
            <h2>
              <i className="fa fa-codepen"></i>codepen.io/emmyrlim
            </h2>
          </a>
        </div>
      </header>
      <main>
        <article>
          <header>
            <h1>
              <a href="https://goo.gl/maps/kDkVXt8DwA89dcit7">
                <i className="fa fa-map-marker"></i>
              </a>
              <a className="showLink" href="https://discordapp.com/">
                Discord
              </a>
            </h1>
            <h2>
              <i className="fa fa-id-card"></i>Full Stack Developer
            </h2>
            <h2>
              <i className="fa fa-calendar"></i>01/2018 to 01/2024
            </h2>
          </header>
          <p>
            6 Years contributing to all features across Discord' main revenue
            generating subscription services, including the Game Store, Activity
            Feed, Nitro, Nitro Classic, Stickers, Server Boosting and the
            Collectibles Shop across web, iOS and Android.
          </p>
          <p>
            Nitro Highlights include: Subscription/upgrade/churn flow, Nitro
            upsell framework, Light theme, Profile Themes, Avatars, Avatar
            Decorations, Soundboard, Boosting, Video Backgrounds, Banners,
            Badging and Client Themes.
          </p>
          <p>
            These features were the main drivers of Discord's revenue. Avatar
            Decorations alone, which was released in 2023 made about $8 million
            in Revenue.
          </p>
          <p>Tech lead on multiple revenue features across all platforms.</p>
          <p>
            React Native mobile expert in the Revenue organization responsible
            for onboarding and training newer engineers.
          </p>
          <p>
            Both iOS and Revenue on-call rotations requiring triaging bugs and
            rolling out the latest Discord iOS version.
          </p>
          <p>
            Member of the Mobile Charter, a small group of Engineers responsible
            with documenting best practices, training other engineers and
            general mobile app code improvements or upgrades.
          </p>
          <div className="skills">
            <h3>Skills utilized:</h3>
            <ul>
              <li className="frequent">HTML/CSS-modules</li>
              <li className="frequent">
                Javascript/React/Flux/Flow/Typescript
              </li>
              <li className="frequent">React Native</li>
              <li className="frequent">Git</li>
              <li className="moderate">Python</li>
              <li className="moderate">Postgres</li>
              <li className="moderate">Kotlin</li>
              <li className="moderate">Swift</li>
              <li className="moderate">Java</li>
              <li className="moderate">ObjC</li>
            </ul>
          </div>
        </article>
        <article>
          <header>
            <h1>
              <a href="https://www.google.com/maps/place/ClearSlide/@37.7912489,-122.3993375,17z/data=!3m1!4b1!4m5!3m4!1s0x8085807913d9c519:0x87a8efb503a49e24!8m2!3d37.7912489!4d-122.3971488">
                <i className="fa fa-map-marker"></i>
              </a>
              <a
                className="showLink"
                href="https://www.clearslide.com/product/sales-content/"
              >
                Clearslide
              </a>
            </h1>
            <h2>
              <i className="fa fa-id-card"></i>Full Stack Developer
            </h2>
            <h2>
              <i className="fa fa-calendar"></i>06/2017 to 011/2017
            </h2>
          </header>
          <p>
            Full Stack engineer and Front End expert mainly responsible for
            development of new Content search, manage and browse experiences
            that are rich, responsive, scalable.
          </p>
          <p>Point person for design systems and cross-browser solutions.</p>
          <p>
            Responsible for developing and trailblazing a well componentized,
            easily-maintainable and brand consistent front end code base.
          </p>
          <div className="skills">
            <h3>Skills utilized:</h3>
            <ul>
              <li className="frequent">HTML/Sass</li>
              <li className="frequent">Javascript/React/Redux</li>
              <li className="frequent">Underscore</li>
              <li className="frequent">Java</li>
              <li className="frequent">Backbone</li>
              <li className="frequent">Git </li>
              <li className="moderate">JQuery</li>
              <li className="moderate">Angular</li>
            </ul>
          </div>
        </article>
        <article>
          <header>
            <h1>
              <a href="https://www.google.com/maps/place/Deem/@37.783829,-122.3986407,17z/data=!3m1!4b1!4m5!3m4!1s0x80858064ca8bbc75:0xaf121888640b466e!8m2!3d37.783829!4d-122.396452">
                <i className="fa fa-map-marker"></i>
              </a>
              <a
                className="showLink"
                href="https://www.deem.com/products/travel"
              >
                Deem
              </a>
            </h1>
            <h2>
              <i className="fa fa-id-card"></i>Senior Software Engineer
            </h2>
            <h2>
              <i className="fa fa-calendar"></i>07/2013 to 06/2017
            </h2>
          </header>
          <p>
            Primary Front End engineer in multiple projects responsible for
            building newer and more modern experiences for Deem’s core travel
            product on the Grails Travel platform and the Deem mobile framework.
          </p>
          <p>
            Primary Engineer for the Grails Travel data-modeling Services and
            Controller API layer.
          </p>
          <p>
            Responsible for designing and developing an accessible, scalable,
            gracefully degrading and future-friendly front-end user experience,
            while delivering on an often short development timeline.
          </p>
          <div className="skills">
            <h3>Skills utilized:</h3>
            <ul>
              <li className="frequent">HTML/Stylus</li>
              <li className="frequent">Javascript/YUI</li>
              <li className="frequent">Groovy/Grails</li>
              <li className="frequent">Handlebars</li>
              <li className="frequent">Backbone</li>
              <li className="frequent">Perforce</li>
              <li className="moderate">Java</li>
              <li className="moderate">JQuery</li>
            </ul>
          </div>
        </article>
        <article>
          <header>
            <h1>
              <a href="https://maps.google.com/?q=Saint%20Paul%20MN">
                <i className="fa fa-map-marker"></i>
              </a>
              <a
                className="showLink"
                href="http://macademia.macalester.edu/Macademia/"
              >
                Associated Colleges of the Midwest
              </a>
            </h1>
            <h2>
              <i className="fa fa-id-card"></i>Research Assistant
            </h2>
            <h2>
              <i className="fa fa-calendar"></i>06/2010 to 12/2011
            </h2>
          </header>
          <p>
            Primary Front End engineer that designed and created interactive
            data visualizations, utilizing the Javascript Infovis Toolkit,
            RaphaelJS and Jquery UI, as well as associated services and
            controllers.
          </p>
          <p>
            Engineer in a team of 8 that created an experimental analytics
            platform to test the effects of data-representation methods and
            recommendation algorithms on cyber-balkanization.
          </p>
          <div className="skills">
            <h3>Skills utilized:</h3>
            <ul>
              <li className="frequent">HTML</li>
              <li className="frequent">Javascript/JQuery</li>
              <li className="frequent">Groovy/Grails</li>
              <li className="frequent">Java</li>
              <li className="moderate">mongoDB</li>
              <li className="moderate">Python</li>
            </ul>
          </div>
        </article>
        <article className="education">
          <div>
            <i className="fa fa-university" aria-hidden="true"></i>
            <div className="details">
              <div>Macalester College</div>
              <div>BA in Computer Science and Japanese</div>
              <div>GPA 3.98/4.0</div>
            </div>
          </div>
          <div>
            <i className="fa fa-trophy" aria-hidden="true"></i>
            <div className="details">
              <div>Deans List 4 years running</div>
              <div>Phi Beta Kappa (ΦΒΚ) Honor Society</div>
              <div>Summa Cum Laude</div>
            </div>
          </div>
          <div>
            <i className="fa fa-flask" aria-hidden="true"></i>
            <div className="details">
              <div>
                <a
                  className="showLink"
                  href="https://code.google.com/p/tropevisualizer/"
                >
                  Trope Visualizer
                </a>
              </div>
              <div>
                <a
                  className="showLink"
                  href="https://code.google.com/p/masgenomicanalyzer/"
                >
                  MAS Genomic Analyzer
                </a>
              </div>
              <div>
                <a
                  className="showLink"
                  href="https://code.google.com/p/listpredictor/"
                >
                  List Predictor
                </a>
              </div>
              <div>
                <a
                  className="showLink"
                  href="http://poliwiki.macalester.edu/Poliwiki/"
                >
                  Poliwiki
                </a>
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-book" aria-hidden="true"></i>
            <div className="details">
              <div>
                <em>Co-author</em>, Macademia:
              </div>
              <div>Semantic visualization of research interests</div>
              <div>
                <a>http://dl.acm.org/citation.cfm?id=1943497</a>
              </div>
            </div>
          </div>
          <div>
            <i className="fa fa-volume-up" aria-hidden="true"></i>
            <div className="details">
              <div>English (native), Mandarin (native), Japanese</div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
