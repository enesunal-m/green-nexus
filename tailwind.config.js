module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "Orange": "#c05746ff",
          "Purple": "#5823dcff",
          "PrimaryGreen": "#19bc61ff",
          "PrimarySecond": "#25ecabff"
        },
        "Scheme": {
          "White80": "#ffffffcc",
          "LightBrown": "#f9f4f0ff",
          "Black": "#0f1722ff",
          "LightBlue": "#162d5aff",
          "Black80": "#191919cc",
          "Brown": "#0c3db4ff",
          "DarkBlue": "#191919ff",
          "White": "#FFFFFF",
          "DarkGray": "#9095a7ff"
        },
        "Buttons": {
          "MainButton": "#1e9653ff"
        },
        "foreground": "#191919ff",
        "background": "#FFFFFF"
      },
      "spacing": {
        "Unit": "16px",
        "TwoUnits": "32px",
        "FiveUnits": "80px",
        "ThreeUnits": "48px",
        "OneAndHalfUnits": "24px",
        "SixUnits": "96px",
        "HalfUnit": "8px",
        "FourUnits": "64px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px",
        "Radius2": "2px"
      },
      "scale": {
        "XXLarge": "288px",
        "Small": "48px",
        "MaxWidth": "988px",
        "Medium": "96px",
        "Large": "144px",
        "XLarge": "192px",
        "XSmall": "16px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}