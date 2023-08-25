<template>
  <div class="transactions">
    <TransactionsEl v-for="transaction in result.swaps" :key="transaction.id" :transaction="transaction"></TransactionsEl>
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import TransactionsEl from "@/components/TransactionsEl.vue";

const { result } = useQuery(gql`
      query {
        swaps(first: 5) {
          id
          userAddress {
            id
          }
          tokenAmountOut
          tokenOutSym
          timestamp
        }
      }
    `)
</script>

<style lang="sass">
.transactions
  display: flex
  flex-wrap: wrap
  justify-content: space-between
</style>