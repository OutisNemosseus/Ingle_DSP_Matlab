// Chapter 3 : Example 3.22
// Chapter 3 : Example 3.22

const ex032200 = {
  "id": "ex032200",
  "title": "ex032200",
  "displayName": "Chapter 3 : Example 3.22",
  "description": "Chapter 3 : Example 3.22",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 3 : Example 3.22\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.interpolate import CubicSpline\nimport io\nimport base64\n\n# Chapter 3 : Example 3.22\n# Reconstruction using cubic splines\n\n# a) Discrete-time Signal x1(n): Ts = 0.0002\nTs = 0.0002\nn = np.arange(-25, 26)  # -25 to 25\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\ncs = CubicSpline(nTs, x)\nxa = cs(t)\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error x1: {error}\")\n\n# Plots\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using cubic spline function')\nplt.plt.plt.stem(n*Ts*1000, x)\n\n# Discrete-time Signal x2(n): Ts = 0.001\nTs = 0.001\nn = np.arange(-5, 6)  # -5 to 5\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\ncs = CubicSpline(nTs, x)\nxa = cs(t)\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error x2: {error}\")\n\n# Plots\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x2(n) using cubic spline function')\nplt.plt.plt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 3 : Example 3.22\r\n\r\n%             Reconstruction using cubic splines\r\n\r\n%\r\n\r\nfigure(1); clf\r\n\r\n% a) Discrete-time Signal x1(n): Ts = 0.0002\r\n\r\nTs = 0.0002; n = -25:1:25; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = spline(nTs,x,t);\r\n\r\n% check\r\n\r\nerror = max(abs(xa - exp(-1000*abs(t))))\r\n\r\n% Plots\r\n\r\nsubplot(2,1,1);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using cubic spline function'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n%\r\n\r\n% Discrete-time Signal x2(n): Ts = 0.001\r\n\r\nTs = 0.001; n = -5:1:5; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = spline(nTs,x,t);\r\n\r\n% check\r\n\r\nerror = max(abs(xa - exp(-1000*abs(t))))\r\n\r\n% Plots\r\n\r\nsubplot(2,1,2);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x2(n) using cubic spline function'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex032200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex032200;
