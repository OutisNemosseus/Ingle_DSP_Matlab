// Chapter 4: Example 4.8:
// Chapter 4: Example 4.8:

const ex040900 = {
  "id": "ex040900",
  "title": "ex040900",
  "displayName": "Chapter 4: Example 4.8:",
  "description": "Chapter 4: Example 4.8:",
  "category": "DSP - Chapter 04",
  "chapter": "04",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 4: Example 4.8:\n# Chapter: 04\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nfrom scipy.signal import residuez\n\n# Chapter 4: Example 4.9:\n# Check of residue functions\n\nb = np.array([1])\na = np.poly([0.9, 0.9, -0.9])\nprint(f\"a = {a}\")\n\nR, p, c = residuez(b, a)\nprint(f\"\\\nResidues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms c = {c}\")\n",
  "matlabCode": "% Chapter 4: Example 4.8:\r\n\r\n%  Check of residue functions rf2pfez and pfe2rfz\r\n\r\n%\r\n\r\nb = 1; a = poly([0.9,0.9,-0.9])\r\n\r\n[R,p,c] = residuez(b,a)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter04",
    "dsp",
    "ex040900"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex040900;
