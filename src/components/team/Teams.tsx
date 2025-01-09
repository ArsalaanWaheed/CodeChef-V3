import React, { useRef } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';  
import JauwadKhan from './team_photos/jauwadKhan.png';
import OjasSharma from './team_photos/OjasSharma.jpg';
import Maimoona from './team_photos/Maimoona.jpg';
import AshrafAhmad from './team_photos/AshrafAhmad.jpeg';
import AmeerHamza from './team_photos/AmeerHamza.jpg';
import AltafQamar from './team_photos/AltafQamar.jpeg';
import MohdZeeshan from './team_photos/MohdZeeshan.jpg';
import MohdZaid from './team_photos/MohdZaid.jpeg';
import AbdullahZaidi from './team_photos/AbdullahZaidi.jpg';
import EishanDilshad from './team_photos/EishanDilshad.jpg';
import AsnaFatima from './team_photos/AsnaFatima.jpeg';
import MdNadimUddin from './team_photos/MdNadimUddin.jpg';
import SaniaSiddiqui from './team_photos/SaniaSiddiqui.jpg';
import Umar from './team_photos/Umar.jpg';
import MohdAmaan from './team_photos/MohdAmaan.jpg';
import DanielJaved from './team_photos/DanielJaved.jpg';
import MohdFaiz from './team_photos/MohdFaiz.jpg';
import KandarpGupta from './team_photos/KandarpGupta.png';
import ZaraFatima from './team_photos/ZaraFatima.png';
import SonaliVarshney from './team_photos/SonaliVarshney.jpg';
import ArsalaanWaheed from './team_photos/ArsalaanWaheed.jpg';
import UrjitUpadhyay from './team_photos/UrjitUpadhyay.jpg';
import ImtenanAshraf from './team_photos/ImtenanAshraf.jpg';
import SyedFaheem from './team_photos/SyedFaheem.jpg';
import SadiaAiman from './team_photos/SadiaAiman.jpeg';
import RiyanshGupta from './team_photos/RiyanshGupta.jpeg';
import HomaMahmood from './team_photos/HomaMahmood.jpg';
import Sana from './team_photos/Sana.jpg';
import SomyaSaxena from './team_photos/SomyaSaxena.jpg';
import FatimaArif from './team_photos/FatimaArif.jpg';
import ShubhVarshney from './team_photos/ShubhVarshney.jpg';
import AbbasSafvi from './team_photos/AbbasSafvi.jpeg';
import SabaFeroz from './team_photos/SabaFeroz.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const teams = [
  {
    title: 'President',
    members: [
      {
        name: 'Jauwad Jamal Khan',
        role: 'President',
        photo: JauwadKhan,
        contact: 'khanjauwad69@gmail.com',
        linkedin: 'https://www.linkedin.com/in/jauwad-jamal-khan-36778124b/',
      },
    ],
  },
  {
    title: 'Mentor',
    members: [
      {
        name: 'Ojas Sharma',
        role: 'Mentor',
        photo: OjasSharma,
        contact: 'ojassharma2004@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ojas-sharma-860934228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    ],
  },
  {
    title: 'Management Team',
    members: [
      { name: 'Maimoona', role: 'Management Team Lead', photo: Maimoona, contact: 'maimoonaqadri23@gmail.com', linkedin: 'https://www.linkedin.com/in/maimoona-qadri-763753258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Ashraf Ahmad Nasir', role: 'Management Team Member', photo: AshrafAhmad, contact: 'ashrafahmad4k@gmail.com', linkedin: 'https://www.linkedin.com/in/ashraf-ahmad-0a1b6332a?trk=contact-info' },
      { name: 'Mohd Zeeshan Jafri', role: 'Management Team Member', photo: MohdZeeshan, contact: 'jafrizeeshan69@gmail.com', linkedin: 'https://www.linkedin.com/in/mohd-zeeshan-jafri-060398190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Saba Feroz Khan', role: 'Management Team Member', photo:SabaFeroz, contact: 'sabaferoz.256@gmail.com', linkedin: 'https://www.linkedin.com/in/saba-khan-a10418316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
      { name: 'Ameer Hamza', role: 'Management Team Member', photo: AmeerHamza, contact: 'gm1036@myamu.ac.in', linkedin: 'https://www.linkedin.com/in/ameer-hamza-629896318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Abdullah Zaidi', role: 'Management Team Member', photo: AbdullahZaidi, contact: 'abdullahzaidi1934@gmail.com', linkedin: 'https://www.linkedin.com/in/abdullah-zaidi-118181237/' },
      { name: 'Mohammed Zaid', role: 'Management Team Member', photo: MohdZaid, contact: 'zaidgl9226@gmail.com', linkedin: 'https://www.linkedin.com/in/zaid9226?trk=contact-info' },
      { name: 'Kandarp Gupta', role: 'Management Team Member', photo: KandarpGupta, contact: 'kandarpgupta1953@gmail.com', linkedin: 'https://www.linkedin.com/in/ashraf-ahmad-0a1b6332a?trk=contact-info' },
      { name: 'Eishan Dilshad', role: 'Management Team Member', photo: EishanDilshad, contact: 'eishandilshad@gmail.com', linkedin: 'https://www.linkedin.com/in/eishan-dilshad-3527a632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    ],
  },
  {
    title: 'PR Team',
    members: [
      { name: 'Asna Fatima', role: 'PR Coordinator', photo: AsnaFatima, contact: 'Asnafatimah6@gmail.com', linkedin: 'http://linkedin.com/in/asna-fatimah6/' },
      { name: 'Altaf Qamar', role: 'Joint PR Coordinator', photo: AltafQamar, contact: 'altafqmr@gmail.com', linkedin: 'https://www.linkedin.com/in/altaf-qamar-b23841295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    ],
  },
  {
    title: 'Competitive Programming Team',
    members: [
      { name: 'Mohd Nadeem Uddin', role: 'CP Team Lead', photo: MdNadimUddin, contact: 'mdnadimuddin00786@gmail.com', linkedin: 'https://www.linkedin.com/in/md-nadim-uddin/' },
      { name: 'Sania Siddiqui', role: 'CP Team Lead', photo: SaniaSiddiqui, contact: 'sania.siddiqui231@gmail.com', linkedin: 'https://www.linkedin.com/in/sania--siddiqui' },
      { name: 'Mohammad Amaan', role: 'CP Team Member', photo:MohdAmaan, contact: 'mohammadamaan293@gmail.com', linkedin: 'https://www.linkedin.com/in/mohammad-amaan-9b19b4295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Mohd Faiz', role: 'CP Team Member', photo: MohdFaiz, contact: 'mohdfaiz11034@gmail.com', linkedin: 'https://www.linkedin.com/in/mohd-faiz-81b17b2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Umar', role: 'CP Team Member', photo: Umar, contact: 'umark79918@gmail.com', linkedin: 'https://www.linkedin.com/in/umar-khan-0a78b5313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Daneial Javed', role: 'CP Team Member', photo: DanielJaved, contact: 'daneyalkhan007@outlook.com', linkedin: 'https://www.linkedin.com/in/daneial-javaid-713571294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Riyansh Gupta', role: 'CP Team Member', photo: RiyanshGupta, contact: 'zfsiddiqui2022@gmail.com', linkedin: 'www.linkedin.com/in/zara-fatima-siddiqui-43b135288' },
      { name: 'Zara Fatima Siddiqui', role: 'CP Team Volunteer', photo: ZaraFatima, contact: 'zfsiddiqui2022@gmail.com', linkedin: 'www.linkedin.com/in/zara-fatima-siddiqui-43b135288' },
    ],
  },
  {
    title: 'Web Development Team',
    members: [
      { name: 'Sonali Varshney', role: 'Web Development Team Member', photo: SonaliVarshney, contact: 'sonalivarshney1404@gmail.com', linkedin: 'https://www.linkedin.com/in/sonali-varshney-507041312/' },
      { name: 'Arsalaan Waheed Ansari', role: 'Web Development Team Member', photo: ArsalaanWaheed, contact: 'arsalaanwaheed2004@gmail.com', linkedin: 'https://www.linkedin.com/in/arsalaan-waheed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Urjit Upadhyay', role: 'Web Development Team Member', photo: UrjitUpadhyay, contact: 'Gm4175urjitupadhyay@gmail.com', linkedin: 'https://www.linkedin.com/in/urjit-upadhyay-049428236' },
      { name: 'Imtenan Ashraf Siddiqui', role: 'Web Development Team Member', photo: ImtenanAshraf, contact: 'imtenanashraf@gmail.com', linkedin: 'linkedin.com/in/imtenan-ashraf-siddiqui' },
    ],
  },
  {
    title: 'Editorial Team',
    members: [
      { name: 'Syed Faheem Ahmad', role: 'Editorial Team Head', photo: SyedFaheem, contact: 'syedfaheemahmad2002@gmail.com', linkedin: 'https://www.linkedin.com/in/syed-faheem-ahmad-05a78b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Homa Mahmood', role: 'Editorial Team Member', photo: HomaMahmood, contact: 'homamahmood715@gmail.com', linkedin: 'https://www.linkedin.com/in/homa-mahmood-000019275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Somya Saxena', role: 'Editorial Team Member', photo: SomyaSaxena, contact: 'somyasaxena0107@gmail.com', linkedin: 'https://www.linkedin.com/in/somya-saxena-064217296' },
      { name: 'Sadia Aiman', role: 'Editorial Team Member', photo: SadiaAiman, contact: 'sadiaaiman05@gmail.com', linkedin: 'https://www.linkedin.com/in/sadia-aiman-a535b52a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    ],
  },
  {
    title: 'Graphics Team',
    members: [
      { name: 'Quteba Ahsan', role: 'Graphic Designer', photo: '/images/paul.jpg', contact: 'qutebaahsan@gmail.com', linkedin: 'https://www.linkedin.com/in/quteba-ahsan-6529992a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Sana', role: 'Graphic Designer', photo: Sana, contact: 'sanamamnoon2580@gmail.com', linkedin: 'https://www.linkedin.com/in/sana-mamnoon-51255726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
      { name: 'Fatima Arif', role: 'Graphic Designer', photo: FatimaArif, contact: 'fatima.arif13071989@gmail.com', linkedin: 'https://www.linkedin.com/in/fatima-arif-2b452931a/' },
    ],
  },
  {
    title: 'Volunteers',
    members: [
      { name: 'Shubh Varshney', role: 'Volunteer', photo: ShubhVarshney, contact: 'shubhvars2006@gmail.com', linkedin: 'https://www.linkedin.com/in/shubh-varshney-25b897314/' },
      { name: 'Abbas Safvi', role: 'Treasurer', photo: AbbasSafvi, contact: 'abbassafvi6@gmail.com', linkedin: 'https://www.linkedin.com/in/abbas-safvi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ' },
    ],
  },
];

const Teams = () => {
 

  useEffect(()=>{
    AOS.init()
  },[])



  return (
    <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-50 min-h-screen py-10 pt-24">
      <h1 className="text-5xl font-bold text-center mb-10 " data-aos="fade-down" ><span>Meet</span> <span>Our</span> <span>Team</span></h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {teams.map((team) => (
          <div key={team.title} className="mb-12">
            <h2 className="text-3xl font-semibold text-white-400 mb-6">{team.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.members.map((member) => (
                <div data-aos="flip-left" key={member.name}  className=" text-center">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    
                    className="w-56 h-56 mx-auto mb-4 border-4 rounded-lg border-green-400 object-cover transform transition duration-700 hover:scale-110 animated-image"
                  />
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <a
                      href={`mailto:${member.contact}`}
                      className="text-sm inline-block"
                    >
                      <FaEnvelope size={20} className="text-black dark:text-white hover:text-green-500" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm inline-block"
                    >
                      <FaLinkedin size={20} className="text-black dark:text-white hover:text-green-500" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
