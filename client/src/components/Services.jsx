import Section from "./Section";
import Heading from "./Heading";
import { service1,  check } from "../assets";
import Accordian from "./Accordian";

import image from "../assets/image.png"
import { brainwaveServices } from "../constants";
import {
  
  Gradient,
 
} from "./design/Services";
import logo  from '../assets/logo.png';
import Generating from "./Generating";
import chatbotdemo from '../assets/collaboration/chatbot-demo.mp4' ;
import converse from '../assets/collaboration/converse.mp4'


const Services = () => {
  return (
    <Section id="how-to-use">
  <div className="container mx-auto">
    <div className="flex justify-center">
    <h1 className="text-4xl font-bold text-center pb-10">
  Yugm: Your AI-Powered Knowledge Sidekick 🦾!
</h1>
    </div>
<p className="body-2 mb-10 text-center text-n-4 text-lg leading-relaxed">
  Smarter, faster, and secure knowledge management—unlock seamless access with AI-driven precision!
</p>
        <div className="relative">
          <div className="relative z-1 flex items-center h-[40rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Yugm AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
            <div className="flex justify-start items-center text-black ">
            <Accordian className=""/>
            </div>

              <p className="-ml-28  text-n-3 text-justify">
          
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* <Generating className="absolute left-4 right-4 bottom-2 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-3 lg:-translate-x-1/2" /> */}
          </div>
          <br/>
          <br/>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2" id="demo">
            <div className="relative min-h-[40rem] min-w-[70rem] border border-n-1/10 rounded-3xl overflow-hidden -ml-[4.5rem]">
             

              <div className="absolute inset-0 flex flex-col justify-end align-middle p-4 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">

                {/* < className="h4 mb-4"> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                  <h1 className="h4 p-4">Streamline knowledge access across the entire organization</h1>
                  <video
                      src={chatbotdemo}
                      className="rounded-lg border-2 border-gray-700 object-cover h-[540px] transition-transform transform hover:scale-95 focus:scale-95 focus:outline-none hover:brightness-110 hover:shadow-lg hover:shadow-gray-500/50"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls={false}
                    />
                </div>
               
              </div>

              {/* <PhotoChatMessage /> */}
            </div>

            <div className="p-4 mt-[120px] h-[400px] bg-n-7 rounded-3xl overflow-hidden lg:min-h-[25rem] w-[300px] ml-[420px] ">
              <div className="py-4 px-4 xl:px-2">
              
                <p className="justify-center  px-4 py-4 text-left text-gray-400">
                Yugm AI consolidates knowledge access by connecting with commonly-used knowledge bases, enabling employees to obtain tailored, precise, and current information with brief responses. Additionally, it recognizes knowledge gaps and takes the initiative to develop useful content to avoid recurring problems.
                </p>
               
              </div>

           
            </div>
          </div>
          
          <br/>
          <br/>
          {/* second video bar */}
        
          <div className="relative z-1 grid gap-3 lg:grid-cols-2">
        

            <div className="p-4 bg-n-7 rounded-3xl h-[400px] mt-[120px] overflow-hidden lg:min-h-[20rem] w-[300px] -ml-[80px]">
              <div className="py-4 px-4 xl:px-4 ">
               
                <p className="justify-center  p-4 text-left text-gray-400">
                Let Yugm be your productivity sidekick! Just ask, and Yugm delivers spot-on responses from your knowledge vault, all in natural language. The result? Fast answers, less time hunting for info, and more time getting stuff done!
                </p>
               
              </div>

           
            </div>
            <div className="relative min-h-[40rem] min-w-[70rem] -ml-[400px] border border-n-1/10 rounded-3xl overflow-hidden ">
             

             <div className="absolute inset-0 flex flex-col justify-end align-middle p-4 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 ">

               {/* < className="h4 mb-4"> */}
               <div className="absolute flex flex-col inset-0 flex items-center justify-center p-3">
               <h1 className="h4 p-4"> Simplifying Knowledge Retrieval</h1>
               <video
                  src={converse}
                  className="rounded-lg border-2 border-gray-700 object-cover h-[540px] transition-transform transform hover:scale-95 focus:scale-95 focus:outline-none hover:brightness-110 hover:shadow-lg hover:shadow-gray-500/50"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
               </div>
             </div>
           </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
