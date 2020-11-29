window.onload = () => {
  var counter = 0;
  var cntUpFuncId;

  const bgcountDisp = document.getElementById("bgcount");
  const resetBt = document.getElementById("bt");

  var bgStopFlg = false;

  var bgFunc = () => {
    var cntUpFunc = () => {
      counter = counter + 1;
      if (bgStopFlg) {
        cntUpFuncId = undefined;
        counter = 0;
        bgStopFlg = false;
      }
      bgcountDisp.innerHTML = `${counter.toString()} `;

      if (cntUpFuncId) {
        window.clearTimeout(cntUpFuncId);
        cntUpFuncId = window.setTimeout(cntUpFunc, 100);
      }
    };

    cntUpFuncId = window.setTimeout(cntUpFunc, 100);
  };

  resetBt.onclick = () => {
    bgStopFlg = true;
  };

  bgFunc();
};
