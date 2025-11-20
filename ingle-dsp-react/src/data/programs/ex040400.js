// Chapter 4: Example 4.4:
// Chapter 4: Example 4.4:

const ex040400 = {
  "id": "ex040400",
  "title": "ex040400",
  "displayName": "Chapter 4: Example 4.4:",
  "description": "Chapter 4: Example 4.4:",
  "category": "DSP - Chapter 04",
  "chapter": "04",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 4: Example 4.4:\n# Chapter: 04\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nimport sympy as sp\n\n# Chapter 4: Example 4.4:\n# X(z) using ztrans\n# x(n) = (n-2)(0.5)^(n-2)cos[pi*(n-2)/3]u(n-2)\n\n# Note: This example uses symbolic computation\n# Using sympy for symbolic manipulation\n\nn, z = sp.symbols('n z')\nx = n * (sp.Rational(1, 2))**n * sp.np.cos(sp.pi*n/3)\n\n# For Z-transform of the shifted and scaled sequence\nprint(\"Note: Symbolic Z-transform computation\")\nprint(f\"x(n) = n*(0.5)^n*np.cos(pi*n/3)\")\nprint(\"This requires symbolic computation tools\")\n",
  "matlabCode": "% Chapter 4: Example 4.4:\r\n\r\n%  X(z) using ztrans\r\n\r\n%   x(n) = (n-2)(0.5)^(n-2)cos[pi*(n-2)/3]u(n-2)\r\n\r\nx = 'n*((0.5)^n)*cos(pi*n/3)';\r\n\r\nX = ztrans(x);\r\n\r\n[nX,dX] = numden(X);\r\n\r\nexpand(nX), expand(dX);\r\n\r\ndX = symmul(dX,'z^2'); expand(dX)\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter04",
    "dsp",
    "ex040400"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex040400;
