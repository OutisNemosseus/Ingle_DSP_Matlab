// Chapter 07: Example 7.10 Bandpass filter design - Blackman window
// Chapter 07: Example 7.10 Bandpass filter design - Blackman window

const ex071000 = {
  "id": "ex071000",
  "title": "ex071000",
  "displayName": "Chapter 07: Example 7.10 Bandpass filter design - Blackman window",
  "description": "Chapter 07: Example 7.10 Bandpass filter design - Blackman window",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 07: Example 7.10 Bandpass filter design - Blackman window\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.10 Bandpass filter design - Blackman window\r\n\r\n# ws1 = 0.2*np.pi; wp1 = 0.35*np.pi\nwp2 = 0.65*np.pi; ws2 = 0.8*np.pi\nAs = 60\ntr_width = np.min((wp1-ws1),(ws2-wp2))\r\n\r\nM = np.ceil(11*np.pi/tr_width) + 1 # ;M=68\r\n\r\nn=[0:1:M-1]\nwc1 = (ws1+wp1)/2; wc2 = (wp2+ws2)/2\nhd = ideal_lp(wc2,M) - ideal_lp(wc1,M)\nw_bla = (blackman(M))'\nh = hd * w_bla\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000\nRp = -np.min(dbnp.arange(wp1/delta_w+1, wp2/delta_w + 1, 1)) # Actua; Passband Ripple\r\n\r\nAs = -np.round(np.max(dbnp.arange(ws2/delta_w+1, 501 + 1, 1))) # Min Stopband Attenuation\r\n\r\n# plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')\nplt.plt.axis([0 M-1 -0.4 0.5]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n plt.plt.stem(n,w_bla);plt.title('Blackman Window')\nplt.plt.axis([0 M-1 0 1.1]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n plt.plt.stem(n,h);plt.title('Actual Impulse Response')\nplt.plt.axis([0 M-1 -0.4 0.5]); plt.xlabel('n')\n plt.ylabel('h(n)')\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi,db)\n%set(gca,'FontName','cmr12')\nplt.title('Magnitude Response in dB')\nplt.grid(True)\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Decibels')\nplt.xlim(0, 1)\nplt.ylim(-150, 10)\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.35,0.65,0.8,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-60,0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex071000;
