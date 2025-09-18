import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ArpanImg from "@/assets/advisors/Arpanimg.jpg";
import DivyaImg from "@/assets/advisors/Divyaimg.jpg";
import AnushkaImg from "@/assets/advisors/anushkaimg.jpg";
import UmangImg from "@/assets/advisors/umangimg.jpg";
import AasiaImg from "@/assets/advisors/aasia.jpg";
import SushantImg from "@/assets/advisors/sushant.jpg";
import AlakshendraImg from "@/assets/advisors/alakshedraimg.jpg";
import KhushiImg from "@/assets/advisors/khushiimg.jpg";
import AImg from "@/assets/advisors/aimg.jpg";
import JImg from "@/assets/advisors/jimg.jpg";
import DImg from "@/assets/advisors/dimg.jpg";
import SImg from "@/assets/advisors/simg.jpg";
import BhavneetImg from "@/assets/advisors/prajiimg.jpg";
import AshutoshImg from "@/assets/advisors/ashuimg.jpg";
import violinaimg from "@/assets/advisors/violinaimg.jpg";
import sulekimg from "@/assets/advisors/sulekimg.jpg";
import laurenimg from "@/assets/advisors/laurenimg.jpg";
import elizabethimg from "@/assets/advisors/elizabethimg.jpg";
import himanshuimg from "@/assets/advisors/himanshuimg.jpg";
import manojimg from "@/assets/advisors/manojimg.jpg";

// Research Domain - Academic research, policy analysis, and scholarly work
const researchTeam = [
  {
    name: "Arpan A. Chakravarty",
    role: "Visiting Research Fellow",
    bio: `Arpan A. Chakravarty is a Research Fellow at the India Foundation. Currently, he is a Non-Resident Fellow at the Pune International Centre for National Security Studies and has been a Fellow of the Founding Cohort of the Network for Advanced Studies on Pakistan (NASP) at the Takshashila Institute, Bengaluru.

His research interests focus on India's neighbourhood, which he approaches through his strong grounding in law and national security. In the past, he has assisted members of the National Security Advisory Board and has had the opportunity to serve at institutions that play a vital role in nation-building, including Rashtriya Raksha University, Gandhinagar (an Institute of National Importance), and the Indian Institute of Science (IISc), Bengaluru, in various capacities. He is proficient in multiple languages. He can be reached at arpan.chak13@gmail.com.`,
    image: ArpanImg,
  },
  {
    name: "Divya Malhotra",
    role: "Senior Research Fellow",
    bio: `Divya holds a PhD in Geopolitics from the School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. She is presently a Research Fellow with the Centre for National Security Studies, Bangalore, and the Middle East Institute, New Delhi. 

She completed her MPhil from JNU, MA in Applied Economics from Christ University, Bengaluru, and BA (Hons.) in Economics from Panjab University, Chandigarh. Previously, she has worked with the National Security Council's Advisory Board (NSAB) and MP-IDSA, Delhi, as a researcher. She was also associated with Rashtriya Raksha University (Ministry of Home Affairs), Gujarat, as Assistant Professor and Assistant Director. 

She has presented her research at international conferences in countries including the USA, Israel, Afghanistan, Pakistan, etc., and frequently writes for leading national and international newspapers.`,
    image: DivyaImg,
  },
  {
    name: "Anushka Saraswat",
    role: "Visiting Research Fellow",
    bio: `Anushka Saraswat is a White-Collar Crime & National Security Law Scholar and a Consultant on International Law, Counter-Terrorism Law, Lawfare and International Disputes. She has worked on the prosecution side in cases of anti-money laundering, anti-corruption, and tax evasion at the Supreme Court of India, High Courts, and Special Courts. 

She served as a core member at the Civil 20 Working Group on Human Rights during India's G20 Presidency, and as a Young Professional at Vivekananda International Foundation (VIF India). She was also a Research Intern at Centre for Land Warfare Studies (CLAWS). A graduate of O.P. Jindal Global University, she holds certifications from the United Nations Office of Drugs and Crime (UNODC). 

Her focus areas include white-collar crime, transnational financial offences, FATF frameworks, terror finance, proliferation finance law (UAPA, PMLA, PCA, ICSANT, UNSCR regimes), and international dispute resolution mechanisms under UNCITRAL, ICSID, and PCA frameworks.`,
    image: AnushkaImg,
  },
  {
    name: "Lt Col Umang Kohli (Retd)",
    role: "Visiting Consultant",
    bio: `Lt Col Umang Kohli (Retd) brings over 25 years of diverse experience across military service and journalism. He served the Indian Army for 24 years, including six years in Jammu & Kashmir during active counter-terrorism operations. As a Company Commander with the Rashtriya Rifles, he led multiple encounters that eliminated several terrorists. 

His acclaimed book, *In The Times of Article 370*, is based on his Kashmir counter-terrorism experiences. He has studied journalism and mass communication in India, Australia, and the United States, and is recognized as the only journalist in the country to have engaged in active combat. 

His areas of expertise span Geo-politics, Defence, Finance, International Trade, Environment, Agriculture, Cyber Security, Risk Management, Public Relations, and Policy Formulation.`,
    image: UmangImg,
  },
  {
    name: "Alakshendra Singh",
    role: "Young Research Fellow",
    bio: `Alakshendra Singh is a third-year B.A. (Hons.) Global Affairs with a specialisation in national security and defence and a minor in Public Policy. He is an aspiring China specialist with A1 level proficiency in Mandarin, along with extensive research into the South China Sea, South Asian Power Dynamics, and Indian hard power capabilities. He is further exploring his interest in OSINT as a supplement to conventional IR.`,
    image: AlakshendraImg,
  },
  {
    name: "Khushi Jain",
    role: "Research Fellow",
    bio: `Khushi Jain is a researcher specialising in information warfare, extremist narratives, and South Asian security dynamics. She holds an MA in International Relations from King's College London, where her dissertation examined how Egyptian leaders strategically employed identity narratives as tools of statecraft. She has conducted open-source intelligence research on militant organisations in Kashmir, focusing on propaganda strategies and recruitment mechanisms. She has over 2 years of experience in strategic communications and public relations. Contact: khushijain0299@gmail.com.`,
    image: KhushiImg,
  },
  {
    name: "Elizabeth Roche",
    role: "Media Specialist & Senior Research Fellow",
    bio: `Ms. Elizabeth Roche joined the Jindal School of International Affairs, (Jindal Global University) as Associate Professor after working as a journalist for almost three decades. She holds a Masters Degree in English from Delhi University. She has worked as a television, print, radio and multi-media journalist in Indian and foreign media organisations. She has contributed to two international news agencies – Reuters TV and the French news agency Agence France Presse, AFP. In AFP, as a South Asia correspondent for a decade – she contributed to AFP's coverage of news events in South Asia including reporting extensively on the Sri Lankan civil war, the insurgency in Kashmir, India's relations with Pakistan, Afghanistan and Bhutan. At Mint, the financial paper of Hindustan Times Media Limited, as National Writer and then Editor-Foreign Affairs, she helmed coverage of Indian foreign and defence policy for more than a decade. Her work has been widely cited by scholars in books and research articles produced by think tanks across the world. At JSIA, Prof Roche teaches courses on Indian Foreign Policy, Public Diplomacy and News Media, Global News from Multiple Perspectives and News Media and Politics. She is a keen follower of developments in the Indo-Pacific region and is a regular contributor to several publications including The Diplomat.`,
    image: elizabethimg,
  },
  {
    name: "Violina Sarmah",
    role: "Research Fellow",
    bio: `Violina Sarmah holds a Bachelor's degree in Political Science from Gauhati University and completed her Master's in International Relations at South Asian University, New Delhi. She is currently pursuing her PhD from South Asian University, New Delhi. Her research interests center on China, East Asia, and hydro-diplomacy, with a particular emphasis on transboundary water politics and its linkages to regional security and international relations.`,
    image: violinaimg,
  },
  {
    name: "Dr. Lauren Dagan Amoss",
    role: "Senior Research Fellow",
    bio: `Dr. Lauren Dagan Amoss is a researcher specializing in India's foreign and security policy, with a regional focus on the Indo-Pacific. She is a fellow at the Begin-Sadat Center for Strategic Studies (BESA) and a lecturer at Bar-Ilan University. Dr. Dagan Amos is a member of the Deborah Forum, which promotes women in Israel's foreign and defense policy community.`,
    image: laurenimg,
  },
    {
    name: "Wg Cdr (Dr.) Manoj Kumar (Retd.)",
    role: "Senior Research Fellow",
    bio: `Wg Cdr (Dr.) Manoj Kumar (Retd.) is a distinguished Indian Air Force veteran, a product leader, and a leading authority in AI and autonomous systems. His career is a testament to his unwavering commitment to advancing India's indigenous defence capabilities and strategic autonomy.
As a renowned thought leader and frequent speaker, Dr. Kumar is a well-known voice in the drone ecosystem and is at the forefront of policy discussions on drone technology and the dual-use applications of unmanned aerial systems. He is a key advocate for the 'Atmanirbhar Bharat' initiative, fostering collaboration between government, industry, and academia to accelerate innovation.
With more than 15 years in defence innovation, Dr. Kumar has a proven track record of delivering high-impact projects. He spearheaded the transformative Mehar Baba Swarm Drone initiative, securing substantial funding and driving the development of over a dozen indigenous UAV technologies. He also played a critical role in the multi-national induction of platforms like the AH-64 Apache, C-17 Transport Aircraft, SPYDER-MR, and the Heron Mk II UAV fleet, along with small arms like the IWI Negev LMG and Tavor X95. His work is recognised for its tangible results, including contributions to mission-critical platforms used in high-stakes operations like Balakot and Galwan. He holds several patents in AI and machine learning, a testament to his technical expertise and innovative mindset.
Dr. Kumar's leadership extends beyond the military, as he has successfully built an extensive ecosystem with over 129 startups and industries to accelerate technology adoption. He is an
alumnus of the Indian Air Force Academy, the Weapon School, and BITS Pilani, where he earned his Ph.D. in Technology Integration. He holds a PMP certification from PMI and a Certificate in Generative AI and Prompt Engineering from CDAC. He is also an explosive and Hazardous material-trained officer from the USAF and a DGCA-certified drone pilot.
In addition to his professional achievements, Dr. Kumar is an accomplished endurance athlete, including being an Ironman triathlete and a PADI-certified scuba diver. His remarkable feat of swimming 2,600 km of the Ganga River underscores the resilience and discipline that define his approach to leadership and innovation.`,
    image: manojimg,
  },
];

// Intelligence Domain - Intelligence analysis, monitoring, and strategic assessment
const intelligenceTeam = [
  {
    name: "A",
    role: "Head-Pakistan Desk",
    bio: `A serves as the Head of the Pakistan Desk at CNAWS, leading research on terrorist organisations such as Lashkar-e-Taiba (LeT) and Jaish-e-Mohammed (JeM). Beyond counter-terrorism analysis, A tracks Pakistan's political and security environment and offers assessments shaping regional stability and India's national security.`,
    image: AImg,
  },
  {
    name: "J",
    role: "Head-Geo Intelligence Desk",
    bio: `J leads the Geo-Intelligence Desk at CNAWS, specializing in monitoring terrorist infiltration patterns, key infiltration points, and transit routes across sensitive regions. Well-versed in advanced GIS tools, J produces data-driven maps and visual intelligence products.`,
    image: JImg,
  },
  {
    name: "S",
    role: "Intelligence Analyst - Pakistan Desk",
    bio: `S works as an Intelligence Analyst at CNAWS, monitoring separatist and political organisations connected to Pakistan, Jammu & Kashmir, and Punjab. S also conducts sentiment analysis and narrative studies to enrich CNAWS's intelligence outputs.`,
    image: SImg,
  },
  {
    name: "Sushant Pawar",
    role: "Intelligence Analyst, Pakistan Desk",
    bio: `Sushant serves as the Intelligence/ Lead Analyst for the Pakistan Security Desk at CNAWS, specializing in the Balochistan insurgency and Tehrik-e-Taliban Pakistan (TTP). His work spans monitoring the broader regional security environment , including insurgency trends, militant networks, and cross-border dynamics, to assess their impact on stability across South Asia. Beyond terrorism analysis, Sushant tracks Pakistan's evolving political and security landscape, delivering insights that inform regional stability and India's national security priorities.`,
    image: SushantImg,
  },
  {
    name: "Himanshu",
    role: "Intelligence Analyst",
    bio: `Himanshu has worked with one of India's premier technical intelligence agency, where he contributed to projects at the intersection of data, technology, and national security. His research and published works on counterintelligence reflect a deep engagement with the challenges of safeguarding statecraft in the digital era. An alumnus of Jawaharlal Nehru University, he holds a Master's degree in Computer Science with a focus on data-driven decision-making, analytics, and emerging technologies.
Having recently transitioned to the corporate sector as a Data Science Consultant, Himanshu brings with him the rare ability to bridge the worlds of advanced technical expertise and strategic security thinking. While his professional journey now spans data analytics, governance, and AI applications in industry, his heart continues to lie in the realm of national security, where he remains deeply invested in questions of intelligence, resilience, and future warfare.
His unique blend of technical acumen, operational experience, and enduring commitment to India's security architecture will be invaluable in shaping CNAWS' vision of integrating cutting-edge research with strategic foresight.`,
    image: himanshuimg,
  },
];

// Technical Domain - Cybersecurity, web development, AI/ML, and technical operations
const technicalTeam = [
  {
    name: "D",
    role: "Cyber Security Analyst",
    bio: `D serves as a Cyber Security Analyst at CNAWS, monitoring cyber operations emerging from Pakistan. D tracks hostile cyber activities and online propaganda while overseeing CNAWS's internal cyber security framework.`,
    image: DImg,
  },
  {
    name: "Aasia Rizwan",
    role: "Graphics Designer",
    bio: `Aasia Rizwan is a postgraduate in Conflict Analysis and Peacebuilding from Jamia Millia Islamia's Nelson Mandela Centre for Peace and Conflict Resolution. Her academic and research interests lie at the intersection of media, gender, and South Asian regional studies. She holds a bachelor's degree in English and Economics from Dyal Singh College, University of Delhi. In addition to her academic pursuits, she has a strong interest in graphic design, which she leverages to visually communicate evidence-based research and make complex ideas more accessible and impactful.`,
    image: AasiaImg,
  },
  {
    name: "Vedant Sharma",
    role: "Web Developer & AI/ML Analyst",
    bio: `Vedant Sharma is a B.Tech student in Computer Science and Engineering with a specialization in Cyber Security and Digital Forensics at VIT Bhopal University. He holds certifications including EC-Council's Certified Ethical Hacker (CEHv12), ISC2's Certified in Cyber Security, and IBM's Cyber Security Analyst, which validate his expertise in threat detection, risk management, and ethical hacking practices. Vedant has built advanced projects such as a malware detection system using hybrid machine learning models and a phishing website detection system. Proficient in Python, Java, and web technologies, as well as security tools like Kali Linux, SIEM platforms (IBM QRadar), firewalls, IDS/IPS, and vulnerability assessment frameworks, he combines strong technical knowledge with practical cybersecurity skills. His areas of interest include penetration testing, digital forensics, and the application of AI in cybersecurity.`,
    image: sulekimg,
  },
  {
    name: "Ashutosh Jha",
    role: "Web Developer & AI/ML Analyst",
    bio: `Ashutosh Jha is a B.Tech Computer Science and Engineering student at SRM Institute of Science and Technology with hands-on experience in full-stack development, machine learning, and sustainable computing. He has interned with Tata BlueScope Steel and Bharat Intern, working on modern web applications and ML-based projects including a real-time carbon emission prediction system. He has strong problem-solving and teamwork skills.`,
    image: AshutoshImg,
  },
  {
    name: "Bhavneet Singh Ahuja",
    role: "Web Developer & AI/ML Analyst",
    bio: `Bhavneet Singh Ahuja is a Computer Science undergraduate at SRM Institute of Science and Technology with experience in full-stack development and AI/ML. He has worked on projects including carbon emission prediction systems and AI-powered legal automation tools. His interests include technology policy, cybersecurity, sustainable computing, and AI in media.`,
    image: BhavneetImg,
  },
];

const teamMembers = [
  {
    name: "Arpan A. Chakravarty",
    role: "Visiting Research Fellow",
    bio: `Arpan A. Chakravarty is a Research Fellow at the India Foundation. Currently, he is a Non-Resident Fellow at the Pune International Centre for National Security Studies and has been a Fellow of the Founding Cohort of the Network for Advanced Studies on Pakistan (NASP) at the Takshashila Institute, Bengaluru.

His research interests focus on India’s neighbourhood, which he approaches through his strong grounding in law and national security. In the past, he has assisted members of the National Security Advisory Board and has had the opportunity to serve at institutions that play a vital role in nation-building, including Rashtriya Raksha University, Gandhinagar (an Institute of National Importance), and the Indian Institute of Science (IISc), Bengaluru, in various capacities. He is proficient in multiple languages. He can be reached at arpan.chak13@gmail.com.`,
    image: ArpanImg,
  },
  {
    name: "Divya Malhotra",
    role: "Research Fellow",
    bio: `Divya holds a PhD in Geopolitics from the School of International Studies, Jawaharlal Nehru University (JNU), New Delhi. She is presently a Research Fellow with the Centre for National Security Studies, Bangalore, and the Middle East Institute, New Delhi. 

She completed her MPhil from JNU, MA in Applied Economics from Christ University, Bengaluru, and BA (Hons.) in Economics from Panjab University, Chandigarh. Previously, she has worked with the National Security Council’s Advisory Board (NSAB) and MP-IDSA, Delhi, as a researcher. She was also associated with Rashtriya Raksha University (Ministry of Home Affairs), Gujarat, as Assistant Professor and Assistant Director. 

She has presented her research at international conferences in countries including the USA, Israel, Afghanistan, Pakistan, etc., and frequently writes for leading national and international newspapers.`,
    image: DivyaImg,
  },
  {
    name: "Anushka Saraswat",
    role: "Visiting Research Fellow",
    bio: `Anushka Saraswat is a White-Collar Crime & National Security Law Scholar and a Consultant on International Law, Counter-Terrorism Law, Lawfare and International Disputes. She has worked on the prosecution side in cases of anti-money laundering, anti-corruption, and tax evasion at the Supreme Court of India, High Courts, and Special Courts. 

She served as a core member at the Civil 20 Working Group on Human Rights during India’s G20 Presidency, and as a Young Professional at Vivekananda International Foundation (VIF India). She was also a Research Intern at Centre for Land Warfare Studies (CLAWS). A graduate of O.P. Jindal Global University, she holds certifications from the United Nations Office of Drugs and Crime (UNODC). 

Her focus areas include white-collar crime, transnational financial offences, FATF frameworks, terror finance, proliferation finance law (UAPA, PMLA, PCA, ICSANT, UNSCR regimes), and international dispute resolution mechanisms under UNCITRAL, ICSID, and PCA frameworks.`,
    image: AnushkaImg,
  },
  {
    name: "Lt Col Umang Kohli (Retd)",
    role: "Visiting Consultant",
    bio: `Lt Col Umang Kohli (Retd) brings over 25 years of diverse experience across military service and journalism. He served the Indian Army for 24 years, including six years in Jammu & Kashmir during active counter-terrorism operations. As a Company Commander with the Rashtriya Rifles, he led multiple encounters that eliminated several terrorists. 

His acclaimed book, *In The Times of Article 370*, is based on his Kashmir counter-terrorism experiences. He has studied journalism and mass communication in India, Australia, and the United States, and is recognized as the only journalist in the country to have engaged in active combat. 

His areas of expertise span Geo-politics, Defence, Finance, International Trade, Environment, Agriculture, Cyber Security, Risk Management, Public Relations, and Policy Formulation.`,
    image: UmangImg,
  },
  {
    name: "Alakshendra Singh",
    role: "Young Research Fellow",
    bio: `Alakshendra Singh is a third-year B.A. (Hons.) Global Affairs with a specialisation in national security and defence and a minor in Public Policy. He is an aspiring China specialist with A1 level proficiency in Mandarin, along with extensive research into the South China Sea, South Asian Power Dynamics, and Indian hard power capabilities. He is further exploring his interest in OSINT as a supplement to conventional IR.`,
    image: AlakshendraImg,
  },
  {
    name: "Khushi Jain",
    role: "Research Fellow",
    bio: `Khushi Jain is a researcher specialising in information warfare, extremist narratives, and South Asian security dynamics. She holds an MA in International Relations from King's College London, where her dissertation examined how Egyptian leaders strategically employed identity narratives as tools of statecraft. She has conducted open-source intelligence research on militant organisations in Kashmir, focusing on propaganda strategies and recruitment mechanisms. She has over 2 years of experience in strategic communications and public relations. Contact: khushijain0299@gmail.com.`,
    image: KhushiImg,
  },
  {
    name: "Aasia Rizwan",
    role: "Graphics Designer",
    bio: `Aasia Rizwan is a postgraduate in Conflict Analysis and Peacebuilding from Jamia Millia Islamia's Nelson Mandela Centre for Peace and Conflict Resolution. Her academic and research interests lie at the intersection of media, gender, and South Asian regional studies. She holds a bachelor's degree in English and Economics from Dyal Singh College, University of Delhi. In addition to her academic pursuits, she has a strong interest in graphic design, which she leverages to visually communicate evidence-based research and make complex ideas more accessible and impactful.`,
    image: AasiaImg,
  },
  {
    name: "Sushant Pawar",
    role: "Intelligence Analyst, Pakistan Desk",
    bio: `Sushant serves as the Intelligence/ Lead Analyst for the Pakistan Security Desk at CNAWS, specializing in the Balochistan insurgency and Tehrik-e-Taliban Pakistan (TTP). His work spans monitoring the broader regional security environment , including insurgency trends, militant networks, and cross-border dynamics, to assess their impact on stability across South Asia. Beyond terrorism analysis, Sushant tracks Pakistan’s evolving political and security landscape, delivering insights that inform regional stability and India’s national security priorities.`,
    image: SushantImg,
  },
  {
    name: "Elizabeth Roche",
    role: "Media Specialist & Senior Research Fellow",
    bio: `Ms. Elizabeth Roche joined the Jindal School of International Affairs, (Jindal Global University) as Associate Professor after working as a journalist for almost three decades. She holds a Masters Degree in English from Delhi University. She has worked as a television, print, radio and multi-media journalist in Indian and foreign media organisations. She has contributed to two international news agencies – Reuters TV and the French news agency Agence France Presse, AFP. In AFP, as a South Asia correspondent for a decade – she contributed to AFP’s coverage of news events in South Asia including reporting extensively on the Sri Lankan civil war, the insurgency in Kashmir, India’s relations with Pakistan, Afghanistan and Bhutan. At Mint, the financial paper of Hindustan Times Media Limited, as National Writer and then Editor-Foreign Affairs, she helmed coverage of Indian foreign and defence policy for more than a decade. Her work has been widely cited by scholars in books and research articles produced by think tanks across the world. At JSIA, Prof Roche teaches courses on Indian Foreign Policy, Public Diplomacy and News Media, Global News from Multiple Perspectives and News Media and Politics. She is a keen follower of developments in the Indo-Pacific region and is a regular contributor to several publications including The Diplomat.`,
    image: elizabethimg,
  },
    {
    name: "Vedant Sharma",
    role: "Web Developer & AI/ML Analyst",
    bio: `Vedant Sharma is a B.Tech student in Computer Science and Engineering with a specialization in Cyber Security and Digital Forensics at VIT Bhopal University. He holds certifications including EC-Council’s Certified Ethical Hacker (CEHv12), ISC2’s Certified in Cyber Security, and IBM’s Cyber Security Analyst, which validate his expertise in threat detection, risk management, and ethical hacking practices. Vedant has built advanced projects such as a malware detection system using hybrid machine learning models and a phishing website detection system. Proficient in Python, Java, and web technologies, as well as security tools like Kali Linux, SIEM platforms (IBM QRadar), firewalls, IDS/IPS, and vulnerability assessment frameworks, he combines strong technical knowledge with practical cybersecurity skills. His areas of interest include penetration testing, digital forensics, and the application of AI in cybersecurity.`,
    image: sulekimg,
  },
    {
    name: "Ashutosh Jha",
    role: "Web Developer & AI/ML Analyst",
    bio: `Ashutosh Jha is a B.Tech Computer Science and Engineering student at SRM Institute of Science and Technology with hands-on experience in full-stack development, machine learning, and sustainable computing. He has interned with Tata BlueScope Steel and Bharat Intern, working on modern web applications and ML-based projects including a real-time carbon emission prediction system. He has strong problem-solving and teamwork skills.`,
    image: AshutoshImg,
  },
    {
    name: "Bhavneet Singh Ahuja",
    role: "Web Developer & AI/ML Analyst",
    bio: `Bhavneet Singh Ahuja is a Computer Science undergraduate at SRM Institute of Science and Technology with experience in full-stack development and AI/ML. He has worked on projects including carbon emission prediction systems and AI-powered legal automation tools. His interests include technology policy, cybersecurity, sustainable computing, and AI in media.`,
    image: BhavneetImg,
  },
  {
    name: "Violina Sarmah",
    role: "Research Fellow",
    bio: `Violina Sarmah holds a Bachelor’s degree in Political Science from Gauhati University and completed her Master’s in International Relations at South Asian University, New Delhi. She is currently pursuing her PhD from South Asian University, New Delhi. Her research interests center on China, East Asia, and hydro-diplomacy, with a particular emphasis on transboundary water politics and its linkages to regional security and international relations.`,
    image: violinaimg,
  },
  {
    name: "Dr. Lauren Dagan Amoss",
    role: "Research Fellow",
    bio: `Dr. Lauren Dagan Amoss is a researcher specializing in India’s foreign and security policy, with a regional focus on the Indo-Pacific. She is a fellow at the Begin-Sadat Center for Strategic Studies (BESA) and a lecturer at Bar-Ilan University. Dr. Dagan Amos is a member of the Deborah Forum, which promotes women in Israel’s foreign and defense policy community.`,
    image: laurenimg,
  },
  {
    name: "A",
    role: "Head-Pakistan Desk",
    bio: `A serves as the Head of the Pakistan Desk at CNAWS, leading research on terrorist organisations such as Lashkar-e-Taiba (LeT) and Jaish-e-Mohammed (JeM). Beyond counter-terrorism analysis, A tracks Pakistan’s political and security environment and offers assessments shaping regional stability and India’s national security.`,
    image: AImg,
  },
  {
    name: "J",
    role: "Head-Geo Intelligence Desk",
    bio: `J leads the Geo-Intelligence Desk at CNAWS, specializing in monitoring terrorist infiltration patterns, key infiltration points, and transit routes across sensitive regions. Well-versed in advanced GIS tools, J produces data-driven maps and visual intelligence products.`,
    image: JImg,
  },
  {
    name: "D",
    role: "Cyber Security Analyst",
    bio: `D serves as a Cyber Security Analyst at CNAWS, monitoring cyber operations emerging from Pakistan. D tracks hostile cyber activities and online propaganda while overseeing CNAWS’s internal cyber security framework.`,
    image: DImg,
  },
  {
    name: "S",
    role: "Intelligence Analyst - Pakistan Desk",
    bio: `S works as an Intelligence Analyst at CNAWS, monitoring separatist and political organisations connected to Pakistan, Jammu & Kashmir, and Punjab. S also conducts sentiment analysis and narrative studies to enrich CNAWS’s intelligence outputs.`,
    image: SImg,
  },
  {
    name: "Himanshu",
    role: "Intelligence Analyst",
    bio: `Himanshu has worked with one of India’s premier technical intelligence agency, where he contributed to projects at the intersection of data, technology, and national security. His research and published works on counterintelligence reflect a deep engagement with the challenges of safeguarding statecraft in the digital era. An alumnus of Jawaharlal Nehru University, he holds a Master’s degree in Computer Science with a focus on data-driven decision-making, analytics, and emerging technologies.
Having recently transitioned to the corporate sector as a Data Science Consultant, Himanshu brings with him the rare ability to bridge the worlds of advanced technical expertise and strategic security thinking. While his professional journey now spans data analytics, governance, and AI applications in industry, his heart continues to lie in the realm of national security, where he remains deeply invested in questions of intelligence, resilience, and future warfare.
His unique blend of technical acumen, operational experience, and enduring commitment to India’s security architecture will be invaluable in shaping CNAWS’ vision of integrating cutting-edge research with strategic foresight.`,
    image: himanshuimg,
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderDomainSection = (title, team, description) => (
    <motion.div
      initial="hidden"
      animate="show"
      variants={sectionVariant}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-news-dark dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {team.map((member, index) => (
          <TeamMemberCard key={`${title}-${index}`} member={member} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-news-light dark:bg-gray-900 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-4xl font-bold text-center mb-12 text-news-dark dark:text-white"
        >
          Our Team
        </motion.h1>

        {renderDomainSection(
          "Research Domain",
          researchTeam,
          "Our research fellows and scholars conduct in-depth academic research, policy analysis, and scholarly work on national security, international relations, and strategic studies."
        )}

        {renderDomainSection(
          "Intelligence Domain",
          intelligenceTeam,
          "Our intelligence analysts and specialists focus on monitoring, analysis, and strategic assessment of security threats, regional dynamics, and geopolitical developments."
        )}

        {renderDomainSection(
          "Technical Domain",
          technicalTeam,
          "Our technical team handles cybersecurity, web development, AI/ML analysis, and digital infrastructure to support our research and intelligence operations."
        )}
      </div>
    </div>
  );
};

import React, { useState } from "react";

const TeamMemberCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 300;
  const isLong = member.bio.length > previewLength;
  const preview = isLong ? member.bio.slice(0, previewLength) + "..." : member.bio;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition-all duration-300 border border-news-border dark:border-none flex flex-col items-center max-w-sm mx-auto"
    >
      <div className="w-full h-[400px] mb-4 rounded-xl overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top rounded-xl"
        />
      </div>
      <h3 className="text-xl font-bold text-news-dark dark:text-white text-center">
        {member.name}
      </h3>
      <p className="text-news-primary text-sm mb-2 text-center">{member.role}</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm text-justify">
        {expanded || !isLong ? member.bio : preview}
      </p>
      {isLong && (
        <button
          className="mt-2 self-start text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </motion.div>
  );
};

export default Team;
