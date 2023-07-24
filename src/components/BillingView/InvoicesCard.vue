<script>
import InvoiceItem from '@/components/BillingView/InvoiceItem.vue'

import axios from 'axios'
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { InvoiceItem },
  data() {
    return {
      invoices: []
    }
  },
  mounted() {
    let app = this
    axios.get('http://localhost:3001/invoices').then(function (res) {
      app.invoices = res.data
    })
  }
}
</script>

<template>
  <div class="card border-0 shadow h-100">
    <div class="card-header border-0 bg-white pt-3">
      <div class="row align-items-center">
        <div class="col-6"><h6 class="mb-0">Invoices</h6></div>
        <div class="col-6 d-flex justify-content-end">
          <a href="javascript:;" class="btn-primary">View all</a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <InvoiceItem
          v-for="invoice in invoices"
          :key="invoice.code"
          :date="invoice.date"
          :code="invoice.code"
          :price="invoice.price"
        ></InvoiceItem>
      </ul>
    </div>
  </div>
</template>
