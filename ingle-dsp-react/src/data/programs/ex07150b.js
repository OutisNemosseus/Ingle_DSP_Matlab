// Chapter 7: Example 7.15
// Chapter 7: Example 7.15

const ex07150b = {
  "id": "ex07150b",
  "title": "ex07150b",
  "displayName": "Chapter 7: Example 7.15",
  "description": "Chapter 7: Example 7.15",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7: Example 7.15\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.15\r\n\r\n# Freq. Samp. Tech.: Lowpass,Optimum method\r\n\r\n# # (a) T1 = 0.39\r\n\r\nM = 40; alpha = (M-1)/2; l = 0:M-1; wl = (2*np.pi/M)*l\nHrs = [np.ones(1,5),0.3904,np.zeros(1,29),0.3904,np.ones(1,4)]\nHdr = [1,1,0,0]; wdl = [0,0.25,0.25,1]\nk1 = 0:np.floor((M-1)/2); k2 = np.floor((M-1)/2)+1:M-1\nangH = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = Hrs*np.exp(1j*angH)\nh = np.real(ifft(H,M))\n[db,mag,pha,grd,w] = freqz_m(h,1)\n[Hr,ww,a,L] = Hr_Type2(h)\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\nplt.plt.plt.plot(wlnp.arange(1, 21 + 1)np.pi,Hrsnp.arange(1, 21 + 1),'o',wdl,Hdr)\nplt.plt.axis([0,1,-0.1,1.1]); plt.title('Frequency Samples, M=40,T1=0.39')\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(k)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.39,1]); plt.grid(True)\nplt.subplot(2, 2, 2)\n plt.plt.stem(l,h); plt.plt.axis([-1,M,-0.1,0.3])\r\n\r\nplt.title('Impulse Response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plt.plt.plot(ww/np.pi,Hr,wlnp.arange(1, 21 + 1)np.pi,Hrsnp.arange(1, 21 + 1),'o')\nplt.plt.axis([0,1,-0.1,1.1]); plt.title('Amplitude Response')\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,0.39,1]); plt.grid(True)\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi,db)\n plt.plt.axis([0,1,-100,10]); plt.grid(True)\nplt.title('Magnitude Response')\n plt.xlabel('frequency in np.pi units')\n\r\n\r\nplt.ylabel('Decibels')\n\r\n\r\nset(gca,'XTickMode','Manual','XTick',[0;0.2;0.3;1])\nset(gca,'YTickMode','Manual','YTick',[-43;0])\nset(gca,'YTickLabelMode','manual','YTickLabels',['43';' 0'])\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex07150b;
