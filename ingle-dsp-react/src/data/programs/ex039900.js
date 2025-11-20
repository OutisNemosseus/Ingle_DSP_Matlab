// ex039900
// ex039900

const ex039900 = {
  "id": "ex039900",
  "title": "ex039900",
  "displayName": "ex039900",
  "description": "ex039900",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: ex039900\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nw = np.arange(-100, 101) * np.pi/100  # frequency between -pi and +pi\n\nN = 5\nX1 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nN = 15\nX2 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nN = 25\nX3 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nN = 100\nX4 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nplt.subplot(2, 2, 1)\nplt.plt.plt.plot(w/np.pi, X1)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=5')\n\nplt.subplot(2, 2, 2)\nplt.plt.plt.plot(w/np.pi, X2)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=15')\n\nplt.subplot(2, 2, 3)\nplt.plt.plt.plot(w/np.pi, X3)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=25')\n\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi, X4)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=100')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "w = [-100:100]*pi/100; % frequency between -pi and +pi\r\n\r\nN = 5;\r\n\r\nX1 = sin((w+eps)*N/2)./sin((w+eps)/2);\r\n\r\nN = 15;\r\n\r\nX2 = sin((w+eps)*N/2)./sin((w+eps)/2);\r\n\r\nN = 25;\r\n\r\nX3 = sin((w+eps)*N/2)./sin((w+eps)/2);\r\n\r\nN = 100;\r\n\r\nX4 = sin((w+eps)*N/2)./sin((w+eps)/2);\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,2,1);plot(w/pi,X1);grid\r\n\r\nxlabel('frequency in pi units');title('N=5')\r\n\r\nsubplot(2,2,2);plot(w/pi,X2);grid\r\n\r\nxlabel('frequency in pi units');title('N=15')\r\n\r\nsubplot(2,2,3);plot(w/pi,X3);grid\r\n\r\nxlabel('frequency in pi units');title('N=25')\r\n\r\nsubplot(2,2,4);plot(w/pi,X4);grid\r\n\r\nxlabel('frequency in pi units');title('N=100')\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex039900"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex039900;
