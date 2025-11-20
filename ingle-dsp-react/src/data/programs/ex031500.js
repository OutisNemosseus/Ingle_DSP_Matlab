// ex031500
// ex031500

const ex031500 = {
  "id": "ex031500",
  "title": "ex031500",
  "displayName": "ex031500",
  "description": "ex031500",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: ex031500\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy import signal\nimport io\nimport base64\n\nb = [1]\na = [1, -0.8]\nn = np.arange(0, 101)  # 0 to 100\nx = np.cos(0.05*np.pi*n)\ny = signal.lfilter(b, a, x)\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.stem(n, x)\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.title('Input sequence')\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.stem(n, y)\nplt.xlabel('n')\nplt.ylabel('y(n)')\nplt.title('Output sequence')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "subplot(1,1,1)\r\n\r\nb = 1; a = [1,-0.8];\r\n\r\nn=[0:100];x = cos(0.05*pi*n);\r\n\r\ny = filter(b,a,x);\r\n\r\nsubplot(2,1,1); stem(n,x);\r\n\r\nxlabel('n'); ylabel('x(n)'); title('Input sequence')\r\n\r\nsubplot(2,1,2); stem(n,y);\r\n\r\nxlabel('n'); ylabel('y(n)'); title('Output sequence')\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031500"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031500;
