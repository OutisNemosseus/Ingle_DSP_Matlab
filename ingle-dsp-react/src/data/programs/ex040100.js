// Chapter 4: Example 4.1:
// Chapter 4: Example 4.1:

const ex040100 = {
  "id": "ex040100",
  "title": "ex040100",
  "displayName": "Chapter 4: Example 4.1:",
  "description": "Chapter 4: Example 4.1:",
  "category": "DSP - Chapter 04",
  "chapter": "04",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 4: Example 4.1:\n# Chapter: 04\n# Source: Ingle DSP MATLAB Programs\n\n# Chapter 4: Example 4.1:\n# X(z) using ztrans\n# x(n) = a^n*u(n)\n\n# Note: This example uses symbolic computation (ztrans) which is available in MATLAB's Symbolic Math Toolbox\n# Python equivalent would use sympy library for symbolic Z-transform\n\nimport sympy as sp\n\nn, z, a = sp.symbols('n z a')\nx = a**n\nX = sp.summation(x * z**(-n), (n, 0, sp.oo))\nprint(f\"X(z) = {sp.simplify(X)}\")\n",
  "matlabCode": "% Chapter 4: Example 4.1:\r\n\r\n%  X(z) using ztrans\r\n\r\n%   x(n) = a^nu(n)\r\n\r\nx = 'a^n';\r\n\r\nX = ztrans(x)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter04",
    "dsp",
    "ex040100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex040100;
