// Chapter 3: Example 3.4:
// Chapter 3: Example 3.4:

const ex030400 = {
  "id": "ex030400",
  "title": "ex030400",
  "displayName": "Chapter 3: Example 3.4:",
  "description": "Chapter 3: Example 3.4:",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 3: Example 3.4:\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3: Example 3.4:\n# DTFT of finite duration seq using mat-vec operation\n\nn = np.arange(-1, 4)  # -1 to 3\nx = np.arange(1, 6)  # 1 to 5, sequence x(n)\nk = np.arange(0, 501)  # 0 to 500\nw = (np.pi/500) * k  # [0, np.pi] axis divided into 501 points.\n\nX = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT using matrix-vector product\n\nmagX = np.abs(X)\nangX = np.angle(X)\nrealX = np.real(X)\nimagX = np.imag(X)\n\nplt.subplot(2, 2, 1)\nplt.plt.plt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Magnitude Part')\nplt.ylabel('Magnitude')\n\nplt.subplot(2, 2, 3)\nplt.plt.plt.plot(w/np.pi, angX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Angle Part')\nplt.ylabel('Radians')\n\nplt.subplot(2, 2, 2)\nplt.plt.plt.plot(w/np.pi, realX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Real Part')\nplt.ylabel('Real')\n\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi, imagX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Imaginary Part')\nplt.ylabel('Imaginary')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 3: Example 3.4:\r\n\r\n%  DTFT of finite duration seq using mat-vec operation\r\n\r\n%\r\n\r\nn = -1:3; x = 1:5;                  % sequence x(n)\r\n\r\nk = 0:500; w = (pi/500)*k;          % [0, pi] axis divided into 501 points.\r\n\r\nX = x * (exp(-j*pi/500)) .^ (n'*k); % DTFT using matrix-vector product\r\n\r\nmagX = abs(X); angX = angle(X);\r\n\r\nrealX = real(X); imagX = imag(X);\r\n\r\nsubplot(2,2,1); plot(w/pi,magX); grid\r\n\r\nxlabel('frequency in pi units'); title('Magnitude Part'); ylabel('Magnitude')\r\n\r\nsubplot(2,2,3); plot(w/pi,angX); grid\r\n\r\nxlabel('frequency in pi units'); title('Angle Part'); ylabel('Radians')\r\n\r\nsubplot(2,2,2); plot(w/pi,realX); grid\r\n\r\nxlabel('frequency in pi units'); title('Real Part'); ylabel('Real')\r\n\r\nsubplot(2,2,4); plot(w/pi,imagX); grid\r\n\r\nxlabel('frequency in pi units'); title('Imaginary Part'); ylabel('Imaginary')\r\n\r\n%print -deps ex030400.eps",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex030400"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex030400;
