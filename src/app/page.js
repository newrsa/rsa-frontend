"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import SwiperCore from "swiper";
// import  {} from react-simple-typewrieter;
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const [active, setActive] = useState("");
  useEffect(() => {
    SwiperCore.use([Navigation]);
    AOS.init({
      duration: 1000,
      once: false,
    }
    );
 
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <main>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg bg-white sticky-top" >
        <div className="container">
          <a className="navbar-brandd" href="#"><img src="./logo.png" /></a>
          <button className="navbar-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img className="d-bar" src="nav-barr.png" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${active === "why" ? "active" : ""}`} aria-current="page" href="#why">Why</a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className={`nav-link ${active === "approach" ? "active" : ""}`} href="#approach">Our Approch</a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className={`nav-link ${active === "whoitsfor" ? "active" : ""}`} href="#whoitsfor">Who It's For</a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className={`nav-link ${active === "counsselor" ? "active" : ""}`} href="#counsselor">Counsellors</a>
              </li>
              <span>|</span>
              <li className="nav-item">
                <a className={`nav-link ${active === "impact" ? "active" : ""}`} href="#impact">Impact</a>
              </li>
              <span>|</span>
              <li className="nav-item ">
                <a className={`nav-link ${active === "about" ? "active" : ""}`} href="#about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link btn-gradient" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="./user-profile-circle.png" />&nbsp;&nbsp;
                  <img src="./chevron-down.png" />
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Sign In</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="py-50 hero-section">
        <div className="container container-sm-fluied">
          <div className="row align-items-center">

            <div className="col-md-6 col-lg-6" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 className="fw-bold">
                Decoding <span className="text-green">Aspirations</span>
              </h2>

              <p className="hero-title">
                Most people <span className="text-blue fw-500">don't struggle</span> because they lack talent.
                They struggle because a <span className="text-blue fw-500">few decisions matter </span> more
                than they seem.
              </p>
              <p className="para-text">
                Right Step Ahead helps people think through life and career decisions early—combining
                experienced <span className="text-gradient fw-500">human</span> guidance with a powerful <span className="text-gradient fw-500">AI‑driven</span>
                decision <span className="text-gradient fw-500">Intelligence engine</span> to systematically eliminate paths that don’t fit, before they become costly to reverse.
              </p>

              <button className="btn2-gredient mt-3">
                <span className="text-gradient fw-500">Explore</span>
              </button>
            </div>

            <div className="col-md-6 col-lg-6 text-center hero-img" data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <img
                src="./heroo-img.png"
                className="img-fluid"
              />
            </div>

          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section id="why" className="py-50 bg-gray " data-aos="fade-up" >
        <div className="container text-center">
          <div className="heading ">
            <h2>WHY</h2>
          </div>
          <h3 className="sub-heading">
            Why <span className="text-blue">decision </span> anxiety is unavoidable today
          </h3>
          <div className="title para-text">
            <p>Most people feel anxious about career and life decisions not because they lack talent or intent, but because the number and interaction of decisions they face has quietly increased. What feels like uncertainty is often a rational response to overwhelming complexity.</p>
          </div>

          <div className="row mt-50 " data-aos="fade-up">

            <div className="col-sm-12 col-md-4" >
              <div className=" bg-img-1 extra-card-width ">
                <h5>Talent is not the constraint</h5>
                <p className="para-text justify">
                  Most individuals have sufficient talent, capability, and willingness to work hard. What increasingly determines outcomes is not ability, but the sequence of choices made over time. Today, people must choose across far more options—subjects, skills, degrees, roles, and transitions—than ever before.
                  Small choices made early quietly shape what remains possible later.

                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className=" bg-img-2 extra-card-width ">
                <h5>Choices multiply into complexity</h5>
                <p className="para-text justify">
                  Across education and early career, an individual typically makes 15–20 critical decisions. Each decision introduces multiple options. When these choices combine across stages, they don’t add up—they multiply, creating crores of possible life paths, even under conservative assumptions.
                  This scale of complexity cannot be evaluated intuitively.

                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className=" bg-img-3 extra-card-width ">
                <h5>Confusion has real costs</h5>
                <p className="para-text justify">
                  Human cognition is not designed to assess large, evolving decision spaces. As complexity increases, people default to shortcuts, trends, or delay. Over time, this leads to irreversible loss—years spent on paths that later collapse, money invested in misaligned choices, and opportunities that quietly disappear.
                  Confusion is not a personal failure. It is a structural one.

                </p>
              </div>
            </div>

          </div>
          <div className="text-center para-text mt-4 mb-0" data-aos="fade-up">
            <p>What’s missing is not motivation or advice, but a way to <span className="text-blue">systematically reduce complexity</span> before decisions become irreversible.</p>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section id="approach" className="py-50 position-relative ">
        <div className="green-blush-1 position-absolute">
          <img src="./green-blush-1.png" alt="" />
        </div>
        <div className="container">
          <div className="heading text-center" data-aos="fade-up">
            <h2> <span>OUR</span> APPROACH</h2>
          </div>
          <h3 className="sub-heading text-center" data-aos="fade-up">
            A <span className="text-blue">disciplined</span> way to <span>fulfil</span> aspirations
          </h3>
          <div className="title para-text" data-aos="fade-up">
            <p>Aspirations aren't achieved through motivation alone. They are together over time.</p>
          </div>
          <div className="formula-text text-center mb-3" data-aos="fade-up">
            <h5> <span className="text-green">Aspiration Fulfilment</span> = <span className="text-blue">Clarity</span> x <span className="text-blue"> Alignment</span> x <span className="text-blue">Viability</span> x <span className="text-blue">Execution</span> </h5>
          </div>

          <div className="row mt-50 approch-row para-textt">

            <div className="col-md-4 col-lg-3" data-aos="fade-up">
              <h5 className="fw-bold">Clarity</h5>
              <p>Clarity is knowing what you want and why it matters. Without clarity, people react to options rather than choose deliberately. Right Step Ahead uses a powerful AI‑driven decision intelligence engine to surface, compare, and narrow possibilities, helping intent form through understanding rather than guesswork.</p>
            </div>

            <div className="col-md-4 col-lg-3" data-aos="fade-up">
              <h5 className="fw-bold">Alignment</h5>
              <p>Alignment is the fit between who you are and what you pursue. Many paths fail not because they are difficult, but because they are misaligned with abilities, interests, constraints, or temperament. Through strong individual profiling, Right Step Ahead ensures that choices reflect the person—not just the opportunity.</p>
            </div>

            <div className="col-md-4 col-lg-3" data-aos="fade-up">
              <h5 className="fw-bold">Viability</h5>
              <p>Viability is the realism of a path given constraints and future demand. Ambition must be grounded in what can actually work over time. The AI engine continuously evaluates feasibility by accounting for prerequisites, timelines, costs, and changing demand, preventing early enthusiasm from locking people into paths that later collapse.</p>
            </div>
            <div className="col-md-4 col-lg-3 md-col-center" data-aos="fade-up" >
              <h5 className="fw-bold">Execution</h5>
              <p>Execution is sustained action and adaptation over time. Decisions only matter if they translate into progress. Through structured tracking and the Blue Book, Right Step Ahead supports consistent follow‑through, course correction, and learning as reality changes—so momentum is maintained without blind persistence.</p>
            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" className="py-50 bg-gray timeline-section">
        <div className="container text-center">
          <div className="heading" data-aos="fade-up">
            <h2><span>HOW</span> IT WORKS</h2>
          </div>
          <div className="title para-text w-75 mx-auto" data-aos="fade-up">
            <p>Aspirations aren't achieved through motivation alone. They are fulfilled when Clarity, Alignment, Viability, and Execution work together over time.</p>
          </div>
          <div className="timeline-row left mt-50" data-aos="fade-up">
            <div className="timeline-card para-textt" >
              <h5>Strong Individual <span>Profiling</span></h5>
              <p>Every journey begins with building a deep, structured understanding of the individual. This includes abilities, interests, preferences, constraints, context, and current stage of life.
                The goal is not labeling or categorization, but creating a reliable foundation so that all future decisions are anchored in who the person actually is—not who they are expected to be.
                This stage primarily protects Alignment.
              </p>
            </div>
            <div className="timeline-number">
              <span>1</span>
            </div>
          </div>
          <div className="timeline-row right stage-top-margin" data-aos="fade-up">
            <div className="timeline-card para-textt" >
              <h5><span>Mapping</span> the Decision Space</h5>
              <p>Based on the individual profile, the system models the full range of viable paths available at that point in time. These paths reflect real constraints such as prerequisites, timelines, affordability, and progression requirements.
                Instead of treating decisions in isolation, the system considers how choices interact across stages—so the individual can see the broader landscape before committing to a direction.
                This stage builds Clarity.</p>
            </div>
            <div className="timeline-number">
              <span>2</span>
            </div>
          </div>
          <div className="timeline-row left stage-top-margin" data-aos="fade-up">
            <div className="timeline-card para-textt" >
              <h5>Systematic Path <span>Elimination</span> </h5>
              <p>As decisions evolve, the AI-driven decision intelligence engine continuously removes paths that are invalid, unrealistic, or misaligned. Elimination happens early, before wrong paths consume years of effort or significant financial investment.
                By narrowing the decision space safely and progressively, complexity becomes manageable without forcing premature commitment.
                This stage strengthens both Clarity and Viability.</p>
            </div>
            <div className="timeline-number">
              <span>3</span>
            </div>
          </div>
          <div className="timeline-row right stage-top-margin" data-aos="fade-up">
            <div className="timeline-card para-textt" >
              <h5><span>Human Guidance</span> and <span>Judgment</span></h5>
              <p>Not all decisions can—or should—be automated. Counsellors play a critical role in interpreting system insights, surfacing trade-offs, challenging assumptions, and applying judgment where context, values, or ethics matter.
                Human guidance ensures that decisions remain grounded, responsible, and personally meaningful, especially at high-impact or irreversible points.
                This stage protects Alignment and overall decision quality.</p>
            </div>
            <div className="timeline-number">
              <span>4</span>
            </div>
          </div>
          <div className="timeline-row left stage-top-margin" data-aos="fade-up">
            <div className="timeline-card para-textt" >
              <h5> <span>Execution</span>, Tracking, and Adaptation</h5>
              <p>Decisions only create value when they translate into action. Once a path is chosen, it is operationalized through structured tracking and the Blue Book, which capture plans, milestones, assumptions, and progress.
                As reality changes, the system revisits earlier assumptions, adjusts direction where needed, and prevents silent drift. Execution is treated as an adaptive process, not blind persistence.
                This stage sustains Execution over time.</p>
            </div>
            <div className="timeline-number">
              <span>5</span>
            </div>
          </div>

        </div>
      </section>

      {/* WHO ITS FOR */}
      <section id="whoitsfor" className="py-50 position-relative">
        <div className="green-blush-1 position-absolute">
          <img src="./green-blush-1.png" alt="" />
        </div>
        <div className="green-blush-right position-absolute">
          <img src="./green-blush-right.png" alt="" />
        </div>
        <div className="container">
          <div className="text-center ">
            <div className="heading" data-aos="fade-up">
              <h2><span>WHO</span> IT'S FOR</h2>
            </div>
            <div className="title para-text w-75 mx-auto" data-aos="fade-up">
              <p>Aspirations aren't achieved through motivation alone. They are fulfilled when Clarity, Alignment, Viability, and Execution work together over time.</p>
            </div>

          </div>
          <div className="itsrow" data-aos="fade-up">
            <div className="itscard itsleft para-textt">
              <div className="row">
                <div className="col-md-5 col-lg-4">
                  <img src="./who-its-1.jpeg" />
                </div>
                <div className="col-md-7 col-lg-8">
                  <h5>Aspiration management across life</h5>
                  <p>Right Step Ahead is for anyone who aspires to learn, build skills, and grow capabilities over time. It supports individuals pursuing both formal, structured routes and vocational or skill-based paths, without privileging one over the other.
                    This platform is built on the belief that aspiration is not a one-time event, but something that evolves across life. People continuously reassess what they want to learn, what they want to become, and how they want to contribute. Managing this evolution thoughtfully is as important as making any single decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="itsrow" data-aos="fade-up">
            <div className="itscard itsright para-textt">
              <div className="row">
                <div className="col-md-7 col-lg-8">
                  <h5>An aspiration management platform</h5>
                  <p>At its core, Right Step Ahead is an aspiration management platform. It helps individuals make sense of their ambitions, understand how those ambitions align with who they are, and navigate the changing realities that shape what is possible.
                    Rather than focusing narrowly on careers, courses, or outcomes, the platform supports the broader process of aspiration—how goals form, change, deepen, or redirect over time.

                  </p>
                </div>
                <div className="col-md-5 col-lg-4">
                  <img src="./who-its-2.jpeg" />
                </div>

              </div>
            </div>
          </div>
          <div className="itsrow" data-aos="fade-up">

            <div className="itscard itsleft para-textt">
              <div className="row">
                <div className="col-md-5 col-lg-4">
                  <img src="./3rd-img.png" />
                </div>
                <div className="col-md-7 col-lg-8">
                  <h5>Breadth of learning and capability</h5>
                  <p>Rooted in the spirit of the 64 kalās and 14 vidyās, Right Step Ahead is designed to support the full spectrum of human learning and capability—across intellectual, creative, technical, and vocational domains.
                    Whether someone is exploring possibilities early, building mastery through practice, transitioning across roles, or redefining direction later in life, the underlying challenge remains the same: managing aspirations with clarity and judgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="itsrow" data-aos="fade-up">
            <div className="itscard itsright para-textt">
              <div className="row">
                <div className="col-md-7 col-lg-8">
                  <h5>Across ages and stages</h5>
                  <p>Right Step Ahead can be leveraged by individuals from the age of 10 to 70, across different stages of life and learning. The system adapts to context, constraints, and intent—meeting people where they are, and supporting where they want to go next.
                  </p>
                </div>
                <div className="col-md-5 col-lg-4">
                  <img src="./4th-img.png" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      {/* COUNSSELOR  */}
      <section id="counsselor" className="py-50 position-relative bg-gray">
        <div className="ellipse-left position-absolute">
          <img src="./ellipse-left.png" alt="" />
        </div>
        <div className="ellipse-right position-absolute">
          <img src="./ellipse-right.png" alt="" />
        </div>
        <div className="container">
          <div className="heading text-center" data-aos="fade-up">
            <h2>COUNSELLORS</h2>
          </div>
          <h3 className="sub-heading text-center" data-aos="fade-up"> <span className="text-blue">Human judgment</span> within an <span className="text-blue">intelligent</span> system
          </h3>
          <div className="title para-text" data-aos="fade-up">
            <p>Right Step Ahead is built on the belief that while complex decision spaces require systematic intelligence, certain moments still demand human judgment. This section introduces the counsellors who operate within the RSA system—working with the platform, not independently of it.Counsellors step in where interpretation, trade-offs, context, and personal nuance matter most. They do not replace the decision intelligence engine; they complement it by helping individuals reason through high-impact or irreversible choices.</p>
          </div>
          <div className="counsselor-main mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./neha.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Neha Shukla</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./pradip.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Pradip Kumar</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./amol.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Amol Sharma</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./kiran.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Kiran Kirloskar</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-20">
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./komal.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Komal Patil</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./jimy.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Jimy Doe</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./sushant.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Sushant Patil</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3" data-aos="fade-up">
                <div className="card">
                  <div className="image">
                    <img src="./rina.png" />
                  </div>
                </div>
                <div className="text-main text-center">
                  <div className="name">
                    <h5 className="text-blue">Rina Kokate</h5>
                    <p>persion position</p>
                  </div>
                  <div className="rating mt-2">
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-1.png" />
                    <img src="star-5.png" />
                  </div>
                  <button className="btn2-gredient mt-3">
                    <span className="text-gradient fw-500">Book Counseling</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section id="impact" className="py-50 position-relative">
        <div className="green-blush-1 position-absolute sm-none">
          <img src="./green-blush-1.png" alt="" />
        </div>
        <div className="container">
          <div className="text-center ">
            <div className="heading" data-aos="fade-up">
              <h2>IMPACT</h2>
            </div>
          </div>
          <div className="impact-main mt-50">
            <div className="row " data-aos="fade-up">

              <div className="col-lg-6" >
                <div className="imp-left">
                  <h5>What changes when decisions are made well</h5>
                  <p>The impact of Right Step Ahead is measured not in momentary outcomes, but in what is avoided, preserved, and compounded over time. By helping individuals reduce decision complexity early, the platform prevents years spent on misaligned paths, unnecessary financial investment, and stalled progress.</p>
                  <h5>Compounding benefits, not instant success</h5>
                  <p>Right Step Ahead does not promise instant outcomes or guaranteed success. Its impact lies in sustained momentum. Individuals move forward with confidence, adapt sooner when circumstances change, and make fewer irreversible decisions that are costly to undo.</p>
                </div>
              </div>


              <div className="col-lg-6">
                <div className="imp-right">
                  <img src="./impact.png" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ABOUT  */}
      <section id="about" className="py-50 position-relative bg-gray">
        <div className="green-blush-1 position-absolute">
          {/* <img src="./green-blush-1.png" alt="" /> */}
        </div>
        <div className="container">
          <div className="heading text-center" data-aos="fade-up">
            <h2>About</h2>
          </div>
          <h3 className="sub-heading text-center" data-aos="fade-up"> <span className="text-blue" >Leadership,</span> <span className="text-blue" >intent,</span> and <span className="text-blue" >accountability</span></h3>
          <div className="title para-text" data-aos="fade-up">
            <p>Right Step Ahead is led by a team deeply involved in building large-scale talent systems, education platforms, and decision frameworks across industry and learning ecosystems. The work is driven by a core belief: aspiration is not a motivation problem, but a decision problem—and better outcomes require both structured intelligence and human judgment.</p>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="row about-row bg-white" data-aos="flip-down">
                <div className="col-md-4">
                  <div className="about-left">
                    <img src="./director.png" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="about-right">
                    <h5>DIRECTOR NAME</h5>
                    <h6>CEO</h6>
                    <p className="para-text ">Right Step Ahead is led by a team of experienced professionals with deep expertise in education, career development, technology, and human-centered design. The leadership team is committed to building a platform that is not only intelligent but also responsible, inclusive, and impactful.</p>

                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row about-row bg-white" data-aos="flip-down">
                <div className="col-md-4">
                  <div className="about-left">
                    <img src="./director.png" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="about-right">
                    <h5>DIRECTOR NAME</h5>
                    <h6>CEO</h6>
                    <p className="para-text">Right Step Ahead is led by a team of experienced professionals with deep expertise in education, career development, technology, and human-centered design. The leadership team is committed to building a platform that is not only intelligent but also responsible, inclusive, and impactful.</p>
                    <p className="para-text">Right Step Ahead is led by a team of experienced professionals with deep expertise in education, career development, technology, and human-centered design. The leadership team is committed to building a platform that is not only intelligent but also responsible, inclusive, and impactful.</p>


                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="arrow">
              <span className="custom-prev"><img src="./prev.png" /></span>
              <span className="custom-next"><img src="./next.png" /></span>
            </div>

          </Swiper>

        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-dark" data-aos="fade-up">
        <div className="container">
          <div className="row pt-3 pb-3 text-white">
            <div className="col-md-6">
              <div className="ft-left">
                <div className="ft-logo">
                  <img src="./white-logo.png" />
                </div>
                <p className=" para-text">
                  Right Step Ahead is led by a team deeply involved in building large-scale talent systems, education platforms, and decision frameworks across industry and learning ecosystems. The work is driven by a core belief
                </p>
                <div className="social-main">
                  <span><img src="./fb.png" /></span>
                  <span><img src="./ig.png" /></span>
                  <span><img src="./yt.png" /></span>
                  <span><img src="./linkdin.png" /></span>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="ft-right">
                <h5>Contact</h5>
                <p><img src="./mail.png" /> contact@rightstepahead.com</p>
                <p><img src="./message-chat.png" /> partnerships, counsellors, institutions</p>
                <p><img src="./marker.png" /> India (operating globally)</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
