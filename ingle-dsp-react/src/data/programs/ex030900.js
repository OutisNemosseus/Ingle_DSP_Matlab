// ex030900
// ex030900

const ex030900 = {
  "id": "ex030900",
  "title": "ex030900",
  "displayName": "ex030900",
  "description": "ex030900",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nn = np.arange(0, 101)  # 0 to 100\nx = np.cos(np.pi*n/2)\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\ny = np.exp(1j*np.pi*n/4) * x  # signal multiplied by np.exp(1j*pi*n/4)\nY = y @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of y\n\n# Graphical verification\nplt.subplot(2, 2, 1)\nplt.plt.plt.plot(w/np.pi, np.abs(X))\nplt.grid(True)\nplt.plt.plt.axis([-1, 1, 0, 60])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|X|')\nplt.title('Magnitude of X')\n\nplt.subplot(2, 2, 2)\nplt.plt.plt.plot(w/np.pi, np.angle(X)/np.pi)\nplt.grid(True)\nplt.plt.plt.axis([-1, 1, -1, 1])\nplt.xlabel('frequency in pi units')\nplt.ylabel('radians/pi')\nplt.title('Angle of X')\n\nplt.subplot(2, 2, 3)\nplt.plt.plt.plot(w/np.pi, np.abs(Y))\nplt.grid(True)\nplt.plt.plt.axis([-1, 1, 0, 60])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|Y|')\nplt.title('Magnitude of Y')\n\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi, np.angle(Y)/np.pi)\nplt.grid(True)\nplt.plt.plt.axis([-1, 1, -1, 1])\nplt.xlabel('frequency in pi units')\nplt.ylabel('radians/pi')\nplt.title('Angle of Y')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "n = 0:100; x = cos(pi*n/2);\r\n\r\nk = -100:100; w = (pi/100)*k;        % frequency between -pi and +pi\r\n\r\nX = x * (exp(-j*pi/100)).^(n'*k);    % DTFT of x\r\n\r\n%\r\n\r\ny = exp(j*pi*n/4).*x;                % signal multiplied by exp(j*pi*n/4)\r\n\r\nY = y * (exp(-j*pi/100)).^(n'*k);    % DTFT of y\r\n\r\n% Graphical verification\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1); plot(w/pi,abs(X)); grid; axis([-1,1,0,60])\r\n\r\nxlabel('frequency in pi units'); ylabel('|X|')\r\n\r\ntitle('Magnitude of X')\r\n\r\nsubplot(2,2,2); plot(w/pi,angle(X)/pi); grid; axis([-1,1,-1,1])\r\n\r\nxlabel('frequency in pi units'); ylabel('radiands/pi')\r\n\r\ntitle('Angle of X')\r\n\r\nsubplot(2,2,3); plot(w/pi,abs(Y)); grid; axis([-1,1,0,60])\r\n\r\nxlabel('frequency in pi units'); ylabel('|Y|')\r\n\r\ntitle('Magnitude of Y')\r\n\r\nsubplot(2,2,4); plot(w/pi,angle(Y)/pi); grid; axis([-1,1,-1,1])\r\n\r\nxlabel('frequency in pi units'); ylabel('radians/pi')\r\n\r\ntitle('Angle of Y')\r\n\r\n\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex030900"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex030900;
