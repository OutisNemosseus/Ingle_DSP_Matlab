// Chapter 02: Example 02.04: Even-Odd Synthesis
// Chapter 02: Example 02.04: Even-Odd Synthesis

const ex020400 = {
  "id": "ex020400",
  "title": "ex020400",
  "displayName": "Chapter 02: Example 02.04: Even-Odd Synthesis",
  "description": "Chapter 02: Example 02.04: Even-Odd Synthesis",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 02: Example 02.04: Even-Odd Synthesis\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\ndef evenodd(x, n):\n    \"\"\"Decompose signal into even and odd parts\"\"\"\n    # Extend n to be symmetric around 0\n    if n[0] > -n[-1]:\n        m = np.arange(-n[-1], n[-1] + 1)\n    else:\n        m = np.arange(n[0], -n[0] + 1)\n    \n    # Create extended signal with zeros\n    x_ext = np.zeros(len(m))\n    idx = np.where((m >= n[0]) & (m <= n[-1]))[0]\n    x_ext[idx] = x\n    \n    # Even part: (x(n) + x(-n)) / 2\n    xe = 0.5 * (x_ext + np.flip(x_ext))\n    \n    # Odd part: (x(n) - x(-n)) / 2\n    xo = 0.5 * (x_ext - np.flip(x_ext))\n    \n    return xe, xo, m\n\n# Chapter 02: Example 02.04: Even-Odd Synthesis\nfig = plt.figure(figsize=(12, 10))\n\n# x(n) = u(n)-u(n-10)\nn = np.arange(0, 11)\nx = stepseq(0, 0, 10) - stepseq(10, 0, 10)\nxe, xo, m = evenodd(x, n)\n\nplt.subplot(2, 2, 1)\nplt.plt.plt.stem(n, x)\nplt.title('Rectangular pulse')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.plt.plt.axis([-10, 10, 0, 1.2])\n\nplt.subplot(2, 2, 2)\nplt.plt.plt.stem(m, xe)\nplt.title('Even Part')\nplt.xlabel('n')\nplt.ylabel('xe(n)')\nplt.plt.plt.axis([-10, 10, 0, 1.2])\n\nplt.subplot(2, 2, 4)\nplt.plt.plt.stem(m, xo)\nplt.title('Odd Part')\nplt.xlabel('n')\nplt.ylabel('xo(n)')\nplt.plt.plt.axis([-10, 10, -0.6, 0.6])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 02: Example 02.04: Even-Odd Synthesis\r\n\r\n%\r\n\r\n% x(n) = u(n)-u(n-10);\r\n\r\nn = [0:10];\r\n\r\nx = stepseq(0,0,10)-stepseq(10,0,10);\r\n\r\n[xe,xo,m] = evenodd(x,n);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem(n,x); title('Rectangular pulse')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-10,10,0,1.2])\r\n\r\nsubplot(2,2,2); stem(m,xe); title('Even Part')\r\n\r\nxlabel('n'); ylabel('xe(n)'); axis([-10,10,0,1.2])\r\n\r\nsubplot(2,2,4); stem(m,xo); title('Odd Part')\r\n\r\nxlabel('n'); ylabel('xe(n)'); axis([-10,10,-0.6,0.6])",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020400"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020400;
