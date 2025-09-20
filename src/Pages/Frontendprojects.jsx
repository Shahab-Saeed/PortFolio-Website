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
        {/* Edusity App */}
        <Project1
          profile_pic={assets.nine}
          projectname={"Edusity App"}
          projectdetail={
            "Hy! I have created this Edusity App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://edusity-e6ob.vercel.app"
        />

        {/* Website HEader APp */}
        <Project1
          profile_pic={assets.ten}
          projectname={"Website Header App"}
          projectdetail={
            "Hy! I have created this Efficient Website App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://evolutios.netlify.app"
        />

        {/* Tesla CLone */}
        <Project1
          profile_pic={assets.fourty1}
          projectname={"Tesla Clone App"}
          projectdetail={
            "Hy! I have created this Tesla Clone App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://leecarstesla.netlify.app"
        />

        {/* Zomato CLone */}
        <Project1
          profile_pic={assets.eleven}
          projectname={"Zomato Clone App"}
          projectdetail={
            "Hy! I have created this Zomato Clone App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://shomata.netlify.app"
        />

        {/* Medium Clone */}
        <Project1
          profile_pic={assets.twelve}
          projectname={"Medium Clone App"}
          projectdetail={
            "Hy! I have created this Medium CLone App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://medium-ss.netlify.app"
        />

        {/* Gemini CLone */}
        <Project1
          profile_pic={assets.thirteen}
          projectname={"Gemini Clone App"}
          projectdetail={
            "Hy! I have created this Gemini CLone App  using React js, it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://gemini-clone-ss.netlify.app"
        />

        {/* Bg Chnaging App */}
        <Project1
          profile_pic={assets.twenty}
          projectname={"Background Changing App"}
          projectdetail={
            "Hy! I have created this Background Changing App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://bcgchangeeffect.netlify.app"
        />

        {/* Text to speech COnverter */}
        <Project1
          profile_pic={assets.twenty2}
          projectname={"Text to Speech Converter App"}
          projectdetail={
            "Hy! I have created this Text to Speech Converter App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://text-to-speech-converter-web.netlify.app"
        />

        {/* Email Validation App */}
        <Project1
          profile_pic={assets.twenty4}
          projectname={"Email Validation App"}
          projectdetail={
            "Hy! I have created this Email Validation App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://integrate-html-with-excel-sheet.netlify.app"
        />

        {/* Gallery Scroller App */}
        <Project1
          profile_pic={assets.twenty5}
          projectname={"Gallery Scroller App"}
          projectdetail={
            "Hy! I have created this Gallery Scroller App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://galleryapplicationjs.netlify.app"
        />

        {/* QR Code Generator App */}
        <Project1
          profile_pic={assets.thirty2}
          projectname={"QR Code Generator App"}
          projectdetail={
            "Hy! I have created this QR COde Generator App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://getyourqrcodenow.netlify.app"
        />

      

        {/* Moripon App */}
        <Project1
          profile_pic={assets.thirty8}
          projectname={"Moripon App"}
          projectdetail={
            "Hy! I have created this Moripon App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://moripon.netlify.app"
        />

        {/*  Quiz App*/}
        <Project1
          profile_pic={assets.thirty5}
          projectname={"Quiz App"}
          projectdetail={
            "Hy! I have created this Quiz App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://quizya.netlify.app"
        />

        {/* Calculator App */}
        <Project1
          profile_pic={assets.fourty}
          projectname={"Calculator App"}
          projectdetail={
            "Hy! I have created this Calculator App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://sscalcolatrice.netlify.app"
        />

        {/* Grocify Store App */}
        <Project1
          profile_pic={assets.fourty2}
          projectname={"Grocify Store App"}
          projectdetail={
            "Hy! I have created this Grocify Store App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://ssgrocifyclone.netlify.app"
        />


          {/* Weather App */}
        <Project1
          profile_pic={assets.thirty7}
          projectname={"Weather App"}
          projectdetail={
            "Hy! I have created this Weather App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://le-temps.netlify.app"
        />

          {/* Weather App */}
        <Project1
          profile_pic={assets.shoecard}
          projectname={"Shoe Product Card"}
          projectdetail={
            "Hy! I have created this Shoe Product Card App  using REACT , Tailwind and Vite it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://shoe-produuct-card.netlify.app"
        />

        {/* Facebook Login Page Clone App */}
        <Project1
          profile_pic={assets.fourty3}
          projectname={"Facebook Login Page Clone App"}
          projectdetail={
            "Hy! I have created this Facebook Login Page Clone App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://fbclonebyss.netlify.app"
        />

        {/* Discord Clone App */}
        <Project1
          profile_pic={assets.fourty4}
          projectname={"Discord Clone App"}
          projectdetail={
            "Hy! I have created this Discord Clone App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://disscoord.netlify.app"
        />

        {/* Password Toggler */}
        <Project1
          profile_pic={assets.PasswordToggler}
          projectname={"Password Toggler"}
          projectdetail={
            "Hy! I have created this Password Toggler using React js, it's portable you can also use it in your projects which helps you to show or hide password and it's fully portable, you can also use it to your code."
          }
          projectlink="https://password-toggler-ss.netlify.app"
        />

        {/* Dark Mode Enabler */}
        <Project1
          profile_pic={assets.DarkModeEnabler}
          projectname={"Dark Mode Enabler"}
          projectdetail={
            "Hy! I have created this dark mode enabler using React js, it's portable you can also use it in your projects which helps you to see better in black Resolutions. you can also use it to your code. "
          }
          projectlink="https://dark-mode-enabler-by-ss.netlify.app"
        />

        {/* Age Calculator App */}
        <Project1
          profile_pic={assets.AgeCalculatorApp}
          projectname={"Age Calculator App"}
          projectdetail={
            "Hy! I have created this Age Calculator App  using React js, it's portable you can also use it in your projects which helps you to see Your age. you can also use it to your code. "
          }
          projectlink="https://age-calculator-react-ss.netlify.app"
        />

        {/* Digital Clock App */}
        <Project1
          profile_pic={assets.ClockApp}
          projectname={"Digital Clock App"}
          projectdetail={
            "Hy! I have created this Digital Clock App  using React js, it's portable you can also use it in your projects which helps you to see Your age. you can also use it to your code. "
          }
          projectlink="https://clock-app-react-ss.netlify.app"
        />

        {/* Random Password Generator App */}
        <Project1
          profile_pic={assets.RandomPassGen}
          projectname={"Random Password Generator App"}
          projectdetail={
            "Hy! I have created this Random Password Generator App  using React js, it's portable you can also use it in your projects which helps you to generate random passwords"
          }
          projectlink="https://rpgars.netlify.app"
        />

        {/* Login And Signup App */}
        <Project1
          profile_pic={assets.fourteen}
          projectname={"Login And Signup App"}
          projectdetail={
            "Hy! I have created this Login and signup App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://log-in-and-sign-up-app.netlify.app"
        />

        {/* Drag and Drop App */}
        <Project1
          profile_pic={assets.fifteen}
          projectname={"Drag and Drop App"}
          projectdetail={
            "Hy! I have created this Drag and Drop App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://drags-an-drops.netlify.app"
        />

        {/* Product Page Design App */}
        <Project1
          profile_pic={assets.sixteen}
          projectname={"Product Page Design App"}
          projectdetail={
            "Hy! I have created this Product Page Design App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://product-pages-designs.netlify.app"
        />

        {/* Progress Bar App */}
        <Project1
          profile_pic={assets.seventeen}
          projectname={"Progress Bar App"}
          projectdetail={
            "Hy! I have created this Progress Bar App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://discipllined-bar.netlify.app"
        />

        {/* Drop Down Menu App */}
        <Project1
          profile_pic={assets.eighteen}
          projectname={"Drop Down Menu App"}
          projectdetail={
            "Hy! I have created this Drop Down Menu App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://dropdownmenuu.netlify.app"
        />

        {/* Mini Calendar App */}
        <Project1
          profile_pic={assets.nighnteen}
          projectname={"Mini Calendar App"}
          projectdetail={
            "Hy! I have created this Mini Calendar App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://minicalendarapp.netlify.app"
        />

        {/* Error Handler Page App */}
        <Project1
          profile_pic={assets.twenty1}
          projectname={"Error Handler Page App"}
          projectdetail={
            "Hy! I have created this Error Handler Page App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://comingsooonapp.netlify.app"
        />

        {/* Password Strength App */}
        <Project1
          profile_pic={assets.twenty3}
          projectname={"Password Strength App"}
          projectdetail={
            "Hy! I have created this Password Strength App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://password-strengtth-app.netlify.app"
        />

        {/* Form Validation App */}
        <Project1
          profile_pic={assets.twenty6}
          projectname={"Form Validation App"}
          projectdetail={
            "Hy! I have created this Form Validation App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://formvaliditypp.netlify.app"
        />

        {/* Password Toggler App */}
        <Project1
          profile_pic={assets.twenty7}
          projectname={"Password Toggler App"}
          projectdetail={
            "Hy! I have created this Password Toggler App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://togglepasswords.netlify.app"
        />

        {/* PopUp App */}
        <Project1
          profile_pic={assets.twenty8}
          projectname={"PopUp App"}
          projectdetail={
            "Hy! I have created this PopUp App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://popupdisplay.netlify.app"
        />

        {/* Stop Watch App */}
        <Project1
          profile_pic={assets.twenty9}
          projectname={"Stop Watch App"}
          projectdetail={
            "Hy! I have created this Stop Watch App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://stopyourregrettime.netlify.app"
        />

        {/* Music App */}
        <Project1
          profile_pic={assets.thirty}
          projectname={"Music App"}
          projectdetail={
            "Hy! I have created this Music App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://beatsia.netlify.app"
        />

        {/* Toast Bar App */}
        <Project1
          profile_pic={assets.thirty1}
          projectname={"Toast Bar App"}
          projectdetail={
            "Hy! I have created this Toast Bar App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://toastbar.netlify.app"
        />

        {/* Age Calculator App */}
        <Project1
          profile_pic={assets.thirty3}
          projectname={"Age Calculator App"}
          projectdetail={
            "Hy! I have created this Age Calculator App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://calculateyourfatherregretyears.netlify.app"
        />

        {/* Create Notes App */}
        <Project1
          profile_pic={assets.thirty4}
          projectname={"Create Notes App"}
          projectdetail={
            "Hy! I have created this Create Notes App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://createnotesia.netlify.app"
        />

        {/* To Do App */}
        <Project1
          profile_pic={assets.thirty6}
          projectname={"To Do App"}
          projectdetail={
            "Hy! I have created this To Do App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://todooooooooooo.netlify.app"
        />

        {/* Clock App */}
        <Project1
          profile_pic={assets.thirty9}
          projectname={"Clock App"}
          projectdetail={
            "Hy! I have created this Clock App  using HTML, CSS and JS it's portable you can also use it in your projects which helps you to use it's functionality and become a scalable Front End Developer"
          }
          projectlink="https://orologiodigitale.netlify.app"
        />
      </div>
    </div>
  );
};

export default Frontendprojects;
