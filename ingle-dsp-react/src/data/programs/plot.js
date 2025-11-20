// Chapter 7: Example 7.22
// Chapter 7: Example 7.22

const plot = {
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
};

export default plot;
