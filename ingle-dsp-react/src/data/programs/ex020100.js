// Chapter 02: Example 02.01: Signal Synthesis
// Chapter 02: Example 02.01: Signal Synthesis

const ex020100 = {
  "id": "ex020100",
  "title": "ex020100",
  "displayName": "Chapter 02: Example 02.01: Signal Synthesis",
  "description": "Chapter 02: Example 02.01: Signal Synthesis",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 02: Example 02.01: Signal Synthesis\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef impseq(n0, n1, n2):\n    \"\"\"Generate impulse sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Chapter 02: Example 02.01: Signal Synthesis\nfig = plt.figure(figsize=(12, 10))\n\n# a) x(n) = 2*delta(n+2) - delta(n-4), -5<=n<=5\nn = np.arange(-5, 6)\nx = 2*impseq(-2, -5, 5) - impseq(4, -5, 5)\nplt.subplot(2, 2, 1)\nplt.stem(n, x)\nplt.title('Sequence in Example 2.1a')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([-5, 5, -2, 3])\n\n# b) x(n) = n[u(n)-u(n-10)]+10*exp(-0.3(n-10))(u(n-10)-u(n-20)); 0<=n<=20\nn = np.arange(0, 21)\nx1 = n * (stepseq(0, 0, 20) - stepseq(10, 0, 20))\nx2 = 10 * np.exp(-0.3 * (n - 10)) * (stepseq(10, 0, 20) - stepseq(20, 0, 20))\nx = x1 + x2\nplt.subplot(2, 2, 2)\nplt.stem(n, x)\nplt.title('Sequence in Example 2.1b')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([0, 20, -1, 11])\n\n# c) x(n) = cos(0.04*pi*n) + 0.2*w(n); 0<=n<=50, w(n): Gaussian (0,1)\nn = np.arange(0, 51)\nx = np.cos(0.04 * np.pi * n) + 0.2 * np.random.randn(len(n))\nplt.subplot(2, 2, 3)\nplt.stem(n, x)\nplt.title('Sequence in Example 2.1c')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([0, 50, -1.4, 1.4])\n\n# d) x(n) = {...,5,4,3,2,1,5,4,3,2,1,...}; -10<=n<=9\nn = np.arange(-10, 10)\nx = np.array([5, 4, 3, 2, 1])\nxtilde = np.tile(x, 4)\nplt.subplot(2, 2, 4)\nplt.stem(n, xtilde)\nplt.title('Sequence in Example 2.1d')\nplt.xlabel('n')\nplt.ylabel('xtilde(n)')\nplt.axis([-10, 9, -1, 6])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 02: Example 02.01: Signal Synthesis\r\n\r\n%\r\n\r\nfigure(1); clf\r\n\r\n% a) x(n) = 2*delta(n+2) - delta(n-4), -5<=n<=5\r\n\r\nn = [-5:5];\r\n\r\nx = 2*impseq(-2,-5,5)-impseq(4,-5,5);\r\n\r\nsubplot(2,2,1); stem(n,x); title('Sequence in Example 2.1a')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-5,5,-2,3])\r\n\r\n%\r\n\r\n% b) x(n) = n[u(n)-u(n-10)]+10*exp(-0.3(n-10))(u(n-10)-u(n-20)); 0<=n<=20\r\n\r\nn = [0:20];\r\n\r\nx1 = n.*(stepseq(0,0,20)-stepseq(10,0,20));\r\n\r\nx2 = 10*exp(-0.3*(n-10)).*(stepseq(10,0,20)-stepseq(20,0,20));\r\n\r\nx = x1+x2;\r\n\r\nsubplot(2,2,2);stem(n,x);\r\n\r\ntitle('Sequence in Example 2.1b')\r\n\r\nxlabel('n');ylabel('x(n)');axis([0,20,-1,11])\r\n\r\n%\r\n\r\n% c) x(n) = cos(0.04*pi*n) + 0.2*w(n); 0<=n<=50, w(n): Gaussian (0,1)\r\n\r\nn = [0:50];\r\n\r\nx = cos(0.04*pi*n)+0.2*randn(size(n));\r\n\r\nsubplot(2,2,3);stem(n,x);title('Sequence in Example 2.1c')\r\n\r\nxlabel('n');ylabel('x(n)');axis([0,50,-1.4,1.4])\r\n\r\n%\r\n\r\n% d) x(n) = {...,5,4,3,2,1,5,4,3,2,1,...}; -10<=n<=9\r\n\r\nn=[-10:9];\r\n\r\nx=[5,4,3,2,1];\r\n\r\nxtilde=x' * ones(1,4);\r\n\r\nxtilde=(xtilde(:))';\r\n\r\nsubplot(2,2,4);stem(n,xtilde);title('Sequence in Example 2.1d')\r\n\r\nxlabel('n');ylabel('xtilde(n)');axis([-10,9,-1,6])",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020100;
