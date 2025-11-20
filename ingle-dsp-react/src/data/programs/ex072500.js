// Chapter 7 Example 7.25
// Chapter 7 Example 7.25

const ex072500 = {
  "id": "ex072500",
  "title": "ex072500",
  "displayName": "Chapter 7 Example 7.25",
  "description": "Chapter 7 Example 7.25",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7 Example 7.25\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.25\r\n\r\n# Highpass filter design using PM algorithm\r\n\r\n# ws = 0.6*np.pi; wp = 0.75*np.pi; Rp = 0.5; As = 50\ndelta1 = (10**(Rp/20)-1)/(10**(Rp/20)+1)\ndelta2 = (1+delta1)*(10**(-As/20))\ndeltaH = np.max(delta1,delta2); deltaL = np.min(delta1,delta2)\nweights = [1 delta2/delta1]\ndeltaf = (wp-ws)/(2*np.pi)\nM = np.ceil((-20*np.log10(np.sqrt(delta1*delta2))-13)/(14.6*deltaf)+1)\n# M must be odd\r\n\r\nM = 2*np.floor(M/2)+1\r\n\r\nf = [0 ws/np.pi wp/np.pi 1]\r\n\r\nm = [0 0 1 1]\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\ndelta_w = 2*np.pi/1000; wsi=ws/delta_w; wpi = wp/delta_w\nAsd = -np.max(dbnp.arange(1, wsi + 1, 1))\r\n\r\nM = M+2\nh = remez(M-1,f,m,weights)\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nAsd = -np.max(dbnp.arange(1, wsi + 1, 1))\r\n\r\nM\r\n\r\n[Hr,omega,P,L] = ampl_res(h)\n# # Plots\r\n\r\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')\nplt.plt.axis([0 M-1 -0.4 0.4]); plt.xlabel('n')\n plt.ylabel('h(n)')\nset(gca,'XTickMode','manual','XTick',[0,M-1])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.4, 0.4] + 0.2, 0.2)\r\n\r\nplt.subplot(2, 2, 2)\nplt.plt.plt.plot(w/np.pi,db)\nplt.title('Magnitude Response in dB')\n\r\n\r\nplt.plt.axis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('DECIBELS')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-50,0]);plt.grid(True)\nset(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])\nplt.subplot(2, 2, 3)\nplt.plt.plt.plot(omega/np.pi,Hr)\nplt.title('Amplitude Response')\n\r\n\r\nplt.plt.axis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0,1]);plt.grid(True)\nplt.subplot(2, 2, 4)\n\r\n\r\nsbw = omeganp.arange(1, wsi+1 + 1, 1)/np.pi; sbe = Hrnp.arange(1, wsi+1 + 1, 1)\npbw = omeganp.arange(wpi+1, 501 + 1)/np.pi; pbe = Hrnp.arange(wpi+1, 501 + 1)-1\nplt.plt.plt.plot(sbw,sbe,pbw,pbe)\n\r\n\r\nplt.plt.axis([0,1,-deltaH,deltaH]);plt.title('Error Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr(w)')\nset(gca,'XTickMode','manual','XTick',f)\r\n\r\nset(gca,'YTickMode','manual','YTick',[-deltaH,-deltaL,0,deltaL,deltaH])\nset(gca,'XGrid','on')\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex072500;
