// Analog Signal
// Analog Signal

const ex031700 = {
  "id": "ex031700",
  "title": "ex031700",
  "displayName": "Analog Signal",
  "description": "Analog Signal",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Analog Signal\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Analog Signal\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = np.exp(-1000*np.abs(t))\n\n# Continuous-time Fourier Transform\nWmax = 2*np.pi*2000\nK = 500\nk = np.arange(0, K + 1)  # 0 to K\nW = k*Wmax/K\nXa = xa @ np.exp(-1j * np.outer(t, W)) * Dt\nXa = np.real(Xa)\nW = np.concatenate([-np.flip(W), W[1:]])  # Omega from -Wmax to Wmax\nXa = np.concatenate([np.flip(Xa), Xa[1:]])\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Analog Signal')\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(W/(2*np.pi*1000), Xa*1000)\nplt.xlabel('Frequency in KHz')\nplt.ylabel('Xa(jW)*1000')\nplt.title('Continuous-time Fourier Transform')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Analog Signal\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = exp(-1000*abs(t));\r\n\r\n%\r\n\r\n% Continuous-time Fourier Transform\r\n\r\nWmax = 2*pi*2000;\r\n\r\nK = 500; k = 0:1:K;\r\n\r\nW = k*Wmax/K;\r\n\r\nXa = xa * exp(-j*t'*W) * Dt;\r\n\r\nXa = real(Xa);\r\n\r\nW = [-fliplr(W), W(2:501)]; % Omega from -Wmax to Wmax\r\n\r\nXa = [fliplr(Xa), Xa(2:501)];\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Analog Signal')\r\n\r\nsubplot(2,1,2);plot(W/(2*pi*1000),Xa*1000);\r\n\r\nxlabel('Frequency in KHz'); ylabel('Xa(jW)*1000')\r\n\r\ntitle('Continuous-time Fourier Transform')\r\n\r\n\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031700;
