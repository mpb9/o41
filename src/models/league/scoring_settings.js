export default class ScoringSettings {
  constructor(json = {}) {
    this.blk_kick = json.blk_kick ? Number(json.blk_kick) : 0;
    this.def_2pt = json.def_2pt ? Number(json.def_2pt) : 0;
    this.def_st_ff = json.def_st_ff ? Number(json.def_st_ff) : 0;
    this.def_st_fum_rec = json.def_st_fum_rec ? Number(json.def_st_fum_rec) : 0;
    this.def_st_td = json.def_st_td ? Number(json.def_st_td) : 0;
    this.def_td = json.def_td ? Number(json.def_td) : 0;
    this.ff = json.ff ? Number(json.ff) : 0;
    this.fgm = json.fgm ? Number(json.fgm) : 0;
    this.fgm_0_19 = json.fgm_0_19 ? Number(json.fgm_0_19) : 0;
    this.fgm_20_29 = json.fgm_20_29 ? Number(json.fgm_20_29) : 0;
    this.fgm_30_39 = json.fgm_30_39 ? Number(json.fgm_30_39) : 0;
    this.fgm_40_49 = json.fgm_40_49 ? Number(json.fgm_40_49) : 0;
    this.fgm_50p = json.fgm_50p ? Number(json.fgm_50p) : 0;
    this.fgm_yds_over_30 = json.fgm_yds_over_30
      ? Number(json.fgm_yds_over_30)
      : 0;
    this.fgmiss = json.fgmiss ? Number(json.fgmiss) : 0;
    this.fgmiss_0_19 = json.fgmiss_0_19 ? Number(json.fgmiss_0_19) : 0;
    this.fgmiss_20_29 = json.fgmiss_20_29 ? Number(json.fgmiss_20_29) : 0;
    this.fgmiss_30_39 = json.fgmiss_30_39 ? Number(json.fgmiss_30_39) : 0;
    this.fgmiss_40_49 = json.fgmiss_40_49 ? Number(json.fgmiss_40_49) : 0;
    this.fgmiss_50p = json.fgmiss_50p ? Number(json.fgmiss_50p) : 0;
    this.fum = json.fum ? Number(json.fum) : 0;
    this.fum_lost = json.fum_lost ? Number(json.fum_lost) : 0;
    this.fum_rec = json.fum_rec ? Number(json.fum_rec) : 0;
    this.fum_rec_td = json.fum_rec_td ? Number(json.fum_rec_td) : 0;
    this.int = json.int ? Number(json.int) : 0;
    this.pass_2pt = json.pass_2pt ? Number(json.pass_2pt) : 0;
    this.pass_int = json.pass_int ? Number(json.pass_int) : 0;
    this.pass_td = json.pass_td ? Number(json.pass_td) : 0;
    this.pass_yd = json.pass_yd ? Number(json.pass_yd) : 0;
    this.pts_allow_0 = json.pts_allow_0 ? Number(json.pts_allow_0) : 0;
    this.pts_allow_1_6 = json.pts_allow_1_6 ? Number(json.pts_allow_1_6) : 0;
    this.pts_allow_7_13 = json.pts_allow_7_13 ? Number(json.pts_allow_7_13) : 0;
    this.pts_allow_14_20 = json.pts_allow_14_20
      ? Number(json.pts_allow_14_20)
      : 0;
    this.pts_allow_21_27 = json.pts_allow_21_27
      ? Number(json.pts_allow_21_27)
      : 0;
    this.pts_allow_28_34 = json.pts_allow_28_34
      ? Number(json.pts_allow_28_34)
      : 0;
    this.pts_allow_35p = json.pts_allow_35p ? Number(json.pts_allow_35p) : 0;
    this.rec = json.rec ? Number(json.rec) : 0;
    this.rec_2pt = json.rec_2pt ? Number(json.rec_2pt) : 0;
    this.rec_td = json.rec_td ? Number(json.rec_td) : 0;
    this.rec_yd = json.rec_yd ? Number(json.rec_yd) : 0;
    this.rush_2pt = json.rush_2pt ? Number(json.rush_2pt) : 0;
    this.rush_td = json.rush_td ? Number(json.rush_td) : 0;
    this.rush_yd = json.rush_yd ? Number(json.rush_yd) : 0;
    this.sack = json.sack ? Number(json.sack) : 0;
    this.safe = json.safe ? Number(json.safe) : 0;
    this.st_ff = json.st_ff ? Number(json.st_ff) : 0;
    this.st_fum_rec = json.st_fum_rec ? Number(json.st_fum_rec) : 0;
    this.st_td = json.st_td ? Number(json.st_td) : 0;
    this.xpm = json.xpm ? Number(json.xpm) : 0;
    this.xpmiss = json.xpmiss ? Number(json.xpmiss) : 0;
    this.yds_allow_0_100 = json.yds_allow_0_100
      ? Number(json.yds_allow_0_100)
      : 0;
    this.yds_allow_100_199 = json.yds_allow_100_199
      ? Number(json.yds_allow_100_199)
      : 0;
    this.yds_allow_200_299 = json.yds_allow_200_299
      ? Number(json.yds_allow_200_299)
      : 0;
    this.yds_allow_300_349 = json.yds_allow_300_349
      ? Number(json.yds_allow_300_349)
      : 0;
    this.yds_allow_350_399 = json.yds_allow_350_399
      ? Number(json.yds_allow_350_399)
      : 0;
    this.yds_allow_400_449 = json.yds_allow_400_449
      ? Number(json.yds_allow_400_449)
      : 0;
    this.yds_allow_450_499 = json.yds_allow_450_499
      ? Number(json.yds_allow_450_499)
      : 0;
    this.yds_allow_500_549 = json.yds_allow_500_549
      ? Number(json.yds_allow_500_549)
      : 0;
    this.yds_allow_550p = json.yds_allow_550p ? Number(json.yds_allow_550p) : 0;
  }
}
