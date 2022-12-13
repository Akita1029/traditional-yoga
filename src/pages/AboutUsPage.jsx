import React, { useRef, useEffect, useState } from "react";
import CourseSortItem from "../components/CourseSortItem";
import SubTitleBar from "../components/SubTitleBar";
import Accordion from "react-bootstrap/Accordion";

const AboutUsPage = (props) => {
  return (
    <>
      <div className="container">
        <SubTitleBar title='The Charity' detail='Traditional Yoga' />
        <div className="row mt-3">
          <div className="col-sm-12 col-xs-12 col-md-6 colo-lg-6">
            <img className="w-100" src={require('../assets/images/Rectangle 34.png')} />
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ps-3 mt-3 mt-md-0 ps-md-6">
            <h3 className="text-primary fw-bold mb-3">Our Courses</h3>
            <CourseSortItem title='Online Trainings' image='online-training-course.png' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
            <CourseSortItem title='Retreats' image='retreats-course.png' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
            <CourseSortItem title='In Person Trainings' image='inperson-training-course.png' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
            <CourseSortItem title='Past Trainings' image='past-training-course.png' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
            <h3 className="fw-bold text-primary mb-3">Volunteers that delivers programs under the heading of Traditional Yoga.</h3>
            <span className="content mt-2"><span className="text-black fw-bold">The aim of Yoga Healing Foundation of America Inc. </span>is to restore an understanding of the
              relationship of the different limbs of yoga and to present this knowledge in its original, whole and undiluted parctical form for the benefit of all practitioners and teachers.</span>
            <span className="content mt-2">Hatha Yoga for the body and Raja for the mind. Many of our programs are taught by Dr.A.L.V.Kumar, an inspirational teacher and yoga master.</span>
            <span className="content mt-2">Across the USA and the globe, we run online yoga and meditation teacher training programs.</span>
            <span className="content mt-2">In India we help to fund a range of local yoga and meditation programs and events, including Yoga teacher training courses and a 15 day winter meditation retreat.</span>
            <span className="content mt-2">The courses are all run as a charitable not-for profit activity.</span>
            <span className="content mt-2">They cover both theory and practice of Hatha and Raja Yoga, for the purpose of promoting the study and practice of traditional yoga, advancing the education of the public in its healing,
              preventative and therapeutic effects, and promoting the mental, physical and spiritual health of the public</span>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ps-3 mt-3 mt-md-0 ps-md-6">
            <img className="w-100" src={require('../assets/images/aboutpage-1.png')} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
            <img className="w-100" src={require('../assets/images/aboutpage-3.png')} />
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center  ps-3 mt-3 mt-md-0 ps-md-6">
            <h3 className="fw-bold text-primary mb-3">Two core values, Seva and Dana.</h3>
            <span className="text-black fw-bold mt-2">Seva, translated as selfless service is an important principle in the yoga tradition</span>
            <span className="content mt-2">Karma yoga, sometimes called the path of dedication, or the path of action develops several essential attitudes that help us both in our day to day life and on the path of Yoga.</span>
            <span className="content mt-2">This approach helps us to develop the qualities of acceptance, gratitude, helpfulness and generosity.</span>
            <span className="content mt-2">The path of karma yoga is discussed in depth in the Bhagvad Gita, in chapter two, Krisha says “Yoga is wisdom in work.”</span>
            <span className="text-black fw-bold mt-2">Dana is the virtue of unconditional generosity and unattached giving through donation to a good cause.</span>
            <span className="content mt-2">Traditionally, the teaching of yoga has for thousands of years been offered on the basis of Dana and as much as we are able to follow this principle. </span>
            <span className="content mt-2">Our courses are charged at a comparatively low cost and broken into a course fee and optional suggested donation, we also offer a number of free bursary places on all our courses.</span>
            <span className="content mt-2">As a non-profit, the course donation allows us to cover our basic expenses, and we welcome donations in gratitude for the teaching and in order to further our charitable work.</span>
            <span className="content mt-2">We suggest a minimum donation amount that we feel is affordable and appropriate for each course. If people are unable to pay the full donation they give what they can, equally some people who are able, choose to give more in gratitude for the quality of teaching they have received.</span>
            <span className="content mt-2">The act of giving a donation rather than a compulsory fee is an opportunity for participants in our courses to benefit from an act of voluntary giving and develop the yogic quality of generosity.</span>
            <span className="content mt-2">Dana is one of the ten "pefected virtues" taught by Buddha.</span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
            <h3 className="fw-bold text-primary mb-3">Our Charitable Programs.</h3>
            <span className="content mt-2">The Yoga Healing Foundation of America Inc. aims to protect, revive and disseminate original, undiluted and complete yogic knowledge (both theory and practice) in its purest form for the benefit of the public and public wellbeing in the USA, UK and India.</span>
            <span className="content mt-2">In the USA we deliver this through courses and training programs. All Traditional Yoga weekend courses are led by experienced teachers who have undergone extensive training and choose to teach on a voluntary basis. Their support enables us to offer courses at a low cost and to bring the benefits of meditation to as many people as possible. All the money raised from our weekend courses and retreats is reinvested back into the charity and used to fund our charitable programs. We fund full bursaries and partially subsidized places for our courses.</span>
            <span className="content mt-2">Yoga is a tradition that has been passed down through generations of teachers in India and many practices and techniques are as yet unknown in the West and in mainstream yoga schools. Many of these practices are dying out and are increasingly difficult to access. The Charity’s aim is to protect the completeness of the yoga tradition and ensure that knowledge is not lost but rather revived for the benefit of practitioners and teachers regardless of geographical location and/or language barriers.</span>
            <span className="content mt-2">The Charity has an established connection to India, primarily to guarantee its authenticity at source but also as a means to safeguard the continuation of traditional knowledge in its original cultural setting for the benefit of future generations.</span>
            <Accordion className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Charitable grants to support projects in India</Accordion.Header>
                <Accordion.Body>
                We make charitable grants to Yoga Healing Foundation India, with whom we have an established collaborative relationship, to organize and deliver programs that align to our aims and objectives.
Hyderabad has a population of about 7.75 million, making it the fourth most populous city in India. Like all Indian cities it has seen a sharp rise in lifestyle diseases and a decline of traditional knowledge such as yoga practice and dietary awareness. For example, a survey conducted by the Associated Chamber of Commerce and Industry found that 68% of urban women in India between 21 and 52 suffer from lifestyle diseases
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>The Yoga Healing Foundation of America Inc. Public Benefit</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center ps-3 mt-3 mt-md-0 ps-md-6">
            <img className="w-100" src={require('../assets/images/aboutpage-2.png')} />
          </div>
        </div>

        <hr />

        <div className="d-flex flex-column mt-5 mb-5">
          <h3 className="text-primary fw-bold">Dr.Kumar</h3>
          <img className="w-100 mt-3" src={require('../assets/images/dr.kumar.png')} />
          <h3 className="fw-bold text-primary mt-5 mb-3">"You only teach what you practice and practice what you teact".</h3>
          <span className="content mt-2">Dr Kumar is internationally recognized as an inspirational yoga and meditation teacher aswell as an award-winning scientist. His teaching is informed by his extensive experiential and theoretical knowledge, developed through his education in more than 37 schools of Hatha yoga and 50 traditions of meditation and progressed through decades of self-practice.</span>
          <span className="content mt-2">As a child he began his formal studies at the Sivananda Ashram under Swamy Vishnudevananda. He was initiated by Swamy Chinmayananda, Sachidananda & Omkarananda and later under Swamy Rama and Satyananda Saraswathi. He also learned asana practice with BKS Iyengar, Pattabhi Jois, Desikachar among other renowned teachers as well as unknown but equally accomplished Himalayan masters and monks. Rather than belonging to any one school, Dr. Kumar’s teaching adheres to the genesis of yoga and its many components. Dr. Kumar’s first teacher cautioned him to avoid being limited to the methodology of only one school, realizing that each school gives importance to only a few limbs of yoga. This is something Dr. Kumar has followed though out his life, allowing him to keep an open mind, and continuously learn and expand his knowledge, respecting all traditions.</span>
          <span className="content mt-2">Dr Kumar’s teaching is informed by his deep understanding of yoga traditions and focuses on practice. His in-depth theoretical studies of Hatha Yoga have explored Hatha Yoga Pradipika, Hatha Ratnavali, Garanda Sanhita, Siva Sanhita, Hathayoga Rahasyam, Kurantaka Yoga, Kapala Kurantaka Yoga, and Yoga Rahasya. He is a trainer of yoga teacher trainers and yoga teachers and is an authority on the science of yoga and its diverse traditions and systems.</span>
          <span className="content mt-2">He has studied meditation in Hindu, Yoga, Mahayana and Theravada Buddhist schools including monastic traditions in Thailand, Burma and Sri Lanka. He reads Sanskrit and Pali and has sourced and translated rare texts, exploring in particular the relationship between Yoga, Buddhism and Vedanta.</span>
          <span className="content mt-2">Dr Kumar has been guiding meditation retreats in the UK and India since 2008 and has trained a group of UK teachers. In the UK he has given guest lectures at Imperial College London, University of London SOAS, Oxford Brookes University, Bath Royal Literary and Scientific Institution.</span>
          <span className="content mt-2">Dr Kumar has taught over 100,000 people in India as a public service, focusing on free public health and yoga awareness workshops that address the growing levels of lifestyle related diseases in India. For his voluntary contribution he has received the following national awards;</span>
          <span className="content mt-2"><i className="bi bi-dot"></i>Bharat Jyoti Award (Glory of India Award), India International Friendship Society</span>
          <span className="content mt-2"><i className="bi bi-dot"></i>He Rajiv Gandhi Excellence Award</span>
          <span className="content mt-2"><i className="bi bi-dot"></i> International Achievers Award</span>
          <span className="content mt-2"><i className="bi bi-dot"></i>Homi Bhabha Science and Technology Award</span>
          <span className="content mt-2">Yoga is many limbed, and is not to be confused with any form of religion. My aim is to restore the understanding of the relationship of different branches of traditional yoga so as to enable each person to make swift and effective progress</span>
          <span className="content mt-2">Dr Kumar is a practitioner and teacher of Kayachikitsa, a system of yoga that was practiced in the tradition of Narayana Swamy by the author of HathaYoga Ratnavali. This tradition was passed through his family lineage to Narayana Munindra, with whom Dr. Kumar studied. Dr. Kumar is one of only three people in the world to have been trained in this knowledge and to currently practice this particular system. Kayachikitsa is an ancient science focused on the treatment of physical and mental illness, and with his advanced knowledge this technique, his understanding of medical conditions, and his reassuring compassion, Dr. Kumar continues to bring effective relief to many people. The long-term benefits are the regeneration of the whole body system and the means to achieve and maintain a status of complete health.</span>
          <span className="content mt-2">Kumar’s personal experience of the therapeutic benefits of yoga inspired him to teach. In 1992 Kumar was involved in a road accident. He suf­fered multiple fractures in the lower spine, hip and pelvic bones. He also lost control over his lower torso and his ure­thra was ruptured. He was told that he would not be able to have children and may not walk again. He was bed rid­den for two years and doctors had little hope for his recov­ery. Finally, he used his deep knowledge of yoga to design a systematic program of treatment for himself with asana and pranayama practice. By the following year, he was mobile and in two years he could run. He resumed practicing around 300 asanas and had his first daughter in 1994. In gratitude for the benefit he has received he has volunteered his time to teaching yoga and meditation for free to thousands of people in India and reviving the ancient system of yoga therapy, Kaya Chikitsa.</span>
          <span className="content mt-2">In recognition of this charitable service to the community he has received two major national awards and an honorary doctorate. The Yoga Healing Foundation was established to support his work in the UK and India. Kumar is able to combine his extensive knowledge of the traditional yogic systems with a scientific analytical approach; as well as teaching yoga and meditation he works as a scientist for the government of India.</span>

        </div>
        

      </div>
    </>
  );
}

export default AboutUsPage;