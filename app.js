const contractAddress = "SEU_ENDERECO_DO_CONTRATO";
const abi = [/* Cole aqui o ABI do contrato */];

let provider, signer, contract;

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById("walletAddress").innerText = `Conectado: ${address}`;
    contract = new ethers.Contract(contractAddress, abi, signer);
    updateBalance();
  } else {
    alert("MetaMask não detectado!");
  }
}
//Coloquei uma verificação se a carteira está conectada!!!
async function updateBalance() {
  if (!signer) {
    alert("Por favor, conecte sua carteira primeiro.");
    return;
  }
  const address = await signer.getAddress();
  const balance = await contract.balanceOf(address);
  document.getElementById("balance").innerText = `${ethers.utils.formatUnits(balance, 18)} TST`;
}

async function mint() {
  if (!signer) {
    alert("Por favor, conecte sua carteira primeiro.");
    return;
  }
  const to = document.getElementById("mintAddress").value;
  const amount = ethers.utils.parseUnits(document.getElementById("mintAmount").value, 18);
  await contract.mint(to, amount);
  updateBalance();
}

async function burn() {
  if (!signer) {
    alert("Por favor, conecte sua carteira primeiro.");
    return;
  }
  const amount = ethers.utils.parseUnits(document.getElementById("burnAmount").value, 18);
  await contract.burn(amount);
  updateBalance();
}

async function pause() {
  if (!signer) {
    alert("Por favor, conecte sua carteira primeiro.");
    return;
  }
  await contract.pause();
}

async function unpause() {
  if (!signer) {
    alert("Por favor, conecte sua carteira primeiro.");
    return;
  }
  await contract.unpause();
}
