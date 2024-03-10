
document.addEventListener("DOMContentLoaded", function() {
    const images = [" 1.png", "2.png", "3.png"]; // Chemin vers vos images
    let currentIndex = 0;
    const sliderImage = document.getElementById('slider-image');
    sliderImage.src = images[currentIndex]; // Définissez la première image
    sliderImage.style.opacity = 1; // Rendez la première image visible

    function changeImage() {
        // Fondu sortant de l'image actuelle
        sliderImage.style.opacity = 0;

        // Changez l'image après que l'effet de fondu est terminé
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Calculez l'index suivant
            sliderImage.src = images[currentIndex]; // Changez l'image
            sliderImage.style.opacity = 1; // Fondu entrant pour la nouvelle image
        }, 2000); // Correspond à la durée de la transition CSS
    }

    setInterval(changeImage, 4000); // Changez l'image toutes les 4 secondes
});

var galaxyMining = {
    account: null,
    contract: null,
    userAccount: null,
    secondContract: null,
    dividends: null,


    connectContract: async function() {
       const ABI =[{"inputs":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"ADContract","type":"address"},{"internalType":"uint256","name":"Vpercent","type":"uint256"},{"internalType":"uint256","name":"ForHold","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"A","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"UserToUpgrade","type":"address"},{"internalType":"uint256","name":"LevelToBuy","type":"uint256"}],"name":"BuyLevel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"UserToUpgrade","type":"address"},{"internalType":"uint256","name":"LevelToBuy","type":"uint256"}],"name":"BuyLevelByOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"UserToCheck","type":"address"}],"name":"CheckUserLastUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim_DIV","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"G56Matrix","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"USER","type":"address"}],"name":"GetDivPerSec","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_To","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HoldFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_To","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"HoldFundsbyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"LastUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Level10Income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NumberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"SetRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newpercent","type":"uint256"}],"name":"SetVirtualPercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"NewAddress","type":"address"}],"name":"SetWeeklyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"TotalIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"UserTo","type":"address"}],"name":"UpdateLastUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UplineEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"VirtualDownline","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"VirtualParent","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WeeklyContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"availableDiv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"calculateDiv","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directIncomefrom10","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"directPartnersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"divPerSecInEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDirectPartners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastLevelBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRegistration","outputs":[{"internalType":"uint256","name":"userID","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTotalTeamSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTotalVirtualTeamSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"hasLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint256","name":"_requiredLevel","type":"uint256"}],"name":"hasRequiredLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"l","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDivClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastLevelBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"UserToRegister","type":"address"},{"internalType":"address","name":"referrerAddress","type":"address"}],"name":"registerUser","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"UserToRegister","type":"address"},{"internalType":"address","name":"referrerAddress","type":"address"}],"name":"registerUserByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newfees","type":"uint256"}],"name":"setholdingFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalDivClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInevest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLevels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"USERTO","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateDivPerSecByOWner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userPartners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userVirtualPartners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"virtualReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

          const Address = "0x597b599d2D197C49456b1C20Aae2C4BF1576396d";

          try {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.account = (await web3.eth.getAccounts())[0];
            this.contract = new web3.eth.Contract(ABI, Address);
            console.log("Connected to smart contract");
        } catch (error) {
            console.error("Error connecting to contract: ", error);
        }
    },



 


connectWallet: async function() {
    if (window.ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            this.userAccount = accounts[0];
            this.updateWalletButton();

            // Mettre à jour le texte dans #contractStatus
            const contractStatus = document.getElementById("contractStatus");
            if (this.contract) {
                contractStatus.textContent = "Connected to smart contract";
            } else {
                contractStatus.textContent = "Not connected to smart contract";
            }

            // Autres actions après la connexion au portefeuille...
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else {
        console.log("Ethereum environment not detected. Please install MetaMask!");

        // Mettre à jour le texte dans #contractStatus
        const contractStatus = document.getElementById("contractStatus");
        contractStatus.textContent = "Bnb Smart Chain environment not detected. Please install MetaMask!";
    }
},

connectSecondContract: async function () {


    const SecContractABI =[{"inputs":[{"internalType":"address","name":"_existingContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BnbClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CheckUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"DailyEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"GetDirectPartners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"IsAlreadyThere","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MaxEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"MaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"NumberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Participate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"UpdateDailyRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"UserAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"existingContract","outputs":[{"internalType":"contract IExistingContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeBNBClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"hold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isPossible","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isThereNow","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"joiningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"recenteFreeBNBTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBNBclaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
    

    
     const SecContractAddress = "0x1D24B310bf8bd6c29a46c1eA4EDBc3Eacc2b30Ac";

try {
this.secondContract = new web3.eth.Contract(SecContractABI, SecContractAddress);
console.log("Connected to second smart contract");
} catch (error) {
console.error("Error connecting to second contract: ", error);
}
},

async CheckUserState() {
    const isUserRegisteredIn1st = await this.contract.methods.isRegistered(this.account).call();
    const isThereInSec = await this.secondContract.methods.isThereNow(this.account).call();

    if (isUserRegisteredIn1st) {
        console.log("User Already Registered In Galaxy");
        window.location.href = "Post.html";

    } else if (isThereInSec) {
        const TotalBNBClaimed = await this.secondContract.methods.freeBNBClaimed(this.account).call();
        const TotalBNBClaimedBNB =TotalBNBClaimed / 18000000000000000000 ;
        document.getElementById('totalBNB').getElementsByTagName('p')[0].innerText = `${TotalBNBClaimedBNB} BNB`;
        
       console.log(`the user has Claimed ${TotalBNBClaimedBNB}`);
        console.log("User Available");

    } else {
        document.getElementById('newUserAlert').style.display = 'block';
        
        this.attachEventToParticipateButton();
    }
},

async Participate() {
    try {
        await this.secondContract.methods.Participate().send({ from: this.account });
        alert("Participation successful!");
        window.location.reload();
    } catch (error) {
        console.error("Participation failed:", error);
        alert("Participation failed. Please try again.");
    }
},

attachEventToParticipateButton() {
    const button = document.getElementById('startMining');
    // Assurez-vous de ne pas ajouter plusieurs fois le même écouteur d'événements
    button.removeEventListener('click', this.Participate.bind(this));
    button.addEventListener('click', this.Participate.bind(this));
},

async updateDividendes() {
    try {
      const Useraddress = this.account;
      const lastUpdateTimestamp = await this.getLastUpdateTimestamp(Useraddress);
      const currentTimeStamp = Math.floor(Date.now() / 1000);
      const timeDifferenceInSeconds = currentTimeStamp - lastUpdateTimestamp;
      
      // Mise à jour des dividendes initiaux basés sur la différence de temps
      this.dividends = timeDifferenceInSeconds * (0.0001 / 86400); // 0.0001 BNB par jour
      
      // Mise à jour initiale des dividendes affichés
      document.getElementById('dividendsPerSecond').innerText = `${this.dividends.toFixed(10)} BNB`;
      
      // Mise à jour des dividendes chaque seconde
      setInterval(() => this.updateDividends(), 1000);
    } catch (error) {
      console.error('Error updating dividends:', error);
    }
  },

  async getLastUpdateTimestamp(Useraddress) {
    try {
      const NoTime = 0;
      const lastJoiningDate = await this.secondContract.methods.joiningTime(Useraddress).call();
      const lastUpdate = await this.secondContract.methods.recenteFreeBNBTime(Useraddress).call();
      
      return lastUpdate === NoTime ? lastJoiningDate : lastUpdate;
    } catch (error) {
      console.error('Error getting last update timestamp:', error);
      return 0; // Fournit une valeur par défaut en cas d'erreur
    }
  },

  async updateDividends() {
    this.dividends += (0.0001 / 86400);
    document.getElementById('dividendsPerSecond').innerText = `${this.dividends.toFixed(10)} BNB`;
  },
    init: async function () {
        await this.connectContract();
        await this.connectSecondContract();
        await this.CheckUserState();
        await this.UpdateDividendes();
    
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length === 0) {
            console.error("No Ethereum accounts found.");
            return;
        }

        this.userAccount = accounts[0];
        const truncatedAddress = this.userAccount.substring(0, 6) + '...' + this.userAccount.substring(this.userAccount.length - 4);
        $('.wallet-address').text(truncatedAddress);

    

   


    }
};





$(document).ready(async () => {
    try {
        await galaxyMining.init();
    } catch (error) {
        console.error("Error in Ethereum interaction:", error);
    }
});



