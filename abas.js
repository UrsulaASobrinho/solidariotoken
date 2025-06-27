
    // Lógica para alternar as abas
    function openTab(evt, tabName) {
      const tabContents = document.getElementsByClassName('tab-content');
      for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
        tabContents[i].classList.remove('active');
      }

      const tabButtons = document.getElementsByClassName('tab-button');
      for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
      }

      document.getElementById(tabName).style.display = 'block';
      document.getElementById(tabName).classList.add('active');
      evt.currentTarget.classList.add('active');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const welcomeTabButton = document.querySelector('.tab-button[onclick*="openTab(event, \'welcome\')"]');
        if (welcomeTabButton) {
            welcomeTabButton.click();
        }
    });

    function showFeedback(message, type) {
        const activeTabContent = document.querySelector('.tab-content.active');
        const feedbackDivCurrentTab = activeTabContent ? activeTabContent.querySelector('#feedbackMessage') : null;

        if (feedbackDivCurrentTab) {
            feedbackDivCurrentTab.textContent = message;
            feedbackDivCurrentTab.className = type;
            feedbackDivCurrentTab.style.display = 'block';
            setTimeout(() => {
                feedbackDivCurrentTab.style.display = 'none';
            }, 5000);
        } else {
            console.warn("Elemento #feedbackMessage não encontrado na aba ativa.");
        }
    }
    function connectWallet() { console.log('Conectando carteira...'); showFeedback('Conectando à sua carteira...', 'success'); }
    function mint() { console.log('Mintando tokens...'); showFeedback('Mintando tokens...', 'success'); }
    function burn() { console.log('Queimando tokens...'); showFeedback('Queimando tokens...', 'success'); }
    function pause() { console.log('Pausando contrato...'); showFeedback('Contrato pausado.', 'success'); }
    function unpause() { console.log('Despausando contrato...'); showFeedback('Contrato despausado.', 'success'); }
