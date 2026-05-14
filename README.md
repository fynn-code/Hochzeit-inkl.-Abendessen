<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>Anna & Fynn – Hochzeit</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500&family=Parisienne&display=swap" rel="stylesheet">

  <style>

    :root{
      --bg: #f3eee7;
      --bg-soft: #f8f5f0;
      --brown: #2c170f;
      --brown-light: #7c665a;
      --line: #cdbdad;
    }

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    html{
      scroll-behavior:smooth;
    }

    body{
      background:var(--bg);
      color:var(--brown);
      font-family:"Montserrat", sans-serif;
      overflow-x:hidden;
    }

    section{
      min-height:100vh;
      padding:40px 28px;
      position:relative;
      display:flex;
      flex-direction:column;
      justify-content:center;
    }

    /* FLORAL */

    .floral-top{
      position:absolute;
      top:0;
      left:0;
      width:180px;
      opacity:0.22;
    }

    .floral-bottom{
      position:absolute;
      right:0;
      top:170px;
      width:160px;
      opacity:0.22;
      transform:scaleX(-1);
    }

    /* TYPO */

    .eyebrow{
      text-align:center;
      letter-spacing:4px;
      font-size:0.8rem;
      margin-bottom:18px;
      text-transform:uppercase;
    }

    .heart-divider{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:14px;
      margin-bottom:40px;
    }

    .heart-divider::before,
    .heart-divider::after{
      content:"";
      width:70px;
      height:1px;
      background:var(--line);
    }

    .heart-divider span{
      font-size:14px;
    }

    h1{
      font-family:"Cormorant Garamond", serif;
      font-size:5.5rem;
      line-height:0.88;
      text-align:center;
      font-weight:600;
      letter-spacing:2px;
    }

    .ampersand{
      font-size:4.3rem;
      margin:18px 0;
    }

    .leaf{
      text-align:center;
      font-size:2rem;
      margin:26px 0;
      color:var(--brown-light);
    }

    .date{
      text-align:center;
      letter-spacing:4px;
      text-transform:uppercase;
      font-size:0.82rem;
      margin-top:28px;
    }

    .intro{
      max-width:320px;
      margin:40px auto 0;
      text-align:center;
      line-height:2;
      font-size:1rem;
      color:var(--brown);
    }

    .scroll{
      text-align:center;
      margin-top:auto;
      padding-top:40px;
      font-size:2rem;
      color:var(--brown-light);
    }

    /* PAGE 2 */

    .script{
      font-family:"Parisienne", cursive;
      font-size:3.2rem;
      text-align:center;
      color:var(--brown);
    }

    .title{
      font-family:"Cormorant Garamond", serif;
      text-align:center;
      font-size:3.6rem;
      line-height:1;
      margin-top:10px;
      margin-bottom:20px;
      font-weight:500;
    }

    .timeline{
      position:relative;
      margin-top:60px;
      padding-left:95px;
    }

    .timeline::before{
      content:"";
      position:absolute;
      left:38px;
      top:0;
      width:1px;
      height:100%;
      background:var(--brown-light);
    }

    .timeline-item{
      position:relative;
      margin-bottom:55px;
    }

    .dot{
      position:absolute;
      left:-64px;
      top:5px;
      width:14px;
      height:14px;
      background:var(--brown);
      border-radius:50%;
    }

    .icon{
      position:absolute;
      left:-108px;
      top:-8px;
      width:58px;
      height:58px;
      border:1px solid var(--brown-light);
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:1.4rem;
      background:rgba(255,255,255,0.4);
    }

    .time{
      font-size:0.8rem;
      letter-spacing:4px;
      margin-bottom:10px;
      text-transform:uppercase;
    }

    .event-title{
      font-family:"Cormorant Garamond", serif;
      font-size:2.2rem;
      line-height:1;
      margin-bottom:12px;
      font-weight:500;
    }

    .text{
      line-height:1.8;
      color:var(--brown);
      font-size:0.96rem;
    }

    footer{
      text-align:center;
      padding-top:30px;
    }

    .footer-divider{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:14px;
      margin-bottom:28px;
    }

    .footer-divider::before,
    .footer-divider::after{
      content:"";
      width:110px;
      height:1px;
      background:var(--line);
    }

    .footer-names{
      font-family:"Cormorant Garamond", serif;
      font-size:3rem;
      margin-bottom:10px;
    }

    .footer-text{
      letter-spacing:4px;
      font-size:0.7rem;
      text-transform:uppercase;
    }

    .footer-heart{
      margin-top:20px;
      font-size:2rem;
      color:var(--brown-light);
    }

  </style>
</head>
<body>

  <!-- SEITE 1 -->

  <section>

    <img
      class="floral-top"
      src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
      alt=""
    >

    <img
      class="floral-bottom"
      src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
      alt=""
    >

    <div class="eyebrow">
      Wir heiraten
    </div>

    <div class="heart-divider">
      <span>♥</span>
    </div>

    <h1>
      Anna
    </h1>

    <h1 class="ampersand">
      &
    </h1>

    <h1>
      Fynn
    </h1>

    <div class="leaf">
      ❦
    </div>

    <div class="date">
      Samstag, 19. September 2026
    </div>

    <div class="heart-divider" style="margin-top:20px;">
      <span>♥</span>
    </div>

    <p class="intro">
      Mit großer Freude laden wir euch ein,
      gemeinsam mit uns einen unvergesslichen Tag
      voller Liebe, Glück und schöner Momente
      zu feiern.
    </p>

    <div class="scroll">
      ↓
    </div>

  </section>

  <!-- SEITE 2 -->

  <section>

    <div class="script">
      Ablauf
    </div>

    <div class="title">
      Unser<br>
      Hochzeitstag
    </div>

    <div class="heart-divider">
      <span>♡</span>
    </div>

    <div class="timeline">

      <div class="timeline-item">

        <div class="icon">💍</div>
        <div class="dot"></div>

        <div class="time">
          14:00 Uhr
        </div>

        <div class="event-title">
          Trauung
        </div>

        <div class="text">
          Die Zeremonie beginnt und wir geben uns
          das Ja-Wort im Kreise unserer Liebsten.
        </div>

      </div>

      <div class="timeline-item">

        <div class="icon">🥂</div>
        <div class="dot"></div>

        <div class="time">
          15:00 Uhr
        </div>

        <div class="event-title">
          Sekt-Empfang
        </div>

        <div class="text">
          Anschließend stoßen wir gemeinsam auf
          unsere Zukunft und diesen besonderen
          Tag an.
        </div>

      </div>

      <div class="timeline-item">

        <div class="icon">🍽️</div>
        <div class="dot"></div>

        <div class="time">
          18:00 Uhr
        </div>

        <div class="event-title">
          Abendessen
        </div>

        <div class="text">
          Ein stilvoller Abend mit kulinarischen
          Highlights, guten Gesprächen und
          festlicher Atmosphäre.
        </div>

      </div>

      <div class="timeline-item">

        <div class="icon">🪩</div>
        <div class="dot"></div>

        <div class="time">
          Danach
        </div>

        <div class="event-title">
          Party!
        </div>

        <div class="text">
          Wir feiern gemeinsam bis tief in die Nacht —
          mit Musik, Tanz und unvergesslichen
          Erinnerungen.
        </div>

      </div>

    </div>

    <footer>

      <div class="footer-divider">
        <span>♥</span>
      </div>

      <div class="footer-names">
        Anna & Fynn
      </div>

      <div class="footer-text">
        Wir freuen uns auf euch!
      </div>

      <div class="footer-heart">
        ♡
      </div>

    </footer>

  </section>

</body>
</html>