// Analog Signal
// Analog Signal

const ex03180b = {
  "id": "ex03180b",
  "title": "ex03180b",
  "displayName": "Analog Signal",
  "description": "Analog Signal",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Analog Signal\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Analog Signal\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = np.exp(-1000*np.abs(t))\n\n# Discrete-time Signal\nTs = 0.001\nn = np.arange(-5, 6)  # -5 to 5\nx = np.exp(-1000*np.abs(n*Ts))\n\n# Discrete-time Fourier transform\nK = 500\nk = np.arange(0, K + 1)  # 0 to K\nw = np.pi*k/K\nX = x @ np.exp(-1j * np.outer(n, w))\nX = np.real(X)\nw = np.concatenate([-np.flip(w), w[1:]])\nX = np.concatenate([np.flip(X), X[1:]])\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('x2(n)')\nplt.title('Discrete Signal (Ts=1 msec)')\nplt.plt.plt.stem(n*Ts*1000, x)\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w/np.pi, X)\nplt.xlabel('Frequency in pi units')\nplt.ylabel('X2(w)')\nplt.title('Discrete-time Fourier Transform')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Analog Signal\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = exp(-1000*abs(t));\r\n\r\n% Discrete-time Signal\r\n\r\nTs = 0.001; n = -5:1:5;\r\n\r\nx = exp(-1000*abs(n*Ts));\r\n\r\n% Discrete-time Fourier transform\r\n\r\nK = 500; k = 0:1:K;\r\n\r\nw = pi*k/K;\r\n\r\nX = x * exp(-j*n'*w);\r\n\r\nX = real(X);\r\n\r\nw = [-fliplr(w), w(2:K+1)];\r\n\r\nX = [fliplr(X), X(2:K+1)];\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('x2(n)')\r\n\r\ntitle('Discrete Signal'); hold on\r\n\r\nstem(n*Ts*1000,x); gtext('Ts=1 msec'); hold off\r\n\r\nsubplot(2,1,2);plot(w/pi,X);\r\n\r\nxlabel('Frequency in pi units'); ylabel('X2(w)')\r\n\r\ntitle('Discrete-time Fourier Transform')\r\n\r\n\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex03180b"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex03180b;
