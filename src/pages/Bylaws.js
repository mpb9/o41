import {
  BylawArticleHeading,
  BylawSubsectionHeading,
  BylawText,
  Header,
  TypographyTitle,
} from "../components/_helper";
import { DOCUMENTS } from "../utils/leagueInfo";

export default function Bylaws() {
  return (
    <div className="relative w-full min-h-screen bg-rad-white">
      <Header active_route="bylaws" />
      <div
        id="bylaws"
        className="flex flex-col items-center px-6 overflow-scroll sm:px-24 md:px-36 h-full-header font-[electro] text-stone-900"
      >
        <TypographyTitle
          text={
            <>
              BYLAWS
              <br />
              OF
              <br />
              "ORDER 41"
            </>
          }
        />

        {/* DYNASTY */}
        <BylawArticleHeading number="I" title="DYNASTY" />
        <BylawSubsectionHeading number="1" title="Primordial Delimitations" />
        <BylawText
          text={
            <p>
              From this day forth, the name "ORDER 41" no longer exclusively
              denominates the six (6)-person, primarily iMessage-based,
              groupchat that traces its origins to Charlotte Catholic High
              School in the year 2018 CE—if not earlier, but simultaneously
              represents the nomenclature of a fantasy football dynasty league
              originating in the year 2023 CE and consisting of the same six (6)
              men. The League will remain active until every founding member
              dies.
            </p>
          }
        />
        <BylawSubsectionHeading number="2" title="Championships" />
        <BylawText
          text={
            <>
              <p>
                At the conclusion of each post-season, the League crowns a new
                Season Champion. On the occasion that a given team earns a third
                (3) Season Championship within a single (1) Dynasty iteration,
                said team immediately obtains a Dynasty Championship; at which
                point, the League commences a new Dynasty iteration.
              </p>
              <p>
                With the onset of a new Dynasty iteration, all pre-existing
                Season Championships are rendered inconsequential in relation to
                the novel, as well as all ensuing, Dynasty iteration(s). Thusly,
                all teams commence each Dynasty iteration with zero (0) Season
                Championships—needing three (3) to attain a Dynasty
                Championship, at which point the cycle repeats in perpetuity.
              </p>
            </>
          }
        />
        <BylawSubsectionHeading number="3" title="Toilet Bowls" />
        <BylawText
          text={
            <p>
              At the conclusion of each post-season, the League excretes a new
              Toilet Bowl Loser. If you lose the Toilet Bowl, you must spin{" "}
              <a href={DOCUMENTS.punishments} target="_blank" rel="noreferrer">
                The Wheel™
              </a>{" "}
              to determine the means of your humiliation.
            </p>
          }
        />
        <BylawSubsectionHeading number="4" title="Payments & Rewards" />
        <BylawText
          text={
            <p>
              Each owner must deliver a payment of $100 prior to Week One (1) of
              each Season. This money shall be divided between the Dynasty
              Champion ($25) and the upcoming Season's Champion ($75). Each
              Season Champion receives $450 (profits $375) from the Treasurer
              upon their coronation. After an owner earns three (3) Season
              Championships within a Dynasty, they receive the entirety of the
              Dynasty reward.
            </p>
          }
        />

        {/* OWNERS */}
        <BylawArticleHeading number="II" title="OWNERS" />
        <BylawSubsectionHeading number="1" title="Founding Members" />
        <BylawText
          text={
            <p>
              Michael Beebe, Matthew Edel, Conner Manion, Andrew Pechulonis,
              Connor Ruff, and James Whalen shall engage in all League
              activities in perpetuity. In the event that an owner's life
              concludes, their team shall remain (auto managed) throughout the
              existence of the League (until all owners die).
            </p>
          }
        />
        <BylawSubsectionHeading number="2" title="Commissary Duties" />
        <BylawText
          text={
            <p>
              Michael Beebe shall serve as Commissioner Commissioner and
              Anti-Anti-Noah Gray Commissioner. Conner Manion shall serve as
              Monetary Commissioner. Connor Ruff shall serve as Punishment
              Commissioner. Andrew Pechulonis shall serve as Beer Olympic
              Commissioner. James Whalen shall serve as Locker Room
              Commissioner. Matthew Edel shall serve as All Star Commissioner
              and Punishment Commissioner Commissioner. New election for
              Commissioner Commissioner occurs prior to each league year.
              <sup>1</sup>
            </p>
          }
        />
        <BylawSubsectionHeading number="3" title="Divisions" />
        <BylawSubsectionHeading number="4" title="Rivalries" />
        <BylawText
          text={
            <p>
              Primary rivalries are as follows: Conner Manion and Connor Ruff,
              Michael Beebe and Andrew Pechulonis, Matthew Edel and James
              Whalen.<sup>2</sup>
            </p>
          }
        />

        {/* SEASONS */}
        <BylawArticleHeading number="III" title="SEASONS" />
        <BylawSubsectionHeading number="1" title="Regular" />
        <BylawText
          text={
            <p>
              In-season yearly events are as follows: Rivalry Week and Playoff
              Festival. Each event requires full participation to each member's
              reasonable capacities.
            </p>
          }
        />
        <BylawSubsectionHeading number="2" title="Playoffs" />
        <BylawSubsectionHeading number="3" title="Off-Season" />
        <BylawText
          text={
            <p>
              Off-season yearly events are as follows: All Star Game, Beer
              Olympics, Owners Meeting, Commissioner Commissioner Election, and
              Rookie Draft. Each event requires full participation to each
              member's reasonable capacities.
            </p>
          }
        />
        <BylawSubsectionHeading number="5" title="Free Agency" />

        {/* ROSTERS */}
        <BylawArticleHeading number="IV" title="ROSTERS" />
        <BylawSubsectionHeading number="1" title="Positions" />

        {/* SCORING */}
        <BylawArticleHeading number="V" title="SCORING" />

        {/* DRAFTS */}
        <BylawArticleHeading number="VI" title="DRAFTS" />
        <BylawSubsectionHeading number="1" title="Rookie Draft" />
        <BylawSubsectionHeading number="2" title="Dynasty Draft" />

        {/* THE WHEEL™ */}
        <BylawArticleHeading
          number="VII"
          title={
            <a href={DOCUMENTS.punishments} target="_blank" rel="noreferrer">
              THE WHEEL™
            </a>
          }
        />
        <BylawSubsectionHeading number="Section I" />
        <BylawText
          text={
            <ul className="list-[lower-roman] list-inside">
              <li className="list-item">
                SlopSlop is the supreme controller of punishments and of the
                punishments bylaws.
              </li>
            </ul>
          }
        />
        <BylawSubsectionHeading number="Section II" />
        <BylawText
          text={
            <ul className="list-[lower-roman] list-inside">
              <li className="list-item">
                Each League member is responible for two (2) punishments each
                year on The Wheel™.
              </li>
              <li className="list-item">
                Vetos require three (3) out of six (6) members to vote against.
              </li>
              <li className="list-item">
                Each year, the League member can optionally replace one (1)
                punishment from their previous year. If they do, the new
                punishment goes up for veto vote.
              </li>
              <li className="list-item">
                Punishments carried over from previous years (that already
                survived vetoes) do not get re-voted on.
              </li>
            </ul>
          }
        />
        <BylawSubsectionHeading number="Section III" />
        <BylawText
          text={
            <ul className="list-inside list-[lower-roman]">
              <li className="list-item">
                Once a League member chooses NOT to carry over their punishment
                to the next year, that punishment is officially RETIRED and
                cannot be re-instated.
              </li>
              <li className="list-item">
                Once a punishment is selected by THE FATE OF THE WHEEL™, it is
                considered COMPLETED and cannot be on The Wheel™ again for the
                rest of the Dynasty.
              </li>
            </ul>
          }
        />
        <BylawSubsectionHeading number="Section IV" />
        <BylawText
          text={
            <ul className="list-[lower-roman] list-inside">
              <li className="list-item">
                The format of The Wheel™ spin is: "one (1) spin + a suicide".
                This means that the Loser gets one (1) spin, and can either take
                that punishment, OR spin again. If the Loser chooses to spin
                again, he MUST take whatever it lands on. Even if it is the same
                punishment that was landed on the first time.
              </li>
            </ul>
          }
        />

        {/* FOOTNOTES */}
        <div className="w-full mt-6 mb-12 max-w-[800px]">
          <hr className="mb-8 border-stone-950" />
          <div className="ml-3 text-[0.925rem] italic leading-4">
            <p className="mb-1.5 -indent-2.5">
              <sup>1</sup> Enacted in wake of the renown, yet ultimately
              inefficacious, Beer Bus Putsch of 2024.
            </p>
            <p className="mb-1.5 -indent-2.5">
              <sup>2</sup> Rivalries initialized (semi-randomly) shortly after
              inception of league without substantial input from owners—broadly
              out of date and inconsequential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
