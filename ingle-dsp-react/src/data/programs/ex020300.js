// Chapter 02: Example 02.03: Signal Synthesis of complex sequence
// Chapter 02: Example 02.03: Signal Synthesis of complex sequence

const ex020300 = {
  "id": "ex020300",
  "title": "ex020300",
  "displayName": "Chapter 02: Example 02.03: Signal Synthesis of complex sequence",
  "description": "Chapter 02: Example 02.03: Signal Synthesis of complex sequence",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 02: Example 02.03: Signal Synthesis of complex sequence\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 02: Example 02.03: Signal Synthesis of complex sequence\nfig = plt.figure(figsize=(12, 10))\n\n# a) x(n) = np.exp((-0.1+j0.3)n), -10 <= n <= 10\nn = np.arange(-10, 11)\nalpha = -0.1 + 0.3j\nx = np.exp(alpha * n)\n\nplt.subplot(2, 2, 1)\nplt.plt.plt.stem(n, np.real(x))\nplt.title('real part')\nplt.xlabel('n')\n\nplt.subplot(2, 2, 2)\nplt.plt.plt.stem(n, np.imag(x))\nplt.title('imaginary part')\nplt.xlabel('n')\n\nplt.subplot(2, 2, 3)\nplt.plt.plt.stem(n, np.abs(x))\nplt.title('magnitude part')\nplt.xlabel('n')\n\nplt.subplot(2, 2, 4)\nplt.plt.plt.stem(n, (180/np.pi) * np.angle(x))\nplt.title('phase part')\nplt.xlabel('n')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex020300;
