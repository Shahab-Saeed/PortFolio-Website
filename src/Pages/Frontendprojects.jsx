import "./Frontendprojects.css";
import Project1 from "../Components/Projects/Project1";
import React, { useEffect } from "react";

import { assets } from "../assets/Assets";
const Frontendprojects = () => {
  useEffect(() => {
    // Scroll to top when this page loads
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="frontendprojects">
      <h1>Front End Projects</h1>
   <div className="projects-box">
        <Project1
          profile_pic={assets.PasswordToggler}
          projectname={"Password Toggler"}
          projectdetail={
            "Hy! I have created this Password Toggler using React js, it's portable you can also use it in your projects which helps you to show or hide password and it's fully portable, you can also use it to your code."
          }
          projectlink="https://password-toggler-ss.netlify.app"
        /> 

        <Project1
          profile_pic={assets.DarkModeEnabler}
          projectname={"Dark Mode Enabler"}
          projectdetail={
            "Hy! I have created this dark mode enabler using React js, it's portable you can also use it in your projects which helps you to see better in black Resolutions. you can also use it to your code. "
          }
          projectlink="https://dark-mode-enabler-by-ss.netlify.app"
        />

        <Project1
          profile_pic={assets.AgeCalculatorApp}
          projectname={"Age Calculator App"}
          projectdetail={
            "Hy! I have created this Age Calculator App  using React js, it's portable you can also use it in your projects which helps you to see Your age. you can also use it to your code. "
          }
          projectlink="https://age-calculator-react-ss.netlify.app"
        />

        <Project1
          profile_pic={assets.ClockApp}
          projectname={"Digital Clock App"}
          projectdetail={
            "Hy! I have created this Digital Clock App  using React js, it's portable you can also use it in your projects which helps you to see Your age. you can also use it to your code. "
          }
          projectlink="https://clock-app-react-ss.netlify.app"
        />

        <Project1
          profile_pic={assets.RandomPassGen}
          projectname={"Random Password Generator App"}
          projectdetail={
            "Hy! I have created this Random Password Generator App  using React js, it's portable you can also use it in your projects which helps you to generate random passwords"
          }
          projectlink="https://rpgars.netlify.app"
        />

        <Project1
          profile_pic={assets.nine}
          projectname={"Edusity App"}
          projectdetail={
            "Hy! I have created this Edusity App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://edusity-e6ob.vercel.app"
        />

        <Project1
          profile_pic={assets.ten}
          projectname={"Website Header App"}
          projectdetail={
            "Hy! I have created this Efficient Website App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://evolutios.netlify.app"
        />

        <Project1
          profile_pic={assets.eleven}
          projectname={"Zomato CLone App"}
          projectdetail={
            "Hy! I have created this Zomato Clone App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://shomata.netlify.app"
        />

        <Project1
          profile_pic={assets.twelve}
          projectname={"Medium CLone App"}
          projectdetail={
            "Hy! I have created this Medium CLone App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://medium-ss.netlify.app"
        />

        <Project1
          profile_pic={assets.thirteen}
          projectname={"Gemini Clone App"}
          projectdetail={
            "Hy! I have created this Gemini CLone App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://gemini-clone-ss.netlify.app"
        />

        <Project1
          profile_pic={assets.fourteen}
          projectname={"Login And Signup App"}
          projectdetail={
            "Hy! I have created this Login and signup App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://log-in-and-sign-up-app.netlify.app"
        />

        <Project1
          profile_pic={assets.fifteen}
          projectname={"Drag and Drop App"}
          projectdetail={
            "Hy! I have created this Drag and Drop App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://drags-an-drops.netlify.app"
        />

        <Project1
          profile_pic={assets.sixteen}
          projectname={"Product Page Design App"}
          projectdetail={
            "Hy! I have created this Product Page Design App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://product-pages-designs.netlify.app"
        />

        <Project1
          profile_pic={assets.seventeen}
          projectname={"Progress Bar App"}
          projectdetail={
            "Hy! I have created this Progress Bar App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://discipllined-bar.netlify.app"
        />

        <Project1
          profile_pic={assets.eighteen}
          projectname={"Drop Down Menu App"}
          projectdetail={
            "Hy! I have created this Drop Down Menu App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://dropdownmenuu.netlify.app"
        />

        <Project1
          profile_pic={assets.nighnteen}
          projectname={"Mini Calendar App"}
          projectdetail={
            "Hy! I have created this Mini Calendar App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://minicalendarapp.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty}
          projectname={"Background Changing App"}
          projectdetail={
            "Hy! I have created this Background Changing App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://bcgchangeeffect.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty1}
          projectname={"Error Handler Page App"}
          projectdetail={
            "Hy! I have created this Error Handler Page App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://comingsooonapp.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty2}
          projectname={"Text to Speech Converter App"}
          projectdetail={
            "Hy! I have created this Text to Speech Converter App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://text-to-speech-converter-web.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty3}
          projectname={"Password Strength App"}
          projectdetail={
            "Hy! I have created this Password Strength App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://password-strengtth-app.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty4}
          projectname={"Email Validation App"}
          projectdetail={
            "Hy! I have created this Email Validation App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://integrate-html-with-excel-sheet.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty5}
          projectname={"Gallery Scroller App"}
          projectdetail={
            "Hy! I have created this Gallery Scroller App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://galleryapplicationjs.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty6}
          projectname={"Form Validation App"}
          projectdetail={
            "Hy! I have created this Form Validation App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://formvaliditypp.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty7}
          projectname={"Password Toggler App"}
          projectdetail={
            "Hy! I have created this Password Toggler App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://togglepasswords.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty8}
          projectname={"PopUp App"}
          projectdetail={
            "Hy! I have created this PopUp App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://popupdisplay.netlify.app"
        />

        <Project1
          profile_pic={assets.twenty9}
          projectname={"Stop Watch App"}
          projectdetail={
            "Hy! I have created this Stop Watch App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://stopyourregrettime.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty}
          projectname={"Music App"}
          projectdetail={
            "Hy! I have created this Music App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://beatsia.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty1}
          projectname={"Toast Bar App"}
          projectdetail={
            "Hy! I have created this Toast Bar App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://toastbar.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty2}
          projectname={"QR COde Generator App"}
          projectdetail={
            "Hy! I have created this QR COde Generator App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://getyourqrcodenow.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty3}
          projectname={"Age Calculator App"}
          projectdetail={
            "Hy! I have created this Age Calculator App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://calculateyourfatherregretyears.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty4}
          projectname={"Create Notes App"}
          projectdetail={
            "Hy! I have created this Create Notes App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://createnotesia.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty5}
          projectname={"Quiz App"}
          projectdetail={
            "Hy! I have created this Quiz App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://quizya.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty6}
          projectname={"To Do App"}
          projectdetail={
            "Hy! I have created this To Do App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://todooooooooooo.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty7}
          projectname={"Weather App"}
          projectdetail={
            "Hy! I have created this Weather App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://le-temps.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty8}
          projectname={"Moripon App"}
          projectdetail={
            "Hy! I have created this Moripon App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://moripon.netlify.app"
        />

        <Project1
          profile_pic={assets.thirty9}
          projectname={"Clock App"}
          projectdetail={
            "Hy! I have created this Clock App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://orologiodigitale.netlify.app"
        />

        <Project1
          profile_pic={assets.fourty}
          projectname={"Calculator App"}
          projectdetail={
            "Hy! I have created this Calculator App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://sscalcolatrice.netlify.app"
        />

        <Project1
          profile_pic={assets.fourty1}
          projectname={"Tesla Clone App"}
          projectdetail={
            "Hy! I have created this Tesla Clone App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://leecarstesla.netlify.app"
        />

        <Project1
          profile_pic={assets.fourty2}
          projectname={"Grocify Store App"}
          projectdetail={
            "Hy! I have created this Grocify Store App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://ssgrocifyclone.netlify.app"
        />

        <Project1
          profile_pic={assets.fourty3}
          projectname={"Facebook Login Page Clone App"}
          projectdetail={
            "Hy! I have created this Facebook Login Page Clone App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://fbclonebyss.netlify.app"
        />

        <Project1
          profile_pic={assets.fourty4}
          projectname={"Discord Clone App"}
          projectdetail={
            "Hy! I have created this Discord Clone App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://disscoord.netlify.app"
        />

        <Project1
          profile_pic={assets.fourty5}
          projectname={"Music App"}
          projectdetail={
            "Hy! I have created this Music App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://beatsia.netlify.app"
        />

      </div>
    </div>
  );
};

export default Frontendprojects;
