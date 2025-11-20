// DSP Chapter 07 Programs
// Auto-generated from MATLAB files

const chapter07Programs = [
  {
    "id": "ex070300",
    "title": "ex070300",
    "displayName": "Chapter 7: Example 7.3 Amplitude vs Magnitude response\r",
    "description": "Chapter 7: Example 7.3 Amplitude vs Magnitude response\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.3 Amplitude vs Magnitude response\r\n\r\n# h = [1,1,1]\nw = [0:500]*np.pi/500\nH = freqz(h,1,w)\nmagH = np.abs(H); phaH = angle(H)\nampH = ones(1,501)+2*np.cos(w); angH = -w\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n plt.plot(w/np.pi,magH)\n plt.title('Magnitude Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('|H|')\n grid\r\n\r\nplt.xlim(0, 1)\nplt.ylim(-1.5, 3.5)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0])\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(w/np.pi,phaH/np.pi)\n plt.title('Piecewise Linear Phase Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('angle in np.pi units')\n grid\r\n\r\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6667;0;0.3333])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0';' 2/3'])\r\n\r\nplt.subplot(2, 2, 2)\n plt.plot(w/np.pi,ampH)\n plt.title('Amplitude Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\n grid\r\n\r\nplt.xlim(0, 1)\nplt.ylim(-1.5, 3.5)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0])\r\n\r\nplt.subplot(2, 2, 4)\n plt.plot(w/np.pi,angH/np.pi)\n plt.title('Linear Phase Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('angle in np.pi units')\n grid\r\n\r\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6667;0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0'])\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.3 Amplitude vs Magnitude response\r\n\r\n%\r\n\r\nh = [1,1,1];\r\n\r\nw = [0:500]*pi/500;\r\n\r\nH = freqz(h,1,w);\r\n\r\nmagH = abs(H); phaH = angle(H);\r\n\r\nampH = ones(1,501)+2*cos(w); angH = -w;\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1); plot(w/pi,magH); title('Magnitude Response');\r\n\r\nxlabel('frequency in pi units'); ylabel('|H|'); grid\r\n\r\naxis([0 1 -1.5 3.5]);\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0])\r\n\r\nsubplot(2,2,3); plot(w/pi,phaH/pi); title('Piecewise Linear Phase Response');\r\n\r\nxlabel('frequency in pi units'); ylabel('angle in pi units'); grid\r\n\r\naxis([0 1 -1 1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6667;0;0.3333])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0';' 2/3'])\r\n\r\nsubplot(2,2,2); plot(w/pi,ampH); title('Amplitude Response');\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr'); grid\r\n\r\naxis([0 1 -1.5 3.5])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0])\r\n\r\nsubplot(2,2,4); plot(w/pi,angH/pi); title('Linear Phase Response');\r\n\r\nxlabel('frequency in pi units'); ylabel('angle in pi units'); grid\r\n\r\naxis([0 1 -1 1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6667;0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0'])\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex070400",
    "title": "ex070400",
    "displayName": "Chapter 7: Example 7.4 Type-1 Linear phase FIR filter\r",
    "description": "Chapter 7: Example 7.4 Type-1 Linear phase FIR filter\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.4 Type-1 Linear phase FIR filter\r\n\r\n# plt.subplot(1, 1, 1)\nh = [-4,1,-1,-2,5,6,5,-2,-1,1,-4]\nM = len(h); n = 0:M-1\n[Hr,w,a,L] = Hr_Type1(h)\namax = np.max(a)+1; amin = np.min(a)-1\nplt.subplot(2, 2, 1)\n stem(n,h); plt.xlim(-1, 2*L+1)\nplt.ylim(amin, amax)\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.title('Impulse Response')\nplt.subplot(2, 2, 3)\n stemnp.arange(0, L,a + 1); plt.xlim(-1, 2*L+1)\nplt.ylim(amin, amax)\nplt.xlabel('n')\n plt.ylabel('a(n)')\n plt.title('a(n) coefficients')\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,Hr)\ngrid\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.title('Type-1 Amplitude Response')\nplt.subplot(2, 2, 4)\npzplotz(h,1)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.4 Type-1 Linear phase FIR filter\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\nh = [-4,1,-1,-2,5,6,5,-2,-1,1,-4];\r\n\r\nM = length(h); n = 0:M-1;\r\n\r\n[Hr,w,a,L] = Hr_Type1(h);\r\n\r\namax = max(a)+1; amin = min(a)-1;\r\n\r\nsubplot(2,2,1); stem(n,h); axis([-1 2*L+1 amin amax])\r\n\r\nxlabel('n'); ylabel('h(n)'); title('Impulse Response')\r\n\r\nsubplot(2,2,3); stem(0:L,a); axis([-1 2*L+1 amin amax])\r\n\r\nxlabel('n'); ylabel('a(n)'); title('a(n) coefficients')\r\n\r\nsubplot(2,2,2);plot(w/pi,Hr);grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\ntitle('Type-1 Amplitude Response')\r\n\r\nsubplot(2,2,4);pzplotz(h,1)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070400"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex070500",
    "title": "ex070500",
    "displayName": "Chapter 7: Example 7.5 Type-2 Linear phase FIR filter\r",
    "description": "Chapter 7: Example 7.5 Type-2 Linear phase FIR filter\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.5 Type-2 Linear phase FIR filter\r\n\r\n# plt.subplot(1, 1, 1)\nh = [-4,1,-1,-2,5,6,6,5,-2,-1,1,-4]\nM = len(h); n = 0:M-1\n[Hr,w,b,L] = Hr_Type2(h)\nbmax = np.max(b)+1; bmin = np.min(b)-1\nplt.subplot(2, 2, 1)\n stem(n,h); plt.xlim(-1, 2*L+1)\nplt.ylim(bmin, bmax)\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.title('Impulse Response')\nplt.subplot(2, 2, 3)\n stemnp.arange(1, L,b + 1); plt.xlim(-1, 2*L+1)\nplt.ylim(bmin, bmax)\nplt.xlabel('n')\n plt.ylabel('b(n)')\n plt.title('b(n) coefficients')\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,Hr)\ngrid\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.title('Type-2 Amplitude Response')\nplt.subplot(2, 2, 4)\npzplotz(h,1)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.5 Type-2 Linear phase FIR filter\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\nh = [-4,1,-1,-2,5,6,6,5,-2,-1,1,-4];\r\n\r\nM = length(h); n = 0:M-1;\r\n\r\n[Hr,w,b,L] = Hr_Type2(h);\r\n\r\nbmax = max(b)+1; bmin = min(b)-1;\r\n\r\nsubplot(2,2,1); stem(n,h); axis([-1 2*L+1 bmin bmax])\r\n\r\nxlabel('n'); ylabel('h(n)'); title('Impulse Response')\r\n\r\nsubplot(2,2,3); stem(1:L,b); axis([-1 2*L+1 bmin bmax])\r\n\r\nxlabel('n'); ylabel('b(n)'); title('b(n) coefficients')\r\n\r\nsubplot(2,2,2);plot(w/pi,Hr);grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\ntitle('Type-2 Amplitude Response')\r\n\r\nsubplot(2,2,4);pzplotz(h,1)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070500"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex070600",
    "title": "ex070600",
    "displayName": "Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\r",
    "description": "Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\r\n\r\n# plt.subplot(1, 1, 1)\nh = [-4,1,-1,-2,5,0,-5,2,1,-1,4]\nM = len(h); n = 0:M-1\n[Hr,w,c,L] = Hr_Type3(h)\ncmax = np.max(c)+1; cmin = np.min(c)-1\nplt.subplot(2, 2, 1)\n stem(n,h); plt.xlim(-1, 2*L+1)\nplt.ylim(cmin, cmax)\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.title('Impulse Response')\nplt.subplot(2, 2, 3)\n stemnp.arange(0, L,c + 1); plt.xlim(-1, 2*L+1)\nplt.ylim(cmin, cmax)\nplt.xlabel('n')\n plt.ylabel('c(n)')\n plt.title('c(n) coefficients')\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,Hr)\ngrid\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.title('Type-3 Amplitude Response')\nplt.subplot(2, 2, 4)\npzplotz(h,1)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\nh = [-4,1,-1,-2,5,0,-5,2,1,-1,4];\r\n\r\nM = length(h); n = 0:M-1;\r\n\r\n[Hr,w,c,L] = Hr_Type3(h);\r\n\r\ncmax = max(c)+1; cmin = min(c)-1;\r\n\r\nsubplot(2,2,1); stem(n,h); axis([-1 2*L+1 cmin cmax])\r\n\r\nxlabel('n'); ylabel('h(n)'); title('Impulse Response')\r\n\r\nsubplot(2,2,3); stem(0:L,c); axis([-1 2*L+1 cmin cmax])\r\n\r\nxlabel('n'); ylabel('c(n)'); title('c(n) coefficients')\r\n\r\nsubplot(2,2,2);plot(w/pi,Hr);grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\ntitle('Type-3 Amplitude Response')\r\n\r\nsubplot(2,2,4);pzplotz(h,1)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070600"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex070700",
    "title": "ex070700",
    "displayName": "Chapter 7: Example 7.7 Type-4 Linear phase FIR filter\r",
    "description": "Chapter 7: Example 7.7 Type-4 Linear phase FIR filter\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.7 Type-4 Linear phase FIR filter\r\n\r\n# plt.subplot(1, 1, 1)\nh = [-4,1,-1,-2,5,6,-6,-5,2,1,-1,4]\nM = len(h); n = 0:M-1\n[Hr,w,d,L] = Hr_Type4(h)\ndmax = np.max(d)+1; dmin = np.min(d)-1\nplt.subplot(2, 2, 1)\n stem(n,h); plt.xlim(-1, 2*L+1)\nplt.ylim(dmin, dmax)\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.title('Impulse Response')\nplt.subplot(2, 2, 3)\n stemnp.arange(1, L,d + 1); plt.xlim(-1, 2*L+1)\nplt.ylim(dmin, dmax)\nplt.xlabel('n')\n plt.ylabel('d(n)')\n plt.title('d(n) coefficients')\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,Hr)\ngrid\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.title('Type-4 Amplitude Response')\nplt.subplot(2, 2, 4)\npzplotz(h,1)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.7 Type-4 Linear phase FIR filter\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\nh = [-4,1,-1,-2,5,6,-6,-5,2,1,-1,4];\r\n\r\nM = length(h); n = 0:M-1;\r\n\r\n[Hr,w,d,L] = Hr_Type4(h);\r\n\r\ndmax = max(d)+1; dmin = min(d)-1;\r\n\r\nsubplot(2,2,1); stem(n,h); axis([-1 2*L+1 dmin dmax])\r\n\r\nxlabel('n'); ylabel('h(n)'); title('Impulse Response')\r\n\r\nsubplot(2,2,3); stem(1:L,d); axis([-1 2*L+1 dmin dmax])\r\n\r\nxlabel('n'); ylabel('d(n)'); title('d(n) coefficients')\r\n\r\nsubplot(2,2,2);plot(w/pi,Hr);grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\ntitle('Type-4 Amplitude Response')\r\n\r\nsubplot(2,2,4);pzplotz(h,1)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex070800",
    "title": "ex070800",
    "displayName": "Chapter 07: Example 7.8 Lowpass filter design - Hamming window\r",
    "description": "Chapter 07: Example 7.8 Lowpass filter design - Hamming window\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.8 Lowpass filter design - Hamming window\r\n\r\n# wp = 0.2*np.pi; ws = 0.3*np.pi\ntr_width = ws - wp\r\n\r\nM = ceil(6.6*np.pi/tr_width) + 1\r\n\r\nn=[0:1:M-1]\nwc = (ws+wp)/2\r\n\r\nhd = ideal_lp(wc,M)\nw_ham = (hamming(M))'\nh = hd * w_ham\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000\nRp = -(np.min(dbnp.arange(1, wp/delta_w+1 + 1, 1)))        # Passband Ripple\r\n\r\nAs = -round(np.max(dbnp.arange(ws/delta_w+1, 501 + 1, 1))) # Min Stopband attenuation\r\n\r\n# plots\r\n\r\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stem(n,hd); plt.title('Ideal Impulse Response')\naxis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n stem(n,w_ham);plt.title('Hamming Window')\naxis([0 M-1 0 1.1]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n stem(n,h);plt.title('Actual Impulse Response')\naxis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\n plt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\ngrid\r\n\r\naxis([0 1 -100 10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 07: Example 7.8 Lowpass filter design - Hamming window\r\n\r\n%\r\n\r\nwp = 0.2*pi; ws = 0.3*pi;\r\n\r\ntr_width = ws - wp\r\n\r\nM = ceil(6.6*pi/tr_width) + 1\r\n\r\nn=[0:1:M-1];\r\n\r\nwc = (ws+wp)/2\r\n\r\nhd = ideal_lp(wc,M);\r\n\r\nw_ham = (hamming(M))';\r\n\r\nh = hd .* w_ham;\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w = 2*pi/1000;\r\n\r\nRp = -(min(db(1:1:wp/delta_w+1)))        % Passband Ripple\r\n\r\nAs = -round(max(db(ws/delta_w+1:1:501))) % Min Stopband attenuation\r\n\r\n% plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([0 M-1 -0.1 0.3]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_ham);title('Hamming Window')\r\n\r\naxis([0 M-1 0 1.1]); xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([0 M-1 -0.1 0.3]); xlabel('n'); ylabel('h(n)')\r\n\r\nsubplot(2,2,4); plot(w/pi,db);title('Magnitude Response in dB');grid\r\n\r\naxis([0 1 -100 10]); xlabel('frequency in pi units'); ylabel('Decibels')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex070900",
    "title": "ex070900",
    "displayName": "Chapter 07: Example 7.9 Lowpass filter design - Kaiser window\r",
    "description": "Chapter 07: Example 7.9 Lowpass filter design - Kaiser window\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.9 Lowpass filter design - Kaiser window\r\n\r\n# wp = 0.2*np.pi; ws = 0.3*np.pi; As = 50\ntr_width = ws - wp\nM = ceil((As-7.95)/(14.36*tr_width/(2*np.pi))+1) + 1\r\n\r\nn=[0:1:M-1]\nbeta = 0.1102*(As-8.7)\r\n\r\nwc = (ws+wp)/2\nhd = ideal_lp(wc,M)\nw_kai = (kaiser(M,beta))'\nh = hd * w_kai\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000\nAs = -round(np.max(dbnp.arange(ws/delta_w+1, 501 + 1, 1))) # Min Stopband Attenuation\r\n\r\n# Plots\r\n\r\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stem(n,hd); plt.title('Ideal Impulse Response')\naxis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n stem(n,w_kai);plt.title('Kaiser Window')\naxis([0 M-1 0 1.1]);  plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n stem(n,h);plt.title('Actual Impulse Response')\naxis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\ngrid\r\n\r\naxis([0 1 -100 10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 07: Example 7.9 Lowpass filter design - Kaiser window\r\n\r\n%\r\n\r\nwp = 0.2*pi; ws = 0.3*pi; As = 50;\r\n\r\ntr_width = ws - wp;\r\n\r\nM = ceil((As-7.95)/(14.36*tr_width/(2*pi))+1) + 1\r\n\r\nn=[0:1:M-1];\r\n\r\nbeta = 0.1102*(As-8.7)\r\n\r\nwc = (ws+wp)/2;\r\n\r\nhd = ideal_lp(wc,M);\r\n\r\nw_kai = (kaiser(M,beta))';\r\n\r\nh = hd .* w_kai;\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w = 2*pi/1000;\r\n\r\nAs = -round(max(db(ws/delta_w+1:1:501))) % Min Stopband Attenuation\r\n\r\n% Plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([0 M-1 -0.1 0.3]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_kai);title('Kaiser Window')\r\n\r\naxis([0 M-1 0 1.1]);  xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([0 M-1 -0.1 0.3]); xlabel('n'); ylabel('h(n)')\r\n\r\nsubplot(2,2,4);plot(w/pi,db);title('Magnitude Response in dB');grid\r\n\r\naxis([0 1 -100 10]); xlabel('frequency in pi units'); ylabel('Decibels')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex070900"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071000",
    "title": "ex071000",
    "displayName": "Chapter 07: Example 7.10 Bandpass filter design - Blackman window\r",
    "description": "Chapter 07: Example 7.10 Bandpass filter design - Blackman window\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.10 Bandpass filter design - Blackman window\r\n\r\n# ws1 = 0.2*np.pi; wp1 = 0.35*np.pi\nwp2 = 0.65*np.pi; ws2 = 0.8*np.pi\nAs = 60\ntr_width = np.min((wp1-ws1),(ws2-wp2))\r\n\r\nM = ceil(11*np.pi/tr_width) + 1 # ;M=68\r\n\r\nn=[0:1:M-1]\nwc1 = (ws1+wp1)/2; wc2 = (wp2+ws2)/2\nhd = ideal_lp(wc2,M) - ideal_lp(wc1,M)\nw_bla = (blackman(M))'\nh = hd * w_bla\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000\nRp = -np.min(dbnp.arange(wp1/delta_w+1, wp2/delta_w + 1, 1)) # Actua; Passband Ripple\r\n\r\nAs = -round(np.max(dbnp.arange(ws2/delta_w+1, 501 + 1, 1))) # Min Stopband Attenuation\r\n\r\n# plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n stem(n,hd); plt.title('Ideal Impulse Response')\naxis([0 M-1 -0.4 0.5]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n stem(n,w_bla);plt.title('Blackman Window')\naxis([0 M-1 0 1.1]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n stem(n,h);plt.title('Actual Impulse Response')\naxis([0 M-1 -0.4 0.5]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n%set(gca,'FontName','cmr12')\nplt.title('Magnitude Response in dB')\ngrid\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nplt.xlim(0, 1)\nplt.ylim(-150, 10)\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 07: Example 7.10 Bandpass filter design - Blackman window\r\n\r\n%\r\n\r\nws1 = 0.2*pi; wp1 = 0.35*pi;\r\n\r\nwp2 = 0.65*pi; ws2 = 0.8*pi;\r\n\r\nAs = 60;\r\n\r\ntr_width = min((wp1-ws1),(ws2-wp2))\r\n\r\nM = ceil(11*pi/tr_width) + 1 %;M=68\r\n\r\nn=[0:1:M-1];\r\n\r\nwc1 = (ws1+wp1)/2; wc2 = (wp2+ws2)/2;\r\n\r\nhd = ideal_lp(wc2,M) - ideal_lp(wc1,M);\r\n\r\nw_bla = (blackman(M))';\r\n\r\nh = hd .* w_bla;\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w = 2*pi/1000;\r\n\r\nRp = -min(db(wp1/delta_w+1:1:wp2/delta_w)) % Actua; Passband Ripple\r\n\r\nAs = -round(max(db(ws2/delta_w+1:1:501))) % Min Stopband Attenuation\r\n\r\n% plots\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([0 M-1 -0.4 0.5]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_bla);title('Blackman Window')\r\n\r\naxis([0 M-1 0 1.1]); xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([0 M-1 -0.4 0.5]); xlabel('n'); ylabel('h(n)')\r\n\r\nsubplot(2,2,4);plot(w/pi,db);%set(gca,'FontName','cmr12');\r\n\r\ntitle('Magnitude Response in dB');grid;\r\n\r\nxlabel('frequency in pi units'); ylabel('Decibels')\r\n\r\naxis([0 1 -150 10]); \r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071100",
    "title": "ex071100",
    "displayName": "Chapter 07: Example 7.11 Bandstop filter design - Kaiser window\r",
    "description": "Chapter 07: Example 7.11 Bandstop filter design - Kaiser window\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.11 Bandstop filter design - Kaiser window\r\n\r\n# M = 45; As = 60; n=[0:1:M-1]\nbeta = 0.1102*(As-8.7)\r\n\r\nw_kai = (kaiser(M,beta))'\nwc1 = np.pi/3; wc2 = 2*np.pi/3\nhd = ideal_lp(wc1,M) + ideal_lp(np.pi,M) - ideal_lp(wc2,M)\nh = hd * w_kai\n[db,mag,pha,grd,w] = freqz_m(h,[1])\n# plt.subplot(1, 1, 1)\nplt.subplot(2, 1, 2)\nplt.plot(w/np.pi,db)\n\r\n\r\nplt.title('Magnitude Response in dB')\ngrid\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nplt.xlim(0, 1)\nplt.ylim(-80, 10)\nset(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])\r\n\r\nset(gca,'XTickLabelMode','manual',...\r\n\r\n    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\n# pause\nprint -deps2 ex071101.eps\r\n\r\n# M = 45; As = 60; n=[0:1:M-1]\nbeta = 0.1102*(As-8.7)+.3\r\n\r\nw_kai = (kaiser(M,beta))'\nwc1 = np.pi/3; wc2 = 2*np.pi/3\nhd = ideal_lp(wc1,M) + ideal_lp(np.pi,M) - ideal_lp(wc2,M)\nh = hd * w_kai\n[db,mag,pha,grd,w] = freqz_m(h,[1])\n# # plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n stem(n,hd); plt.title('Ideal Impulse Response')\naxis([-1 M -0.2 0.8]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n stem(n,w_kai);plt.title('Kaiser Window')\naxis([-1 M 0 1.1]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n stem(n,h);plt.title('Actual Impulse Response')\naxis([-1 M -0.2 0.8]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n\r\n\r\nplt.title('Magnitude Response in dB')\ngrid\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nplt.xlim(0, 1)\nplt.ylim(-80, 10)\nset(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])\r\n\r\nset(gca,'XTickLabelMode','manual',...\r\n\r\n    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\nprint -deps2 ex071102.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 07: Example 7.11 Bandstop filter design - Kaiser window\r\n\r\n%\r\n\r\nM = 45; As = 60; n=[0:1:M-1];\r\n\r\nbeta = 0.1102*(As-8.7)\r\n\r\nw_kai = (kaiser(M,beta))';\r\n\r\nwc1 = pi/3; wc2 = 2*pi/3;\r\n\r\nhd = ideal_lp(wc1,M) + ideal_lp(pi,M) - ideal_lp(wc2,M);\r\n\r\nh = hd .* w_kai;\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,2);plot(w/pi,db);\r\n\r\ntitle('Magnitude Response in dB');grid;\r\n\r\nxlabel('frequency in pi units'); ylabel('Decibels')\r\n\r\naxis([0 1 -80 10]); \r\n\r\nset(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])\r\n\r\nset(gca,'XTickLabelMode','manual',...\r\n\r\n    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\n%pause;\r\n\r\nprint -deps2 ex071101.eps\r\n\r\n%\r\n\r\nM = 45; As = 60; n=[0:1:M-1];\r\n\r\nbeta = 0.1102*(As-8.7)+.3\r\n\r\nw_kai = (kaiser(M,beta))';\r\n\r\nwc1 = pi/3; wc2 = 2*pi/3;\r\n\r\nhd = ideal_lp(wc1,M) + ideal_lp(pi,M) - ideal_lp(wc2,M);\r\n\r\nh = hd .* w_kai;\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\n%\r\n\r\n% plots\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([-1 M -0.2 0.8]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_kai);title('Kaiser Window')\r\n\r\naxis([-1 M 0 1.1]); xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([-1 M -0.2 0.8]); xlabel('n'); ylabel('h(n)')\r\n\r\nsubplot(2,2,4);plot(w/pi,db);\r\n\r\ntitle('Magnitude Response in dB');grid;\r\n\r\nxlabel('frequency in pi units'); ylabel('Decibels')\r\n\r\naxis([0 1 -80 10]); \r\n\r\nset(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])\r\n\r\nset(gca,'XTickLabelMode','manual',...\r\n\r\n    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\nprint -deps2 ex071102.eps",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071200",
    "title": "ex071200",
    "displayName": "Chapter 07: Example 7.12 Differentiator design - Hamming window\r",
    "description": "Chapter 07: Example 7.12 Differentiator design - Hamming window\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.12 Differentiator design - Hamming window\r\n\r\n# M = 21; alpha = (M-1)/2\nn = 0:M-1\nhd = (np.cos(np.pi*(n-alpha)))/(n-alpha); hd(alpha+1)=0\nw_ham = (hamming(M))'\nh = hd * w_ham\n[Hr,w,P,L] = Hr_Type3(h)\n# plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n stem(n,hd); plt.title('Ideal Impulse Response')\naxis([-1 M -1.2 1.2]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n stem(n,w_ham);plt.title('Hamming Window')\naxis([-1 M 0 1.2]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n stem(n,h);plt.title('Actual Impulse Response')\naxis([-1 M -1.2 1.2]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,Hr/np.pi)\n plt.title('Amplitude Response')\ngrid\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('slope in np.pi units')\nplt.xlim(0, 1)\nplt.ylim(0, 1)\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.4,0.6,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.2,0.4,0.6,0.8,1])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 07: Example 7.12 Differentiator design - Hamming window\r\n\r\n%\r\n\r\nM = 21; alpha = (M-1)/2;\r\n\r\nn = 0:M-1;\r\n\r\nhd = (cos(pi*(n-alpha)))./(n-alpha); hd(alpha+1)=0;\r\n\r\nw_ham = (hamming(M))';\r\n\r\nh = hd .* w_ham;\r\n\r\n[Hr,w,P,L] = Hr_Type3(h);\r\n\r\n% plots\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([-1 M -1.2 1.2]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_ham);title('Hamming Window')\r\n\r\naxis([-1 M 0 1.2]); xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([-1 M -1.2 1.2]); xlabel('n'); ylabel('h(n)')\r\n\r\nsubplot(2,2,4);plot(w/pi,Hr/pi); title('Amplitude Response');grid;\r\n\r\nxlabel('frequency in pi units'); ylabel('slope in pi units')\r\n\r\naxis([0 1 0 1]); \r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.4,0.6,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.2,0.4,0.6,0.8,1])",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071200"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071300",
    "title": "ex071300",
    "displayName": "Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\r",
    "description": "Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\r\n\r\n# M = 25; alpha = (M-1)/2\nn = 0:M-1\nhd = (2/np.pi)*((np.sin((np.pi/2)*(n-alpha))**2)/(n-alpha)); hd(alpha+1)=0\nw_han = (hanning(M))'\nh = hd * w_han\n[Hr,w,P,L] = Hr_Type3(h)\n# plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n stem(n,hd); plt.title('Ideal Impulse Response')\naxis([-1 M -1.2 1.2]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n stem(n,w_han);plt.title('Hanning Window')\naxis([-1 M 0 1.2]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n stem(n,h);plt.title('Actual Impulse Response')\naxis([-1 M -1.2 1.2]); plt.xlabel('n')\n plt.ylabel('h(n)')\nw = w'; Hr = Hr'\nw = [-fliplr(w), wnp.arange(2, 501 + 1)]; Hr = [-fliplr(Hr), Hrnp.arange(2, 501 + 1)]\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,Hr)\n plt.title('Amplitude Response')\ngrid\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.xlim(-1, 1)\nplt.ylim(-1.1, 1.1)\nset(gca,'XTickMode','manual','XTick',[-1,0,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-1,0,1])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\r\n\r\n%\r\n\r\nM = 25; alpha = (M-1)/2;\r\n\r\nn = 0:M-1;\r\n\r\nhd = (2/pi)*((sin((pi/2)*(n-alpha)).^2)./(n-alpha)); hd(alpha+1)=0;\r\n\r\nw_han = (hanning(M))';\r\n\r\nh = hd .* w_han;\r\n\r\n[Hr,w,P,L] = Hr_Type3(h);\r\n\r\n% plots\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([-1 M -1.2 1.2]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_han);title('Hanning Window')\r\n\r\naxis([-1 M 0 1.2]); xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([-1 M -1.2 1.2]); xlabel('n'); ylabel('h(n)')\r\n\r\nw = w'; Hr = Hr';\r\n\r\nw = [-fliplr(w), w(2:501)]; Hr = [-fliplr(Hr), Hr(2:501)];\r\n\r\nsubplot(2,2,4);plot(w/pi,Hr); title('Amplitude Response');grid;\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\naxis([-1 1 -1.1 1.1]); \r\n\r\nset(gca,'XTickMode','manual','XTick',[-1,0,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-1,0,1])",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071400",
    "title": "ex071400",
    "displayName": "Chapter 7: Example 7.14\r",
    "description": "Chapter 7: Example 7.14\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.14\r\n\r\n# Freq. Samp. Tech.: Lowpass,Naive method\r\n\r\n# M = 20; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nHrs = [1,1,1,zeros(1,15),1,1]\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1]\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type2(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plot(wlnp.arange(1, 11 + 1)\n/np.pi,Hrsnp.arange(1, 11 + 1),'o',wdl,Hdr)\naxis([0,1,-0.1,1.1]); titlenp.arange('Frequency Samples, M=20' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]); grid\r\n\r\nplt.subplot(2, 2, 2)\n stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(ww/np.pi,Hr,wlnp.arange(1, 11 + 1)\n/np.pi,Hrsnp.arange(1, 11 + 1),'o')\naxis([0,1,-0.2,1.2]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]); grid\r\n\r\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n axis([0,1,-60,10]); grid\r\n\r\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1])\nset(gca,'YTickMode','Manual','YTick',[-16;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['16';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.14\r\n\r\n%            Freq. Samp. Tech.: Lowpass,Naive method\r\n\r\n%\r\n\r\nM = 20; alpha = (M-1)/2; l = 0:M-1; wl = (2*pi/M)*l;\r\n\r\nHrs = [1,1,1,zeros(1,15),1,1];\r\n\r\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1];\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nangH = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,1);\r\n\r\n[Hr,ww,a,L] = Hr_Type2(h);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1);plot(wl(1:11)/pi,Hrs(1:11),'o',wdl,Hdr); \r\n\r\naxis([0,1,-0.1,1.1]); title('Frequency Samples: M=20')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(k)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]); grid\r\n\r\nsubplot(2,2,2); stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\ntitle('Impulse Response'); xlabel('n'); ylabel('h(n)');\r\n\r\nsubplot(2,2,3); plot(ww/pi,Hr,wl(1:11)/pi,Hrs(1:11),'o');\r\n\r\naxis([0,1,-0.2,1.2]); title('Amplitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]); grid\r\n\r\nsubplot(2,2,4);plot(w/pi,db); axis([0,1,-60,10]); grid\r\n\r\ntitle('Magnitude Response'); xlabel('frequency in pi units');\r\n\r\nylabel('Decibels');\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1]);\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-16;0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['16';' 0'])\r\n\r\n%",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071400"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex07150a",
    "title": "ex07150a",
    "displayName": "Chapter 7: Example 7.15\r",
    "description": "Chapter 7: Example 7.15\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.15\r\n\r\n# Freq. Samp. Tech.: Lowpass,Optimum method\r\n\r\n# # (a) T1 = 0.5\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nHrs = [ones(1,5),0.5,zeros(1,29),0.5,ones(1,4)]\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1]\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type2(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plot(wlnp.arange(1, 21 + 1)\n/np.pi,Hrsnp.arange(1, 21 + 1),'o',wdl,Hdr)\naxis([0,1,-0.1,1.1]); titlenp.arange('Frequency Samples, M=40,T1=0.5' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.5,1]); grid\r\n\r\nplt.subplot(2, 2, 2)\n stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(ww/np.pi,Hr,wlnp.arange(1, 21 + 1)\n/np.pi,Hrsnp.arange(1, 21 + 1),'o')\naxis([0,1,-0.1,1.1]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.5,1]); grid\r\n\r\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n axis([0,1,-100,10]); grid\r\n\r\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1])\nset(gca,'YTickMode','Manual','YTick',[-30;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['30';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.15\r\n\r\n%            Freq. Samp. Tech.: Lowpass,Optimum method\r\n\r\n%\r\n\r\n% (a) T1 = 0.5\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*pi/M)*l;\r\n\r\nHrs = [ones(1,5),0.5,zeros(1,29),0.5,ones(1,4)];\r\n\r\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1];\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nangH = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,1);\r\n\r\n[Hr,ww,a,L] = Hr_Type2(h);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1);plot(wl(1:21)/pi,Hrs(1:21),'o',wdl,Hdr); \r\n\r\naxis([0,1,-0.1,1.1]); title('Frequency Samples: M=40,T1=0.5')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(k)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.5,1]); grid\r\n\r\nsubplot(2,2,2); stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\ntitle('Impulse Response'); xlabel('n'); ylabel('h(n)');\r\n\r\nsubplot(2,2,3); plot(ww/pi,Hr,wl(1:21)/pi,Hrs(1:21),'o');\r\n\r\naxis([0,1,-0.1,1.1]); title('Amplitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.5,1]); grid\r\n\r\nsubplot(2,2,4);plot(w/pi,db); axis([0,1,-100,10]); grid\r\n\r\ntitle('Magnitude Response'); xlabel('frequency in pi units');\r\n\r\nylabel('Decibels');\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1]);\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-30;0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['30';' 0'])\r\n\r\n%\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex07150a"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex07150b",
    "title": "ex07150b",
    "displayName": "Chapter 7: Example 7.15\r",
    "description": "Chapter 7: Example 7.15\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.15\r\n\r\n# Freq. Samp. Tech.: Lowpass,Optimum method\r\n\r\n# # (a) T1 = 0.39\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nHrs = [ones(1,5),0.3904,zeros(1,29),0.3904,ones(1,4)]\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1]\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type2(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plot(wlnp.arange(1, 21 + 1)\n/np.pi,Hrsnp.arange(1, 21 + 1),'o',wdl,Hdr)\naxis([0,1,-0.1,1.1]); titlenp.arange('Frequency Samples, M=40,T1=0.39' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.39,1]); grid\r\n\r\nplt.subplot(2, 2, 2)\n stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(ww/np.pi,Hr,wlnp.arange(1, 21 + 1)\n/np.pi,Hrsnp.arange(1, 21 + 1),'o')\naxis([0,1,-0.1,1.1]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.39,1]); grid\r\n\r\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n axis([0,1,-100,10]); grid\r\n\r\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1])\nset(gca,'YTickMode','Manual','YTick',[-43;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['43';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.15\r\n\r\n%            Freq. Samp. Tech.: Lowpass,Optimum method\r\n\r\n%\r\n\r\n% (a) T1 = 0.39\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*pi/M)*l;\r\n\r\nHrs = [ones(1,5),0.3904,zeros(1,29),0.3904,ones(1,4)];\r\n\r\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1];\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nangH = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,1);\r\n\r\n[Hr,ww,a,L] = Hr_Type2(h);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1);plot(wl(1:21)/pi,Hrs(1:21),'o',wdl,Hdr); \r\n\r\naxis([0,1,-0.1,1.1]); title('Frequency Samples: M=40,T1=0.39')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(k)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.39,1]); grid\r\n\r\nsubplot(2,2,2); stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\ntitle('Impulse Response'); xlabel('n'); ylabel('h(n)');\r\n\r\nsubplot(2,2,3); plot(ww/pi,Hr,wl(1:21)/pi,Hrs(1:21),'o');\r\n\r\naxis([0,1,-0.1,1.1]); title('Amplitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.39,1]); grid\r\n\r\nsubplot(2,2,4);plot(w/pi,db); axis([0,1,-100,10]); grid\r\n\r\ntitle('Magnitude Response'); xlabel('frequency in pi units');\r\n\r\nylabel('Decibels');\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1]);\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-43;0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['43';' 0'])\r\n\r\n%",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex07150b"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071600",
    "title": "ex071600",
    "displayName": "Chapter 7: Example 7.16\r",
    "description": "Chapter 7: Example 7.16\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.16\r\n\r\n# Freq. Samp. Tech.: Lowpass, Optimum method T1 & T2\r\n\r\n# wp = 0.2pi, ws=0.3pi, Rp=0.25dB, As=50dB\r\n\r\n# T1 = 0.5925, T2=0.1099\r\n\r\nM = 60; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nHrs = [ones(1,7),0.5925,0.11,zeros(1,43),0.11,0.5925,ones(1,6)]\nHdr = [1,1,0,0]; wdl = [0,0.2,0.3,1]\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type2(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plot(wlnp.arange(1, 31 + 1)\n/np.pi,Hrsnp.arange(1, 31 + 1),'o',wdl,Hdr)\naxis([0,1,-0.1,1.1]); titlenp.arange('Lowpass, M=60,T1=0.59, T2=0.109' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nplt.subplot(2, 2, 2)\n stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(ww/np.pi,Hr,wlnp.arange(1, 31 + 1)\n/np.pi,Hrsnp.arange(1, 31 + 1),'o')\naxis([0,1,-0.1,1.1]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n axis([0,1,-100,10]); grid\r\n\r\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1])\nset(gca,'YTickMode','Manual','YTick',[-63;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['63';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.16\r\n\r\n%            Freq. Samp. Tech.: Lowpass, Optimum method T1 & T2\r\n\r\n%            wp = 0.2pi, ws=0.3pi, Rp=0.25dB, As=50dB\r\n\r\n%            T1 = 0.5925, T2=0.1099\r\n\r\nM = 60; alpha = (M-1)/2; l = 0:M-1; wl = (2*pi/M)*l;\r\n\r\nHrs = [ones(1,7),0.5925,0.11,zeros(1,43),0.11,0.5925,ones(1,6)];\r\n\r\nHdr = [1,1,0,0]; wdl = [0,0.2,0.3,1];\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nangH = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,1);\r\n\r\n[Hr,ww,a,L] = Hr_Type2(h);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1);plot(wl(1:31)/pi,Hrs(1:31),'o',wdl,Hdr); \r\n\r\naxis([0,1,-0.1,1.1]); title('Lowpass: M=60,T1=0.59, T2=0.109')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(k)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nsubplot(2,2,2); stem(l,h); axis([-1,M,-0.1,0.3])\r\n\r\ntitle('Impulse Response'); xlabel('n'); ylabel('h(n)');\r\n\r\nsubplot(2,2,3); plot(ww/pi,Hr,wl(1:31)/pi,Hrs(1:31),'o');\r\n\r\naxis([0,1,-0.1,1.1]); title('Amplitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nsubplot(2,2,4);plot(w/pi,db); axis([0,1,-100,10]); grid\r\n\r\ntitle('Magnitude Response'); xlabel('frequency in pi units');\r\n\r\nylabel('Decibels');\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1]);\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-63;0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['63';' 0'])\r\n\r\n%",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071600"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071700",
    "title": "ex071700",
    "displayName": "Chapter 7: Example 7.17\r",
    "description": "Chapter 7: Example 7.17\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.17\r\n\r\n# Freq. Samp. Tech.: Bandpass, Optimum method T1 & T2\r\n\r\n# ws1=0.2pi, wp1=0.35pi, wp2=0.65pi, ws2=0.8pi, Rp=1dB, As=60dB\r\n\r\n# T2 = 0.59417456, T1=0.109021\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nT1 = 0.109021; T2 = 0.59417456\nHrs = [zeros(1,5),T1,T2,ones(1,7),T2,T1,zeros(1,9),T1,T2,ones(1,7),T2,T1,zeros(1,4)]\nHdr = [0,0,1,1,0,0]; wdl = [0,0.2,0.35,0.65,0.8,1]\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type2(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plot(wlnp.arange(1, 21 + 1)\n/np.pi,Hrsnp.arange(1, 21 + 1),'o',wdl,Hdr)\naxis([0,1,-0.1,1.1]); titlenp.arange('Bandpass, M=40,T1=0.5941, T2=0.109' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nplt.subplot(2, 2, 2)\n stem(l,h); axis([-1,M,-0.4,0.4])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(ww/np.pi,Hr,wlnp.arange(1, 21 + 1)\n/np.pi,Hrsnp.arange(1, 21 + 1),'o')\naxis([0,1,-0.1,1.1]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n axis([0,1,-100,10]); grid\r\n\r\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0,0.2,0.35,0.65,0.8,1])\nset(gca,'YTickMode','Manual','YTick',[-60;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.17\r\n\r\n%            Freq. Samp. Tech.: Bandpass, Optimum method T1 & T2\r\n\r\n%            ws1=0.2pi, wp1=0.35pi, wp2=0.65pi, ws2=0.8pi, Rp=1dB, As=60dB\r\n\r\n%            T2 = 0.59417456, T1=0.109021\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*pi/M)*l;\r\n\r\nT1 = 0.109021; T2 = 0.59417456;\r\n\r\nHrs = [zeros(1,5),T1,T2,ones(1,7),T2,T1,zeros(1,9),T1,T2,ones(1,7),T2,T1,zeros(1,4)];\r\n\r\nHdr = [0,0,1,1,0,0]; wdl = [0,0.2,0.35,0.65,0.8,1];\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nangH = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,1);\r\n\r\n[Hr,ww,a,L] = Hr_Type2(h);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1);plot(wl(1:21)/pi,Hrs(1:21),'o',wdl,Hdr); \r\n\r\naxis([0,1,-0.1,1.1]); title('Bandpass: M=40,T1=0.5941, T2=0.109')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(k)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nsubplot(2,2,2); stem(l,h); axis([-1,M,-0.4,0.4])\r\n\r\ntitle('Impulse Response'); xlabel('n'); ylabel('h(n)');\r\n\r\nsubplot(2,2,3); plot(ww/pi,Hr,wl(1:21)/pi,Hrs(1:21),'o');\r\n\r\naxis([0,1,-0.1,1.1]); title('Amplitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.59,0.109,1]); grid\r\n\r\nsubplot(2,2,4);plot(w/pi,db); axis([0,1,-100,10]); grid\r\n\r\ntitle('Magnitude Response'); xlabel('frequency in pi units');\r\n\r\nylabel('Decibels');\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0,0.2,0.35,0.65,0.8,1]);\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-60;0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\n%",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071800",
    "title": "ex071800",
    "displayName": "Chapter 7: Example 7.18\r",
    "description": "Chapter 7: Example 7.18\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.18\r\n\r\n# Freq. Samp. Tech.: Highpass, Optimum method T1\r\n\r\n# ws=0.6pi, wp=0.8pi, Rp=1dB, As=50dB\r\n\r\n# M=33, T1 = 0.1095; T2 = 0.598\nM = 33; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nT1 = 0.1095; T2 = 0.598\nHrs = [zeros(1,11),T1,T2,ones(1,8),T2,T1,zeros(1,10)]\nHdr = [0,0,1,1]; wdl = [0,0.6,0.8,1]\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type1(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plot(wlnp.arange(1, 17 + 1)\n/np.pi,Hrsnp.arange(1, 17 + 1),'o',wdl,Hdr)\naxis([0,1,-0.1,1.1]); titlenp.arange('Highpass, M=33,T1=0.1095,T2=0.598' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0;.6;.8;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.109,0.59,1]); grid\r\n\r\nplt.subplot(2, 2, 2)\n stem(l,h); axis([-1,M,-0.4,0.4])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plot(ww/np.pi,Hr,wlnp.arange(1, 17 + 1)\n/np.pi,Hrsnp.arange(1, 17 + 1),'o')\naxis([0,1,-0.1,1.1]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0;.6;.8;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.109,0.59,1]); grid\r\n\r\nplt.subplot(2, 2, 4)\nplt.plot(w/np.pi,db)\n axis([0,1,-100,10]); grid\r\n\r\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;.6;.8;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-50;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.18\r\n\r\n%            Freq. Samp. Tech.: Highpass, Optimum method T1\r\n\r\n%            ws=0.6pi, wp=0.8pi, Rp=1dB, As=50dB\r\n\r\n%            M=33, T1 = 0.1095; T2 = 0.598;\r\n\r\nM = 33; alpha = (M-1)/2; l = 0:M-1; wl = (2*pi/M)*l;\r\n\r\nT1 = 0.1095; T2 = 0.598;\r\n\r\nHrs = [zeros(1,11),T1,T2,ones(1,8),T2,T1,zeros(1,10)];\r\n\r\nHdr = [0,0,1,1]; wdl = [0,0.6,0.8,1];\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nangH = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,1);\r\n\r\n[Hr,ww,a,L] = Hr_Type1(h);\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,2,1);plot(wl(1:17)/pi,Hrs(1:17),'o',wdl,Hdr); \r\n\r\naxis([0,1,-0.1,1.1]); title('Highpass: M=33,T1=0.1095,T2=0.598')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(k)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;.6;.8;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.109,0.59,1]); grid\r\n\r\nsubplot(2,2,2); stem(l,h); axis([-1,M,-0.4,0.4])\r\n\r\ntitle('Impulse Response'); xlabel('n'); ylabel('h(n)');\r\n\r\nsubplot(2,2,3); plot(ww/pi,Hr,wl(1:17)/pi,Hrs(1:17),'o');\r\n\r\naxis([0,1,-0.1,1.1]); title('Amplitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;.6;.8;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.109,0.59,1]); grid\r\n\r\nsubplot(2,2,4);plot(w/pi,db); axis([0,1,-100,10]); grid\r\n\r\ntitle('Magnitude Response'); xlabel('frequency in pi units');\r\n\r\nylabel('Decibels');\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;.6;.8;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0';'.6';'.8';' 1'])\r\n\r\nset(gca,'YTickMode','Manual','YTick',[-50;0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\r\n\r\n%",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex071900",
    "title": "ex071900",
    "displayName": "Chapter 7: Example 7.19\r",
    "description": "Chapter 7: Example 7.19\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.19\r\n\r\n# Freq. Samp. Tech.: Differentiator\r\n\r\n# M = 33; alpha = (M-1)/2; Dw = 2*np.pi/M\nl = 0:M-1; wl = Dw*l\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nHrs = [j*Dw*k1,-j*Dw*(M-k2)]\nangH = [-alpha*Dw*k1, alpha*Dw*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[Hr,ww,a,P]=Hr_Type3(h)\n# # plots\r\n\r\nplt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n k = 1:(M+1)/2\nplt.plot(ww/np.pi,+Hr/np.pi,wl(k)\n/np.pi,np.abs(Hrs(k))/np.pi,'o',wl(k)/np.pi,wl(k)/np.pi)\ntitlenp.arange('Differentiator, frequency sampling design, M = 33' + 1)\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr in np.pi units')\n\r\n\r\nplt.subplot(2, 1, 2)\n stem(l,h); axis([-1,M,-1.1,1.1])\nplt.title('Impulse response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;alpha;M-1])\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.19\r\n\r\n%            Freq. Samp. Tech.: Differentiator\r\n\r\n%\r\n\r\nM = 33; alpha = (M-1)/2; Dw = 2*pi/M;\r\n\r\nl = 0:M-1; wl = Dw*l;\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nHrs = [j*Dw*k1,-j*Dw*(M-k2)];\r\n\r\nangH = [-alpha*Dw*k1, alpha*Dw*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[Hr,ww,a,P]=Hr_Type3(h);\r\n\r\n%\r\n\r\n% plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1); k = 1:(M+1)/2;\r\n\r\nplot(ww/pi,+Hr/pi,wl(k)/pi,abs(Hrs(k))/pi,'o',wl(k)/pi,wl(k)/pi);\r\n\r\ntitle('Differentiator, frequency sampling design : M = 33');\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr in pi units');\r\n\r\nsubplot(2,1,2); stem(l,h); axis([-1,M,-1.1,1.1]);\r\n\r\ntitle('Impulse response'); xlabel('n'); ylabel('h(n)');\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;alpha;M-1])\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex071900"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072000",
    "title": "ex072000",
    "displayName": "Chapter 7: Example 7.20\r",
    "description": "Chapter 7: Example 7.20\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.20\r\n\r\n# Freq. Samp. Tech.: Hilbert Transformer\r\n\r\n# M = 51; alpha = (M-1)/2; Dw = 2*np.pi/M\nl = 0:M-1; wl = Dw*l\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1\nHrs = [0,-j*ones(1,(M-3)/2),-0.39j,0.39j,j*ones(1,(M-3)/2)]\nangH = [-alpha*Dw*k1, alpha*Dw*(M-k2)]\nH = Hrs*np.exp(j*angH)\nh = real(ifft(H,M))\n[Hr,ww,a,P]=Hr_Type3(h)\n# # plots\r\n\r\nplt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n k = 1:(M+1)/2\nplt.plot(ww/np.pi,-Hr,wl(k)\n/np.pi,np.abs(H(k)),'o')\ntitlenp.arange('Hilbert Transformer, frequency sampling design, M = 51' + 1)\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Amplitude response')\nsetnp.arange(gca,'XTickMode','manual','XTick',[0, 1] + 0.2, 0.2)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0;0.39;1]);grid\r\n\r\nplt.subplot(2, 1, 2)\n stem(l,h); axis([-1,M,-1,1])\nplt.title('Impulse response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;alpha;M-1])\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.20\r\n\r\n%            Freq. Samp. Tech.: Hilbert Transformer\r\n\r\n%\r\n\r\nM = 51; alpha = (M-1)/2; Dw = 2*pi/M;\r\n\r\nl = 0:M-1; wl = Dw*l;\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nHrs = [0,-j*ones(1,(M-3)/2),-0.39j,0.39j,j*ones(1,(M-3)/2)];\r\n\r\nangH = [-alpha*Dw*k1, alpha*Dw*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[Hr,ww,a,P]=Hr_Type3(h);\r\n\r\n%\r\n\r\n% plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1); k = 1:(M+1)/2;\r\n\r\nplot(ww/pi,-Hr,wl(k)/pi,abs(H(k)),'o');\r\n\r\ntitle('Hilbert Transformer, frequency sampling design : M = 51')\r\n\r\nxlabel('frequency in pi units'); ylabel('Amplitude response')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0:0.2:1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0;0.39;1]);grid\r\n\r\nsubplot(2,1,2); stem(l,h); axis([-1,M,-1,1]);\r\n\r\ntitle('Impulse response'); xlabel('n'); ylabel('h(n)');\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;alpha;M-1])\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "plot",
    "title": "plot",
    "displayName": "Chapter 7: Example 7.22\r",
    "description": "Chapter 7: Example 7.22\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.22\r\n\r\n# Error function plot and counting of extrema\r\n\r\nfig = plt.figure(1)\nplt.subplot(1, 1, 1)\nh = [1,2,3,4,3,2,1]/15\nM = len(h); n = 0:M-1\n[Hr,w,a,L] = Hr_Type1(h)\nplt.subplot(1, 2, 1)\nplt.plot(w/np.pi,Hr)\naxis([0,1,-0.05,1.1])\r\n\r\nplt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.title('Amplitude Response')\n# hold on\nwp = wnp.arange(1, 52 + 1); ws = wnp.arange(197, 500 + 1)\nupb=Hr(1)*ones(len(wp),1)\nlpb=(2-Hr(1))*ones(len(wp),1)\nipb=ones(len(wp),1)\nplt.plot(wp/np.pi,upb,'r',wp/np.pi,ipb,'g',wp/np.pi,lpb,'r')\nusb=Hr(197)*ones(len(ws),1)\nlsb=zeros(len(ws),1)\nisb=0.5*usb\nplt.plot(ws/np.pi,usb,'r',ws/np.pi,isb,'g',ws/np.pi,lsb,'r')\n\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.1,0.39,1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'0.1';'0.4';' 1 '])\r\n\r\nset(gca,'XGrid','on')\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.0394,0.0787,0.933,1,1.067])\r\n\r\nset(gca,'YTickLabelMode','manual',...\r\n\r\n        'YTickLabels',['-0.04';' 0.0 ';' 0.04';' 0.93';' 1.0 ';' 1.07'])\r\n\r\n# hold off\n# # Error function plots\r\n\r\nplt.subplot(1, 2, 2)\n \r\n\r\nerpb=Hrnp.arange(1, 52 + 1)-ipb; ersb=Hrnp.arange(197, 500 + 1)-isb\nplt.plot(wp/np.pi,erpb,ws/np.pi,ersb)\n axis([0,1,-.55,.55])\nplt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.title('Error Function')\n# hold on\nplt.plot(wp/np.pi,upb-ipb,'r',wp/np.pi,lpb-ipb,'r')\nplt.plot(ws/np.pi,usb-isb,'r',ws/np.pi,lsb-isb,'r')\n\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.1,0.39,1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'0.1';'0.4';' 1 '])\r\n\r\nset(gca,'XGrid','on')\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.07,0,0.07])\r\n\r\n# hold off\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7: Example 7.22\r\n\r\n%            Error function plot and counting of extrema\r\n\r\nfigure(1);subplot(1,1,1)\r\n\r\nh = [1,2,3,4,3,2,1]/15;\r\n\r\nM = length(h); n = 0:M-1;\r\n\r\n[Hr,w,a,L] = Hr_Type1(h);\r\n\r\nsubplot(1,2,1);plot(w/pi,Hr);axis([0,1,-0.05,1.1])\r\n\r\nxlabel('frequency in pi units');\r\n\r\ntitle('Amplitude Response');hold on\r\n\r\nwp = w(1:52); ws = w(197:500);\r\n\r\nupb=Hr(1)*ones(length(wp),1);\r\n\r\nlpb=(2-Hr(1))*ones(length(wp),1);\r\n\r\nipb=ones(length(wp),1);\r\n\r\nplot(wp/pi,upb,'r',wp/pi,ipb,'g',wp/pi,lpb,'r')\r\n\r\nusb=Hr(197)*ones(length(ws),1);\r\n\r\nlsb=zeros(length(ws),1);\r\n\r\nisb=0.5*usb;\r\n\r\nplot(ws/pi,usb,'r',ws/pi,isb,'g',ws/pi,lsb,'r');\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.1,0.39,1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'0.1';'0.4';' 1 '])\r\n\r\nset(gca,'XGrid','on')\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.0394,0.0787,0.933,1,1.067])\r\n\r\nset(gca,'YTickLabelMode','manual',...\r\n\r\n        'YTickLabels',['-0.04';' 0.0 ';' 0.04';' 0.93';' 1.0 ';' 1.07'])\r\n\r\nhold off\r\n\r\n%\r\n\r\n%Error function plots\r\n\r\nsubplot(1,2,2); \r\n\r\nerpb=Hr(1:52)-ipb; ersb=Hr(197:500)-isb;\r\n\r\nplot(wp/pi,erpb,ws/pi,ersb); axis([0,1,-.55,.55]);\r\n\r\nxlabel('frequency in pi units');\r\n\r\ntitle('Error Function');hold on\r\n\r\nplot(wp/pi,upb-ipb,'r',wp/pi,lpb-ipb,'r')\r\n\r\nplot(ws/pi,usb-isb,'r',ws/pi,lsb-isb,'r');\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.1,0.39,1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'0.1';'0.4';' 1 '])\r\n\r\nset(gca,'XGrid','on')\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.07,0,0.07])\r\n\r\nhold off\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "plot"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072300",
    "title": "ex072300",
    "displayName": "Chapter 7 Example 7.23\r",
    "description": "Chapter 7 Example 7.23\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.23\r\n\r\n# Lowpass filter design using PM algorithm\r\n\r\n# wp = 0.2*np.pi; ws = 0.3*np.pi; Rp = 0.25; As = 50\ndelta1 = (10**(Rp/20)-1)/(10**(Rp/20)+1)\r\n\r\ndelta2 = (1+delta1)*(10**(-As/20))\r\n\r\ndeltaH = np.max(delta1,delta2); deltaL = np.min(delta1,delta2)\nweights = [delta2/delta1 1]\r\n\r\ndeltaf = (ws-wp)/(2*np.pi)\r\n\r\nM = ceil((-20*log10(np.sqrt(delta1*delta2))-13)/(14.6*deltaf)+1)\r\n\r\nf = [0 wp/np.pi ws/np.pi 1]\r\n\r\nm = [1 1 0 0]\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000; wsi=ws/delta_w+1; wpi = wp/delta_w\nAsd = -np.max(dbnp.arange(wsi, 501 + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(wsi, 501 + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(wsi, 501 + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(wsi, 501 + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(wsi, 501 + 1, 1))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h)\n# # Plots\r\n\r\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')\naxis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('h(n)')\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.1, 0.3] + 0.1, 0.1)\r\n\r\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\n\r\n\r\naxis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('DECIBELS')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0']);grid\r\n\r\nplt.subplot(2, 2, 3)\nplt.plot(omega/np.pi,Hr)\nplt.title('Amplitude Response')\n\r\n\r\naxis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\r\n\r\nplt.subplot(2, 2, 4)\n\r\n\r\npbw = omeganp.arange(1, wpi+1 + 1, 1)/np.pi; pbe = Hrnp.arange(1, wpi+1 + 1, 1)-1\nsbw = omeganp.arange(wsi+1, 501 + 1)/np.pi; sbe = Hrnp.arange(wsi+1, 501 + 1)\nplt.plot(pbw,pbe,sbw,sbe)\n\r\n\r\naxis([0,1,-deltaH,deltaH]);plt.title('Error Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaH,-deltaL,0,deltaL,deltaH])\nset(gca,'XGrid','on')\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7 Example 7.23\r\n\r\n%           Lowpass filter design using PM algorithm\r\n\r\n%\r\n\r\nwp = 0.2*pi; ws = 0.3*pi; Rp = 0.25; As = 50;\r\n\r\ndelta1 = (10^(Rp/20)-1)/(10^(Rp/20)+1)\r\n\r\ndelta2 = (1+delta1)*(10^(-As/20))\r\n\r\ndeltaH = max(delta1,delta2); deltaL = min(delta1,delta2);\r\n\r\nweights = [delta2/delta1 1]\r\n\r\ndeltaf = (ws-wp)/(2*pi)\r\n\r\nM = ceil((-20*log10(sqrt(delta1*delta2))-13)/(14.6*deltaf)+1)\r\n\r\nf = [0 wp/pi ws/pi 1]\r\n\r\nm = [1 1 0 0];\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w = 2*pi/1000; wsi=ws/delta_w+1; wpi = wp/delta_w;\r\n\r\nAsd = -max(db(wsi:1:501))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(wsi:1:501))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(wsi:1:501))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(wsi:1:501))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(wsi:1:501))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h);\r\n\r\n%\r\n\r\n% Plots\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem([0:1:M-1],h); title('Actual Impulse Response')\r\n\r\naxis([0 M-1 -0.1 0.3]); xlabel('n'); ylabel('h(n)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.1:0.1:0.3])\r\n\r\nsubplot(2,2,2);plot(w/pi,db);title('Magnitude Response in dB');\r\n\r\naxis([0,1,-80,10]); xlabel('frequency in pi units'); ylabel('DECIBELS')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0']);grid\r\n\r\nsubplot(2,2,3);plot(omega/pi,Hr);title('Amplitude Response');\r\n\r\naxis([0 1 -0.1 1.1]); xlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\r\n\r\nsubplot(2,2,4);\r\n\r\npbw = omega(1:1:wpi+1)/pi; pbe = Hr(1:1:wpi+1)-1;\r\n\r\nsbw = omega(wsi+1:501)/pi; sbe = Hr(wsi+1:501);\r\n\r\nplot(pbw,pbe,sbw,sbe);\r\n\r\naxis([0,1,-deltaH,deltaH]);title('Error Response');\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaH,-deltaL,0,deltaL,deltaH]);\r\n\r\nset(gca,'XGrid','on')",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072300"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072400",
    "title": "ex072400",
    "displayName": "Chapter 7 Example 7.24\r",
    "description": "Chapter 7 Example 7.24\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.24\r\n\r\n# Bandpass filter design using PM algorithm\r\n\r\n# ws1 = 0.2*np.pi; wp1 = 0.35*np.pi; wp2 = 0.65*np.pi; ws2 = 0.8*np.pi\nRp = 1.0; As = 60\ndelta1 = (10**(Rp/20)-1)/(10**(Rp/20)+1)\ndelta2 = (1+delta1)*(10**(-As/20))\ndeltaH = np.max(delta1,delta2); deltaL = np.min(delta1,delta2)\nweights = [1 delta2/delta1 1]\ndelta_f =np.min((ws2-wp2)/(2*np.pi), (wp1-ws1)/(2*np.pi))\nM = ceil((-20*log10(np.sqrt(delta1*delta2))-13)/(14.6*delta_f)+1)\r\n\r\nf = [0 ws1/np.pi wp1/np.pi wp2/np.pi ws2/np.pi 1]\nm = [0 0 1 1 0 0]\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w=2*np.pi/1000\nws1i=floor(ws1/delta_w)+1; wp1i = floor(wp1/delta_w)+1\nws2i=floor(ws2/delta_w)+1; wp2i = floor(wp2/delta_w)+1\nAsd = -np.max(dbnp.arange(1, ws1i + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(1, ws1/delta_w + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(1, ws1/delta_w + 1, 1))\r\n\r\nM = M+1\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(1, ws1/delta_w + 1, 1))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h)\n# # Plots\r\n\r\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')\naxis([0,M-1,-0.4,0.5]); plt.xlabel('n')\n plt.ylabel('h(n)')\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.4, 0.5] + 0.2, 0.2)\r\n\r\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\n\r\n\r\naxis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('DECIBELS')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0']);grid\r\n\r\nplt.subplot(2, 2, 3)\nplt.plot(omega/np.pi,Hr)\nplt.title('Amplitude Response')\n\r\n\r\naxis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\r\n\r\ndelta_w = 2*np.pi/1000; sp_edge1 = ws1/delta_w+1; sp_edge2 = ws2/delta_w+1\nplt.subplot(2, 2, 4)\n\r\n\r\nsb1w = omeganp.arange(1, ws1i + 1, 1)/np.pi; sb1e = Hrnp.arange(1, ws1i + 1, 1)\npbw = omeganp.arange(wp1i, wp2i + 1)/np.pi; pbe = Hrnp.arange(wp1i, wp2i + 1)-1\nsb2w = omeganp.arange(ws2i, 501 + 1)/np.pi; sb2e = Hrnp.arange(ws2i, 501 + 1)\nplt.plot(sb1w,sb1e,pbw,pbe*(delta2/delta1)\n,sb2w,sb2e)\nplt.title('Weighted Error')\n\r\n\r\naxis([0,1,-deltaL,deltaL])\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaL,0,deltaL])\nset(gca,'XGrid','on','YGrid','on')\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7 Example 7.24\r\n\r\n%           Bandpass filter design using PM algorithm\r\n\r\n%\r\n\r\nws1 = 0.2*pi; wp1 = 0.35*pi; wp2 = 0.65*pi; ws2 = 0.8*pi;\r\n\r\nRp = 1.0; As = 60;\r\n\r\ndelta1 = (10^(Rp/20)-1)/(10^(Rp/20)+1);\r\n\r\ndelta2 = (1+delta1)*(10^(-As/20));\r\n\r\ndeltaH = max(delta1,delta2); deltaL = min(delta1,delta2);\r\n\r\nweights = [1 delta2/delta1 1];\r\n\r\ndelta_f =min((ws2-wp2)/(2*pi), (wp1-ws1)/(2*pi));\r\n\r\nM = ceil((-20*log10(sqrt(delta1*delta2))-13)/(14.6*delta_f)+1)\r\n\r\nf = [0 ws1/pi wp1/pi wp2/pi ws2/pi 1];\r\n\r\nm = [0 0 1 1 0 0];\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w=2*pi/1000;\r\n\r\nws1i=floor(ws1/delta_w)+1; wp1i = floor(wp1/delta_w)+1;\r\n\r\nws2i=floor(ws2/delta_w)+1; wp2i = floor(wp2/delta_w)+1;\r\n\r\nAsd = -max(db(1:1:ws1i))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(1:1:ws1/delta_w))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(1:1:ws1/delta_w))\r\n\r\nM = M+1;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(1:1:ws1/delta_w))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h);\r\n\r\n%\r\n\r\n% Plots\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem([0:1:M-1],h); title('Actual Impulse Response')\r\n\r\naxis([0,M-1,-0.4,0.5]); xlabel('n'); ylabel('h(n)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.4:0.2:0.5])\r\n\r\nsubplot(2,2,2);plot(w/pi,db);title('Magnitude Response in dB');\r\n\r\naxis([0,1,-80,10]); xlabel('frequency in pi units'); ylabel('DECIBELS')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0']);grid\r\n\r\nsubplot(2,2,3);plot(omega/pi,Hr);title('Amplitude Response');\r\n\r\naxis([0 1 -0.1 1.1]); xlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\r\n\r\ndelta_w = 2*pi/1000; sp_edge1 = ws1/delta_w+1; sp_edge2 = ws2/delta_w+1;\r\n\r\nsubplot(2,2,4);\r\n\r\nsb1w = omega(1:1:ws1i)/pi; sb1e = Hr(1:1:ws1i); \r\n\r\npbw = omega(wp1i:wp2i)/pi; pbe = Hr(wp1i:wp2i)-1;\r\n\r\nsb2w = omega(ws2i:501)/pi; sb2e = Hr(ws2i:501); \r\n\r\nplot(sb1w,sb1e,pbw,pbe*(delta2/delta1),sb2w,sb2e);\r\n\r\ntitle('Weighted Error');\r\n\r\naxis([0,1,-deltaL,deltaL]);\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaL,0,deltaL]);\r\n\r\nset(gca,'XGrid','on','YGrid','on')\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072400"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072500",
    "title": "ex072500",
    "displayName": "Chapter 7 Example 7.25\r",
    "description": "Chapter 7 Example 7.25\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.25\r\n\r\n# Highpass filter design using PM algorithm\r\n\r\n# ws = 0.6*np.pi; wp = 0.75*np.pi; Rp = 0.5; As = 50\ndelta1 = (10**(Rp/20)-1)/(10**(Rp/20)+1)\ndelta2 = (1+delta1)*(10**(-As/20))\ndeltaH = np.max(delta1,delta2); deltaL = np.min(delta1,delta2)\nweights = [1 delta2/delta1]\ndeltaf = (wp-ws)/(2*np.pi)\nM = ceil((-20*log10(np.sqrt(delta1*delta2))-13)/(14.6*deltaf)+1)\n# M must be odd\r\n\r\nM = 2*floor(M/2)+1\r\n\r\nf = [0 ws/np.pi wp/np.pi 1]\r\n\r\nm = [0 0 1 1]\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000; wsi=ws/delta_w; wpi = wp/delta_w\nAsd = -np.max(dbnp.arange(1, wsi + 1, 1))\r\n\r\nM = M+2\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(1, wsi + 1, 1))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h)\n# # Plots\r\n\r\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')\naxis([0 M-1 -0.4 0.4]); plt.xlabel('n')\n plt.ylabel('h(n)')\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.4, 0.4] + 0.2, 0.2)\r\n\r\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\n\r\n\r\naxis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('DECIBELS')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0]);grid\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\nplt.subplot(2, 2, 3)\nplt.plot(omega/np.pi,Hr)\nplt.title('Amplitude Response')\n\r\n\r\naxis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\r\n\r\nplt.subplot(2, 2, 4)\n\r\n\r\nsbw = omeganp.arange(1, wsi+1 + 1, 1)/np.pi; sbe = Hrnp.arange(1, wsi+1 + 1, 1)\npbw = omeganp.arange(wpi+1, 501 + 1)/np.pi; pbe = Hrnp.arange(wpi+1, 501 + 1)-1\nplt.plot(sbw,sbe,pbw,pbe)\n\r\n\r\naxis([0,1,-deltaH,deltaH]);plt.title('Error Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaH,-deltaL,0,deltaL,deltaH])\nset(gca,'XGrid','on')\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7 Example 7.25\r\n\r\n%           Highpass filter design using PM algorithm\r\n\r\n%\r\n\r\nws = 0.6*pi; wp = 0.75*pi; Rp = 0.5; As = 50;\r\n\r\ndelta1 = (10^(Rp/20)-1)/(10^(Rp/20)+1);\r\n\r\ndelta2 = (1+delta1)*(10^(-As/20));\r\n\r\ndeltaH = max(delta1,delta2); deltaL = min(delta1,delta2);\r\n\r\nweights = [1 delta2/delta1];\r\n\r\ndeltaf = (wp-ws)/(2*pi);\r\n\r\nM = ceil((-20*log10(sqrt(delta1*delta2))-13)/(14.6*deltaf)+1);\r\n\r\n% M must be odd\r\n\r\nM = 2*floor(M/2)+1\r\n\r\nf = [0 ws/pi wp/pi 1]\r\n\r\nm = [0 0 1 1];\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w = 2*pi/1000; wsi=ws/delta_w; wpi = wp/delta_w;\r\n\r\nAsd = -max(db(1:1:wsi))\r\n\r\nM = M+2;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(1:1:wsi))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h);\r\n\r\n%\r\n\r\n% Plots\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem([0:1:M-1],h); title('Actual Impulse Response')\r\n\r\naxis([0 M-1 -0.4 0.4]); xlabel('n'); ylabel('h(n)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.4:0.2:0.4])\r\n\r\nsubplot(2,2,2);plot(w/pi,db);title('Magnitude Response in dB');\r\n\r\naxis([0,1,-80,10]); xlabel('frequency in pi units'); ylabel('DECIBELS')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0]);grid\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0']);\r\n\r\nsubplot(2,2,3);plot(omega/pi,Hr);title('Amplitude Response');\r\n\r\naxis([0 1 -0.1 1.1]); xlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\r\n\r\nsubplot(2,2,4);\r\n\r\nsbw = omega(1:1:wsi+1)/pi; sbe = Hr(1:1:wsi+1);\r\n\r\npbw = omega(wpi+1:501)/pi; pbe = Hr(wpi+1:501)-1;\r\n\r\nplot(sbw,sbe,pbw,pbe);\r\n\r\naxis([0,1,-deltaH,deltaH]);title('Error Response');\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaH,-deltaL,0,deltaL,deltaH]);\r\n\r\nset(gca,'XGrid','on')",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072500"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072600",
    "title": "ex072600",
    "displayName": "Chapter 7 Example 7.26\r",
    "description": "Chapter 7 Example 7.26\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.26\r\n\r\n# Staircase filter design using PM algorithm\r\n\r\n# w1 = 0; w2 = 0.3*np.pi; delta1 = 0.01\nw3 = 0.4*np.pi; w4 = 0.7*np.pi; delta2 = 0.005\nw5 = 0.8*np.pi; w6 = np.pi; delta3 = 0.001\ndeltaH = np.max([delta1,delta2,delta3]); deltaL = np.min([delta1,delta2,delta3])\nweights = [delta3/delta1 delta3/delta2 1]\r\n\r\ndelta_f = np.min((w3-w2)/(2*np.pi), (w5-w3)/(2*np.pi))\r\n\r\nM = ceil((-20*log10(np.sqrt(delta1*delta2))-13)/(14.6*delta_f)+1)\r\n\r\nf = [0 w2/np.pi w3/np.pi w4/np.pi w5/np.pi 1]\r\n\r\nm = [1 1 0.5 0.5 0 0]\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000\nw1i=floor(w1/delta_w)+1; w2i = floor(w2/delta_w)+1\nw3i=floor(w3/delta_w)+1; w4i = floor(w4/delta_w)+1\nw5i=floor(w5/delta_w)+1; w6i = floor(w6/delta_w)+1\nAsd = -np.max(dbnp.arange(w5i, w6i + 1))\r\n\r\n# optimum value was found at M=49\r\n\r\nM = 49\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(w5i, w6i + 1))\r\n\r\n[Hr,omega,P,L] = ampl_res(h)\n# # Plots\r\n\r\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')\naxis([0,M-1,-0.1,0.6]); plt.xlabel('n')\n plt.ylabel('h(n)')\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.1, 0.6] + 0.1, 0.1)\r\n\r\nplt.subplot(2, 2, 2)\nplt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\n\r\n\r\naxis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('DECIBELS')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0']);grid\r\n\r\nplt.subplot(2, 2, 3)\nplt.plot(omega/np.pi,Hr)\nplt.title('Amplitude Response')\n\r\n\r\naxis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.5,1]);grid\r\n\r\ndelta_w = 2*np.pi/1000; sp_edge = w5/delta_w+1\nplt.subplot(2, 2, 4)\n \r\n\r\nb1w = omeganp.arange(w1i, w2i + 1)/np.pi; b1e = (Hrnp.arange(w1i, w2i + 1)-m(1))*weights(1)\nb2w = omeganp.arange(w3i, w4i + 1)/np.pi; b2e = (Hrnp.arange(w3i, w4i + 1)-m(3))*weights(2)\nb3w = omeganp.arange(w5i, w6i + 1)/np.pi; b3e = (Hrnp.arange(w5i, w6i + 1)-m(5))*weights(3)\nplt.plot(b1w,b1e,b2w,b2e,b3w,b3e)\n\r\n\r\nplt.title('Weighted Error')\n\r\n\r\naxis([0,1,-delta3,delta3])\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-delta3,0,delta3])\ngrid\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7 Example 7.26\r\n\r\n%           Staircase filter design using PM algorithm\r\n\r\n%\r\n\r\nw1 = 0; w2 = 0.3*pi; delta1 = 0.01;\r\n\r\nw3 = 0.4*pi; w4 = 0.7*pi; delta2 = 0.005;\r\n\r\nw5 = 0.8*pi; w6 = pi; delta3 = 0.001;\r\n\r\ndeltaH = max([delta1,delta2,delta3]); deltaL = min([delta1,delta2,delta3]);\r\n\r\nweights = [delta3/delta1 delta3/delta2 1]\r\n\r\ndelta_f = min((w3-w2)/(2*pi), (w5-w3)/(2*pi))\r\n\r\nM = ceil((-20*log10(sqrt(delta1*delta2))-13)/(14.6*delta_f)+1)\r\n\r\nf = [0 w2/pi w3/pi w4/pi w5/pi 1]\r\n\r\nm = [1 1 0.5 0.5 0 0];\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\ndelta_w = 2*pi/1000;\r\n\r\nw1i=floor(w1/delta_w)+1; w2i = floor(w2/delta_w)+1;\r\n\r\nw3i=floor(w3/delta_w)+1; w4i = floor(w4/delta_w)+1;\r\n\r\nw5i=floor(w5/delta_w)+1; w6i = floor(w6/delta_w)+1;\r\n\r\nAsd = -max(db(w5i:w6i))\r\n\r\n% optimum value was found at M=49\r\n\r\nM = 49;\r\n\r\nh = remez(M-1,f,m,weights);\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nAsd = -max(db(w5i:w6i))\r\n\r\n[Hr,omega,P,L] = ampl_res(h);\r\n\r\n%\r\n\r\n% Plots\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,2,1); stem([0:1:M-1],h); title('Actual Impulse Response')\r\n\r\naxis([0,M-1,-0.1,0.6]); xlabel('n'); ylabel('h(n)')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.1:0.1:0.6])\r\n\r\nsubplot(2,2,2);plot(w/pi,db);title('Magnitude Response in dB');\r\n\r\naxis([0,1,-80,10]); xlabel('frequency in pi units'); ylabel('DECIBELS')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0]);\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0']);grid\r\n\r\nsubplot(2,2,3);plot(omega/pi,Hr);title('Amplitude Response');\r\n\r\naxis([0 1 -0.1 1.1]); xlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.5,1]);grid\r\n\r\ndelta_w = 2*pi/1000; sp_edge = w5/delta_w+1;\r\n\r\nsubplot(2,2,4); \r\n\r\nb1w = omega(w1i:w2i)/pi; b1e = (Hr(w1i:w2i)-m(1))*weights(1); \r\n\r\nb2w = omega(w3i:w4i)/pi; b2e = (Hr(w3i:w4i)-m(3))*weights(2); \r\n\r\nb3w = omega(w5i:w6i)/pi; b3e = (Hr(w5i:w6i)-m(5))*weights(3); \r\n\r\nplot(b1w,b1e,b2w,b2e,b3w,b3e);\r\n\r\ntitle('Weighted Error');\r\n\r\naxis([0,1,-delta3,delta3]);\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr(w)')\r\n\r\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-delta3,0,delta3]);\r\n\r\ngrid\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072600"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072700",
    "title": "ex072700",
    "displayName": "Chapter 7 Example 7.27\r",
    "description": "Chapter 7 Example 7.27\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.27\r\n\r\n# Differentiator design using PM algorithm\r\n\r\n# f = [0 0.2 0.4 0.6 0.8 1];         # in w/np.pi unis\r\n\r\n# m = [1 1 2 2 3 3];                 # in sam/cycle (old version)\r\n\r\nm = [0,0.1,0.4,0.6,1.2,1.5];       # new Student Edition\r\n\r\nh = remez(25,f,m,'differentiator')\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n stemnp.arange([0, 25],h + 1); plt.title('Impulse Response')\n\r\n\r\nplt.xlabel('n')\n plt.ylabel('h(n)')\n axis([0,25,-0.6,0.6])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,25])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.6, 0.6] + 0.2, 0.2)\nplt.subplot(2, 1, 2)\n plt.plot(w/(2*np.pi)\n,mag); plt.title('Magnitude Response')\nplt.xlabel('Normalized frequency f')\n plt.ylabel('|H|')\nset(gca,'XTickMode','manual','XTick',f/2)\r\n\r\nset(gca,'YTickMode','manual','YTick',m)\r\n\r\ngrid\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7 Example 7.27\r\n\r\n%           Differentiator design using PM algorithm\r\n\r\n%\r\n\r\nf = [0 0.2 0.4 0.6 0.8 1];         % in w/pi unis\r\n\r\n%m = [1 1 2 2 3 3];                 % in sam/cycle (old version)\r\n\r\nm = [0,0.1,0.4,0.6,1.2,1.5];       % new Student Edition\r\n\r\nh = remez(25,f,m,'differentiator');\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,1,1); stem([0:25],h); title('Impulse Response');\r\n\r\nxlabel('n'); ylabel('h(n)'); axis([0,25,-0.6,0.6])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,25])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6:0.2:0.6]);\r\n\r\nsubplot(2,1,2); plot(w/(2*pi),mag); title('Magnitude Response')\r\n\r\nxlabel('Normalized frequency f'); ylabel('|H|')\r\n\r\nset(gca,'XTickMode','manual','XTick',f/2)\r\n\r\nset(gca,'YTickMode','manual','YTick',m)\r\n\r\ngrid",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex072800",
    "title": "ex072800",
    "displayName": "Chapter 7 Example 7.28\r",
    "description": "Chapter 7 Example 7.28\r",
    "category": "DSP - Chapter 07",
    "chapter": "07",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.28\r\n\r\n# Hilbert transformer design using PM algorithm\r\n\r\n# f = [0.05,0.95]; m = [1 1]; M = 51; N = M-1\nh = remez(N,f,m,'hilbert')\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n stemnp.arange([0, N],h + 1); plt.title('Impulse Response')\n\r\n\r\nplt.xlabel('n')\n plt.ylabel('h(n)')\n axis([0,N,-0.8,0.8])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,N])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.8, 0.8] + 0.2, 0.2)\nplt.subplot(2, 1, 2)\n plt.plot(w/np.pi,mag)\n plt.title('Magnitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('|H|')\nset(gca,'XTickMode','manual','XTick',[0,f,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 7 Example 7.28\r\n\r\n%           Hilbert transformer design using PM algorithm\r\n\r\n%\r\n\r\nf = [0.05,0.95]; m = [1 1]; M = 51; N = M-1;\r\n\r\nh = remez(N,f,m,'hilbert');\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,1,1); stem([0:N],h); title('Impulse Response');\r\n\r\nxlabel('n'); ylabel('h(n)'); axis([0,N,-0.8,0.8])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,N])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.8:0.2:0.8]);\r\n\r\nsubplot(2,1,2); plot(w/pi,mag); title('Magnitude Response')\r\n\r\nxlabel('frequency in pi units'); ylabel('|H|')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,f,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);grid",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter07",
      "dsp",
      "ex072800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  }
]

export default chapter07Programs
