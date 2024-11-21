import chatbotImg from "@/_public/chatbot.jpg";
import awsss3Img from "@/_public/awsss3.png";
import jwtauthImg from "@/_public/jwtauth.png";
import testsImg from "@/_public/test.png";
import storeImg from "@/_public/store.jpeg";
import paystackImg from "@/_public/paystack.png";
import Experience from "@/components/experience";

const cardProject = [
    {
      title: "Chatbot Whatsapp",
      description:
        "Built with Node.js automates messaging, include responding to messages, external storing data.",
      cta: "Github",
      image: chatbotImg,
      link: "https://github.com/Guilhermefonseca2021/whatsapp-bot",
    },
    {
      title: "Aws Uploading",
      description:
        "Integrates AWS S3 for file storage and Cloudinary in Node for handling media processing or metadata.",
      cta: "Github",
      image: awsss3Img,
      link: "https://github.com/Guilhermefonseca2021/AWS-S3-File-Manager",
    },
    {
      title: "Authentication Jwt",
      description: "Node.js API for user authentication using JWT and Prisma ORM for database. Access protected routes.",
      cta: "Github",
      image: jwtauthImg,
      link: "https://github.com/Guilhermefonseca2021/auth-server",
    },
    {
      title: "Paystack Nodejs",
      description: "Transactions, verifying payments, and managing refunds. Securely store, processing payment requests.",
      cta: "Github",
      image: paystackImg,
      link: "https://github.com/Guilhermefonseca2021/paystack-nodejs-integration",
    },
    {
      title: "Native tests",
      description: "Testing in Node.js using libraries like Mocha for unit and integration to validate application logic.",
      cta: "Github",
      image: testsImg,
      link: "https://github.com/Guilhermefonseca2021/native-tests-nodejs",
    },
    {
      title: "Store web",
      description: "React-based UX design from Figma for a shopping store implemented to handle cart interactions.",
      cta: "Github",
      image: storeImg,
      link: "https://github.com/Guilhermefonseca2021/Storeweb",
    },
  ];
export default cardProject