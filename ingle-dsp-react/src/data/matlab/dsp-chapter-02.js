// DSP Chapter 02 Programs
// Auto-generated from MATLAB files

const chapter02Programs = [
  {
    "id": "ex020100",
    "title": "ex020100",
    "displayName": "Chapter 02: Example 02.01: Signal Synthesis\r",
    "description": "Chapter 02: Example 02.01: Signal Synthesis\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef impseq(n0, n1, n2):\n    \"\"\"Generate impulse sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Chapter 02: Example 02.01: Signal Synthesis\nfig = plt.figure(figsize=(12, 10))\n\n# a) x(n) = 2*delta(n+2) - delta(n-4), -5<=n<=5\nn = np.arange(-5, 6)\nx = 2*impseq(-2, -5, 5) - impseq(4, -5, 5)\nplt.subplot(2, 2, 1)\nplt.stem(n, x)\nplt.title('Sequence in Example 2.1a')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([-5, 5, -2, 3])\n\n# b) x(n) = n[u(n)-u(n-10)]+10*exp(-0.3(n-10))(u(n-10)-u(n-20)); 0<=n<=20\nn = np.arange(0, 21)\nx1 = n * (stepseq(0, 0, 20) - stepseq(10, 0, 20))\nx2 = 10 * np.exp(-0.3 * (n - 10)) * (stepseq(10, 0, 20) - stepseq(20, 0, 20))\nx = x1 + x2\nplt.subplot(2, 2, 2)\nplt.stem(n, x)\nplt.title('Sequence in Example 2.1b')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([0, 20, -1, 11])\n\n# c) x(n) = cos(0.04*pi*n) + 0.2*w(n); 0<=n<=50, w(n): Gaussian (0,1)\nn = np.arange(0, 51)\nx = np.cos(0.04 * np.pi * n) + 0.2 * np.random.randn(len(n))\nplt.subplot(2, 2, 3)\nplt.stem(n, x)\nplt.title('Sequence in Example 2.1c')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([0, 50, -1.4, 1.4])\n\n# d) x(n) = {...,5,4,3,2,1,5,4,3,2,1,...}; -10<=n<=9\nn = np.arange(-10, 10)\nx = np.array([5, 4, 3, 2, 1])\nxtilde = np.tile(x, 4)\nplt.subplot(2, 2, 4)\nplt.stem(n, xtilde)\nplt.title('Sequence in Example 2.1d')\nplt.xlabel('n')\nplt.ylabel('xtilde(n)')\nplt.axis([-10, 9, -1, 6])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex020200",
    "title": "ex020200",
    "displayName": "Chapter 02: Example 02.02: Signal Synthesis\r",
    "description": "Chapter 02: Example 02.02: Signal Synthesis\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef sigshift(x, n, n0):\n    \"\"\"Shift signal x(n) by n0\"\"\"\n    return x, n + n0\n\ndef sigadd(x1, n1, x2, n2):\n    \"\"\"Add two signals\"\"\"\n    n_start = min(n1[0], n2[0])\n    n_end = max(n1[-1], n2[-1])\n    n = np.arange(n_start, n_end + 1)\n    y = np.zeros(len(n))\n    \n    idx1 = np.where((n >= n1[0]) & (n <= n1[-1]))[0]\n    idx1_orig = np.arange(len(x1))\n    y[idx1] += x1[idx1_orig]\n    \n    idx2 = np.where((n >= n2[0]) & (n <= n2[-1]))[0]\n    idx2_orig = np.arange(len(x2))\n    y[idx2] += x2[idx2_orig]\n    \n    return y, n\n\ndef sigfold(x, n):\n    \"\"\"Fold signal x(n) to get x(-n)\"\"\"\n    return np.flip(x), -np.flip(n)\n\ndef sigmult(x1, n1, x2, n2):\n    \"\"\"Multiply two signals\"\"\"\n    n_start = max(n1[0], n2[0])\n    n_end = min(n1[-1], n2[-1])\n    n = np.arange(n_start, n_end + 1)\n    \n    idx1 = n - n1[0]\n    idx2 = n - n2[0]\n    y = x1[idx1] * x2[idx2]\n    \n    return y, n\n\n# Chapter 02: Example 02.02: Signal Synthesis\nfig = plt.figure(figsize=(10, 8))\n\nn = np.arange(-2, 11)\nx = np.concatenate([np.arange(1, 8), np.arange(6, 0, -1)])\n\n# a) x1(n) = 2*x(n-5) - 3*x(n+4)\nx11, n11 = sigshift(x, n, 5)\nx12, n12 = sigshift(x, n, -4)\nx1, n1 = sigadd(2*x11, n11, -3*x12, n12)\n\nplt.subplot(2, 1, 1)\nplt.stem(n1, x1)\nplt.title('Sequence in Example 2.2a')\nplt.xlabel('n')\nplt.ylabel('x1(n)')\nplt.axis([np.min(n1)-1, np.max(n1)+1, np.min(x1)-1, np.max(x1)+1])\nax = plt.gca()\nax.set_xticks([np.min(n1), 0, np.max(n1)])\n\n# b) x2(n) = x(3-n) + x(n)*x(n-2)\nx21, n21 = sigfold(x, n)\nx21, n21 = sigshift(x21, n21, 3)\nx22, n22 = sigshift(x, n, 2)\nx22, n22 = sigmult(x, n, x22, n22)\nx2, n2 = sigadd(x21, n21, x22, n22)\n\nplt.subplot(2, 1, 2)\nplt.stem(n2, x2)\nplt.title('Sequence in Example 2.2b')\nplt.xlabel('n')\nplt.ylabel('x2(n)')\nplt.axis([np.min(n2)-1, np.max(n2)+1, 0, 40])\nax = plt.gca()\nax.set_xticks([np.min(n2), 0, np.max(n2)])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex020300",
    "title": "ex020300",
    "displayName": "Chapter 02: Example 02.03: Signal Synthesis of complex sequence\r",
    "description": "Chapter 02: Example 02.03: Signal Synthesis of complex sequence\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 02: Example 02.03: Signal Synthesis of complex sequence\nfig = plt.figure(figsize=(12, 10))\n\n# a) x(n) = exp((-0.1+j0.3)n), -10 <= n <= 10\nn = np.arange(-10, 11)\nalpha = -0.1 + 0.3j\nx = np.exp(alpha * n)\n\nplt.subplot(2, 2, 1)\nplt.stem(n, np.real(x))\nplt.title('real part')\nplt.xlabel('n')\n\nplt.subplot(2, 2, 2)\nplt.stem(n, np.imag(x))\nplt.title('imaginary part')\nplt.xlabel('n')\n\nplt.subplot(2, 2, 3)\nplt.stem(n, np.abs(x))\nplt.title('magnitude part')\nplt.xlabel('n')\n\nplt.subplot(2, 2, 4)\nplt.stem(n, (180/np.pi) * np.angle(x))\nplt.title('phase part')\nplt.xlabel('n')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 02: Example 02.03: Signal Synthesis of complex sequence\r\n\r\n%\r\n\r\nfigure(1); clf\r\n\r\n% a) x(n) = exp((-0.1+j0.3)n), -10 <= n <= 10;\r\n\r\nn = [-10:1:10]; alpha = -0.1+0.3j;\r\n\r\nx = exp(alpha*n);\r\n\r\nsubplot(2,2,1); stem(n,real(x));title('real part');xlabel('n')\r\n\r\nsubplot(2,2,2); stem(n,imag(x));title('imaginary part');xlabel('n')\r\n\r\nsubplot(2,2,3); stem(n,abs(x));title('magnitude part');xlabel('n')\r\n\r\nsubplot(2,2,4); stem(n,(180/pi)*angle(x));title('phase part');xlabel('n')\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex020300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex020400",
    "title": "ex020400",
    "displayName": "Chapter 02: Example 02.04: Even-Odd Synthesis\r",
    "description": "Chapter 02: Example 02.04: Even-Odd Synthesis\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\ndef evenodd(x, n):\n    \"\"\"Decompose signal into even and odd parts\"\"\"\n    # Extend n to be symmetric around 0\n    if n[0] > -n[-1]:\n        m = np.arange(-n[-1], n[-1] + 1)\n    else:\n        m = np.arange(n[0], -n[0] + 1)\n    \n    # Create extended signal with zeros\n    x_ext = np.zeros(len(m))\n    idx = np.where((m >= n[0]) & (m <= n[-1]))[0]\n    x_ext[idx] = x\n    \n    # Even part: (x(n) + x(-n)) / 2\n    xe = 0.5 * (x_ext + np.flip(x_ext))\n    \n    # Odd part: (x(n) - x(-n)) / 2\n    xo = 0.5 * (x_ext - np.flip(x_ext))\n    \n    return xe, xo, m\n\n# Chapter 02: Example 02.04: Even-Odd Synthesis\nfig = plt.figure(figsize=(12, 10))\n\n# x(n) = u(n)-u(n-10)\nn = np.arange(0, 11)\nx = stepseq(0, 0, 10) - stepseq(10, 0, 10)\nxe, xo, m = evenodd(x, n)\n\nplt.subplot(2, 2, 1)\nplt.stem(n, x)\nplt.title('Rectangular pulse')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([-10, 10, 0, 1.2])\n\nplt.subplot(2, 2, 2)\nplt.stem(m, xe)\nplt.title('Even Part')\nplt.xlabel('n')\nplt.ylabel('xe(n)')\nplt.axis([-10, 10, 0, 1.2])\n\nplt.subplot(2, 2, 4)\nplt.stem(m, xo)\nplt.title('Odd Part')\nplt.xlabel('n')\nplt.ylabel('xo(n)')\nplt.axis([-10, 10, -0.6, 0.6])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex020500",
    "title": "ex020500",
    "displayName": "Example 2.5\r",
    "description": "Example 2.5\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Example 2.5\n# x(n)=[u(n)-u(n-10)]; h(n)=(0.9)^n*u(n)\n# y(n)=10*(1-(0.9)^(n+1))*(u(n)-u(n-10))+(10*(1-(0.9)^10)*(0.9)^(n-9))*u(n-10)\n\nn = np.arange(-5, 51)\nu1 = stepseq(0, -5, 50)\nu2 = stepseq(10, -5, 50)\n\n# input x(n)\nx = u1 - u2\n\n# impulse response h(n)\nh = (0.9 ** n) * u1\n\nfig = plt.figure(figsize=(10, 10))\n\nplt.subplot(3, 1, 1)\nplt.stem(n, x)\nplt.axis([-5, 50, 0, 2])\nplt.title('Input Sequence')\nplt.xlabel('n')\nplt.ylabel('x(n)')\n\nplt.subplot(3, 1, 2)\nplt.stem(n, h)\nplt.axis([-5, 50, 0, 2])\nplt.title('Impulse Response')\nplt.xlabel('n')\nplt.ylabel('h(n)')\n\n# output response\ny = (10 * (1 - (0.9) ** (n + 1))) * (u1 - u2) + (10 * (1 - (0.9) ** 10) * (0.9) ** (n - 9)) * u2\n\nplt.subplot(3, 1, 3)\nplt.stem(n, y)\nplt.axis([-5, 50, 0, 8])\nplt.title('Output Sequence')\nplt.xlabel('n')\nplt.ylabel('y(n)')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Example 2.5\r\n\r\n%\r\n\r\n% x(n)=[u(n)=u(n-10]; h(n)=(0.9)^n*u(n)\r\n\r\n% y(n)=10*(1-(0.9)^(n+1))*(u(n)-u(n-10))+\r\n\r\n%       (10*(1-(0.9)^10)*(0.9)^(n-9))*u(n-10)\r\n\r\nn = -5:50;\r\n\r\nu1 = stepseq(0,-5,50); u2=stepseq(10,-5,50);\r\n\r\n% input x(n)\r\n\r\nx = u1-u2;\r\n\r\n% impulse response h(n)\r\n\r\nh = ((0.9).^n).*u1;\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1); stem(n,x); axis([-5,50,0,2])\r\n\r\ntitle('Input Sequence')\r\n\r\nxlabel('n'), ylabel('x(n)')\r\n\r\nsubplot(2,1,2); stem(n,h); axis([-5,50,0,2])\r\n\r\ntitle('Impulse Response')\r\n\r\nxlabel('n'), ylabel('h(n)'); pause\r\n\r\nprint -deps2 ex0205a.eps\r\n\r\n% output response\r\n\r\ny = (10*(1-(0.9).^(n+1))).*(u1-u2)+(10*(1-(0.9)^10)*(0.9).^(n-9)).*u2;\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,2); stem(n,y); axis([-5,50,0,8])\r\n\r\ntitle('Output Sequence')\r\n\r\nxlabel('n'), ylabel('y(n)')\r\n\r\nprint -deps2 ex0205b.eps\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex020500"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex020600",
    "title": "ex020600",
    "displayName": "Example 2.6\r",
    "description": "Example 2.6\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Example 2.6\n# x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\n# h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\n# y(n)=conv(x,h)\n\n# input x(n)\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)\n\n# impulse response h(n)\nh = np.array([2, 3, 0, -5, 2, 1])\nnh = np.arange(-1, 5)\n\nfig = plt.figure(figsize=(12, 10))\n\n# plot x(k) and h(k)\nplt.subplot(2, 2, 1)\nmarkerline, stemlines, baseline = plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.stem(nh + 0.05, h, linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(k)')\nplt.xlabel('k')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# plot x(k) and h(-k)\nplt.subplot(2, 2, 2)\nplt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.stem(-np.flip(nh) + 0.05, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(-k)')\nplt.xlabel('k')\nplt.text(-0.5, -1, 'n=0')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# plot x(k) and h(-1-k)\nplt.subplot(2, 2, 3)\nplt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.stem(-np.flip(nh) + 0.05 - 1, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(-1-k)')\nplt.xlabel('k')\nplt.text(-1.5, -1, 'n=-1')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# plot x(k) and h(2-k)\nplt.subplot(2, 2, 4)\nplt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.stem(-np.flip(nh) + 0.05 + 2, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(2-k)')\nplt.xlabel('k')\nplt.text(2 - 0.5, -1, 'n=2')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Example 2.6\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\r\n\r\n% y(n)=conv(x,h)\r\n\r\n% input x(n)\r\n\r\nx = [3,11,7,0,-1,4,2]; nx = [-3:3];\r\n\r\n% impulse response h(n)\r\n\r\nh = [2,3,0,-5,2,1]; nh = [-1:4];\r\n\r\nsubplot(1,1,1)\r\n\r\n% plot x(k) and h(k)\r\n\r\nsubplot(2,2,1); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(nh+0.05,h,':')\r\n\r\ntitle('x(k) and h(k)');xlabel('k');\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n% plot x(k) and h(-k)\r\n\r\nsubplot(2,2,2); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(-fliplr(nh)+0.05,fliplr(h),':')\r\n\r\ntitle('x(k) and h(-k)');xlabel('k');\r\n\r\ntext(-0.5,-1,'n=0')\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n% plot x(k) and h(-1-k)\r\n\r\nsubplot(2,2,3); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(-fliplr(nh)+0.05-1,fliplr(h),':')\r\n\r\ntitle('x(k) and h(-1-k)');xlabel('k');\r\n\r\ntext(-1.5,-1,'n=-1')\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n% plot x(k) and h(2-k)\r\n\r\nsubplot(2,2,4); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(-fliplr(nh)+0.05+2,fliplr(h),':')\r\n\r\ntitle('x(k) and h(2-k)');xlabel('k');\r\n\r\ntext(2-0.5,-1,'n=2')\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n%print -deps2 ex020600.eps",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex020600"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex020700",
    "title": "ex020700",
    "displayName": "Example 2.7\r",
    "description": "Example 2.7\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import numpy as np\n\n# Helper function\ndef conv_m(x, nx, h, nh):\n    \"\"\"Linear convolution with index tracking\"\"\"\n    ny_start = nx[0] + nh[0]\n    ny_end = nx[-1] + nh[-1]\n    ny = np.arange(ny_start, ny_end + 1)\n    y = np.convolve(x, h)\n    return y, ny\n\n# Example 2.7\n# x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\n# h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\n# y(n)=conv(x,h)\n\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)\nh = np.array([2, 3, 0, -5, 2, 1])\nnh = np.arange(-1, 5)\ny, ny = conv_m(x, nx, h, nh)\n\nprint(f\"y = {y}\")\nprint(f\"ny = {ny}\")\n",
    "matlabCode": "\r\n% Example 2.7\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\r\n\r\n% y(n)=conv(x,h)\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]; nx = [-3: 3];\r\n\r\nh = [2, 3, 0, -5, 2, 1]; nh = [-1: 4];\r\n\r\n[y,ny] = conv_m(x,nx,h,nh)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex020700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex020800",
    "title": "ex020800",
    "displayName": "Example 2.8\r",
    "description": "Example 2.8\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import numpy as np\nfrom scipy.linalg import toeplitz\n\n# Helper function\ndef conv_tp(h, x):\n    \"\"\"Convolution using Toeplitz matrix\"\"\"\n    # Create Toeplitz matrix from h\n    col = np.concatenate([h, np.zeros(len(x) - 1)])\n    row = np.concatenate([h[0:1], np.zeros(len(x) - 1)])\n    H = toeplitz(col, row)\n    \n    # Compute convolution\n    y = H @ x\n    \n    return y, H\n\n# Example 2.8\n# x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\n# h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\n# y(n)=conv_tp(x,h)\n\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nh = np.array([2, 3, 0, -5, 2, 1])\ny, H = conv_tp(h, x)\n\nprint(f\"y = {y}\")\nprint(f\"H = \\n{H}\")\n",
    "matlabCode": "\r\n% Example 2.8\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\r\n\r\n% y(n)=conv_tp(x,h)\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]';\r\n\r\nh = [2, 3, 0, -5, 2, 1]';\r\n\r\n[y,H] = conv_tp(h,x)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex020800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex020900",
    "title": "ex020900",
    "displayName": "Example 2.9\r",
    "description": "Example 2.9\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef sigshift(x, n, n0):\n    \"\"\"Shift signal x(n) by n0\"\"\"\n    return x, n + n0\n\ndef sigadd(x1, n1, x2, n2):\n    \"\"\"Add two signals\"\"\"\n    n_start = min(n1[0], n2[0])\n    n_end = max(n1[-1], n2[-1])\n    n = np.arange(n_start, n_end + 1)\n    y = np.zeros(len(n))\n    \n    idx1 = np.where((n >= n1[0]) & (n <= n1[-1]))[0]\n    idx1_orig = np.arange(len(x1))\n    y[idx1] += x1[idx1_orig]\n    \n    idx2 = np.where((n >= n2[0]) & (n <= n2[-1]))[0]\n    idx2_orig = np.arange(len(x2))\n    y[idx2] += x2[idx2_orig]\n    \n    return y, n\n\ndef sigfold(x, n):\n    \"\"\"Fold signal x(n) to get x(-n)\"\"\"\n    return np.flip(x), -np.flip(n)\n\ndef conv_m(x, nx, h, nh):\n    \"\"\"Linear convolution with index tracking\"\"\"\n    ny_start = nx[0] + nh[0]\n    ny_end = nx[-1] + nh[-1]\n    ny = np.arange(ny_start, ny_end + 1)\n    y = np.convolve(x, h)\n    return y, ny\n\n# Example 2.9\n# x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\n# y(n)=x(n-2)+w(n)\n# ryx = cross(y,x)\n\nfig = plt.figure(figsize=(10, 10))\n\n# noise sequence 1\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)  # given signal x(n)\n\ny, ny = sigshift(x, nx, 2)  # obtain x(n-2)\n\nw = np.random.randn(len(y))\nnw = ny  # generate w(n)\n\ny, ny = sigadd(y, ny, w, nw)  # obtain y(n) = x(n-2) + w(n)\n\nx_temp, nx_temp = sigfold(x, nx)  # obtain x(-n)\n\nrxy, nrxy = conv_m(y, ny, x_temp, nx_temp)  # cross-correlation\n\nplt.subplot(2, 1, 1)\nplt.stem(nrxy, rxy)\nplt.axis([-4, 8, -50, 250])\nplt.xlabel('lag variable l')\nplt.ylabel('rxy')\nplt.title('Crosscorrelation: noise sequence 1')\nmax_idx = np.argmax(rxy)\nplt.text(nrxy[max_idx], rxy[max_idx], 'Maximum', ha='center', va='bottom')\n\n# noise sequence 2\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)  # given signal x(n)\n\ny, ny = sigshift(x, nx, 2)  # obtain x(n-2)\n\nw = np.random.randn(len(y))\nnw = ny  # generate w(n)\n\ny, ny = sigadd(y, ny, w, nw)  # obtain y(n) = x(n-2) + w(n)\n\nx_temp, nx_temp = sigfold(x, nx)  # obtain x(-n)\n\nrxy, nrxy = conv_m(y, ny, x_temp, nx_temp)  # cross-correlation\n\nplt.subplot(2, 1, 2)\nplt.stem(nrxy, rxy)\nplt.axis([-4, 8, -50, 250])\nplt.xlabel('lag variable l')\nplt.ylabel('rxy')\nplt.title('Crosscorrelation: noise sequence 2')\nmax_idx = np.argmax(rxy)\nplt.text(nrxy[max_idx], rxy[max_idx], 'Maximum', ha='center', va='bottom')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Example 2.9\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% y(n)=x(n-2)+w(n)\r\n\r\n% ryx = cross(y,x)\r\n\r\n%\r\n\r\n% noise sequence 1\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]; nx=[-3:3]; % given signal x(n)\r\n\r\n[y,ny] = sigshift(x,nx,2);              % obtain x(n-2)\r\n\r\nw = randn(1,length(y)); nw = ny;        % generate w(n)\r\n\r\n[y,ny] = sigadd(y,ny,w,nw);             % obtain y(n) = x(n-2) + w(n)\r\n\r\n[x,nx] = sigfold(x,nx);                 % obtain x(-n)\r\n\r\n[rxy,nrxy] = conv_m(y,ny,x,nx);         % cross-corrlation\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1);stem(nrxy,rxy)\r\n\r\naxis([-4,8,-50,250]);xlabel('lag variable l')\r\n\r\nylabel('rxy');title('Crosscorrelation: noise sequence 1')\r\n\r\ngtext('Maximum')\r\n\r\n%\r\n\r\n% noise sequence 2\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]; nx=[-3:3]; % given signal x(n)\r\n\r\n[y,ny] = sigshift(x,nx,2);              % obtain x(n-2)\r\n\r\nw = randn(1,length(y)); nw = ny;        % generate w(n)\r\n\r\n[y,ny] = sigadd(y,ny,w,nw);             % obtain y(n) = x(n-2) + w(n)\r\n\r\n[x,nx] = sigfold(x,nx);                 % obtain x(-n)\r\n\r\n[rxy,nrxy] = conv_m(y,ny,x,nx);         % cross-corrlation\r\n\r\nsubplot(2,1,2);stem(nrxy,rxy)\r\n\r\ngtext('Maximum')\r\n\r\naxis([-4,8,-50,250]);xlabel('lag variable l')\r\n\r\nylabel('rxy');title('Crosscorrelation: noise sequence 2')",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex020900"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex021000",
    "title": "ex021000",
    "displayName": "Matlab Example 2.10; Chapter 2\r",
    "description": "Matlab Example 2.10; Chapter 2\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.signal import lfilter\nimport io\nimport base64\n\n# Helper functions\ndef impseq(n0, n1, n2):\n    \"\"\"Generate impulse sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Matlab Example 2.10; Chapter 2\na = np.array([1, -1, 0.9])\nb = np.array([1])\n\nfig = plt.figure(figsize=(10, 10))\n\n# Part a) Impulse Response\nx = impseq(0, -20, 120)\nn = np.arange(-20, 121)\nh = lfilter(b, a, x)\n\nplt.subplot(2, 1, 1)\nplt.stem(n, h)\nplt.axis([-20, 120, -1.1, 1.1])\nplt.title('Impulse Response')\nplt.xlabel('n')\nplt.ylabel('h(n)')\n\n# Part b) Step Response\nx = stepseq(0, -20, 120)\ns = lfilter(b, a, x)\n\nplt.subplot(2, 1, 2)\nplt.stem(n, s)\nplt.axis([-20, 120, -0.5, 2.5])\nplt.title('Step Response')\nplt.xlabel('n')\nplt.ylabel('s(n)')\n\n# Part c) Stability analysis\nsum_abs_h = np.sum(np.abs(h))\nz = np.roots(a)\nmagz = np.abs(z)\n\nprint(f\"Sum of |h(n)| = {sum_abs_h}\")\nprint(f\"Roots of denominator: {z}\")\nprint(f\"Magnitude of roots: {magz}\")\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Matlab Example 2.10; Chapter 2\r\n\r\n%\r\n\r\na=[1,-1,0.9];b=1;\r\n\r\n% Part a)\r\n\r\nx=impseq(0,-20,120);n=[-20:120];\r\n\r\nh=filter(b,a,x);\r\n\r\nsubplot(2,1,1);stem(n,h)\r\n\r\naxis([-20,120,-1.1,1.1])\r\n\r\ntitle('Impulse Response');xlabel('n');ylabel('h(n)')\r\n\r\n%\r\n\r\n% Part b)\r\n\r\nx=stepseq(0,-20,120);\r\n\r\ns=filter(b,a,x);\r\n\r\nsubplot(2,1,2);stem(n,s)\r\n\r\naxis([-20,120,-.5,2.5])\r\n\r\ntitle('Step Response');xlabel('n');ylabel('s(n)')\r\n\r\n%\r\n\r\n%print -deps2 ex021000.eps\r\n\r\n%\r\n\r\n% Part c)\r\n\r\nsum(abs(h))\r\n\r\nz=roots(a);\r\n\r\nmagz=abs(z)\r\n\r\nsubplot\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex021000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex021100",
    "title": "ex021100",
    "displayName": "Example 2.11\r",
    "description": "Example 2.11\r",
    "category": "DSP - Chapter 02",
    "chapter": "02",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.signal import lfilter\nimport io\nimport base64\n\n# Helper function\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Example 2.11\n# x(n) = u(n)-u(n-10)\n# h(n) = (0.9)^n * u(n)\n# diff eqn: y(n) - 0.9y(n-1) = x(n)\n\nb = np.array([1])\na = np.array([1, -0.9])\n\nn = np.arange(-5, 51)\nx = stepseq(0, -5, 50) - stepseq(10, -5, 50)\ny = lfilter(b, a, x)\n\nfig = plt.figure(figsize=(10, 6))\n\nplt.subplot(2, 1, 1)\nplt.stem(n, x)\nplt.title('Input sequence')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.axis([-5, 50, -0.5, 1.5])\n\nplt.subplot(2, 1, 2)\nplt.stem(n, y)\nplt.title('Output sequence')\nplt.xlabel('n')\nplt.ylabel('y(n)')\nplt.axis([-5, 50, -0.5, 8])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Example 2.11\r\n\r\n%\r\n\r\n% x(n) = u(n)-u(n-10)\r\n\r\n% h(n) = (0.9)^n * u(n)\r\n\r\n% diff eqn: y(n) - 0.9y(n-1) = x(n)\r\n\r\n%\r\n\r\nb = [1]; a = [1,-0.9];\r\n\r\nn = -5:50; x = stepseq(0,-5,50) - stepseq(10,-5,50);\r\n\r\ny = filter(b,a,x);\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,1,2); stem(n,y); title('Output sequence')\r\n\r\nxlabel('n'); ylabel('y(n)'); axis([-5,50,-0.5,8])\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter02",
      "dsp",
      "ex021100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  }
]

export default chapter02Programs
