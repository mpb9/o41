import { HYPERLINK } from "../../../constants/leagueInfo";
import { HeaderMobileDropdownMenu } from "../../_helper";
export default function HeaderMobile({ active_route }) {
  return (
    <div className="flex sm:hidden items-center justify-center w-full text-center bg-dark h-[3.25rem] border-b border-b-secondary">
      <div className="flex items-center">
        <a
          href={HYPERLINK.drive}
          target="_blank"
          rel="noreferrer"
          className="transition-transform"
        >
          <img
            src="/img/companies/drive.png"
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
          <img
            src="/img/companies/sleeper-green.png"
            alt="Sleeper"
            width={28}
          />
        </a>
      </div>
    </div>
  );
}
