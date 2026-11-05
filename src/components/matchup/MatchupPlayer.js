import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Player as PlayerModel } from "../../models/_helper";
import { getPlayerPtsColor } from "../../services/_helper";
import { POSITION_COLORS, PTS_COLORS } from "../../styles";
import { Player } from "../_helper";

MatchupPlayer.propTypes = {
  player: PropTypes.instanceOf(PlayerModel).isRequired,
};
export default function MatchupPlayer(props) {
  const [positionColor, setPositionColor] = useState("#f59cff");
  const [ptsColor, setPtsColor] = useState(PTS_COLORS.really_low);

  useEffect(() => {
    setPositionColor(POSITION_COLORS[props.player.position] || "#f59cff");
    setPtsColor(getPlayerPtsColor(props.player.pts, props.player.position));
  }, [props.player.pts, props.player.position]);

  return (
    <div
      key={props.player.player_id}
      className="flex justify-center items-center bg-stone-700 border-2 border-secondary border-t-1 border-b-0 w-full overflow-hidden sm:text-[0.85rem] lg:text-base"
    >
      <div className="flex flex-1 items-baseline overflow-hidden text-stone-100 text-left whitespace-nowrap">
        <span
          className="flex-none pr-0.5 w-10 text-sm text-center"
          style={{ color: positionColor }}
        >
          {props.player.position}
        </span>
        <span className="font-mono text-base xl:text-lg cursor-pointer">
          <Player player={props.player} btn_type={"text"} />
        </span>
        <span className="pl-2 overflow-hidden text-stone-400 text-xs">
          {props.player.team_name}
        </span>
      </div>
      <div
        className="bg-stone-900 py-[3px] pl-[2px] border-l-[1px] w-[64px] sm:w-[56px] lg:w-[72px] font-mono text-[0.9rem] text-primary sm:text-sm lg:text-base text-center tracking-wider"
        style={{
          color: ptsColor,
          borderColor: ptsColor,
        }}
      >
        {props.player.pts}
      </div>
    </div>
  );
}
