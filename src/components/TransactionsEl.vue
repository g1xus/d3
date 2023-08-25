<template>
  <div class="transactions-el">
    <div class="transactions-el__field">Sender: {{transaction.userAddress.id}}</div>
    <div class="transactions-el__field">Receiver: {{transaction.userAddress.id}}</div>
    <div class="transactions-el__field">Amount: {{`${transaction.tokenAmountOut} ${transaction.tokenOutSym} `}}</div>
    <div class="transactions-el__field">Date: {{new Date(transaction.timestamp * 1000)}}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  transaction: Object
})
const {transaction} = props
</script>

<style lang="sass">
.transactions-el
  background-color: #FED6BC
  display: inline-block
  padding: 10px
  width: 31%
  margin-bottom: 20px
  &__field
    font-size: 14px
    margin-bottom: 5px
</style>