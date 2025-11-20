// ex030600
// ex030600

const ex030600 = {
  "id": "ex030600",
  "title": "ex030600",
  "displayName": "ex030600",
  "description": "ex030600",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: ex030600\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nn = np.arange(-5, 6)  # -5 to 5\nx = (-0.9)**n\nk = np.arange(-200, 201)  # -200 to 200\nw = (np.pi/100)*k\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))\nmagX = np.abs(X)\nangX = np.angle(X)\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.plt.plt.axis([-2, 2, 0, 15])\nplt.xlabel('frequency in units of pi')\nplt.ylabel('|X|')\nplt.title('Magnitude Part')\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w/np.pi, angX/np.pi)\nplt.grid(True)\nplt.plt.plt.axis([-2, 2, -1, 1])\nplt.xlabel('frequency in units of pi')\nplt.ylabel('radians/pi')\nplt.title('Angle Part')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "subplot(1,1,1)\r\n\r\nn = -5:5; x = (-0.9).^n;\r\n\r\nk = -200:200; w = (pi/100)*k;\r\n\r\nX = x * (exp(-j*pi/100)) .^ (n'*k);\r\n\r\nmagX = abs(X); angX =angle(X);\r\n\r\nsubplot(2,1,1); plot(w/pi,magX);grid\r\n\r\naxis([-2,2,0,15])\r\n\r\nxlabel('frequency in units of pi'); ylabel('|X|')\r\n\r\ntitle('Magnitude Part')\r\n\r\nsubplot(2,1,2); plot(w/pi,angX)/pi;grid\r\n\r\naxis([-2,2,-1,1])\r\n\r\nxlabel('frequency in units of pi'); ylabel('radians/pi')\r\n\r\ntitle('Angle Part')\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex030600"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex030600;
