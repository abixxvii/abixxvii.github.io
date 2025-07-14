---
title: "Stair Traversal Exploration Platform"
date: 2024 September to 2025 February
location: New York, US
---

<br/><img src='/images/new front1.png'>

Project STEP began as a scrappy capstone project at NYU. We were a group of curious engineers trying to build humanoid robots that could walk. No frills, just a mission to make something move. Over time, it grew into a formal student team where both undergraduates and graduate students could contribute through a credit-bearing course or as volunteers.

As the inaugural team lead, I focused on the mechanical design and development of the next generation of bipeds, using insights from previous failures to create more modular, manufacturable systems. At the same time, I took on team operations, marketing, fundraising, budgeting, and mentoring a vertically integrated group of students from different academic levels.

I successfully secured sponsorships and raised funds, including a significant hardware grant from SendCutSend. This allowed us to move from 3D-printed prototypes to robust, CNC-machined and sheet metal designs, which elevated the quality and realism of our robots.

I personally designed, built, and tested multiple robots that combined carbon fiber, 3D printing, and machined components. I am now leading development on a 12-degree-of-freedom biped designed for easy fabrication, quick assembly, and future research adaptability.

I also introduced topology optimization and DFMA principles to improve performance and accelerate iteration. Today, STEP is not just a project but a living robotics platform that blends real-world engineering, collaboration, and student-led innovation.


<br/><img src='/images/side new.png'>

<br/><img src='/images/front new.png'>

***Picture shows the 13 DOF bot which was designed as a combination of sheet metal fab, CNC machining and 3D printing***

<br/><img src='/images/gendesign shin.png'>

<br/><img src='/images/gendesign thigh.png'>
***Pictures show the generative design outcome for shin and thigh links***


<br/><img src='/images/Screenshot 2025-07-11 182636.png'>


***Picture shows the 13 DOF bot which will be fabricated with sheet metal and CNC machining***


<br/><img src='/images/6dofcf.png'>


***Picture shows the 6 DOF bot which uses carbon fibre (CFRP) links and ABS (3D Printed) links***





<video width="320" height="240" controls autoplay>
  <source src='/images/10 dof walk.mp4' type='video/mp4'>
  Your browser does not support the video tag.
</video>

***Video shows the control of the 10 DOF bot using PPO [URDF optimized for simulation]***

Currently, I am spearheading the development of a 12 DOF biped and experimenting with upgrading the existing 6 DOF model to 8 DOF by adding ankle actuation in the pitch direction.

1. **_[12 DOF Bi-Ped Design Overview]_**:

The 12 DOF biped will feature 6 DOF per leg, including:
- Hip: 3 DOF (yaw, roll, pitch).
- Knee: 1 DOF (pitch).
- Ankle: 2 DOF (pitch, roll).

<br/><img src='/images/orthographichip.jpg'>

***Picture shows the orthographic view of the hip [WIP]***

<br/><img src='/images/side view.jpg'>

***Picture shows the side view of the hip [WIP]***

**Torso Functionality:**
- The torso will house and secure essential components, including:
Battery.
Depth camera.
Onboard computer.
Miscellaneous items.

**Manufacturing Techniques:**
- 3D Printing: Chosen for rapid prototyping and quick iteration of designs.
- Machining: Selected for critical components to ensure durability and longevity.
  
**Topology Optimization:**
- Implementing topology optimization techniques to reduce weight while maintaining structural integrity.
- Enhancing performance through efficient material distribution in the robot's design by GD&T and DFMA principles.

**Legged Locomotion Controls:**
- Learning and implementing advanced control algorithms for legged locomotion to enable stable and adaptive movement.
  
**Iterative Development Process:**
- Continuous testing and refinement of designs based on performance feedback.

<br/><img src='/images/existing biped.jpg'>

2. **_[Experimentation]_**
   - Experimenting with the existing 6 DOF biped to convert it into an 8 DOF model.
   - Actuating the 4-bar parallel linkage to enhance ankle movement.
   
<br/><img src='/images/concept.jpg'>


<br/><img src='/images/iter2.png'>

***Picture shows the second iteration of the concept***

<br/><img src='/images/sideviewiter2.png'>

***Picture shows the side view of the 2nd iteration***

<br/><img src='/images/6-8dof.jpeg'>

***Picture shows the bot which was showcased during an event at NYU***

*Please note that current website is a work in progress. Stay tuned for updates on the project's progress!*

In the meantime, Visit/follow the [Project STEP](https://ma82112.wixsite.com/nyuprojectstep)
