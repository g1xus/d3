<template>
  <div class="connection">
    <button class="connection-button" @click="connectWallet">Connect</button><br>
    <div class="connection-status" :class="{'connection-status_active':!!currentAccount==true}">Is connected: {{!!currentAccount}}</div>
    <div class="connection-address">Address: {{currentAccount}}</div>
  </div>
</template>

<script setup>
import {ref} from "vue";
let currentAccount = ref(null)
async function connectWallet() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
  currentAccount.value = accounts[0];
}

window.ethereum.request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      console.error(err);
    });

window.ethereum.on('accountsChanged', handleAccountsChanged);

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    currentAccount.value = null
  } else if (accounts[0] !== currentAccount.value) {
    currentAccount.value = accounts[0];
  }
}

</script>

<style lang="sass">
.connection
  &-button
    border: none
    padding: 10px
    border-radius: 10px
    text-decoration: none
    color: white
    background: #0B63F6
    box-shadow: 0 5px 0 #003CC5
    margin-bottom: 10px
    &:hover
      cursor: pointer
      background: #003CC5
      box-shadow: none
      position: relative
      top: 5px
  &-status
    display: inline-block
    padding: 5px
    border-radius: 5px
    background-color: #9f1957
    margin-bottom: 10px
    &_active
      background-color: #A6CC5E
  &-address
    margin-bottom: 10px
</style>