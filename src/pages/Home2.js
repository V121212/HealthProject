import React from "react";
import Cards from "../Components/Cards";
import Img2 from "../Images/dietImg2.jpeg";
import healthyImg from "../Images/healthyImg.jpg";
import chatImg from "../Images/chatImg.jpg";
import aiChat from "../Images/aiBotImg.jpg";
import trackImg from "../Images/trackerImg.jpg";

function Home2() {
  return (
    <div className=" min-h-screen flex flex-col gap-5 justify-center items-center max-sm:w-screen  ">
      <div className="text-5xl font-bold">
        <p>Our Features</p>
      </div>
      <div className="flex flex-row justify-center items-center max-sm:flex-col max-sm:w-screen   gap-5">
        <Cards
          img={healthyImg}
          head="Healthy Recipes"
          text="Our application empowers you to make healthy choices with delicious
          recipes that support both your physical and mental well-being. We
          believe that healthy eating shouldn't be a sacrifice – it can be
          flavorful and enjoyable."
        />
        <Cards
          img={chatImg}
          head="Directly Chat "
          text="Our application connects you directly with qualified fitness
           influencers who can provide personalized advice to
            help you achieve your fitness goals."
        />
      </div>
      <div className="flex flex-row gap-5 justify-center items-center max-sm:flex-col max-sm:w-screen  ">
        <Cards
          img={aiChat}
          head="AI ChatBot"
          text="Our application offers direct access to an AI chatbot,
           providing you with personalized advice you can integrate seamlessly 
           into your daily routine. Like what you receive? The AI learns from your
            interactions, continually refining its suggestions to better suit your needs."
        />
        <Cards
          img={trackImg}
          head="Track Progress"
          text="Our application tracks your daily progress on your journey to improved 
          physical and mental health. It provides insightful 
          feedback and celebrates your achievements, keeping you motivated and engaged."
        />
      </div>
    </div>
  );
}

export default Home2;
