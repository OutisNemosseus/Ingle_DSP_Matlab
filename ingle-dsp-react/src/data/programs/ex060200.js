// Chapter 6 : Example 6.2
// Chapter 6 : Example 6.2

const ex060200 = {
  "id": "ex060200",
  "title": "ex060200",
  "displayName": "Chapter 6 : Example 6.2",
  "description": "Chapter 6 : Example 6.2",
  "category": "DSP - Chapter 06",
  "chapter": "06",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 6 : Example 6.2\n# Chapter: 06\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nfrom scipy import signal\n\n# Chapter 6 : Example 6.2\n# Parallel form conversion\n\n# Note: This example requires custom MATLAB functions (dir2par, parfiltr, par2dir)\n# Python equivalent uses residuez for partial fraction expansion\n\nb = np.array([1, -3, 11, -27, 18])\na = np.array([16, 12, 2, -4, -1])\n\n# Impulse sequence\ndef impseq(n0, n1, n2):\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndelta = impseq(0, 0, 7)\nprint(f\"Impulse delta = {delta}\")\n\n# Direct form filter\nhdir = signal.lfilter(b, a, delta)\nprint(f\"\\\nDirect form output hdir = {hdir}\")\n\n# Parallel form using partial fraction expansion\nR, p, C = signal.residuez(b, a)\nprint(f\"\\\nResidues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms C = {C}\")\n\n# For parallel form implementation, we sum contributions from each pole\n# hpar[n] = np.sum(R[i] * p[i]^n) + C[n] * delta[n]\nn = np.arange(len(delta))\nhpar = np.zeros(len(delta))\nfor i in range(len(R)):\n    hpar += R[i] * (p[i] ** n)\nif len(C) > 0:\n    hpar[:len(C)] += C\n\nprint(f\"\\\nParallel form output hpar = {hpar}\")\n\n# Verify they're the same\nerror = np.max(np.abs(hdir - hpar))\nprint(f\"\\\nMax error between direct and parallel forms: {error}\")\n",
  "matlabCode": "% Chapter 6 : Example 6.2\r\n\r\n%             Parallel form conversion\r\n\r\n%\r\n\r\nb = [1,-3,11,-27,18]; a = [16,12,2,-4,-1];\r\n\r\n[C,B,A] = dir2par(b,a)\r\n\r\nformat long; delta = impseq(0,0,7);\r\n\r\nhpar = parfiltr(C,B,A,delta)\r\n\r\nhdir = filter(b,a,delta)\r\n\r\n[b1,a1] = par2dir(C,B,A)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter06",
    "dsp",
    "ex060200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex060200;
