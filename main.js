import { abi } from "./modules/abi.js";
const contractAddress = "0x92afF6B8A965960d689E68875B7990a517E130E6";

let web3, contractInstance, CurentAccount;

const registration = document.querySelector(".registration_wrap");
const autorization = document.querySelector(".autorization_wrap");
const regDiv = document.querySelector(".div-reg");
const autDiv = document.querySelector(".div-autoriz");
const regList = document.querySelector(".reg-addressl");
const autList = document.querySelector(".aut-addressl");
const regBtn = document.querySelector(".reg-btn");
const autBtn = document.querySelector(".aut-btn");
const divHeader = document.querySelector(".div-header");
const addressReg = document.querySelector(".reg-address");
const addressAut = document.querySelector(".aut-address");
const passwordAut = document.querySelector(".aut-password");
const roleBlock = document.querySelector(".role_wrap");
const roleNumber = document.querySelector(".role");
const shops_wrap = document.querySelector(".shops_wrap");
const createShop = document.querySelector(".shopCreate_wrap");
const shopCreateBtn = document.querySelector(".shopCreateBtn");
const shopList = document.querySelector(".shopList");
const inpAdr = document.querySelector(".shopAddress");
const inpCity = document.querySelector(".shopCity");
const deleteWrap = document.querySelector(".shopDelete_wrap");
const btnDeleteShop = document.querySelector(".btnDeleteShop");
const UpToSell = document.querySelector(".upToSeller_wrap");
const addP = document.querySelector(".addP");
const addS = document.querySelector(".addS");
const buttonUpS = document.querySelector(".btnUpS");
const newAdminWrap = document.querySelector(".newAdmin_wrap");
const inpA = document.querySelector(".inpA");
const btnUpA = document.querySelector(".btnUpA");
const changeRoleA_wrap = document.querySelector(".changeRoleA_wrap");
const desiredRoleA = document.querySelector(".desiredRoleA");
const btnDesiredA = document.querySelector(".btnDesiredA");
const requestChangeRole = document.querySelector(".requestChangeRole_wrap");
const desRoleM = document.querySelector(".desRoleM");
const btnDesRoleM = document.querySelector(".btnDesRoleM");
const acceptCRole_wrap = document.querySelector(".acceptCRole_wrap");
const inpR = document.querySelector(".inpR");
const bntR = document.querySelector(".btnR");
const changeMySelf_wrap = document.querySelector(".changeMySelf_wrap");
const changeMySelfInp = document.querySelector(".changeMySelfInp");
const btnchangeMySelf = document.querySelector(".btnchangeMySelf");
const reqAddress = document.querySelector(".desiredShop");
const shopPlace_wrap = document.querySelector(".shopPlace_wrap");
const shopAddressSeller = document.querySelector(".shopAddressSeller");

function SupAut() {
  registration.style.display = "none";
  autorization.style.display = "flex";
}

function SupReg() {
  registration.style.display = "flex";
  autorization.style.display = "none";
}

function SetAut() {
  autDiv.addEventListener("click", () => {
    SupAut();
  });
}
SetAut();

function SetReg() {
  regDiv.addEventListener("click", () => {
    SupReg();
  });
}
SetReg();

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  contractInstance = new web3.eth.Contract(abi, contractAddress);
}
network();

async function showAccs() {
  const accs = await web3.eth.getAccounts();
  // console.log(accs);
}
showAccs();

async function putInfoDataList() {
  const accs = await web3.eth.getAccounts();
  for (let index = 0; index < accs.length; index++) {
    const option = document.createElement("option");
    option.textContent = accs[index];
    regList.append(option);
  }
  for (let index = 0; index < accs.length; index++) {
    const option = document.createElement("option");
    option.textContent = accs[index];
    autList.append(option);
  }
}
putInfoDataList();

// Функцию вынести
async function Registration() {
  const regAddress = addressReg.value;
  const nicknameInput = document.querySelector(".reg-nickname");
  const passwordInput = document.querySelector(".reg-password");
  const regLog = await contractInstance.methods
    .Registration(nicknameInput.value, passwordInput.value)
    .send({ from: regAddress, gas: 2000000 });
  console.log(regLog);
  SupAut();
}

// Функцию вынести
async function Autorization() {
  CurentAccount = addressAut.value;
  const aShow = await contractInstance.methods.aShow(CurentAccount).call();
  // console.log(aShow.user_ShopAddress);
  const autLog = await contractInstance.methods
    .Autorization(passwordAut.value)
    .send({ from: CurentAccount, gas: 2000000 });
  // console.log(autLog);
  autorization.style.display = "none";
  divHeader.innerHTML = `<div class="CurAdr">${CurentAccount}</div><div class="deAut">Выйти</div>`;
  DeAuthorization();
  const role = await contractInstance.methods.aShow(CurentAccount).call();
  const roleNum = role.user_Role;
  roleBlock.style.display = "flex";
  shops_wrap.style.display = "flex";
  drawShops();
  if (roleNum == 0) {
    roleNumber.innerHTML = "Пользователь";
    requestChangeRole.style.display = "flex";
    changeMySelf_wrap.style.display = "flex";
  }
  if (roleNum == 1) {
    roleNumber.innerHTML = "Продавец";
    shopPlace_wrap.style.display = "flex";
    shopAddressSeller.textContent = aShow.user_ShopAddress;
  }
  if (roleNum == 2) {
    roleNumber.innerHTML = "Администратор";
    drawForAdmin();
  }
}

// Функцию вынести
function DeAuthorization() {
  const deAut = document.querySelector(".deAut");
  deAut.addEventListener("click", () => {
    registration.style.display = "none";
    autorization.style.display = "flex";
    addressAut.value = "";
    passwordAut.value = "";
    divHeader.innerHTML = `
  <div class="div-reg">Регистрация</div>
  <div class="div-autoriz">Авторизация</div>`;
    SetAut();
    SetReg();
    leaveLog();
    roleBlock.style.display = "none";
    shops_wrap.style.display = "none";
    createShop.style.display = "none";
    deleteWrap.style.display = "none";
    newAdminWrap.style.display = "none";
    UpToSell.style.display = "none";
    changeRoleA_wrap.style.display = "none";
    requestChangeRole.style.display = "none";
    acceptCRole_wrap.style.display = "none";
    changeMySelf_wrap.style.display = "none";
    shopPlace_wrap.style.display = "none";
  });
}

// Функцию вынести
async function leaveLog() {
  const leave = await contractInstance.methods
    .DeAuthorization()
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(leave);
}

autBtn.addEventListener("click", () => {
  Autorization();
});

regBtn.addEventListener("click", () => {
  Registration();
});

function drawForAdmin() {
  createShop.style.display = "flex";
  deleteWrap.style.display = "flex";
  UpToSell.style.display = "flex";
  newAdminWrap.style.display = "flex";
  changeRoleA_wrap.style.display = "flex";
  acceptCRole_wrap.style.display = "flex";
}

async function drawShops() {
  shopList.innerHTML = ``;
  const showShops = await contractInstance.methods.ShowAllShops().call();
  const aShow = await contractInstance.methods.aShow(CurentAccount).call();
  for (let index = 0; index < showShops.length; index++) {
    if (showShops[index].shop_Status == true && aShow.user_Role == 2) {
      shopList.innerHTML += `
        <div class="shop"><div class="el"><p>Номер магазина</p><p>${index}</p></div>
        <div class="el"><p>Город магазина</p><p>${showShops[index].shop_City}</p></div>
        <div class="el"><p>Адрес магазина</p><p>${showShops[index].shop_WalletAddress}</p></div></div>`;
    } else {
      if (aShow.user_ShopAddress == showShops[index].shop_WalletAddress) {
        shopList.innerHTML += `
        <div class="shop"><div class="el"><p>Номер магазина</p><p>${index}</p></div>
        <div class="el"><p>Город магазина</p><p>${showShops[index].shop_City}</p></div>
        <div class="el"><p>Адрес магазина</p><p>${showShops[index].shop_WalletAddress}</p></div></div>`;
      }
    }
    if (showShops[index].shop_Status == true && aShow.user_Role == 0) {
      shopList.addEventListener("click", (e) => {
        let item = e.target.closest(".shop");
        // console.log(item);
      } )
      shopList.innerHTML += `<div class="shop"><div class="el"><p>Номер магазина</p><p class="idShop">${index}</p></div>
      <div class="el"><p>Город магазина</p><p>${showShops[index].shop_City}</p></div>
      <div class="el"><p>Адрес магазина</p><p>${showShops[index].shop_WalletAddress}</p></div>
      <div class="el"><p>Оставить комментарий</p></div>
      <div class="el"><input class="inpComm" placeholder="Отзыв"><input class="inpRate" placeholder="Оценка"><button class="btnComm">Отправить</button></div>
      <div class="elementDiv"></div></div>`;
      const allShop= shopList.querySelectorAll(".shop")
      for(let shop of allShop){

        let idShop = shop.querySelector(".idShop")

        commentOnShop(shop,idShop.textContent)
        // const dataComment = await contractInstance.methods.getComm(idShop.textContent).call()
        // console.log(dataComment)
        // let divComm = shop.querySelector(".elementDiv")
        // divComm.innerHTML += `<p> ${dataComment}</p>`
        shop.addEventListener("click", (e) => {

          let item = e.target.closest(".btnComm");
          // console.log(item);
          if(item){
            let comment = shop.querySelector(".inpComm")
            let rate = shop.querySelector(".inpRate")
            
            console.log(idShop.textContent, rate.value, comment.value);
            addComm(shop,idShop.textContent, rate.value, comment.value);

          }
        } )
      }

      async function commentOnShop(shopDiv,id_shop){
        const dataComment = await contractInstance.methods.getComm(id_shop).call()
        if(!dataComment){
          return
        }
        let divComm = shopDiv.querySelector(".elementDiv")
        divComm.innerHTML = ``;
        for(let i = 0; i < dataComment.length; i++) {
          divComm.innerHTML += `<div class="commm"><span>Адрес отправителя</span><p class="pp">${dataComment[i].user_WalletAddress}</p>
          <span>Комментарий</span><p class="pp">${dataComment[i].user_FeedBack}</p><span>Оценка магазину</span><p class="pp">${dataComment[i].stars}</p></div>`
        }
        
      }

      async function addComm(commnetDiv,index, rate, comment) {
        
        const comm = await contractInstance.methods
          .createReview(index, rate, comment)
          .send({ from: CurentAccount, gas: 2000000 });
        console.log(comm);
        if(comm){
          commentOnShop(commnetDiv,index)
        }
      }
    }
  }
  console.log(showShops);
}

shopCreateBtn.addEventListener("click", () => {
  CreateNewShop();
  inpAdr.value = "";
  inpCity.value = "";
});

async function CreateNewShop() {
  const createNew = await contractInstance.methods
    .CreateNewShop(inpAdr.value, inpCity.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(createNew);
  drawShops();
}

btnDeleteShop.addEventListener("click", () => {
  deleteShop();
});

async function deleteShop() {
  const inpShopDel = document.querySelector(".deleteShopInp");
  const deleteS = await contractInstance.methods
    .DropShop(inpShopDel.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(deleteS);
  drawShops();
}

buttonUpS.addEventListener("click", () => {
  upToSeller();
});

async function upToSeller() {
  const up = await contractInstance.methods
    .UpdateToSeller(addP.value, addS.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(up);
}

btnUpA.addEventListener("click", () => {
  UpToAdmin();
});

async function UpToAdmin() {
  const upA = await contractInstance.methods
    .UpdateToAdmin(inpA.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(upA);
}

btnDesiredA.addEventListener("click", () => {
  changeDesired();
});

async function changeDesired() {
  const change = await contractInstance.methods
    .AdminChangeRoleMyself(desiredRoleA)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(change);
}

btnDesRoleM.addEventListener("click", () => {
  createRequest();
});

async function createRequest() {
  const createReq = await contractInstance.methods
    .SubmitRequest(desRoleM.value, reqAddress.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(createReq);
}

bntR.addEventListener("click", () => {
  chacngeFromRequest();
});

async function chacngeFromRequest() {
  const changeReq = await contractInstance.methods
    .AcceptNewRole(inpR.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(changeReq);
}

btnchangeMySelf.addEventListener("click", () => {
  changeMySelf();
});

async function changeMySelf() {
  const change = await contractInstance.methods
    .SellerChangeRoleMyself(changeMySelfInp.value)
    .send({ from: CurentAccount, gas: 2000000 });
  console.log(change);
}
