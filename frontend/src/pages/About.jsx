// eslint-disable-next-line no-unused-vars
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Oracare Dental Clinic, where passion meets expertise in crafting beautiful smiles. As a leading dental clinic in Goregaon West, we strive to create an environment where patients feel at ease and receive personalized, top-quality care. Our clinic is known for its unwavering commitment to maintaining the highest standards of hygiene and sterilization, making us one of the best dental clinics in Goregaon West.</p>
          <p>Our team comprises seasoned professionals with a wealth of experience in every dental specialty. We leverage state-of-the-art technology and innovative dental techniques to ensure the best treatment for you.We adhere to stringent sterilization and hygiene standards, to ensure a safe and sanitized environment.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At Oracare Dental Clinic, our vision is to be the most trusted name in dental care by delivering exceptional, patient-focused treatments in a safe and welcoming environment. We are committed to enhancing smiles through advanced technology, skilled expertise, and the highest standards of hygiene. Our goal is to ensure every patient feels cared for, confident, and proud of their smile.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Seamless scheduling, minimal wait times, and organized care tailored to your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Easily accessible location, flexible appointment slots, and comprehensive dental care—all under one roof.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Customized dental care plans and reminders tailored to your unique oral health needs and goals.</p>
        </div>
      </div>

    </div>
  )
}

export default About
