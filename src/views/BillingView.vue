<script>
import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'
import BillingCard from '@/components/BillingView/BillingCard.vue'
import PaymentMethod from '@/components/BillingView/PaymentMethod.vue'
import InvoicesCard from '@/components/BillingView/InvoicesCard.vue'
import BillDetails from '@/components/BillingView/BillDetails.vue'
import TransactionItem from '@/components/BillingView/TransactionItem.vue'
import axios from 'axios'

export default {
  components: {
    TopNav,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
    BillingCard,
    PaymentMethod,
    InvoicesCard,
    BillDetails,
    TransactionItem
  },
  data() {
    return {
      bills: []
    }
  },

  created() {
    let app = this
    axios.get('http://localhost:3001/bills').then(function (res) {
      app.bills = res.data
    })
  }
}
</script>
<template>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
    <div class="container"><TopNav name="Billing"></TopNav></div>
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-6">
            <div class="card bg-gradient bg-dark shadow">
              <div class="overflow-hidden">
                <img
                  src="../../public/assets/img/illustrations/pattern-tree.svg"
                  class="position-absolute opacity-10 start-0 top-0 w-100 h-100"
                  alt="pattern-tree"
                />
                <!-- <span class="mask bg-gradient-dark opacity-10"></span> -->
                <div class="card-body position-relative">
                  <span class="material-symbols-outlined text-white"> wifi </span>
                  <h5 class="text-white mt-4 mb-5 pb-2">
                    4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                  </h5>
                  <div class="d-flex">
                    <div class="d-flex w-25rem">
                      <div class="me-4">
                        <p class="text-white text-sm opacity-8 mb-0 fw-light">Card Holder</p>
                        <h6 class="text-white mb-0">Jack Peterson</h6>
                      </div>
                      <div>
                        <p class="text-white text-sm opacity-8 mb-0 fw-light">Expires</p>
                        <h6 class="text-white mb-0">11/22</h6>
                      </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-end">
                      <img
                        class="w-25 mt-2"
                        src="../../public/assets/img/logos/mastercard.png"
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6 h-100">
                <BillingCard
                  icon="account_balance"
                  heading="Salary"
                  number="+$2000
"
                >
                  <template #default>Belong Interactive</template></BillingCard
                >
              </div>
              <div class="col-6 h-100">
                <BillingCard icon="account_balance_wallet" heading="Paypal" number="$455.00">
                  <template #default>Freelance Payment</template></BillingCard
                >
              </div>
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="card border-0 shadow">
              <div class="card-header border-0 bg-white pt-3">
                <div class="row">
                  <div class="col-6 d-flex align-items-center">
                    <h6 class="m-0">Payment Method</h6>
                  </div>
                  <div class="col-6 text-end">
                    <a
                      href="javascript:;"
                      class="btn bg-dark bg-gradient text-white py-2 text-uppercase px-3 fw-semibold"
                      >+ Add new card</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <PaymentMethod logo="mastercard" cardNumber="7852"></PaymentMethod>
                  </div>
                  <div class="col-6">
                    <PaymentMethod logo="visa" cardNumber="5482"></PaymentMethod>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <InvoicesCard></InvoicesCard>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-7">
        <div class="card border-0 shadow">
          <div class="card-header bg-white border-0 pt-4">
            <h6 class="mb-0">Billing Information</h6>
          </div>
          <div class="card-body">
            <ul class="list-group gap-4">
              <BillDetails
                v-for="bill in bills"
                :key="bill.email"
                :name="bill.name"
                :company="bill.company"
                :email="bill.email"
                :vat="bill.vat"
              ></BillDetails>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="card h-100 border-0 shadow">
          <div class="card-header bg-white border-0 pt-4">
            <div class="row">
              <div class="col-6"><h6>Your Transaction's</h6></div>
              <div class="col-6 align-items-center d-flex text-muted gap-2 justify-content-end">
                <span class="material-symbols-outlined fs-5"> date_range </span>
                <small>23 - 30 March 2020</small>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h6 class="opacity-75 text-uppercase text-xs fw-bold mb-4">Newest</h6>
            <ul class="list-group">
              <TransactionItem
                status="down"
                company="Nettflix"
                date="27 March 2020, at 12:30 PM"
                price="2,500"
              ></TransactionItem>
              <TransactionItem
                status="up"
                company="Apple"
                date="27 March 2020, at 04:30 AM"
                price="2,000"
              ></TransactionItem>
            </ul>
            <h6 class="opacity-75 text-uppercase text-xs fw-bold mb-4 mt-5">Yesterday</h6>
            <ul class="list-group">
              <TransactionItem
                status="up"
                company="Stripe"
                date="26 March 2020, at 13:45 PM"
                price="750"
              ></TransactionItem>
              <TransactionItem
                status="up"
                company="HubSpot"
                date="26 March 2020, at 12:30 PM"
                price="1,000"
              ></TransactionItem>
              <TransactionItem
                status="up"
                company="Creative Tim"
                date="26 March 2020, at 08:30 AM"
                price="2,500"
              ></TransactionItem>
              <TransactionItem
                status="pending"
                company="Webflow"
                date="26 March 2020, at 05:00 AM"
                price="2,500"
              ></TransactionItem>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </main>
</template>
<style scoped lang="scss">
@import '../public/assets/main.scss';
main {
  width: 75rem;
}
</style>
