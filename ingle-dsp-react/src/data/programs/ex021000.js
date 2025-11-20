// Matlab Example 2.10; Chapter 2
// Matlab Example 2.10; Chapter 2

const ex021000 = {
  "id": "ex021000",
  "title": "ex021000",
  "displayName": "Matlab Example 2.10; Chapter 2",
  "description": "Matlab Example 2.10; Chapter 2",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Matlab Example 2.10; Chapter 2\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.signal import lfilter\nimport io\nimport base64\n\n# Helper functions\ndef impseq(n0, n1, n2):\n    \"\"\"Generate impulse sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Matlab Example 2.10; Chapter 2\na = np.array([1, -1, 0.9])\nb = np.array([1])\n\nfig = plt.figure(figsize=(10, 10))\n\n# Part a) Impulse Response\nx = impseq(0, -20, 120)\nn = np.arange(-20, 121)\nh = lfilter(b, a, x)\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.stem(n, h)\nplt.plt.plt.axis([-20, 120, -1.1, 1.1])\nplt.title('Impulse Response')\nplt.xlabel('n')\nplt.ylabel('h(n)')\n\n# Part b) Step Response\nx = stepseq(0, -20, 120)\ns = lfilter(b, a, x)\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.stem(n, s)\nplt.plt.plt.axis([-20, 120, -0.5, 2.5])\nplt.title('Step Response')\nplt.xlabel('n')\nplt.ylabel('s(n)')\n\n# Part c) Stability analysis\nsum_abs_h = np.sum(np.abs(h))\nz = np.roots(a)\nmagz = np.abs(z)\n\nprint(f\"Sum of |h(n)| = {sum_abs_h}\")\nprint(f\"Roots of denominator: {z}\")\nprint(f\"Magnitude of roots: {magz}\")\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex021000;
