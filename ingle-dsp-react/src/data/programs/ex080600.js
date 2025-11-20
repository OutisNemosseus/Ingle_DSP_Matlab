// Chapter 8: Example 8.6
// Chapter 8: Example 8.6

const ex080600 = {
  "id": "ex080600",
  "title": "ex080600",
  "displayName": "Chapter 8: Example 8.6",
  "description": "Chapter 8: Example 8.6",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.6\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 8: Example 8.6\r\n\r\n# Chebyshev-1 Lowpass Analog filter design\r\n\r\n# Wp = 0.2*np.pi; Ws = 0.3*np.pi; Rp = 1; As = 16\nRipple = 10 ** (-Rp/20); Attn = 10 ** (-As/20)\n# Analog filter design:\r\n\r\n[b,a] = afd_chb1(Wp,Ws,Rp,As)\n# # *** Chebyshev-1 Filter Order =  4 \r\n\r\n\r\n\r\n# Calculation of second-order sections:\r\n\r\n[C,B,A] = sdir2cas(b,a)\r\n\r\n# # C = 0.0383\r\n\r\n# # B = 0     0     1\r\n\r\n# # A = 1.0000    0.4233    0.1103\r\n\r\n# # 1.0000    0.1753    0.3895\r\n\r\n\r\n\r\n# Calculation of Frequency Response:\r\n\r\n[db,mag,pha,w] = freqs_m(b,a,0.5*np.pi)\n# Calculation of Impulse response:\r\n\r\n[ha,x,t] = impulse(b,a)\n# Plots\r\n\r\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n plt.plt.plt.plot(w/np.pi,mag)\nplt.title('Magnitude Response')\nplt.xlabel('Analog frequency in np.pi units')\n plt.ylabel('|H|')\n plt.plt.axis([0,0.5,0,1.1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5])\nset(gca,'YTickmode','manual','YTick',[0,Attn,Ripple,1]); plt.grid(True)\nplt.subplot(2, 2, 2)\n plt.plt.plt.plot(w/np.pi,db)\nplt.title('Magnitude in dB')\nplt.xlabel('Analog frequency in np.pi units')\n plt.ylabel('decibels')\n plt.plt.axis([0,0.5,-30,5])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5])\nset(gca,'YTickmode','manual','YTick',[-30,-As,-Rp,0]); plt.grid(True)\nset(gca,'YTickLabelMode','manual','YTickLabels',['30';'16';' 1';' 0'])\r\n\r\nplt.subplot(2, 2, 3)\n plt.plt.plt.plot(w/np.pi,pha/np.pi)\n plt.title('Phase Response')\nplt.xlabel('Analog frequency in np.pi units')\n plt.ylabel('radians')\n plt.plt.axis([0,0.5,-1,1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5])\nset(gca,'YTickmode','manual','YTick',[-1,-0.5,0,0.5,1]); plt.grid(True)\nplt.subplot(2, 2, 4)\n plt.plt.plt.plot(t,ha,[0,np.max(t)\n],[0,0]); plt.title('Impulse Response')\nplt.xlabel('time in seconds')\n plt.ylabel('ha(t)')\n plt.plt.axis([0,np.max(t),np.min(ha),np.max(ha)])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 8: Example 8.6\r\n\r\n%            Chebyshev-1 Lowpass Analog filter design\r\n\r\n%\r\n\r\nWp = 0.2*pi; Ws = 0.3*pi; Rp = 1; As = 16;\r\n\r\nRipple = 10 ^ (-Rp/20); Attn = 10 ^ (-As/20);\r\n\r\n\r\n\r\n% Analog filter design:\r\n\r\n[b,a] = afd_chb1(Wp,Ws,Rp,As);\r\n\r\n%%*** Chebyshev-1 Filter Order =  4 \r\n\r\n\r\n\r\n% Calculation of second-order sections:\r\n\r\n[C,B,A] = sdir2cas(b,a)\r\n\r\n%%C = 0.0383\r\n\r\n%%B = 0     0     1\r\n\r\n%%A = 1.0000    0.4233    0.1103\r\n\r\n%%    1.0000    0.1753    0.3895\r\n\r\n\r\n\r\n% Calculation of Frequency Response:\r\n\r\n[db,mag,pha,w] = freqs_m(b,a,0.5*pi);\r\n\r\n\r\n\r\n% Calculation of Impulse response:\r\n\r\n[ha,x,t] = impulse(b,a);\r\n\r\n\r\n\r\n% Plots\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,2,1); plot(w/pi,mag);title('Magnitude Response')\r\n\r\nxlabel('Analog frequency in pi units'); ylabel('|H|'); axis([0,0.5,0,1.1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5]);\r\n\r\nset(gca,'YTickmode','manual','YTick',[0,Attn,Ripple,1]); grid\r\n\r\nsubplot(2,2,2); plot(w/pi,db);title('Magnitude in dB')\r\n\r\nxlabel('Analog frequency in pi units'); ylabel('decibels'); axis([0,0.5,-30,5])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5]);\r\n\r\nset(gca,'YTickmode','manual','YTick',[-30,-As,-Rp,0]); grid\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['30';'16';' 1';' 0'])\r\n\r\nsubplot(2,2,3); plot(w/pi,pha/pi); title('Phase Response')\r\n\r\nxlabel('Analog frequency in pi units'); ylabel('radians'); axis([0,0.5,-1,1])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,0.5]);\r\n\r\nset(gca,'YTickmode','manual','YTick',[-1,-0.5,0,0.5,1]); grid\r\n\r\nsubplot(2,2,4); plot(t,ha,[0,max(t)],[0,0]); title('Impulse Response')\r\n\r\nxlabel('time in seconds'); ylabel('ha(t)'); axis([0,max(t),min(ha),max(ha)])",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex080600"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex080600;
