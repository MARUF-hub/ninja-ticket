// ============= updateValue function ============

const updateValue = (id, isIncrease) => {
  const input = document.getElementById(id);
  const inputValue = input.value;
  const inputNumber = parseInt(inputValue);
  let newNumber;

  if (!isIncrease & (inputNumber >= 0)) {
    if (inputNumber === 0) {
      newNumber = 0;
      input.value = newNumber;
      return;
    }
    newNumber = inputNumber - 1;
  }
  if (isIncrease) {
    newNumber = inputNumber + 1;
  }
  input.value = newNumber;
  // return newNumber;
};

// ================= update subtotal function =============

const totalUpdate = () => {
  const subTotal = document.getElementById("subTotal");
  const tax = document.getElementById("tax-amount");
  const total = document.getElementById("total");

  const firstClassValue = document.getElementById("first-class-input").value;
  const economyValue = document.getElementById("economy-input").value;

  let firstClassPrice = firstClassValue * 150;
  let economyPrice = economyValue * 100;

  const subTotalPrice = firstClassPrice + economyPrice;
  const newTax = subTotalPrice * 0.1;
  const newTotal = subTotalPrice + newTax;

  subTotal.innerText = subTotalPrice;
  tax.innerText = newTax;
  total.innerText = newTotal;

  detailsModal(firstClassValue, economyValue, newTotal);
};

// ================= modal function =================

const detailsModal = (vip, low, total) => {
  const vipTicket = document.getElementById("vipTicket");
  const lowTicket = document.getElementById("lowTicket");
  const totalTicket = document.getElementById("totalTicket");
  const totalPrice = document.getElementById("totalPriceModal");
  let totalTicketNumber = parseInt(vip) + parseInt(low);

  vipTicket.innerText = vip;
  lowTicket.innerText = low;
  totalTicket.innerText = totalTicketNumber;
  totalPrice.innerText = total;
};

// ========================= Btn handler ======================

// ================= 1. plus ===================

// first-class plus

document.getElementById("first-plus").addEventListener("click", () => {
  updateValue("first-class-input", true);
  totalUpdate();
});

// economy plus

document.getElementById("economy-plus").addEventListener("click", () => {
  updateValue("economy-input", true);
  totalUpdate();
});

// =================== 2. minus ==================

// first-class minus

document.getElementById("first-minus").addEventListener("click", () => {
  updateValue("first-class-input", false);
  totalUpdate();
});

//  economy minus

document.getElementById("economy-minus").addEventListener("click", () => {
  updateValue("economy-input", false);
  totalUpdate();
});

// =================== input Handler =============

// 1. First Class input

document.getElementById("first-class-input").addEventListener("blur", () => {
  totalUpdate();
});

// 1. economy input

document.getElementById("economy-input").addEventListener("blur", () => {
  totalUpdate();
});
