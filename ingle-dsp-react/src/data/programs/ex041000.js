// Chapter 4: Example 4.10:
// Chapter 4: Example 4.10:

const ex041000 = {
  "id": "ex041000",
  "title": "ex041000",
  "displayName": "Chapter 4: Example 4.10:",
  "description": "Chapter 4: Example 4.10:",
  "category": "DSP - Chapter 04",
  "chapter": "04",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 4: Example 4.10:\n# Chapter: 04\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nfrom scipy.signal import residuez\n\n# Chapter 4: Example 4.10:\n# Check of residue functions\n\nb = np.array([1, 0.4*np.sqrt(2)])\na = np.array([1, -0.8*np.sqrt(2), 0.64])\n\nR, p, C = residuez(b, a)\nprint(f\"Residues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms C = {C}\")\n\nMp = np.abs(p)  # pole magnitudes\nAp = np.angle(p) / np.pi  # pole angles in pi units\n\nprint(f\"\\\nPole magnitudes Mp = {Mp}\")\nprint(f\"Pole angles Ap (in pi units) = {Ap}\")\n",
  "matlabCode": "% Chapter 4: Example 4.10:\r\n\r\n%  Check of residue functions rf2pfez and pfe2rfz\r\n\r\n%\r\n\r\nb = [1,0.4*sqrt(2)]; a=[1,-0.8*sqrt(2),0.64];\r\n\r\n[R,p,C] = residuez(b,a)\r\n\r\nMp=abs(p')   % pole magnitudes\r\n\r\nAp=angle(p')/pi   % pole angles in pi units",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter04",
    "dsp",
    "ex041000"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex041000;
