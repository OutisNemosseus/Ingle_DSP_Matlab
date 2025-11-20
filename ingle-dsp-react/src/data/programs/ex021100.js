// Example 2.11
// Example 2.11

const ex021100 = {
  "id": "ex021100",
  "title": "ex021100",
  "displayName": "Example 2.11",
  "description": "Example 2.11",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Example 2.11\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.signal import lfilter\nimport io\nimport base64\n\n# Helper function\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Example 2.11\n# x(n) = u(n)-u(n-10)\n# h(n) = (0.9)^n * u(n)\n# diff eqn: y(n) - 0.9y(n-1) = x(n)\n\nb = np.array([1])\na = np.array([1, -0.9])\n\nn = np.arange(-5, 51)\nx = stepseq(0, -5, 50) - stepseq(10, -5, 50)\ny = lfilter(b, a, x)\n\nfig = plt.figure(figsize=(10, 6))\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.stem(n, x)\nplt.title('Input sequence')\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.plt.plt.axis([-5, 50, -0.5, 1.5])\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.stem(n, y)\nplt.title('Output sequence')\nplt.xlabel('n')\nplt.ylabel('y(n)')\nplt.plt.plt.axis([-5, 50, -0.5, 8])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex021100;
