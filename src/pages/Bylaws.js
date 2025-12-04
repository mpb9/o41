import {
  BylawArticleHeading,
  BylawSubsectionHeading,
  BylawText,
  Header,
  TypographyTitle,
} from "../components/_helper";

const BYLAWS_PAGE_TITLE = (
  <>
    BYLAWS
    <br />
    OF
    <br />
    ORDER: 41
  </>
);

export default function Bylaws() {
  return (
    <div className="relative w-full min-h-screen bg-rad-white">
      <Header active_route="bylaws" />
      <div className="flex flex-col items-center px-6 overflow-scroll sm:px-24 md:px-36 h-full-header font-[electro] text-stone-900">
        <TypographyTitle text={BYLAWS_PAGE_TITLE} />

        {/* OWNERS */}
        <BylawArticleHeading number="I" title="OWNERS" />
        <BylawSubsectionHeading number="1" title="Members" />
        <BylawText
          text={
            <>
              Michael Beebe, Matthew Edel, Conner Manion, Andrew Pechulonis,
              Connor Ruff, and James Whalen shall engage in all League
              activities in perpetuity. In the event that an owner's life
              concludes, their team shall remain (auto managed) throughout the
              existence of the League (until all owners die).
            </>
          }
        />
        <BylawSubsectionHeading number="2" title="Payments & Rewards" />
        <BylawText
          text={
            <>
              Each owner must deliver a payment of $100 prior to Week One of
              each season. This money shall be divided between the Dynasty
              Champion ($25) and the upcoming Season's Champion ($75). Each
              Season Champion receives $450 (profits $375) from the Treasurer
              upon their coronation. After an owner earns THREE Season
              Championships within a Dynasty, they receive the entirety of the
              Dynasty reward. At which point, the League commences a new Dynasty
              iteration.
            </>
          }
        />
        <BylawSubsectionHeading number="3" title="Events" />
        <BylawText
          text={
            <>
              In-season yearly events are as follows: Rivalry Week and Playoff
              Festival. Off-season yearly events are as follows: All Star Game,
              Beer Olympics, Owners Meeting, Commissioner Commissioner Election,
              and Rookie Draft. Each event requires full participation to each
              member's reasonable capacities.
            </>
          }
        />
        <BylawSubsectionHeading number="4" title="Commissary Duties" />
        <BylawText
          text={
            <>
              Michael Beebe shall serve as Commissioner Commissioner and
              Anti-Anti-Noah Gray Commissioner. Conner Manion shall serve as
              Monetary Commissioner. Connor Ruff shall serve as Punishment
              Commissioner. Andrew Pechulonis shall serve as Beer Olympic
              Commissioner. James Whalen shall serve as Locker Room
              Commissioner. Matthew Edel shall serve as All Star Commissioner
              and Punishment Commissioner Commissioner. New election for
              Commissioner Commissioner occurs prior to each league year.
              <sup>1</sup>
            </>
          }
        />
        <BylawSubsectionHeading number="5" title="Rivalries" />
        <BylawText
          text={
            <>
              Primary rivalries are as follows: Conner Manion and Connor Ruff,
              Michael Beebe and Andrew Pechulonis, Matthew Edel and James
              Whalen.<sup>2</sup>
            </>
          }
        />

        {/* SEASONS */}
        <BylawArticleHeading number="II" title="SEASONS" />
        <BylawSubsectionHeading number="1" title="Regular" />
        <BylawSubsectionHeading number="2" title="Playoffs" />
        <BylawSubsectionHeading number="3" title="Off-Season" />

        {/* FOOTNOTES */}
        <div className="w-full mt-4 mb-4 max-w-[860px]">
          <hr className="mb-3 border-stone-950" />
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
