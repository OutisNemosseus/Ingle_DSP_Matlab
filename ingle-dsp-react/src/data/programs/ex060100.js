// Chapter 6 : Example 6.1
// Chapter 6 : Example 6.1

const ex060100 = {
  "id": "ex060100",
  "title": "ex060100",
  "displayName": "Chapter 6 : Example 6.1",
  "description": "Chapter 6 : Example 6.1",
  "category": "DSP - Chapter 06",
  "chapter": "06",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 6 : Example 6.1\n# Chapter: 06\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nfrom scipy import signal\n\n# Chapter 6 : Example 6.1\n# Cascade form conversion\n\n# Note: This example requires custom MATLAB functions (dir2cas, casfiltr, impseq)\n# which are not standard in Python. Here's a simplified version:\n\nb = np.array([1, -3, 11, -27, 18])\na = np.array([16, 12, 2, -4, -1])\n\n# Impulse sequence\ndef impseq(n0, n1, n2):\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndelta = impseq(0, 0, 7)\nprint(f\"Impulse delta = {delta}\")\n\n# Direct form filter\nhdir = signal.lfilter(b, a, delta)\nprint(f\"\\\nDirect form output hdir = {hdir}\")\n\n# For cascade form, we would need to factor the polynomials\n# into second-order sections (SOS)\nz, p, k = signal.tf2zpk(b, a)\nprint(f\"\\\nZeros z = {z}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Gain k = {k}\")\n\nsos = signal.tf2sos(b, a)\nprint(f\"\\\nSecond-order sections (SOS):\\\n{sos}\")\n\n# Apply cascade (SOS) filter\nhpar = signal.sosfilt(sos, delta)\nprint(f\"\\\nCascade form output hpar = {hpar}\")\n\n# Verify they're the same\nerror = np.max(np.abs(hdir - hpar))\nprint(f\"\\\nMax error between direct and cascade forms: {error}\")\n",
  "matlabCode": "% Chapter 6 : Example 6.1\r\n\r\n%             Cascade form conversion\r\n\r\n%\r\n\r\nb = [1,-3,11,-27,18]; a = [16,12,2,-4,-1];\r\n\r\n[b0,B,A] = dir2cas(b,a)\r\n\r\nformat long; delta = impseq(0,0,7);\r\n\r\nhpar = casfiltr(b0,B,A,delta)\r\n\r\nhdir = filter(b,a,delta)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter06",
    "dsp",
    "ex060100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex060100;
