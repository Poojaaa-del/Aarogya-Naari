import React, { useState } from 'react';
import '../styles/HealthGuide.css';
import periodCycle from '../assets/period-cycle.jpg';
import pcos from '../assets/pcos.jpg';
import breastCancer from '../assets/breast-cancer.jpg';
import teenageChanges from '../assets/teenage-changes.jpg';
import hormones from '../assets/hormones.jpg';
import pregnancy from '../assets/pregnancy.jpg';

const healthTopics = [
  {
    title: 'Period Cycle',
    shortNote: 'Understand the phases of the menstrual cycle.',
    content: <p>The menstrual cycle is the process of discharge of blood and other things from the vagina of a woman every month from puberty to menopause excluding pregnancy. It is a natural periodical process that brings changes in the female reproductive system which is responsible for the pregnancy.

It includes changes that occur in the ovary and the uterine walls simultaneously as a result of changes in the level of hormones in the blood.
Two significant events occur within the female reproductive organs:
First is the release of single ovum from one of the ovaries and,
the second is that the uterine endothelium is prepared for the plantation of a fertilized ovum.
If the ovum is not fertilized, the lining is released which results in menstruation.
The duration of the cycles averages about 28 days. However, the period that might differ in different women can range from 20 days to 45 days. The difference in the duration is associated with decreased fertility. </p>,
    image: periodCycle
  },
  {
    title: 'PCOS',
    shortNote: 'Learn about Polycystic Ovary Syndrome.',
    content: <p>Polycystic ovary syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It usually starts during adolescence, but symptoms may fluctuate over time.

    PCOS can cause hormonal imbalances, irregular periods, excess androgen levels and cysts in the ovaries. Irregular periods, usually with a lack of ovulation, can make it difficult to become pregnant. PCOS is a leading cause of infertility.
    
    PCOS is a chronic condition and cannot be cured. However, some symptoms can be improved through lifestyle changes, medications and fertility treatments. 
    
    The cause of PCOS is unknown but women with a family history or type 2 diabetes are at higher risk.</p>,
    image: pcos
  },
  {
    title: 'Breast Cancer',
    shortNote: 'Know the signs and prevention methods.',
    content: <p>Breast cancer is a disease in which abnormal breast cells grow out of control and form tumours. If left unchecked, the tumours can spread throughout the body and become fatal.

    Breast cancer cells begin inside the milk ducts and/or the milk-producing lobules of the breast. The earliest form (in situ) is not life-threatening and can be detected in early stages. Cancer cells can spread into nearby breast tissue (invasion). This creates tumours that cause lumps or thickening. 
    
    Invasive cancers can spread to nearby lymph nodes or other organs (metastasize). Metastasis can be life-threatening and fatal.
    
    Treatment is based on the person, the type of cancer and its spread. Treatment combines surgery, radiation therapy and medications.</p>,
    image: breastCancer
  },
  {
    title: 'Teenage Changes',
    shortNote: 'Discover physical and emotional changes.',
    content: <p>Puberty is when you start to move from childhood into adulthood. During puberty, your body makes hormones that lead to physical and emotional changes. Your reproductive system and other body systems mature, and your body develops so that you are physically able to have a baby.
Changes during puberty can make you feel many emotions, including feeling: overwhelmed, excited, awkward, empowered. This is very normal. It's a good idea to talk to a trusted adult so that they can: support you, answer any questions you might have</p>,
    image: teenageChanges
  },
  {
    title: 'Hormones',
    shortNote: 'Learn about essential hormones.',
    content: <p>While hormones are essential for reproduction, they are also crucial for the other systems of the human body. Hormones are molecules that are produced by the endocrine system that send messages to various parts of the body. They help to regulate multiple processes of the body like blood pressure, hunger, and sexual drive.  Hormones are released from endocrine glands. They instruct the body on how to breathe and how to use energy. Here, we will talk about hormones that are present in females as well as males. 
      This section will tell us what estrogen and progesterone are and what causes high estrogen levels.</p>,
    image: hormones
  },
  {
    title: 'Pregnancy',
    shortNote: 'Information about pregnancy stages.',
    content: <p>Pregnancy refers to a state of woman when she carries developing embryo or fetus. It occurs when fertilization of female egg takes place by male sperm. Such pregnancy tests could include over-the-counter urine test, blood tests, X-ray, ultrasound, or detection of the fetal heartbeat.

    During any of the pregnancy stages, the embryo or fetus is in the womb. The duration of this pregnancy is of about nine months, since the last menstrual period (LMP) of the pregnant woman. Moreover, experts divide the entire duration period into three trimesters. The division is such that each period turns out to be roughly three months long. Use of the word gestation also takes with respect to pregnancy. Gestation refers to the time it takes for one or more offspring to develop inside a pregnant woman. 
    Sometimes, a pregnant woman can develop twins, more than one offspring.</p>,
    image: pregnancy
  }
];

const HealthGuide = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="health-guide-container">
      <h1>Women's Health Guide</h1>
      <div className="topics-container">
        {healthTopics.map((topic, index) => (
          <div
            className={`topic-card ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleContent(index)}
          >
            <img src={topic.image} alt={topic.title} className="topic-image" />
            <div className="topic-text">
              <h2 className="topic-title">{topic.title}</h2>
              <p className="topic-shortnote">{topic.shortNote}</p>
            </div>
            {activeIndex === index && (
              <div className="topic-content">
                <p>{topic.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthGuide;
