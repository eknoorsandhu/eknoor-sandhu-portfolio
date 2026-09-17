---
layout: default
description: Research, projects and community work across biology, mathematics, AI and economics.
---

<header class="hero">
  <div class="wrap hero-grid">
    <div class="hero-inner">
      <h1>Eknoor Kaur Sandhu</h1>
      <p class="lede">I study how living things work, and how computers can help us see them more clearly — from silk proteins in a lab to sugarcane rows seen from a drone.</p>
      <p class="place">Grade 12, SGGS Collegiate Public School, Chandigarh, India</p>
    </div>
    <img class="hero-photo" src="{{ site.baseurl }}/assets/images/eknoor.jpg" alt="Eknoor Kaur Sandhu, smiling outdoors under trees" width="960" height="1200">
  </div>
</header>

<section id="about">
  <div class="wrap section-grid">
    <h2>About</h2>
    <div class="prose">
      <p>After Grade 10, I changed schools so I could study four subjects together:</p>
      <ul class="subjects" aria-label="Subjects I study">
        <li>Biology</li>
        <li>Mathematics</li>
        <li>Artificial Intelligence</li>
        <li>Economics</li>
      </ul>
      <p>No other student at my school takes this mix, and there was no timetable for it. My classes overlapped, so I moved between groups and caught up on missed lessons after school. It also meant leaving the usual Indian routes into medicine and engineering.</p>
      <p>I am Head Girl of my school and President of the Environment Club. Outside school, I do research with Plaksha University and have volunteered with a Chandigarh social-work organisation since Grade 9. I speak English, Punjabi, Hindi and French.</p>
    </div>
  </div>
</section>

<section id="research">
  <div class="wrap section-grid">
    <h2>Research</h2>
    <ol class="entries">
      <li class="entry" data-subjects="biology">
        <h3>Silver nanoparticle–silk fibroin hydrogels for wound dressing</h3>
        <p class="where">Research intern, Plaksha University</p>
        <p>I made hydrogels from silk cocoons, loaded them with silver nanoparticles, and tested how they swell, release silver, break down and fight bacteria. A dose of 50 µg/mL worked about as well as a dose 500 times higher. That was not what I expected, and I reported it as it was.</p>
        <span class="status">First author, manuscript under review at the Journal of Emerging Investigators</span>
        <ul class="tags"><li data-tag="biology">Biology</li></ul>
      </li>
      <li class="entry" data-subjects="ai biology">
        <h3>Finding broken rows in sugarcane fields from drone images</h3>
        <p class="where">Paid intern, DronaMaps, with Plaksha University</p>
        <p>I flew drones with a survey team over small, scattered farms and collected ground data. Then I worked on spotting row breaks and missing plants in ordinary colour images, so farmers know where to replant.</p>
        <figure class="rows-figure">
          <svg id="field-rows" viewBox="0 0 640 300" role="img" aria-label="Drawing of crop rows with a gap where plants are missing"></svg>
          <figcaption>The kind of gap the model looks for: a stretch of row where plants are missing.</figcaption>
        </figure>
        <span class="status">Presented at ICA, Ropar</span>
        <ul class="tags"><li data-tag="ai">AI</li><li data-tag="biology">Biology</li></ul>
      </li>
      <li class="entry" data-subjects="economics ai biology">
        <h3>Can satellite data tell when sugarcane is ready?</h3>
        <p class="where">Student researcher, Plaksha University</p>
        <p>This began as an economics question: could sugar mills schedule harvests more fairly? I studied whether crop images could predict ripeness. An agronomist pointed out that sugar builds up inside the stalk, where a camera cannot see. I dropped that claim and learned to test what a model actually measures.</p>
        <span class="status">Presented at Punjab Agricultural University</span>
        <ul class="tags"><li data-tag="economics">Economics</li><li data-tag="ai">AI</li><li data-tag="biology">Biology</li></ul>
      </li>
      <li class="entry" data-subjects="biology maths">
        <h3>Bioinformatics</h3>
        <p class="where">Self-directed, with mentors</p>
        <p>I wanted to understand the protein sequences behind silk fibroin. I took online courses in bioinformatics (UC San Diego) and algorithmic genomics (Johns Hopkins), arranged time at a local college's bioinformatics department to run sequence searches and alignments, and taught a sequence-analysis workshop to 30 classmates.</p>
        <ul class="tags"><li data-tag="biology">Biology</li><li data-tag="maths">Mathematics</li></ul>
      </li>
    </ol>
  </div>
</section>

<section id="projects">
  <div class="wrap section-grid">
    <h2>Things I’ve built</h2>
    <div>
      <p class="prose">A selection of projects I have built while learning across software, data and creative practice.</p>
      {% include project-grid.html %}
    </div>
  </div>
</section>

<section id="community">
  <div class="wrap section-grid">
    <h2>Community and leadership</h2>
    <ol class="entries">
      <li class="entry">
        <h3>Green Campus Programme</h3>
        <p class="where">President, Environment Club, with APSWDP</p>
        <p>Instead of awareness drives, I set up student audit teams to track classroom electricity, waste sorting and single-use plastic. APSWDP took the model to 29 schools in Chandigarh, where student councils adapted it for themselves.</p>
        <span class="status">Selected to attend COP31, the UN Climate Change Conference, Antalya, November 2026</span>
      </li>
      <li class="entry">
        <h3>Community outreach</h3>
        <p class="where">Volunteer, APSWDP (Association of Professional Social Workers and Development Practitioners), since Grade 9</p>
        <p>Under supervision, I help with confidential records and follow-ups for vulnerable communities in Chandigarh, linking people to health testing, identity documents, children’s schooling and government schemes. The work taught me that good records must protect people’s dignity.</p>
      </li>
      <li class="entry">
        <h3>Head Girl</h3>
        <p class="where">Student Council, SGGS Collegiate Public School</p>
        <p>Students from all four senior streams nominated me. I gathered evidence on gaps in teachers and timetables and presented it to school management.</p>
      </li>
      <li class="entry">
        <h3>Kathak</h3>
        <p class="where">Cultural Talent Search Scholar, Ministry of Culture, Government of India</p>
        <p>I have trained in Kathak, a classical Indian dance, for seven years, and have held the national scholarship since Grade 9. As President of the school Dance Club, I also train younger dancers.</p>
      </li>
    </ol>
  </div>
</section>

<section id="art">
  <div class="wrap">
    <div class="section-grid art-section-head">
      <h2>Art</h2>
      <p class="art-intro">I sketch faces in pencil and charcoal, paint in watercolour, and paint on stones. Select any piece to see it larger.</p>
    </div>
    <ul class="gallery">
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/behind-the-mask.jpg" data-caption="Only the eyes tell the story. Pencil."><img src="{{ site.baseurl }}/assets/images/art/behind-the-mask.jpg" alt="Eyes of a masked portrait" loading="lazy" width="933" height="1400"></button><figcaption><span class="art-title">Only the eyes tell the story.</span><span class="art-medium">Pencil</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/under-the-tree.jpg" data-caption="A cottage resting under restless trees. Watercolour and ink."><img src="{{ site.baseurl }}/assets/images/art/under-the-tree.jpg" alt="Watercolour of a red-roofed cottage under a large tree" loading="lazy" width="1400" height="1400"></button><figcaption><span class="art-title">A cottage resting under restless trees.</span><span class="art-medium">Watercolour and ink</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/owl-stone.jpg" data-caption="A round stone learns to stare back. Painted stone."><img src="{{ site.baseurl }}/assets/images/art/owl-stone.jpg" alt="Owl face painted on a round stone" loading="lazy" width="770" height="1136"></button><figcaption><span class="art-title">A round stone learns to stare back.</span><span class="art-medium">Painted stone</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/pattern-and-face.jpg" data-caption="A face beneath a storm of patterns. Ink with photo collage."><img src="{{ site.baseurl }}/assets/images/art/pattern-and-face.jpg" alt="A printed face surrounded by hand-drawn ink patterns" loading="lazy" width="1400" height="1191"></button><figcaption><span class="art-title">A face beneath a storm of patterns.</span><span class="art-medium">Ink with photo collage</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/watchful-stone.jpg" data-caption="A watchful little face hiding in stone. Painted stone."><img src="{{ site.baseurl }}/assets/images/art/watchful-stone.jpg" alt="Bird-of-prey face painted on a flat stone" loading="lazy" width="770" height="508"></button><figcaption><span class="art-title">A watchful little face hiding in stone.</span><span class="art-medium">Painted stone</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/evening-sail.jpg" data-caption="One sail against a burning sky. Watercolour."><img src="{{ site.baseurl }}/assets/images/art/evening-sail.jpg" alt="Watercolour of a sailboat under an orange and yellow sky" loading="lazy" width="1400" height="933"></button><figcaption><span class="art-title">One sail against a burning sky.</span><span class="art-medium">Watercolour</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/birds-on-wire.jpg" data-caption="A small stone becomes a crowded perch. Painted stone."><img src="{{ site.baseurl }}/assets/images/art/birds-on-wire.jpg" alt="Three cartoon birds on a wire, painted on a grey stone" loading="lazy" width="770" height="494"></button><figcaption><span class="art-title">A small stone becomes a crowded perch.</span><span class="art-medium">Painted stone</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/charcoal-portrait.jpg" data-caption="Calm eyes, careful shadows. Charcoal."><img src="{{ site.baseurl }}/assets/images/art/charcoal-portrait.jpg" alt="Charcoal portrait of a woman in a turtleneck" loading="lazy" width="934" height="1400"></button><figcaption><span class="art-title">Calm eyes, careful shadows.</span><span class="art-medium">Charcoal</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/bulldog-and-bird.jpg" data-caption="A patterned pup full of attitude. Marker and ink."><img src="{{ site.baseurl }}/assets/images/art/bulldog-and-bird.jpg" alt="Patterned French bulldog with a small bird on its head" loading="lazy" width="1061" height="1400"></button><figcaption><span class="art-title">A patterned pup full of attitude.</span><span class="art-medium">Marker and ink</span></figcaption></figure></li>
    </ul>
  </div>
</section>

<section id="honours">
  <div class="wrap section-grid">
    <h2>Other experience and honours</h2>
    <dl class="honours">
      <div><dt>Junior Academy, New York Academy of Sciences</dt></div>
      <div><dt>Young Technology Scholar, Plaksha University</dt></div>
      <div><dt>Entrepreneurship intern, Punjab Innovation Mission</dt></div>
      <div><dt>Annotation quality intern, Labellerr AI</dt></div>
    </dl>
  </div>
</section>

<dialog class="art-viewer" id="art-viewer" aria-label="Artwork">
  <button class="viewer-close" type="button" id="viewer-close">Close</button>
  <img id="viewer-image" alt="">
  <p id="viewer-caption"></p>
</dialog>
