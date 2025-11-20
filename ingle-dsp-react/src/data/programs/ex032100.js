// Chapter 3 : Example 3.21
// Chapter 3 : Example 3.21

const ex032100 = {
  "id": "ex032100",
  "title": "ex032100",
  "displayName": "Chapter 3 : Example 3.21",
  "description": "Chapter 3 : Example 3.21",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 3 : Example 3.21\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3 : Example 3.21\n# Reconstruction using the stairs and plot functions\n\n# Discrete-time Signal x1(n) : Ts = 0.0002\nTs = 0.0002\nn = np.arange(-25, 26)  # -25 to 25\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction using stairs\nplt.subplot(2, 1, 1)\nplt.step(nTs*1000, x, where='post')\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using zero-order-hold')\nplt.plt.plt.stem(n*Ts*1000, x)\n\n# Analog Signal reconstruction using plot\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(nTs*1000, x)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using first-order-hold')\nplt.plt.plt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 3 : Example 3.21\r\n\r\n%             Reconstruction using the stairs and plot functions\r\n\r\n%\r\n\r\nfigure(1); clf\r\n\r\n% Discrete-time Signal x1(n) : Ts = 0.0002\r\n\r\nTs = 0.0002; n = -25:1:25; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction using stairs\r\n\r\nsubplot(2,1,1); stairs(nTs*1000,x);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using zero-order-hold'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n%\r\n\r\n% Analog Signal reconstruction using plot\r\n\r\nsubplot(2,1,2); plot(nTs*1000,x);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using first-order-hold'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex032100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex032100;
