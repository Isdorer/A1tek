import Navbar from "./components/Navbar";

import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";

import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
import Columns from "./components/Columns";
import Accordion from "./components/Accordion";
import Two from "./components/Two";
import Footer from "./components/Footer";







function App() {
  const images = [
    '/image/trech.PNG',
    '/image/trech2.PNG',
    '/image/trA.JPG',
    '/image/trB.JPG',
    '/image/trech3.PNG',
    './image/calculator.JPG',
    '/image/weatheA.JPG',
    
    
  ]
  return (
    <div className="App">
         
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <h1 className="projects-title">Designs</h1>
      <ImageSlider   images={images} />
      <Contact></Contact>
      <div className="accord-first">
        <div className="accord-head">
        <h1>frequently asked questions</h1>
        <p>In frontend development, FAQs serve as essential references, offering insights into best practices, frameworks, and design patterns that keep user interfaces sleek and responsive.</p>
        </div>
      <Accordion
        title="What is Front-End Development?"
        content="Front-end development, also known as client-side development, focuses on creating the user interface and user experience of a website or web application. It involves working with HTML, CSS, and JavaScript to build interactive and visually appealing web pages."
      />
      <Accordion
        title="What is HTML, CSS, and JavaScript?"
        content="HTML (Hypertext Markup Language) is used for structuring web content.
        CSS (Cascading Style Sheets) is used for styling and layout.
        JavaScript is a programming language used for adding interactivity and dynamic behavior to web pages."
      />
      <Accordion
        title="What is Responsive Web Design?"
        content="Responsive web design is an approach to design and development that ensures web pages adapt and look good on various devices and screen sizes, including desktops, tablets, and smartphones."
      />
      <Accordion
        title="What are Front-End Frameworks?"
        content="Front-end frameworks like React, Angular, and Vue.js provide a structured way to build complex web applications. They offer reusable components and help manage application state."
      />
      <Accordion
        title="What is React.js?"
        content="React.js is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of web applications efficiently."
      />
      <Accordion
      title="What is the Document Object Model (DOM)?"
      content="The DOM is a programming interface provided by web browsers that represents the structure of a web page as a tree of objects. It allows JavaScript to interact with and manipulate web page content."
      />
      <Accordion
      title="What are Single Page Applications (SPAs)?"
      content="SPAs are web applications that load a single HTML page and dynamically update the content as the user interacts with the application. React and Angular are often used to build SPAs."
      />

<Accordion
      title="What is Version Control?"
      content="Version control systems like Git are used to track changes to code, collaborate with others, and maintain a history of code revisions. GitHub and GitLab are popular platforms for hosting Git repositories."
      />
      <Accordion
      title="How do I optimize website performance?"
      content="Optimizing website performance involves techniques like minifying and compressing assets, lazy loading, using a content delivery network (CDN), and reducing HTTP requests. Tools like Lighthouse can help analyze and improve performance."
      />
      <Accordion
      title="What are Progressive Web Apps (PWAs)?"
      content="Progressive Web Apps (PWAs) are web applications that use modern web technologies to provide an app-like experience in the browser. PWAs can work offline, offer push notifications, and provide fast and reliable performance. They aim to combine the best of web and mobile app experiences."
      />
      <Accordion
      title="What is Version Control and Why is it Important?"
      content="Version control, often facilitated by tools like Git, is the practice of tracking changes to code over time. It allows developers to collaborate, maintain a history of code revisions, and manage codebase versions. Version control is crucial for code management, collaboration, and the ability to revert to previous code states if issues arise."
      />
      <Accordion
      title="How Do I Optimize Front-End Performance?"
      content="Optimizing front-end performance involves various techniques, including:
      Minifying and compressing CSS and JavaScript files.
      Reducing the number of HTTP requests by bundling assets.
      Lazy loading images and content.
      Using a Content Delivery Network (CDN) to serve assets from geographically distributed servers.
      Implementing browser caching.
      Reducing unnecessary animations and heavy scripts that can slow down page load times.
      These questions cover fundamental aspects of front-end development and are often asked by both beginners and experienced developers seeking to improve their web development skills.

      
      "
      />
    </div>
      <Columns></Columns>
      <Two></Two>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
