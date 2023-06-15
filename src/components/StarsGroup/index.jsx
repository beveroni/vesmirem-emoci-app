import React from 'react';
import './style.css';

export const StarsGroup = ({ color }) => {
  return (
    <div className="question__stars-group">
      <svg
        className="stars-group-svg"
        width="30"
        height="30"
        viewBox="0 0 7.9374997 7.9374999"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs2" />
        <g id="layer1">
          <path
            fill={color}
            d="m 26.901622,24.708996 c 0.105334,-0.02989 0.271433,-0.08967 0.368664,-0.136497 0.09723,-0.04484 0.260438,-0.147456 0.362299,-0.223675 0.101863,-0.07622 0.253492,-0.235631 0.336833,-0.354194 0.08335,-0.118563 0.184623,-0.31733 0.225134,-0.441373 0.04629,-0.145464 0.07351,-0.324304 0.07351,-0.500006 0,-0.235632 -0.07929,-0.581307 -0.568334,-2.472487 -0.390079,-1.508389 -0.568336,-2.259918 -0.568336,-2.393625 0,-0.133009 0.02894,-0.243602 0.08276,-0.348714 0.05208,-0.09216 0.200826,-0.252071 0.376767,-0.398531 0.162051,-0.134504 1.022076,-0.82715 1.911677,-1.539175 1.257629,-1.006588 1.64788,-1.337967 1.753908,-1.489508 0.07524,-0.107105 0.169575,-0.283953 0.210087,-0.392553 0.04051,-0.108599 0.08218,-0.314839 0.09261,-0.45831 0.01161,-0.179837 4.05e-4,-0.331278 -0.04051,-0.487203 -0.03472,-0.124541 -0.112274,-0.324803 -0.175941,-0.445358 -0.07524,-0.142475 -0.197354,-0.291426 -0.348408,-0.425432 -0.127905,-0.113581 -0.284746,-0.232144 -0.34783,-0.26303 -0.06308,-0.02989 -0.207195,-0.08668 -0.32005,-0.123545 -0.166102,-0.0543 -0.667128,-0.09963 -2.652017,-0.239616 -1.586013,-0.111589 -2.502235,-0.190298 -2.603632,-0.222679 -0.09897,-0.02989 -0.215296,-0.111589 -0.316578,-0.217199 -0.14469,-0.150446 -0.250024,-0.375615 -1.070984,-2.283431 -0.5012,-1.1640083 -0.960149,-2.1892782 -1.020456,-2.2783996 -0.06019,-0.089171 -0.172468,-0.21969 -0.249442,-0.2904292 -0.0764,-0.070739 -0.236131,-0.1828259 -0.353617,-0.250078 -0.118066,-0.066754 -0.327574,-0.14646 -0.465318,-0.1758516 -0.138321,-0.02989 -0.34783,-0.0543 -0.465317,-0.0543 -0.118064,0 -0.308474,0.024908 -0.424224,0.051809 -0.115748,0.02989 -0.295164,0.092658 -0.398761,0.1424747 -0.1036,0.049816 -0.276065,0.1693755 -0.383133,0.265521 -0.107071,0.096145 -0.243077,0.247089 -0.302109,0.3357621 -0.05903,0.088673 -0.514511,1.1081144 -1.01218,2.2655469 -0.501199,1.1662497 -0.949154,2.1587407 -1.004424,2.2261917 -0.05208,0.06675 -0.189831,0.164394 -0.299794,0.216701 l -0.200249,0.09465 -2.456918,0.173859 c -1.35133,0.09565 -2.522954,0.191793 -2.603633,0.213712 -0.08045,0.01993 -0.212402,0.07124 -0.293427,0.109596 -0.08044,0.03985 -0.225135,0.124541 -0.321787,0.190797 -0.09608,0.06675 -0.2506,0.221682 -0.343778,0.345227 -0.101864,0.1355 -0.203142,0.327293 -0.255809,0.484713 -0.06078,0.181829 -0.08739,0.34174 -0.08682,0.52885 2.89e-4,0.147456 0.02315,0.346722 0.05209,0.442369 0.02894,0.09565 0.08681,0.244598 0.132534,0.330282 0.04629,0.08618 0.131957,0.214709 0.190988,0.285946 0.05903,0.07124 0.316579,0.298898 0.572966,0.506134 0.255808,0.207236 1.106749,0.891015 1.890667,1.519647 1.273428,1.021035 1.434669,1.161767 1.512338,1.319983 0.04629,0.09764 0.08682,0.243104 0.08739,0.323806 1.72e-4,0.0807 -0.06482,0.40152 -0.144689,0.713071 -0.07987,0.311352 -0.337412,1.302149 -0.572965,2.201336 -0.394709,1.506247 -0.428276,1.660827 -0.428855,1.965304 -4.05e-4,0.251573 0.01736,0.379601 0.07813,0.536323 0.04051,0.113083 0.130219,0.28196 0.193303,0.375117 0.06308,0.09316 0.207194,0.247587 0.320629,0.343733 0.113435,0.09615 0.305581,0.219191 0.426541,0.273491 0.120959,0.0543 0.307318,0.116072 0.414386,0.136995 0.107071,0.01993 0.280695,0.03985 0.386607,0.03985 0.105902,0 0.289956,-0.02491 0.409177,-0.0538 0.119224,-0.02989 0.316579,-0.104615 0.438694,-0.167383 0.122117,-0.06277 0.593165,-0.332773 1.046963,-0.600138 0.453742,-0.267513 1.405384,-0.827 2.114704,-1.243315 l 1.289575,-0.75686 2.260664,1.327057 c 1.259075,0.739075 2.353033,1.358193 2.46913,1.397348 0.124432,0.03985 0.33394,0.07572 0.520299,0.08369 0.203141,0.01 0.378504,-0.0046 0.503514,-0.03985 z"
            id="path856"
          />
          <path
            fill={color}
            d="m 28.61059,10.407802 c 0.03073,0.0066 0.08134,0.01341 0.11308,0.01411 0.03139,0.0013 0.08893,-0.0042 0.127002,-0.01107 0.03807,-0.0068 0.102891,-0.02978 0.144001,-0.05102 0.04111,-0.02124 0.100764,-0.06228 0.132522,-0.09109 0.03696,-0.03396 0.07521,-0.07993 0.106357,-0.128852 0.04177,-0.06562 0.08393,-0.1730927 0.301265,-0.7688927 0.173339,-0.475208 0.263583,-0.7096968 0.287286,-0.7469324 0.02357,-0.037044 0.05016,-0.063756 0.08176,-0.085413 0.02889,-0.018302 0.0931,-0.041804 0.161485,-0.05772 0.06291,-0.014541 0.393054,-0.085858 0.733759,-0.1583817 0.481654,-0.1025277 0.634488,-0.1396412 0.686915,-0.1668532 0.03713,-0.019192 0.09122,-0.055104 0.120236,-0.079623 0.02901,-0.02452 0.07562,-0.07606 0.103575,-0.1145376 0.03466,-0.048447 0.05882,-0.092199 0.07659,-0.1414054 0.01371,-0.039591 0.03051,-0.1063256 0.03652,-0.1488994 0.0072,-0.050315 0.0041,-0.1090554 -0.0086,-0.1677303 -0.0107,-0.049707 -0.0275,-0.1049011 -0.03723,-0.122426 -0.0099,-0.017282 -0.03459,-0.053436 -0.05526,-0.079654 -0.03042,-0.038599 -0.143189,-0.122058 -0.596937,-0.4416472 -0.362613,-0.2552897 -0.569565,-0.4067337 -0.588269,-0.4300914 -0.01854,-0.022355 -0.03213,-0.061513 -0.03782,-0.1052376 -0.0082,-0.062351 0.0063,-0.1399502 0.146562,-0.7873036 0.0855,-0.3950125 0.156593,-0.7454157 0.157851,-0.7787606 0.0014,-0.033339 -0.0026,-0.085557 -0.0087,-0.1161411 -0.0059,-0.030502 -0.02452,-0.084291 -0.04093,-0.1196309 -0.01664,-0.03528 -0.05302,-0.087094 -0.08102,-0.1147516 -0.02802,-0.027918 -0.07424,-0.064291 -0.102566,-0.080902 -0.02847,-0.01669 -0.0788,-0.036668 -0.111469,-0.04554 -0.03324,-0.00799 -0.08759,-0.015923 -0.1214,-0.016695 -0.03381,-7.739e-4 -0.09658,0.00813 -0.13944,0.019776 -0.04285,0.01163 -0.102406,0.034452 -0.13236,0.050794 -0.02996,0.016347 -0.320484,0.2358556 -0.645651,0.4878257 -0.327578,0.2539276 -0.611519,0.4669935 -0.6368,0.4779635 -0.02439,0.011227 -0.07492,0.018947 -0.110699,0.017968 L 28.607145,5.3170875 27.983953,5.01817 c -0.342675,-0.1643983 -0.642202,-0.303255 -0.66554,-0.3085559 -0.02292,-0.00586 -0.06384,-0.010181 -0.09018,-0.01096 -0.02646,-2.754e-4 -0.07636,0.00286 -0.111401,0.00764 -0.03501,0.00501 -0.09971,0.026301 -0.144084,0.04754 -0.04858,0.02333 -0.106994,0.062429 -0.147603,0.09882 -0.04688,0.042041 -0.08165,0.082811 -0.114677,0.1350048 -0.02607,0.041109 -0.05589,0.099826 -0.06586,0.1305596 -0.01001,0.030721 -0.02243,0.080391 -0.02659,0.1107169 -0.0041,0.030544 -0.0063,0.078443 -0.0046,0.1066343 0.0016,0.028183 0.02334,0.1279915 0.04842,0.2219505 0.02494,0.093882 0.108893,0.4045953 0.186463,0.6904816 0.12603,0.4643675 0.139958,0.5263535 0.130639,0.581394 -0.0062,0.033738 -0.02217,0.079973 -0.03633,0.1025281 -0.01426,0.022494 -0.08681,0.1026514 -0.161291,0.1781232 -0.07445,0.075416 -0.312181,0.3149266 -0.528369,0.5320367 -0.362175,0.3636656 -0.397671,0.4019677 -0.451784,0.4866781 -0.04469,0.070002 -0.06311,0.1081651 -0.07624,0.1604027 -0.01028,0.037219 -0.01859,0.096929 -0.01989,0.1317905 -0.0014,0.034868 0.006,0.098241 0.01637,0.1410503 0.0103,0.042813 0.03482,0.1042448 0.05436,0.136464 0.01954,0.032219 0.05351,0.075774 0.07562,0.096731 0.02229,0.020656 0.06061,0.050776 0.08615,0.065752 0.02554,0.014974 0.07433,0.034052 0.108193,0.042861 0.03407,0.0085 0.09487,0.01562 0.135441,0.01541 0.04057,-2.23e-4 0.202004,-0.0088 0.358811,-0.01912 0.156822,-0.01035 0.485443,-0.03163 0.730262,-0.047287 l 0.445089,-0.028467 0.309807,0.6891559 c 0.172555,0.383816 0.326561,0.7108837 0.347612,0.7382007 0.02293,0.02868 0.06709,0.0683 0.110611,0.09686 0.04722,0.03148 0.09206,0.05225 0.128462,0.06008 z"
            id="path856-5"
          />
          <path
            fill={color}
            d="m 10.281052,22.228866 c 0.02255,0.0048 0.05969,0.0098 0.08298,0.01036 0.02304,9.54e-4 0.06526,-0.0031 0.0932,-0.0081 0.02794,-0.005 0.07551,-0.02185 0.105677,-0.03744 0.03017,-0.01559 0.07395,-0.04571 0.09725,-0.06685 0.02712,-0.02492 0.05519,-0.05866 0.07805,-0.09456 0.03065,-0.04816 0.06159,-0.127026 0.221086,-0.56426 0.127207,-0.348736 0.193433,-0.520818 0.210828,-0.548144 0.0173,-0.02718 0.03681,-0.04679 0.06,-0.06268 0.0212,-0.01343 0.06832,-0.03067 0.118507,-0.04236 0.04617,-0.01067 0.288447,-0.06301 0.538476,-0.11623 0.353467,-0.07524 0.465626,-0.102477 0.5041,-0.122447 0.02725,-0.01408 0.06694,-0.04044 0.08824,-0.05843 0.02129,-0.01799 0.0555,-0.05582 0.07601,-0.08405 0.02543,-0.03555 0.04316,-0.06766 0.05621,-0.103771 0.01006,-0.02905 0.02239,-0.07803 0.0268,-0.109272 0.0053,-0.03693 0.003,-0.08003 -0.0063,-0.12309 -0.0079,-0.03648 -0.02018,-0.07698 -0.02732,-0.08984 -0.0073,-0.01268 -0.02538,-0.03922 -0.04055,-0.05845 -0.02232,-0.02833 -0.105082,-0.08957 -0.438069,-0.324107 -0.266107,-0.187347 -0.41798,-0.298486 -0.431707,-0.315626 -0.01361,-0.01641 -0.02358,-0.04514 -0.02775,-0.07723 -0.006,-0.04576 0.0046,-0.102704 0.107557,-0.577771 0.06274,-0.289884 0.114917,-0.547031 0.11584,-0.571501 10e-4,-0.02447 -0.0019,-0.06279 -0.0064,-0.08523 -0.0043,-0.02238 -0.01799,-0.06186 -0.03004,-0.08779 -0.01221,-0.02589 -0.03891,-0.06391 -0.05946,-0.08421 -0.02056,-0.02049 -0.05448,-0.04718 -0.07527,-0.05937 -0.02089,-0.01225 -0.05783,-0.02691 -0.0818,-0.03342 -0.02439,-0.0059 -0.06428,-0.01168 -0.08909,-0.01226 -0.02481,-5.68e-4 -0.07088,0.0059 -0.102329,0.01452 -0.03145,0.0085 -0.07515,0.02528 -0.09713,0.03727 -0.02199,0.012 -0.23519,0.173085 -0.473817,0.357996 -0.240397,0.186347 -0.44877,0.342708 -0.467322,0.350758 -0.0179,0.0082 -0.05498,0.01391 -0.08124,0.01319 l -0.04775,-0.0015 -0.4573355,-0.219364 c -0.251475,-0.120645 -0.471286,-0.222546 -0.488413,-0.226436 -0.01682,-0.0043 -0.04685,-0.0075 -0.06618,-0.008 -0.01942,-2.01e-4 -0.05604,0.0021 -0.08175,0.0056 -0.02569,0.0037 -0.07317,0.0193 -0.105738,0.03489 -0.03565,0.01712 -0.07852,0.04581 -0.10832,0.07252 -0.0344,0.03085 -0.05992,0.06077 -0.08416,0.09907 -0.01913,0.03017 -0.04102,0.07326 -0.04833,0.09581 -0.0073,0.02255 -0.01646,0.05899 -0.01951,0.08125 -0.003,0.02241 -0.0046,0.05756 -0.0034,0.07825 0.0012,0.02068 0.01713,0.09393 0.03553,0.162881 0.0183,0.06889 0.07991,0.296916 0.136838,0.506717 0.09249,0.34078 0.102709,0.386269 0.09587,0.426661 -0.0046,0.02476 -0.01627,0.05869 -0.02666,0.07524 -0.01046,0.0165 -0.06371,0.07533 -0.118365,0.130717 -0.05464,0.05535 -0.229097,0.231112 -0.387749,0.390441 -0.265786,0.266879 -0.291835,0.294987 -0.331546,0.357153 -0.0328,0.05137 -0.04631,0.07938 -0.05595,0.117713 -0.0075,0.02731 -0.01364,0.07113 -0.0146,0.09672 -10e-4,0.02559 0.0044,0.07209 0.01201,0.103511 0.0076,0.03142 0.02555,0.0765 0.03989,0.100145 0.01434,0.02364 0.03927,0.0556 0.05549,0.07099 0.01636,0.01516 0.04448,0.03727 0.06322,0.04825 0.01874,0.01099 0.05455,0.02499 0.0794,0.03145 0.025,0.0062 0.06962,0.01146 0.0994,0.01131 0.02977,-1.64e-4 0.148242,-0.0065 0.263317,-0.01403 0.115085,-0.0076 0.356247,-0.02321 0.53591,-0.0347 l 0.326633,-0.02089 0.227355,0.505744 c 0.126631,0.281668 0.2396495,0.52169 0.2550975,0.541737 0.01683,0.02105 0.04923,0.05012 0.08117,0.07108 0.03465,0.0231 0.06756,0.03834 0.09427,0.04409 z"
            id="path856-5-6"
          />
          <ellipse
            cx="7.6894679"
            cy="16.009222"
            rx="0.65934169"
            ry="0.70773661"
            fill={color}
            id="ellipse3525-5"
          />
          <ellipse
            cx="31.766329"
            cy="9.9584904"
            rx="0.65934169"
            ry="0.70773661"
            fill={color}
            id="ellipse3525-5-7"
          />
        </g>
      </svg>
    </div>
  );
};
