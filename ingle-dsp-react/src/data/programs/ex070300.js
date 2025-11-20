// Chapter 7: Example 7.3 Amplitude vs Magnitude response
// Chapter 7: Example 7.3 Amplitude vs Magnitude response

const ex070300 = {
  "id": "ex070300",
  "title": "ex070300",
  "displayName": "Chapter 7: Example 7.3 Amplitude vs Magnitude response",
  "description": "Chapter 7: Example 7.3 Amplitude vs Magnitude response",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7: Example 7.3 Amplitude vs Magnitude response\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.3 Amplitude vs Magnitude response\r\n\r\n# h = [1,1,1]\nw = np.arange(0, 501)*np.pi/500\nH = freqz(h,1,w)\nmagH = np.abs(H); phaH = np.angle(H)\nampH = np.ones(1,501)+2*np.cos(w); angH = -w\nplt.subplot(1, 1, 1)\nplt.subplot(2, 2, 1)\n plt.plt.plt.plot(w/np.pi,magH)\n plt.title('Magnitude Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('|H|')\n plt.grid(True)\nplt.xlim(0, 1)\nplt.ylim(-1.5, 3.5)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0])\r\n\r\nplt.subplot(2, 2, 3)\n plt.plt.plt.plot(w/np.pi,phaH/np.pi)\n plt.title('Piecewise Linear Phase Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('angle in np.pi units')\n plt.grid(True)\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6667;0;0.3333])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0';' 2/3'])\r\n\r\nplt.subplot(2, 2, 2)\n plt.plt.plt.plot(w/np.pi,ampH)\n plt.title('Amplitude Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\n plt.grid(True)\nplt.xlim(0, 1)\nplt.ylim(-1.5, 3.5)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0])\r\n\r\nplt.subplot(2, 2, 4)\n plt.plt.plt.plot(w/np.pi,angH/np.pi)\n plt.title('Linear Phase Response')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('angle in np.pi units')\n plt.grid(True)\nplt.xlim(0, 1)\nplt.ylim(-1, 1)\nset(gca,'XTickMode','manual','XTick',[0;0.6667;1])\r\n\r\nset(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6667;0])\r\n\r\nset(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0'])\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex070300;
