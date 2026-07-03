/* ============================================================
   SKYTUTOR DATA FILE — the "textbook" 📖
   Lessons, quiz questions, and the tutor's brain live here.
   To add content, you only ever edit THIS file.
   ============================================================ */

/* ===================== LESSONS ===================== */
const lessons = [
  {
    id: "four-forces",
    category: "Principles of Flight",
    title: "The Four Forces of Flight",
    emoji: "🛩️",
    minutes: 4,
    body: `
      <p>Every airplane in flight has <strong>four forces</strong> acting on it
      at all times. How they push and pull against each other is the foundation
      of everything else you'll learn.</p>
      <h3>1. Lift — pushes UP</h3>
      <p>Created by the wings as air flows over them. More speed (and more angle
      into the wind, up to a limit) means more lift. Lift holds the plane up.</p>
      <h3>2. Weight — pulls DOWN</h3>
      <p>Gravity pulling the whole aircraft toward the ground. It always acts
      straight down, whichever way the plane points.</p>
      <h3>3. Thrust — pushes FORWARD</h3>
      <p>Comes from the engine turning the propeller. It drives the plane ahead
      through the air.</p>
      <h3>4. Drag — pulls BACKWARD</h3>
      <p>Air resistance pushing back as the plane moves. It always opposes thrust.</p>
      <div class="callout"><strong>Key idea:</strong> In steady, level flight the
      forces balance — Lift = Weight and Thrust = Drag. Change one and the plane
      responds.</div>
      <div class="callout"><strong>✈ Memory aid:</strong> Two tug-of-wars — one
      vertical (Lift vs Weight), one horizontal (Thrust vs Drag). Both tied = level flight.</div>
    `
  },
  {
    id: "stalls",
    category: "Principles of Flight",
    title: "Stalls & Angle of Attack",
    emoji: "📐",
    minutes: 4,
    body: `
      <p>A "stall" in flying is <strong>not</strong> the engine stopping. It's when
      the wing stops producing enough lift — and it's one of the most important
      things a pilot must understand.</p>
      <h3>What is angle of attack?</h3>
      <p>It's the angle between the wing and the air flowing toward it. Raise the
      nose and the angle increases; more angle usually means more lift...</p>
      <h3>...until the critical angle</h3>
      <p>Every wing has a <strong>critical angle of attack</strong>. Go past it and
      the smooth airflow separates from the wing, lift collapses, and the wing stalls.</p>
      <div class="callout"><strong>Crucial fact:</strong> A wing can stall at
      <em>any speed</em> and <em>any attitude</em> — even pointing down — if you
      exceed the critical angle of attack. It's the angle, not the speed.</div>
      <h3>Warning signs</h3>
      <ul>
        <li>The stall warning horn sounds</li>
        <li>Buffeting (shaking) as airflow gets rough</li>
        <li>Mushy, sloppy controls</li>
      </ul>
      <h3>How you recover</h3>
      <p>Reduce the angle of attack — <strong>lower the nose</strong> — and add
      power. Reducing the angle re-attaches the airflow and the wing flies again.</p>
      <div class="callout"><strong>✈ Memory aid:</strong> "It's the angle, not the
      speed." Fix a stall by pointing the nose <em>down</em>, which feels scary but works.</div>
    `
  },
  {
    id: "six-pack",
    category: "Aircraft Knowledge",
    title: "The Six-Pack: Your Flight Instruments",
    emoji: "🎛️",
    minutes: 5,
    body: `
      <p>Most training aircraft have six main instruments — pilots call them the
      <strong>"six-pack."</strong> Here's what each one tells you.</p>
      <h3>Airspeed Indicator (ASI)</h3>
      <p>How fast you're moving through the air, in knots. It reads air pressure,
      not GPS speed.</p>
      <h3>Attitude Indicator (AI)</h3>
      <p>Your "artificial horizon." Shows the plane's pitch (nose up/down) and bank
      (wings tilting) — vital when you can't see outside.</p>
      <h3>Altimeter</h3>
      <p>Your height above sea level, in feet, measured from air pressure.</p>
      <h3>Turn Coordinator</h3>
      <p>Shows how quickly you're turning and whether the turn is "coordinated"
      (a little ball that should stay centered).</p>
      <h3>Heading Indicator (HI)</h3>
      <p>Which compass direction you're pointing. Steadier and easier to read than
      the bouncy magnetic compass.</p>
      <h3>Vertical Speed Indicator (VSI)</h3>
      <p>How fast you're climbing or descending, in feet per minute.</p>
      <div class="callout"><strong>✈ Memory aid:</strong> Three run on air pressure
      (ASI, Altimeter, VSI) and three run on spinning gyros (AI, HI, Turn Coordinator).</div>
    `
  },
  {
    id: "right-of-way",
    category: "Air Law",
    title: "Right of Way: Who Goes First?",
    emoji: "⚖️",
    minutes: 4,
    body: `
      <p>The sky has traffic rules, just like the road. When two aircraft meet,
      the rules decide <strong>who gives way</strong> — and every pilot must know
      them cold.</p>
      <h3>Converging (crossing paths)</h3>
      <p>If another aircraft is converging on your <strong>right</strong>, it has
      the right of way — <em>you</em> give way. Think: "traffic from the right goes first."</p>
      <h3>Head-on</h3>
      <p>If two aircraft are flying straight at each other, <strong>both turn
      right</strong>. No arguing, no guessing — everybody breaks right.</p>
      <h3>Overtaking</h3>
      <p>The aircraft being overtaken has the right of way. If you're faster and
      catching up, you pass on the <strong>right</strong> and keep well clear.</p>
      <h3>Who outranks whom?</h3>
      <p>The <em>less maneuverable</em> aircraft gets priority. Powered airplanes
      give way to:</p>
      <ul>
        <li>🎈 Balloons (they can barely steer at all!)</li>
        <li>🪂 Gliders (no engine to get out of the way)</li>
        <li>🚁 Airships</li>
        <li>✈️ ...and anything towing something</li>
      </ul>
      <h3>Landing</h3>
      <p>An aircraft landing, or on final approach, has priority over aircraft on
      the ground or flying around. If two are approaching to land, the
      <strong>lower</strong> one goes first — but never cut in front of someone.</p>
      <div class="callout"><strong>✈ Memory aid:</strong> "Right is right" — traffic
      on your right has the right of way, head-on means break right, and overtake
      on the right. When in doubt: the clumsier machine goes first.</div>
    `
  },
  {
    id: "weather-clouds",
    category: "Meteorology",
    title: "Clouds & Fronts: Reading the Sky",
    emoji: "⛅",
    minutes: 5,
    body: `
      <p>Weather is one of the biggest killers in light aviation — and one of the
      most learnable subjects. Start by recognizing four clouds and two fronts.</p>
      <h3>☁️ Cumulus — the cauliflower</h3>
      <p>Puffy, white, flat-bottomed. Usually fair weather, but expect a bumpy ride
      underneath (they're made by rising warm air).</p>
      <h3>🌫️ Stratus — the gray blanket</h3>
      <p>Flat, featureless layer covering the sky. Means stable air: smooth flying
      but drizzle and <strong>poor visibility</strong> — a problem for VFR pilots.</p>
      <h3>🌪️ Cumulonimbus (CB) — the storm king</h3>
      <p>A towering monster, often anvil-shaped on top. Thunderstorms, hail,
      violent up- and downdrafts, icing. <strong>Never fly into or near one</strong> —
      give CBs a very wide berth, many miles.</p>
      <h3>🪶 Cirrus — the high wisps</h3>
      <p>Thin, feathery ice-crystal clouds way up high. Harmless themselves, but
      often the first sign that a warm front (and worse weather) is on the way.</p>
      <h3>Warm front — the wet blanket</h3>
      <p>Warm air sliding <em>slowly</em> up over cold air. Clouds lower gradually
      (cirrus → stratus), then long, steady rain and poor visibility for hours.</p>
      <h3>Cold front — the fast broom</h3>
      <p>Cold air bulldozing under warm air. It arrives fast and steep: cumulus,
      showers, possible thunderstorms and gusty winds — then it sweeps through and
      the sky clears.</p>
      <div class="callout"><strong>✈ Memory aid:</strong> Warm front = wet blanket
      sliding in slowly. Cold front = broom sweeping through fast. And CB = Big
      Trouble — stay far away.</div>
    `
  },
  {
    id: "nav-basics",
    category: "Navigation",
    title: "Navigation Basics: Heading, Track & the 1-in-60 Rule",
    emoji: "🧭",
    minutes: 5,
    body: `
      <p>VFR navigation is mostly clock, compass, and mental math. Master three
      ideas and everything else follows.</p>
      <h3>Heading vs Track</h3>
      <p><strong>Heading</strong> is where your nose points. <strong>Track</strong>
      is the path you actually travel over the ground. Wind is why they differ:
      it blows you sideways like a river carrying a swimmer.</p>
      <p>The fix: point the nose slightly <em>into</em> the wind — called a
      <strong>crab</strong> — so your track stays on the line you drew on the map.</p>
      <h3>Airspeed vs Groundspeed</h3>
      <p>Airspeed is your speed through the air; <strong>groundspeed</strong> is
      your speed over the ground. A headwind makes groundspeed lower, a tailwind
      makes it higher. Your trip time depends on groundspeed.</p>
      <h3>Time-speed-distance (pilot mental math)</h3>
      <p>Time = distance ÷ groundspeed. Handy shortcut: at 120 knots you cover
      <strong>2 nautical miles every minute</strong>. So 40 NM at 120 kt = 20 minutes.</p>
      <h3>The 1-in-60 rule</h3>
      <p>If you're <strong>1° off course, you'll be about 1 NM off track after
      60 NM</strong>. 5° off = 5 NM off after 60 NM. It turns small compass errors
      into distances you can picture — and correct.</p>
      <div class="callout"><strong>✈ Memory aid:</strong> Heading is where you
      LOOK, track is where you GO. And "1 degree, 1 mile, per 60" for drift.</div>
    `
  }
  // 👉 Add your own lesson: copy one { ... } block (with its comma) and edit it.
];

/* ===================== QUIZ QUESTIONS =====================
   Every topicId must match a lesson id above. */
const questionBank = [
  // --- Four Forces ---
  { id: "f1", topicId: "four-forces",
    question: "In steady, level flight, which forces are in balance?",
    options: ["Only Lift and Weight", "Lift = Weight AND Thrust = Drag",
              "Thrust and Lift", "Weight and Drag"],
    correctIndex: 1,
    explain: "Both tug-of-wars are tied: Lift balances Weight (vertical) and Thrust balances Drag (horizontal)." },
  { id: "f2", topicId: "four-forces",
    question: "Which force always acts straight down toward the earth?",
    options: ["Lift", "Drag", "Weight", "Thrust"],
    correctIndex: 2,
    explain: "Weight is gravity — it always pulls straight down, no matter which way the plane points." },
  { id: "f3", topicId: "four-forces",
    question: "If you add power so thrust becomes greater than drag, the plane…",
    options: ["slows down", "accelerates", "stalls immediately", "turns left"],
    correctIndex: 1,
    explain: "Unbalanced forces cause change: more thrust than drag means the plane speeds up (or climbs)." },
  { id: "f4", topicId: "four-forces",
    question: "Which force is the air resistance pushing back as the plane moves?",
    options: ["Drag", "Lift", "Weight", "Thrust"],
    correctIndex: 0,
    explain: "Drag always opposes thrust — it's the air pushing back against the moving aircraft." },

  // --- Stalls ---
  { id: "s1", topicId: "stalls",
    question: "A wing stalls when…",
    options: ["the engine stops", "the plane flies too high",
              "it exceeds its critical angle of attack", "airspeed rises above cruise"],
    correctIndex: 2,
    explain: "A stall is an airflow problem, not an engine problem. Past the critical angle of attack, lift collapses." },
  { id: "s2", topicId: "stalls",
    question: "At what airspeed can a wing stall?",
    options: ["Only below stall speed", "Only in slow flight",
              "Any airspeed, if the critical angle is exceeded", "Never above 100 knots"],
    correctIndex: 2,
    explain: "It's the ANGLE, not the speed. Exceed the critical angle of attack and the wing stalls — at any speed or attitude." },
  { id: "s3", topicId: "stalls",
    question: "What is the FIRST action to recover from a stall?",
    options: ["Pull back hard", "Lower the nose to reduce angle of attack",
              "Cut the power", "Deploy full flaps"],
    correctIndex: 1,
    explain: "Lowering the nose reduces the angle of attack, re-attaches the airflow, and the wing flies again. Then add power." },
  { id: "s4", topicId: "stalls",
    question: "Which of these warns you a stall is approaching?",
    options: ["The engine gets quieter", "Buffeting and the stall warning horn",
              "The altimeter spins", "Controls feel unusually firm"],
    correctIndex: 1,
    explain: "Rough separating airflow shakes the plane (buffet), the horn sounds, and controls feel mushy." },

  // --- Six-Pack ---
  { id: "p1", topicId: "six-pack",
    question: "Which instrument is the 'artificial horizon'?",
    options: ["Altimeter", "Turn Coordinator", "Attitude Indicator", "Airspeed Indicator"],
    correctIndex: 2,
    explain: "The Attitude Indicator shows pitch and bank — your horizon when you can't see the real one." },
  { id: "p2", topicId: "six-pack",
    question: "The altimeter figures out your altitude by measuring…",
    options: ["GPS satellites", "air pressure", "engine RPM", "ground radar"],
    correctIndex: 1,
    explain: "Air pressure drops as you climb — the altimeter converts that pressure into feet above sea level." },
  { id: "p3", topicId: "six-pack",
    question: "The Vertical Speed Indicator (VSI) tells you…",
    options: ["how fast you're climbing or descending", "your compass heading",
              "your speed through the air", "your bank angle"],
    correctIndex: 0,
    explain: "The VSI reads climb or descent rate in feet per minute." },
  { id: "p4", topicId: "six-pack",
    question: "Which three instruments run on spinning gyros?",
    options: ["ASI, Altimeter, VSI",
              "Attitude Indicator, Heading Indicator, Turn Coordinator",
              "Altimeter, Attitude Indicator, ASI",
              "VSI, Turn Coordinator, Altimeter"],
    correctIndex: 1,
    explain: "Three pressure instruments (ASI, Altimeter, VSI) and three gyro instruments (AI, HI, Turn Coordinator)." },

  // --- Air Law: Right of Way ---
  { id: "a1", topicId: "right-of-way",
    question: "Two aircraft are converging at the same altitude. Who gives way?",
    options: ["The faster aircraft", "The one that has the other on its RIGHT",
              "The bigger aircraft", "Whoever saw the other first"],
    correctIndex: 1,
    explain: "Traffic converging from your right has right of way — you give way. 'Right is right.'" },
  { id: "a2", topicId: "right-of-way",
    question: "Two aircraft approach each other head-on. What happens?",
    options: ["Both turn RIGHT", "Both turn left", "The lower one climbs",
              "The slower one turns"],
    correctIndex: 0,
    explain: "Head-on: everybody breaks right. Same rule for everyone means no guessing." },
  { id: "a3", topicId: "right-of-way",
    question: "A powered airplane meets a glider on a converging course. Who has priority?",
    options: ["The airplane, it's faster", "The glider",
              "Whoever is higher", "Neither — both must land"],
    correctIndex: 1,
    explain: "The less maneuverable aircraft gets priority: balloons, then gliders and airships, outrank powered airplanes." },
  { id: "a4", topicId: "right-of-way",
    question: "You're overtaking a slower aircraft ahead. How do you pass?",
    options: ["Underneath it", "On its RIGHT, keeping well clear",
              "On its left", "Directly above it"],
    correctIndex: 1,
    explain: "The aircraft being overtaken has right of way; the overtaker alters course to the right and stays well clear." },

  // --- Meteorology ---
  { id: "m1", topicId: "weather-clouds",
    question: "Which cloud type means thunderstorms and must be avoided by a wide margin?",
    options: ["Cirrus", "Stratus", "Cumulonimbus", "Fair-weather cumulus"],
    correctIndex: 2,
    explain: "Cumulonimbus (CB) brings thunderstorms, hail, icing, and violent drafts. Give it many miles of clearance." },
  { id: "m2", topicId: "weather-clouds",
    question: "A cold front is passing through. What weather do you expect?",
    options: ["Hours of gentle drizzle", "Showers, possible storms, gusty winds — then clearing",
              "No change at all", "Fog for several days"],
    correctIndex: 1,
    explain: "Cold fronts are steep and fast: convective clouds, showers/storms, gusts — then it sweeps through and clears." },
  { id: "m3", topicId: "weather-clouds",
    question: "A flat gray blanket of stratus cloud usually means…",
    options: ["violent turbulence", "stable air with drizzle and poor visibility",
              "perfect VFR conditions", "an approaching thunderstorm"],
    correctIndex: 1,
    explain: "Stratus = stable air: smooth but murky. The visibility, not turbulence, is the VFR pilot's problem." },
  { id: "m4", topicId: "weather-clouds",
    question: "High, wispy cirrus clouds thickening on the horizon often signal…",
    options: ["an approaching warm front", "a passing cold front",
              "perfect weather for days", "immediate thunderstorms"],
    correctIndex: 0,
    explain: "Cirrus is often the leading edge of a warm front — clouds will lower and steady rain may follow." },

  // --- Navigation ---
  { id: "n1", topicId: "nav-basics",
    question: "Using the 1-in-60 rule: you're 2° off course. After 60 NM you'll be about…",
    options: ["2 NM off track", "12 NM off track", "0.2 NM off track", "20 NM off track"],
    correctIndex: 0,
    explain: "1° ≈ 1 NM off per 60 NM flown. So 2° ≈ 2 NM off after 60 NM." },
  { id: "n2", topicId: "nav-basics",
    question: "The wind is blowing from your LEFT. To stay on your planned track you should…",
    options: ["point the nose slightly LEFT, into the wind", "point the nose right, away from the wind",
              "fly faster", "descend below the wind"],
    correctIndex: 0,
    explain: "Crab into the wind: angle the nose toward it so the drift cancels out and your track stays straight." },
  { id: "n3", topicId: "nav-basics",
    question: "Your groundspeed is 120 knots. How long to cover 40 NM?",
    options: ["40 minutes", "20 minutes", "10 minutes", "30 minutes"],
    correctIndex: 1,
    explain: "At 120 kt you travel 2 NM per minute — so 40 NM takes 20 minutes." },
  { id: "n4", topicId: "nav-basics",
    question: "What's the difference between heading and track?",
    options: ["They're the same thing",
              "Heading is where the nose points; track is your actual path over the ground",
              "Track is where the nose points; heading is the path over the ground",
              "Heading is only used at night"],
    correctIndex: 1,
    explain: "Wind pushes you sideways, so where you POINT (heading) and where you GO (track) can differ." }
];

/* ===================== THE TUTOR'S BRAIN 🧠 =====================
   keywords it listens for → the answer. topicId links to a lesson. */
const tutorBrain = [
  { keywords: ["stall", "recover"], topicId: "stalls",
    answer: `A <strong>stall</strong> is when the wing stops making enough lift —
      NOT the engine stopping! It happens when you exceed the wing's critical
      <em>angle of attack</em>. To recover: <strong>lower the nose</strong>, then
      add power. Remember: it's the angle, not the speed.` },

  { keywords: ["angle of attack", "aoa", "critical angle"], topicId: "stalls",
    answer: `<strong>Angle of attack</strong> is the angle between the wing and the
      oncoming air. More angle = more lift… up to the <em>critical angle</em>.
      Go past that and the airflow separates — that's a stall.` },

  { keywords: ["four forces", "forces of flight"], topicId: "four-forces",
    answer: `The four forces: <strong>Lift</strong> (up), <strong>Weight</strong> (down),
      <strong>Thrust</strong> (forward), <strong>Drag</strong> (back). In steady level
      flight they balance — Lift = Weight, Thrust = Drag.` },

  { keywords: ["lift", "wing"], topicId: "four-forces",
    answer: `<strong>Lift</strong> is the upward force made by the wings as air flows
      over them. More speed — or more angle into the wind (up to the critical
      angle) — means more lift.` },

  { keywords: ["drag"], topicId: "four-forces",
    answer: `<strong>Drag</strong> is air resistance — the air pushing back against
      the plane as it moves. It always opposes thrust.` },

  { keywords: ["thrust", "propeller", "engine"], topicId: "four-forces",
    answer: `<strong>Thrust</strong> is the forward force from the engine spinning the
      propeller. More thrust than drag = you accelerate.` },

  { keywords: ["weight", "gravity"], topicId: "four-forces",
    answer: `<strong>Weight</strong> is gravity pulling the aircraft toward the earth.
      It always acts straight down, whatever the plane is doing.` },

  { keywords: ["altimeter", "altitude", "how high"], topicId: "six-pack",
    answer: `The <strong>altimeter</strong> shows height above sea level in feet, by
      measuring <em>air pressure</em> — pressure drops as you climb.` },

  { keywords: ["airspeed", "asi", "knots", "how fast"], topicId: "six-pack",
    answer: `The <strong>Airspeed Indicator</strong> shows your speed through the air
      in knots, using the pitot tube facing the wind — not GPS speed.` },

  { keywords: ["attitude", "artificial horizon"], topicId: "six-pack",
    answer: `The <strong>Attitude Indicator</strong> is your artificial horizon — pitch
      and bank at a glance, vital when you can't see the real horizon.` },

  { keywords: ["vsi", "vertical speed", "climb rate"], topicId: "six-pack",
    answer: `The <strong>Vertical Speed Indicator</strong> shows climb or descent rate
      in feet per minute. Level cruise = needle on zero.` },

  { keywords: ["compass", "heading indicator"], topicId: "six-pack",
    answer: `The <strong>Heading Indicator</strong> shows your compass direction. It's
      gyro-driven and steady — but realign it with the magnetic compass every
      15 minutes or so.` },

  { keywords: ["six-pack", "six pack", "instruments"], topicId: "six-pack",
    answer: `The <strong>six-pack</strong>: Airspeed, Attitude, Altimeter on top;
      Turn Coordinator, Heading, VSI below. Three pressure-driven, three gyro-driven.` },

  { keywords: ["right of way", "give way", "converging", "head-on", "overtak"], topicId: "right-of-way",
    answer: `Sky traffic rules: give way to traffic converging from your
      <strong>right</strong>; head-on, <strong>both turn right</strong>; overtake on
      the right. And less-maneuverable craft (balloons, gliders) outrank powered planes.` },

  { keywords: ["glider", "balloon"], topicId: "right-of-way",
    answer: `The clumsier machine goes first! Powered airplanes give way to airships,
      gliders, and balloons — they can't maneuver out of your way, so you move.` },

  { keywords: ["cumulonimbus", "thunderstorm", "cb", "storm"], topicId: "weather-clouds",
    answer: `<strong>Cumulonimbus (CB)</strong> is the storm cloud: hail, icing, and
      violent up/downdrafts that can tear a light aircraft apart. Never fly into or
      under one — give it a berth of many miles.` },

  { keywords: ["cold front", "warm front", "front"], topicId: "weather-clouds",
    answer: `<strong>Warm front</strong> = wet blanket: slow arrival, lowering layered
      cloud, hours of steady rain. <strong>Cold front</strong> = fast broom: showers,
      possible storms and gusts, then rapid clearing.` },

  { keywords: ["cloud", "stratus", "cumulus", "cirrus"], topicId: "weather-clouds",
    answer: `Quick cloud guide: <strong>cumulus</strong> = puffy cauliflower (fair but
      bumpy), <strong>stratus</strong> = gray blanket (drizzle, poor visibility),
      <strong>cirrus</strong> = high wisps (change coming), <strong>cumulonimbus</strong>
      = storm king (stay away!).` },

  { keywords: ["1 in 60", "one in sixty", "off course", "drift"], topicId: "nav-basics",
    answer: `The <strong>1-in-60 rule</strong>: every 1° off course puts you about
      1 NM off track after 60 NM. 5° off = 5 NM off. It turns compass errors into
      distances you can picture and correct.` },

  { keywords: ["heading", "track", "crab", "wind correction"], topicId: "nav-basics",
    answer: `<strong>Heading</strong> is where the nose points; <strong>track</strong>
      is your real path over the ground. Wind makes them differ — fix it by
      <em>crabbing</em>: angle the nose into the wind until your track runs straight.` },

  { keywords: ["groundspeed", "ground speed", "headwind", "tailwind"], topicId: "nav-basics",
    answer: `<strong>Groundspeed</strong> = your speed over the ground. Headwind slows
      it, tailwind boosts it. Trip time = distance ÷ groundspeed (at 120 kt you
      cover 2 NM every minute).` },

  { keywords: ["ppl", "private pilot", "license", "licence", "exam"],
    answer: `The <strong>PPL</strong> (Private Pilot License) lets you fly light aircraft
      with passengers, not for payment. Theory exams (air law, meteorology, navigation,
      principles of flight…) plus flight training and a skills test. This app is your
      theory study buddy!` }
];