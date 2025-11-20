// Chapter 07: Example 7.9 Lowpass filter design - Kaiser window
// Chapter 07: Example 7.9 Lowpass filter design - Kaiser window

const ex070900 = {
  "id": "ex070900",
  "title": "ex070900",
  "displayName": "Chapter 07: Example 7.9 Lowpass filter design - Kaiser window",
  "description": "Chapter 07: Example 7.9 Lowpass filter design - Kaiser window",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 07: Example 7.9 Lowpass filter design - Kaiser window\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.9 Lowpass filter design - Kaiser window\r\n\r\n# wp = 0.2*np.pi; ws = 0.3*np.pi; As = 50\ntr_width = ws - wp\nM = np.ceil((As-7.95)/(14.36*tr_width/(2*np.pi))+1) + 1\r\n\r\nn=[0:1:M-1]\nbeta = 0.1102*(As-8.7)\r\n\r\nwc = (ws+wp)/2\nhd = ideal_lp(wc,M)\nw_kai = (kaiser(M,beta))'\nh = hd * w_kai\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000\nAs = -np.round(np.max(dbnp.arange(ws/delta_w+1, 501 + 1, 1))) # Min Stopband Attenuation\r\n\r\n# Plots\r\n\r\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')\nplt.plt.axis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n plt.plt.stem(n,w_kai);plt.title('Kaiser Window')\nplt.plt.axis([0 M-1 0 1.1]);  plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n plt.plt.stem(n,h);plt.title('Actual Impulse Response')\nplt.plt.axis([0 M-1 -0.1 0.3]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\nplt.grid(True)\nplt.plt.axis([0 1 -100 10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex070900;
