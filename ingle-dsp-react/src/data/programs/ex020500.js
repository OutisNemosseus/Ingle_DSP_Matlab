// Example 2.5
// Example 2.5

const ex020500 = {
  "id": "ex020500",
  "title": "ex020500",
  "displayName": "Example 2.5",
  "description": "Example 2.5",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Example 2.5\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Helper functions\ndef stepseq(n0, n1, n2):\n    \"\"\"Generate step sequence\"\"\"\n    n = np.arange(n1, n2 + 1)\n    return (n >= n0).astype(float)\n\n# Example 2.5\n# x(n)=[u(n)-u(n-10)]; h(n)=(0.9)^n*u(n)\n# y(n)=10*(1-(0.9)^(n+1))*(u(n)-u(n-10))+(10*(1-(0.9)^10)*(0.9)^(n-9))*u(n-10)\n\nn = np.arange(-5, 51)\nu1 = stepseq(0, -5, 50)\nu2 = stepseq(10, -5, 50)\n\n# input x(n)\nx = u1 - u2\n\n# impulse response h(n)\nh = (0.9 ** n) * u1\n\nfig = plt.figure(figsize=(10, 10))\n\nplt.subplot(3, 1, 1)\nplt.plt.plt.stem(n, x)\nplt.plt.plt.axis([-5, 50, 0, 2])\nplt.title('Input Sequence')\nplt.xlabel('n')\nplt.ylabel('x(n)')\n\nplt.subplot(3, 1, 2)\nplt.plt.plt.stem(n, h)\nplt.plt.plt.axis([-5, 50, 0, 2])\nplt.title('Impulse Response')\nplt.xlabel('n')\nplt.ylabel('h(n)')\n\n# output response\ny = (10 * (1 - (0.9) ** (n + 1))) * (u1 - u2) + (10 * (1 - (0.9) ** 10) * (0.9) ** (n - 9)) * u2\n\nplt.subplot(3, 1, 3)\nplt.plt.plt.stem(n, y)\nplt.plt.plt.axis([-5, 50, 0, 8])\nplt.title('Output Sequence')\nplt.xlabel('n')\nplt.ylabel('y(n)')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex020500;
