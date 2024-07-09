const resume = {
    "name": "Pradheep Kumar",
    "contact_information": {
      "email": "pradheepkumar5555@gmail.com",
      "phone": "9025014324",
      "address": "11/144,Glendale Esate,Glenmore Division,CoonoorX,The Nillgris.",
      "pincode":"643102."
    },
    "summary": "Experienced software engineer with a strong background in web development and database management. Proven track record of delivering high-quality solutions in agile environments.",
    "education": [
      {
        "degree": "Bachelor of Engineer Electrical & electrnicals Engineering",
        "institution": "CSI Colloge og Engineering",
        "location": "City,Ooty,ketti",
        "graduation_date": "May 2021"
      }
    ],
    "experience": [
      {
        "position": "Full Stack Developer ",
        "company": "guvi.",
        "location": "chenni",
        "start_date": "June 2024",
        "end_date": "prestend",
        "responsibilities": [
          "Designed and implemented RESTful APIs for a scalable cloud-based platform.",
          "Led a team of developers through various phases of software development lifecycle.",
          "Optimized database performance and data retrieval processes."
        ]
      },
      {
        "position": "Electrical Engineer",
        "company": "Brun Side Estate..",
        "location": "The Nillgris",
        "start_date": "June 2021",
        "end_date": "May 2022",
        "responsibilities": [
          "Designed and implemented Electrical filed."
          
           
          ]
      }
    ],
    "skills": [
      "JavaScript",
      "Java",
      "Git",
      "HTML/CSS"
    ],
    "languages": [
      {
        "language": "Tamil",
        "fluency": "Native"
      },
      {
        "language": "English",
        "fluency": "Intermediate"
      }
    ],
    "interests": [
      "Open-source projects",
      "Photography"
    ]
}
  console.log("Using for loop:");
  for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }
  console.log("\n");
  console.log("Using for...in loop:");
  for (let key in resume.contact_information) {
    console.log(`${key}: ${resume.contact_information[key]}`);
  }
  console.log("\n");
  console.log("Using for...of loop:");
  for (let interest of resume.interests) {
    console.log(interest);
  }
  console.log("\n");
  console.log("Using forEach:");
  resume.experience.forEach((job) => {
    console.log(`Position: ${job.position}`);
    console.log("Responsibilities:");
    job.responsibilities.forEach((responsibility, index) => {
      console.log(`${index + 1}. ${responsibility}`);
    });
    console.log("\n");
  });
  