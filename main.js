const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2)
  const y = pointerY.toFixed(2)
  const xp = (pointerX / window.innerWidth).toFixed(2)
  const yp = (pointerY / window.innerHeight).toFixed(2)
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--xp', xp)
  document.documentElement.style.setProperty('--y', y)
  document.documentElement.style.setProperty('--yp', yp)
}
document.body.addEventListener('pointermove', syncPointer)

document.getElementById('showStructure').addEventListener('click', function() {
  const pValue = document.getElementById('pSelect').value;
  const tplValue = document.getElementById('tplSelect').value;
  const lifeValue = document.getElementById('lifeSelect').value;
  const typeValue = document.getElementById('typeSelect').value;
  const rigideOption = document.getElementById('rigideOptions').value;

  if (!pValue || !tplValue || !lifeValue || !typeValue || !rigideOption) {
      alert("Veuillez sélectionner des options pour P, TPL et Durée de vie et type de chqussée, type de zone climatique.");
      return;
  }

  const structureOutput = document.getElementById('structureOutput');
  structureOutput.innerHTML = ''; 

  if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
      const structureHTML = `
          <div class="structure-container">
              <div class="rectangles-above">
                  <div class="rectangle-container">
                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                      <div class="black-line"></div>
                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                      <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                  </div>
                  <div class="rectangle-container">
                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                      <div class="black-line"></div>
                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                      <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                  </div>
                  <div class="rectangle-container">
                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                      <div class="black-line"></div>
                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                      <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                  </div>
                  <div class="rectangle-container">
                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                      <div class="black-line"></div>
                      <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                      <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                  </div>
              </div>
              <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px;">10 AC</div>
          </div>
      `;
      structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
            <div class="structure-container">
                <div style="display: flex; align-items: flex-end;">
                    <div>
                        <div class="rectangles-above">
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-green" style="height: 12px; font-size: 8px; padding: 1px;">12 PC</div>
                                <div class="rectangle green" style="height: 20px; font-size: 8px; padding: 1px;">20 BL</div>
                            </div>
                        </div>
                        <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 GNB</div>
                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 f2</div>
                    </div>
                </div>
            </div>
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
             <div class="structure-container">
                <div style="display: flex; align-items: flex-end;">
                    <div>
                        <div class="rectangles-above">
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f3</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                <div class="rectangle red" style="height: 30px; font-size: 10px; padding: 2px;">30 f2</div>
                            </div>
                            <div class="rectangle-container">
                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                <div class="black-line"></div>
                                <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                            </div>
                        </div>
                        <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 430px;">10 AC</div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 10px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 GNB</div>
                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 1px; width: 100px;">25 f1</div>
                    </div>
                </div>
            </div>
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-green" style="height: 12px; font-size: 8px; padding: 1px;">12 PC</div>
                        <div class="rectangle green" style="height: 20px; font-size: 8px; padding: 1px;">20 BL</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-green" style="height: 15px; font-size: 8px; padding: 1px;">15 GNB</div>
                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 f2</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        <div class="rectangle green" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-green" style="height: 20px; font-size: 8px; padding: 1px;">20 GNB</div>
                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 1px;">20 f1</div>
                    </div>
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
           <div class="structure-container">
                  <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                          <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                          <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GBB</div>
                          <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GBB</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                          <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GBB</div>
                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                          <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GBB</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                          <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 f2</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 10px; width: 100%; grid-column: 3 / -1;">
                      |..........Couche de base en matériau non lié..............|....................................................Couche de base en grave bitume GBB...............................................|
                  </div>
              </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                    <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 3px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                            <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 10px; font-size: 8px; padding: 2px;">10 GBB</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 12px; font-size: 9px; padding: 2px;">12 GBB</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |Couche de base en matériau non lié|................Couche de base en grave bitume GBB.....................|
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                            <div class="rectangle green" style="height: 10px; font-size: 9px; padding: 2px;">10 GBF</div>
                        </div>
                   </div>
                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave bitume GBB
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GND</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                        <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-green" style="height: 15px; font-size: 8px; padding: 1px;">15 GVC</div>
                        <div class="rectangle green" style="height: 20px; font-size: 8px; padding: 1px;">20 f2</div>
                    </div>
                     <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 10px; padding: 1px; width: 100px;">4 ECF</div>
                        <div class="rectangle light-green" style="height: 20px; font-size: 8px; padding: 1px;">20 GNB</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNA</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-green" style="height: 15px; font-size: 8px; padding: 1px;">15 GNB</div>
                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 1px;">20 f1</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                    </div>
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                          <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                      </div>
                      <div class="rectangle-container">
                          <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                          <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 8px; font-size: 7px; padding: 2px;">8 GBB</div>
                          <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                      </div>
                      <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle red" style="height: 8px; font-size: 7px; padding: 2px;">8 GBB</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                      </div>
                    </div>
                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 10px; width: 100%; grid-column: 3 / -1;">
                      |..........Couche de base en matériau non lié..............|....................................................Couche de base en grave bitume GBB...............................................|
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                       <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                           <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |..Couche de base en matériau non lié..|..Couche de base en grave bitume GBB..|
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                            <div class="rectangle pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">8 GBB</div>
                            <div class="rectangle green" style="height: 10px; font-size: 9px; padding: 2px;">10 GBF</div>
                        </div>
                   </div>
                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave bitume GBB
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2 ou f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2 ou f3</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-green" style="height: 7px; font-size: 8px; padding: 1px;">7 PC</div>
                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                    </div>
                     <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 6px; font-size: 7px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 1px;">20 GNB</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 14px; font-size: 10px; padding: 2px;">15 GNB</div>
                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNA</div>
                    </div>
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle green" style="height: 5px; font-size: 8px; padding: 1px; width: 100px;">4 EF</div>
                        <div class="rectangle light-green" style="height: 20px; font-size: 8px; padding: 1px;">20 GNB</div>
                    </div>
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 GNA</div>
                    </div>
                     <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                        <div class="black-line"></div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                    </div>
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GNA</div>
                        </div>
                        <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GVC</div>
                        </div>
                        <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNA</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                        <div class="rectangle-container">
                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                          <div class="black-line"></div>
                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                          <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                            <div class="black-line"></div>
                            <div class="rectangle light-red" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 f1ouf2</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-red" style="height: 10px; font-size: 9px; padding: 2px;">8 GBB</div>
                            <div class="rectangle green" style="height: 15px; font-size: 9px; padding: 2px;">15 f1ouf2</div>
                        </div>
                   </div>
                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                       |...............................................Couche de base en matériau non lié.....................................................|........Couche de base en grave bitume GBB........|
                
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                       <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                       </div>
                        <div class="rectangle-container">
                            <div class="rectangle light-red" style="height: 7px; font-size: 7px; padding: 2px;">5 EB</div>
                            <div class="rectangle red" style="height: 9px; font-size: 8px; padding: 2px;">8 GBB</div>
                            <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |...Couche de base en matériau non lié...|..Couche de base en grave bitume GBB..|
                </div>
            </div> 
        `;
        
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Souple') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">10 GBB</div>
                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 7px; padding: 2px;">6 EB</div>
                            <div class="rectangle light-pink" style="height: 10px; font-size: 9px; padding: 2px;">8 GBB</div>
                            <div class="rectangle green" style="height: 10px; font-size: 9px; padding: 2px;">10 GBF</div>
                        </div>
                   </div>
                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave bitume GBB
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 8px; font-size: 10px; padding: 2px;">8 GE</div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 f2</div>
                    </div>
                     <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 15px; font-size: 10px; padding: 2px;">15 GE</div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                     <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                        <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div class="rectangle light-green" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                           <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                           <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                           <div class="rectangle pink" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC2</div>
                           <div class="rectangle light-red" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... Couche de base en grave émulsion...|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GE</div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle red" style="height: 10px; font-size: 9px; padding: 2px;">10 GE</div>
                           <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2ouf1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 28px; font-size: 10px; padding: 2px;">28 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 24px; font-size: 10px; padding: 2px;">24 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                           <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                           <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                           <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 27px; font-size: 10px; padding: 2px;">27 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                           <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 27px; font-size: 10px; padding: 2px;">27 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ........Couche de base en grave émulsion.............|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                </div>
            </div> 
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                           <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                           <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC2</div>
                           <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 25px; font-size: 10px; padding: 2px;">25 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                        <div class="black-line"></div>
                        <div class="rectangle red" style="height: 8px; font-size: 8px; padding: 2px;">8 GE</div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2</div>
                    </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle red" style="height: 10px; font-size: 9px; padding: 2px;">10 GE</div>
                           <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f2ouf1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 24px; font-size: 10px; padding: 2px;">24 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                           <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                           <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 28px; font-size: 10px; padding: 2px;">28 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 25px; font-size: 10px; padding: 2px;">25 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2.|
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                           <div class="black-line"></div>
                           <div class="rectangle red" style="height: 10px; font-size: 10px; padding: 2px;">10 GE</div>
                           <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                        </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 21px; font-size: 10px; padding: 2px;">21 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |............ Couche de base en grave émulsion............|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                </div>
            </div> 
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle pink" style="height: 6px; font-size: 8px; padding: 2px;">6 EB</div>
                        <div class="rectangle red" style="height: 12px; font-size: 10px; padding: 2px;">12 GE</div>
                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 f1</div>
                    </div>
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                           <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      |... ..........Couche de base en grave émulsion.......|.Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1.|
                </div>
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M2
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 23px; font-size: 10px; padding: 2px;">23 GAC2</div>
                           <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC1</div>
                            <div class="rectangle green" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 2px;">6 EB</div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC1</div>
                            <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GAC2</div>
                           <div class="rectangle light-red" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 2px;">6 EB</div>
                            <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                            <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                           <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                           <div class="black-line"></div>
                           <div class="rectangle light-red" style="height: 27px; font-size: 10px; padding: 2px;">27 GAC2</div>
                        </div>
                        <div class="rectangle-container">
                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF(exp)</div>
                            <div class="black-line"></div>
                            <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 GAC1</div>
                            <div class="rectangle green" style="height: 17px; font-size: 10px; padding: 2px;">17 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Semi-rigide') {
        const structureHTML = `
         <div class="structure-container">
                <div class="rectangles-above">
                        <div class="rectangle-container">
                            <div class="rectangle red" style="height: 7px; font-size: 8px; padding: 2px;">6 EB</div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                            <div class="rectangle green" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC1</div>
                      </div>
                  </div>
                  <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                      Couche de base en grave ciment type1 ou type2; catégorie de matèrieux M1
                </div>
            </div> 
        `;
        structureOutput.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
        const structureHTML = `
              <div class="structure-container">
                  <div style="display: flex; align-items: flex-end;">
                      <div>
                          <div class="rectangles-above">
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                  <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                  <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                  <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                  <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                              </div>
                              <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                  <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                              </div>
                          </div>
                             <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                             <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                             Couche de base en grave non traitée
                         </div>
              </div>
        `;
          structureOutput.innerHTML = structureHTML;
        } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
            const structureHTML = `
                <div class="structure-container">
                    <div style="display: flex; align-items: flex-end;">
                        <div>
                            <div class="rectangles-above">
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                    <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                    <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                    <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                </div>
                                <div class="rectangle-container">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                    <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                </div>
                            </div>
                               <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                               <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                               Couche de base en grave non traitée
                           </div>
                </div>
            `;
            structureOutput.innerHTML = structureHTML;
          } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
              const structureHTML = `
                  <div class="structure-container">
                      <div style="display: flex; align-items: flex-end;">
                          <div>
                              <div class="rectangles-above">
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                      <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                      <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                      <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                      <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                  </div>
                                  <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                      <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                  </div>
                              </div>
                                 <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                 <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                 Couche de base en grave non traitée
                             </div>
                  </div>
              `;
              structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
                } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                    const structureHTML = `
                        <div class="structure-container">
                            <div style="display: flex; align-items: flex-end;">
                                <div>
                                    <div class="rectangles-above">
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                            <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                            <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                            <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                            <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                            <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                        </div>
                                    </div>
                                       <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                       <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                       Couche de base en grave non traitée
                                   </div>
                        </div>
                    `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                        <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                          <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f3</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                          <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GNB</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                          <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 540px;">10 AC</div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                        <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f2</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                   <div class="structure-container">
                      <div style="display: flex; align-items: flex-end;">
                         <div>
                             <div class="rectangles-above">
                                 <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                  <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                 <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                 <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                          </div>
                          <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                       </div>
                       <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                         <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                         <div class="black-line"></div>
                         <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                         <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                         <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                       </div>
                    </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                  </div>
               `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                      <div style="display: flex; align-items: flex-end;">
                         <div>
                             <div class="rectangles-above">
                                 <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                  <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                 <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                 <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                          </div>
                          <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                       </div>
                       <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                         <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                         <div class="black-line"></div>
                         <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                         <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                         <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                       </div>
                    </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                      <div style="display: flex; align-items: flex-end;">
                         <div>
                             <div class="rectangles-above">
                                 <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                  <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                 <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                 <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                          </div>
                          <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                       </div>
                       <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                         <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                         <div class="black-line"></div>
                         <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                         <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                         <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                       </div>
                    </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                      <div style="display: flex; align-items: flex-end;">
                         <div>
                             <div class="rectangles-above">
                                 <div class="rectangle-container">
                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                  <div class="black-line"></div>
                                  <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                  <div class="rectangle pink" style="height: 25px; font-size: 10px; padding: 2px;">25 f2</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNA</div>
                                 <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                               <div class="rectangle-container">
                                 <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                 <div class="black-line"></div>
                                 <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                 <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                               </div>
                          </div>
                          <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 320px;">10 AC</div>
                       </div>
                       <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                         <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                         <div class="black-line"></div>
                         <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                         <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                         <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                       </div>
                    </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                        .............................................Couche de base en grave non traitée .........................../ Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 20px; font-size: 10px; padding: 2px;">20 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GNR</div>
                                        <div class="rectangle red" style="height: 25px; font-size: 10px; padding: 2px;">25 f1</div>
                                    </div>
                                </div>
                                   <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 35px; font-size: 10px; padding: 1px; width: 100px;">35 F1</div>
                                    <div class="rectangle blue" style="height: 10px; font-size: 10px; padding: 1px; width: 100px;">10 AC</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                        <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                    </div>
                                </div>
                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                   Couche de base en grave non traitée
                               </div>
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
              } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                  const structureHTML = `
                      <div class="structure-container">
                          <div style="display: flex; align-items: flex-end;">
                              <div>
                                  <div class="rectangles-above">
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                      </div>
                                      <div class="rectangle-container">
                                          <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                          <div class="black-line"></div>
                                          <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                          <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                      </div>
                                  </div>
                                     <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                     Couche de base en grave non traitée
                                 </div>
                      </div>
                  `;
                  structureOutput.innerHTML = structureHTML;
                } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                    const structureHTML = `
                        <div class="structure-container">
                            <div style="display: flex; align-items: flex-end;">
                                <div>
                                    <div class="rectangles-above">
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                            <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                        </div>
                                    </div>
                                       <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                       Couche de base en grave non traitée
                                   </div>
                        </div>
                    `;
                    structureOutput.innerHTML = structureHTML;
                  } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                      const structureHTML = `
                          <div class="structure-container">
                              <div style="display: flex; align-items: flex-end;">
                                  <div>
                                      <div class="rectangles-above">
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                          </div>
                                          <div class="rectangle-container">
                                              <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                              <div class="black-line"></div>
                                              <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                              <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                          </div>
                                      </div>
                                         <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                         Couche de base en grave non traitée
                                     </div>
                          </div>
                      `;
                      structureOutput.innerHTML = structureHTML;
                    } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                        const structureHTML = `
                            <div class="structure-container">
                                <div style="display: flex; align-items: flex-end;">
                                    <div>
                                        <div class="rectangles-above">
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                            </div>
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                            </div>
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                            </div>
                                            <div class="rectangle-container">
                                                <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                <div class="black-line"></div>
                                                <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                            </div>
                                        </div>
                                           <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                           Couche de base en grave non traitée
                                       </div>
                            </div>
                        `;
                        structureOutput.innerHTML = structureHTML;
                      } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                          const structureHTML = `
                              <div class="structure-container">
                                  <div style="display: flex; align-items: flex-end;">
                                      <div>
                                          <div class="rectangles-above">
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                              </div>
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                              </div>
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                              </div>
                                              <div class="rectangle-container">
                                                  <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                  <div class="black-line"></div>
                                                  <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                  <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                              </div>
                                          </div>
                                             <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                             Couche de base en grave non traitée
                                         </div>
                              </div>
                          `;
                          structureOutput.innerHTML = structureHTML;
                        } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                            const structureHTML = `
                                <div class="structure-container">
                                    <div style="display: flex; align-items: flex-end;">
                                        <div>
                                            <div class="rectangles-above">
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GND</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GNC</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-red" style="height: 15px; font-size: 10px; padding: 2px;">15 GVC</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-green" style="height: 8px; font-size: 8px; padding: 1px;">7 PC</div>
                                                    <div class="rectangle green" style="height: 15px; font-size: 8px; padding: 1px;">15 BL</div>
                                                </div>
                                            </div>
                                               <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               Couche de base en grave non traitée
                                           </div>
                                </div>
                            `;
                            
                          structureOutput.innerHTML = structureHTML;
                        } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                            const structureHTML = `
                                <div class="structure-container">
                                    <div style="display: flex; align-items: flex-end;">
                                        <div>
                                            <div class="rectangles-above">
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                                </div>
                                                <div class="rectangle-container">
                                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                    <div class="black-line"></div>
                                                    <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                                </div>
                                            </div>
                                               <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                               Couche de base en grave non traitée
                                           </div>
                                </div>
                            `;
                            structureOutput.innerHTML = structureHTML;
                          } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                              const structureHTML = `
                                  <div class="structure-container">
                                      <div style="display: flex; align-items: flex-end;">
                                          <div>
                                              <div class="rectangles-above">
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                                  </div>
                                                  <div class="rectangle-container">
                                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                      <div class="black-line"></div>
                                                      <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                                  </div>
                                              </div>
                                                 <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                                 Couche de base en grave non traitée
                                             </div>
                                  </div>
                              `;
                              structureOutput.innerHTML = structureHTML;
                            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                                const structureHTML = `
                                    <div class="structure-container">
                                        <div style="display: flex; align-items: flex-end;">
                                            <div>
                                                <div class="rectangles-above">
                                                    <div class="rectangle-container">
                                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                        <div class="black-line"></div>
                                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                                    </div>
                                                    <div class="rectangle-container">
                                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                        <div class="black-line"></div>
                                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                                    </div>
                                                    <div class="rectangle-container">
                                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                                        <div class="black-line"></div>
                                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                                    </div>
                                                </div>
                                                   <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                                   Couche de base en grave non traitée
                                               </div>
                                    </div>
                                `;       
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                              <div class="rectangles-above">
                                   <div class="rectangle-container">
                                      <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                      <div class="black-line"></div>
                                      <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GNB</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 20px; font-size: 10px; padding: 2px;">20 GVC</div>
                                    </div>
                                    </div>
                                    <div style="color: black; font-size: 10px; text-align: center; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                      Couche de base en grave non traitée
                            </div>
                        </div>
               `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                        </div>
                                        </div>
                                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                             .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                        </div>
                                        </div>
                                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                             .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                        </div>
                                        </div>
                                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                             .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 20px; font-size: 8px; padding: 1px; width: 100px;">20 GNA</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle red" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GNA</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 GVC</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 F1</div>
                                        </div>
                                        <div class="rectangle-container">
                                            <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                            <div class="black-line"></div>
                                            <div class="rectangle green" style="height: 8px; font-size: 8px; padding: 1px; width: 100px;">8 GE</div>
                                            <div class="rectangle light-pink" style="height: 15px; font-size: 8px; padding: 1px; width: 100px;">15 f1</div>
                                        </div>
                                        </div>
                                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                                             .............................Couche de base en grave non traitée........................... / Couche de base en grave emulsion
                    </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 10px; font-size: 8px; padding: 1px; width: 100px;">10 GE</div>
                                    <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 1px; width: 100px;">15 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Zone instable') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                        <div class="black-line"></div>
                                        <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 GNR</div>
                                    </div>
                                </div>
                               </div>
                               <div style="display: flex; flex-direction: column; gap: 0; margin-left: 10px;">
                                    <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">RS/ECF</div>
                                    <div class="black-line"></div>
                                    <div class="rectangle green" style="height: 12px; font-size: 8px; padding: 1px; width: 100px;">12 GE</div>
                                    <div class="rectangle pink" style="height: 20px; font-size: 10px; padding: 1px; width: 100px;">20 F1</div>
                                </div>
                        </div>
                        <div style="color: black; font-size: 10px; text-align: centre; margin-top: 8px; width: 100%; grid-column: 3 / -1;">
                         Couche de base en grave non traitée / Couche de base en grave emulsion
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                        <div class="rectangle light-red" style="height: 10px; font-size: 10px; padding: 2px;">10 AC</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Semi-humide') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL5' && lifeValue === 'Longuee' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P1' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P2' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL1' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL2' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 16px; font-size: 10px; padding: 2px;">16 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL3' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 4m</div>
                                        <div class="rectangle green" style="height: 18px; font-size: 10px; padding: 2px;">18 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL4' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                    <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 20px; font-size: 10px; padding: 2px;">20 BC</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL5' && lifeValue === 'Longuee' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL5' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 22px; font-size: 10px; padding: 2px;">22 BC</div>
                                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 GD</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">BC : béton de ciment</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">GD : grave drainante</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P3' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Courte' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
                structureOutput.innerHTML = structureHTML;
            } else if (pValue === 'P4' && tplValue === 'TPL6' && lifeValue === 'Longue' && typeValue === 'Rigide' && rigideOption === 'Désertique') {
                const structureHTML = `
                     <div class="structure-container">
                        <div style="display: flex; align-items: flex-end;">
                            <div>
                                <div class="rectangles-above">
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle pink" style="height: 15px; font-size: 10px; padding: 2px;">15 GAC2</div>
                                    </div>
                                    <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-bottom: 2px;">Longueur de dalle : 5m</div>
                                        <div class="rectangle green" style="height: 23px; font-size: 10px; padding: 2px;">23 BC</div>
                                        <div class="rectangle yellow" style="height: 12px; font-size: 10px; padding: 2px;">12 Bm</div>
                                    </div>
                                        <div class="rectangle-container">
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">Bm : béton mairge</div>
                                        <div style="color: black; font-size: 10px; text-align: center; margin-botton: 2px;">AC : couche anticontaminant</div>
                                    </div>
                                </div>
                        </div>
                  </div>
                `;
        structureOutput.innerHTML = structureHTML;
  } else {
      structureOutput.innerHTML = `<p>Aucune structure trouvée pour les sélections actuelles.</p>`;
  }
})
document.getElementById('ne-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const npl = parseFloat(document.getElementById('npl').value);
    const largeurChaussee = parseFloat(document.getElementById('largeur-chaussee').value);
    const cam = parseFloat(document.getElementById('cam').value);
    const tauxAccroissement = parseFloat(document.getElementById('taux-accroissement').value);
    const dureeVie = parseFloat(document.getElementById('duree-vie').value);
    const typeVoie = parseFloat(document.getElementById('type-voie').value);
    const cvc = parseFloat(document.getElementById('cvc').value);
    const typeStructure = document.getElementById('type-structure').value;
  
    const C1 = (largeurChaussee > 4 && largeurChaussee < 6) ? 1.5 : 1;
    const C2 = cam;
    const C3 = ((Math.pow(1 + tauxAccroissement, dureeVie) - 1) / tauxAccroissement) / ((Math.pow(1.04, dureeVie) - 1) / 0.04);
    const C4 = typeVoie;
    const N4 = 365 * ((Math.pow(1.04, dureeVie) - 1) / 0.04);
    const CVC = cvc;
    const NE = npl * C1 * C2 * C3 * C4 * N4 * CVC;
  
    let resultText = `NE = ${NE.toFixed(2)}`;
  
    if (typeStructure === "Souple" && dureeVie === 10 && NE < 8800) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Souple" && dureeVie === 10 && NE < 45000 && NE > 8800) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Souple" && dureeVie === 10 && NE < 140000 && NE > 45000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Souple" && dureeVie === 10 && NE < 380000 && NE > 140000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Souple" && dureeVie === 10 && NE < 570000 && NE > 380000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Souple" && dureeVie === 10 && NE < 1100000 && NE > 570000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 8800) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Semi-rgide" && dureeVie === 10 && NE < 45000 && NE > 8800) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 140000 && NE > 45000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 380000 && NE > 140000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 570000 && NE > 380000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Semi-rigide" && dureeVie === 10 && NE < 1100000 && NE > 570000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Souple" && dureeVie === 15 && NE < 22000) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Souple" && dureeVie === 15 && NE < 110000 && NE > 22000) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Souple" && dureeVie === 15 && NE < 350000 && NE > 110000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Souple" && dureeVie === 15 && NE < 950000 && NE > 350000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Souple" && dureeVie === 15 && NE < 1400000 && NE > 950000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Souple" && dureeVie === 15 && NE < 2500000 && NE > 1400000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 22000) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Semi=rigide" && dureeVie === 15 && NE < 110000 && NE > 22000) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 350000 && NE > 110000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 950000 && NE > 350000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 1400000 && NE > 950000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Semi-rigide" && dureeVie === 15 && NE < 2500000  && NE > 1400000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Souple" && dureeVie === 20 && NE < 22000) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Souple" && dureeVie === 20 && NE < 110000 && NE > 22000) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Souple" && dureeVie === 20 && NE < 350000 && NE > 110000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Souple" && dureeVie === 20 && NE < 950000 && NE > 350000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Souple" && dureeVie === 20 && NE < 1400000 && NE > 950000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Souple" && dureeVie === 20 && NE < 2500000 && NE > 1400000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 22000) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Semi=rigide" && dureeVie === 20 && NE < 110000 && NE > 22000) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 350000 && NE > 110000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 950000 && NE > 350000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 1400000  && NE > 950000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Semi-rigide" && dureeVie === 20 && NE < 2500000 && NE > 1400000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Rigide" && dureeVie === 15 && NE < 4000) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Rigide" && dureeVie === 15 && NE < 27000 && NE > 4000) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Rigide" && dureeVie === 15 && NE < 61000 && NE > 27000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Rigide" && dureeVie === 15 && NE < 160000 && NE > 61000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Rigide" && dureeVie === 15 && NE < 230000 && NE > 160000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Rigide" && dureeVie === 15 && NE < 3700000  && NE > 230000) {
        resultText += " (TPL6)";
    }

    if (typeStructure === "Rigide" && dureeVie === 20 && NE < 4000) {
        resultText += " (TPL1)";
    }

    if (typeStructure === "Rigide" && dureeVie === 20 && NE < 27000 && NE > 4000) {
        resultText += " (TPL2)";
    }

    if (typeStructure === "Rigide" && dureeVie === 20 && NE < 61000 && NE > 27000) {
        resultText += " (TPL3)";
    }

    if (typeStructure === "Rigide" && dureeVie === 20 && NE < 160000 && NE > 61000) {
        resultText += " (TPL4)";
    }

    if (typeStructure === "Rigide" && dureeVie === 20 && NE < 230000 && NE > 160000) {
        resultText += " (TPL5)";
    }
  
    if (typeStructure === "Rigide" && dureeVie === 20 && NE < 370000 && NE > 230000) {
        resultText += " (TPL6)";
    }
    document.getElementById('resultat').textContent = resultText;
});

document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.ring').style.display = 'none';
    document.getElementById('newInterface').style.display = 'block';
});

document.getElementById('structureButton').addEventListener('click', function() {
    document.getElementById('newInterface').style.display = 'none';
    document.getElementById('structureInterface').style.display = 'block';
});

document.getElementById('Trafic').addEventListener('click', function() {
    document.getElementById('newInterface').style.display = 'none';
    document.getElementById('Traficinterface').style.display = 'block';
});

document.getElementById('forme').addEventListener('click', function() {
    document.getElementById('newInterface').style.display = 'none';
    document.getElementById('formeinterface').style.display = 'block';
});

document.getElementById('typeSelect').addEventListener('change', function() {
    const rigideSubMenu = document.getElementById('rigideSubMenu');
    if (this.value === 'Rigide') {
        rigideSubMenu.style.display = 'block';
    } else {
        rigideSubMenu.style.display = 'none';
    }
});

document.getElementById('back').addEventListener('click', function() {
    document.getElementById('Traficinterface').style.display = 'none';
    document.getElementById('newInterface').style.display = 'block';
});

document.getElementById('buttonback').addEventListener('click', function() {
    document.getElementById('formeinterface').style.display = 'none';
    document.getElementById('newInterface').style.display = 'block';
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('structureInterface').style.display = 'none';
    document.getElementById('newInterface').style.display = 'block';
});
        

document.getElementById('structureforme').addEventListener('click', function() {
    const pValue = document.getElementById('Pj').value;
    const tplValue = document.getElementById('TPLi').value;
    const stiValue = document.getElementById('Sti').value;
  
    if (!pValue || !tplValue || !stiValue ) {
        alert("Veuillez sélectionner des options pour P, TPL et STi .");
        return;
    }
  
    const formestructure = document.getElementById('formestructure');
    formestructure.innerHTML = ''; 
  
    if (pValue === 'P1' && tplValue === 'TPL1' && stiValue === 'St0' ) {
        const structureHTML = `
            <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL1' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 F2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL1' && stiValue === 'St2' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL2' && stiValue === 'St0' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL2' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 F2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL2' && stiValue === 'St2' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P1' && tplValue === 'TPL3' && stiValue === 'St0' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL3' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 20px; font-size: 10px; padding: 2px;">20 F2</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL3' && stiValue === 'St2' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 30px; font-size: 10px; padding: 2px;">30 F2</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL4' && stiValue === 'St0' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 40px; font-size: 10px; padding: 2px;">40 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL4' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 F1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL4' && stiValue === 'St2' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL4' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 50px; font-size: 10px; padding: 2px;">50 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL5' && stiValue === 'St0' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 40px; font-size: 10px; padding: 2px;">40 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL5' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 F1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL5' && stiValue === 'St2' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL5' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 50px; font-size: 10px; padding: 2px;">50 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL6' && stiValue === 'St0' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 40px; font-size: 10px; padding: 2px;">40 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P2' && tplValue === 'TPL6' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 25px; font-size: 10px; padding: 2px;">25 F1</div>
                        <div class="rectangle pink" style="height: 10px; font-size: 8px; padding: 2px;">10 AC</div>
                    </div>
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 25px; font-size: 10px; padding: 2px;">25 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL6' && stiValue === 'St2' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                        <div class="rectangle light-pink" style="height: 40px; font-size: 10px; padding: 2px;">40 F1</div>
                    </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else if (pValue === 'P3' && tplValue === 'TPL6' && stiValue === 'St1' ) {
        const structureHTML = `
           <div class="structure-container">
                <div class="rectangles-above">
                    <div class="rectangle-container">
                      <div class="rectangle light-red" style="height: 50px; font-size: 10px; padding: 2px;">50 MT</div>
                  </div>
            </div>
        `;
        formestructure.innerHTML = structureHTML;
    } else {
    formestructure.innerHTML = `<p>Aucune structure trouvée pour les sélections actuelles.</p>`;
  }
});