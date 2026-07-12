import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { TiltCard3D } from "../components/ui/TiltCard3D";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — BVC IIT Kanpur" },
      {
        name: "description",
        content:
          "20+ years of alumni: professors at IITs and IIMs, scientists, engineers, and leaders across the world.",
      },
      { property: "og:title", content: "Alumni Network — BVC IIT Kanpur" },
      { property: "og:description", content: "Meet the alumni of BVC IIT Kanpur." },
    ],
  }),
  component: AlumniPage,
});

const alumni = [
  {
    "name": "Anil Krishna Yadav",
    "degree": "BS, CHM (2018-22)",
    "now": "Machine Learning engineer — Finarb consulting, New Town, Kolkata",
    "photo": "https://bvciitk.com/images/Alumini/anil_prabhu.jpg",
    "gradyr": 2022,
    "about": "Anil Krishna Yadav did his Btech. in the department of Chemistry at IIT Kanpur from 2018-22. After graduation he is working as a Machine Learning Engineer at Finarb Consulting Pvt. Ltd. in kolkata. During his stay at IIT Kanpur, he was an active member of BVC. He was expert in sweet kirtan, cooking , maintaining vaishanva standards and preaching"
  },
  {
    "name": "Prakash Kumar Singh",
    "degree": "M.Tech, ME (2020-2022)",
    "now": "Physics Teacher — Shri Sandipani Academy",
    "photo": "https://bvciitk.com/images/Alumini/prakash_prabhu.jpg",
    "gradyr": 2022,
    "about": "Prakash Kr Singh did his B-Tech in department of Mechanical Engineering at NIT Silchar from 2013-17. He then came to IIT Kanpur for masters in Manufacturing Science and  worked on some interesting projects at MedTech, IIT Kanpur. He is currently a Physics teacher at Shri Sandipani academy, near Pune. He was inspired by the teachings of Bhagavad Gita during early days of his undergraduate study and was actively connected with BVC during his postgraduate at IITK. Apart from guiding students academically, he likes to give guidance for their spiritual well being."
  },
  {
    "name": "Dr. Jayant Mohanta",
    "degree": "Post Doctoral Research(2018-21)",
    "now": "Assistant Professor, — ME, IIT Jodhpur",
    "photo": "https://bvciitk.com/images/Alumini/jayantamohanta.jpg",
    "gradyr": 2021,
    "about": "Dr. Jayant Kumar Mohanta did his B-Tech in department of Mechanical Engineering at IIT Indore from 2010-14 and later completed his P.h.D in just 4 years from IIT Indore. He than came to IIT Kanpur for Post-doc in Robotics under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an assistant professor at IIT Jodhpur in the ME Department. He got connected to the teachings of Bhagavad during his undergraduate days and is now very expert to teach that science in a very interesting and thoughtful manner."
  },
  {
    "name": "Ujjwal Khandelwal",
    "degree": "BTech-MTech, ME(2015-20)",
    "now": "Software Engineer — Accenture, Japan",
    "photo": "https://bvciitk.com/images/Alumini/ujjwalkhandelwal.jpg",
    "gradyr": 2020,
    "about": "Ujjwal Khandelwal is a Y15 batch (B-Tech, M-Tech) student in the department of Mechanical Engineering at IIT Kanpur. He is currently working as a Software Engineer in Accenture, Japan. He was one of the toppers in his department and his INTERNSHIP EXPERIENCES includes Tele-Research Intern at National University of Singapore and Machine Learning Intern at ISMRITI. His interests include but are not limited to the field of Machine Learning, NLP, and Data Analysis. He is a core member of the Bhaktivedanta Club, IIT Kanpur and coordinated many times Bhagavad Gita Lecture Series, Janmashtami Programs and various retreats"
  },
  {
    "name": "Madhav Rijal",
    "degree": "MTech(2019-2021)",
    "now": "M.Sc. Student — Mechatronics, SDU, Denmark",
    "photo": "https://bvciitk.com/images/Alumini/madhavrijal.jpeg",
    "gradyr": 2021,
    "about": "Madhav Rijal completed his MTech from IIT-KANPUR in 2021. He came in connection with BVC during his first semester. He was attracted to krishna consciousness due to scientific discourse on Bhagawat Gita presented by Dr. Lila Purushottam DAS. He often used to tell that food prepared at Bhaktivedānta club is entirety different from Normal food. Our prasadam did various magic for him. He appreciated Bhaktivedānta club for bringing positive change in his life as he often quotes ' I was living like animal before coming in the association of club members' ."
  },
  {
    "name": "Jitendra Soni",
    "degree": "BTech-MTech, MSE(2015-2020)",
    "now": "Ph.D. Student — MSE, IIT Delhi",
    "photo": "https://bvciitk.com/images/Alumini/jitendrasoni.jpeg",
    "gradyr": 2020,
    "about": "He completed his B.Tech and M.Tech in the department of Material Science and Engineering at IIT Kanpur from 2015-2020. He was introduced to Bhaktivedanta Club by Keshav Prabhu (his batch mate) in the initial years and since then he is connected with Sir and his teachings of Bhagavad Gita. Currently, he is pursuing his PhD from IIT Delhi."
  },
  {
    "name": "Ravi Prakash",
    "degree": "PhD, EE(2014-21)",
    "now": "Postdoctoral researcher — TU Delft, Netherlands",
    "photo": "https://bvciitk.com/images/Alumini/raviprakash.jpg",
    "gradyr": 2021,
    "about": "Dr. Ravi Prakash was Institute Gold Medalist diring  B-Tech in department of Electrical Engineering at NIT Silchar from 2010-14 and later completed his P.h.D in Robotics from IIT Kanpur under Prof. Laxmidhar Behera and worked on various interesting projects . He is currently an a PostDoc in TU Delft, Netherlands where he works on developing robots that learn from humans. He got connected to the teachings of Bhagavad during the first year of his undergraduate days and is now teaching this science in a lucid and thoughtful manner. He has been preaching this message for more than 10 years now and is very popular in student programs."
  },
  {
    "name": "Manish Yadav",
    "degree": "BTMT (2015-20)",
    "now": "Software Engineer — Nference",
    "photo": "https://bvciitk.com/images/Alumini/manishyadav.jpg",
    "gradyr": 2020,
    "about": "Mr. Manish Yadav did his B-tech in the department of Mechanical Engineering at IIT Kanpur from 2015-19 and later completed his M-tech form IIT Kanpur and Deakin University Australia under Prof. Laxmidhar Behera on machine learning applications for machinical systems. He than joined Nference as a Software Engineer at Bangalore. He got connected with the teachings of Bhagwat Geeta during his third year of undergraduation and now he is teaching bhagwat geeta as a life manual to people who wants to lead a rational and meaningful life"
  },
  {
    "name": "Sachin Kumar Sahoo",
    "degree": "BTech, ME(2015-19)",
    "now": "Management Trainee — Tata Steel",
    "photo": "https://bvciitk.com/images/Alumini/sachinsahoo.jpg",
    "gradyr": 2019,
    "about": "Sachin Kumar Sahoo did his B-tech in department of Mechanical Engineering at IIT Kanpur from 2015-2019. He is now working as a Management Trainee at Tata Steel. He came in Krishna Consciousness in the 2nd year of his undergraduate days"
  },
  {
    "name": "Pranav Kulkarni",
    "degree": "BTech, ME(2015-19)",
    "now": "M.Sc. Student —  ME, Aalto University, Finland",
    "photo": "https://bvciitk.com/images/Alumini/pranavkulkarni.jpeg",
    "gradyr": 2019,
    "about": "Pranav Kulkarni did his B-Tech in the department of Mechanical Engineering at IIT Kanpur from 2015-19 and is currently pursuing his MSc in Mechanical Engineering from Aalto University in Finland. He got connected to the teachings of Bhagavad Gita during his third year of undergraduate studies at IIT Kanpur. He is actively preaching the message of Bhagavad Gita in Marathi and serving at ISKCON Helsinki."
  },
  {
    "name": "Sunil Kumar Dutta",
    "degree": "MTech, ME(2017-2019)",
    "now": "Ph.D. Student — Applied Mechanics, IIT Delhi",
    "photo": "https://bvciitk.com/images/Alumini/sunildutta.jpg",
    "gradyr": 2019,
    "about": "Sunil Kumar Dutta had joined  IIT Kanpur in 2017 for the MTech program in Mechanical Engineering. He came in contact with BVC with the help of his friend. Since then, he has been coming to BVC. He has been part of different festival celebrations, retreats, and morning programs. Currently, he is doing Ph.D. from IIT Delhi in the Department of  Applied Mechanics."
  },
  {
    "name": "Trilok Meena",
    "degree": "BTech, EE(2015-19)",
    "now": "Design Trainee Engineer — HAL",
    "photo": "https://bvciitk.com/images/Alumini/trilokmeena.jpg",
    "gradyr": 2019,
    "about": "Trilok Meena did his B-Tech in Electrical Engineer at IIT Kanpur from 2015-19. He is currently an Design Trainee Engineer at HAL in RWRDC division Bengaluru. He got connected to the teachings of Bhagavad gita during third year of his undergraduate days and has been practicing from the last 4 years."
  },
  {
    "name": "Krishan Meena",
    "degree": "B.Tech, ME(2015-19)",
    "now": "Student",
    "photo": "https://bvciitk.com/images/Alumini/krishnameena.jpg",
    "gradyr": 2019,
    "about": "Krishan Meena did his B.Tech in the department of Mechanical Engineering at IIT Kanpur from 2015-2019. He came in contact with the BVC-IITK devotees in 6th semester. He was part of various trips and events organised by the club."
  },
  {
    "name": "Abhishek Panchal",
    "degree": "BTech, MSE(2015-19)",
    "now": "Ph.D. Student — MSE, NUS, Singapore",
    "photo": "https://bvciitk.com/images/Alumini/Abhishek-Panchal.jpg",
    "gradyr": 2019,
    "about": "Abhishek Panchal did his BTech from IIT Kanpur(2015-19) in the department of Materials Science and Engineering. He got connected to the teachings of Bhagavad Gita in 3rd year through the programs and trips organized by Prof. Laxmindhar Behera. He was a part of the organizing team for 2018 Janmashtami festival at IIT Kanpur. He is currently pursuing PhD at NUS in area of solid state battery devices and also mentoring others to take advantage of this invaluable science of Bhagavad Gita."
  },
  {
    "name": "Himanshu Ranjan",
    "degree": "B-tech, BSBE, 2015-19",
    "now": "Maths Faculty — Vidya Mandir Classes, Delhi",
    "photo": "https://bvciitk.com/images/Alumini/himanshuranjan.jpg",
    "gradyr": 2019,
    "about": "He very much enjoyed the spiritual trips to Rishikesh, Mayapur etc.He has taught as a math faculty at Vidya Mandir Classes, Delhi. Currently he is preparing for UPSC CSE exam for last 1.5 yrs."
  },
  {
    "name": "Dr. Tharun Reddy",
    "degree": "B.tech,M.tech, Ph.D-EE(2009-19)",
    "now": "Assistant Professor — Dept. of EE, IIT Roorkee",
    "photo": "https://bvciitk.com/images/Alumini/tharunreddy.jpg",
    "gradyr": 2019,
    "about": "Dr. Tharun Reddy completed his B.tech + M.tech dual degree, and Ph.D. from EE department at IIT Kanpur. Currently, he is working as an Assistant Professor in the Electrical Engineering Department at IIT Roorkee. He is a devotee of the club."
  },
  {
    "name": "Shashi Kumar Munda",
    "degree": "BS, MTH(2013-17)",
    "now": "Student",
    "photo": "https://bvciitk.com/images/Alumini/shashimunda.png",
    "gradyr": 2017,
    "about": "Shashi Kumar Munda did his BS in Mathematics and Scientific Computing at IIT Kanpur. He was highly active in BVC during his IIT days."
  },
  {
    "name": "Rahul Kothari",
    "degree": "Integrated MSc (Physics) 2006 -2011, PhD (Physics) 2011 -- 2017",
    "now": "Postdoctoral Researcher — Cosmology, UWC, South Africa",
    "photo": "https://bvciitk.com/images/Alumini/rahulkothari.jpg",
    "gradyr": 2017,
    "about": "Rahul Kothari completed his MSc and PhD in Physics at IIT Kanpur. He is currently working as a Postdoctoral Researcher in Cosmology at the University of the Western Cape (UWC), South Africa."
  },
  {
    "name": "Manish Kumar Meena",
    "degree": "BTech, ME(2013-17)",
    "now": "Physics Faculty — Shri Sandipani Academy",
    "photo": "https://bvciitk.com/images/Alumini/manishmeena.jpg",
    "gradyr": 2017,
    "about": "Manish Kumar Meena completed his B.Tech in Mechanical Engineering at IIT Kanpur (2013-17). He currently teaches Physics at Shri Sandipani Academy."
  },
  {
    "name": "Dr. Venkata Buddhiraju",
    "degree": "PhD, CHE(2012-16)",
    "now": "Senior Research Scientist — TCS",
    "photo": "https://bvciitk.com/images/Alumini/venkatabuddhiraju.png",
    "gradyr": 2016,
    "about": "Dr. Venkata Buddhiraju completed his PhD in Chemical Engineering from IIT Kanpur. He works as a Senior Research Scientist at TCS."
  },
  {
    "name": "Chahat Upreti",
    "degree": "BTech-MTech, BSBE(2011-16)",
    "now": "Ph.D. Student — Bio., University of Texas, Dallas",
    "photo": "https://bvciitk.com/images/Alumini/chahatupreti.jpg",
    "gradyr": 2016,
    "about": "Chahat Upreti completed her dual degree at IIT Kanpur. Currently a PhD student in Biology at the University of Texas, Dallas. She is an active practitioner of Bhakti Yoga."
  },
  {
    "name": "Udit Singh",
    "degree": "MTech, EEM(2013-16)",
    "now": "Process Engineer — GreEngine Pvt Ltd",
    "photo": "https://bvciitk.com/images/Alumini/uditsingh.jpg",
    "gradyr": 2016,
    "about": "Udit Singh completed his M.Tech in Environmental Engineering and Management from IIT Kanpur. He works as a Process Engineer at GreEngine."
  },
  {
    "name": "Dr. Suvendu Samanta",
    "degree": "M.tech, EE(2013-15)",
    "now": "Assistant Professor — Department Of EE, IIT Kanpur",
    "photo": "https://bvciitk.com/images/Alumini/suvendusamanta-- (1).jpg",
    "gradyr": 2015,
    "about": "Dr. Suvendu Samanta completed his M.Tech in Electrical Engineering at IIT Kanpur and later joined the institute as an Assistant Professor in the EE department."
  },
  {
    "name": "Shrikant Awate",
    "degree": "MTech, CSE(2012-14)",
    "now": "Senior Software Developer — SAP Pune",
    "photo": "https://bvciitk.com/images/Alumini/shrikantawate.png",
    "gradyr": 2014,
    "about": "Shrikant Awate completed M.Tech in CSE from IIT Kanpur. He works as a Senior Software Developer at SAP Pune."
  },
  {
    "name": "Devaki Nandan",
    "degree": "MTech, ME (2012-14)",
    "now": "Assistant Professor — GBPUAT, Pantnagar",
    "photo": "https://bvciitk.com/images/Alumini/devakinandan.jpg",
    "gradyr": 2014,
    "about": "Devaki Nandan completed M.Tech in Mechanical Engineering at IIT Kanpur. He is an Assistant Professor at GBPUAT."
  },
  {
    "name": "Dr. Akhaya K. Nayak",
    "degree": "PhD, HSS(Sociology) 2013",
    "now": "Faculty — Sociology (HSS), IIM Indore",
    "photo": "https://bvciitk.com/images/Alumini/akhayanayak.jpg",
    "gradyr": 2013,
    "about": "Dr. Akhaya Kumar Nayak did his PhD in Sociology from IIT Kanpur in 2013. He is currently a faculty member at IIM Indore."
  },
  {
    "name": "Swarandeep Sahoo",
    "degree": "B.Tech-M.Tech Dual, AE(2007-12)",
    "now": "Assistant Professor — App. Geophysics, IIT Dhanbad",
    "photo": "https://bvciitk.com/images/Alumini/swarandeepsahoo.jpg",
    "gradyr": 2012,
    "about": "Swarandeep Sahoo did his dual degree in Aerospace Engineering at IIT Kanpur. He is an Assistant Professor at IIT Dhanbad."
  },
  {
    "name": "Santosh Kumar",
    "degree": "MTech, EE(2009-11)",
    "now": "Senior Engineer — Qualcomm, Hyderabad",
    "photo": "https://bvciitk.com/images/Alumini/santoshkumar.jpg",
    "gradyr": 2011,
    "about": "Santosh Kumar did his B-Tech from Jawaharlal Nehru, Technological University in Electronics and Communication Department from 2005-2009 and M-Tech (2009-2011) from IIT Kanpur in the field of Signal Processing. He than worked as Software Engineer at Marvell Semiconductor from 2011-13 and than joined as a Senior Software Engineer at Qualcomm. Besides all these professional achievements, he is a motivational speaker who is expert Vedic Knowledge and has memorized many verses from Vedic Scriptures. He was the core member of Bhaktivedanta Club, IIT Kanpur during his days at IITK."
  },
  {
    "name": "Devendra Kumar Arya",
    "degree": "BTech-MTech Dual, CSE(2005-10)",
    "now": "Data Scientist",
    "photo": "https://bvciitk.com/images/Alumini/devendraarya.jpg",
    "gradyr": 2010,
    "about": "Devendra Kumar Arya did his B.Tech-MTech Dual Degree from IIT Kanpur in Computer Science and Engineering. He is currently working as a Data Scientist in Gurgaon. He got connected to Sir Prof. Laxmidhar Behera and his teachings of Bhagavad Gita, in his 1st year of undergraduate study. Since then he has been practising this science of Krsna Consciousness and teaching to people in his vicinity, in his circle and at his office about the importance of Chanting, and reading the Bhagavad Gita"
  },
  {
    "name": "Virendra K. Agrawal",
    "degree": "BTech, CHE(2006-2010)",
    "now": "Physics Faculty & Founder — InfinIITy Academy",
    "photo": "https://bvciitk.com/images/Alumini/virendraagrawal.jpg",
    "gradyr": 2010,
    "about": "Virendra Kumar Agrawal did his B.Tech. in Chemical Engineering at IIT Kanpur from 2006-2010. He came in contact with Prof Laxmidhar Behra on first day of admission through his cousin brother Vikas Agrawal. He was with bhakti vedanta Club for all four years."
  },
  {
    "name": "Radhakant Das",
    "degree": "BTech(2001-05);MTech(2007-09), AE",
    "now": "Chief Administrative Officer — BGIS, Vrindavan",
    "photo": "https://bvciitk.com/images/Alumini/radhakantdas.jpg",
    "gradyr": 2009,
    "about": "Rohit Dasrapuria aka Radhakant Das is a motivational speaker and B-Tech and M-Tech (Department of Aerospace Engineering, 2001 batch) from IIT Kanpur. He was exceptional in his academic life ending up being a Silver Medalist at IIT Kanpur and working with leading organizations such as National Instruments. He left the lucrative job in 2009 to serve full time to The Bhaktivedanta Gurukula and International School(BGIS) - a boarding school for boys . He is currently the Chief Administrative Officer (CAO) of BGIS and has played a key role in establishing the new campus covering over 100 acres and equipped with all modern amenities, located in the beautiful holy land of Sri Vrindavan Dham, the abode of Lord Sri Krishna.. It offers the best of both worlds - traditional alongside modern education. He is a visiting faculty at IMS, Noida, and gives talks on Bhagavad Gita in ISKCON centers across the world."
  },
  {
    "name": "Dr. Ranjan K. Behera",
    "degree": "MTech-PhD, EE(2001-09)",
    "now": "Associate Professor — Dept of EE, IIT Patna",
    "photo": "https://bvciitk.com/images/Alumini/ranjanbehera.png",
    "gradyr": 2009,
    "about": "Dr. Ranjan Kumar Behera is an Associate Professor, Department of Electrical Engineering, IIT Patna, working since May 2009. He received the M. Tech. and Ph.D. degrees from IIT Kanpur, in 2003, and 2009, respectively. He has published 45 papers/articles in international journal and conferences and is a senior IEEE member. He got young scientist award by Department of Science and Technology, Government of India in 2011. In 2014, he was selected for prestigious Bhaskar Advanced Solar Energy (BASE-2014) fellowship award by Department of Science and Technology, Govt. of India and Indo-US science and technology Forum for doing advanced research on Solar Grid Integration in Smart Grid at Tennessee Technological University, Cookeville, TN, USA. Besides all these professional achievements Since 2008, he is leading a student community in IIT Patna for social and spiritual welfare for institute fraternity named as Bhaktivedanta club. Through this club, many students got their way for leading a successful life while serving the society. Not only students but the many people from outside the college got benefitted by the welfare activity like food distribution program, free education program, and old age care program. Recently grain distribution program in villages during pandemic had supported many families. Currently he is helping the village School students by providing them free computer education program. He is often invited by many national reputed engineering institute for delivering the motivational talks on spirituality and Bhagavad Gita . He is a practitioner of Bhakti yoga based on teachings of Bhagavad Gita since last 20 years and having a vast experience of counseling the students for their psychological and life problems."
  },
  {
    "name": "Shashank Srivastava",
    "degree": "MTech, AE(2007-2009)",
    "now": "Senior Asst. Professor — IGNOU, New Delhi",
    "photo": "https://bvciitk.com/images/Alumini/shashanksrivastava.jpg",
    "gradyr": 2009,
    "about": "Did masters in aerospace engg. from IIT Kanpur. Worked at DRDO for research and development of life support system for fighter pilots. Completed Phd from IIT Delhi and currently working as senior Asst Prof. at IGNOU New Delhi."
  },
  {
    "name": "Trinadh Kottana",
    "degree": "MTech, EE, 2007-2009",
    "now": "Video Codec Engineer — Apple Inc.",
    "photo": "https://bvciitk.com/images/Alumini/trinadhkottana.jpg",
    "gradyr": 2009,
    "about": "Thrinadh did his M-Tech in department of Electrical Engineering at IIT Kanpur from 2007-2009. On the first day in campus he felt fortunate to have meet with Ranjan prabhu (currently Asst.Professor in IIT Patna)   and later with the devotees of BhaktiVedanta club and have fundamental understanding of Bhakti through Prof. Laxminder Behera Sir’s teachings which helped him to stay connected to the movement since then. He is currently working as Video Codec Engineer in Apple Inc, Cupertino."
  },
  {
    "name": "Shailendra Kesarwani",
    "degree": "BTech, BSBE(2004-2008)",
    "now": "Data Science Consultant —  KYC2020",
    "photo": "https://bvciitk.com/images/Alumini/shailendrakesarwani.jpg",
    "gradyr": 2008,
    "about": "Shailendra Kesarwani did his B Tech in Biological Science and Bioengineering at IIT Kanpur (2004-08). He is currently freelancing as data scientist. He got inspiration to practice Bhagavad Gita from Bhaktivedanta Club during the first year."
  },
  {
    "name": "Lokeswara Vijanapalli",
    "degree": "MTech, EE (2006-08)",
    "now": "Vice Principal — BGIS, Vrindavan",
    "photo": "https://bvciitk.com/images/Alumini/lokeswaravijanapalli.jpg",
    "gradyr": 2008,
    "about": "Lokeswara Kumar V (aka Lila Govinda Das) completed B.E. in Electronics & Communication Engineering from Vasavi College of Engineering, Hyderabad in 2006 and later completed M.Tech. from IIT Kanpur in microelectronics & VLSI technology in 2008. He came in contact with Bhaktivedanta Club through Ramana Manohar Prabhuji (Ranjan Pr) and later under the inspiration of HG Lila Purushothama Prabhuji joined Bhaktivedanta Gurukula & International School (BGIS) in 2010 as a faculty. For the last eight years, he is serving as Vice-Principal. Before joining BGIS he worked as an embedded software engineer in Couth Infotech limited, Hyderabad. Bhaktivedanta Club is like a compass to a ship for him to serve Krishna & spiritual master. There were many retreats, camps, and programmes organized by BVC that helped him to shape his personality. He is very indebted to HG Lila Purushothama Prabhuji for taking the pain to preach youth in IIT Kanpur."
  },
  {
    "name": "Dr. Pawan Goyal",
    "degree": "BTech, EE(2003-07)",
    "now": "Associate Professor — Dept of CSE, IIT Kharagpur",
    "photo": "https://bvciitk.com/images/Alumini/pawangoyal.jpg",
    "gradyr": 2007,
    "about": "Dr. Pawan Goyal did his B-Tech from IIT Kanpur in 2003 in department of Electrical Engineering and was one of the toppers in his batch. He was connected to Bhaktivedanta Club from first year itself and took part in all the club activities. He did his Ph.D in Computational Linguistics at University of Ulster, under supervision of Professor Laxmidhar Behera and Prof. T. M. McGinnity. Now he is the youngest associate professor in CSE Department at IIT Kharagpur working in the field of Text Mining, Natural Language Processing, Information Retrieval and Sanskrit Computational Linguistics. He is one of the best researchers of India and has received many prestigious awards such as Google India AI/ML Research Awards 2020, INAE Young Engineer Awards 2020, Facebook AI and Ethics Research Award India, 2019. Besides all these achivements, he practices spirituality very seriously and is a very humble and generous person."
  },
  {
    "name": "Ratnesh Tiwari",
    "degree": "B.Tech (2002-2006)",
    "now": "Assistant Research Professor — ME, University of Maryland",
    "photo": "https://bvciitk.com/images/Alumini/ratneshtiwari.jpg",
    "gradyr": 2006,
    "about": "Dr. Ratnesh Tiwari did his B-Tech in department of Mechanical Engineering at IIT Kanpur from 2002-06 and later completed his MS/P.h.D from the University of Maryland, College Park. He is currently an assistant research professor at the University of Maryland in the ME Department. He got connected to the teachings of Bhagavad during the first year of his undergraduate days at IIT Kanpur when he got in touch with Prof. Laxmidhar Behera. He is currently involved with the preaching program at the University of Maryland."
  },
  {
    "name": "Ram Bahadur Singh",
    "degree": "BTech, ME(2000-04)",
    "now": "Head, Gas Turbine Design — Seimens, India",
    "photo": "https://bvciitk.com/images/Alumini/ramsingh.jpg",
    "gradyr": 2004,
    "about": "Ram Bahadur Singh is B-Tech from IIT Kanpur from 2000-2004 batch in department of Mechanical Engineering. He was connected to Bhaktivedanta Club, IIT Kanpur from his initial years and organized large scale programs such as Janmashtami witnessing footfall of thousands. He worked as an Engineer of Gas Turbine at Bharat Heavy Electricals Limited from 2004-2006 and than from 2006 to present he has been working in Seimens taking different roles such as Senior Enginer, Manager and Lead Engineer in Gas Turbine Designs. Presently he is head of Gas Turbine Combustion Design at Seimens, India. Besides this he is very social and politically active and Mentoring Bhaktivedanta Gramin Vikas Shivir since 2005 for holistic development of villages"
  },
  {
    "name": "Meher Preetam",
    "degree": "M.Tech-Ph.D, EE, (2012-2021)",
    "now": "Postdoctoral researcher — Paris-Saclay University, France",
    "photo": "https://bvciitk.com/images/profile/Dr. Meher Preetam Korukonda.jpg",
    "gradyr": 2021,
    "about": "Meher Preetam Korukonda did his master's and PhD at IIT Kanpur under the guidance of Prof. Laxmidhar Behera. He is currently working as a postdoctoral researcher at Paris-Saclay University, France. He was deeply active in the club during his academic years."
  },
  {
    "name": "Chandan Sharma",
    "degree": "M Tech, CE(2014-16) not completed thesis.",
    "now": "Assistant Engineer — PHED, West Bengal",
    "photo": "https://bvciitk.com/images/Alumini/chandansharma.jpg",
    "gradyr": 2016,
    "about": "Chandan Sharma did his B-Tech in department of Civil Engineering at Meghnad saha institute of technology in 2012. He than came to IIT Kanpur for M.Tech in Environmental Engineering & Management. He is currently working as assistant engineer in Public health engineering department, government of west bengal. He got connected to the teachings of Bhagavad during the first year of his post-graduate days and is now connected with BVC classes on regular basis."
  },
  {
    "name": "Vipin Agarwal",
    "degree": "BTech-MTech (2006-2011)",
    "now": "Postdoctoral Researcher — ME, UMich, USA",
    "photo": "https://bvciitk.com/images/Alumini/Vipinagarwalfinal.jpg",
    "gradyr": 2011,
    "about": "Dr. Vipin Agarwal did his B.Tech-M.Tech (Dual degree) in the Department of Mechanical Engineering at IIT Kanpur from 2006-2011, and worked with General Electric (GE), and ANSYS. He completed his Ph.D. degree in the Department of Mechanical Engineering at the University of Maryland, College Park, USA. He is currently a Postdoctoral Research Fellow in the Department of Mechanical Engineering at the University of Michigan, Ann Arbor, USA. He felt fortunate to get connected to the teachings of Bhagavad Gita in the loving care of Professor Laxmidhar Behera from the very first day at IIT Kanpur because of his elder brother Vikas Agrawal."
  },
  {
    "name": "Sanjoy Kumar Parida",
    "degree": "PhD, EE (2004-2009)",
    "now": "Associate Professor, — Dept. of EE, IIT PATNA",
    "photo": "https://bvciitk.com/images/Alumini/sanjoyparida.jpg",
    "gradyr": 2009,
    "about": "Dr. Sanjoy Kumar Parida did his PhD from IIT Kanpur. During his stay at IIT Kanpur, he had a glimpse of Bhaktivedanta Club IIT KANPUR. He became attracted to Krishna consciousness in association with devotees later, when Raman Manohar Prabhu joined IIT Patna. However, the seed was planted by Sir during many programs he attended at Bhaktivedanta club IIT KANPUR. Now he is engaged in preaching activities with Raman Manohar Prabhu."
  },
  {
    "name": "Ajay Kumar Yadav",
    "degree": "M.Sc. (2-year), Department of mathematics & statistics (2017-19)",
    "now": "Ph.D. Student — Dept. of Maths, BHU",
    "photo": "https://bvciitk.com/images/Alumini/ajay_yadav.jpg",
    "gradyr": 2019,
    "about": "Mr. Ajay Kumar Yadav did his B.Sc. in department of mathematics at Banaras Hindu University from 2014-17 and then completed M.Sc. in department of mathematics & statistics, IIT Kanpur during 2017-19. Currently he is doing Ph.D. in mathematics from Institute of Science, BHU since 2020."
  },
  {
    "name": "Raghuveer Prasad",
    "degree": "MTech, CSE (2006-08)",
    "now": "Dy. Chief Engineer — NPCIL",
    "photo": "https://bvciitk.com/images/Alumini/Raghuveerprasadnagar.jpg",
    "gradyr": 2008,
    "about": "Raghuveer Prasad Nagar did his BE in Computer Science & Engineering from MBM Engineering College, Jodhpur.  Later, he came to IIT Kanpur for MTech in Computer Science & Engineering. During his stay at IITK, he got connected to Bhakti Vedant Club (BVC) and learned teaching of lord Chaitanya Mahaprabhu & about Hare Krishna Movement. Now, he is in Hare Krishna Movement from last 12 years."
  },
  {
    "name": "Devendra Upadhyay",
    "degree": "B.Tech-M.Tech (Dual Degree 2003-08)",
    "now": "Senior Process Engineer — Shell",
    "photo": "https://bvciitk.com/images/Alumini/Devendra_Upadhya.jpg",
    "gradyr": 2008,
    "about": "Devendra Upadhyay did his B.Tech- M.Tech (dual degree) in Chemical Engineering at IIT Kanpur from 2003-2008. He received Academic Excellence Award and General Proficiency Gold Medal for his outstanding academic performance at IIT Kanpur. He co-authored three international publications in reputed journals which was published during his M.Tech. thesis.Devendra came in contact with Dr. Laxmidhar Behera (Prof. of Electrical Engineering, IITK) during his first year of undergraduate days and got opportunities to learn Krishna Consciousness along-with other senior devotee friends in the guidance of Prof. Behera. He  was coordinator for 2007 Krishna Janmashtami celebration (Very first Janmashtami at the Land of Sri Sri Radha Madhav Temple, ISKCON Kanpur), which was attended by more than 10000 people from Kanpur city and IIT Kanpur community. Being member of BVC, he got opportunities to join/organize several Krishna Conscious workshops, retreats and most importantly could make several devotee friends for life.In 2008, Devendra joined Shell and currently working as a Senior Process Engineer. He continues to practice Krishna Consciousness/teachings of Bhagavad Gita learnt from Prof. Behera."
  },
  {
    "name": "Premnath Dalai",
    "degree": "MSc, Statistics (2010-12)",
    "now": "Senior Manager — Evalueserve",
    "photo": "https://bvciitk.com/images/Alumini/premnathdalai.jpg",
    "gradyr": 2012,
    "about": "Premnath was a Y10 student pursuing M.SC in Statistics. In 2011, he came in a friendly contact with a devotee at IIT Kanpur. And from a hardcore atheist personality he became a strong believer of the Vedic philosophy and Krishna consciousness culture. Under fortunate guidance of Prof. Laxmidhar Behera, he humbly submitted to the practice of Krishna consciousness. He was actively involved in multiple festivals, activities conducted by Bhaktivedanta club. Currently he is in corporate job."
  },
  {
    "name": "Jaideep Shingari",
    "degree": "Research Associate in Electrical Dept (2002 - 2003)",
    "now": "Team Lead — Telus International",
    "photo": "https://bvciitk.com/images/Alumini/jaideeppr-.jpg",
    "gradyr": 2003,
    "about": "Jaideep Shingari completed his work as a Research Associate in the EE Department at IIT Kanpur. He is currently working as a Team Lead at Telus International. He is a practitioner of Bhakti Yoga."
  },
  {
    "name": "Venkata Ratnam",
    "degree": "Visiting Researcher, EE (Jan-Sep, 2020)",
    "now": "Postdoc Student — University of Windsor, Canada",
    "photo": "https://bvciitk.com/images/Alumini/Pic - Vakacharla Venkata Ratnam jn.jpg",
    "gradyr": 2020,
    "about": "Venkata Ratnam completed his tenure as a Visiting Researcher in the EE department at IIT Kanpur. Currently pursuing Postdoc studies at the University of Windsor, Canada. He remains connected to BVC."
  },
  {
    "name": "Anmol Awasthi",
    "degree": "Dual Degree, ChE (2011-16)",
    "now": "Working Employee — Pvt firm",
    "photo": "https://bvciitk.com/images/Alumini/anmol_awasthi.jpg",
    "gradyr": 2016,
    "about": "Anmol Awasthi did his dual degree in Chemical Engineering from IIT Kanpur. He works in a private firm and was deeply active in the club."
  },
  {
    "name": "Akashdeep Patel",
    "degree": "B. Tech. - M. Tech. (2009-14)",
    "now": "Principle Engineer — Cloud4C",
    "photo": "https://bvciitk.com/images/Alumini/akashdeep.jpg",
    "gradyr": 2014,
    "about": "Akashdeep Patel completed his dual degree at IIT Kanpur. He is a Principle Engineer at Cloud4C and a dedicated club alumnus."
  },
  {
    "name": "Malay Naskar",
    "degree": "M. Sc.(Chemistry)(2016-18)",
    "now": "Chemist — ONGC",
    "photo": "https://bvciitk.com/images/Alumini/malay.jpeg",
    "gradyr": 2018,
    "about": "Malay Naskar did his MSc in Chemistry from IIT Kanpur. He is currently a Chemist at ONGC and is actively practicing devotional service."
  },
  {
    "name": "Yash D. Jaiswal",
    "degree": "BTech, MTech, AE, (2009-14)",
    "now": "Assistant Consultant — TCS",
    "photo": "https://bvciitk.com/images/Alumini/Yash Dayashankar Jaiswal.jpg",
    "gradyr": 2014,
    "about": "Yash Dayashankar Jaiswal completed his dual degree in Aerospace Engineering at IIT Kanpur. He currently works as an Assistant Consultant at TCS."
  },
  {
    "name": "Praful Anand",
    "degree": "BTech (2015-19)",
    "now": "Senior ML Engineer — Quantiphi",
    "photo": "https://bvciitk.com/images/Alumini/praful_anand.jpg",
    "gradyr": 2019,
    "about": "Praful Anand did his B-Tech from IIT Kanpur (2015-19). He is currently working as a Senior Machine Learning Engineer at Quantiphi."
  },
  {
    "name": "Vinayak Goyal",
    "degree": "B.Tech, EE, (2012-16)",
    "now": "Lead Software Er. — Samsung, Bangalore",
    "photo": "https://bvciitk.com/images/Alumini/VinayakIIT - Vinayak Goyal.jpg",
    "gradyr": 2016,
    "about": "Vinayak Goyal completed his B.Tech in Electrical Engineering from IIT Kanpur. He is a Lead Software Engineer at Samsung, Bangalore."
  },
  {
    "name": "Chandan garg",
    "degree": "BE (2012-16)",
    "now": "ML Engineer — Adobe",
    "photo": "https://bvciitk.com/images/Alumini/chandangargfinal.jpg",
    "gradyr": 2016,
    "about": "Chandan Garg completed his B.Tech at IIT Kanpur (2012-16). He works as a Machine Learning Engineer at Adobe."
  },
  {
    "name": "Karthik Murthy",
    "degree": "M.Tech. (2016 - 18)",
    "now": "Ph.D Student. — ME, Cornell University",
    "photo": "https://bvciitk.com/images/Alumini/Karthik Murthy.jpeg",
    "gradyr": 2018,
    "about": "Karthik Murthy did his M.Tech from IIT Kanpur. He is currently pursuing a PhD at Cornell University, ME department."
  },
  {
    "name": "Saurav Prakash",
    "degree": "BTech, EE (2012-2016)",
    "now": "Ph.D. Student — USC, Los Angeles",
    "photo": "https://bvciitk.com/images/Alumini/Saurav Prakash.jpg",
    "gradyr": 2016,
    "about": "Saurav Prakash completed his B.Tech in Electrical Engineering from IIT Kanpur. He is currently a PhD student at USC, Los Angeles."
  },
  {
    "name": "Prafulla Mallik",
    "degree": "PhD ,MSE (2010-2013)",
    "now": "Associate Prof. & HOD — Metallurgical & Materials, IGIT",
    "photo": "https://bvciitk.com/images/Alumini/prafullamalik.jpg",
    "gradyr": 2013,
    "about": "Dr. Prafulla Mallik did his PhD at IIT Kanpur (2010-13). He is an Associate Professor and HOD of Metallurgical and Materials Department at IGIT."
  },
  {
    "name": "Nitai Sahoo",
    "degree": "BS-MS (2014-2019)",
    "now": "Ph.D. Student — Chemistry, University of Florida",
    "photo": "https://bvciitk.com/images/Alumini/Nitai Prasad.jpg",
    "gradyr": 2019,
    "about": "Nitai Prasad Sahoo completed his BS-MS dual degree from IIT Kanpur. He is currently pursuing a PhD in Chemistry at the University of Florida."
  },
  {
    "name": "Nitesh Kumar",
    "degree": "PhD, MSE, IIT Kanpur, 2012-2018",
    "now": "Assistant Professor — MSE, NIT Hamirpur",
    "photo": "https://bvciitk.com/images/Alumini/Nitesh.jpg",
    "gradyr": 2018,
    "about": "Dr. Nitesh Kumar completed his PhD at IIT Kanpur. He is an Assistant Professor in the MSE department at NIT Hamirpur."
  },
  {
    "name": "Dilip Kumar",
    "degree": "MSc (2013-16)",
    "now": "Assistant Professor — Maharaja Agrasen College, Delhi",
    "photo": "https://bvciitk.com/images/Alumini/dilipkumar.jpg",
    "gradyr": 2016,
    "about": "Dilip Kumar completed his MSc at IIT Kanpur. He is currently an Assistant Professor at Maharaja Agrasen College, Delhi University."
  },
  {
    "name": "Rajesh Kumar",
    "degree": "B.Tech + M.Tech (Dual Degree) ME (2002-2007))",
    "now": "Senior Research Engineer — IFP Energies Nouvelles",
    "photo": "https://bvciitk.com/images/Alumini/rajeshkumar (--3).jpg",
    "gradyr": 2007,
    "about": "Rajesh Kumar completed his dual degree in Mechanical Engineering from IIT Kanpur. He works as a Senior Research Engineer at IFP Energies Nouvelles."
  },
  {
    "name": "Susil Kumar Mohanty",
    "degree": "Project Associate (2018)",
    "now": "Ph.D. Student — CSE, IIT Patna",
    "photo": "https://bvciitk.com/images/Alumini/---Susil Kumar Mohanty (1) (1).jpg",
    "gradyr": 2018,
    "about": "Susil Kumar Mohanty worked as a Project Associate at IIT Kanpur and is now pursuing a PhD at IIT Patna in the CSE department."
  },
  {
    "name": "Pranjul Yadav",
    "degree": "BS, Physics (2012-16)",
    "now": "Assistant Section Officer — Ministry of I&B",
    "photo": "https://bvciitk.com/images/Alumini/pranjulyadav_ff.jpg",
    "gradyr": 2016,
    "about": "Pranjul Yadav completed his BS in Physics at IIT Kanpur. He currently works as an Assistant Section Officer in the Ministry of Information & Broadcasting."
  },
  {
    "name": "Ajay vallabh",
    "degree": "MS 2017-19 mechanical engineering",
    "now": "Ph.D. Student — University of New Hampshire",
    "photo": "https://bvciitk.com/images/Alumini/830E43C1-4B70-4733-B30dfsdD-AB767D0F6975 - Ajay Vallabh.jpeg",
    "gradyr": 2019,
    "about": "Ajay Vallabh completed his MS in Mechanical Engineering at IIT Kanpur. He is currently pursuing a PhD at the University of New Hampshire."
  },
  {
    "name": "Rajeev Ranjan",
    "degree": "MTech (2012-2015), EE",
    "now": "Scientist — DRDO",
    "photo": "https://bvciitk.com/images/Alumini/Rajeev Ranjan.jpg",
    "gradyr": 2015,
    "about": "Rajeev Ranjan completed his M.Tech in EE from IIT Kanpur (2012-15). He works as a scientist at DRDO."
  },
  {
    "name": "Amrut Sekhar Panda",
    "degree": "MTech, ME (2017-19)",
    "now": "Research Engineer — DEWA, Dubai",
    "photo": "https://bvciitk.com/images/Alumini/Amrut Panda (2).jpg",
    "gradyr": 2019,
    "about": "Amrut Sekhar Panda did his M.Tech in Mechanical Engineering at IIT Kanpur. He is a Research Engineer at DEWA, Dubai."
  },
  {
    "name": "Gyanesh Mishra",
    "degree": "Research Associate, EE, 2012-15",
    "now": "Study Coach — Hyderabad",
    "photo": "https://bvciitk.com/images/Alumini/gyaneshmishrareduced.jpg",
    "gradyr": 2015,
    "about": "Gyanesh Mishra worked as a Research Associate in the EE department at IIT Kanpur. He is a Study Coach in Hyderabad."
  },
  {
    "name": "Seeta Ram Meena",
    "degree": "MTech, CE, 2016-2018",
    "now": "Civil Engineer — DSSSB",
    "photo": "https://bvciitk.com/images/Alumini/seetaram meena.jpg",
    "gradyr": 2018,
    "about": "Seeta Ram Meena completed his M.Tech in Civil Engineering at IIT Kanpur. He works as a Civil Engineer under DSSSB."
  },
  {
    "name": "Gobinda Chandra Sethi",
    "degree": "M-Tech, EE, (2004-2006)",
    "now": "Engineer — ENGINEERS INDIA LTD., Delhi",
    "photo": "https://bvciitk.com/images/Alumini/govindachandrasethi.jpg",
    "gradyr": 2006,
    "about": "Gobinda Chandra Sethi completed his M.Tech in Electrical Engineering at IIT Kanpur. He works at Engineers India Ltd."
  },
  {
    "name": "Vikas Agarwal",
    "degree": "B.Tech. (2003-07), ME",
    "now": "Lead Engineer — R&D, Mahindra & Mahindra Ltd.",
    "photo": "https://bvciitk.com/images/Alumini/vikas_agarwal__.jpg",
    "gradyr": 2007,
    "about": "Vikas Agarwal completed his B.Tech in Mechanical Engineering at IIT Kanpur. He works as a Lead R&D Engineer at Mahindra & Mahindra Ltd."
  },
  {
    "name": "Dr. Biswanath Swain",
    "degree": "PhD, HSS (2004-2011)",
    "now": "Associate Professor [Ethics] — Dept. of HSS, IIM Indore",
    "photo": "https://bvciitk.com/images/Alumini/biswanathswain-----.jpg",
    "gradyr": 2011,
    "about": "Dr. Biswanath Swain completed his PhD in HSS at IIT Kanpur. He is currently an Associate Professor of Ethics at IIM Indore."
  },
  {
    "name": "Mananjay Kumar Verma",
    "degree": "M.Tech. (2016-18)",
    "now": "Ex-Scientist — ISRO",
    "photo": "https://bvciitk.com/images/Alumini/Mananjay-Kumar-Verma.jpg",
    "gradyr": 2018,
    "about": "Mananjay Kumar Verma completed his M.Tech at IIT Kanpur and previously worked as a scientist at ISRO."
  },
  {
    "name": "Vishnu Raj Shukla",
    "degree": "BTech, MSE (2010-2014)",
    "now": "Ph. D. Student — MSE, UCF, Florida",
    "photo": "https://bvciitk.com/images/Alumini/vishnuraj_shukla.jpg",
    "gradyr": 2014,
    "about": "Vishnu Raj Shukla did his B.Tech in MSE at IIT Kanpur. He is currently pursuing a PhD at UCF, Florida."
  },
  {
    "name": "Chandan Kumar Behera",
    "degree": "M.Des(2012-2014)",
    "now": "Postdoctoral Associate — Yale University, USA",
    "photo": "https://bvciitk.com/images/Alumini/Chandan Behera.jpg",
    "gradyr": 2014,
    "about": "Chandan Kumar Behera completed his M.Des at IIT Kanpur and currently works as a Postdoctoral Associate at Yale University."
  },
  {
    "name": "Amit Sharma",
    "degree": "BT-MT, CSE (2010-15)",
    "now": "Software Engineer — Paytm",
    "photo": "https://bvciitk.com/images/Alumini/Amit_Sharma.jpg",
    "gradyr": 2015,
    "about": "Amit Sharma completed his dual degree in CSE from IIT Kanpur. He is working as a Software Engineer at Paytm."
  },
  {
    "name": "Dr. Man Mohan Garg",
    "degree": "Post-Doc, EE, (2016-18)",
    "now": "Assistant Professor — EE, MNIT Jaipur",
    "photo": "https://bvciitk.com/images/Alumini/MAn_MOHAN GARG.png",
    "gradyr": 2018,
    "about": "Dr. Man Mohan Garg completed his Post-Doc at IIT Kanpur. He is currently an Assistant Professor at MNIT Jaipur in the EE department."
  },
  {
    "name": "Dr. Susovan Mandal",
    "degree": "Ph.D., Chemistry, (2007-13)",
    "now": "Assistant Professor — Chem, Govt college, Bengal",
    "photo": "https://bvciitk.com/images/Alumini/susovan_mandal_square.jpeg",
    "gradyr": 2013,
    "about": "Dr. Susovan Mandal completed his PhD in Chemistry from IIT Kanpur. He is currently an Assistant Professor in a government college in West Bengal."
  },
  {
    "name": "Basanta Rajbongshi",
    "degree": "Ph.D, Chemistry (2005-2012)",
    "now": "Assistant Professor — Cotton University, Guwahati",
    "photo": "https://bvciitk.com/images/Alumini/basanta kumar reduced.jpg",
    "gradyr": 2012,
    "about": "Dr. Basanta Rajbongshi did his PhD in Chemistry from IIT Kanpur. He is currently an Assistant Professor at Cotton University, Guwahati."
  },
  {
    "name": "Dr. Sunil Agrawal",
    "degree": "Ph.D. IME, (2001-2006)",
    "now": "Associate Professor — IIITDM Jabalpur",
    "photo": "https://bvciitk.com/images/Alumini/sunilagarwal.jpeg",
    "gradyr": 2008,
    "about": "Dr. Sunil Agrawal did his PhD in IME at IIT Kanpur. He is an Associate Professor at IIITDM Jabalpur."
  },
  {
    "name": "Lakshya Gangwar",
    "degree": "B.Tech ME (2014-18)",
    "now": "Ph.D. Student  — ME , University of Minnesota",
    "photo": "https://bvciitk.com/images/Alumini/lakshaygangwar_reduced.jpg",
    "gradyr": 2018,
    "about": "Lakshya Gangwar completed B.Tech in Mechanical Engineering at IIT Kanpur. He is currently pursuing a PhD at the University of Minnesota."
  },
  {
    "name": "Shashi Shankar",
    "degree": "B. Tech (2000-04)",
    "now": "Vice President — HDFC Bank",
    "photo": "https://bvciitk.com/images/Alumini/sashi_shankar_reduced.jpg",
    "gradyr": 2004,
    "about": "Shashi Shankar completed his B.Tech at IIT Kanpur (2000-04). He is currently a Vice President at HDFC Bank."
  },
  {
    "name": "Gaurav Kumar Mathur",
    "degree": "MTech, ES (2018-2020)",
    "now": "Ph.D. Student — IIT Patna",
    "photo": "https://bvciitk.com/images/Alumini/Gaurav_Mathur__.jpg",
    "gradyr": 2020,
    "about": "Gaurav Kumar Mathur completed his M.Tech at IIT Kanpur. He is currently a PhD student at IIT Patna."
  },
  {
    "name": "Hitendra Chouhan",
    "degree": "MTech, CSE (2006-08)",
    "now": "Scientific Officer — RRCAT Indore",
    "photo": "https://bvciitk.com/images/Alumini/HitendraChouhan.jpg",
    "gradyr": 2008,
    "about": "Hitendra Chouhan completed M.Tech in CSE at IIT Kanpur. He is currently working as a Scientific Officer at RRCAT Indore."
  },
  {
    "name": "Dr. Sandeep Kumar",
    "degree": "Ph.D. , Chemical Engineering ( 2009-20)",
    "now": "Scientist E — Deputy Director, DRDO Kanpur",
    "photo": "https://bvciitk.com/images/Alumini/Sandeep_Kumar_square.jpg",
    "gradyr": 2020,
    "about": "Dr. Sandeep Kumar completed his PhD at IIT Kanpur in Chemical Engineering. He is currently a Scientist E and Deputy Director at DRDO Kanpur."
  },
  {
    "name": "Sreenivasulu",
    "degree": "M.Tech (2003-2005)",
    "now": "Faculty of Engineering — USQ, Australia",
    "photo": "https://bvciitk.com/images/Alumini/Sreendcci - Shyamananda Krishna Das.jpg",
    "gradyr": 2005,
    "about": "Sreenivasulu completed his M.Tech at IIT Kanpur. He is a Faculty of Engineering at the University of Southern Queensland, Australia."
  },
  {
    "name": "Daevesh Singh",
    "degree": "Msc Mathematics (2016-2018)",
    "now": "Ph.D. Student — IIT Bombay",
    "photo": "https://bvciitk.com/images/Alumini/Daevesh_Singh_prabhu.jpg",
    "gradyr": 2018,
    "about": "Daevesh Singh did his MSc in Mathematics at IIT Kanpur (2016-18). He is currently pursuing a PhD at IIT Bombay."
  }
];

function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedAlumnus, setSelectedAlumnus] = useState<typeof alumni[0] | null>(null);

  useEffect(() => {
    if (selectedAlumnus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedAlumnus]);

  const graduationYears = useMemo(() => {
    const years = alumni
      .map((a) => a.gradyr)
      .filter((yr): yr is number => typeof yr === "number");
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }, []);

  const filteredAlumni = useMemo(() => {
    return alumni.filter((a) => {
      const matchesSearch =
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.now.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.about.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear =
        selectedYear === "all" || a.gradyr?.toString() === selectedYear;
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
            Alumni Network
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
            Twenty years of <span className="text-gradient-saffron">seekers</span>, still walking the path.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Professors at IITs and IIMs. Scientists at leading research labs. Engineers at
            Apple, Siemens, TCS, SAP, Shell, Goldman Sachs, and DRDO. BVC alumni carry the same fire wherever
            they go. Click on any profile to learn more about their journey and BVC days.
          </p>
          <blockquote className="mt-8 max-w-2xl border-l-4 border-saffron pl-5 italic text-foreground/80">
            "Whatever standards a great man sets by exemplary acts, all the world pursues."
            <footer className="mt-1 not-italic text-sm text-muted-foreground">— Bhagavad Gita 3.21</footer>
          </blockquote>
        </Reveal>

        {/* Filters */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center bg-card border border-border p-4 rounded-2xl">
          <div className="relative w-full sm:max-w-xs">
            <span className="absolute inset-y-0 left-3 flex items-center text-muted-foreground pointer-events-none">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by name, role, degree..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-saffron text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="w-full sm:w-auto">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-saffron text-foreground font-medium"
            >
              <option value="all">All Graduation Years</option>
              {graduationYears.map((yr) => (
                <option key={yr} value={yr.toString()}>
                  Class of {yr}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-6 text-sm text-muted-foreground">
          Showing {filteredAlumni.length} of {alumni.length} alumni (click cards to view details)
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAlumni.map((a, i) => (
            <Reveal key={`${a.name}-${i}`} delay={Math.min(i * 0.015, 0.3)}>
              <TiltCard3D className="h-full">
                <div
                  onClick={() => setSelectedAlumnus(a)}
                  className="flex gap-4 rounded-2xl bg-card border border-border p-5 h-full cursor-pointer hover:border-saffron/40 hover:shadow-saffron/10 shadow-sm transition-all duration-300 bg-background/50 backdrop-blur-sm"
                >
                  <img
                    src={a.photo}
                    alt={a.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                    className="h-20 w-20 shrink-0 rounded-full object-cover bg-muted border border-border"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground leading-snug group-hover:text-saffron transition-colors">
                      {a.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{a.degree}</p>
                    <p className="text-xs text-saffron font-semibold mt-1.5 leading-relaxed">{a.now}</p>
                  </div>
                </div>
              </TiltCard3D>
            </Reveal>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No alumni match your search filters.
          </div>
        )}
      </div>

      {/* Modal Detail Overlay */}
      {selectedAlumnus && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedAlumnus(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAlumnus(null)}
              className="absolute top-4 right-4 p-2 rounded-full border border-border bg-background text-muted-foreground hover:text-foreground transition hover:bg-accent cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <img
              src={selectedAlumnus.photo}
              alt={selectedAlumnus.name}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
              className="h-32 w-32 md:h-40 md:w-40 rounded-2xl object-cover bg-muted border border-border shrink-0 self-center md:self-start"
            />

            <div className="flex-1 min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron bg-saffron/10 px-2.5 py-1 rounded-full">
                Alumnus Detail
              </span>
              <h2 className="font-display text-3xl font-bold mt-3 text-foreground leading-snug">
                {selectedAlumnus.name}
              </h2>
              <p className="text-sm font-medium text-muted-foreground mt-2">
                {selectedAlumnus.degree}
              </p>
              <p className="text-sm font-semibold text-saffron mt-1.5">
                {selectedAlumnus.now}
              </p>
              
              <div className="border-t border-border mt-5 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">About & BVC Days</h4>
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedAlumnus.about || "No detailed description available."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
