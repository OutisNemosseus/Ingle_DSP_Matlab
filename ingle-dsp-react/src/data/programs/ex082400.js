// Chapter 8: Example 8.24
// Chapter 8: Example 8.24

const ex082400 = {
  "id": "ex082400",
  "title": "ex082400",
  "displayName": "Chapter 8: Example 8.24",
  "description": "Chapter 8: Example 8.24",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.24\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n# Chapter 8: Example 8.24\r\n\r\n# Elliptic Lowpass Filter Design:\r\n\r\n# Use of the ELLIP function\r\n\r\n# # Digital Filter Specifications:\r\n\r\nwp = 0.2*np.pi;                         # digital Passband freq in Hz\r\n\r\nws = 0.3*np.pi;                         # digital Stopband freq in Hz\r\n\r\nRp = 1;                              # Passband ripple in dB\r\n\r\nAs = 15;                             # Stopband attenuation in dB\r\n\r\n\r\n\r\n# Analog Prototype Specifications:\r\n\r\nT = 1;                               # Set T=1\r\n\r\nOmegaP = (2/T)*np.tan(wp/2);            # Prewarp Prototype Passband freq\r\n\r\nOmegaS = (2/T)*np.tan(ws/2);            # Prewarp Prototype Stopband freq\r\n\r\nep = np.sqrt(10**(Rp/10)-1);             # Passband Ripple parameter\r\n\r\nRipple = np.sqrt(1/(1+ep*ep));          # Passband Ripple\r\n\r\nAttn = 1/(10**(As/20));               # Stopband Attenuation\r\n\r\n\r\n\r\n# Analog Elliptic Filter order calculations:\r\n\r\nep = np.sqrt(10**(Rp/10)-1);             # Passband Ripple Factor\r\n\r\nA = 10**(As/20);                      # Stopband Attenuation Factor\r\n\r\nOmegaC = OmegaP;                     # Analog Prototype Cutoff freq\r\n\r\nk = OmegaP/OmegaS;                   # Analog Prototype Transition Ratio\nk1 = ep/np.sqrt(A*A-1);                 # Analog Prototype Intermediate cal.\r\n\r\ncapk = ellipke([k**2 1-k**2])\ncapk1 = ellipke([(k1 **2) 1-(k1 **2)])\nN = np.ceil(capk(1)*capk1(2)/(capk(2)*capk1(1)))\nfprintf('\\\n*** Elliptic Filter Order = # 2.0f \\\n',N)\r\n\r\n# # *** Elliptic Filter Order =  3 \r\n\r\n\r\n\r\n# Digital Elliptic Filter Design:\r\n\r\nwn = wp/np.pi;                          # Digital Passband freq in np.pi units\r\n\r\n[b,a]=ellip(N,Rp,As,wn)\n[b0,B,A] = dir2cas(b,a)\r\n\r\n# # b0 = 0.1214\r\n\r\n# # B = 1.0000   -1.4211    1.0000\r\n\r\n# # 1.0000    1.0000         0\r\n\r\n# # A = 1.0000   -1.4928    0.8612\r\n\r\n# # 1.0000   -0.6183         0",
  "matlabCode": "% Chapter 8: Example 8.24\r\n\r\n%            Elliptic Lowpass Filter Design:\r\n\r\n%                Use of the ELLIP function\r\n\r\n%\r\n\r\n% Digital Filter Specifications:\r\n\r\nwp = 0.2*pi;                         %digital Passband freq in Hz\r\n\r\nws = 0.3*pi;                         %digital Stopband freq in Hz\r\n\r\nRp = 1;                              %Passband ripple in dB\r\n\r\nAs = 15;                             %Stopband attenuation in dB\r\n\r\n\r\n\r\n% Analog Prototype Specifications:\r\n\r\nT = 1;                               %Set T=1\r\n\r\nOmegaP = (2/T)*tan(wp/2);            %Prewarp Prototype Passband freq\r\n\r\nOmegaS = (2/T)*tan(ws/2);            %Prewarp Prototype Stopband freq\r\n\r\nep = sqrt(10^(Rp/10)-1);             % Passband Ripple parameter\r\n\r\nRipple = sqrt(1/(1+ep*ep));          % Passband Ripple\r\n\r\nAttn = 1/(10^(As/20));               % Stopband Attenuation\r\n\r\n\r\n\r\n% Analog Elliptic Filter order calculations:\r\n\r\nep = sqrt(10^(Rp/10)-1);             %Passband Ripple Factor\r\n\r\nA = 10^(As/20);                      %Stopband Attenuation Factor\r\n\r\nOmegaC = OmegaP;                     %Analog Prototype Cutoff freq\r\n\r\nk = OmegaP/OmegaS;                   %Analog Prototype Transition Ratio;\r\n\r\nk1 = ep/sqrt(A*A-1);                 %Analog Prototype Intermediate cal.\r\n\r\ncapk = ellipke([k.^2 1-k.^2]);\r\n\r\ncapk1 = ellipke([(k1 .^2) 1-(k1 .^2)]);\r\n\r\nN = ceil(capk(1)*capk1(2)/(capk(2)*capk1(1)));\r\n\r\nfprintf('\\n*** Elliptic Filter Order = %2.0f \\n',N)\r\n\r\n%%*** Elliptic Filter Order =  3 \r\n\r\n\r\n\r\n% Digital Elliptic Filter Design:\r\n\r\nwn = wp/pi;                          %Digital Passband freq in pi units\r\n\r\n[b,a]=ellip(N,Rp,As,wn);\r\n\r\n[b0,B,A] = dir2cas(b,a)\r\n\r\n%%b0 = 0.1214\r\n\r\n%%B = 1.0000   -1.4211    1.0000\r\n\r\n%%    1.0000    1.0000         0\r\n\r\n%%A = 1.0000   -1.4928    0.8612\r\n\r\n%%    1.0000   -0.6183         0",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex082400"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex082400;
