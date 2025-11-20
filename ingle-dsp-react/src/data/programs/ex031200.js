// signal decomposition
// signal decomposition

const ex031200 = {
  "id": "ex031200",
  "title": "ex031200",
  "displayName": "signal decomposition",
  "description": "signal decomposition",
  "category": "DSP - Chapter 03",
  "chapter": "03",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: signal decomposition\n# Chapter: 03\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\ndef evenodd(x, n):\n    \"\"\"Decompose signal into even and odd components\"\"\"\n    if np.any(n != -np.flip(n)):\n        m = np.arange(-max(abs(n)), max(abs(n)) + 1)\n        m1 = np.where(np.isin(m, n))[0]\n        m2 = np.where(np.isin(m, -n))[0]\n        x1 = np.zeros(len(m))\n        x1[m1] = x\n        x2 = np.zeros(len(m))\n        x2[m2] = x\n    else:\n        m = n\n        x1 = x\n        x2 = x\n    xe = 0.5 * (x1 + np.flip(x2))\n    xo = 0.5 * (x1 - np.flip(x2))\n    return xe, xo, m\n\nn = np.arange(-5, 11)  # -5 to 10\nx = np.sin(np.pi*n/2)\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\n# signal decomposition\nxe, xo, m = evenodd(x, n)  # even and odd parts\nXE = xe @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of xe\nXO = xo @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of xo\n\n# verification\nXR = np.real(X)  # real part of X\nerror1 = np.max(np.abs(XE - XR))  # Difference\nprint(f\"Error1: {error1}\")\n\nXI = np.imag(X)  # imag part of X\nerror2 = np.max(np.abs(XO - 1j*XI))  # Difference\nprint(f\"Error2: {error2}\")\n\n# graphical verification\nplt.subplot(2, 2, 1)\nplt.plot(w/np.pi, XR)\nplt.grid(True)\nplt.axis([-1, 1, -2, 2])\nplt.xlabel('frequency in pi units')\nplt.ylabel('Re(X)')\nplt.title('Real part of X')\n\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi, XI)\nplt.grid(True)\nplt.axis([-1, 1, -10, 10])\nplt.xlabel('frequency in pi units')\nplt.ylabel('Im(X)')\nplt.title('Imaginary part of X')\n\nplt.subplot(2, 2, 3)\nplt.plot(w/np.pi, np.real(XE))\nplt.grid(True)\nplt.axis([-1, 1, -2, 2])\nplt.xlabel('frequency in pi units')\nplt.ylabel('XE')\nplt.title('Transform of even part')\n\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi, np.imag(XO))\nplt.grid(True)\nplt.axis([-1, 1, -10, 10])\nplt.xlabel('frequency in pi units')\nplt.ylabel('XO')\nplt.title('Transform of odd part')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "n = -5:10; x = sin(pi*n/2);\r\n\r\nk = -100:100; w = (pi/100)*k;        % frequency between -pi and +pi\r\n\r\nX = x * (exp(-j*pi/100)).^(n'*k);    % DTFT of x\r\n\r\n% signal decomposition\r\n\r\n[xe,xo,m] = evenodd(x,n);            % even and odd parts\r\n\r\nXE = xe * (exp(-j*pi/100)).^(m'*k);  % DTFT of xe\r\n\r\nXO = xo * (exp(-j*pi/100)).^(m'*k);  % DTFT of xo\r\n\r\n% verification\r\n\r\nXR = real(X);                        % real part of X\r\n\r\nerror1 = max(abs(XE-XR))             % Difference\r\n\r\nXI = imag(X);                        % imag part of X\r\n\r\nerror2 = max(abs(XO-j*XI))           % Difference\r\n\r\n% graphical verification\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1); plot(w/pi,XR); grid; axis([-1,1,-2,2])\r\n\r\nxlabel('frequency in pi units'); ylabel('Re(X)');\r\n\r\ntitle('Real part of X')\r\n\r\nsubplot(2,2,2); plot(w/pi,XI); grid; axis([-1,1,-10,10])\r\n\r\nxlabel('frequency in pi units'); ylabel('Im(X)');\r\n\r\ntitle('Imaginary part of X')\r\n\r\nsubplot(2,2,3); plot(w/pi,real(XE)); grid; axis([-1,1,-2,2])\r\n\r\nxlabel('frequency in pi units'); ylabel('XE');\r\n\r\ntitle('Transform of even part')\r\n\r\nsubplot(2,2,4); plot(w/pi,imag(XO)); grid; axis([-1,1,-10,10])\r\n\r\nxlabel('frequency in pi units'); ylabel('XO');\r\n\r\ntitle('Transform of odd part')\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter03",
    "dsp",
    "ex031200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex031200;
