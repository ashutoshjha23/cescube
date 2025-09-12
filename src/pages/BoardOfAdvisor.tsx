import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import advisorImg from "@/assets/advisors/shekharimg.jpg";
import sreeramImg from "@/assets/advisors/sreeramimg.jpg"; 
import poojaImg from "@/assets/advisors/poojaimg.jpg";
import anilImg from "@/assets/advisors/anil.jpg";
import yogeshimg from "@/assets/advisors/yogeshimg.jpg";
import bediimg from "@/assets/advisors/bediimg.jpg";
import rgkimg from "@/assets/advisors/rgkimg.jpg";
import hoodaimg from "@/assets/advisors/hoodaimg.jpg";
import sriparnaimg from "@/assets/advisors/sriparnaimg.jpg";




const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const advisors = [
  {
    name: "Adm. Shekhar Sinha",
    title: "PVSM, AVSM, NM & Bar, ADC | Former Three-Star Admiral, Indian Navy",
    image: advisorImg,
    description: `Adm. Shekhar Sinha PVSM, AVSM, NM & Bar, ADC is a former Three star Admiral of the Indian Navy,
    was Commander in Chief of Western Naval Command. He was also Chief of Integrated Defence Staff, 
    and a member of the Defence Acquisition Council between 2010 to 2012. During his tenure, the Long Term Integrated Perspective Plan 
    was compiled and approved by the Government. Adm. Sinha is a naval aviator of fighter stream and has flown over 2700 hours. 
    He steered aviation acquisition as the Assistant Chief of Naval Staff, and later held command of the Western Fleet. 
    Adm. Sinha retired in 2014 as the Commander in Chief of the Western Naval Command based at Mumbai, 
    with additional responsibility of Commander in Chief Coastal Security, Western Seaboard.`,
  },
    {
    name: "Commodore Anil Jai Singh",
    title: "Former Commodore",
    image: anilImg,
    description: `Commodore Anil Jai Singh served in the Indian Navy for over three decades as a submariner. He is also an Anti Submarine Warfare specialist from the erstwhile Soviet Union. Presently the Senior Vice President of a leading European MNC in India, he is also the Vice President of the Indian Maritime Foundation, an Honorary Adjunct Fellow and Life Member of the National Maritime Foundation,  Vice President of the Navy Foundation's Delhi Charter and is on the Governing Body of the Society for Indian Ocean Studies.  He has also co-chaired the National Defence and Aerospace Committee of ASSOCHAM, a leading industry association and has also been  a member of the Defence Audit Advisory Board.  During his naval career he had the distinction of  commanding four submarines and a Fleet ship. Ashore,  he served in the Directorates of Submarine Acquisition and Naval Plans. He was also associated with training as a Directing Staff at the Naval War College and as the Head of Naval  Training  at the National Defence Academy. He also served as India's Defence and Naval Adviser in the United Kingdom  for over three years and as Deputy Assistant Chief Maritime in Perspective Planning and Force Development in  the Integrated Staff at the  MoD.                                            An alumnus of the National Defence Academy, the Submarine Warfare School , the Defence Services Staff College and the Naval War College, he is a  post graduate in Defence and Strategic Studies. A prolific writer on maritime security,  diplomacy, submarines, the Indo-Pacific  and defence procurement related  issues  for professional journals and mainstream media, his views are also sought by the electronic media and on TV. He has contributed chapters for numerous books and is a peer reviewer for leading defence publications. He has been invited to speak at international conferences across the world, and  at leading think tanks like the IISS in London and Singapire and the NATO Centre of Excellence in Istanbul amongst others. He has also been part of Track 1.5 Expert Groups on maritime security in IORA, BIMSTEC , the  EAS and most recently, the Australia- France-India trilateral, the Indo -UK defence cooperation bilateral amongst others.`,
  },
    {
    name: "Air Marshal GS Bedi",
    title: "AVSM VM VSM (Retired)",
    image: bediimg,
    description: `The Air Marshal was commissioned as a Fighter Pilot in Jun 1984.
He has over 3700 hrs of accident free flying on MiG 21 and Mirage –
2000 aircraft. He was awarded Vayu Sena Medal (Gallantry) in the
Kargil conflict. He is a graduate of the Defence Services Staff College
Wellington and an alumni of the National Defence College, New Delhi.
He has commanded a Fighter Squadron and a front line Fighter Base.
He has served in many prestigious appointments, like the Air
Adviser at the High Commission of India, London, Air Officer
Commanding Jammu & Kashmir, Assistant Chief of the Air Staff
Operations (Offensive) and Personnel (Officers). He was the Senior Air
Staff Officer of two operational Commands and the Director General
(Inspection and Safety) at Air HQ from where he retired on 30 Apr 2022.
In the recognition of his distinguished service, he was awarded the
Ati Vishisht Seva Medal and Vishisht Seva Medal.`,
  },
    {
    name: "Air Marshal RGK Kapoor",
    title: "PVSM AVSM VM (Retd)",
    image: rgkimg,
    description: `Air Marshal Ravi Gopal Krishna Kapoor was commissioned into the Fighter stream of Indian Air Force on 07 Jun 1986. The Air Marshal is a Cat ‘A’ Qualified Flying Instructor. He is an alumnus of Defence Services Staff College and College of Air Warfare. He has flown over 5000 hours across the entire spectrum of fighter and trainer aircraft of the Indian Air Force.
During his career spanning more than 38 years, he has held many field and staff appointments at Operational Commands, Training Establishments and Air Headquarters. He Commanded a Fighter Squadron, an IAF contingent in UN mission in Congo and was Air Officer Commanding of a frontline operational fighter base. He was Chief Instructor (Flying) at Air Force Academy, Principal Director Intelligence, Assistant Chief of Air Staff Operations (Space) and (Intelligence) at Air Headquarters. He was India’s Air and Defence Attaché at Embassy of India in USA. He was the IAF spokesperson during Balakot strikes in 2019. 
He has been the Air Defence Commander, Senior Air Staff Officer and Air Officer Commanding in Chief of Central Air Command. He was also the Deputy Commander in Chief of the tri services Strategic Forces Command prior to taking over as Air Officer Commanding in Chief of Central Air Command from where he superannuated on 31 Aug 24.
The Air Marshal is recipient of Pram Vishisht Seva Medal, Ati Vishisht Seva Medal and Vayu Sena Medal. He also has been commended thrice by Chief of the Air Staff and AOC-in-Cs. He currently writes articles and contributes to growth of defence eco system in India.`,
  },

      {
    name: "Lt. Gen. D.S. Hooda (Retd.)",
    title: "VSM, AVSM, UYSM, PVSM - Former General Officer Commanding-in-Chief Northern Command",
    image: hoodaimg,
    description: `Lt. Gen. Hooda was commissioned into the 4th Battalion of the 4th Gorkha Rifles in 1976. He served initially in Nagaland during the peak of insurgency. As a Major General, Hooda was responsible for counter-insurgency operations in Manipur and South Assam. Between 2012 to 2016, he was stationed in Jammu and Kashmir and ultimately retired as the Army Commander of Northern Command in 2016. During this time, he effectively tackled numerous strategic challenges that emerged on the borders with Pakistan and China. Hooda is a recipient of several prestigious awards including the Vasishta Seva Medal, Ati Vasishta Seva Medal, Uttam Yudh Seva Medal, and Param Vishisht Seva Medal for his distinguished military service. In 2019, he authored a comprehensive National Security Strategy document. Today, he is one of India’s foremost commentators on the country’s national security.`,
  },
      {
    name: "Lieutenant General Yogesh Kumar Joshi",
    title: "PVSM, UYSM, AVSM, VrC, SM, ADC - Former General Officer Commanding-in-Chief Northern Command",
    image: yogeshimg,
    description: `Lt Gen Yogesh Kumar Joshi was commissioned into the Indian Army in June 1982 and has rendered over 40 years of illustrious service. A graduate of the National Defence Academy, Khadakwasla, Pune, he has done post-graduation in Defence Studies and MPhil in Strategic Leadership & National Security from Madras University. He has a working knowledge of Chinese language.

The General has served as an instructor at Infantry School Mhow, as a Military Observer in UN mission in Angola and has also represented India as Defence Attache at Embassy of India, Beijing, China for three years. He has commanded a Brigade, a Division and a Corps in Eastern Ladakh, on the Line of Actual Control (LAC), before taking over as Army Commander Northern Command. As Army Commander he is credited with spearheading the Indian response to PLA’s attempt to alter the status quo on the LAC by use of force in 2020 during Operation SNOW LEOPARD.

He has served in Military Operations Directorate in Army HQs thrice in various capacities handling both China and Pakistan affairs and also the insurgency in North Eastern States.

As the Director General Infantry, he spearheaded the modernization drive of the Infantry and a large number of weapon systems and equipment were procured under his tutelage.`,
  },
  {
    name: "Dr. Sreeram Chaulia",
    title: "Professor & Dean, Jindal School of International Affairs | Director General, Jindal India Institute",
    image: sreeramImg,
    description: `Dr. Sreeram Chaulia is Professor and Dean at the Jindal School of International Affairs (JSIA) and Director General of the Jindal India Institute. 
    A leading social scientist and opinion maker on international affairs, he holds a Ph.D. and M.A. in Political Science and International Relations from Syracuse University (USA), 
    an MSc. in History of International Relations from LSE (UK), and a B.A. in Modern History from Oxford University (UK). 
    He has authored 1000+ articles in leading newspapers, regularly appears on global media, and hosts the weekly TV show *Indian Diplomacy* on DD India.`,
  },
    {
    name: "Dr Sriparna Pathak",
    title: "Professor, Jindal School of International Affairs",
    image: sriparnaimg,
    description: `Dr. Sriparna Pathak is a Professor of China Studies, and the founding Director of the Centre for Northeast Asian Studies at O.P. Jindal Global University, (JGU) Haryana, India. She also serves in the capacity of a Senior Fellow, at the Jindal India Institute. Additionally, she is also an Associate Director at the Motwani Jadeja Institute of American Studies at JGU. She teaches courses on Foreign Policy of China as well as Theories of International Relations. In 2022, she published a book titled ‘Drifts and Dynamics: Russia’s Ukraine War and Northeast Asia. Her previous work experience covers Universities like Gauhati University, Don Bosco University; the Ministry of External Affairs, where she worked as a Consultant for the Policy Planning and Research Division, working on China’s domestic and foreign polices; think tanks like Observer Research Foundation in New Delhi and Kolkata respectively, and the Centre for Armed Forces Historical Research in New Delhi.
She is also associated with Taiwan’s Doublethink Lab, as a regional partner, and works on tracking China’s influence operations. She is a recipient of the prestigious CITW Community Fund from Taipei’s Doublethink Lab. She has also been a recipient of the prestigious joint fellowship from India’s Ministry of Human Resources Development (MHRD) and the China Scholarship Council for studying an advanced level of Mandarin and for research in Beijing, People’s Republic of China between 2011-2013.
Awarded a Doctorate degree from the Centre for East Asian Studies, Jawaharlal Nehru University (JNU) in 2015, Dr. Pathak is fluent in English, Hindi, Mandarin Chinese, Bengali and Assamese. She has been a resource person for various media organisations, colleges, Universities and think tanks within India and abroad. She has bylines and has been quoted in national and international dailies, ranging from The Hindu to The Indian Express to the Hindustan Times to South China Morning Post to the Washington Post. She is currently working on separate research projects on China’s perceptions of the Quad, and 10 years of India’s Security and Growth for All in the Region (SAGAR), and beyond. She can be reached at sriparnapathak@gmail.com or @Sriparnapathak on Twitter.`,
  },
  {
    name: "Dr. Pooja Arora",
    title: "Assistant Professor, Jindal School of International Studies | Policy Consultant & AI Trainer",
    image: poojaImg,
    description: `Dr. Pooja Arora is an Assistant Professor at the Jindal School of International Studies and a policy consultant whose work navigates the crossroads of international political economy, security, emerging technologies, and strategic diplomacy. She has advised the Digital Transformations Lab at the German Institute for Global and Area Studies and works as a freelance AI trainer focused on ethical annotation and mitigating biases in AI systems.

She earned an MSc in International Political Economy from the London School of Economics and an MA with distinction in Political Science and International Relations from Indira Gandhi National Open University. Pooja is the co-founder of The Pax Indica newsletter, has published extensively, and actively engages in policy advocacy and scholarly discourse. She is also an award-winning game designer, with designs simulating India’s electoral process, counterfactual history, and international trade strategy for students.`,
  },



];

const BoardOfAdvisor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-news-light dark:bg-gray-900 px-6 py-16 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={sectionVariant}
          className="text-center mb-14 max-w-3xl"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-news-dark dark:text-white">
            Board of Advisors
          </h1>
        </motion.div>

        {/* Advisor Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="show"
              variants={sectionVariant}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                         flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-[420px] overflow-hidden flex justify-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="h-full w-auto object-cover transform hover:scale-105 transition duration-700"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-news-dark dark:text-white mb-2">
                  {advisor.name}
                </h2>
                <p className="text-md font-semibold text-news-primary dark:text-gray-400 mb-4 leading-snug">
                  {advisor.title}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                  {advisor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoardOfAdvisor;
