import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <main>
      {/* SEITE 1 */}
      <section>
        <img
          className="floral-top"
          src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
          alt=""
        />

        <img
          className="floral-bottom"
          src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
          alt=""
        />

        <div className="eyebrow">Wir heiraten</div>

        <div className="heart-divider">
          <span>♥</span>
        </div>

        <h1>Anna</h1>

        <h1 className="ampersand">&</h1>

        <h1>Fynn</h1>

        <div className="leaf">❦</div>

        <div className="date">Samstag, 19. September 2026</div>

        <div className="heart-divider" style={{ marginTop: "20px" }}>
          <span>♥</span>
        </div>

        <p className="intro">
          Mit großer Freude laden wir euch ein, gemeinsam mit uns einen unvergesslichen Tag voller
          Liebe, Glück und schöner Momente zu feiern.
        </p>

        <div className="scroll">↓</div>
      </section>

      <hr />

      {/* SEITE 2 */}
      <section>
        <div className="script">Ablauf</div>

        <div className="title">
          Unser
          <br />
          Hochzeitstag
        </div>

        <div className="heart-divider">
          <span>♡</span>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="icon">💍</div>
            <div className="dot"></div>
            <div className="time">14:00 Uhr</div>
            <div className="event-title">Trauung</div>
            <div className="text">
              Die Zeremonie beginnt und wir geben uns das Ja-Wort im Kreise unserer Liebsten.
            </div>
          </div>

          <div className="timeline-item">
            <div className="icon">🥂</div>
            <div className="dot"></div>
            <div className="time">15:00 Uhr</div>
            <div className="event-title">Sekt-Empfang</div>
            <div className="text">
              Anschließend stoßen wir gemeinsam auf unsere Zukunft und diesen besonderen Tag an.
            </div>
          </div>

          <div className="timeline-item">
            <div className="icon">🍽️</div>
            <div className="dot"></div>
            <div className="time">18:00 Uhr</div>
            <div className="event-title">Abendessen</div>
            <div className="text">
              Ein stilvoller Abend mit kulinarischen Highlights, guten Gesprächen und festlicher
              Atmosphäre.
            </div>
          </div>

          <div className="timeline-item">
            <div className="icon">🪩</div>
            <div className="dot"></div>
            <div className="time">Danach</div>
            <div className="event-title">Party!</div>
            <div className="text">
              Wir feiern gemeinsam bis tief in die Nacht — mit Musik, Tanz und unvergesslichen
              Erinnerungen.
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-divider">
            <span>♥</span>
          </div>
          <div className="footer-names">Anna & Fynn</div>
          <div className="footer-text">Wir freuen uns auf euch!</div>
          <div className="footer-heart">♡</div>
        </footer>
      </section>
    </main>
  );
}

