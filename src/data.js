import { FaBriefcase } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/",
    text: "Find A Doctor",
  },
  {
    id: 3,
    url: "/",
    text: "Our Services",
  },
  {
    id: 4,
    url: "/",
    text: "Patient Care",
  },
  {
    id: 5,
    url: "/",
    text: "Units",
  },
  {
    id: 6,
    url: "/",
    text: "Publication",
  },
  {
    id: 7,
    url: "/",
    text: "Contact Us",
  },
];

export const sliderImg = [
  {
    id: 1,
    image: "../image/0.png",
    name: "Nabil-Masudh",
  },
  {
    id: 2,
    image: "../image/1.png",
    name: "Nabil-Masudh",
  },
  {
    id: 3,
    image: "../image/2.png",
    name: "Nabil-Masudh",
  },
  {
    id: 3,
    image: "../image/3.png",
    name: "Nabil-Masudh",
  },
  {
    id: 4,
    image: "../image/4.png",
    name: "Nabil-Masudh",
  },
  {
    id: 5,
    image: "../image/5.png",
    name: "Nabil-Masudh",
  },
  {
    id: 6,
    image: "../image/6.png",
    name: "Nabil-Masudh",
  },
  {
    id: 7,
    image: "../image/7.png",
    name: "Nabil-Masudh",
  },
];

export const sublinks = [
  {
    page: "Home",
    links: [{ label: "Home", icon: <FaBriefcase />, url: "/products" }],
  },
  {
    page: "About",
    links: [
      {
        label: "About Ibn Sina Trust",
        icon: <FaBriefcase />,
        url: "/",
      },
      { label: "Mission & Vision", icon: <FaBriefcase />, url: "/" },
      { label: "Board of Trustee", icon: <FaBriefcase />, url: "/" },
      { label: "Awards", icon: <FaBriefcase />, url: "/" },
      { label: "Welfare Activities", icon: <FaBriefcase />, url: "/" },
      { label: "Quality Policy", icon: <FaBriefcase />, url: "/" },
      { label: "Present Units", icon: <FaBriefcase />, url: "/" },
      { label: "Ongoing Projects", icon: <FaBriefcase />, url: "/" },
    ],
  },
  {
    page: "Doctor",
    links: [
      { label: "Department Wise", icon: <FaBriefcase />, url: "/doctor" },
      { label: "Branch Wise", icon: <FaBriefcase />, url: "/" },
      { label: "Doctor Name Wise", icon: <FaBriefcase />, url: "/" },
    ],
  },
  {
    page: "Services",
    links: [
      { label: "Hospital Services", icon: <FaBriefcase />, url: "/" },
      {
        label: "Home Service in COVID-19 Situation",
        icon: <FaBriefcase />,
        url: "/products",
      },
      { label: "Diagnostic Services", icon: <FaBriefcase />, url: "/" },
      { label: "Diabetes Center", icon: <FaBriefcase />, url: "/" },
      {
        label: "Pain & Physiotherapy",
        icon: <FaBriefcase />,
        url: "/Dental Center",
      },
      { label: "Corporate & Home", icon: <FaBriefcase />, url: "/" },
      {
        label: "Health Check-up Package",
        icon: <FaBriefcase />,
        url: "/",
      },
    ],
  },
  {
    page: "Patient Care",
    links: [{ label: "Patient Care", icon: <FaBriefcase />, url: "/" }],
  },
  {
    page: "Units",
    links: [
      {
        label: "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
        icon: <FaBriefcase />,
        url: "/",
      },
      {
        label: "Ibn Sina D.Lab & Consultation Center, Doyagonj",
        icon: <FaBriefcase />,
        url: "/",
      },
      {
        label: "Ibn Sina Specialized Hospital, Dhanmondi",
        icon: <FaBriefcase />,
        url: "/",
      },
      {
        label: "Ibn Sina Medical College Hospital, Kallyanpur",
        icon: <FaBriefcase />,
        url: "/",
      },
      {
        label: "Ibn Sina Medical College, Kallyanpur",
        icon: <FaBriefcase />,
        url: "/",
      },
      {
        label: "Ibn Sina Diagnostic & Consultation Center, Savar",
        icon: <FaBriefcase />,
        url: "/",
      },
      {
        label: "Ibn Sina Diagnostic & Consultation Center, Mirpur",
        icon: <FaBriefcase />,
        url: "/",
      },
    ],
  },
  {
    page: "Publication",
    links: [
      { label: "Latest News", icon: <FaBriefcase />, url: "/" },
      { label: "Health Magazine", icon: <FaBriefcase />, url: "/" },
      { label: "Download zakat Book", icon: <FaBriefcase />, url: "/" },
    ],
  },
  {
    page: "Contact",
    links: [{ label: "Contact Us", icon: <FaBriefcase />, url: "/" }],
  },
];

export const doctors = [
  {
    image: <BsPersonCircle />,
    name: "Dr. Md. Sayeedur Rahman",
    title: "General Surgeon ",
    location: "Ibn Sina Hospital & Diagnostic Center, Jashore",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Dr. Md. Faridul Islam",
    title: "Oral & Dental Surgery ",
    location: "Ibn Sina Diagnostic & Consultation Center, Badda",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "ASST. PROF. DR.ASHFAQUE AHMED SIDDIQUE",
    title: "Medicine & Gastroenterology ",
    location: "Ibn Sina Diagnostic & Consultation Center, Badda",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "DR.AHMED TARIQ",
    title: "ENT",
    location: "Ibn Sina Diagnostic & Consultation Center, Badda",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Dr. Nazmoon Nahar (Shampa)",
    title: "GENERAL SURGERY",
    location: "Ibn Sina Diagnostic & Consultation Center, Chattogram",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Professor Dr. Sajed Abdul Khaleque",
    title: "Ophthalmology",
    location: "Ibn Sina Medical College Hospital, Kallyanpur",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Prof. Dr. M. Touhidul Haque",
    title: "Cardiology",
    location: "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Dr. Mohamed Hasan Meah",
    title: "UROLOGY SPECIALIST",
    location: "Ibn Sina Diagnostic & Consultation Center, Chattogram",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Dr. Md. Riad Hasan",
    title: "Diabetes,Hormone & Medicine",
    location: "Ibn Sina Diagnostic & Consultation Center, Malibagh",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Prof. Dr. Zafor Md. Masud",
    title: "Oncology",
    location: "Ibn Sina Specialized Hospital, Dhanmondi",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Professor Dr. A. K Boshak",
    title: "Newborn & Child Disease Department",
    location: "Ibn Sina Diagnostic & Consultation Center, Bogura",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "DR.MOHAMMAD SAZZAD HOSSAIN",
    title: "Orthopaedics Specialist & Surgeon",
    location: "Ibn Sina Diagnostic & Consultation Center, Badda",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Dr. Md. Wazed Ali",
    title: "Dental",
    location: "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
    number: "Hot Line: 10615, +88 09610010615",
  },
  {
    image: <BsPersonCircle />,
    name: "Dr. Nargish Khanam",
    title: "Gynae & Obs",
    location: "Ibn Sina Diagnostic Center Lalbagh Ltd.",
    number: "Hot Line: 10615, +88 09610010615",
  },
];

export const careAmenities = [
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Information",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Report Delivery",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Customer Care",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Cash Counter",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Pharmacy / Medicine",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Billing",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Admission Counseling",
  },
];

export const GalleryPhoto = [
  {
    image: "../gallery/01.png",
  },
  {
    image: "../gallery/02.png",
  },
  {
    image: "../gallery/03.png",
  },
  {
    image: "../gallery/04.png",
  },
  {
    image: "../gallery/05.png",
  },
  {
    image: "../gallery/06.png",
  },
];

export const laboratoryItems = [
  {
    icon: <BsFillArrowRightCircleFill />,
    text: " Haematological Exam",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Biochemical Exam",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "Elisa Method Hepatitis (Panel)",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: "HIV TEST",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: " Hormone Test",
  },
  {
    icon: <BsFillArrowRightCircleFill />,
    text: " Immunology / Serology",
  },
];

export const infoData = [
  {
    icon: "../info/h1-custom-icon-4.png",
    title: "Hospital Services",
    text: "The hospital is providing cardiology services by 2 modern cath-lab and round the clock CCU facility including cardiac surgery (Adult & Pediatric) by 2 cardiac OT by renowned cardiologists and cardiac surgeons. This hospital has its own stoke units with DSA and stanting with coiling facility. Vascular surgery with PAG, Stenting and Laser services is another service of this hospital.",
  },
  {
    icon: "../info/h1-custom-icon-5.png",
    title: "Radiology & Imaging Services",
    text: "Ibn Sina Trust loves to take challenge to diagnosis the disease and offering treatment to the patient. We offer the best Radiology and imaging services to the patient with industry latest 3 Tesla MRI, Acquisition, Multi slice CT Scan, Digital 100 msH X Ray 4D Ultrasonography and others. We are the pioneer in 1.5 Tesla MRI and 128 Slice CT scan in Bangladesh. A group of well educated experienced consultants with European and North American degrees are working hard to verify the reports.",
  },
  {
    icon: "../info/h1-custom-icon-6.png",
    title: "Laboratory Services",
    text: "Ibn Sina Diagnostic Laboratory having a state of art technology for medical diagnostic laboratory which included Aptio Automation for Biochemistry & Immunology, World class Abbot, Orthoclinical Diagnostics & Dia Somin system. Also, have Serbia clamophoresis (capillary), Biorad HPLC base HBAC analyzer & Allergy Analyzer (64 allergens). Molecular Diagnostics using Gene Xpert, Qiagen, BioRad System for PCR base diagnosis.",
  },
  {
    icon: "../info/h1-custom-icon-1.png",
    title: "Diabetes center",
    text: "Diabetes (diabetes mellitus) is classed as a metabolism disorder. Metabolism refers to the way our bodies use digested food for energy and growth.",
  },
  {
    icon: "../info/h1-custom-icon-2.png",
    title: "Pain and Physiotherapy Center",
    text: "Pain is a protective symptom. It leads a patient to take medication and treatment. Our pain center is dedicated to care your pain and keeping you in comfort. We have renowned doctors, physiotherapists and world-class instruments for pain management and rehabilitation of the patients. We love to address all sort of pain and offer quality services to make our patients happy and smile. You are welcome to visit our pain and physiotherapy center.",
  },
  {
    icon: "../info/h1-custom-icon-3.png",
    title: "Dental Center",
    text: "Ibn Sina Specialized Dental Centre (Dhanmondi) is a Centre of excellence where advanced services are rendered by a group of experienced renowned professors and consultants. Here we serve the patient's world-class treatment in different subspecialty like oral and maxillofacial surgery, Conservates & Cosmetic Dentistry & general dentistry by both male and female dental surgeons through modern equipment’s and advanced materials with reasonable price.",
  },
];

export const doctorDate = [
  {
    id: 1,
    image: "../doctor/doctor1.png",
    name: "Associate Professor Dr. S. M. Anwar Sadat",
    specialty: "Consultant, Dental & Maxillofacial Surgery",
    degree:
      "BDS, MCPS, FCPS, MS (Oral & Maxillofacial Surgery), FDSRCPS Glasgow",
    appointment: "Get Appointment",
    suggestion: "Suggestions",
    viewDetails: "View Details",
  },
  {
    id: 2,
    image: "../doctor/doctor2.png",
    name: "Dr. Subrata Kumar Barai",
    specialty: "Oral & Dental Surgeon",
    degree:
      "BDS, Advanced training in Dental Surgery (India), Dental Implant (India)",
    appointment: "Get Appointment",
    suggestion: "Suggestions",
    viewDetails: "View Details",
  },
  {
    id: 3,
    image: "../doctor/doctor3.png",
    name: "Dr. Nargis Fatema",
    specialty: "Senior Consultant, Obstetrics & Gynecology",
    degree: " MBBS, FCPS, MS (ObsGyn)",
    appointment: "Get Appointment",
    suggestion: "Suggestions",
    viewDetails: "View Details",
  },
  {
    id: 4,
    image: "../doctor/doctor4.png",
    name: "Dr. Farzana Rashid",
    specialty: " Associate Consultant- OB-GYN & IVF",
    degree: "FCPS ( OBS-GYN)",
    appointment: "Get Appointment",
    suggestion: "Suggestions",
    viewDetails: "View Details",
  },
];
