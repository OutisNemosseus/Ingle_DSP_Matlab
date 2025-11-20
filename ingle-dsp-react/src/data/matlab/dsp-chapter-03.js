// DSP Chapter 03 Programs
// Auto-generated from MATLAB files

const chapter03Programs = [
  {
    "id": "ex030300",
    "title": "ex030300",
    "displayName": "ex030300",
    "description": "ex030300",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nw = np.arange(0, 501) * np.pi/500  # [0, np.pi] axis divided into 501 points.\n\nX = np.exp(1j*w) / (np.exp(1j*w) - 0.5*np.ones(501))\nmagX = np.abs(X)\nangX = np.angle(X)\nrealX = np.real(X)\nimagX = np.imag(X)\n\nplt.subplot(2, 2, 1)\nplt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Magnitude Part')\nplt.ylabel('Magnitude')\n\nplt.subplot(2, 2, 3)\nplt.plot(w/np.pi, angX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Angle Part')\nplt.ylabel('Radians')\n\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi, realX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Real Part')\nplt.ylabel('Real')\n\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi, imagX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Imaginary Part')\nplt.ylabel('Imaginary')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "w = [0:1:500]*pi/500;  % [0, pi] axis divided into 501 points.\r\n\r\nX = exp(j*w) ./ (exp(j*w) - 0.5*ones(1,501));\r\n\r\nmagX = abs(X); angX = angle(X);\r\n\r\nrealX = real(X); imagX = imag(X);\r\n\r\nsubplot(2,2,1); plot(w/pi,magX); grid\r\n\r\nxlabel('frequency in pi units'); title('Magnitude Part'); ylabel('Magnitude')\r\n\r\nsubplot(2,2,3); plot(w/pi,angX); grid\r\n\r\nxlabel('frequency in pi units'); title('Angle Part'); ylabel('Radians')\r\n\r\nsubplot(2,2,2); plot(w/pi,realX); grid\r\n\r\nxlabel('frequency in pi units'); title('Real Part'); ylabel('Real')\r\n\r\nsubplot(2,2,4); plot(w/pi,imagX); grid\r\n\r\nxlabel('frequency in pi units'); title('Imaginary Part'); ylabel('Imaginary')\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex030300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex030400",
    "title": "ex030400",
    "displayName": "Chapter 3: Example 3.4:\r",
    "description": "Chapter 3: Example 3.4:\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3: Example 3.4:\n# DTFT of finite duration seq using mat-vec operation\n\nn = np.arange(-1, 4)  # -1 to 3\nx = np.arange(1, 6)  # 1 to 5, sequence x(n)\nk = np.arange(0, 501)  # 0 to 500\nw = (np.pi/500) * k  # [0, np.pi] axis divided into 501 points.\n\nX = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT using matrix-vector product\n\nmagX = np.abs(X)\nangX = np.angle(X)\nrealX = np.real(X)\nimagX = np.imag(X)\n\nplt.subplot(2, 2, 1)\nplt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Magnitude Part')\nplt.ylabel('Magnitude')\n\nplt.subplot(2, 2, 3)\nplt.plot(w/np.pi, angX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Angle Part')\nplt.ylabel('Radians')\n\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi, realX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Real Part')\nplt.ylabel('Real')\n\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi, imagX)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('Imaginary Part')\nplt.ylabel('Imaginary')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex030500",
    "title": "ex030500",
    "displayName": "ex030500",
    "description": "ex030500",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nn = np.arange(0, 11)  # 0 to 10\nx = (0.9*np.exp(1j*np.pi/3))**n\nk = np.arange(-200, 201)  # -200 to 200\nw = (np.pi/100)*k\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))\nmagX = np.abs(X)\nangX = np.angle(X)\n\nplt.subplot(2, 1, 1)\nplt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.axis([-2, 2, 0, 8])\nplt.xlabel('frequency in units of pi')\nplt.ylabel('|X|')\nplt.title('Magnitude Part')\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, angX/np.pi)\nplt.grid(True)\nplt.axis([-2, 2, -1, 1])\nplt.xlabel('frequency in units of pi')\nplt.ylabel('radians/pi')\nplt.title('Angle Part')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "subplot(1,1,1)\r\n\r\nn = 0:10; x = (0.9*exp(j*pi/3)).^n;\r\n\r\nk = -200:200; w = (pi/100)*k;\r\n\r\nX = x * (exp(-j*pi/100)) .^ (n'*k);\r\n\r\nmagX = abs(X); angX =angle(X);\r\n\r\nsubplot(2,1,1); plot(w/pi,magX);grid\r\n\r\naxis([-2,2,0,8])\r\n\r\nxlabel('frequency in units of pi'); ylabel('|X|')\r\n\r\ntitle('Magnitude Part')\r\n\r\nsubplot(2,1,2); plot(w/pi,angX/pi);grid\r\n\r\naxis([-2,2,-1,1])\r\n\r\nxlabel('frequency in units of pi'); ylabel('radians/pi')\r\n\r\ntitle('Angle Part')\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex030500"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex030600",
    "title": "ex030600",
    "displayName": "ex030600",
    "description": "ex030600",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nn = np.arange(-5, 6)  # -5 to 5\nx = (-0.9)**n\nk = np.arange(-200, 201)  # -200 to 200\nw = (np.pi/100)*k\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))\nmagX = np.abs(X)\nangX = np.angle(X)\n\nplt.subplot(2, 1, 1)\nplt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.axis([-2, 2, 0, 15])\nplt.xlabel('frequency in units of pi')\nplt.ylabel('|X|')\nplt.title('Magnitude Part')\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, angX/np.pi)\nplt.grid(True)\nplt.axis([-2, 2, -1, 1])\nplt.xlabel('frequency in units of pi')\nplt.ylabel('radians/pi')\nplt.title('Angle Part')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex030700",
    "title": "ex030700",
    "displayName": "verification\r",
    "description": "verification\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import numpy as np\n\nx1 = np.random.rand(11)\nx2 = np.random.rand(11)\nn = np.arange(0, 11)  # 0 to 10\nalpha = 2\nbeta = 3\nk = np.arange(0, 501)  # 0 to 500\nw = (np.pi/500)*k\n\nX1 = x1 @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x1\nX2 = x2 @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x2\n\nx = alpha*x1 + beta*x2  # Linear combination of x1 & x2\nX = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x\n\n# verification\nX_check = alpha*X1 + beta*X2  # Linear Combination of X1 & X2\nerror = np.max(np.abs(X - X_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
    "matlabCode": "x1 = rand(1,11); x2 = rand(1,11); n = 0:10;\r\n\r\nalpha = 2; beta = 3;\r\n\r\nk = 0:500; w = (pi/500)*k;\r\n\r\nX1 = x1 * (exp(-j*pi/500)).^(n'*k);  % DTFT of x1\r\n\r\nX2 = x2 * (exp(-j*pi/500)).^(n'*k);  % DTFT of x2\r\n\r\nx = alpha*x1 + beta*x2;              % Linear combination of x1 & x2\r\n\r\nX = x * (exp(-j*pi/500)).^(n'*k);    % DTFT of x\r\n\r\n% verification\r\n\r\nX_check = alpha*X1 + beta*X2;        % Linear Combination of X1 & X2\r\n\r\nerror = max(abs(X-X_check))          % Difference\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex030700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex030800",
    "title": "ex030800",
    "displayName": "signal shifted by two samples\r",
    "description": "signal shifted by two samples\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import numpy as np\n\nx = np.random.rand(11)\nn = np.arange(0, 11)  # 0 to 10\nk = np.arange(0, 501)  # 0 to 500\nw = (np.pi/500)*k\n\nX = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x\n\n# signal shifted by two samples\ny = x\nm = n + 2\nY = y @ (np.exp(-1j*np.pi/500) ** np.outer(m, k))  # DTFT of y\n\n# verification\nY_check = (np.exp(-1j*2*w)) * X  # multiplication by exp(-j2w)\nerror = np.max(np.abs(Y - Y_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
    "matlabCode": "x = rand(1,11); n = 0:10;\r\n\r\nk = 0:500; w = (pi/500)*k;\r\n\r\nX = x * (exp(-j*pi/500)).^(n'*k);    % DTFT of x\r\n\r\n% signal shifted by two samples\r\n\r\ny = x; m = n+2;\r\n\r\nY = y * (exp(-j*pi/500)).^(m'*k);    % DTFT of y\r\n\r\n% verification\r\n\r\nY_check = (exp(-j*2).^w).*X;         % multiplication by exp(-j2w)\r\n\r\nerror = max(abs(Y-Y_check))          % Difference\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex030800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex030900",
    "title": "ex030900",
    "displayName": "",
    "description": "",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nn = np.arange(0, 101)  # 0 to 100\nx = np.cos(np.pi*n/2)\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\ny = np.exp(1j*np.pi*n/4) * x  # signal multiplied by exp(j*pi*n/4)\nY = y @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of y\n\n# Graphical verification\nplt.subplot(2, 2, 1)\nplt.plot(w/np.pi, np.abs(X))\nplt.grid(True)\nplt.axis([-1, 1, 0, 60])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|X|')\nplt.title('Magnitude of X')\n\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi, np.angle(X)/np.pi)\nplt.grid(True)\nplt.axis([-1, 1, -1, 1])\nplt.xlabel('frequency in pi units')\nplt.ylabel('radians/pi')\nplt.title('Angle of X')\n\nplt.subplot(2, 2, 3)\nplt.plot(w/np.pi, np.abs(Y))\nplt.grid(True)\nplt.axis([-1, 1, 0, 60])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|Y|')\nplt.title('Magnitude of Y')\n\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi, np.angle(Y)/np.pi)\nplt.grid(True)\nplt.axis([-1, 1, -1, 1])\nplt.xlabel('frequency in pi units')\nplt.ylabel('radians/pi')\nplt.title('Angle of Y')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex031000",
    "title": "ex031000",
    "displayName": "conjugation property\r",
    "description": "conjugation property\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import numpy as np\n\nn = np.arange(-5, 11)  # -5 to 10\nx = np.random.rand(len(n)) + 1j*np.random.rand(len(n))\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\n# conjugation property\ny = np.conj(x)  # signal conjugation\nY = y @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of y\n\n# verification\nY_check = np.conj(np.flip(X))  # conj(X(-w))\nerror = np.max(np.abs(Y - Y_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
    "matlabCode": "n = -5:10; x = rand(1,length(n)) + j*rand(1,length(n));\r\n\r\nk = -100:100; w = (pi/100)*k;        % frequency between -pi and +pi\r\n\r\nX = x * (exp(-j*pi/100)).^(n'*k);    % DTFT of x\r\n\r\n% conjugation property\r\n\r\ny = conj(x);                         % signal conjugation\r\n\r\nY = y * (exp(-j*pi/100)).^(n'*k);    % DTFT of y\r\n\r\n% verification\r\n\r\nY_check = conj(fliplr(X));           % conj(X(-w))\r\n\r\nerror = max(abs(Y-Y_check))          % Difference\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex031000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex031100",
    "title": "ex031100",
    "displayName": "folding property\r",
    "description": "folding property\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import numpy as np\n\nn = np.arange(-5, 11)  # -5 to 10\nx = np.random.rand(len(n))\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\n# folding property\ny = np.flip(x)\nm = -np.flip(n)  # signal folding\nY = y @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of y\n\n# verification\nY_check = np.flip(X)  # X(-w)\nerror = np.max(np.abs(Y - Y_check))  # Difference\n\nprint(f\"Error: {error}\")\n",
    "matlabCode": "n = -5:10; x = rand(1,length(n));\r\n\r\nk = -100:100; w = (pi/100)*k;        % frequency between -pi and +pi\r\n\r\nX = x * (exp(-j*pi/100)).^(n'*k);    % DTFT of x\r\n\r\n% folding property\r\n\r\ny = fliplr(x); m = -fliplr(n);       % signal folding\r\n\r\nY = y * (exp(-j*pi/100)).^(m'*k);    % DTFT of y\r\n\r\n% verification\r\n\r\nY_check = fliplr(X);                 % X(-w)\r\n\r\nerror = max(abs(Y-Y_check))          % Difference\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex031100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex031200",
    "title": "ex031200",
    "displayName": "signal decomposition\r",
    "description": "signal decomposition\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\ndef evenodd(x, n):\n    \"\"\"Decompose signal into even and odd components\"\"\"\n    if np.any(n != -np.flip(n)):\n        m = np.arange(-max(abs(n)), max(abs(n)) + 1)\n        m1 = np.where(np.isin(m, n))[0]\n        m2 = np.where(np.isin(m, -n))[0]\n        x1 = np.zeros(len(m))\n        x1[m1] = x\n        x2 = np.zeros(len(m))\n        x2[m2] = x\n    else:\n        m = n\n        x1 = x\n        x2 = x\n    xe = 0.5 * (x1 + np.flip(x2))\n    xo = 0.5 * (x1 - np.flip(x2))\n    return xe, xo, m\n\nn = np.arange(-5, 11)  # -5 to 10\nx = np.sin(np.pi*n/2)\nk = np.arange(-100, 101)  # -100 to 100\nw = (np.pi/100)*k  # frequency between -pi and +pi\n\nX = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x\n\n# signal decomposition\nxe, xo, m = evenodd(x, n)  # even and odd parts\nXE = xe @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of xe\nXO = xo @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of xo\n\n# verification\nXR = np.real(X)  # real part of X\nerror1 = np.max(np.abs(XE - XR))  # Difference\nprint(f\"Error1: {error1}\")\n\nXI = np.imag(X)  # imag part of X\nerror2 = np.max(np.abs(XO - 1j*XI))  # Difference\nprint(f\"Error2: {error2}\")\n\n# graphical verification\nplt.subplot(2, 2, 1)\nplt.plot(w/np.pi, XR)\nplt.grid(True)\nplt.axis([-1, 1, -2, 2])\nplt.xlabel('frequency in pi units')\nplt.ylabel('Re(X)')\nplt.title('Real part of X')\n\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi, XI)\nplt.grid(True)\nplt.axis([-1, 1, -10, 10])\nplt.xlabel('frequency in pi units')\nplt.ylabel('Im(X)')\nplt.title('Imaginary part of X')\n\nplt.subplot(2, 2, 3)\nplt.plot(w/np.pi, np.real(XE))\nplt.grid(True)\nplt.axis([-1, 1, -2, 2])\nplt.xlabel('frequency in pi units')\nplt.ylabel('XE')\nplt.title('Transform of even part')\n\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi, np.imag(XO))\nplt.grid(True)\nplt.axis([-1, 1, -10, 10])\nplt.xlabel('frequency in pi units')\nplt.ylabel('XO')\nplt.title('Transform of odd part')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex031300",
    "title": "ex031300",
    "displayName": "ex031300",
    "description": "ex031300",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nw = np.arange(0, 501) * np.pi/500  # [0, pi] axis divided into 501 points.\nX = np.exp(1j*w) / (np.exp(1j*w) - 0.9*np.ones(501))\nmagX = np.abs(X)\nangX = np.angle(X)\n\nplt.subplot(2, 1, 1)\nplt.plot(w/np.pi, magX)\nplt.grid(True)\nplt.axis([0, 1, 0, 10])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|H|')\nplt.title('Magnitude Response')\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, angX/np.pi)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.ylabel('Phase in pi Radians')\nplt.title('Phase Response')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex031500",
    "title": "ex031500",
    "displayName": "ex031500",
    "description": "ex031500",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy import signal\nimport io\nimport base64\n\nb = [1]\na = [1, -0.8]\nn = np.arange(0, 101)  # 0 to 100\nx = np.cos(0.05*np.pi*n)\ny = signal.lfilter(b, a, x)\n\nplt.subplot(2, 1, 1)\nplt.stem(n, x)\nplt.xlabel('n')\nplt.ylabel('x(n)')\nplt.title('Input sequence')\n\nplt.subplot(2, 1, 2)\nplt.stem(n, y)\nplt.xlabel('n')\nplt.ylabel('y(n)')\nplt.title('Output sequence')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "subplot(1,1,1)\r\n\r\nb = 1; a = [1,-0.8];\r\n\r\nn=[0:100];x = cos(0.05*pi*n);\r\n\r\ny = filter(b,a,x);\r\n\r\nsubplot(2,1,1); stem(n,x);\r\n\r\nxlabel('n'); ylabel('x(n)'); title('Input sequence')\r\n\r\nsubplot(2,1,2); stem(n,y);\r\n\r\nxlabel('n'); ylabel('y(n)'); title('Output sequence')\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex031500"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex031600",
    "title": "ex031600",
    "displayName": "ex031600",
    "description": "ex031600",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nb = np.array([0.0181, 0.0543, 0.0543, 0.0181])\na = np.array([1.0000, -1.7600, 1.1829, -0.2781])\nm = np.arange(0, len(b))  # 0 to len(b)-1\nl = np.arange(0, len(a))  # 0 to len(a)-1\nK = 500\nk = np.arange(1, K + 1)  # 1 to K\nw = np.pi*k/K  # [0, pi] axis divided into 500 points.\n\nnum = b @ np.exp(-1j * np.outer(m, w))  # Numerator calculations\nden = a @ np.exp(-1j * np.outer(l, w))  # Denominator calculations\nH = num / den\nmagH = np.abs(H)\nangH = np.angle(H)\n\nplt.subplot(2, 1, 1)\nplt.plot(w/np.pi, magH)\nplt.grid(True)\nplt.axis([0, 1, 0, 1])\nplt.xlabel('frequency in pi units')\nplt.ylabel('|H|')\nplt.title('Magnitude Response')\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, angH/np.pi)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.ylabel('Phase in pi Radians')\nplt.title('Phase Response')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex031700",
    "title": "ex031700",
    "displayName": "Analog Signal\r",
    "description": "Analog Signal\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Analog Signal\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = np.exp(-1000*np.abs(t))\n\n# Continuous-time Fourier Transform\nWmax = 2*np.pi*2000\nK = 500\nk = np.arange(0, K + 1)  # 0 to K\nW = k*Wmax/K\nXa = xa @ np.exp(-1j * np.outer(t, W)) * Dt\nXa = np.real(Xa)\nW = np.concatenate([-np.flip(W), W[1:]])  # Omega from -Wmax to Wmax\nXa = np.concatenate([np.flip(Xa), Xa[1:]])\n\nplt.subplot(2, 1, 1)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Analog Signal')\n\nplt.subplot(2, 1, 2)\nplt.plot(W/(2*np.pi*1000), Xa*1000)\nplt.xlabel('Frequency in KHz')\nplt.ylabel('Xa(jW)*1000')\nplt.title('Continuous-time Fourier Transform')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex031800",
    "title": "ex031800",
    "displayName": "Analog Signal\r",
    "description": "Analog Signal\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Analog Signal\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = np.exp(-1000*np.abs(t))\n\n# Discrete-time Signal\nTs = 0.001\nn = np.arange(-5, 6)  # -5 to 5\nx = np.exp(-1000*np.abs(n*Ts))\n\n# Discrete-time Fourier transform\nK = 500\nk = np.arange(0, K + 1)  # 0 to K\nw = np.pi*k/K\nX = x @ np.exp(-1j * np.outer(n, w))\nX = np.real(X)\nw = np.concatenate([-np.flip(w), w[1:]])\nX = np.concatenate([np.flip(X), X[1:]])\n\nplt.subplot(2, 1, 1)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Discrete Signal')\nplt.stem(n*Ts*1000, x)\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, X)\nplt.xlabel('Frequency in pi units')\nplt.ylabel('X(w)')\nplt.title('Discrete-time Fourier Transform')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Analog Signal\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = exp(-1000*abs(t));\r\n\r\n% Discrete-time Signal\r\n\r\nTs = 0.001; n = -5:1:5;\r\n\r\nx = exp(-1000*abs(n*Ts));\r\n\r\n% Discrete-time Fourier transform\r\n\r\nK = 500; k = 0:1:K;\r\n\r\nw = pi*k/K;\r\n\r\nX = x * exp(-j*n'*w);\r\n\r\nX = real(X);\r\n\r\nw = [-fliplr(w), w(2:K+1)];\r\n\r\nX = [fliplr(X), X(2:K+1)];\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Discrete Signal'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\nsubplot(2,1,2);plot(w/pi,X);\r\n\r\nxlabel('Frequency in pi units'); ylabel('X(w)')\r\n\r\ntitle('Discrete-time Fourier Transform')\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex031800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex03180a",
    "title": "ex03180a",
    "displayName": "Analog Signal\r",
    "description": "Analog Signal\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Analog Signal\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = np.exp(-1000*np.abs(t))\n\n# Discrete-time Signal\nTs = 0.0002\nn = np.arange(-25, 26)  # -25 to 25\nx = np.exp(-1000*np.abs(n*Ts))\n\n# Discrete-time Fourier transform\nK = 500\nk = np.arange(0, K + 1)  # 0 to K\nw = np.pi*k/K\nX = x @ np.exp(-1j * np.outer(n, w))\nX = np.real(X)\nw = np.concatenate([-np.flip(w), w[1:]])\nX = np.concatenate([np.flip(X), X[1:]])\n\nplt.subplot(2, 1, 1)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('x1(n)')\nplt.title('Discrete Signal (Ts=0.2 msec)')\nplt.stem(n*Ts*1000, x)\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, X)\nplt.xlabel('Frequency in pi units')\nplt.ylabel('X1(w)')\nplt.title('Discrete-time Fourier Transform')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Analog Signal\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = exp(-1000*abs(t));\r\n\r\n% Discrete-time Signal\r\n\r\nTs = 0.0002; n = -25:1:25;\r\n\r\nx = exp(-1000*abs(n*Ts));\r\n\r\n% Discrete-time Fourier transform\r\n\r\nK = 500; k = 0:1:K;\r\n\r\nw = pi*k/K;\r\n\r\nX = x * exp(-j*n'*w);\r\n\r\nX = real(X);\r\n\r\nw = [-fliplr(w), w(2:K+1)];\r\n\r\nX = [fliplr(X), X(2:K+1)];\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('x1(n)')\r\n\r\ntitle('Discrete Signal'); hold on\r\n\r\nstem(n*Ts*1000,x); gtext('Ts=0.2 msec'); hold off\r\n\r\nsubplot(2,1,2);plot(w/pi,X);\r\n\r\nxlabel('Frequency in pi units'); ylabel('X1(w)')\r\n\r\ntitle('Discrete-time Fourier Transform')\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex03180a"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex03180b",
    "title": "ex03180b",
    "displayName": "Analog Signal\r",
    "description": "Analog Signal\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Analog Signal\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = np.exp(-1000*np.abs(t))\n\n# Discrete-time Signal\nTs = 0.001\nn = np.arange(-5, 6)  # -5 to 5\nx = np.exp(-1000*np.abs(n*Ts))\n\n# Discrete-time Fourier transform\nK = 500\nk = np.arange(0, K + 1)  # 0 to K\nw = np.pi*k/K\nX = x @ np.exp(-1j * np.outer(n, w))\nX = np.real(X)\nw = np.concatenate([-np.flip(w), w[1:]])\nX = np.concatenate([np.flip(X), X[1:]])\n\nplt.subplot(2, 1, 1)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('x2(n)')\nplt.title('Discrete Signal (Ts=1 msec)')\nplt.stem(n*Ts*1000, x)\n\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi, X)\nplt.xlabel('Frequency in pi units')\nplt.ylabel('X2(w)')\nplt.title('Discrete-time Fourier Transform')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex031900",
    "title": "ex031900",
    "displayName": "Chapter 3 : Example 3.19\r",
    "description": "Chapter 3 : Example 3.19\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3 : Example 3.19\n# Reconstruction using sinc function\n\n# Discrete-time Signal x1(n)\nTs = 0.0002\nFs = 1/Ts\nn = np.arange(-25, 26)  # -25 to 25\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = x @ np.sinc(Fs * (np.ones((len(nTs), 1)) @ t.reshape(1, -1) - nTs.reshape(-1, 1) @ np.ones((1, len(t)))))\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error: {error}\")\n\n# Plots\nplt.subplot(2, 1, 2)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using sinc function')\nplt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 3 : Example 3.19\r\n\r\n%             Reconstruction using sinc function\r\n\r\n%\r\n\r\n% Discrete-time Signal x1(n)\r\n\r\nTs = 0.0002; Fs = 1/Ts; n = -25:1:25; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = x * sinc(Fs*(ones(length(nTs),1)*t-nTs'*ones(1,length(t))));\r\n\r\n% check\r\n\r\nerror = max(abs(xa - exp(-1000*abs(t))))\r\n\r\n% Plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,2);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using sinc function'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex031900"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex032000",
    "title": "ex032000",
    "displayName": "Chapter 3 : Example 3.20\r",
    "description": "Chapter 3 : Example 3.20\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3 : Example 3.20\n# Reconstruction and aliasing using sinc function\n\n# Discrete-time Signal x2(n)\nTs = 0.001\nFs = 1/Ts\nn = np.arange(-5, 6)  # -5 to 5\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\nxa = x @ np.sinc(Fs * (np.ones((len(nTs), 1)) @ t.reshape(1, -1) - nTs.reshape(-1, 1) @ np.ones((1, len(t)))))\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error: {error}\")\n\n# Plots\nplt.subplot(2, 1, 2)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x2(n) using sinc function')\nplt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 3 : Example 3.20\r\n\r\n%             Reconstruction and aliasing using sinc function\r\n\r\n%\r\n\r\n% Discrete-time Signal x1(n)\r\n\r\nTs = 0.001; Fs = 1/Ts; n = -5:1:5; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = x * sinc(Fs*(ones(length(nTs),1)*t-nTs'*ones(1,length(t))));\r\n\r\n% check\r\n\r\nerror = max(abs(xa - exp(-1000*abs(t))))\r\n\r\n% Plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,2);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x2(n) using sinc function'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex032000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex032100",
    "title": "ex032100",
    "displayName": "Chapter 3 : Example 3.21\r",
    "description": "Chapter 3 : Example 3.21\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 3 : Example 3.21\n# Reconstruction using the stairs and plot functions\n\n# Discrete-time Signal x1(n) : Ts = 0.0002\nTs = 0.0002\nn = np.arange(-25, 26)  # -25 to 25\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction using stairs\nplt.subplot(2, 1, 1)\nplt.step(nTs*1000, x, where='post')\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using zero-order-hold')\nplt.stem(n*Ts*1000, x)\n\n# Analog Signal reconstruction using plot\nplt.subplot(2, 1, 2)\nplt.plot(nTs*1000, x)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using first-order-hold')\nplt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 3 : Example 3.21\r\n\r\n%             Reconstruction using the stairs and plot functions\r\n\r\n%\r\n\r\nfigure(1); clf\r\n\r\n% Discrete-time Signal x1(n) : Ts = 0.0002\r\n\r\nTs = 0.0002; n = -25:1:25; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction using stairs\r\n\r\nsubplot(2,1,1); stairs(nTs*1000,x);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using zero-order-hold'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n%\r\n\r\n% Analog Signal reconstruction using plot\r\n\r\nsubplot(2,1,2); plot(nTs*1000,x);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x1(n) using first-order-hold'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex032100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex032200",
    "title": "ex032200",
    "displayName": "Chapter 3 : Example 3.22\r",
    "description": "Chapter 3 : Example 3.22\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.interpolate import CubicSpline\nimport io\nimport base64\n\n# Chapter 3 : Example 3.22\n# Reconstruction using cubic splines\n\n# a) Discrete-time Signal x1(n): Ts = 0.0002\nTs = 0.0002\nn = np.arange(-25, 26)  # -25 to 25\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\ncs = CubicSpline(nTs, x)\nxa = cs(t)\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error x1: {error}\")\n\n# Plots\nplt.subplot(2, 1, 1)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x1(n) using cubic spline function')\nplt.stem(n*Ts*1000, x)\n\n# Discrete-time Signal x2(n): Ts = 0.001\nTs = 0.001\nn = np.arange(-5, 6)  # -5 to 5\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\ncs = CubicSpline(nTs, x)\nxa = cs(t)\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error x2: {error}\")\n\n# Plots\nplt.subplot(2, 1, 2)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x2(n) using cubic spline function')\nplt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  },
  {
    "id": "ex032300",
    "title": "ex032300",
    "displayName": "Chapter 3 : Example 3.21\r",
    "description": "Chapter 3 : Example 3.21\r",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.interpolate import CubicSpline\nimport io\nimport base64\n\n# Chapter 3 : Example 3.23\n# Reconstruction and aliasing using cubic splines\n\n# Discrete-time Signal x2(n)\nTs = 0.001\nn = np.arange(-5, 6)  # -5 to 5\nnTs = n*Ts\nx = np.exp(-1000*np.abs(nTs))\n\n# Analog Signal reconstruction\nDt = 0.00005\nt = np.arange(-0.005, 0.005 + Dt, Dt)\ncs = CubicSpline(nTs, x)\nxa = cs(t)\n\n# check\nerror = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))\nprint(f\"Error: {error}\")\n\n# Plots\nplt.subplot(2, 1, 2)\nplt.plot(t*1000, xa)\nplt.xlabel('t in msec.')\nplt.ylabel('xa(t)')\nplt.title('Reconstructed Signal from x2(n)')\nplt.stem(n*Ts*1000, x)\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 3 : Example 3.21\r\n\r\n%             Reconstruction and aliasing using cubic splines\r\n\r\n%\r\n\r\n% Discrete-time Signal x2(n)\r\n\r\nTs = 0.001; n = -5:1:5; nTs = n*Ts;\r\n\r\nx = exp(-1000*abs(nTs));\r\n\r\n% Analog Signal reconstruction\r\n\r\nDt = 0.00005;\r\n\r\nt = -0.005:Dt:0.005;\r\n\r\nxa = spline(nTs,x,t);\r\n\r\n% check\r\n\r\nerror = max(abs(xa - exp(-1000*abs(t))))\r\n\r\n% Plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,2);plot(t*1000,xa);\r\n\r\nxlabel('t in msec.'); ylabel('xa(t)')\r\n\r\ntitle('Reconstructed Signal from x2(n)'); hold on\r\n\r\nstem(n*Ts*1000,x); hold off\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter03",
      "dsp",
      "ex032300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex039900",
    "title": "ex039900",
    "displayName": "ex039900",
    "description": "ex039900",
    "category": "DSP - Chapter 03",
    "chapter": "03",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\nw = np.arange(-100, 101) * np.pi/100  # frequency between -pi and +pi\n\nN = 5\nX1 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nN = 15\nX2 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nN = 25\nX3 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nN = 100\nX4 = np.sin((w + np.finfo(float).eps) * N/2) / np.sin((w + np.finfo(float).eps)/2)\n\nplt.subplot(2, 2, 1)\nplt.plot(w/np.pi, X1)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=5')\n\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi, X2)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=15')\n\nplt.subplot(2, 2, 3)\nplt.plot(w/np.pi, X3)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=25')\n\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi, X4)\nplt.grid(True)\nplt.xlabel('frequency in pi units')\nplt.title('N=100')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
  }
]

export default chapter03Programs
