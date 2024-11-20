import About from "@/components/about";
import Header from "@/components/header";
import CardProject from "@/components/cardproject";
import chatbotImg from "@/_public/chatbot.jpg";
import awsss3Img from "@/_public/awsss3.png";
import jwtauthImg from "@/_public/jwtauth.png";
import testsImg from "@/_public/test.png";
import storeImg from "@/_public/store.jpeg";
import paystackImg from "@/_public/paystack.png";
import Experience from "@/components/experience";

export default function Page() {
  return (
    <div className="">
      <div className="p-4">
        <Header />
        <About />
        <div id="projects" className="my-64 mx-6">
          <ul className="grid gap-16 place-items-center sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
            <CardProject
              image={chatbotImg}
              title="Chatbot Whatsapp"
              description="Built with Node.js automates messaging, include responding to messages, external storing data."
              cta="Github"
              link="https://github.com/Guilhermefonseca2021/whatsapp-bot"
            />
            <CardProject
              image={awsss3Img}
              title="Aws Uploading"
              description="Integrates AWS S3 for file storage and Cloudinary in Node for handling media processing or metadata."
              cta="Github"
              link="https://github.com/Guilhermefonseca2021/AWS-S3-File-Manager"
            />
            <CardProject
              image={jwtauthImg}
              title="Authentication Jwt"
              description="Node.js API for user authentication using JWT and Prisma ORM for database. Access protected routes."
              cta="Github"
              link="https://github.com/Guilhermefonseca2021/auth-server"
            />
            <CardProject
              image={paystackImg}
              title="Paystack Nodejs"
              description="Transactions, verifying payments, and managing refunds. Securely store, processing payment requests."
              cta="Github"
              link="https://github.com/Guilhermefonseca2021/paystack-nodejs-integration"
            />
            <CardProject
              image={testsImg}
              title="Native tests"
              description="Testing in Node.js using libraries like Mocha for unit and integration to validate application logic."
              cta="Github"
              link="https://github.com/Guilhermefonseca2021/native-tests-nodejs"
            />
            <CardProject
              image={storeImg}
              title="Store web"
              description="React-based UX design from Figma for a shopping store implemented to handle cart interactions."
              cta="Github"
              link="https://github.com/Guilhermefonseca2021/Storeweb"
            />
          </ul>
          <section className="my-14 mx-6">
            <Experience />
          </section>
        </div>
      </div>
    </div>
  );
}
