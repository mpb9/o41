import { HYPERLINK } from "../../../utils/leagueInfo";
import { HeaderMobileDropdownMenu } from "../../_helper";
export default function HeaderMobile({ active_route }) {
  return (
    <div className="flex sm:hidden items-center justify-center w-full text-center bg-stone-950 h-[3.25rem] border-b-2 border-b-stone-600">
      <div className="flex items-center">
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="transition-transform"
        >
          <img
            src="/img/drive.png"
            alt="Google Drive"
            width={34}
            className="pt-[2px]"
          />
        </a>
        <HeaderMobileDropdownMenu active_route={active_route} />
        <a
          href={HYPERLINK.sleeper}
          target="_blank"
          rel="noreferrer"
          className="transition-transform"
        >
          <img src="/img/sleeper-green.png" alt="Sleeper" width={28} />
        </a>
      </div>
    </div>
  );
}
