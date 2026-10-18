---
layout: default
description: Research, projects and community work across biology, mathematics, AI and economics.
# Set this to the ID after v= or youtu.be/ in the YouTube link.
performance_youtube_id: "XETqyZgy1IA"
---

<header class="hero">
  <div class="wrap hero-grid">
    <div class="hero-inner">
      <h1>Eknoor Kaur Sandhu</h1>
      <p class="lede">I'm interested in biology, and in building computer tools to study it.</p>
      <p class="place">Grade 12, SGGS Collegiate Public School, Chandigarh, India</p>
    </div>
    <img class="hero-photo" src="{{ site.baseurl }}/assets/images/eknoor.jpg" alt="Eknoor Kaur Sandhu, smiling outdoors under trees" width="960" height="1200">
  </div>
</header>

<section id="about">
  <div class="wrap about-grid">
    <div class="about-copy">
      <h2>About</h2>
      <div class="prose">
        <p>After Grade 10, I changed schools so I could study four subjects together:</p>
        <ul class="subjects" aria-label="Subjects I study">
          <li>Biology</li>
          <li>Mathematics</li>
          <li>Artificial Intelligence</li>
          <li>Economics</li>
        </ul>
        <p>I'm Head Girl of my school and President of the Environment Club. Outside school, I do research with Plaksha University and volunteer with APSWDP, a social-work organisation in Chandigarh. I speak English, Punjabi, Hindi and French.</p>
      </div>
    </div>
    <div class="performance" id="performance" role="region" aria-labelledby="performance-title">
      <h2 id="performance-title">My performance at the Kala Mahotsava 2026 in Chandigarh</h2>
      {% if page.performance_youtube_id != "" %}
      <iframe class="performance-video" src="https://www.youtube-nocookie.com/embed/{{ page.performance_youtube_id | escape }}" title="Kathak performance at the Kala Mahotsava 2026 in Chandigarh" width="960" height="540" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {% else %}
      <p class="performance-pending">Video coming soon.</p>
      {% endif %}
    </div>
  </div>
</section>

<section id="research">
  <div class="wrap section-grid">
    <h2>Research</h2>
    <ol class="entries">
      <li class="entry" data-subjects="biology">
        <h3>Silver nanoparticle–silk fibroin hydrogels for wound dressings</h3>
        <p class="where">Research intern, Plaksha University</p>
        <p>Hydrogels made from silk-cocoon protein were loaded with silver nanoparticles and tested against two types of bacteria. A low dose (50 µg/mL) worked about as well as a dose 500 times higher.</p>
        <span class="status">First author · Manuscript under review, Journal of Emerging Investigators</span>
        <ul class="tags"><li data-tag="biology">Biology</li></ul>
      </li>
      <li class="entry" data-subjects="ai biology">
        <h3>Finding gaps in sugarcane rows from drone photos</h3>
        <p class="where">Research intern, DronaMaps, with Plaksha University</p>
        <p>A method for tracing crop rows and spotting missing plants in ordinary drone photos, built for small farms where rows run in different directions. Fieldwork: drone surveys and ground checks in Muzaffarnagar, Uttar Pradesh. On 11 test fields, it found 79% of rows; a standard method found 9%.</p>
        <figure class="rows-figure">
          <img src="{{ site.baseurl }}/assets/images/fields.jpeg" alt="Aerial photograph of sugarcane rows with yellow row lines and gaps marked in red" loading="lazy" width="1067" height="782">
          <figcaption>Sugarcane rows traced in yellow, with gaps marked in red.</figcaption>
        </figure>
        <span class="status">Co-author · Presented at ICA 2026, Ropar · Under review</span>
        <ul class="tags"><li data-tag="ai">AI</li><li data-tag="biology">Biology</li></ul>
      </li>
      <li class="entry" data-subjects="economics ai biology">
        <h3>Can satellite data tell when sugarcane is ready?</h3>
        <p class="where">Student researcher, Plaksha University</p>
        <p>Started as an economics question: could sugar mills schedule harvests by how ripe each farm's cane is? The model estimated ripeness from satellite images. An agronomist pointed out that sugar builds up inside the stalk, where images cannot see, so the claim did not hold. The drone project above asks a smaller question.</p>
        <span class="status">Presented at Punjab Agricultural University</span>
        <ul class="tags"><li data-tag="economics">Economics</li><li data-tag="ai">AI</li><li data-tag="biology">Biology</li></ul>
      </li>
      <li class="entry" data-subjects="biology maths">
        <h3>Bioinformatics</h3>
        <p class="where">Self-directed, with mentors</p>
        <p>Online courses: Bioinformatics (UC San Diego) and Genomic Data Science (Johns Hopkins). Sequence searches and alignments of silk fibroin proteins at a local college's bioinformatics department. Sequence-analysis workshop for 30 classmates.</p>
        <ul class="tags"><li data-tag="biology">Biology</li><li data-tag="maths">Mathematics</li></ul>
      </li>
    </ol>
  </div>
</section>

<section id="projects">
  <div class="wrap section-grid">
    <h2>Things I've built</h2>
    <div>
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
        <p>I set up student teams that check classroom electricity use, waste sorting and single-use plastic. APSWDP later took the idea to 29 schools in Chandigarh.</p>
        <span class="status">Selected for APSWDP's delegation to COP31, the UN Climate Change Conference, Antalya, November 2026</span>
      </li>
      <li class="entry">
        <h3>Community outreach</h3>
        <p class="where">Volunteer, APSWDP (Association of Professional Social Workers and Development Practitioners), since Grade 9</p>
        <p>Under supervision, I help keep confidential records and follow up on clinic referrals, identity documents, children's schooling and welfare schemes. The team has helped 997 people get digital health IDs.</p>
      </li>
      <li class="entry">
        <h3>Head Girl</h3>
        <p class="where">Student Council, SGGS Collegiate Public School</p>
        <p>Elected with nominations from all four senior streams. As Student Council Secretary last year, I worked with event sponsors. This year I introduced the new Secretary to them, and the new team raised about USD 7,600 for two school events.</p>
      </li>
      <li class="entry">
        <h3>Kathak</h3>
        <p class="where">Cultural Talent Search Scholar, Ministry of Culture, Government of India</p>
        <p>I've trained in Kathak, a classical Indian dance, for seven years, and have held the national scholarship since Grade 9. As Dance Club President, I also train younger dancers.</p>
      </li>
    </ol>
  </div>
</section>

<section id="art">
  <div class="wrap">
    <div class="section-grid art-section-head">
      <h2>Art</h2>
      <p class="art-intro">I sketch faces in pencil and charcoal, paint in watercolour, and paint on stones. Tap any piece to see it larger.</p>
    </div>
    <ul class="gallery">
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/behind-the-mask.jpg" data-caption="Masked eyes. Pencil."><img src="{{ site.baseurl }}/assets/images/art/behind-the-mask.jpg" alt="Eyes of a masked portrait" loading="lazy" width="933" height="1400"></button><figcaption><span class="art-title">Masked eyes</span><span class="art-medium">Pencil</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/under-the-tree.jpg" data-caption="Cottage under a tree. Watercolour and ink."><img src="{{ site.baseurl }}/assets/images/art/under-the-tree.jpg" alt="Watercolour of a red-roofed cottage under a large tree" loading="lazy" width="1400" height="1400"></button><figcaption><span class="art-title">Cottage under a tree</span><span class="art-medium">Watercolour and ink</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/owl-stone.jpg" data-caption="Owl. Painted stone."><img src="{{ site.baseurl }}/assets/images/art/owl-stone.jpg" alt="Owl face painted on a round stone" loading="lazy" width="770" height="1136"></button><figcaption><span class="art-title">Owl</span><span class="art-medium">Painted stone</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/pattern-and-face.jpg" data-caption="Face with patterns. Ink with photo collage."><img src="{{ site.baseurl }}/assets/images/art/pattern-and-face.jpg" alt="A printed face surrounded by hand-drawn ink patterns" loading="lazy" width="1400" height="1191"></button><figcaption><span class="art-title">Face with patterns</span><span class="art-medium">Ink with photo collage</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/watchful-stone.jpg" data-caption="Bird of prey. Painted stone."><img src="{{ site.baseurl }}/assets/images/art/watchful-stone.jpg" alt="Bird-of-prey face painted on a flat stone" loading="lazy" width="770" height="508"></button><figcaption><span class="art-title">Bird of prey</span><span class="art-medium">Painted stone</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/evening-sail.jpg" data-caption="Sailboat at sunset. Watercolour."><img src="{{ site.baseurl }}/assets/images/art/evening-sail.jpg" alt="Watercolour of a sailboat under an orange and yellow sky" loading="lazy" width="1400" height="933"></button><figcaption><span class="art-title">Sailboat at sunset</span><span class="art-medium">Watercolour</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/birds-on-wire.jpg" data-caption="Birds on a wire. Painted stone."><img src="{{ site.baseurl }}/assets/images/art/birds-on-wire.jpg" alt="Three cartoon birds on a wire, painted on a grey stone" loading="lazy" width="770" height="494"></button><figcaption><span class="art-title">Birds on a wire</span><span class="art-medium">Painted stone</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/charcoal-portrait.jpg" data-caption="Portrait. Charcoal."><img src="{{ site.baseurl }}/assets/images/art/charcoal-portrait.jpg" alt="Charcoal portrait of a woman in a turtleneck" loading="lazy" width="934" height="1400"></button><figcaption><span class="art-title">Portrait</span><span class="art-medium">Charcoal</span></figcaption></figure></li>
      <li><figure><button class="art-thumb" type="button" data-full="{{ site.baseurl }}/assets/images/art/bulldog-and-bird.jpg" data-caption="Bulldog and bird. Marker and ink."><img src="{{ site.baseurl }}/assets/images/art/bulldog-and-bird.jpg" alt="Patterned French bulldog with a small bird on its head" loading="lazy" width="1061" height="1400"></button><figcaption><span class="art-title">Bulldog and bird</span><span class="art-medium">Marker and ink</span></figcaption></figure></li>
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
