/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Shourya's Portfolio",
  description:
    "A Full Stack Web Developer, Graphic Designer & UI/UX Designer. Skilled in designing, building & maintaining highly scalable and available software applications.",
  og: {
    title: "Shourya Gupta Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Shourya Gupta",
  logo_name: "ShouryaGupta",
  // nickname: "Shauri",
  subTitle:
    "A Full Stack Web Developer, Graphic Designer & UI/UX Designer. Skilled in designing, building & maintaining highly scalable and available software applications.",
  resumeLink:
    "https://drive.google.com/file/d/1sG6RGYvqiAyQo12brExRMqTWlQD150XK/view?usp=sharing",
  portfolio_repository: "https://github.com/shourygupta28",
  githubProfile: "https://github.com/shourygupta28",
};

const socialMediaLinks = [
  /* Social Media Link */

  {
    name: "Github",
    link: "https://github.com/shourygupta28",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shouryguptaa/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:shourya.2001gupta@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/iamshoury",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_._arcane_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building resposive website front end using React",
    //     "⚡ Developing highly scalable and maintainable REST APIs using NodeJS, Express, Django, PHP",
    //     "⚡ Creating application backend using C++, along with integration of databases such as Oracle SQL & MongoDB",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Developing highly scalable and maintainable REST APIs using NodeJS, Express, Django, PHP",
        "⚡ Creating application backend using C++, along with integration of databases such as Oracle SQL & MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#52A74B",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/samarth_g2001",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shauri2805",
    },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@shourya91",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Thapar Institute Of Engineering & Technology",
      subtitle: "B.E. in Electronics & Communication",
      logo_path: "Thapar.png",
      alt_name: "Thapar Logo",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Current CGPA = 7.2 CGPA.",
        "⚡ I have studied basic software engineering subjects like C++, DSA, Algorithms, Computer Network, Operating System, DBMS, Analog & Digital Communication, DSP, ES etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development and Data Science.",
      ],
      website_link: "https://thapar.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    {
      title: "C Programming For Beginners - Built Game Using C Language",
      subtitle: "- Learn Programming",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-aa2f5bf8-dff5-4e8b-8cd0-e61b87a4b10a/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "The Web Developer Bootcamp",
      subtitle: "- Colt Steele",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6964c142-a66a-4f33-8a7c-cf9c62084b04/",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "The Complete Full-Stack JavaScript Course",
      subtitle: "- Joseph Delgadillo",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7b4bf2e8-c4e9-42ca-8bcb-dc257427bfcc/",
      alt_name: "Udemy",
      color_code: "#2A73CC",
    },
    {
      title: "The Complete Ethical Hacking Course",
      subtitle: "- Joseph Delgadillo, Nick Germaine",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8ed4fab4-62f8-45c5-9172-62af10fcbed6/",
      alt_name: "Udemy",
      color_code: "#02447B",
    },
    {
      title: "Machine Learning",
      subtitle: "- Idan Gabrieli",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bb653d04-8743-4d0c-96c2-aed46af65c3b/",
      alt_name: "Udemy",
      color_code: "#FFB6C1",
    },
    {
      title: "The Complete Python 3 Course - Beginner to Advanced",
      subtitle: "- Joseph Delgadillo, Nick Germaine",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-481d7ad3-f22b-46aa-9114-7ca406c56681/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many clubs within my university and evolving startups as well as a Front-end Developer and Designer . I have also worked with some well established companies mostly as a Designer. I love organising events and that is why I am also involved with many college cells as a core member/representative.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work & Internships",
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Junior Graphic Designer & Web Developer",
          company: "Gradeffects Pvt. Ltd.",
          company_url: "https://www.gradeffects.com/",
          logo_path: "Gradeffects logo.jfif",
          duration: "July 2021 - Sept 2021",
          location: "Work from Home",
          description:
            "I have worked on live projects undertaken by the company and designed front-end components for the same and did graphic designing for the social media posts and publicity. The tech stack I used was HTML, CSS, Bootstrap and JavaScript. And for graphic designing I used Adobe Photoshop and Adobe Illustrator.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Joint & Finance Secretary & Web Developer, EDC",
          company: "Entrepreneurship Development Cell",
          company_url: "https://sites.google.com/thapar.edu/edctiet",
          logo_path: "EDC_logo.png",
          duration: "September 2019 - Present",
          location: "Thapar University, Patiala, Punjab",
          description:
            "EDC,TIET conceptualizes and executes brand integration strategies having a diverse target group of students, entrepreneurs, and corporates. Led a team of 120+ members (including 40 core members). Managed a fund of ₹ 3.5 Lakhs (including sponsorships).",
          color: "#4285F4",
        },
        {
          title: "OWASP Student Chapter Core Member",
          company: "OWASP",
          company_url: "https://main.owasp.co.in/",
          logo_path: "logo-owasp.png",
          duration: "September 2019 - May 2021",
          location: "Thapar University, Patiala, Punjab",
          description:
            "The team of OWASP Student Chapter, one of the gilt-edged coding society, involves ingenious mind solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries. By successfully organizing many hackathons, tech-talks, workshops and coding nights, we have always strived hard to maintain the coding culture throughout the campus.",
          color: "#D83B01",
        },
        {
          title: "Microsoft Student Chapter Member",
          company: "MLSC TIET",
          company_url:
            "https://mlsctiet.co.in/",
          logo_path: "mlsc_logo.png",
          duration: "September 2019 - May 2020",
          location: "Thapar University, Patiala, Punjab",
          description:
            "Microsoft Learn Student Chapter is a technical society which is dedicated to elevate the coding culture of Thapar Institute of Engineering and Technology by mentoring and motivating its students to refine their critical thinking, logical reasoning and coding skills. One of the elite societies of TIET.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2021 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Microsoft, Uber, Facebook, Google, Python, etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack Web Applications and deploy them to cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Shourya.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "Mathura, Uttar Pradesh - 281001",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@27.4958739,77.6760804,20z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8273500941",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  contactPageData,
};
