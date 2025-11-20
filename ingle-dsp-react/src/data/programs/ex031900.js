// Chapter 3 : Example 3.19
// Chapter 3 : Example 3.19

const ex031900 = {
  "id": "ex031900",
  "title": "ex031900",
  "displayName": "Chapter 3 : Example 3.19",
  "description": "Chapter 3 : Example 3.19",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 3 : Example 3.19\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3 : Example 3.19\n# Reconstruction using sinc function\n\n# Discrete-time Signal x1(n)\nTs = 0.0002\nFs = 1/Ts\nn = np.arange(-25, 26)  # -25 to 25\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = x @ np.sinc(Fs * (np.ones((len(nTs), 1)) @ t.reshape(1, -1) - nTs.reshape(-1, 1) @ np.ones((1, len(t)))))\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error: {error}\")\n\n# Plots\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using sinc function')\nplt.plt.plt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 3 : Example 3.19\r\n\r\n%             Reconstruction using sinc function\r\n\r\n%\r\n\r\n% Discrete-time Signal x1(n)\r\n\r\nTs = 0.0002; Fs = 1/Ts; n = -25:1:25; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = x * sinc(Fs*(ones(length(nTs),1)*t-nTs'*ones(1,length(t))));\r\n\r\n% check\r\n\r\nerror = max(abs(xa - exp(-1000*abs(t))))\r\n\r\n% Plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,2);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using sinc function'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031900"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031900;
