// ex031600
// ex031600

const ex031600 = {
  "id": "ex031600",
  "title": "ex031600",
  "displayName": "ex031600",
  "description": "ex031600",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: ex031600\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nb = np.array([0.0181, 0.0543, 0.0543, 0.0181])\na = np.array([1.0000, -1.7600, 1.1829, -0.2781])\nm = np.arange(0, len(b))  # 0 to len(b)-1\nl = np.arange(0, len(a))  # 0 to len(a)-1\nK = 500\nk = np.arange(1, K + 1)  # 1 to K\nw = np.pi*k/K  # [0, pi] axis divided into 500 points.\n\nnum = b @ np.exp(-1j * np.outer(m, w))  # Numerator calculations\nden = a @ np.exp(-1j * np.outer(l, w))  # Denominator calculations\nH = num / den\nmagH = np.abs(H)\nangH = np.angle(H)\n\nplt.subplot(2, 1, 1)\nplt.plt.plt.plot(w/np.pi, magH)\nplt.grid(True)\nplt.plt.plt.axis([0, 1, 0, 1])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|H|')\nplt.title('Magnitude Response')\n\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w/np.pi, angH/np.pi)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.ylabel('Phase in pi Radians')\nplt.title('Phase Response')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "b = [0.0181,  0.0543, 0.0543,  0.0181];\r\n\r\na = [1.0000, -1.7600, 1.1829, -0.2781];\r\n\r\nm = 0:length(b)-1; l = 0:length(a)-1;\r\n\r\nK = 500; k = 1:1:K;\r\n\r\nw = pi*k/K;  % [0, pi] axis divided into 501 points.\r\n\r\nnum = b * exp(-j*m'*w); % Numerator calculations\r\n\r\nden = a * exp(-j*l'*w); % Denominator calculations\r\n\r\nH = num ./ den;\r\n\r\nmagH = abs(H); angH = angle(H);\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,1,1); plot(w/pi,magH); grid; axis([0,1,0,1])\r\n\r\nxlabel('frequency in pi units'); ylabel('|H|');\r\n\r\ntitle('Magnitude Response');\r\n\r\nsubplot(2,1,2); plot(w/pi,angH/pi); grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Phase in pi Radians');\r\n\r\ntitle('Phase Response');\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031600"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031600;
