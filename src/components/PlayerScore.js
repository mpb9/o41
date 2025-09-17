import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Player } from "../models/_helper";
import { POSITION_COLORS, PTS_COLORS } from "../utils/styles";

PlayerScore.propTypes = {
  player: PropTypes.instanceOf(Player).isRequired,
};
export default function PlayerScore(props) {
  const [positionColor, setPositionColor] = useState("#f59cff");
  const [ptsColor, setPtsColor] = useState(PTS_COLORS.really_low);

  useEffect(() => {
    setPositionColor(POSITION_COLORS[props.player.position] || "#f59cff");
    console.log("POSITION COLOR", positionColor);
  }, [props.player.position]);

  useEffect(() => {
    if (props.player.pts < 4) {
      setPtsColor(PTS_COLORS.really_low);
    } else if (props.player.pts < 8) {
      setPtsColor(PTS_COLORS.low);
    } else if (props.player.pts < 12) {
      setPtsColor(PTS_COLORS.medium_low);
    } else if (props.player.pts < 20) {
      setPtsColor(PTS_COLORS.medium_high);
    } else {
      setPtsColor(PTS_COLORS.high);
    }
    console.log("PTS COLOR", ptsColor);
  }, [props.player.pts]);

  return (
    <div
      key={props.player.player_id}
      className="flex bg-stone-700 items-center overflow-hidden justify-center w-full border-b-0 sm:text-[0.85rem] lg:text-base border-1 border-stone-600"
    >
      <div className="flex items-baseline flex-1 overflow-hidden text-left text-stone-100 whitespace-nowrap">
        <span
          className="flex-none w-10 mr-[3px] text-sm text-center"
          style={{ color: positionColor }}
        >
          {props.player.position}
        </span>
        <span className="font-mono text-lg md:text-base xl:text-lg">
          {props.player.first_name[0]} {props.player.last_name}
        </span>
        <span className="pl-2 overflow-hidden text-xs text-stone-400">
          ({props.player.team})
        </span>
      </div>
      <div
        className="w-[64px] sm:w-[56px] lg:w-[70px] py-[3px] bg-stone-900 tracking-wider text-primary font-mono border-x-[0.5px]"
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
