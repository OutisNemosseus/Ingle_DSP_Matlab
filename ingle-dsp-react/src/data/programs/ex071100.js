// Chapter 07: Example 7.11 Bandstop filter design - Kaiser window
// Chapter 07: Example 7.11 Bandstop filter design - Kaiser window

const ex071100 = {
  "id": "ex071100",
  "title": "ex071100",
  "displayName": "Chapter 07: Example 7.11 Bandstop filter design - Kaiser window",
  "description": "Chapter 07: Example 7.11 Bandstop filter design - Kaiser window",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 07: Example 7.11 Bandstop filter design - Kaiser window\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.11 Bandstop filter design - Kaiser window\r\n\r\n# M = 45; As = 60; n=[0:1:M-1]\nbeta = 0.1102*(As-8.7)\r\n\r\nw_kai = (kaiser(M,beta))'\nwc1 = np.pi/3; wc2 = 2*np.pi/3\nhd = ideal_lp(wc1,M) + ideal_lp(np.pi,M) - ideal_lp(wc2,M)\nh = hd * w_kai\n[db,mag,pha,grd,w] = freqz_m(h,[1])\n# plt.subplot(1, 1, 1)\nplt.subplot(2, 1, 2)\nplt.plt.plt.plot(w/np.pi,db)\n\r\n\r\nplt.title('Magnitude Response in dB')\nplt.grid(True)\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nplt.xlim(0, 1)\nplt.ylim(-80, 10)\nset(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])\r\n\r\nset(gca,'XTickLabelMode','manual',...\r\n\r\n    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\n# pause\nprint -deps2 ex071101.eps\r\n\r\n# M = 45; As = 60; n=[0:1:M-1]\nbeta = 0.1102*(As-8.7)+.3\r\n\r\nw_kai = (kaiser(M,beta))'\nwc1 = np.pi/3; wc2 = 2*np.pi/3\nhd = ideal_lp(wc1,M) + ideal_lp(np.pi,M) - ideal_lp(wc2,M)\nh = hd * w_kai\n[db,mag,pha,grd,w] = freqz_m(h,[1])\n# # plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')\nplt.plt.axis([-1 M -0.2 0.8]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n plt.plt.stem(n,w_kai);plt.title('Kaiser Window')\nplt.plt.axis([-1 M 0 1.1]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n plt.plt.stem(n,h);plt.title('Actual Impulse Response')\nplt.plt.axis([-1 M -0.2 0.8]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi,db)\n\r\n\r\nplt.title('Magnitude Response in dB')\nplt.grid(True)\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nplt.xlim(0, 1)\nplt.ylim(-80, 10)\nset(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])\r\n\r\nset(gca,'XTickLabelMode','manual',...\r\n\r\n    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\r\n\r\nprint -deps2 ex071102.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex071100;
