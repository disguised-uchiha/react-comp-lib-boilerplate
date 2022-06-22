const BICOLORS = {
  primary: {
    DEFAULT: "#0066cc",
    "tbl-1": "#d9ecff",
    "tbl-2": "#b2d9ff",
    "tbl-3": "#8cc6ff",
    "tbl-4": "#66b2ff",
    "tbl-5": "#409fff",
    "tbl-6": "#1a8cff",
    "tbl-7": "#0079f2",

    "tbd-1": "#000d19",
    "tbd-2": "#001933",
    "tbd-3": "#00264d",
    "tbd-4": "#003366",
    "tbd-5": "#004080",
    "tbd-6": "#004d99",
    "tbd-7": "#0059b3",

    1: "#E6F7FF",
    2: "#A3DDFF",
    3: "#74C0F2",
    4: "#49A2E6",
    5: "#2384D9",
    6: "#0066CC",
    7: "#004DA6",
    8: "#003780",
    9: "#002459",
    10: "#001333"
  },
  secondary: {
    DEFAULT: "#fca106",
    "opl-1": "#fff3e0",
    "opl-2": "#fee8c1",
    "opl-3": "#fedca2",
    "opl-4": "#fed083",
    "opl-5": "#fdc463",
    "opl-6": "#fdb844",
    "opl-7": "#fcad25",

    "opd-1": "#201400",
    "opd-2": "#402801",
    "opd-3": "#603d01",
    "opd-4": "#7f5102",
    "opd-5": "#9f6502",
    "opd-6": "#df7902",
    "opd-7": "#df8e03",

    1: "#FFFAE6",
    2: "#FFEBA8",
    3: "#FFDD80",
    4: "#FFCD57",
    5: "#FFB92E",
    6: "#FCA106",
    7: "#D68100",
    8: "#B06400",
    9: "#8A4900",
    10: "#633200"
  },
  tertiary: {
    DEFAULT: "#d13845",
    "frl-1": "#f9e6e8",
    "frl-2": "#f3cdd1",
    "frl-3": "#eeb4b9",
    "frl-4": "#ea9ba2",
    "frl-5": "#e2838b",
    "frl-6": "#dc6a73",
    "frl-7": "#d7515c",

    "frd-1": "#1b0608",
    "frd-2": "#360c10",
    "frd-3": "#511318",
    "frd-4": "#6c1920",
    "frd-5": "#871f28",
    "frd-6": "#a12530",
    "frd-7": "#bc2c38",

    1: "#FFF1F0",
    2: "#FFE9E8",
    3: "#F7BBBA",
    4: "#EB8A8C",
    5: "#DE5F66",
    6: "#D13845",
    7: "#AB2635",
    8: "#851727",
    9: "#5E0B1B",
    10: "#380611"
  }
};
module.exports = {
  colors: {
    ...BICOLORS,
    status: {
      error: "#ff3b3b",
      success: "#06c270",
      warning: "#ff8800"
    },

    "text-shade": {
      s1: "#16181E",
      s2: "#3F4A56",
      s3: "#8091A5",
      s4: "#FFFFFF"
    },
    //! @deprecated: These colors are removed from design system
    "border-divider": {
      s1: "#323130",
      s2: "#8A8886",
      s3: "#D7D7D7"
    },
    border: {
      input: "#9E9E9E",
      "input-hover": "#747474"
    },
    divider: {
      body: "#D7D7D7"
    },
    illustration: {
      ffr: "#f55c69"
    },
    error: {
      1: "#FF3B3B",
      2: "#FFF2F0"
    },
    warning: {
      1: "#FF8800",
      2: "#FFFBE6"
    },
    success: {
      1: "#06C270",
      2: "#E6FFF0"
    },
    neutral: {
      1: "#FFFFFF",
      2: "#FAFAFA",
      3: "#F5F5F5",
      4: "#F0F0F0",
      5: "#D9D9D9",
      6: "#BFBFBF",
      7: "#8C8C8C",
      8: "#595959",
      9: "#434343",
      10: "#262626",
      11: "#1F1F1F",
      12: "#141414",
      13: "#000000"
    },
    background: {
      1: "#00101F"
    }
  },
  backgroundColor: {
    main: "#fbfbfb",
    background: {
      primary: "#f0f4f9",
      secondary: "#ffefd2",
      tertiary: "#ffecee",
      tag: "#d2d2d2",
      grey: "#f0f0f0"
    },
    status: {
      error: "#ff8d8d",
      success: "#4fe3a2",
      warning: "#ffc88a"
    }
  },
  fontSize: {
    mCaption: ["11.11px", "15.55px"],
    mSubtitle: ["13.33px", "18.66px"],
    mH6: ["19.2px", "26.88px"],
    mH5: ["23.04px", "32.25px"],
    mH4: ["27.65px", "38.71px"],
    mH3: ["33.18px", "46.45px"],
    mH2: ["39.81px", "55.73px"],
    mH1: ["47.78px", "66.89px"],
    regular: ["16px", "22.4px"],
    H6: ["20px", "28px"],
    H5: ["25px", "35px"],
    H4: ["31.25px", "43.75px"],
    H3: ["39.06px", "54.68px"],
    H2: ["48.83px", "68.36px"],
    H1: ["61.04px", "85.45px"],
    "heading-1": ["61px", "72px"],
    "heading-2": ["48px", "56px"],
    "heading-3": ["39px", "48px"],
    "heading-4": ["31px", "40px"],
    "heading-5": ["25px", "32px"],
    "heading-6": ["20px", "24px"],
    body: ["16px", "24px"],
    subtitle: ["12px", "16px"],
    caption: ["12px", "10px"]
  },
  borderWidth: {
    xs: "0.5px"
  }
};
