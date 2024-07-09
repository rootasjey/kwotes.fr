<template>
  <div class="super-container">
    <h1 class="title">
      Terms of Use
      <span class="badge">kwotes</span>
    </h1>

    <h2 class="subtitle">
      Acceptance of Terms
    </h2>

    <div class="paragraph">
      By downloading, installing, or using the Kwotes app ("the App"), you agree to be bound by these Terms of Use. If
      you
      do not agree to these terms, please do not use the App.
    </div>

    <h2 class="subtitle">
      Use of the App
    </h2>

    <div class="paragraph">
      Kwotes is provided by CODING BOX for personal, non-commercial use. You may not modify, distribute, transmit,
      display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information
      obtained from the App without prior written permission from CODING BOX.
    </div>

    <h2 class="subtitle">
      User Content
    </h2>

    <div class="paragraph">
      You are solely responsible for any content you submit, post, or display through the App. By submitting content,
      you
      grant CODING BOX a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your
      content.
    </div>

    <h2 class="subtitle">
      Intellectual Property
    </h2>

    <div class="paragraph">
      All content, trademarks, and intellectual property rights in the App are owned by CODING BOX. You may not use our
      trademarks or other intellectual property without our prior written consent.
    </div>

    <h2 class="subtitle">
      Privacy
    </h2>

    <div class="paragraph">
      CODING BOX respects the privacy of our users. We do not collect any personal information from our users.
      Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms of Use by
      reference.
    </div>

    <h2 class="subtitle">
      Modifications to the App and Terms
    </h2>

    <div class="paragraph">
      CODING BOX reserves the right to modify or discontinue the App at any time without notice. We may also revise
      these
      Terms of Use from time to time. Your continued use of the App after any changes constitutes acceptance of the new
      Terms.
    </div>

    <h2 class="subtitle">
      Limitation of Liability
    </h2>

    <div class="paragraph">
      In no event shall CODING BOX be liable for any direct, indirect, incidental, special, or consequential damages
      arising out of or in connection with your use of the App.
      CODING BOX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting
      from your use or inability to use the App.
    </div>

    <h2 class="subtitle">
      Governing Law
    </h2>

    <div class="paragraph">
      These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction where CODING
      BOX is registered, without regard to its conflict of law provisions.
    </div>

    <h2 class="subtitle">
      Contact Us
    </h2>

    <div class="paragraph">
      If you have any questions about these Terms of Use, <ULink to="mailto:hello@kwotes.fr" target="_blank">please contact us</ULink>.
      By using Kwotes, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style scoped>
.super-container {
  max-width: 800px;
  padding: 1em;
  margin: 0 auto;
  margin-top: 42px;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 24px;
    -webkit-text-stroke: 1.7px;

    .badge {
      font-family: 'Fredoka';
      font-size: 14px;
      font-weight: 400;
      -webkit-text-stroke: 0px;
      display: block;
    }
  }

  .subtitle {
    font-size: 22px;
    font-weight: 600;
    -webkit-text-stroke: 0.5px;
  }

  .paragraph {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 3em;
  }

  .paragraph:not(:last-child) {
    margin-bottom: 3em;
  }
}
</style>