'use client'
import { ArrowBigRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
export default function page() {
  return (
    <section class="flex flex-col items-center justify-center min-h-screen">
      <div class="project-description px-6 mx-12">
        <p class="mb-4">
          I recently designed and built a motion-controlled servo system, combining an Arduino microcontroller with a Passive Infrared (PIR) sensor. This project was intended to explore automation using motion detection technology, aiming to create a functional and responsive system that could detect movement within a specific range and react accordingly by adjusting the servo motor's position.
        </p>

        <p class="mb-4">
          The core of this setup is the Arduino, which processes signals from the PIR sensor to detect motion in the 
          surrounding area. PIR sensors are especially suited for projects like these due to their low power consumption, 
          sensitivity, and ease of integration with microcontrollers. Whein the PIR sensor detects movement, it sends a 
          signal to the Arduino, which then triggers the servo motor to rotate to a predefined position. I configured 
          the servo to respond with different angles based on the range of motion detected, creating a dynamic and 
          interactive response. The concept of this project is suitable for various real-world applications, such as automated doors, rotating camera mounts, or even simple robotic arms.
        </p>

        <div class="float-left mr-6 mb-4 max-w-s">
          <Image src="https://res.cloudinary.com/dvt9oo5gl/image/upload/v1731447426/Screenshot_2024-11-12_at_4.36.44_PM_ezhj7x.png" width={250} height={250} alt="Project Image 1" class="w-full h-auto"/>
        </div>

        <p class="">
          Alongside the electrical setup, I designed a custom housing for the components in CAD software, 
          specifically SolidWorks. This enclosure was crucial to securely hold the Arduino, the servo motor,
           and the PIR sensor in place while maintaining accessibility for adjustments. Using SolidWorks, I created a 
           compact yet robust holder that could easily accommodate all components and withstand minor vibrations 
           from the servo motor’s movement. This was made so that it could house an arduino, a battery, a breadboard, a servo, and a PIR sensor.
            This holder design included specific mounting points for each component, enabling easy assembly and disassembly as needed.
        </p>

        <div class="float-right ml-6 max-w-s mb-4">
          <Image width={250} height={250} src="https://res.cloudinary.com/dvt9oo5gl/image/upload/v1731449326/Screenshot_2024-11-12_at_5.08.08_PM_hscjrd.png" alt="Project Image 2" class="w-full h-auto"/>
        </div>

        <div class="clear-both"></div> 

        <p class="">
          This project taught me valuable lessons about integrating electronic components with custom-designed hardware enclosures.
           The Arduino and PIR sensor worked seamlessly together, and the CAD-designed holder provided a clean and organized way 
           to house everything. It also deepened my understanding of programming and calibrating motion sensors and servos, as well 
           as designing functional, real-world applications in SolidWorks. Overall, this motion-controlled servo project has the 
           potential to be expanded or modified for future applications, such as security automation, hands-free door openers, 
           or other interactive robotic systems. Moving forward, I hope to expand on this project by adding more complex features, such as connecting the system to a 
          network for remote control and monitoring, or integrating additional sensors to enhance its sensitivity and 
          responsiveness. 
        </p>

        
      </div>
      <a
        href="https://github.com/Takella6315/motiondetectingarduino"
        download="Teja Akella"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="mt-12 mx-auto">
          You can find my code here <ArrowBigRight size={18}/>
        </Button>
      </a>

    </section>
  )
};
