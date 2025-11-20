// ex031300
// ex031300

const ex031300 = {
  "id": "ex031300",
  "title": "ex031300",
  "displayName": "ex031300",
  "description": "ex031300",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: ex031300\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nw = np.arange(0, 501) * np.pi/500  # [0, pi] axis divided into 501 points.\nX = np.exp(1j*w) / (np.exp(1j*w) - 0.9*np.ones(501))\nmagX = np.abs(X)\nangX = np.angle(X)\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.plt.plt.axis([0, 1, 0, 10])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|H|')\nplt.title('Magnitude Response')\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w/np.pi, angX/np.pi)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.ylabel('Phase in pi Radians')\nplt.title('Phase Response')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "w = [0:1:500]*pi/500;  % [0, pi] axis divided into 501 points.\r\n\r\nX = exp(j*w) ./ (exp(j*w) - 0.9*ones(1,501));\r\n\r\nmagX = abs(X); angX = angle(X);\r\n\r\nsubplot(2,1,1); plot(w/pi,magX); grid; axis([0,1,0,10])\r\n\r\nxlabel('frequency in pi units'); ylabel('|H|');\r\n\r\ntitle('Magnitude Response');\r\n\r\nsubplot(2,1,2); plot(w/pi,angX/pi); grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Phase in pi Radians');\r\n\r\ntitle('Phase Response');\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031300"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031300;
