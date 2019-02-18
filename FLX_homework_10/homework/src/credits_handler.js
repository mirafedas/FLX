const tax = 0.5;
const oneHundredPercents = 100;
const maxCardsNumber = 3; 

function UserCard(key) {
    this.key = key;
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    this.writeToLogs = function (operationType, credits) {
        const operationTime = new Date().toLocaleString('en-GB');
        const logs = {
            operationType,
            credits,
            operationTime
        }
        this.historyLogs.push(logs);
    };
    this.putCredits = function (creditsToPut) {
        this.balance += creditsToPut;
        this.writeToLogs('Received credits', creditsToPut);
    };
    this.takeCredits = function (creditsToTake) {
        if (this.balance < creditsToTake) {
            console.error('Not enought credits.');
            return false;
        } else if (this.transactionLimit < creditsToTake) {
            console.error('Transaction limit exceeded.');
            return false;
        }
        this.balance -= creditsToTake;
        this.writeToLogs('Withdrawal of credits', creditsToTake);
        return true;
    };
    this.setTransactionLimit = function (amountOfCredits) {
        this.transactionLimit = amountOfCredits;
        this.writeToLogs('Transation limit change', amountOfCredits);
    };
    this.transferCredits = function (creditsToTransfer, cardNumber) {
        const taxes = creditsToTransfer * tax / oneHundredPercents;
        const creditsMinusTaxes = creditsToTransfer + taxes;
        const isOperationValid = this.takeCredits(creditsMinusTaxes);
        if (!isOperationValid) {
           return;
        }
        cardNumber.putCredits(creditsToTransfer);
    };    
    this.getCardOptions = () => {
        const { balance, transactionLimit, historyLogs, key } = this;
        console.log({ balance, transactionLimit, historyLogs, key });
        
    };
  }


  class UserAccount {
      constructor(name) {
          this.name = name;
          this.cards = [];
      }

      addCard() {
          const cardsLength = this.cards.length;
          if (cardsLength < maxCardsNumber) {
              this.cards.push(new UserCard(cardsLength + 1));
          }
      }

      getCardByKey(key) {
          let card;
          this.cards.forEach(c => {
              if (c.key === key) {
                  card = c;
              }
          });
          return card;
      }
  }