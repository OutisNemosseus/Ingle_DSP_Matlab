// Chapter 02: Example 02.02: Signal Synthesis
// Chapter 02: Example 02.02: Signal Synthesis

const ex020200 = {
  "id": "ex020200",
  "title": "ex020200",
  "displayName": "Chapter 02: Example 02.02: Signal Synthesis",
  "description": "Chapter 02: Example 02.02: Signal Synthesis",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 02: Example 02.02: Signal Synthesis\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef sigshift(x, n, n0):\n    \"\"\"Shift signal x(n) by n0\"\"\"\n    return x, n + n0\n\ndef sigadd(x1, n1, x2, n2):\n    \"\"\"Add two signals\"\"\"\n    n_start = np.min(n1[0], n2[0])\n    n_end = np.max(n1[-1], n2[-1])\n    n = np.arange(n_start, n_end + 1)\n    y = np.zeros(len(n))\n    \n    idx1 = np.where((n >= n1[0]) & (n <= n1[-1]))[0]\n    idx1_orig = np.arange(len(x1))\n    y[idx1] += x1[idx1_orig]\n    \n    idx2 = np.where((n >= n2[0]) & (n <= n2[-1]))[0]\n    idx2_orig = np.arange(len(x2))\n    y[idx2] += x2[idx2_orig]\n    \n    return y, n\n\ndef sigfold(x, n):\n    \"\"\"Fold signal x(n) to get x(-n)\"\"\"\n    return np.flip(x), -np.flip(n)\n\ndef sigmult(x1, n1, x2, n2):\n    \"\"\"Multiply two signals\"\"\"\n    n_start = np.max(n1[0], n2[0])\n    n_end = np.min(n1[-1], n2[-1])\n    n = np.arange(n_start, n_end + 1)\n    \n    idx1 = n - n1[0]\n    idx2 = n - n2[0]\n    y = x1[idx1] * x2[idx2]\n    \n    return y, n\n\n# Chapter 02: Example 02.02: Signal Synthesis\nfig = plt.figure(figsize=(10, 8))\n\nn = np.arange(-2, 11)\nx = np.concatenate([np.arange(1, 8), np.arange(6, 0, -1)])\n\n# a) x1(n) = 2*x(n-5) - 3*x(n+4)\nx11, n11 = sigshift(x, n, 5)\nx12, n12 = sigshift(x, n, -4)\nx1, n1 = sigadd(2*x11, n11, -3*x12, n12)\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.stem(n1, x1)\nplt.title('Sequence in Example 2.2a')\nplt.xlabel('n')\nplt.ylabel('x1(n)')\nplt.plt.plt.axis([np.min(n1)-1, np.max(n1)+1, np.min(x1)-1, np.max(x1)+1])\nax = plt.gca()\nax.set_xticks([np.min(n1), 0, np.max(n1)])\n\n# b) x2(n) = x(3-n) + x(n)*x(n-2)\nx21, n21 = sigfold(x, n)\nx21, n21 = sigshift(x21, n21, 3)\nx22, n22 = sigshift(x, n, 2)\nx22, n22 = sigmult(x, n, x22, n22)\nx2, n2 = sigadd(x21, n21, x22, n22)\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.stem(n2, x2)\nplt.title('Sequence in Example 2.2b')\nplt.xlabel('n')\nplt.ylabel('x2(n)')\nplt.plt.plt.axis([np.min(n2)-1, np.max(n2)+1, 0, 40])\nax = plt.gca()\nax.set_xticks([np.min(n2), 0, np.max(n2)])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 02: Example 02.02: Signal Synthesis\r\n\r\n%\r\n\r\nfigure(1); clf\r\n\r\nn = -2:10; x = [1:7,6:-1:1];\r\n\r\n% a) x1(n) = 2*x(n-5) - 3*x(n+4)\r\n\r\n[x11,n11] = sigshift(x,n,5); [x12,n12] = sigshift(x,n,-4);\r\n\r\n[x1,n1] = sigadd(2*x11,n11,-3*x12,n12);\r\n\r\nsubplot(2,1,1); stem(n1,x1); title('Sequence in Example 2.2a')\r\n\r\nxlabel('n'); ylabel('x1(n)'); axis([min(n1)-1,max(n1)+1,min(x1)-1,max(x1)+1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[min(n1),0,max(n1)])\r\n\r\n%\r\n\r\n% b) x2(n) = x(3-n) + x(n)*x(n-2)\r\n\r\n[x21,n21] = sigfold(x,n); [x21,n21] = sigshift(x21,n21,3);\r\n\r\n[x22,n22] = sigshift(x,n,2); [x22,n22] = sigmult(x,n,x22,n22);\r\n\r\n[x2,n2] = sigadd(x21,n21,x22,n22);\r\n\r\nsubplot(2,1,2); stem(n2,x2); title('Sequence in Example 2.2b')\r\n\r\nxlabel('n'); ylabel('x2(n)'); axis([min(n2)-1,max(n2)+1,0,40])\r\n\r\nset(gca,'XTickMode','manual','XTick',[min(n2),0,max(n2)])",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020200;
