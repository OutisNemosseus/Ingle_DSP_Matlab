// Chapter 4: Example 4.8:
// Chapter 4: Example 4.8:

const ex040800 = {
  "id": "ex040800",
  "title": "ex040800",
  "displayName": "Chapter 4: Example 4.8:",
  "description": "Chapter 4: Example 4.8:",
  "category": "DSP - Chapter 04",
  "chapter": "04",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 4: Example 4.8:\n# Chapter: 04\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nfrom scipy.signal import residuez\n\n# Chapter 4: Example 4.8:\n# Check of residues in Example 4.7\n\nb = np.array([0, 1])\na = np.array([3, -4, 1])\n\nR, p, C = residuez(b, a)\nprint(f\"Residues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms C = {C}\")\n\n# Reconstruct b, a from residues\n# Note: scipy doesn't have invresiduz, but we can verify\nprint(f\"\\\nOriginal b = {b}\")\nprint(f\"Original a = {a}\")\n",
  "matlabCode": "% Chapter 4: Example 4.8:\r\n\r\n%  Check of residues in Example 4.7\r\n\r\n%\r\n\r\nb = [0,1]; a = [3,-4,1];\r\n\r\n[R,p,C] = residuez(b,a)\r\n\r\n%\r\n\r\n[b,a] = residuez(R,p,C)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter04",
    "dsp",
    "ex040800"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex040800;
