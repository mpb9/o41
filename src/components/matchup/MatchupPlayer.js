import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Player } from "../../models/_helper";
import { getPlayerPtsColor } from "../../services/_helper";
import { POSITION_COLORS, PTS_COLORS } from "../../styles";

MatchupPlayer.propTypes = {
  player: PropTypes.instanceOf(Player).isRequired,
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
      className="flex bg-stone-700 items-center overflow-hidden justify-center w-full border-b-0 border-t-1 sm:text-[0.85rem] lg:text-base border-2 border-secondary"
    >
      <div className="flex items-baseline flex-1 overflow-hidden text-left text-stone-100 whitespace-nowrap">
        <span
          className="flex-none w-10 pr-1 text-sm text-center"
          style={{ color: positionColor }}
        >
          {props.player.position}
        </span>
        <span className="font-mono text-base xl:text-lg">
          {props.player.first_name[0]} {props.player.last_name}
        </span>
        <span className="pl-2 overflow-hidden text-xs text-stone-400">
          {props.player.team_name}
        </span>
      </div>
      <div
        className="w-[64px] sm:w-[56px] lg:w-[72px] py-[3px] bg-stone-900 tracking-wider text-primary font-mono border-l-[1px] pl-[2px] text-[0.9rem] sm:text-sm lg:text-base text-center"
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
